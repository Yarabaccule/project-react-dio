import styled from "styled-components";


export const Progress = styled.div`
    width: 180px;
    height: 6px;
    background-color: #FFFFFF;
    border-radius: 3px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual}) => percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
    }
` 