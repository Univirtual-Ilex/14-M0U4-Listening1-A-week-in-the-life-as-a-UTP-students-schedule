import { css } from 'styled-components'
import Ilex from '../../App/variables'
import {padding, margin} from '../Grid/Grid_styles'
const styles = css`

    width: ${ props => props.w || '20.20'}em;
    height: ${props => props.h ||'12.124'}em;
    background-color: ${Ilex.dragItem};
    background-image: url('src/estado_vacio.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size:25% auto;
    border-radius: 1em;
    border: 2px dashed ${Ilex.bordeGris};
    padding:${props => padding(props)};
    margin:${props => margin(props)};
    h3{
        color: ${Ilex.grisOscuro};
        text-transform: uppercase;
        text-align: center;
        margin-top: 0.8em;
    }
    margin-left:1.5em;
`

export default styles
    