import Background from "../Background";
import Bio from "./Bio";
import Container from "../Container";
import Navbar from "../Navbar";
import TechStack from "./TechStack";
import Contact from "./Contact";
import Footer from "../Footer";
import Navigate from "../Navigate";


export default function Home() {
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