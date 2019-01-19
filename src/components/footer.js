import React, { Component } from "react";
import { Container, Row, Footer, Col } from "mdbreact";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5 , faCss3, faGithubSquare, faJsSquare, faYarn} from '@fortawesome/free-brands-svg-icons';

library.add(faReact);
library.add(faHtml5);
library.add(faCss3);
library.add(faGithubSquare);
library.add(faJsSquare);
library.add(faYarn);



class FooterPage extends Component {
render() {
return (

<div className="footer-style">
<Footer  className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="4" class="center"></Col>
      <Col md="4" class="center">
      <p>This Website was built with the following tools:</p>
        <div className="footer-tools">
              <FontAwesomeIcon icon={['fab', 'github-square']} size="lg" color="white" />
              <FontAwesomeIcon icon={['fab', 'yarn']} size="lg" color="white" />
              <FontAwesomeIcon icon={['fab', 'react']} size="lg" color="white"/>
              <FontAwesomeIcon icon={['fab', 'js-square']} size="lg" color="white" />
              <FontAwesomeIcon icon={['fab', 'html5']} size="lg" color="white"/>
              <FontAwesomeIcon icon={['fab', 'css3']} size="lg" color="white" />
               
        </div>
      </Col>
      <Col md="4" class="center"></Col>
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3" color="white" >
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