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
            threshold: 0.3,
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

        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxzzIeMQ_0p5e-m-eLcxc-nHg9Hht_fZMUjQwD8ClKsq_jdjGI-Rgyd8fHk-gPbAciJ/exec";

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
        <section id="contact"
            ref={sectionRef}
            className="bg-[#0b0f1a]/97 px-6 pt-10 pb-10 md:pt-20 lg:px-24 xl:px-32"
        >
            <div
                className={`w-full transform transition-all duration-1000 delay-300 ease-out ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                    }`}
            >
                <h1 className="text-white font-semibold text-4xl py-3 mb-6 border-b-4 border-blue-500 w-fit">
                    Contact
                </h1>
                <p className="text-gray-400 mb-6 ">Feel free to reach out!</p>
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#111827] p-8 rounded-xl shadow-xl space-y-6 max-w-2xl"
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
                        <p className="text-green-400 text-center sm:text-xs md:text-sm">
                            Message sent successfully! I'll get back to you soon.
                        </p>
                    )}

                    {status === "error" && (
                        <p className="text-red-400 text-center sm:text-xs md:text-sm">
                            Something went wrong. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Contact;