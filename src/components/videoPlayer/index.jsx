import React, {useState, useRef, useEffect} from "react";
import style from "./videoPlayer.module.css"

function usePlayerState($videoPlayer){  
    const [playerState, setPlayerState] = useState({
        playing: false,
        percentage: 0,
    });

    useEffect(()=> {
        playerState.playing ? $videoPlayer.current.play() : $videoPlayer.current.pause()
    }, [
        $videoPlayer,
        playerState.playing
    ])

    function toggleVideoPlay(){
        setPlayerState({
            ...playerState,
            playing: !playerState.playing,
        })
    }

    function handleTimeUpdate(){
        const currentPercentage =  ($videoPlayer.current.currentTime / $videoPlayer.current.duration) * 100

        setPlayerState({
            ...playerState,
            percentage: currentPercentage,
        })
    }

    function handleChangeVideoPercentage(event){
        const currentPercentageValue = event.target.value
        $videoPlayer.current.currentTime = ($videoPlayer.current.duration / 100) * currentPercentageValue

        setPlayerState({
            ...playerState,
            percentage: currentPercentageValue,
        })

    }

    return{
        playerState,
        toggleVideoPlay,
        handleTimeUpdate,
        handleChangeVideoPercentage
    }

}

export default function VideoPlayer({videoURL, thumbnail}){

    const $videoPlayer = useRef(null);

    const {
        playerState,
        toggleVideoPlay,
        handleTimeUpdate,
        handleChangeVideoPercentage

    } = usePlayerState($videoPlayer);

    return(
        <div className={style.videoWrapper}>
            <video
                ref={$videoPlayer}
                src= {videoURL}
                poster={thumbnail}
                onTimeUpdate={handleTimeUpdate}

            />

            <div className={style.controls}>
                <button onClick={toggleVideoPlay}>
                    {playerState.playing ? "Pause" : "Play"} {/* Se o player tá rodando mostra a opção de pausar, se não está, mostra a opção de dar play */}
                </button>

                <input
                    type="range"
                    min="0"
                    max="100"
                    value={playerState.percentage}
                    onChange={handleChangeVideoPercentage}
                />
                <select>
                    {[1,2,3].map(speed => (
                        <option
                            key={`speedChange_${speed}`}
                        > 
                        {speed} 
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}