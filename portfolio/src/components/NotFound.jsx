import Background from "./Background";
import Container from "./Container";
import Navbar from "./Navbar";

export default function NotFound() {
    return (
        <Background>
            <Navbar/>
            <Container>
                <div>Page not found</div>
            </Container>
        </Background>
    )
}