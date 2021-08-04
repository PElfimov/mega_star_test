import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Row, Col} from "react-bootstrap"
import {Navigation} from "./components/navigation"
import styles from "./App.module.css"
import {Switch, Route} from "react-router-dom"
import {Departments} from "./sections/departments"
import {Employees} from "./sections/employees"
import {Error404} from "./sections/error404"

function App() {
  return (
    <Container className={`bg-light d-flex flex-column ${styles.root}`}>
      <Row>
        <Col className={`bg-dark`}>
          <h1 className={`text-white`}>Header</h1>
        </Col>
      </Row>
      <Row className={`flex-grow-1`}>
        <Col xs={1}>
          <Navigation />
        </Col>
        <Col className={`bg-white`}>
          {/* <Switch>
            <Route path="/" component={<Departments />} />
            <Route path="/employees" component={<Employees />} />
            <Route path="*" component={<Error404 />} />
          </Switch> */}
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
