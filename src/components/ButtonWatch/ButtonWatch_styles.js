import { css } from 'styled-components'


const styles = css`
display: inline-block;
margin: 0.2em;
position: relative;
    button{
        width:236px;
        height:70px;;
        cursor: pointer;
        border:none;
        background: none;
        background-image: url(./src/button_watch.png);
        transition: transform 0.15s ease-in-out;
        &:hover{
        background-position-y:-63px;
        }    
    }
    .video1{
        background-position: -236 0;
    }
    .video2{
        background-position: -462px 0px;
    }
    
`

export default styles
    