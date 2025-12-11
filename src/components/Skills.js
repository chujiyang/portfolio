
import Carousel from "react-multi-carousel";
import { Container, Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
//https://icons8.com/icons/all--style-bubbles
import ai from "../assets/img/ai.png";
import python from "../assets/img/python.png"; 
import java from "../assets/img/java.png";
import webdev from "../assets/img/web_dev.png";
import appdev from "../assets/img/app_dev.png";
import chrome from "../assets/img/chrome.png";
import datastructures from "../assets/img/data_structures.png"; 
import github from "../assets/img/github.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 4
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 3
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 3
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2 className="skill-title">
                                skills:
                            </h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={ai} alt="Skill image" />
                                    <h5 className> Artificial Intelligence Research </h5>
                                    <ul class="skills-list"> 
                                        <li class="skills-list-item"> Qualitative Academic Writing </li>
                                        <li class="skills-list-item"> AI Ethics </li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <img src={webdev} alt="Skill image" />
                                    <h5> Web Development </h5>
                                    <ul class="skills-list"> 
                                        <li class="skills-list-item"> React JS </li>
                                        <li class="skills-list-item"> Node JS </li>
                                        <li class="skills-list-item"> JavaScript/HTML/CSS </li>
                                        <li class="skills-list-item"> Bootstrap </li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <img src={appdev} alt="Skill image" />
                                    <h5> App Development </h5>
                                    <ul class="skills-list"> 
                                        <li class="skills-list-item"> REST API </li>
                                        <li class="skills-list-item"> Client/Server Architecture </li>
                                        <li class="skills-list-item"> MVC Design Pattern </li>
                                        <li class="skills-list-item"> MVVM Design Pattern </li>
                                        <li class="skills-list-item"> JavaFX </li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <img src={chrome} alt="Skill image" />
                                    <h5> Chrome Extension Development </h5>
                                    <ul class="skills-list"> 
                                        <li class="skills-list-item"> Chrome Extensions API </li>
                                        <li class="skills-list-item"> Anthropic Claude </li>
                                        <li class="skills-list-item"> Google Gemini </li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <img src={datastructures} alt="Skill image" />
                                    <h5> Data Structures & Algorithms </h5>
                                </div>
                                <div className="item">
                                    <img src={github} alt="Skill image" />
                                    <h5> GitHub </h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="Skill image" />
                                    <h5> Python </h5>
                                    <ul class="skills-list"> 
                                        <li class="skills-list-item"> Django Framework </li>
                                        <li class="skills-list-item"> Pip/Virtualenv </li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <img src={java} alt="Skill image" />
                                    <h5> Java </h5>
                                    <ul class="skills-list"> 
                                        <li class="skills-list-item"> Object-Oriented Programming </li>
                                        <li class="skills-list-item"> Maven/Gradle </li>
                                    </ul>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}