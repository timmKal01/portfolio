import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { ABOUT_ME } from "../utils/data";
import { FORMSPREE_ENDPOINT } from "../config/contact";
import CircuitBg from "../assets/images/circuit-bg.png";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactMe = () => {
  const prefersReducedMotion = useReducedMotion();
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error | unavailable
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const fieldRefs = { name: nameRef, email: emailRef, message: messageRef };

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_PATTERN.test(values.email)) next.email = "That email address doesn't look right.";
    if (!values.message.trim()) next.message = "Please add a short message.";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = ["name", "email", "message"].find((f) => nextErrors[f]);
      fieldRefs[firstInvalid]?.current?.focus();
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      setStatus("unavailable");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setStatus("success");
        setValues({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 mt-10">
      <div
        className="circuit-bg"
        style={{ backgroundImage: `url(${CircuitBg})` }}
        aria-hidden="true"
      />
      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <motion.div
          className="w-full lg:w-[60vw] mx-auto text-center"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="section-title">Contact Me</h4>
          <p className="text-sm md:text-base mt-4 leading-7 text-ink-muted">
            Have a project in mind, or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-4xl mx-auto">
          <motion.div
            className="lg:col-span-2 flex flex-col gap-4"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href={`mailto:${ABOUT_ME.email}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-line hover:border-primary transition-colors duration-300 group"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <FaEnvelope />
              </span>
              <span className="text-sm text-ink/80 break-all">{ABOUT_ME.email}</span>
            </a>
            <a
              href={`tel:${ABOUT_ME.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-line hover:border-primary transition-colors duration-300 group"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <FaPhone />
              </span>
              <span className="text-sm text-ink/80">{ABOUT_ME.phone}</span>
            </a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-3 flex flex-col gap-4 text-left"
            initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-xs font-medium text-ink-muted">
                Name
              </label>
              <input
                id="contact-name"
                ref={nameRef}
                type="text"
                value={values.name}
                onChange={handleChange("name")}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className="rounded-lg border border-line bg-surface text-ink px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              {errors.name && (
                <p id="contact-name-error" className="text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-xs font-medium text-ink-muted">
                Email
              </label>
              <input
                id="contact-email"
                ref={emailRef}
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className="rounded-lg border border-line bg-surface text-ink px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              {errors.email && (
                <p id="contact-email-error" className="text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-xs font-medium text-ink-muted">
                Message
              </label>
              <textarea
                id="contact-message"
                ref={messageRef}
                value={values.message}
                onChange={handleChange("message")}
                rows={5}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className="rounded-lg border border-line bg-surface text-ink px-4 py-2.5 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              {errors.message && (
                <p id="contact-message-error" className="text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="action-btn btn-scale-anim mt-2 disabled:opacity-60 disabled:pointer-events-none"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            <div role="status" aria-live="polite">
              {status === "success" && (
                <p className="text-sm text-primary font-medium">
                  Thanks — your message is on its way. I&rsquo;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong sending that. Please try again, or email me directly at{" "}
                  <a href={`mailto:${ABOUT_ME.email}`} className="underline">
                    {ABOUT_ME.email}
                  </a>
                  .
                </p>
              )}
              {status === "unavailable" && (
                <p className="text-sm text-ink-muted">
                  This form isn&rsquo;t hooked up to an inbox yet — please email me directly at{" "}
                  <a href={`mailto:${ABOUT_ME.email}`} className="underline text-primary">
                    {ABOUT_ME.email}
                  </a>
                  .
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
