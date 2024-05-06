import { Link } from "react-router-dom";
import { Button } from "../../components/button"
import { Header } from "../../components/header"

import { LoginContainer, LoginTitle, LonginInputContainer, LoginSubtitleSecond, ContaText, SpanConta, Input, LoginWrapper, LoginColumn } from "./styles";
import { useState } from "react"; 

const Cadastro = () => {
    // Definindo estados para os inputs
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode fazer o que precisa com os dados do formulário
        console.log("Nome:", nome);
        console.log("E-mail:", email);
        console.log("Senha:", password);
    }

    return (
        <>
            <Header/>
            <LoginContainer>
                <LoginColumn>
                    <LoginTitle>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                    </LoginTitle>
                </LoginColumn> 
                <LoginColumn>
                    <LoginWrapper>
                        <LoginTitle>Faça seu Cadastro</LoginTitle>
                        <LoginSubtitleSecond>Crie sua conta e make the change!</LoginSubtitleSecond>
                        
                        <form onSubmit={handleSubmit}>
                            <LonginInputContainer><Input 
                                type="text"
                                name="nome"
                                placeholder="Nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            /></LonginInputContainer>
                            <LonginInputContainer><Input 
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            /></LonginInputContainer>

                            <LonginInputContainer><Input 
                                type="password"
                                name="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            /></LonginInputContainer>

                            <Button title="Entrar" variant="secondary" type="submit"/>
                        </form>
                        <ContaText>
                        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</ContaText>
                            <ContaText>Já tenho conta. <Link to="/login"><SpanConta>Fazer login</SpanConta></Link></ContaText>
                    </LoginWrapper>
                </LoginColumn>
            </LoginContainer>
        </>
    )
}

export {Cadastro}
