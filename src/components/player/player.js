import ReactPlayer from "react-player"
export default function VideoPlayer(props){
    return(
        <ReactPlayer url={props.url} controls ={true} width = "90%" height= "790px"/>
    )
}