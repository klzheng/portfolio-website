import { Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./components/home/Home";
import NotFound from "./components/NotFound";
import Projects from "./components/projects/Projects";


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    );
}

