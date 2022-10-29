
export default function Bio(props) {

    const { name, role } = props

    return (
        <section className="flex flex-col space-y-6 text-lg">

            <p>Hi, my name is</p>
            <p className="text-5xl">{name},</p>
            <p>I'm a {role}.</p>
            <p>
                I create web applications that are both interesting and useful. I am always looking to grow and to be continuously learning and challenging myself. Check out some of my most recent projects and let me know what you think!
            </p>
            <p>
                Currently learning, developing, and improving my skills on both front-end and back-end technologies.
            </p>

            {/* GITHUB / EMAIL */}
            <div className="text-3xl flex flex-col items-center space-y-3 py-10">
                <a 
                    href="https://github.com/klzheng" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-2 hover:text-gray-200"
                >
                    <i className="fa-brands fa-github"></i>
                    <span className="text-base"> github.com/klzheng</span>
                </a>
                <p className="flex items-center space-x-2 hover:text-gray-200">
                    <i className="fa-solid fa-envelope"></i>
                    <span className="text-base"> klzheng@buffalo.edu</span>
                </p>
            </div>
            <hr />

        </section>
    )
}