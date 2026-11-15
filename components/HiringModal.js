"use client";

import { useEffect, useRef, useState } from "react";
import HireButton from "./HireButton";

export default function HiringModal() {
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const nameRef = useRef(null);
  const formRef = useRef(null);
  const successRef = useRef(null);
  const previousOverflow = useRef("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

  function openModal() {
    formRef.current?.reset();
    previousOverflow.current = document.body.style.overflow;
    dialogRef.current.showModal();
    dialogRef.current.scrollTop = 0;
    document.body.style.overflow = "hidden";
    nameRef.current?.focus({ preventScroll: true });
  }

  function closeModal() {
    dialogRef.current?.close();
  }

  function handleClose() {
    document.body.style.overflow = previousOverflow.current;
    formRef.current?.reset();
    setSubmitted(false);
    triggerRef.current?.focus({ preventScroll: true });
  }

  function handleBackdrop(event) {
    if (event.target !== dialogRef.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeModal();
  }

  function handleSubmit(event) {
    event.preventDefault();
    // UI demo only: do not read, transmit, persist, or unlock anything.
    setSubmitted(true);
  }

  function handleKeyDown(event) {
    if (event.key !== "Tab") return;
    const dialog = dialogRef.current;
    const controls = [...dialog.querySelectorAll("button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex='0']")];
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  return <>
    <HireButton onClick={openModal} buttonRef={triggerRef} dialogId="hiring-dialog" />
    <dialog id="hiring-dialog" ref={dialogRef} className="hiring-dialog" aria-labelledby="hiring-title" aria-describedby="hiring-description" onClose={handleClose} onClick={handleBackdrop} onKeyDown={handleKeyDown}>
      <div className="modal-panel">
        <button className="modal-close" type="button" aria-label="Close hiring modal" onClick={closeModal}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
        {submitted ? <div className="success-panel">
          <span className="success-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4L19 6" /></svg></span>
          <p className="modal-eyebrow metadata">ACCESS REQUEST RECEIVED.</p>
          <h2 id="hiring-title" ref={successRef} tabIndex={-1}>Looks like I&apos;m hired.</h2>
          <p id="hiring-description" className="modal-description">Looks like we&apos;re building something.</p>
          <p className="demo-notice">Demo only. Nothing was sent, saved, or unlocked.</p>
          <button className="modal-submit" type="button" onClick={closeModal}>CLOSE <span aria-hidden="true">↗</span></button>
        </div> : <>
          <p className="modal-eyebrow metadata">ACCESS REQUEST</p>
          <h2 id="hiring-title">You&apos;re hiring me?</h2>
          <p id="hiring-description" className="modal-description">Tell me what we&apos;re building and let&apos;s unlock the rest.</p>
          <form ref={formRef} className="hiring-form" aria-label="Demo hiring request" onSubmit={handleSubmit} aria-describedby="form-demo-notice">
            <div className="form-field"><label htmlFor="hiring-name">NAME <span aria-hidden="true">*</span></label><input id="hiring-name" ref={nameRef} name="name" placeholder="Your name" autoComplete="name" maxLength={100} required /></div>
            <div className="form-field"><label htmlFor="hiring-email">EMAIL <span aria-hidden="true">*</span></label><input id="hiring-email" name="email" type="email" placeholder="your@email.com" autoComplete="email" maxLength={254} required /></div>
            <div className="form-field"><label htmlFor="hiring-company">COMPANY / BRAND <span className="optional-label">(OPTIONAL)</span></label><input id="hiring-company" name="company" placeholder="Your company or brand" autoComplete="organization" maxLength={120} /></div>
            <div className="form-field"><label htmlFor="hiring-type">PROJECT TYPE <span aria-hidden="true">*</span></label><select id="hiring-type" name="type" defaultValue="" required><option value="" disabled>Select a project type</option><option>Website</option><option>Web App</option><option>Mobile App</option><option>Other</option></select></div>
            <div className="form-field field-wide"><label htmlFor="hiring-idea">PROJECT / IDEA <span aria-hidden="true">*</span></label><textarea id="hiring-idea" name="idea" placeholder="Tell me a little about what you want to build..." rows={3} maxLength={2000} required /></div>
            <button className="modal-submit field-wide" type="submit">HIRE ME <span aria-hidden="true">→</span></button>
            <p id="form-demo-notice" className="demo-notice field-wide">UI demo only. Your details are not sent or saved.</p>
          </form>
        </>}
      </div>
    </dialog>
  </>;
}
