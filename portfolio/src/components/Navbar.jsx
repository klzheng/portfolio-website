import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="flex justify-between bg-neutral-900 px-32 py-6 border-b-2 border-neutral-600">
            <div>
            &#60;klzheng&#62;
            </div>
            <div>
                <ul className="flex space-x-10">
                    <Link to="/">
                        HOME
                    </Link>
                    <Link to="/projects">
                        PROJECTS
                    </Link>
                </ul>
            </div>
        </nav>
    )
}