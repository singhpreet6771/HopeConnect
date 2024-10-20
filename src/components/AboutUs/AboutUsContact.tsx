import "./aboutUs.css";
import { useState } from "react";
import BtnFilledWhite from "../Common/BtnFilledWhite";

const AboutUsContact = () => {
  //   const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Handling Contact Submit: ", formData);
    //TODO: implement toast notification for user to see that message is received.
    // setIsLoading(true);
    // axios({
    //   url: "http://localhost:8000/email/send",
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "*/*",
    //   },
    //   data: formData,
    // })
    //   .then((res) => {
    //     if (res.data.success) {
    //       toast.success(
    //         "Thank you! I've received your message and will get back to you shortly. 😊"
    //       );
    //       setIsLoading(false);
    //       setFormData({ name: "", email: "", message: "" });
    //     }
    //   })
    //   .catch((err) => {
    //     toast.error(
    //       "It looks like there was a problem. Please try sending your message again shortly."
    //     );
    //     setIsLoading(false);
    //   });
  };
  return (
    <div className="about_us_contact">
      <form className="contact_form">
        <div className="contact_heading">Get in Touch</div>
        <div className="contact_inputs">
          <div className="input">
            <label htmlFor="name" className="contact-form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact-form-control"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="input">
            <label htmlFor="company" className="contact-form-label">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="contact-form-control"
              id="company"
              placeholder="Your Company"
              required
            />
          </div>
          <div className="input">
            <label htmlFor="email" className="contact-form-label">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contact-form-control"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="input">
            <label htmlFor="phone" className="contact-form-label">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="contact-form-control"
              id="phone"
              placeholder="Your Phone"
              required
            />
          </div>
        </div>
        <div className="message_input">
          <label htmlFor="message" className="contact-form-label">
            Your Message
          </label>
          <textarea
            className="contact_message_control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder=""
            rows={5}
            required
          ></textarea>
        </div>
        <div className="main-submit-contact">
          {/* <button
            type="submit"
            className="btn btn-lg submit-contact-btn"
            disabled={false}
          >
            {isLoading && (
            <>
              <span className="sending-text">Sending...</span>
              <i className="fa-regular fa-paper-plane fa-beat sending-icon"></i>
            </>
          )}
            {!isLoading && <span>Send</span>}
            <span>Send</span>
          </button> */}
          <BtnFilledWhite title={"Submit"} onClick={handleOnSubmit} />
        </div>
      </form>
    </div>
  );
};

export default AboutUsContact;
