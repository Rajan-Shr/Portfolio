import { useState, useEffect } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -40% 0px"
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0f1a]/99 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <a href="#hero" className="flex items-center gap-3 cursor-pointer">
                        <img
                            src="/profile.jpg"
                            alt="Rajan Shrestha"
                            className="h-10 w-10 rounded-full object-cover"
                        />
                        <h2 className="font-semibold text-lg text-white hover:text-gray-300 transition duration-300 cursor-pointer">
                            <span className="md:hidden">RS</span>
                            <span className="hidden md:inline">Rajan Shrestha</span>
                        </h2>
                    </a>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-gray-400 font-medium">
                    {navLinks.map((link) => {
                        const sectionId = link.href.replace("#", "");
                        return (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`transition duration-300 ${activeSection === sectionId
                                        ? "text-white"
                                        : "hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <a
                        href="/rajan-shrestha.pdf"
                        download="rajan-shrestha.pdf"
                        className="mt-4 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-1"
                >
                    <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                    <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                    <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-15 left-0 w-full h-[calc(100vh-60px)] bg-[#0b0f1a] z-40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col gap-6 p-6 text-gray-400 font-medium">
                    {navLinks.map((link) => {
                        const sectionId = link.href.replace("#", "");
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`transition duration-300 ${activeSection === sectionId
                                    ? "text-white"
                                    : "hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}

                    <a
                        href="/rajan-shrestha.pdf"
                        download
                        className="mt-4 px-5 py-3 bg-blue-600 text-white rounded-lg text-center"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;