import sys

# Replace in ContactForm.tsx
with open('components/ContactForm.tsx', 'r', encoding='utf-8') as f:
    form_content = f.read()

form_content = form_content.replace('Not sure yet — want to learn more', 'Not sure yet, but want to learn more')

with open('components/ContactForm.tsx', 'w', encoding='utf-8') as f:
    f.write(form_content)

# Replace in page.tsx
with open('app/page.tsx', 'r', encoding='utf-8') as f:
    page_content = f.read()

replacements = [
    ('honesty — in our science', 'honesty in our science'),
    ('tissue, organs, and brain — activating your', 'tissue, organs, and brain, activating your'),
    ('clear senescent cells — two', 'clear senescent cells, two'),
    ('programs — HBOT reduces', 'programs. HBOT reduces'),
    ('chosen for one reason — results.', 'chosen for one reason: results.'),
    ('compression therapy — advanced', 'compression therapy, which are advanced'),
    ('your body and goals — not a', 'your body and goals, not a'),
    ('fits your life — no unnecessary delays, no unnecessary trips.', 'fits your life with no unnecessary delays or trips.'),
    ('everything — or send', 'everything, or send'),
    ('phone or email — whichever', 'phone or email, whichever')
]

for old, new in replacements:
    page_content = page_content.replace(old, new)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_content)

