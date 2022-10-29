import Background from "../Background";
import Bio from "./Bio";
import Container from "../Container";
import Navbar from "../Navbar";
import TechStack from "./TechStack";

export default function Home() {
    return (
        <Background>
            <Navbar/>
            <Container>

                <Bio 
                    name={"Kevin"}
                    role={"Fullstack Developer"}/>

                <TechStack/>

            </Container>
        </Background>
    )
}