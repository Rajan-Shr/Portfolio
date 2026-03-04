import { useEffect, useRef, useState, useCallback } from "react";

// const SocialButton = ({ href, iconClass, label }) => (
//   <a href={href}
//     aria-label={label}
//     className="rounded-xl text-gray-400 px-4 py-3 bg-[#262626] hover:bg-[#404040] cursor-pointer transition-colors duration-300"
//   >
//     <i className={iconClass}></i>
//   </a>
// );

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleIntersection = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3, // Trigger when 30% is visible
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [handleIntersection]);

  const leftSideClasses = `w-full lg:w-3/4 transform transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`;

  const rightSideClasses = `w-full lg:w-1/4 border border-white/9 rounded-2xl py-3 px-2 ring-1 ring-white/10 
    shadow-2xl shadow-blue-500/10 transform transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`;

  return (
    <section id="about"
      ref={sectionRef}
      className="bg-[#0b0f1a]/97 px-6 py-6 md:py-16 lg:px-24 xl:px-32 flex flex-col items-end lg:flex-row gap-10"
    >
      {/* Left Side */}
      <div className={leftSideClasses}>
        <h1
          className="text-white font-semibold text-4xl py-3 mb-8 border-b-4 border-blue-500 rounded-xs w-28"
        >
          About
        </h1>
        <p className="text-gray-400 mb-4 text-justify leading-relaxed">
          I’m a BSc. CSIT graduate and Full Stack Software Engineer based in Nepal, passionate about creating web applications
          that are both functional and visually engaging. I enjoy building end-to-end solutions, working across the
          stack while leaning slightly toward frontend development, where design, usability, and performance converge.
        </p>
        <p className="text-gray-400 mb-4 text-justify leading-relaxed">
          I focus on writing clean, maintainable code and following best practices to ensure scalability and efficiency.
          From crafting responsive interfaces to implementing backend logic, I strive to create applications that deliver
          real-world value.
        </p>
        <p className="text-gray-400 text-justify leading-relaxed">
          Continuous learning drives me — I enjoy exploring new frameworks, optimizing workflows, and
          refining my skills to stay at the forefront of modern web development. My goal is to contribute to
          projects that challenge me, deliver meaningful experiences, and make technology work seamlessly for people.
        </p>
      </div>

      {/* Right Side */}
      <div className={rightSideClasses}>
        <p className="uppercase text-gray-400 font-semibold text-center mb-5">Quick Info</p>
        <p className="text-white font-semibold text-center mb-2">Based in Kathmandu, Nepal</p>
        <p className="text-white font-semibold text-center mb-5">Open to remote</p>
        <div className="flex items-center justify-around">
          <a href="https://github.com/Rajan-Shr" target="_blank"
            className="rounded-xl text-gray-400 px-4 py-3 bg-[#262626] hover:bg-[#404040] cursor-pointer transition-colors duration-300"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/rajan-shrestha-697039348/" target="_blank"
            className="rounded-xl text-gray-400 px-4 py-3 bg-[#262626] hover:bg-[#404040] cursor-pointer transition-colors duration-300"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:rajanstha829@gmail.com" target="_blank"
            className="rounded-xl text-gray-400 px-4 py-3 bg-[#262626] hover:bg-[#404040] cursor-pointer transition-colors duration-300"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="/rajan-shrestha.pdf" target="_blank"
            className="rounded-xl text-gray-400 px-4 py-3 bg-[#262626] hover:bg-[#404040] cursor-pointer transition-colors duration-300"
          >
            <i className="fa-solid fa-file-arrow-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;