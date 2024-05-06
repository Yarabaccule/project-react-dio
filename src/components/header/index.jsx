import { Button } from "../button"
import { BuscarInputContainer, Logo, Column, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper } from "./styles"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Wrapper>
      <Container>
      <Row>
            <Logo src="https://hermes.dio.me/companies/a169bb67-5f72-4289-9778-fcea58dfa19a.png" alt="Logo da dio"/>
            <BuscarInputContainer>
                <Input placeholder="Buscar..." />
            </BuscarInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
        </Row>
        <Row>
            <Link to="/"><MenuRight >Home</MenuRight></Link>
            <Link to= "/login" ><Button title="Entrar"/></Link>
            <div>&nbsp;</div>
            <Link to= "/cadastro" ><Button title="Cadastrar"/></Link>
        </Row>
      </Container>
    </Wrapper>
  )
}

export {Header}
