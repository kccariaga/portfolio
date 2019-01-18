import React, { Component } from "react";
import { Container, Row, Footer, Col } from "mdbreact";

class FooterPage extends Component {
render() {
return (

<div className="footer-style">
<Footer  className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="3" class="center"></Col>
      <Col md="6" class="center">
          <p text-alignment="center">This Website was designed using these tools:</p>
        <div className="footer-tools">
          <i class="fab fa-react"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-js-square"></i>
       
        </div>
      </Col>
      <Col md="3" class="center"></Col>
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3" >
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright{" "}
      Karen Cariaga
    </Container>
  </div>
</Footer>
</div>

);
}
}

export default FooterPage;