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
                        className="text-5xl my-10 font-semibold text-center">
                        {name}
                    </h2>
                    <p 
                        className="text-2xl text-center px-20 absolute top-1/2 -translate-y-1/2 ">
                        {description}
                    </p>
                    <div className="absolute bottom-0 py-5 ">
                        {techStacks.map((item, index) => (
                            <span
                                key={index}
                                className="mx-1 bg-black rounded-md px-1 border text-lg ">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </a>
        </div>
    )
}