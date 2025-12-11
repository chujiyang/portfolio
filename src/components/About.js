
import { Container, Col, Row } from "react-bootstrap";
import aboutImg from "../assets/img/self-pic2.jpg";

export const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-box">
                <Container>
                    <Row className="align-items-center">
                        <Col md={5}>
                            <img src={aboutImg} alt="About-me" className="about-img"/>
                        </Col>
                        <Col md={6} className="about-info">
                            <h2>about me:</h2>
                            <p> Hello! I'm Emily Yang, a software engineer passionate about leveraging technology to create impactful solutions. Currently, I'm pursuing my Computer Science degree at Cornell University. My interests lie in full-stack development, autonomous systems, and exploring the intersection of technology and society. Beyond coding, I enjoy digital art, weightlifting, and sewing. I'm always eager to connect with like-minded individuals and explore collaborative opportunities. Feel free to reach out!</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}