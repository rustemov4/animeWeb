import {useParams } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from "react";
import './animePage.css'
import 'bootstrap/dist/css/bootstrap.css';
import VideoPlayer from "../player/player";
export default function AnimePage(){
    const [anime,setAnime] = useState({})
    const {id} = useParams()
    useEffect(() =>{
        axios.get(`https://api.jikan.moe/v3/anime/${id}`)
        .then((res) =>{
            setAnime(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
        
    },[])
    console.log(anime)
    return(
        <div>
            <div className="navigation ">
                <h3>TheAnimeStudio</h3>
            </div>
            <div className="head ">
                <div className="header align-items-center">
                    <div className="">
                        <img src= {anime.image_url} className = "image"/>
                    </div>
                    <div className="header-body">
                        <div className="title">
                            <h1>{anime.title}</h1>
                            <h1 className="type">{anime.type}</h1>
                        </div>
                        <div className="genres d-flex">
                            {anime.genres?.map((genre) =>{
                                return <div className="gen">{genre.name}</div>
                            })}
                        </div>
                        <div className="desc">
                            {anime.synopsis}
                        </div>
                        <div className="characters">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center player-wrapper">
                <VideoPlayer url = {anime.trailer_url} className = "react-player"/>
            </div>
        </div>

    )
}