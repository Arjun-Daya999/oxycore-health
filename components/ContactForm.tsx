"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    preference: "",
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Strip non-digits and cap at 10 digits max
    const rawValue = e.target.value.replace(/\D/g, "").slice(0, 10);
    
    let formattedValue = rawValue;
    if (rawValue.length > 0) {
      if (rawValue.length <= 3) {
        formattedValue = `(${rawValue}`;
      } else if (rawValue.length <= 6) {
        formattedValue = `(${rawValue.slice(0, 3)}) ${rawValue.slice(3)}`;
      } else {
        formattedValue = `(${rawValue.slice(0, 3)}) ${rawValue.slice(3, 6)}-${rawValue.slice(6)}`;
      }
    }
    
    setFormData({ ...formData, phone: formattedValue });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    setErrorMessage("");

    if (!formData.email && !formData.phone) {
      setErrorMessage("Please provide either your email or phone number so we can reach you.");
      setIsPending(false);
      return;
    }

    try {
      const sessionId = typeof window !== 'undefined' ? sessionStorage.getItem('hbot_session_id') : null;
      
      const payload = {
        full_name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone_number: formData.phone,
        reason_for_inquiry: `Message: ${formData.message}\nPreference: ${formData.preference}`,
        session_id: sessionId
      };

      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

      if (!supabaseUrl || !supabaseKey) {
          throw new Error("Misconfigured database connection. Please check your environment variables.");
      }

      const res = await fetch(`${supabaseUrl}/rest/v1/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": supabaseKey,
          "Authorization": `Bearer ${supabaseKey}`,
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to submit inquiry to the database.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred.");
    } finally {
      setIsPending(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="form-success-overlay" style={{ textAlign: "center", padding: "4rem 2rem", background: "var(--dark)", borderRadius: "3px" }}>
        <h3 style={{ color: "var(--white)", marginBottom: "1rem" }}>Success!</h3>
        <p style={{ color: "rgba(255,255,255,0.6)" }}>Your inquiry has been received. We will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submitForm}>
      {errorMessage && <div style={{ color: "#EF4444", marginBottom: "1.5rem", fontSize: "0.85rem", padding: "0.8rem", background: "rgba(239, 68, 68, 0.1)", borderRadius: "2px" }}>{errorMessage}</div>}
      <div className="form-row-2">
        <div className="f-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" placeholder="Jane" required value={formData.firstName} onChange={handleInputChange} />
        </div>
        <div className="f-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" placeholder="Doe" required value={formData.lastName} onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-row-2">
        <div className="f-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="jane@example.com" value={formData.email} onChange={handleInputChange} />
        </div>
        <div className="f-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" placeholder="(000) 000-0000" value={formData.phone} onChange={handlePhoneChange} />
        </div>
      </div>
      <div className="f-group">
        <label htmlFor="message">How can we help you?</label>
        <textarea name="message" id="message" placeholder="Tell us about your health goals, what you're recovering from, or any questions you have. The more context you share, the better we can tailor our response to you." value={formData.message} onChange={handleInputChange}></textarea>
      </div>
      <div className="f-group">
        <label htmlFor="preference">Preferred way to be contacted</label>
        <select name="preference" id="preference" value={formData.preference} onChange={handleInputChange}>
          <option value="">No preference</option>
          <option>Call me</option>
          <option>Email me</option>
          <option>Either is fine</option>
        </select>
      </div>
      <button type="submit" className="form-submit" disabled={isPending} style={{ cursor: isPending ? "not-allowed" : "pointer" }}>
        {isPending ? "Sending..." : "Send My Inquiry →"}
      </button>
    </form>
  );
}
