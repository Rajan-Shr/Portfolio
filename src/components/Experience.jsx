import { useEffect, useRef, useState, useCallback } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
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

    return (
        <section id="experience"
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
                    Experience
                </h1>

                <VerticalTimeline layout="1-column" lineColor="#262626">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#0b0f1a', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #0b0f1a' }}
                        date="Sept 2025 - Nov 2025"
                        iconStyle={{
                            background: '#111827',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        icon={
                            <img
                                src="/logos/react.svg"
                                alt="React"
                                className="w-6 h-6"
                            />
                        }
                    >
                        <h3 className="vertical-timeline-element-title text-xl font-semibold">React intern</h3>
                        <h4 className="vertical-timeline-element-subtitle text-[#b6b7bb]">Amnil Technologies, Lalitpur</h4>
                        <p className="text-[#b6b7bb]">
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#0b0f1a', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #0b0f1a' }}
                        date="Jan 2025 - Apr 2025"
                        iconStyle={{
                            background: '#111827',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        icon={
                            <img
                                src="/logos/dotnet.svg"
                                alt="dotnet"
                                className="w-full h-full rounded-full"
                            />
                        }
                    >
                        <h3 className="vertical-timeline-element-title text-xl font-semibold">.NET intern</h3>
                        <h4 className="vertical-timeline-element-subtitle text-[#b6b7bb]">CS InfoTech, Kathmandu</h4>
                        <p className="text-[#b6b7bb]">
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Experience;