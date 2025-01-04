import { useEffect, useState } from "react";

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formFeedback, setFormFeedback] = useState({ message: "", type: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      setFormFeedback({ message: "Sending...", type: "loading" });

      const formData = new FormData(event.target);

      formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormFeedback({
          message: "Message Sent Successfully!",
          type: "success",
        });
        event.target.reset();
      } else {
        // console.log("Error", data);
        setFormFeedback({ message: `${data.message}`, type: "error" });
      }
    } catch (error) {
      setFormFeedback({ message: `${error.message}`, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Effect to clear the message after a specific time
  useEffect(() => {
    let timer;
    if (!isSubmitting && formFeedback.message) {
      timer = setTimeout(() => {
        setFormFeedback({ message: "", type: "" });
      }, 5000);
    }

    return () => {
      clearTimeout(timer); // Clean up the timeout
    };
  }, [isSubmitting, formFeedback.message]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center gap-4 rounded-lg border border-gray-200 p-8 shadow-sm shadow-primary/60"
    >
      {formFeedback.message && (
        <p
          className={`font-medium ${formFeedback.type === "error" ? "text-red-400" : formFeedback.type === "success" ? "text-green-500" : "dark:text-dark-text text-text"}`}
        >
          {formFeedback.message}
        </p>
      )}
      <div className="dark:text-dark-text flex flex-col gap-1 text-text">
        <label className="font-medium" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Fullname"
          className="dark:bg-dark-card w-full rounded-lg bg-card p-2 shadow focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Email */}
      <div className="dark:text-dark-text flex flex-col gap-1 text-text">
        <label className="font-medium" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email"
          className="dark:bg-dark-card rounded-lg bg-card p-2 shadow focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Message */}
      <div className="dark:text-dark-text flex flex-col gap-1 text-text">
        <label className="font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows="4"
          required
          placeholder="Enter Message"
          className="dark:bg-dark-card rounded-lg bg-card p-2 shadow focus:outline-none focus:ring-1 focus:ring-primary"
        ></textarea>
      </div>

      {/* Hidden Input */}
      <input
        type="hidden"
        name="access_key"
        value={import.meta.env.VITE_ACCESS_KEY}
      />

      <button
        className="self-start rounded-lg bg-primary p-2 font-medium text-white hover:bg-button-hover disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
