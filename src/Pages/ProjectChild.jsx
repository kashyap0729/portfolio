import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function ProjectChild(props){

    return(
        <Card className="custom-card sm:text-xl sm:leading-snug text-center neo-brutalism-white py-4 px-8 text-black mx-5 info-Box"  style={{ width: '36rem' }}>
        <Card.Img className="project-image" variant="top" src={props.image}/>
        <Card.Body>
            <Card.Title className="custom-title">{props.designation}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.title}</Card.Subtitle>
            {props.technologies && (
                    <Card.Text className="custom-technologies">
                        <strong>Tools:</strong> {props.technologies}
                    </Card.Text>
                )}
                <Card.Text className="custom-text">
                {props.description}
            </Card.Text>
            <Button className="custom-button" variant="primary" href={props.link}>Link</Button>
        </Card.Body>
    </Card>
    
     );
}
export default ProjectChild;