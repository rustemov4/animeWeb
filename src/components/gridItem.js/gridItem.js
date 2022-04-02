import {Card,Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import './gridItem.css'
import { useNavigate } from "react-router-dom"
export default function GridItem(props){
    let navigate = useNavigate()
    return(
      
            <Col xs ={12} sm={6} md ={4} lg={3} className='mt-3 griditem' >
                <Card className=' h-100 shadow-sm '>
                    <Card.Img className='card-img-top'src = {props.image_url} onClick = {() => navigate(`/anime/${props.mal_id}`)}/>
                    <Card.Body>
                        <Card.Title>
                            {props.title}
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
   
    )
}