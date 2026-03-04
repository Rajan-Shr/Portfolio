import CountUp from "react-countup";
import { gsap } from "gsap";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useRef, useState } from "react";

// const useWave = (ref) => {
//   useEffect(() => {
//     if (!ref.current) return;

//     const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

//     tl.to(ref.current, {
//       rotation: 30,
//       duration: 0.3,
//       transformOrigin: "70% 70%",
//       ease: "power1.inOut",
//     })
//       .to(ref.current, { rotation: -20, duration: 0.3 })
//       .to(ref.current, { rotation: 25, duration: 0.3 })
//       .to(ref.current, { rotation: -15, duration: 0.3 })
//       .to(ref.current, { rotation: 20, duration: 0.3 })
//       .to(ref.current, { rotation: 0, duration: 0.4 });

//     return () => tl.kill();
//   }, [ref]);
// };

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  // const waveRef = useRef(null);
  const cardRef = useRef(null);
  // useWave(waveRef);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  const handleMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -20;
    const rotateY = (x / rect.width - 0.5) * 20;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center",
    });
  };

  const handleLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <section id="hero" className="bg-[#0b0f1a]/97">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Side */}
        <div className={`w-full lg:w-2/3 px-6 py-6 lg:px-24 xl:px-32 md:py-16 flex flex-col
                        transform transition-all duration-1000 ease-out
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div>
            <p className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
              {/* <span ref={waveRef} className="inline-block"></span>  */}
              Hi, I'm
            </p>

            <p className="text-gray-400 text-3xl sm:text-4xl lg:text-5xl font-semibold mt-3">
              <Typewriter
                words={["Rajan Shrestha", "Software Engineer"]}
                loop={0}
                cursor={false}
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={2000}
              />
              <span className="text-blue-400 animate-pulse">|</span>
            </p>

            <p className="text-gray-400 text-base sm:text-lg lg:text-xl mt-6 max-w-2xl leading-relaxed">
              Crafting end-to-end web applications with a focus on performance, usability, and clean code. I enjoy building responsive, user-friendly interfaces while ensuring backend systems are robust and scalable, delivering solutions that make an impact.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap justify-around">
            <a
              href="/rajan-shrestha.pdf" target="_blank"
              className="px-6 sm:px-8 py-2 sm:py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out font-semibold cursor-pointer flex items-center gap-2"
            >
              <i className="fa-solid fa-file-arrow-down"></i> Resume
            </a>
            <a
              href="https://github.com/Rajan-Shr" target="_blank"
              className="px-6 sm:px-8 py-2 sm:py-3 rounded-full text-white bg-[#262626] hover:text-blue-500 transition-all duration-300 ease-in-out font-semibold cursor-pointer flex items-center gap-2"
            >
              <i className="fa-brands fa-github"></i> Github
            </a>
            <a
              href="https://www.linkedin.com/in/rajan-shrestha-697039348/" target="_blank"
              className="px-6 sm:px-8 py-2 sm:py-3 rounded-full text-white bg-[#262626] hover:text-blue-500 transition-all duration-300 ease-in-out font-semibold cursor-pointer flex items-center gap-2"
            >
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="mailto:rajanstha829@gmail.com" target="_blank"
              className="px-6 sm:px-8 py-2 sm:py-3 rounded-full text-white bg-[#262626] hover:text-blue-500 transition-all duration-300 ease-in-out font-semibold cursor-pointer flex items-center gap-2"
            >
              <i className="fa-solid fa-envelope"></i> Email
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className={`w-full lg:w-1/3 flex items-start lg:py-20 px-4`}>
          <div ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className={`w-full max-w-md rounded-xl border border-white/9 lg:-ml-26 overflow-hidden ring-1 ring-white/10 
                      shadow-2xl shadow-blue-500/10`}>
            {/* Menu Bar */}
            <div className="h-8 border-b border-white/7 flex justify-between items-center px-2">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-red-400 h-3 w-3"></div>
                <div className="rounded-full bg-yellow-400 h-3 w-3"></div>
                <div className="rounded-full bg-green-400 h-3 w-3"></div>
              </div>
              <p className="text-gray-400 text-xs font-semibold">
                developer.js
              </p>
            </div>

            {/* Terminal */}
            <div className="bg-[#0b0f1a]/98 text-white text-xs sm:text-sm p-4 font-mono">
              <p className="whitespace-pre leading-6">
                <span className="text-gray-400">
                // Full Stack Developer
                </span>
                {"\n"}
                <span className="text-pink-400">const</span>{" "}
                <span className="text-blue-400">developer</span>{" "}
                <span className="text-gray-300">=</span>{" "}
                <span className="text-yellow-400">{"{"}</span>
                {"\n  "}
                <span className="text-purple-400">name</span>:{" "}
                <span className="text-green-400">'Rajan Shrestha'</span>,
                {"\n  "}
                <span className="text-purple-400">skills</span>:{" "}
                <span className="text-pink-400">[</span>
                <span className="text-green-400">'.NET'</span>,{" "}
                <span className="text-green-400">'React'</span>,{" "}
                <span className="text-green-400">'SQL Server'</span>
                <span className="text-pink-400">]</span>,
                {"\n  "}
                <span className="text-purple-400">focuses</span>:{" "}
                <span className="text-pink-400">[</span>
                <span className="text-green-400">'Full-Stack'</span>
                <span className="text-pink-400">]</span>,
                {"\n  "}
                <span className="text-purple-400">learning</span>:{" "}
                <span className="text-green-400">'Always'</span>
                {"\n"}
                <span className="text-yellow-400">{"}"}</span>;
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Information cards */}
      <div className="w-full flex flex-wrap justify-around px-6 py-8 lg:pb-30 text-center mt-12 text-white text-4xl font-semibold uppercase gap-y-12">
        <div className={`w-1/2 sm:w-1/4 cursor-context-menu
          transform transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <CountUp className="hover:text-blue-500 transition-all duration-300 ease-in-out" end={1} duration={2} suffix="+"
            enableScrollSpy
            scrollSpyOnce />
          <p className="text-sm font-medium text-gray-400">years experience</p>
        </div>
        <div className={`w-1/2 sm:w-1/4 cursor-context-menu
          transform transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <CountUp className="hover:text-blue-500 transition-all duration-300 ease-in-out" end={10} duration={2} suffix="+"
            enableScrollSpy
            scrollSpyOnce />
          <p className="text-sm font-medium text-gray-400">projects</p>
        </div>
        <div className={`w-1/2 sm:w-1/4 cursor-context-menu
          transform transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <CountUp className="hover:text-blue-500 transition-all duration-300 ease-in-out" end={20} duration={2} suffix="+"
            enableScrollSpy
            scrollSpyOnce />
          <p className="text-sm font-medium text-gray-400">Technologies</p>
        </div>
        <div className={`w-1/2 sm:w-1/4 cursor-context-menu
          transform transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <CountUp className="hover:text-blue-500 transition-all duration-300 ease-in-out" end={90} duration={2} suffix="+"
            enableScrollSpy
            scrollSpyOnce />
          <p className="text-sm font-medium text-gray-400">lighthouse score</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;