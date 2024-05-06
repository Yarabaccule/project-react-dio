import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../components/button"
import { Header } from "../../components/header"
import { LoginContainer, LoginTitle, LoginSubtitleSecond, EsqueciText, CriarText, LoginWrapper, LoginColumn, LoginRow, ErrorText } from "./styles";
import { Input } from "../../components/input";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../services/api';

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(3,'No minimo 3 carcteres').required(),
}).required();

const Login = () =>{

    const navigate = useNavigate();
    const {control, handleSubmit, watch, formState: {errors, isValid}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
    const onSubmit = async formData => {
        try{
            const {data}  = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1){
                navigate('/firstpage')
            }else{
                alert('Incorreto')
            }
        }catch {
            alert('Houve um erro.')
        }
    }
    
    return(
        <>
                <Header/>
                <LoginContainer>
                    <LoginColumn>
                        <LoginTitle>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.    </LoginTitle>
                    </LoginColumn> 
                    <LoginColumn>
                        <LoginWrapper>
                            <LoginTitle>Faça seu Cadastro</LoginTitle>
                            <LoginSubtitleSecond>Faça seu login e make the change</LoginSubtitleSecond>
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" control={control} placeholder="E-mail"/>
                            <Input name="password" control={control} placeholder="Senha" type="password"/>
                            <Button title="Entrar" variant="secondary" type="submit"/>
                            </form>
                            <LoginRow>
                                <EsqueciText>Esqueci minha senha</EsqueciText>
                                <CriarText>Criar conta</CriarText>
                            </LoginRow>
                        </LoginWrapper>
                    </LoginColumn>
                </LoginContainer>
        </>
    )
}

export {Login}