
export default function Bio(props) {

    const { name, role } = props

    return (
        <section className="flex flex-col space-y-6 text-lg">

            <p>Hi, my name is</p>
            <p className="text-5xl drop-shadow-white-text text-gray-300 ">{name},</p>
            <p>I'm a {role}.</p>
            <p>
                I create web applications that are both interesting and useful. I am always looking to grow and to be continuously learning and challenging myself. Check out some of my most recent projects and let me know what you think!
            </p>
            <p className="pb-16">
                Currently learning, developing, and improving my skills on both front-end and back-end technologies.
            </p>

            {/* GITHUB / EMAIL */}
       
            <hr />

        </section>
    )
}