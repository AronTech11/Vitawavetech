import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import "./contactus.css" // Import the CSS file

export const ContactUs = () => {
  const form = useRef()
  const [emailSent, setEmailSent] = useState(false)
  const [sendingError, setSendingError] = useState("")
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  })

  const validateForm = () => {
    const name = form.current.user_name.value
    const email = form.current.from_name.value
    const message = form.current.message.value

    const newErrors = {
      name: !name,
      email: !email,
      message: !message,
    }

    setErrors(newErrors)

    // Return true if no errors (all fields filled)
    return !newErrors.name && !newErrors.email && !newErrors.message
  }

  const resetForm = () => {
    // Reset all form fields
    form.current.reset()
  }

  const sendEmail = (e) => {
    e.preventDefault()

    // Clear any previous sending errors
    setSendingError("")

    // Validate form and only proceed if valid
    if (!validateForm()) {
      return
    }

    console.log("Sending email...")

    emailjs
      .sendForm(
        "service_tfl7809", // Your service ID
        "template_3zccgio", // Your template ID
        form.current, // Form reference
        "4M5jbpr0rJCYf7-95", // Your user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result)
          setEmailSent(true) // Set state to true when email is sent
          resetForm() // Clear the form fields
        },
        (error) => {
          console.error("Error sending email:", error)
          setSendingError("Failed to send email. Please try again.")
        },
      )
  }

  return (
    <>
      <section className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>
            {" "}
            Need to get in touch with us? Fill out the form and a member of our team will reach back out to you as
            quickly as possible.
          </p>
        </div>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            {sendingError && <div className="sending-error-message">{sendingError}</div>}

            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                className={errors.name ? "error-input" : ""}
                onChange={() => errors.name && setErrors({ ...errors, name: false })}
              />
              {errors.name && <div className="error-message">Field required</div>}
            </div>
            <div className="form-group">
              <label htmlFor="from_name">Email</label>
              <input
                type="email"
                name="from_name"
                id="from_name"
                className={errors.email ? "error-input" : ""}
                onChange={() => errors.email && setErrors({ ...errors, email: false })}
              />
              {errors.email && <div className="error-message">Field required</div>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className={errors.message ? "error-input" : ""}
                onChange={() => errors.message && setErrors({ ...errors, message: false })}
              />
              {errors.message && <div className="error-message">Field required</div>}
            </div>
            {!emailSent ? (
              <input type="submit" value="Send" />
            ) : (
              <button type="button" className="email-sent-button" disabled>
                <span className="checkmark">✓</span> Email sent
              </button>
            )}
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactUs