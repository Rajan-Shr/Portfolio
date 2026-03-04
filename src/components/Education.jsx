import { useEffect, useRef, useState, useCallback } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Education() {
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
        <section id="education"
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
                    Education
                </h1>

                <VerticalTimeline layout="1-column" lineColor="#262626">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#0b0f1a', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #0b0f1a' }}
                        date="2020 - 2024"
                        iconStyle={{
                            background: '#fff',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        icon={
                            <img
                                src="/logos/orchid.png"
                                alt="Orchid International College"
                                className="w-6 h-6"
                            />
                        }
                    >
                        <h3 className="vertical-timeline-element-title text-xl font-semibold">Bachelor of Science in Computer Science and Information Technology</h3>
                        <h4 className="vertical-timeline-element-subtitle text-[#b6b7bb]">Orchid International College</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#0b0f1a', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #0b0f1a' }}
                        date="2018 - 2020"
                        iconStyle={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        icon={
                            <img
                                src="/logos/trinity.png"
                                alt="Trinity International College"
                                className="w-full h-full rounded-full"
                            />
                        }
                    >
                        <h3 className="vertical-timeline-element-title text-xl font-semibold">+2 Science</h3>
                        <h4 className="vertical-timeline-element-subtitle text-[#b6b7bb]">Trinity International College</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#0b0f1a', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #0b0f1a' }}
                        date="2017"
                        iconStyle={{
                            background: '#fff',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        icon={
                            <img
                                src="/logos/emile.png"
                                alt="Emile Academy International"
                                className="w-full h-full rounded-full"
                            />
                        }
                    >
                        <h3 className="vertical-timeline-element-title text-xl font-semibold">Secondary Education Examination</h3>
                        <h4 className="vertical-timeline-element-subtitle text-[#b6b7bb]">Emile Academy International</h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Education;