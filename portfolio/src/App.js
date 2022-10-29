import { Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./components/home/Home";
import NotFound from "./components/NotFound";


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    );
}

