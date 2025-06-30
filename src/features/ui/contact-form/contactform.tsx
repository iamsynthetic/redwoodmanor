// ContactForm.js
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import styles from "./styles.module.scss";
// import { gsap } from "gsap";
import { Button } from "../button/Button";

const ContactForm = () => {
  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
  }

  // const booknowhovercolor = "#FFF6E8";
  // const booknowdefaultcolor = "#77C2F3";

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Email is invalid";
    }
    if (!formData.message.trim()) errs.message = "Message is required";

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const validationErrors: FormErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      // Simulate async action (e.g., API call)
      await new Promise<void>((resolve) => setTimeout(resolve, 2000));

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handlebooknowmouseenter = (id: string) => {
  //   gsap.to(id, {
  //     duration: 0.2,
  //     backgroundColor: booknowhovercolor,
  //     ease: "quint.easeOut",
  //   });
  // };
  // const handlebooknowmouseleave = (id: string) => {
  //   gsap.to(id, {
  //     duration: 0.2,
  //     backgroundColor: booknowdefaultcolor,
  //     ease: "quint.easeOut",
  //   });
  // };

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex w-xl md:w-3xl">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="pt-12 pl-5 md:pl-10 pr-10 w-full"
        >
          <div className="flex flex-col">
            <label
              className={`cardoregular text-xl px-1 md:px-5`}
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="pl-3 mt-2 mb-6 ml-1 md:ml-4 py-4 bg-white color-blue border-1 border-[colordark]"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p
                style={{
                  color: "#931621",
                  paddingLeft: "15px",
                  marginTop: "-20px",
                  marginBottom: "20px",
                }}
              >
                {errors.name}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              className={`cardoregular text-xl px-1 md:px-5`}
              htmlFor="userEmail"
            >
              Your Email
            </label>
            <input
              id="userEmail"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="pl-3 mt-2 mb-6 ml-1 md:ml-4 py-4 bg-white border-1 border-[colordark]"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p
                style={{
                  color: "#931621",
                  paddingLeft: "15px",
                  marginTop: "-20px",
                  marginBottom: "20px",
                }}
              >
                {errors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              className={`cardoregular text-xl px-1 md:px-5`}
              htmlFor="userMessage"
            >
              Your Message
            </label>
            <textarea
              id="userMessage"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="pl-3 mt-2 mb-6 ml-1 md:ml-4 py-4 bg-white border-1 border-[colordark]"
              disabled={isSubmitting}
            ></textarea>
            {errors.message && (
              <p
                style={{
                  color: "#931621",
                  paddingLeft: "15px",
                  marginTop: "-20px",
                  marginBottom: "20px",
                }}
              >
                {errors.message}
              </p>
            )}
          </div>
          <div className="ml-4">
            <Button
              backgroundColor="#931621"
              hoverColor="#ffc285"
              textColor="#ffc285"
              theclassName="btn-secondary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
          </div>
        </form>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default ContactForm;
