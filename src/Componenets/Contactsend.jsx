import React, { useState } from "react";

function Contactsend() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "aac9be13-003b-4a30-8d9a-d3b31a743d27");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    setIsSubmitting(false);
    if (res.success) {
      setSuccessMessage("Form submitted successfully!");
      console.log("Success", res);
    } else {
      setSuccessMessage("Failed to submit the form.");
    }
  };

  return (
    <div id="contact" className="flex justify-center items-center min-h-screen bg-black bg-opacity-50">
      <div className="w-full max-w-md p-8 bg-black border-4 bg-opacity-100 rounded-lg shadow-lg backdrop-blur-md">
        <h1 className="font-bold text-3xl text-center mb-6">Contact Me</h1>
        {isSubmitting && <div>Sending...</div>}
        {successMessage && <div className="text-white text-center mb-4">{successMessage}</div>}
        <form onSubmit={onSubmit} className="flex flex-col gap-4 text-black">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
          />
          <input
            type="submit"
            value="Submit Form"
            disabled={isSubmitting}
            className="w-full py-3 bg-blue-500 cursor-pointer disabled:bg-slate-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          />
        </form>
      </div>
    </div>
  );
}

export default Contactsend;
