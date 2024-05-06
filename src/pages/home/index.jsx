import { Link } from "react-router-dom"
import { Button } from "../../components/button"
import { Header } from "../../components/header"
import { HomeContainer, HomeTitle, TitleHighlight, TextContent } from "./styles";

const Home = () =>{
    return(
        <>
                <Header/>
                <HomeContainer>
                    <div>
                        <HomeTitle>
                            <TitleHighlight>
                                Implemente
                                <br/>
                            </TitleHighlight>
                            O seu futuro agora!
                        </HomeTitle>
                        <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                     desafio profissional, evoluindo em comunidade com os melhores experts.
                        </TextContent>
                        <Button title="Começar Agora" variant="secodary" onClick={() =>{}}/>
                    </div>
                    <div>
                        <img src="https://raw.githubusercontent.com/pablohdev/dio-clone/58854d83bc67f9f8cb8c5cd0135b58d27436f02f/src/assets/banner.png" alt="imagem principal" />
                    </div>
                </HomeContainer>
        </>
    )
}

export {Home}