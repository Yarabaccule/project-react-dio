import { Link } from "react-router-dom"
import { Button } from "../../components/button"
import { HeaderPerfil } from "../../components/headerPerfil"
import { FirstPageContainer, Projects, Skills, MidleIcons, MidleFirstPageContainer, MidleIconsContent, MidleIconsText, ImgSkills, MidleImg, FirstPageBody, ImgProjetc, Span, Perfil, ProjectsButton, PerfilText, IconsPart, PerfilContainer, ProjectText, ImgContainer, LoginTitle, LoginTitleSecond, LoginSubtitleSecond, EsqueciText, CriarText, LoginWrapper, FirstPageLoginColumn, LoginRow } from "./styles";
import { Input } from "../../components/input";
import { UserInfo } from "../../components/userInfo";
const FirstPage = () =>{
    return(
        <>
                <FirstPageBody>
                <HeaderPerfil/>
                <FirstPageContainer>
                    <Perfil><FirstPageLoginColumn>
                        <PerfilContainer>
                            <ImgContainer src="https://hermes.dio.me/users/student/4f6f1dea-b1b4-441f-a592-1736c6337e47.jpg"/>
                            <PerfilText>Yara Baccule<br/><UserInfo percentual={35}/></PerfilText>
                            
                        </PerfilContainer>
                        <Skills>
                        <p>30<Span>Habilidades</Span></p>
                        <p>19<Span>Projetos</Span></p>
                        <p>10<Span>Artigos</Span></p>
                        </Skills>

                        <LoginSubtitleSecond>Carreira Selecionada</LoginSubtitleSecond>
                        
                        <PerfilText>FRONT-END DEVELOPER</PerfilText>
                        <ImgSkills src="https://hermes.dio.me/skills/bb34a26f-52a7-4861-a6e3-39ade2145dcb.png"/>
                        <ImgSkills src="https://hermes.dio.me/skills/778cca6e-84d5-4ad9-b9f8-bac44e7b0e2a.png"/>

                    </FirstPageLoginColumn></Perfil> 
                    <FirstPageLoginColumn>
                        <MidleImg src="https://ifpr.edu.br/paranagua/wp-content/uploads/sites/20/2021/05/Capa_Cortada_Santander.png"/>
                        <PerfilText>FORMAÇÕES RECOMENDADAS</PerfilText>
                        <LoginSubtitleSecond>Selecionamos para você as formações com os melhores salários do mercado</LoginSubtitleSecond>
                    <MidleFirstPageContainer>
                        <Perfil><MidleIconsContent><MidleIcons src="https://hermes.dio.me/tracks/90d15bc9-7eb9-4f23-a8f3-270e21549699.png"/>
                            <MidleIconsText>ChatGPT for Devs</MidleIconsText></MidleIconsContent></Perfil>
                        <Perfil><MidleIconsContent><MidleIcons src="https://hermes.dio.me/tracks/62104148-bf3c-4c12-998a-b08891730747.png"/>
                        <MidleIconsText>Lua Developer</MidleIconsText></MidleIconsContent></Perfil>
                        <Perfil><MidleIconsContent><MidleIcons src="https://hermes.dio.me/tracks/40dc22da-adb7-4455-9eab-6cfc65ecd133.png"/>
                        <MidleIconsText> OutSystems<br/>Fundamentals</MidleIconsText></MidleIconsContent></Perfil>
                    </MidleFirstPageContainer>
                    </FirstPageLoginColumn>
    
                    <IconsPart><FirstPageLoginColumn>
                    <PerfilText>TOP PROJETOS PARA VOCÊ</PerfilText>
                    <Projects><ImgProjetc src="https://hermes.dio.me/lab_projects/badges/ea86592c-9b5a-4db7-9e0e-80239113af4b.png"/> <ProjectText>Integrando o ChatGPT com Node e React<ProjectsButton>ChatGPT</ProjectsButton></ProjectText></Projects>
                    <Projects><ImgProjetc src="https://hermes.dio.me/lab_projects/badges/f89509e4-3dc8-4ca8-acfa-27ed2b42e9a6.png"/> <ProjectText>Widget de Previsão do Tempo Utilizando Web Comp...<ProjectsButton>JavaScript</ProjectsButton></ProjectText></Projects>
                    <Projects><ImgProjetc src="https://hermes.dio.me/lab_projects/badges/2b7d9fae-31f2-4913-87e6-6e79402e0307.png"/> <ProjectText>Widget de Previsão do Tempo Utilizando Web Comp...<ProjectsButton>JavaScript</ProjectsButton></ProjectText></Projects>
                    </FirstPageLoginColumn></IconsPart>
                </FirstPageContainer>
                </FirstPageBody>
        </>
    )
}

export {FirstPage}