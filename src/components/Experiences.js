import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import backgroundImg from "../assets/img/blue-cloud-dark-cropped-bg.jpg";

const iconSize = 20;

export const Experiences = () => {
    return (
        <div
            className="experiences"
            id="experiences"
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                padding: '80px 0'
            }}
        >
            <h2 className="experience-title"> experiences: </h2>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ 
                            background: '#ffffffff', 
                            color: '#fff',
                            width: iconSize,
                            height: iconSize,
                            padding: 0,
                            marginLeft: -iconSize / 2,
                            marginTop: iconSize
                        }}
                    >
                        <h3 className="vertical-timeline-element-title"> Computer Science Intern @ ASCEND Internship Program </h3>
                        <h3 className="vertical-timeline-element-company"> LinkedIn x Cornell Bowers CIS </h3>
                        <h3 className="vertical-timeline-element-date"> September 2025 - Now </h3>
                        <h4 className="vertical-timeline-element-location"> Ithaca, NY </h4>
                        
                        <ul className="description-list">
                            <li className="description-list-item"> Collaborated with peers to develop technical and professional skills. </li>
                            <li className="description-list-item"> Engaged in workshops and networking events to enhance industry knowledge. </li>
                            <li className="description-list-item"> Participated in team activities to foster collaboration and communication skills. </li>
                            <li className="description-list-item"> Gained insights into career paths and industry trends through mentorship and guidance. </li>
                        </ul>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>       
    );
}