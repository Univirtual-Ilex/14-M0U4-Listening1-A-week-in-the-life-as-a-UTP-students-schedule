//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Actividad3_styles'
import Container from '../Container'
import Ilex from '../../App/variables'
import ButtonUi from '../ButtonControlUI'

import ButtonCheck from '../ButtonCheck'
import MainTitle from '../MainTitle'
import InputWords from '../InputWords'

// styles from styled
import {Olist} from './Actividad3_styles'
import {Item}from './Actividad3_styles'
import {UiButtonsContainer} from './Actividad3_styles'
import ButtonModal from '../ButtonModal'
import { IRow, ICol } from '../Grid'


// Componente base
const Actividad3_base = ({...props}) => {
    return (
        <Container {...props} bgImage='./src/bg_actividad1.png' w={70} h={42}>
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Complete the boxes with the subjects of each student in their their corresponding  schedule ' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad1'} } />
            </UiButtonsContainer>

            <div className='container-content'>
                <MainTitle color={Ilex.violeta2}>
                    AFTER WATCHING THE VIDEOS, COMPLETE AND WRITE THE FOLLOWING SCHEDULES WITH THE CORRESPONDING SUBJECTS FOR EACH STUDENT
                </MainTitle>
            </div>

            <IRow>                
                <ICol py={1.5} w={25}>
                    <Olist className="list">
                        <h3>STUDENT 1</h3>
                        <h4>Wednesday</h4>
                        <Item>8:00 to 10:00 a.m<InputWords />.</Item>
                        <Item>2:00 to 4:00 p.m<InputWords />.</Item>
                        <h4>Friday</h4>
                        <Item>3:00 to 5:00 p.m<InputWords />.</Item>
                        
                    </Olist>

                </ICol>
                <ICol py={1.5} w={25}>
                <Olist> 
                        <h3>STUDENT 2</h3>
                        <h4>Tuesday</h4>
                        <Item>10:00 to 12:00 p.m<InputWords />.</Item>
                        <h4>Wednesday</h4>
                        <Item>8:00 to 11:00 a.m<InputWords />.</Item>
                    </Olist>
                </ICol>
                <ICol py={1.5} w={25}>
                <Olist>
                        <h3>STUDENT 3</h3>
                        <h4>Tuesday</h4>
                        <Item>7:00 to 9:00 a.m<InputWords />.</Item>
                        <Item>10:00 to 12:00 p.m<InputWords />.</Item>
                        <h4>Thursday</h4>
                        <Item>2:00 to 4:00 p.m<InputWords />.</Item>
                        
                    </Olist>
                </ICol>
                <ICol py={1.5} w={25}>
                <Olist>
                        <h3>STUDENT 4</h3>
                        <h4>Monday</h4>
                        <Item>9:00 to 11:00 a.m<InputWords />.</Item>
                        <Item>12:00 to 2:00 p.m<InputWords />.</Item>
                        <h4>Tuesday</h4>
                        <Item>8:00 to 10:00 a.m<InputWords />.</Item>
                        <Item>4:00 to 6:00 p.m<InputWords />.</Item>
                        
                    </Olist>
                </ICol>
            </IRow>
            <ButtonCheck className="btn-check"></ButtonCheck>
        </Container>

    )
}
const Actividad3 = styled(Actividad3_base)`${ styles }`

export default Actividad3
