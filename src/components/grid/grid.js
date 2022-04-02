import GridItem from "../gridItem.js/gridItem"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Spinner } from 'react-bootstrap';
export default function Grid(props){
    
    return(
        <div>
            <Container className="p-3">
                <Row>
                    {
                        props.data.map((item) =>(
                            <GridItem title = {item.title} image_url = {item.image_url} mal_id = {item.mal_id}/>
                        ))
                    }
                </Row>
                
            </Container>
        </div>
    )
}