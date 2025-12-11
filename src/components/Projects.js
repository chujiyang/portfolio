import {Container, Row, Col, Tab, Nav} from 'react-bootstrap';
import {ProjectCard} from "./ProjectCard";
import prod1 from "../assets/img/prod-1.png";
import prod2 from "../assets/img/prod-2.png";
import prod3 from "../assets/img/prod-3.png";
import cw1 from "../assets/img/critter_world_1.png";
import cw2 from "../assets/img/critter_world_2.png";
import cw3 from "../assets/img/critter_world_3.png";
import rea from "../assets/img/research.png";
import black from "../assets/img/black_background.png";

export const Projects = () => {
    //Holds info about the project
    const project1 = [
        {
            imgUrl: cw1,
        },
        {
            imgUrl: cw2,
        },
        {
            imgUrl: cw3,
        }
    ];

    const project2 = [
        {
            imgUrl: black,
        },
        {
            imgUrl: rea,
            imgLink: "https://www.academia.edu/125005015/Ethical_Regulation_in_the_AI_Marketplace",
        },
        {
            imgUrl: black,
        },
    ];

    const project3 = [
        {
            imgUrl: prod1,
        },
        {
            imgUrl: prod2,
        },
        {
            imgUrl: prod3,
        }
    ];
    
    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2 className="project-title">recent projects:</h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first"> 
                            <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">cs2112 critter world</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">ai ethics research</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">productivity app</Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            project1.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            project2.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            project3.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}