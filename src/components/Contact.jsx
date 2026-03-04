import { useEffect, useRef, useState, useCallback } from "react";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const sectionRef = useRef(null);

  const handleIntersection = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [handleIntersection]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    const params = new URLSearchParams();
    params.append("name", formData.get("name"));
    params.append("email", formData.get("email"));
    params.append("message", formData.get("message"));

    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbxzzIeMQ_0p5e-m-eLcxc-nHg9Hht_fZMUjQwD8ClKsq_jdjGI-Rgyd8fHk-gPbAciJ/exec";

    try {
      await fetch(`${SCRIPT_URL}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors",
      });

      setStatus("success");
      e.target.reset();
    } catch (error) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#0b0f1a]/97 px-6 py-12 md:py-20 lg:px-24 xl:px-32"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-white font-semibold text-4xl py-3 mb-4 border-b-4 border-blue-500 w-fit">
            Contact
          </h1>
          <p className="text-gray-400 mb-10">Feel free to reach out!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <form
            onSubmit={handleSubmit}
            className={`bg-[#111827] p-6 md:p-8 rounded-xl shadow-xl space-y-6 w-full
              transform transition-all duration-1000 delay-200 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <div>
              <label className="text-gray-400 text-sm">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full mt-2 p-3 rounded-lg bg-[#1f2937] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm">Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="w-full mt-2 p-3 rounded-lg bg-[#1f2937] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm">Message</label>
              <textarea
                name="message"
                placeholder="Your message"
                rows="5"
                required
                className="w-full mt-2 p-3 rounded-lg bg-[#1f2937] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-center text-sm">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-center text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          {/*  CONTACT INFO */}
          <div
            className={`flex flex-col justify-center space-y-8
              transform transition-all duration-1000 delay-400 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <a
                  href="tel:+9779869276604"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  +977 986-9276604
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <a
                  href="mailto:rajanstha829@gmail.com"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  rajanstha829@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <a
                  href="https://www.google.com/maps/place/Kathmandu,+Nepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  Nepal, Kathmandu, NP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;