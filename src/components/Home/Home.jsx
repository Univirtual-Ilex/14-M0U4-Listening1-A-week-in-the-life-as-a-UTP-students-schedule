import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import ButtonX from '../ButtonX'
import estilos_home from './Home_styles'

import { ButtonLink } from '../ButtonX'

const Home_base = function ({...props}) { // se le pasan las props para recibir los styled components

    return (
        <Container {...props}  row bgImage="src/bg.png">

                    <div className='bloque-izquierdo entrada-top-Y-2'>
                        <div className='bloque-izquierdo-container'>
                            <h1> A week in the life as a UTP student </h1>
                            <p>
                            This activity count with 2 parts, you must pass each exercise to finish
                            <span className='negrilla'> <br/> <br/> ¡Time to practice your listening skill!</span></p>
                            <ButtonLink to='/actividad1'>Start</ButtonLink>
                        </div>
                    </div>
                    <div className='bloque-derecho entrada-top-Y-3'>
                        <figure>
                            <img src='./src/cover.png' alt='Logo' />    
                        </figure>

                    </div>

        </Container>
    )
}

const Home = styled(Home_base)`
    ${ estilos_home }
`

export default Home