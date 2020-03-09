import React from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import {ICol, IRow} from '../Grid'
import Video from '../Video'
import ButtonCheck from '../ButtonCheck'
import BocinaButton from '../BocinaButton'
import ButtonAudio from '../ButtonAudio'
// Styles
import styled from 'styled-components'
import styles, { UiButtonsContainer, Olist } from './Actividad_styles'
import Ilex from '../../App/variables'

// Data
import data from './Actividad_data'
import tools from './Actividad_tools'
import tools1 from './Actividad_tools1'
import Tooltip from '../Tooltip/Tooltip'
import { useState } from 'react'
import { Item } from '../Actividad3/Actividad3_styles'









const Actividad_base =  ({staticContext, ...props}) => {
    const [tooltipVisible, settooltipVisible] = useState(false)
    const [tooltip2Visible, settooltip2Visible] = useState(false)


    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} h={40}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='See each video carefully to perform the following activities' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>
            <IRow pt={1.5}>
                <ICol py={ 0.5 }>
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    WATCH THE VIDEOS AND THEN ORGANIZE THE INFORMATION
                    </MainTitle>  
                </ICol>
            </IRow>
            <IRow>
                <ICol>
                    <IRow justify='center' align='center' w={100} gutters={0.5}>
                    { data.map((item, index) => {
                    return(
                        <div className="video_boxes" key={"video" + item.id}>
                            <Video videoSrc={item.media} w={15} radius>Click here to watch <strong>{ item.video }</strong></Video>
                        </div>
                        
                    )
                }) }
                    </IRow>
                <IRow justify='center' align='center' w={100} gutters={0.5}>

                       <div className="btn-listening" onClick={() => settooltipVisible(!tooltipVisible)}>
                           <img src="./src/listen1.png"/>
                       </div>
                       <Tooltip visible={tooltipVisible} cerrarbtn={() => settooltipVisible(!tooltipVisible)} className="Tooltip">
                               <h2>REMEMBER ORDINAL NUMBERS</h2>
                               { tools.map((item, index) => {
                                   return(
                                    <IRow key={"tools" + item.id} className="numbers">
                                        <ICol>
                                            <IRow>
                                                <ICol w={15}>
                                                <ButtonAudio src={item.audio}></ButtonAudio>
                                                </ICol>
                                                <ICol w={25}>
                                                    <h3>{item.title}</h3>
                                                </ICol>
                                                <ICol w={60}>
                                                    <h3>{item.text}</h3>
                                                </ICol> 
                                            </IRow>
                                        </ICol>
                                    </IRow>
                                   )
                               })                                   
                               }
                           </Tooltip>
                       <div className="btn-listening" onClick={() => settooltip2Visible(!tooltip2Visible)}>
                           <img src="./src/listen2.png"/>
                       </div>
                       <Tooltip visible={tooltip2Visible} cerrarbtn={() => settooltip2Visible(!tooltip2Visible)}>
                               <h2>PRACTICE UTP'S PROGRAMS</h2>
                               <IRow className="tools-container">
                               { tools1.map((item, index) => {
                                   return(
                                        <ICol className="item-tools" w={20} key={item.id}>
                                            <IRow>
                                                <ICol>
                                                    <h3>{item.title}</h3>
                                                    <ButtonAudio src={item.audio} className="tools"></ButtonAudio>
                                                    <div className="programs">
                                                        {item.programs.map((program, indexb) => {
                                                        return(
                                                            <div key={"program" + indexb}>{program}</div>
                                                            )
                                                         })
                                                        }
                                                    </div>
                                                 </ICol>
                                            </IRow>
                                        </ICol>                                
                                   )
                               })                                   
                               }
                               </IRow>
                           </Tooltip>
                </IRow>
                </ICol>
            </IRow>
            <ButtonCheck link={'/actividad2'} className="next" text={'NEXT'} />          
        </Container>
        
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad