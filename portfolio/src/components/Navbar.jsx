import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="flex justify-between bg-neutral-900 2xs:px-2 xs:px-4 sm:px-10 md:px-14 lg:px-32 py-6 border-b-2 border-neutral-600 2xs:text-sm xs:text-base sm:text-lg md:text-xl 3xl:text-3xl">
            <a 
                href="https://github.com/klzheng"
                target="_blank"
                rel="noreferrer"
                className='tracking-wide hover:text-gray-100 hover:drop-shadow-white-text transition'
            >
                &#60;klzheng&#62;
            </a>
            <div>
                <ul className="flex lg:space-x-10 2xs:space-x-2 xs:space-x-4 md:space-x-7">
                    <Link to="/" className='hover:text-gray-100 hover:drop-shadow-white-text transition'>
                        HOME
                    </Link>
                    <Link to="/projects" className='hover:text-gray-100 transition hover:drop-shadow-white-text'>
                        PROJECTS
                    </Link>
                </ul>
            </div>
        </nav>
    )
}