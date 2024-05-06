import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    background-color: #1a1a1a;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 0cap;
    color: #ffffff;
    margin-right: 12px;
    text-decoration: none;
`

export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 0cap;
    color: #ffffff;
    margin-right: 12px;
    text-decoration: none;
`

export const Interrogation = styled.div`
    background-color: white;
    color: #000;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`

export const ImgPerfil = styled.img`
    background-color: white;
    border: 2px solid green;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin: 0 20px;
`


export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #ffffff;
    
`

export const Logo = styled.img`
    width: 90px;
    margin-right: 20px;
`

export const Input = styled.input`
    background-color: transparent;
    border: 0;
    flex: 1;
    border: 0;
    color: #ffffff;
`