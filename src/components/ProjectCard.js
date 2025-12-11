import { Col }  from 'react-bootstrap';

export const ProjectCard = ({imgUrl, imgLink}) => {
    return (
        <Col xs={12} sm={6} md={4}>
            <div className="proj-imgbx">
                {imgLink ? (
                  <a href={imgLink} target="_blank" rel="noopener noreferrer">
                    <img src={imgUrl} alt="Project" />
                  </a>
                ) : (
                  <img src={imgUrl} alt="Project" />
                )}
                <div className="proj-txtx">
                </div>
            </div>
        </Col>
    )
}