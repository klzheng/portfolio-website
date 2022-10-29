import Navigate from "../Navigate";


export default function Contact() {

    return (
        <section className="mt-20">

            <div className="flex flex-col items-center">
                <h1 className="text-2xl text-gray-200 font-semibold my-2">CONTACT ME</h1>
                <p>(or click on icons to see more information)</p>
            </div>


            <div className="text-2xl flex flex-col items-center space-y-4 py-10 mt-5 transition-all">
                <a
                    href="https://github.com/klzheng"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 hover:text-gray-200 hover:scale-110 transition-all "
                >
                    <i className="fa-brands fa-github hover:animate-spin-ease"></i>
                    <span className="text-base">
                        github.com/klzheng
                    </span>
                </a>
                <p className="flex items-center space-x-2 hover:text-gray-200 hover:scale-110 transition-all">
                    <i className="fa-solid fa-envelope hover:animate-pulse"></i>
                    <span className="text-base">
                        klzheng@buffalo.edu
                    </span>
                </p>
                <a
                    href="resume.pdf"
                    download="resume"
                    target="_blank"
                    className="flex items-center space-x-2 hover:text-gray-200 hover:scale-110 transition-all"
                >
                    <i className="fa-solid fa-file-arrow-down hover:animate-bounce "></i>
                    <span className="text-base ">
                        resumé
                    </span>
                </a>
            </div>

            <Navigate />

            <hr />

        </section>
    )
}