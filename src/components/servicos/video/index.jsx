import style from "./video.module.css"

import ReactPlayer from "react-player"



function Video({videoURL}){
    return(
        <div className={style.container}>
            <ReactPlayer
                url={videoURL}
                controls={true}
            />
        </div>
    )
}

export default Video;