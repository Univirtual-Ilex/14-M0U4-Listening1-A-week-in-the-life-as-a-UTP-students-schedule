import React, {useRef} from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import DraggableItem from '../Draggable'
import Area from '../AreaDrop'
import ButtonUi from '../ButtonControlUI'
import Modal from '../Generales/Modal'
import ButtonCheck from '../ButtonCheck'
import AreaCircle from '../AreaCircle'

import {IRow, ICol} from '../Grid'

// Styles
import styled from 'styled-components'
import styles, { DraggablesContainer, AreasContainer, UiButtonsContainer } from './Actividad2_styles'
import Ilex from '../../App/variables'
// import interaction from './Actividad_interactions'
import dataItems from './Actividad2_data'
import { useState } from 'react'

const Actividad_base = ({staticContext, ...props}) => {

    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)


    
// Comprobar y aprobar el examen
    const comprobarPrueba = () => {
        var count = 0

        dataItems.map((data, i) => {
            if(data.right === 1){
                count ++;
            }else{
                setErr(true)
                setOk(false)
                setModal(true)
            }

            if(count === dataItems.length){
                setErr(false)
                setOk(true)
                setModal(true)
            }
        })
        
    }

    const setCheckedStatus = (id, status) => {
        dataItems[id].right = status
    }

// Refs de las areas
    const area_1 = useRef()
    const area_2 = useRef()
    const area_3 = useRef()
    const area_4 = useRef()
    const area_5 = useRef()
    const area_6 = useRef()
    const area_7 = useRef()
    const area_8 = useRef()
    const area_9 = useRef()
    const area_10 = useRef()
    const area_11 = useRef()
    const area_12 = useRef()

 
    return (
        <Container bgImage='./src/bg_actividad.png' {...props} id="area" h={45}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Move student information to their respective category and order' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad1'} } />
            </UiButtonsContainer>
            <div className="Main">
                <MainTitle color={Ilex.violeta2} pt={10}>
                WATCH THE VIDEOS AND THEN ORGANIZE THE INFORMATION
                </MainTitle>
            </div>
            

            <DraggablesContainer className="item-container">
                
                { dataItems.map((dato, i) => {
                    return(
                        <DraggableItem 
                            text={dato.name}
                            key={dato.id}
                            elementId={dato.id} 
                            className='dragItem' 
                            areaDrag="#area" 
                            target={dato.areaTarget}
                            setChecked={setCheckedStatus}
                            id={i}
                            ref={[area_1, area_2, area_3, area_4, area_5, area_6, area_7, area_8, area_9, area_10, area_11, area_12]}/>
                    )
                }) }

            </DraggablesContainer>
            <AreasContainer>
                <Area title='NAMES' >
                    <ICol pt={1} >
                        <AreaCircle  data-target="area_1" id="area_1" ref={area_1}> 1 </AreaCircle>
                        <AreaCircle  data-target="area_2" id="area_2" ref={area_2}> 2 </AreaCircle>
                        <AreaCircle  data-target="area_3" id="area_3" ref={area_3}> 3 </AreaCircle>
                        <AreaCircle  data-target="area_4" id="area_4" ref={area_4}> 4 </AreaCircle>
                    </ICol>
                </Area>
                <Area title='PROGRAM'  >
                    <ICol pt={1} >
                        <AreaCircle  data-target="area_5" id="area_5" ref={area_5}> 1 </AreaCircle>
                        <AreaCircle  data-target="area_6" id="area_6" ref={area_6}> 2 </AreaCircle>
                        <AreaCircle  data-target="area_7" id="area_7" ref={area_7}> 3 </AreaCircle>
                        <AreaCircle  data-target="area_8" id="area_8" ref={area_8}> 4 </AreaCircle>
                    </ICol>
                </Area>
                <Area title='SEMESTER' >
                    <ICol pt={1} >
                        <AreaCircle  data-target="area_9" id="area_9" ref={area_9}> 1 </AreaCircle>
                        <AreaCircle  data-target="area_10" id="area_10" ref={area_10}> 2 </AreaCircle>
                        <AreaCircle  data-target="area_11" id="area_11" ref={area_11}> 3 </AreaCircle>
                        <AreaCircle  data-target="area_12" id="area_12" ref={area_12}> 4 </AreaCircle>
                    </ICol>
                </Area>
            </AreasContainer>

            <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'/actividad2'} nxtUrl={'/actividad3'} />
                        
            <ButtonCheck onClick={comprobarPrueba} className="next" text={'NEXT'} />

        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad