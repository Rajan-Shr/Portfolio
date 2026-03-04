import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect } from "react";

export default function AutoCarousel({ items, direction = "forward", speed = 1 }) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            dragFree: true,
            skipSnaps: true
        },
        [
            AutoScroll({
                speed,
                direction,
                startDelay: 0,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
                stopOnFocusIn: false,
            }),
        ]
    );

    useEffect(() => {
        if (!emblaApi) return;
        const autoScroll = emblaApi.plugins().autoScroll;
        autoScroll.play();
        emblaApi.on("reInit", () => autoScroll.play());
    }, [emblaApi]);

    return (
        <div className="overflow-hidden py-4">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-3">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="shrink-0 min-w-40 h-28 m-3
                                        flex flex-col items-center justify-center
                                        border border-white/9 rounded-2xl ring-1 bg-[#111625] ring-white/10 text-white
                                        "
                        >
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="w-12 h-12 object-contain"
                            />
                            <p className="mt-3">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}