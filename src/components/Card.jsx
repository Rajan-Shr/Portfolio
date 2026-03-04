function Card({
    title,
    description,
    image,
    alt,
    technologies,
    sourceLink
}) {
    return (
        <div className="bg-gray-900 text-white rounded-2xl overflow-hidden 
                        shadow-lg hover:shadow-2xl 
                        transition-all duration-300 hover:-translate-y-2 w-full">

            <div className="h-60 overflow-hidden">
                <img
                    src={image}
                    alt={alt}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>

                <p className="text-gray-400 text-sm mb-4">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-800 px-3 py-1 text-xs rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div>
                    <a
                        href={sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-gray-600 
                                   hover:border-white rounded-lg 
                                   text-sm font-medium transition"
                    >
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;