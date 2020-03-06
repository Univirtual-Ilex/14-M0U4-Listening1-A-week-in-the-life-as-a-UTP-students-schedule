import styled, { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`

       
.contenedorButton{
    text-align:right;
    padding-right:3em;
}

li{
    margin:0.5em 0;
}
h4{
    margin-top: 2em;
    color:  rgba(84,236,194,1);
}
.container-content{
    margin-top: 3em;
}
h3{
    color: #666666;
}
.btn-check{
    margin-top:-3.2em;
}
.list{
    list-style: none;
    list-style-type: none;
}

`
export const Olist = styled.ol`
    color:${Ilex.textos};
    text-align:center;
    list-style:none;
    list-style-type: none;

`

export const Item = styled.li`
    font-weight:normal;
    list-style: none;
    list-style-type: none;
    padding:0;
    margin:0.2em 0;
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


export default styles
    