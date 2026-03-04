import { useEffect, useRef, useState, useCallback } from "react";
import Card from "./Card";

function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const handleIntersection = useCallback(([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1,
        });

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, [handleIntersection]);

    return (
        <section id="projects"
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
                    Projects
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <Card
                        title="StreamPost"
                        description="StreamPost is a powerful Blog Content Management System (CMS) built using ASP.NET Core MVC and Entity Framework Core."
                        image="/project_screenshot/streampost.png"
                        alt="StreamPost"
                        technologies={["Bootstrap", ".NET", "EF Core", "SQL Server"]}
                        sourceLink="https://github.com/Rajan-Shr/Stream-Post"
                    />
                    <Card
                        title="Stock Price Prediction"
                        description="A machine learning-based stock market analysis tool that uses LSTM neural networks to predict stock price trends."
                        image="/project_screenshot/stockprice.png"
                        alt="Stock Price Prediction"
                        technologies={["React", "FastAPI", "Neural Networks", "SQLite"]}
                        sourceLink="https://github.com/Rajan-Shr/Stock-Price-Prediction-Using-LSTM"
                    />
                    <Card
                        title="Personal Portfolio Website"
                        description="Designed and developed a personal portfolio website to showcase projects, technical skills, and professional experience."
                        image="/project_screenshot/portfolio.png"
                        alt="Portfolio"
                        technologies={["React", "TailwindCSS"]}
                        sourceLink="https://github.com/Rajan-Shr/"
                    />
                </div>
                <div className="mt-10 text-right">
                    <a
                        href="https://github.com/Rajan-Shr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-500 transition duration-300 text-sm underline underline-offset-4"
                    >
                        View More on GitHub →
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;