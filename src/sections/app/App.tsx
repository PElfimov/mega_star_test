import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Row, Col} from "react-bootstrap"
import {Navigation} from "../../components/navigation"
import styles from "./App.module.css"
import Routes from "./routes"

function App() {
  return (
    <Container className={`bg-light d-flex flex-column ${styles.root}`}>
      <Row>
        <Col className={`bg-dark`}>
          <h1 className={`text-white`}>Header</h1>
        </Col>
      </Row>
      <Row className={`flex-grow-1`}>
        <Col xs={2} className={`p-3`}>
          <Navigation />
        </Col>
        <Col className={`bg-white pt-3`}>
          <Routes />
        </Col>
      </Row>
      <Row>
        <Col className={`bg-dark`}>
          <h2 className={`text-white`}>Footer</h2>
        </Col>
      </Row>
    </Container>
  )
}

export default App
