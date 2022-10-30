export default function ProjectItem(props) {

    const { link, imgPath, name, description, techStacks } = props

    return (
        <div className="grid-cols-1 relative group">
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    src={imgPath}
                    alt="Project Poster"
                    className=" flex rounded border group-hover:brightness-10 transition-all duration-500 object-cover w-full h-full"
                />
                <div 
                    className="flex flex-col items-center absolute top-0 h-full w-full border rounded opacity-0 transition-all group-hover:opacity-100 text-gray-200 duration-500 ease-in-out">
                    <h2 
                        className="text-5xl xl:my-10 font-semibold text-center 3xl:text-8xl 2xl:text-7xl lg:text-5xl sm:text-4xl 2xs:my-2 sm:my-4 md:my-6 xs:text-3xl 2xs:text-2xl">
                        {name}
                    </h2>
                    <p 
                        className="text-2xl text-center lg:px-20 absolute top-1/2 -translate-y-1/2 3xl:text-5xl 2xl:text-4xl lg:text-2xl md:text-xl 2xs:px-5 xs:text-base 2xs:text-sm">
                        {description}
                    </p>
                    <div className="absolute bottom-0 lg:py-5 2xs:py-0 xs:py-2 ">
                        {techStacks.map((item, index) => (
                            <span
                                key={index}
                                className="lg:mx-1 bg-black rounded-md px-1 border text-lg 3xl:text-3xl 2xl:text-2xl lg:text-xl md:text-base sm:text-sm xs:text-xs 2xs:text-2xs 2xs:mx-0.5">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </a>
        </div>
    )
}