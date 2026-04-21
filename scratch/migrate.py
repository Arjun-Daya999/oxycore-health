import re
import os

html_file = 'index.html'
with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

# EXTRACT CSS
style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
if style_match:
    css_content = style_match.group(1).strip()
    
    # Prepend basic Tailwind directives that Next.js uses if needed, or just standard globals
    globals_css = """@tailwind base;
@tailwind components;
@tailwind utilities;

""" + css_content
    with open('app/globals.css', 'w', encoding='utf-8') as f:
        f.write(globals_css)

# EXTRACT BODY STRUCTURE
body_match = re.search(r'<body>\s*(.*?)\s*<script>', content, re.DOTALL)
if body_match:
    body_content = body_match.group(1).strip()
    
    # 1. We must replace the hardcoded form with the <ContactForm /> component.
    # The form currently looks like:
    # <div class="contact-form-wrap" ...> ... </div>
    # Let's cleanly replace the entire <div class="contact-form-wrap" ...> ... </div> 
    # and just insert <ContactForm />
    
    form_pattern = r'<div class="contact-form-wrap"[^>]*>.*?</div>\s*</div>\s*</div>\s*</section>'
    # Actually wait. The <div class="contact-form-wrap"...> has several nested divs.
    # Let's just find the section that handles contact-form-wrap and replace from there to the end of that specific component, or just replace the <form ...> ... </form> tags with <ContactForm />.
    
    # Let's just replace `<form onsubmit="submitForm(event)">...</form>` with `<ContactForm />`
    body_content = re.sub(r'<form onsubmit="submitForm\(event\)".*?</form>', '<ContactForm />', body_content, flags=re.DOTALL)
    
    # Fix standard HTML to JSX differences
    # class -> className
    body_content = body_content.replace('class="', 'className="')
    body_content = body_content.replace('for="', 'htmlFor="')
    
    # SVG attributes (stroke-width to strokeWidth, etc.)
    body_content = body_content.replace('stroke-width="', 'strokeWidth="')
    body_content = body_content.replace('stroke-linecap="', 'strokeLinecap="')
    body_content = body_content.replace('stroke-linejoin="', 'strokeLinejoin="')
    body_content = body_content.replace('fill-rule="', 'fillRule="')
    body_content = body_content.replace('clip-rule="', 'clipRule="')
    
    # Self-closing tags fixing (hr, img, input, source) -- assuming they are already done, but just in case
    # Let's ensure <source ...> without trailing slash gets closed
    body_content = re.sub(r'(<source[^>]*)(?<!/)>', r'\1 />', body_content)
    # <img>
    body_content = re.sub(r'(<img[^>]*)(?<!/)>', r'\1 />', body_content)

    # Some variables like style="display:flex;gap:1.5rem;" to style={{display:'flex', gap:'1.5rem'}}
    body_content = body_content.replace('style="display:flex;gap:1.5rem;"', "style={{display: 'flex', gap: '1.5rem'}}")

    page_tsx = f'''"use client";

import {{ useEffect }} from "react";
import ContactForm from "@/components/ContactForm";

export default function Home() {{
  useEffect(() => {{
    // Extracting animations from the script tag in index.html
    const observer = new IntersectionObserver(
      (entries) => {{
        entries.forEach((entry) => {{
          if (entry.isIntersecting) {{
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }}
        }});
      }},
      {{ threshold: 0.15 }}
    );

    document.querySelectorAll("[data-reveal]").forEach((elem) => {{
      observer.observe(elem);
    }});

    const nav = document.getElementById("nav");
    const handleScroll = () => {{
      if (window.scrollY > 40) {{
        nav?.classList.add("pinned");
      }} else {{
        nav?.classList.remove("pinned");
      }}
    }};
    window.addEventListener("scroll", handleScroll);

    return () => {{
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    }};
  }}, []);

  return (
    <main>
      {body_content}
    </main>
  );
}}
'''
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(page_tsx)
    print("Successfully wrote page.tsx and globals.css")
else:
    print("Could not find body content.")
