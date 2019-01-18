import React,{ Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon} from 'mdbreact';
// import { Helmet } from 'react-helmet';

class Contact extends Component{
//  var $form = $('form#test-form'),
//   url = 'https://script.google.com/macros/s/abcdefghijklmnopqrstuvwxyz1234567890/exec'

// $('#submit-form').on('click', function (e) {
//   e.preventDefault();
//   var jqxhr = $.ajax({
//     url: url,
//     method: "GET",
//     dataType: "json",
//     data: $form.serializeObject()
//   }).success(
//     // do something
//   );
// })

  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };


  submitHandler = event => {
    //event.preventDefault();
    event.target.className += " was-validated";
  };;

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  
  render(){
    
    return(
      // <div className="contact-grid">
      //   <form method="POST" action="https://formspree.io/karenc.cariaga@gmail.com">
      //       <input type="text" name="name" placeholder="Your name"></input>
      //       <input type="email" name="email" placeholder="Your email"></input>
      //       <textarea name="message" placeholder="Test Message"></textarea>
      //       <button type="submit">Send Test</button>
      //   </form>
      // </div>

      <div className="App">
      <div className="contact-grid">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="3" class="center"></MDBCol>
            <MDBCol md="6" class="center">
              <form 
                action="https://script.google.com/macros/s/AKfycbwmwd5Y6G3WLSaCG6sCB7iwVVBvfPJXC1lOV9CVZIlTL2uhK-ab/exec"
                method="POST" 
                className="needs-validation"
                onSubmit={this.submitHandler}
                target="_blank"
                Validate  
                >
                <p className="h4 text-center bold mb-4" >Contact Me!</p>

                  {/* Name */}
                  <label htmlFor="defaultFormContactNameEx" className="grey-text">
                    Your name
                  </label>
                  <input
                    value={this.state.name}
                    name="name"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormContactNameEx"
                    className="form-control"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your name.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                  <br />
                
                {/* Email */}
                <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                  Your email
                </label>
                  <input
                    value={this.state.email}
                    onChange={this.changeHandler}
                    type="email"
                    name="email"
                    id="defaultFormContactEmailEx"
                    className="form-control"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a email.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                  <br />

                {/* Subject */}
                <label
                  htmlFor="defaultFormContactSubjectEx"
                  className="grey-text"
                >
                  Subject
                </label>
                <input
                  value={this.state.subject}
                  onChange={this.changeHandler}
                  type="text"
                  name="subject"
                  id="defaultFormContactSubjectEx"
                  className="form-control"
                  required
                />
                <div className="invalid-feedback">
                  Please enter the subject.
                  </div>
                <div className="valid-feedback">Looks good!</div>
                <br />

                {/* Messge */}
                <label
                  htmlFor="defaultFormContactMessageEx"
                  className="grey-text"
                >
                Your message
                </label>
                  <textarea
                    value={this.state.message}
                    onChange={this.changeHandler}
                    type="text"
                    name="message"
                    id="defaultFormContactMessageEx"
                    className="form-control"
                    rows="3"
                    required
                  />

                  <div className="invalid-feedback">
                    Please enter your message.
                  </div>
                  <div className="valid-feedback">Looks good!</div>

                {/* Submit Button */}
                <div className="text-center mt-4">
                  <MDBBtn type="submit"  color="success" >
                    Send
                  <MDBIcon icon="paper-plane-o" className="ml-2" />
                  </MDBBtn>
       
      
                </div>
              </form>
            </MDBCol>
            <MDBCol md="3" class="center"></MDBCol>
          </MDBRow>
        </MDBContainer>

      </div>
          <script data-cfasync="false" 
            type="text/javascript"
            src="https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"
          >
          </script>
      </div>
      
    )
  }
}

export default Contact;