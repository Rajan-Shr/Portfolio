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
            <div class="flex flex-col justify-center items-center" style="opacity: 1; transform: none;"><div class="space-y-6"><div class="flex items-center gap-4"><div class="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div><div><h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Phone</h3><a href="tel:+918866598283" class="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 transition-colors">+977 9869276604</a></div></div><div class="flex items-center gap-4"><div class="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><div><h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Email</h3><a href="mailto:rahulkhatwani78@gmail.com" class="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 transition-colors">rajanstha829@gmail.com</a></div></div><div class="flex items-center gap-4"><div class="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div><div><h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Location</h3><a href="" target="_blank" class="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 transition-colors">Nepal, Kathmandu, NP</a></div></div></div></div>
        </section>
    );
}

export default Contact;