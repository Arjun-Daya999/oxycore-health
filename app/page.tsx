"use client";

import { useEffect } from "react";
import ContactForm from "@/components/ContactForm";
import BeamsBackground from "@/components/BeamsBackground";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  useEffect(() => {
    // Extracting animations from the script tag in index.html
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll("[data-reveal]").forEach((elem) => {
      observer.observe(elem);
    });

    const nav = document.getElementById("nav");
    const handleScroll = () => {
      if (window.scrollY > 40) {
        nav?.classList.add("pinned");
      } else {
        nav?.classList.remove("pinned");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      {/* ══════════════════════════════════
       NAV
  ══════════════════════════════════ */}
  <nav id="nav">
    <div className="container nav-inner">
      <a className="nav-logo" href="#">OxyCore <em>Health</em></a>
      <ul className="nav-menu" id="navMenu">
        <li><a href="#about">About</a></li>
        <li><a href="#benefits">Benefits</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact" className="nav-cta-link">Contact Us</a></li>
      </ul>
      <button className="nav-burger" id="burger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  {/* ══════════════════════════════════
       HERO
  ══════════════════════════════════ */}
  <section id="hero">

    {/* Beams Background */}
    <BeamsBackground className="hero-video-wrap" />

    {/* Inward masking gradient */}
    <div className="hero-mask"></div>

    {/* Content */}
    <div className="hero-content">
      <div className="hero-badge">
        <div className="hero-badge-pip"></div>
        <span>Hyperbaric Oxygen Therapy · Arizona</span>
      </div>
      <h1 className="hero-title">
        Where Oxygen is<br/><em>the Core of Healing.</em>
      </h1>
      <p className="hero-sub">
        Clinical-grade hyperbaric oxygen therapy in a sanctuary built for recovery, longevity, and total-body renewal. Your best self begins here.
      </p>
      <div className="hero-actions">
        <a href="#contact" className="btn btn-gold btn-arrow">Get In Touch</a>
        <a href="#benefits" className="btn btn-ghost">Explore the Science</a>
      </div>
    </div>

    {/* Scroll cue */}
    <div className="hero-scroll">
      <span>Scroll</span>
      <div className="scroll-line"></div>
    </div>

  </section>

  {/* ══════════════════════════════════
       TICKER
  ══════════════════════════════════ */}
  <div className="ticker">
    <div className="ticker-track">
      <div className="ticker-item"><div className="ticker-sep"></div>Clinical-Grade HBOT</div>
      <div className="ticker-item"><div className="ticker-sep"></div>Premium HBOT Chambers</div>
      <div className="ticker-item"><div className="ticker-sep"></div>Post-Surgical Healing</div>
      <div className="ticker-item"><div className="ticker-sep"></div>Accelerated Recovery</div>
      <div className="ticker-item"><div className="ticker-sep"></div>Total-Body Renewal</div>
      <div className="ticker-item"><div className="ticker-sep"></div>Cognitive Enhancement</div>
      <div className="ticker-item"><div className="ticker-sep"></div>Personalized Protocols</div>
      <div className="ticker-item"><div className="ticker-sep"></div>Accelerated Angiogenesis</div>
      <div className="ticker-item"><div className="ticker-sep"></div>Telehealth Consultations</div>
      {/* duplicate for loop */}
      <div className="ticker-item"><div className="ticker-sep"></div>Clinical-Grade HBOT</div>
      <div className="ticker-item"><div className="ticker-sep"></div>Premium HBOT Chambers</div>
      <div className="ticker-item"><div className="ticker-sep"></div>Post-Surgical Healing</div>
      <div className="ticker-item"><div className="ticker-sep"></div>Accelerated Recovery</div>
      <div className="ticker-item"><div className="ticker-sep"></div>Total-Body Renewal</div>
      <div className="ticker-item"><div className="ticker-sep"></div>Cognitive Enhancement</div>
      <div className="ticker-item"><div className="ticker-sep"></div>Personalized Protocols</div>
      <div className="ticker-item"><div className="ticker-sep"></div>Accelerated Angiogenesis</div>
      <div className="ticker-item"><div className="ticker-sep"></div>Telehealth Consultations</div>
    </div>
  </div>

  {/* ══════════════════════════════════
       ABOUT
  ══════════════════════════════════ */}
  <section id="about">
    <div className="container">
      <div className="about-layout">

        {/* Visual */}
        <div className="about-visual-wrap" data-reveal="left">
          <div className="about-visual-main">
            <div className="chamber-art-img-wrap" style={{width: '100%', height: '100%', overflow: 'hidden', borderRadius: '4px', backgroundColor: 'var(--dark)'}}>
              <img 
                src="/oxygen_bubbles.png" 
                alt="Abstract Oxygen Flow Concept" 
                style={{width: '100%', height: '100%', objectFit: 'cover', opacity: 0.95}} 
              />
            </div>
          </div>
          <div className="about-tag">
            <div className="about-tag-top">Arizona</div>
            <div className="about-tag-bottom">Premier Wellness Center</div>
          </div>
        </div>

        {/* Copy */}
        <div className="about-copy">
          <span className="eyebrow" data-reveal="up">Our Story</span>
          <h2 data-reveal="up" data-delay="1">Healing. <em>Elevated.</em></h2>
          <p data-reveal="up" data-delay="2">
            At OxyCore Health, we believe that the most powerful healing tools should be paired with an environment that inspires well-being. We are a state-of-the-art hyperbaric wellness center founded on a singular mission: to enhance the health and vitality of every individual who walks through our doors.
          </p>
          <p data-reveal="up" data-delay="2">
            Equipped with premium hard-shell hyperbaric chambers and guided by caring, expert staff, we deliver cutting-edge oxygen therapy in a sanctuary of calm, precision, and personalized care.
          </p>

          <div className="about-pillars" data-reveal="up" data-delay="3">
            <div className="pillar">
              <div className="pillar-num">01</div>
              <div className="pillar-body">
                <h4>Client-Centric Care</h4>
                <p>Every protocol is personalized. We listen first, then design a recovery plan built around your specific health goals and lifestyle.</p>
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-num">02</div>
              <div className="pillar-body">
                <h4>Innovation at the Core</h4>
                <p>We partner with top physicians and continuously integrate the latest advances in HBOT and wellness technology for your benefit.</p>
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-num">03</div>
              <div className="pillar-body">
                <h4>Integrity & Transparency</h4>
                <p>We operate with full honesty in our science, our pricing, and our outcomes. No promises beyond what the evidence supports.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/* ══════════════════════════════════
       BENEFITS
  ══════════════════════════════════ */}
  <section id="benefits">
    <div className="container--wide">
      <div className="benefits-header" data-reveal="up">
        <span className="eyebrow eyebrow-light">The Science</span>
        <h2>What Hyperbaric Oxygen<br/>Therapy Can Do</h2>
        <p>By utilizing Henry's Law of gas solubility, breathing 100% oxygen under elevated therapeutic pressure allows your blood plasma to become hyperoxygenated. This bypasses the limitations of red blood cells, delivering profound levels of oxygen to damaged tissues and activating deep cellular repair.</p>
      </div>

      <div className="benefits-grid">

        <div className="benefit-item" data-reveal="up" data-delay="1">
          <div className="benefit-icon">
            <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </div>
          <h3>Stem Cell Mobilization</h3>
          <p>Clinical protocols demonstrate that hyperbaric hyperoxia can trigger up to an 800% increase in circulating CD34+ stem cells, directing them to areas of injury for systemic tissue repair and regeneration.</p>
          <span className="benefit-index">01</span>
        </div>

        <div className="benefit-item" data-reveal="up" data-delay="2">
          <div className="benefit-icon">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
          </div>
          <h3>Molecular Inflammation Reduction</h3>
          <p>HBOT produces a potent anti-inflammatory effect by suppressing pro-inflammatory cytokines while promoting healing mediators, effectively halting tissue death and alleviating chronic inflammation.</p>
          <span className="benefit-index">02</span>
        </div>

        <div className="benefit-item" data-reveal="up" data-delay="3">
          <div className="benefit-icon">
            <svg viewBox="0 0 24 24"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.08-4.76A2.5 2.5 0 0 1 7.5 9.5 2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.08-4.76A2.5 2.5 0 0 0 16.5 9.5 2.5 2.5 0 0 0 14.5 2z"/></svg>
          </div>
          <h3>Neuro-Rehabilitation</h3>
          <p>Supported by research in Mild Traumatic Brain Injury and Long COVID, high-pressure oxygen reduces neuroinflammation and awakens "idling neurons," driving significant improvements in memory, focus, and cognitive clarity.</p>
          <span className="benefit-index">03</span>
        </div>

        <div className="benefit-item" data-reveal="up" data-delay="1">
          <div className="benefit-icon">
            <svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
          </div>
          <h3>Accelerated Neovascularization</h3>
          <p>By triggering the release of vital growth factors (VEGF), hyperbaric therapy stimulates the formation of new capillary networks in hypoxic tissues, accelerating recovery for complex wounds, surgical grafts, and injuries.</p>
          <span className="benefit-index">04</span>
        </div>

        <div className="benefit-item" data-reveal="up" data-delay="2">
          <div className="benefit-icon">
            <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3>Enhanced Immune Defense</h3>
          <p>The hyperbaric environment acts as a direct bactericidal agent against anaerobic bacteria and restores the "oxidative burst" capability of white blood cells, strengthening your body's natural infection-fighting mechanisms.</p>
          <span className="benefit-index">05</span>
        </div>

        <div className="benefit-item" data-reveal="up" data-delay="3">
          <div className="benefit-icon">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
          </div>
          <h3>Traumatic Ischemia & Edema Relief</h3>
          <p>For severe swelling or sports injuries, elevated pressure creates a paradoxical vasoconstriction—reducing painful edema while simultaneously delivering plasma-rich oxygen to the injured area.</p>
          <span className="benefit-index">06</span>
        </div>

      </div>
    </div>
  </section>



  {/* ══════════════════════════════════
       SERVICES
  ══════════════════════════════════ */}
  <section id="services">
    <div className="container">

      <div className="services-intro" data-reveal="up">
        <span className="eyebrow">Focused Care</span>
        <h2>Hyperbaric Treatment Plans</h2>
        <p>At OxyCore Health, we specialize exclusively in Hyperbaric Oxygen Therapy. By focusing on a single, powerful modality, we ensure that every session is optimized for your safety, comfort, and clinical results.</p>
      </div>

      {/* Primary: HBOT */}
      <div className="service-primary" data-reveal="up">
        <div className="sp-content">
          <span className="eyebrow">Pricing & Packages</span>
          <h2>Hyperbaric Oxygen<br/><em>Therapy</em></h2>
          <p className="sp-desc">
            Our signature treatments utilize premium hard-shell chambers delivering highly concentrated oxygen at elevated therapeutic pressures. Choose a package that aligns with your specific healing goals.
          </p>
          <div className="pricing-tiers">
            <div className="pricing-tier">
              <div className="pt-header">
                <div className="pt-title">Single Session</div>
                <div className="pt-price">Contact for Details</div>
              </div>
              <div className="pt-time">60–90 Minutes</div>
              <p className="pt-desc">Perfect for acute recovery (like a hangover, intense workout, or jet lag) and getting familiar with the chamber.</p>
            </div>
            <div className="pricing-tier">
              <div className="pt-header">
                <div className="pt-title">Wellness Package</div>
                <div className="pt-price">Contact for Details</div>
              </div>
              <div className="pt-time">10 Sessions • 60–90 Min</div>
              <p className="pt-desc">Designed for sustained athletic recovery, anti-aging benefits, and systemic inflammation reduction.</p>
            </div>
            <div className="pricing-tier">
              <div className="pt-header">
                <div className="pt-title">Clinical Protocol</div>
                <div className="pt-price">Contact for Details</div>
              </div>
              <div className="pt-time">40 Sessions • 60–90 Min</div>
              <p className="pt-desc">The gold standard for deep tissue healing, post-surgical recovery, TBI, and long-term neurological repair.</p>
            </div>
          </div>
          <a href="#contact" className="btn btn-gold btn-arrow">Get In Touch</a>
        </div>
        <div className="sp-visual">
          <div className="chamber-vis">
            <div className="cv-rings">
              <div className="cv-ring"></div>
              <div className="cv-ring"></div>
              <div className="cv-ring"></div>
            </div>
            <div className="cv-pill">
              <div className="cv-port"></div>
            </div>
            <div className="cv-badge">Premium Hard Shell</div>
          </div>
        </div>
      </div>


    </div>
  </section>

  {/* ══════════════════════════════════
       WHY OPTIMUS VITALITY
  ══════════════════════════════════ */}
  <div className="why-strip">
    <div className="container">
      <div className="why-header" data-reveal="up">
        <span className="eyebrow eyebrow-light">Why Choose Us</span>
        <h2>The OxyCore Health Difference</h2>
        <p>We didn't set out to open another wellness clinic. We set out to build the one we'd want to visit ourselves.</p>
      </div>
      <div className="why-grid">
        <div className="why-item" data-reveal="up" data-delay="1">
          <div className="why-num">01</div>
          <h4>Medical-Grade Equipment</h4>
          <p>We utilize top-tier, hard-shell hyperbaric chambers designed for comfort, safety, and profound clinical outcomes.</p>
        </div>
        <div className="why-item" data-reveal="up" data-delay="2">
          <div className="why-num">02</div>
          <h4>Personalized Protocols</h4>
          <p>We use data and physician partnerships to design a plan specific to your body and goals, not a one-size-fits-all schedule.</p>
        </div>
        <div className="why-item" data-reveal="up" data-delay="3">
          <div className="why-num">03</div>
          <h4>Telehealth Access</h4>
          <p>Virtual consultations and follow-ups so your care fits your life with no unnecessary delays or trips.</p>
        </div>
        <div className="why-item" data-reveal="up" data-delay="4">
          <div className="why-num">04</div>
          <h4>Arizona's Trusted Center</h4>
          <p>Building the go-to recovery resource for local athletes, healthcare providers, and wellness-focused families across the state.</p>
        </div>
      </div>
    </div>
  </div>

  {/* ══════════════════════════════════
       FAQ
  ══════════════════════════════════ */}
  <FAQSection />

  {/* ══════════════════════════════════
       CONTACT
  ══════════════════════════════════ */}
  <section id="contact">
    <div className="container">
      <div className="contact-layout">

        {/* Info */}
        <div>
          <span className="eyebrow" data-reveal="up">Get In Touch</span>
          <h2 className="contact-info" data-reveal="up" data-delay="1">
            Begin Your<br/><em>Journey.</em>
          </h2>
          <p data-reveal="up" data-delay="2" style={{marginBottom: '2rem'}}>Ready to take the next step? The best way to get started is a conversation. Call us directly and we'll walk you through everything, or send us a note below and we'll reach back out to you.</p>

          {/* Unified Contact Card */}
          <div className="call-card" data-reveal="up" data-delay="3">
            
            <div className="cc-item">
              <div className="cc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 5.55 5.55l1.51-1.51a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div className="cc-body">
                <div className="cc-label">Call to Schedule</div>
                <div className="cc-val-large">(000) 000-0000</div>
                <div className="cc-note">Mon–Fri 8 AM–7 PM · Sat 9–5 · Sun 10–4</div>
              </div>
            </div>

            <div className="cc-divider"></div>

            <div className="cc-item">
              <div className="cc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div className="cc-body">
                <div className="cc-label">Location</div>
                <div className="cc-val">Arizona · Exact address coming soon</div>
              </div>
            </div>

            <div className="cc-item">
              <div className="cc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div className="cc-body">
                <div className="cc-label">Email</div>
                <div className="cc-val">oxycorehealth@gmail.com</div>
              </div>
            </div>

          </div>
        </div>

        {/* Inquiry Form */}
        <div className="contact-form-wrap" data-reveal="right" data-delay="2">
          <div className="form-head">
            <h3>Send Us a Note</h3>
            <p>Not ready to call? Tell us a little about yourself and what you're looking to achieve. We'll reach out within 24 hours by phone or email, whichever you prefer.</p>
          </div>
          {/* TODO: wire form submission to company email (oxycorehealth@gmail.com) via backend/email service */}
          <ContactForm />
        </div>

      </div>
    </div>
  </section>

  {/* ══════════════════════════════════
       FOOTER
  ══════════════════════════════════ */}
  <footer>
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">OxyCore <em>Health</em></span>
          <p>Enhancing health and vitality through clinical-grade hyperbaric oxygen therapy and innovative wellness practices. Arizona's premier destination for whole-body renewal.</p>
          <span className="footer-brand-tag">Where Oxygen is the Core of Healing</span>
        </div>
        <div className="footer-col">
          <h5>Navigate</h5>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#benefits">Benefits of HBOT</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="#services">Hyperbaric Oxygen Therapy</a></li>
            <li><a href="#services">Total-Body Renewal</a></li>
            <li><a href="#services">Wellness Consultations</a></li>
            <li><a href="#services">Athletic Recovery</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Connect</h5>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Google Reviews</a></li>
            <li><a href="#contact">oxycorehealth@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 OxyCore Health LLC. All rights reserved. · Arizona, USA</p>
        <div style={{display: 'flex', gap: '1.5rem'}}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>

  {/* ══════════════════════════════════
       SCRIPTS
  ══════════════════════════════════ */}
    </main>
  );
}
