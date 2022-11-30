import ProjectItem from "./ProjectItem";

export default function ProjectSection() {

    const projects = [
        {
            link: "https://reliant-gis.netlify.app/",
            imgPath: "project7.png",
            name: "ReliantGIS ",
            description: "📊 Go-to source for income and demographics data in the US 🌎",
            techStacks: ["React", "Javascript"]
        },
        {
            link: "https://thecinemadb.netlify.app/",
            imgPath: "project6.png",
            name: "TCDb ",
            description: "🍿 All in one movie and TV tracking site that allows you to save, rate, and track your favorite films 🎥",
            techStacks: ["React", "TailwindCSS", "NodeJS", "MongoDB"]
        },
        {
            link: "https://klzheng-weather.netlify.app/",
            imgPath: "project5.png",
            name: "Weather App ⛱️",
            description: "Modern and simple weather app ",
            techStacks: ["React", "TailwindCSS"]
        },
        {
            link: "https://klzheng.github.io/tenzies-game/",
            imgPath: "project2.png",
            name: "Tenzies 🎲",
            description: "Fun and simple board game ",
            techStacks: ["React", "JavaScript", "CSS"]
        },
        {
            link: "https://klzheng.github.io/calculator/",
            imgPath: "project3.png",
            name: "Calculator",
            description: "Just another calculator app on the web ",
            techStacks: ["Javascript", "HTML", "CSS"]
        },
        {
            link: "https://klzheng-portfolio.netlify.app/",
            imgPath: "project1.png",
            name: "📜 Portfolio 💼",
            description: "My personal website",
            techStacks: ["React", "TailwindCSS"]
        },
        {
            link: "google_trends_visualization.pdf",
            imgPath: "project4.png",
            name: "Google Trends Visualization",
            description: "Data Analysis using Panda and Matplotlib",
            techStacks: ["Python", "Pandas", "Matplotlib"]
        },
    ]


    return (
        <>
            <h3 className="text-center text-3xl text-gray-200">Projects!</h3>
            <div className="grid grid-cols-1 gap-10 pt-12 pb-20 xl:w-3/4 2xs:w-full lg:w-5/6 mx-auto">
                {projects.map((item, index) => (
                    <ProjectItem
                        key={index}
                        link={item.link}
                        imgPath={item.imgPath}
                        name={item.name}
                        description={item.description}
                        techStacks={item.techStacks}
                    />
                ))}
            </div>
            <hr />
        </>
    )
}