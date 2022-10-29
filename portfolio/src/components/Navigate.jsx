import { useEffect } from "react"
import { useState } from "react"
import { TfiAngleDoubleRight } from "react-icons/tfi"
import {Link} from "react-router-dom"

export default function Navigate(props) {

    const {page} = props
    const [hoverHome, setHoverHome] = useState({page})

    useEffect(() => {
        if (page === "/") setHoverHome(true)
        else if (page === "projects") setHoverHome(false)
    }, [setHoverHome, page])

    return (
        <div className="mb-16 mt-5">
            <ul className="space-y-2 flex flex-col items-end">
                <li className="text-gray-200 font-semibold">NAVIGATE</li>
                <li className="flex items-center relative">
                    {hoverHome && 
                    <TfiAngleDoubleRight
                        className="text-gray-400 text-2xl bounce-right" />}
                    <Link 
                        to="/"
                        onClick={() => setHoverHome(true)}
                        className="hover:text-gray-200 hover:scale-110 transition-all">
                        home
                    </Link>
                </li>
                <li className="flex items-center relative">
                    {!hoverHome && 
                    <TfiAngleDoubleRight
                        className="text-gray-400 text-2xl bounce-right" />}
                    <Link 
                        to="/projects"
                        onClick={() => setHoverHome(false)}
                        className="hover:text-gray-200 hover:scale-110 transition-all">
                        projects
                    </Link>
                </li>
            </ul>
        </div>
    )
}