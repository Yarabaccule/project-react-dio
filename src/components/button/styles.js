import styled, {css} from "styled-components";

export const ButtonContainer = styled.button`
background-color: black;
border-radius: 22px;
position: relative;
margin: 0 5px;
border: none;
cursor: pointer;

color: white;
padding: 2px 12px;
min-width: 120px;
width: 100%;

${({variant}) => variant != "primary" && css`
min-width: 167px;
height: 33px;

background-color: #e41050;    

&::after{
        content: '';
        position: absolute;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
        border: 1px solid #e41050;
}
    
`}
`