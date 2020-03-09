//Import
import React, {useState} from 'react'
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
import Data from './Actividad3_data'
import Modal from '../Generales/Modal'

// Componente base
const Actividad3_base = ({staticContext, ...props}) => {

    const [okInput0, setInput0] = useState(false)
    const [okInput1, setInput1] = useState(false)
    const [okInput2, setInput2] = useState(false)
    const [okInput3, setInput3] = useState(false)
    const [okInput4, setInput4] = useState(false)
    const [okInput5, setInput5] = useState(false)
    const [okInput6, setInput6] = useState(false)
    const [okInput7, setInput7] = useState(false)
    const [okInput8, setInput8] = useState(false)
    const [okInput9, setInput9] = useState(false)
    const [okInput10, setInput10] = useState(false)
    const [okInput11, setInput11] = useState(false)
    const [errInput0, setErrInput0] = useState(false)
    const [errInput1, setErrInput1] = useState(false)
    const [errInput2, setErrInput2] = useState(false)
    const [errInput3, setErrInput3] = useState(false)
    const [errInput4, setErrInput4] = useState(false)
    const [errInput5, setErrInput5] = useState(false)
    const [errInput6, setErrInput6] = useState(false)
    const [errInput7, setErrInput7] = useState(false)
    const [errInput8, setErrInput8] = useState(false)
    const [errInput9, setErrInput9] = useState(false)
    const [errInput10, setErrInput10] = useState(false)
    const [errInput11, setErrInput11] = useState(false)


    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)


    const checkAnswer = (id, text) => {
        var data = Data[id]
        if(text.toLowerCase() === data.answer.toLowerCase()){
            data.right = 1
            console.log(id)
            eval("setInput" + id)(true)
            eval("setErrInput" + id)(false)
        }else{
            data.right = 0
            console.log(id)
            eval("setErrInput" + id)(true)
            eval("setInput" + id)(false)
        }
    }

    const checkActivity = () => {
        var count = 0

        Data.map((data) => {
            if(data.right === 1)
                count ++
            else{
                setOk(false)
                setErr(true)
                setModal(true)
            }

            if(count === Data.length){
                setOk(true)
                setModal(true)
            }
        })
    }
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
                        <Item>8:00 to 10:00 a.m<InputWords changeCheck={checkAnswer} idArr={0} ok={okInput0} err={errInput0} /></Item>
                        <Item>2:00 to 4:00 p.m<InputWords changeCheck={checkAnswer} idArr={1} ok={okInput1} err={errInput1} /></Item>
                        <h4>Friday</h4>
                        <Item>3:00 to 5:00 p.m<InputWords changeCheck={checkAnswer} idArr={2} ok={okInput2} err={errInput2} /></Item>
                        
                    </Olist>

                </ICol>
                <ICol py={1.5} w={25}>
                <Olist> 
                        <h3>STUDENT 2</h3>
                        <h4>Tuesday</h4>
                        <Item>10:00 to 12:00 p.m<InputWords changeCheck={checkAnswer} idArr={3} ok={okInput3} err={errInput3} /></Item>
                        <h4>Wednesday</h4>
                        <Item>8:00 to 11:00 a.m<InputWords changeCheck={checkAnswer} idArr={4} ok={okInput4} err={errInput4} /></Item>
                    </Olist>
                </ICol>
                <ICol py={1.5} w={25}>
                <Olist>
                        <h3>STUDENT 3</h3>
                        <h4>Tuesday</h4>
                        <Item>7:00 to 9:00 a.m<InputWords changeCheck={checkAnswer} idArr={5}  ok={okInput5} err={errInput5} /></Item>
                        <Item>10:00 to 12:00 p.m<InputWords changeCheck={checkAnswer} idArr={6}  ok={okInput6} err={errInput6} /></Item>
                        <h4>Thursday</h4>
                        <Item>2:00 to 4:00 p.m<InputWords changeCheck={checkAnswer} idArr={7} ok={okInput7} err={errInput7} /></Item>
                        
                    </Olist>
                </ICol>
                <ICol py={1.5} w={25}>
                <Olist>
                        <h3>STUDENT 4</h3>
                        <h4>Monday</h4>
                        <Item>9:00 to 11:00 a.m<InputWords changeCheck={checkAnswer} idArr={8} ok={okInput8} err={errInput8} />.</Item>
                        <Item>12:00 to 2:00 p.m<InputWords changeCheck={checkAnswer} idArr={9} ok={okInput9} err={errInput9} />.</Item>
                        <h4>Tuesday</h4>
                        <Item>8:00 to 10:00 a.m<InputWords changeCheck={checkAnswer} idArr={10} ok={okInput10} err={errInput10} />.</Item>
                        <Item>4:00 to 6:00 p.m<InputWords changeCheck={checkAnswer} idArr={11} ok={okInput11} err={errInput11} />.</Item>
                        
                    </Olist>
                </ICol>
            </IRow>
            <ButtonCheck onClick={checkActivity} className="btn-check" text={'CHECK'} />
            <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'/actividad3'} finished={ok} />
        </Container>

    )
}
const Actividad3 = styled(Actividad3_base)`${ styles }`

export default Actividad3
