import React, { useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

export default function SubscribeInput() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubscribe = async () => {
    const emailValue = emailRef.current?.value.trim();
    if (!emailValue) {
      toast.error("Please enter your email address");
      return;
    }
    try {
      setLoading(true); // Set loading to true before the request
      await axios.post("/api/subscribe", { email: emailValue });
      setEmail("");
      toast.success("Subscribed successfully!");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // Reset loading state after the request
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center">
        <div className="md:py-12 flex-col justify-center items-center gap-6 inline-flex">
          <h4 className="sm:text-xl text-black font-semibold font-['Outfit']">
            Let’s stay in touch
          </h4>
          <div className="sm:w-[80%] justify-start items-center flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 h-full bg-neutral-100 rounded-tl-2xl rounded-bl-2xl justify-center items-center gap-4.5 flex md:w-[280px] text-neutral-500 text-lg font-normal font-['Outfit']"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Please enter a valid email address"
              required
              ref={emailRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="border rounded-lg gap-2 hover:bg-primary hover:border-[yellow] hover:text-white sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center"
              onClick={handleSubscribe}
              disabled={loading} // Disable button while loading
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
