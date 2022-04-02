import { Col, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './sidebar.css'
import { useEffect, useState } from "react";
export default function Sidebar(prop){
    const [selected,setSelected] = useState(0)
    const genres = ["Action","Adventure","Comedy","Supernatural","Drama","Fantasy","Mystery","Romance"]
    var filtered = []
    const checkIncludes = (genre) =>{
      

        prop.all.map((anime) =>{
            anime.genres.map((ind) =>{
                if (ind.name === genre){
                    filtered.push(anime)
                  
                }
            })
        })
        prop.update(filtered)
        
    }
    
    return (
        <div>
            
            <Col className="sidebar ">
                {
                    genres.map(element => {
                        return (
                            <Row className="mt-2 genre shadow-sm" onClick={() => {
                                checkIncludes(element)
                            }}>{element}</Row>
                        )
                    })
                }
            </Col>
        </div>
    );
}