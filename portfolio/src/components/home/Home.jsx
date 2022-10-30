import Background from "../Background";
import Bio from "./Bio";
import Container from "../Container";
import Navbar from "../Navbar";
import TechStack from "./TechStack";
import Contact from "./Contact";
import Footer from "../Footer";
import Navigate from "../Navigate";
import { useEffect } from "react";


export default function Home() {

    useEffect(() => {
        document.title = "Portfolio"
    },[])

    return (
        <Background>
            <Navbar/>
            <Container>

                <Bio 
                    name={"Kevin"}
                    role={"Fullstack Developer"}/>

                <TechStack/>

                <Contact/>

                <Navigate 
                    page={"home"}/>
                <Footer />
            </Container>
        </Background>
    )
}