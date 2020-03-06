import React, {useRef} from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import DraggableItem from '../Draggable'
import Area from '../AreaDrop'
import ButtonUi from '../ButtonControlUI'
import Modal from '../Generales/Modal'
import ButtonCheck from '../ButtonCheck'



// Styles
import styled from 'styled-components'
import styles, { DraggablesContainer, AreasContainer, UiButtonsContainer } from './Actividad2_styles'
import Ilex from '../../App/variables'
// import interaction from './Actividad_interactions'
import dataItems from './Actividad2_data'
import { useState } from 'react'

const Actividad_base = ({staticContext, ...props}) => {
    const [itemsCompletados, modItemsCompletados] = useState([])
    const insertarItems = (val) => {
        if (itemsCompletados.indexOf(val) === -1 ) {
            modItemsCompletados( itemsCompletados.concat(val) )
        } else {
            console.log('Cant Register because is already in area')
            console.log(itemsCompletados)
            console.log('La cantidad de items en el array es? ', dataItems.length)
        }

    }
// Comprobar y aprobar el examen
    const comprobarPrueba = () => {
        if(itemsCompletados.length === dataItems.length) {
            return true
        }
        return false
    }
// Refs de las areas
    const area_1 = useRef()
    const area_2 = useRef()
    const area_3 = useRef()

 
    return (
        <Container bgImage='./src/bg_actividad.png' {...props} id="area" h={35}>
            
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
                
                { dataItems.map((dato)=>{
                    return(
                        <DraggableItem name={dato.name} key={dato.id} elementId={dato.id} info={insertarItems} className='dragItem' areaDrag="#area" target={dato.areaTarget} ref={[area_1, area_2, area_3]}/>
                    )
                }) }

            </DraggablesContainer>
            <AreasContainer>
                <Area title='NAMES' data-target="area_1" id="area_1" ref={area_1}/>
                <Area title='PROGRAM' data-target="area_2" id="area_2" ref={area_2} />
                <Area title='SEMESTER' data-target="area_3" id="area_3" ref={area_3} />
            </AreasContainer>

            <Modal visible={comprobarPrueba()} ok w={25} nxtUrl='/actividad2A ' />
                        
            <ButtonCheck className="next">NEXT</ButtonCheck>

        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad