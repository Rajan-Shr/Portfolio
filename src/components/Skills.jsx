import { useEffect, useRef, useState, useCallback } from "react";
import AutoCarousel from "./AutoCarousel";


function Skills() {
    const [isVisible, setIsVisible] = useState(false);
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

    const skills = [
        { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
        { name: "C#", logo: "/logos/c_sharp.svg" },
        { name: "CSS", logo: "/logos/css.svg" },
        { name: ".NET", logo: "/logos/dotnet.svg" },
        { name: "Git", logo: "/logos/git.svg" },
        { name: "Github", logo: "/logos/github_white.svg" },
        { name: "HTML", logo: "/logos/html.svg" },
        { name: "JavaScript", logo: "/logos/javascript.svg" },
        { name: "jQuery", logo: "/logos/jquery.svg" },
        { name: "MongoDB", logo: "/logos/mongodb.svg" },
        { name: "Postgre SQL", logo: "/logos/postgresql.svg" },
        { name: "Postman", logo: "/logos/postman.svg" },
        { name: "Python", logo: "/logos/python.svg" },
        { name: "React", logo: "/logos/react.svg" },
        { name: "SQL Server", logo: "/logos/sqlserver.svg" },
        { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
        { name: "Visual studio", logo: "/logos/visualstudio.svg" },
        { name: "Visual studio code", logo: "/logos/visualstudio_code.svg" }
    ];

    return (
        <section id="skills"
            ref={sectionRef}
            className="bg-[#0b0f1a]/97 px-6 py-10 md:py-20 lg:px-24 xl:px-32"
        >
            <div
                className={`w-full transform transition-all duration-1000 delay-300 ease-out ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                    }`}
            >
                <h1 className="text-white font-semibold text-4xl py-3 mb-12 border-b-4 border-blue-500 w-fit">
                    Skills
                </h1>

                <AutoCarousel items={skills} direction="forward" speed={1.5} />
                <AutoCarousel items={skills} direction="backward" speed={1.0} />
                <AutoCarousel items={skills} direction="forward" speed={0.7} />
            </div>
        </section>
    );
}

export default Skills;