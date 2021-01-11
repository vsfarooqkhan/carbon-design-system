import logo from './logo.svg';
import 'carbon-components/css/carbon-components.css';
import {Col, Row, Grid } from './components/GridSystem'
function App() {
  return (
    <div>
        <Row>
          <Col md = "2">
            <h1> Column 6</h1>
          </Col>
          <Col md = "2">
            <h2> Column 2</h2>
          </Col>
        </Row>
        
    </div>
  );
}

export default App;
