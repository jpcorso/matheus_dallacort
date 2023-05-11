import style from "./video.module.css"

import ReactPlayer from "react-player"



function Video({videoURL}){
    return(
        <ReactPlayer
            url={videoURL}
            controls={true}
        />
    )
}

export default Video;