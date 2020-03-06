import styled, {css} from 'styled-components'
// eslint-disable-next-line
import Ilex from '../../App/variables'
// eslint-disable-next-line
import animations from './Actividad2_animations'

const mistyles = css`
.Main{
    margin-top: 2em;
}
.next{
    margin-top: -5.15em;
}
.item-container{
    height: 10em;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
`

export const DraggablesContainer = styled.div`
    width: 90%;
    margin: auto;
    padding: 0.4em 1em;
    text-align:center;
    margin-top: 2em;
`

export const AreasContainer = styled(DraggablesContainer)`
    display:flex;
    justify-content:center;
    align-items: center ;
`

export const MainTitle = styled.div`
    width: 60%;
    margin-top: 5em;
`

export const UiButtonsContainer = styled.div`
    width:6.5em;
    height:3em;
    display: flex;
    justify-content:space-between;
    right:0;
    position:absolute;
    right:1.6em;
    top:1em;

`

export default {mistyles , DraggablesContainer, AreasContainer, MainTitle}