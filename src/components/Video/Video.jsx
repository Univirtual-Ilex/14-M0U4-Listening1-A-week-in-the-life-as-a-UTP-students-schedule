
//Import
import React, { useRef } from 'react'
import styled from 'styled-components'
import styles from './Video_styles'
import ButtonMedia from '../ButtonMedia/ButtonMedia'
import ButtonWatch from '../ButtonWatch'
import ButtonInfo from '../ButtonInfo'
import { useState } from 'react'

/**
 * PROPS
 * w = ancho
 * h= alto
 * videoSrc = url video
 */

// Componente base
const Video_base = ({ h, w, videoSrc, radius, ...props}) => {
    const ilxVideo = useRef()
    const [running, setrunning] = useState(false)
    const vplay = () => {
        ilxVideo.current.play()
        ilxVideo.current.controls = true
        setrunning(true)
    }
    const pause = () => {
        ilxVideo.current.pause()
        setrunning(false)
    }
    const repeat =() => {
        ilxVideo.current.load()
        vplay()
    }
    const toogleVideo =() =>{
        if(!running){
            vplay()
        }
        else{
            pause()
        }
    }
    return (
        <div {...props}>
            <video width={ 1280 } height={ 720 } ref={ilxVideo} >
                <source src={ videoSrc } type='video/mp4' poster='src/poster.png'/>
                <p> Este navegador no soporta la etiqueta video </p>
            </video>
            <div className="controls">
            <ButtonInfo onClick={()=>toogleVideo()}>{ props.children }</ButtonInfo>
            </div>

        </div>
    )
}
const Video = styled(Video_base)`${ styles }`
export default Video
