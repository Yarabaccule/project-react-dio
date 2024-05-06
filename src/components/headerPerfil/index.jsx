import { Logo, Container, Menu, Interrogation, MenuRight, Row, Wrapper, ImgPerfil } from "./styles"
import { Link } from "react-router-dom"

const HeaderPerfil = () => {
  return (
    <Wrapper>
      <Container>
      <Row>
            <Logo src="https://hermes.dio.me/companies/a169bb67-5f72-4289-9778-fcea58dfa19a.png" alt="Logo da dio"/>
            <Menu>Cursos</Menu>
            <Menu>Carreira Global</Menu>
            <Menu>Curso de Inglês</Menu>
            <Menu>Vagas</Menu>
            <Menu>Artigos</Menu>
            <Menu>Rooms</Menu>
            <Menu>Seja Global</Menu>
        </Row>
        <Row>
            <Link to="/"><MenuRight><Interrogation>?</Interrogation></MenuRight></Link>
            <ImgPerfil src="https://hermes.dio.me/users/student/4f6f1dea-b1b4-441f-a592-1736c6337e47.jpg"/>
        </Row>
      </Container>
    </Wrapper>
  )
}

export {HeaderPerfil}
