import Background from "../Background";
import Container from "../Container";
import Navbar from "../Navbar";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "../home/Contact";
import ProjectSection from "./ProjectSection";
import Footer from "../Footer";
import Navigate from "../Navigate";

export default function Projects() {

    const skills = [
        "Strong Work Ethic",
        "Teamwork & Collaboration",
        "Growth-oriented Mindset",
        "Leadership abilities",
        "Effective Communication",
        "Resourceful"
    ]

    return (
        <Background>
            <Navbar />
            <Container>
                <ProjectSection />

                <Experience />

                <Skills skills={skills}/>

                <Contact/>

                <Navigate page={"projects"}/>

                <Footer/>
            </Container>
        </Background>
    )
} 