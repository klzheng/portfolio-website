const RotatingItem = (props) => {
    const { imgPath } = props

    return (
        <img src={imgPath} alt="Tech Stack" className="item">
        </img>
    )
}


const RotatingCircle = (props) => {
    const { totalItems, duration, children } = props

    return (
        <div className="circle" style={{ "--n": totalItems, "--d": duration }}>
            {children}
        </div>
    )
}


export default function TechStack() {
    return (
        <>
            <section className="my-20 flex flex-col items-center">
                <h1 className="text-2xl text-gray-200 font-semibold">
                    TECH STACK
                </h1>
                <RotatingCircle
                    totalItems={8}
                    duration={"60s"}>

                    <RotatingItem imgPath={"jquery.png"} />
                    <RotatingItem imgPath={"js.png"} />
                    <RotatingItem imgPath={"sqldeveloper.png"} />
                    <RotatingItem imgPath={"react.png"} />
                    <RotatingItem imgPath={"python.png"} />
                    <RotatingItem imgPath={"nodejs.png"} />
                    <RotatingItem imgPath={"csharp.png"} />
                    <RotatingItem imgPath={"dotnetcore.png"} />

                </RotatingCircle>

            </section>
            <hr />
        </>
    )
}




