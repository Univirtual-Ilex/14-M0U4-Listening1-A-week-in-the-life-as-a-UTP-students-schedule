
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ButtonWatch_styles'
import ButtonTF from '../ButtonTF'

// Componente base
const ButtonWatch_base = ({video1, video2, video3, video4, ...props}) => {
    const btn = () => {
        switch(true){
            case video1: 
            return(
                <div className='video1'></div>
            )
            case video2:
                return(
                    <div className='video2'></div>
                )
            case video3:
                return(
                    <div className='video3'></div>
                )
            case video4:
                return(
                    <div className='video4'></div>
                )
            default: 
                    return (
                        <div>
                            {props.children}
                        </div>
                    )
        }
    }

    return (
        <div {...props}>
            <button className="btn watch">
                { btn() }
            </button>
        </div>
    )
}
const ButtonWatch = styled(ButtonWatch_base)`${ styles }`
export default ButtonWatch
