(this.webpackJsonpportfoliowebsite=this.webpackJsonpportfoliowebsite||[]).push([[0],{122:function(e,a,t){},150:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),o=t(7),l=t.n(o),c=(t(73),t(154)),s=t(3),i=(t(122),t(156)),m=t(157);class d extends r.Component{render(){return n.a.createElement("div",{style:{width:"100%",margin:"auto"}},n.a.createElement(s.Grid,{className:"landing-grid"},n.a.createElement(s.Cell,{col:3}),n.a.createElement(s.Cell,{col:6},n.a.createElement("img",{src:"/portfolio/images/profilepic4.jpg",alt:"avatar",className:"avatar-img"}),n.a.createElement("div",{className:"banner-text"},n.a.createElement("h2",null,"Hello World."),n.a.createElement("p",null," My name is Karen and I'm a Software Engineer based in the Greater Sacramento Area. Thank you for stumbling upon my personal portfolio. I strive to find new ways to refine my skills through personal projects and opportunities in my professional work.  "),n.a.createElement("div",{className:"social-links"},n.a.createElement("a",{href:"https://www.linkedin.com/in/karen-cariaga-2a8241123/",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),n.a.createElement("a",{href:"https://github.com/kccariaga",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"}))))),n.a.createElement(s.Cell,{col:3})))}}var u=d;class h extends r.Component{render(){return n.a.createElement("div",null,n.a.createElement("h1",null,"About Me"),n.a.createElement("body",null,"Coming soon!"))}}var p=h,g=t(58),E=t(59),b=t(60),f=t(67),v=t(66),C=t(10),w=function(e){Object(f.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(E.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={name:"",email:"",subject:"",message:""},e.submitHandler=function(e){e.target.className+=" was-validated"},e.changeHandler=function(a){e.setState(Object(g.a)({},a.target.name,a.target.value))},e}return Object(b.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"contact-grid"},n.a.createElement(C.g,null,n.a.createElement(C.m,null,n.a.createElement(C.f,{md:"3",class:"center"}),n.a.createElement(C.f,{md:"6",class:"center"},n.a.createElement("form",{action:"https://script.google.com/macros/s/AKfycbwmwd5Y6G3WLSaCG6sCB7iwVVBvfPJXC1lOV9CVZIlTL2uhK-ab/exec",method:"POST",className:"needs-validation",onSubmit:this.submitHandler,target:"_blank",Validate:!0},n.a.createElement("p",{className:"h4 text-center bold mb-4"},"Contact Me!"),n.a.createElement("label",{htmlFor:"defaultFormContactNameEx",className:"grey-text"},"Your name"),n.a.createElement("input",{value:this.state.name,name:"name",onChange:this.changeHandler,type:"text",id:"defaultFormContactNameEx",className:"form-control",required:!0}),n.a.createElement("div",{className:"invalid-feedback"},"Please enter your name."),n.a.createElement("div",{className:"valid-feedback"},"Looks good!"),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormContactEmailEx",className:"grey-text"},"Your email"),n.a.createElement("input",{value:this.state.email,onChange:this.changeHandler,type:"email",name:"email",id:"defaultFormContactEmailEx",className:"form-control",required:!0}),n.a.createElement("div",{className:"invalid-feedback"},"Please provide a email."),n.a.createElement("div",{className:"valid-feedback"},"Looks good!"),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormContactSubjectEx",className:"grey-text"},"Subject"),n.a.createElement("input",{value:this.state.subject,onChange:this.changeHandler,type:"text",name:"subject",id:"defaultFormContactSubjectEx",className:"form-control",required:!0}),n.a.createElement("div",{className:"invalid-feedback"},"Please enter the subject."),n.a.createElement("div",{className:"valid-feedback"},"Looks good!"),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"defaultFormContactMessageEx",className:"grey-text"},"Your message"),n.a.createElement("textarea",{value:this.state.message,onChange:this.changeHandler,type:"text",name:"message",id:"defaultFormContactMessageEx",className:"form-control",rows:"3",required:!0}),n.a.createElement("div",{className:"invalid-feedback"},"Please enter your message."),n.a.createElement("div",{className:"valid-feedback"},"Looks good!"),n.a.createElement("div",{className:"text-center mt-4"},n.a.createElement(C.e,{type:"submit",color:"success"},"Send",n.a.createElement(C.h,{icon:"paper-plane-o",className:"ml-2"}))))),n.a.createElement(C.f,{md:"3",class:"center"})))),n.a.createElement("script",{"data-cfasync":"false",type:"text/javascript",src:"https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"}))}}]),t}(r.Component);class y extends r.Component{constructor(e){super(e),this.state={activeTab:0}}toggleCategories(){return 0===this.state.activeTab?n.a.createElement("div",{className:"projects-grid"},n.a.createElement(s.Card,{shadow:5,style:{minWidth:"50",margin:"auto"}},n.a.createElement(s.CardTitle,{style:{color:"gray",height:"176px",background:"url(/portfolio/images/letscodetogether.png) center / cover"}},"Let's Code Together"),n.a.createElement(s.CardText,null,"Lets Code Together is a Facebook Build Day Hack-a-thon collaboration with the aim to bring developers together to meet up, create applications and learn new skills. The user has the option to post project ideas for other users to find, as well as search for projects to collaborate on with others. Another portion of the website is dedicated to users who with to teach or learn new skills from other people.",n.a.createElement("br",null),"This website is powered by React, Bootstrap, HTML, CSS."),n.a.createElement(s.CardActions,{border:!0},n.a.createElement(s.Button,{colored:!0,href:"https://github.com/kccariaga/facebook_build_day_challenge",target:"_blank"},"Github")),n.a.createElement(s.CardMenu,{style:{color:"fff"}},n.a.createElement(s.IconButton,{name:"share"}))),n.a.createElement(s.Card,{shadow:5,style:{minWidth:"50",margin:"auto"}},n.a.createElement(s.CardTitle,{style:{color:"gray",height:"176px",background:"url(/portfolio/images/mercenary.png) center / cover"}},"Mercenary"),n.a.createElement(s.CardText,null,"CMPS183: Web Applications",n.a.createElement("br",null),"Mercenary is an rpg-idle game that follows an unnamed mercenary who has taken the task of hunting down a mysterious group that attacked the noble house Lancaster and rescue their kidnapped child. Gather clues, recruit warriors, and gain resources to empower your band to defeat stronger foes and reach your final destination.",n.a.createElement("br",null),n.a.createElement("br",null),"This website is powered by web2py, vue.js, HTML, CSS,"),n.a.createElement(s.CardActions,{border:!0},n.a.createElement(s.Button,{colored:!0,href:"https://github.com/JCastelan/mercenary_game",target:"_blank"},"Github"),n.a.createElement(s.Button,{colored:!0,href:"https://drive.google.com/file/d/1JmLN3SDLGCm2-GY848AofhvXegX4mBV4/view?usp=sharing",target:"_blank"},"Live Demo")),n.a.createElement(s.CardMenu,{style:{color:"fff"}},n.a.createElement(s.IconButton,{name:"share"}))),n.a.createElement(s.Card,{shadow:5,style:{minWidth:"50",margin:"auto"}},n.a.createElement(s.CardTitle,{style:{color:"gray",height:"176px",background:"url(/portfolio/images/seads.png) center / cover"}},"SEADS Data Visualization"),n.a.createElement(s.CardText,null,"CMPS119: Software for Society",n.a.createElement("br",null),"This application was created for the non-profit organization SEADS at UC-Santa Cruz. This single-page application displays energy consumption data from various panels(HVAC, Water Heater, Solar, Kitchen) in the form of a radial pi chart with a time slider.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),"This website is powered by D3.js, Javascript, HTML and CSS."),n.a.createElement(s.CardActions,{border:!0},n.a.createElement(s.Button,{colored:!0,href:"https://github.com/sharad97/SEADS_Visualization",target:"_blank"},"Github"),n.a.createElement(s.Button,{colored:!0,href:"https://sharad97.github.io/SEADS_Visualization/FInal/index.html",target:"_blank"},"Live Demo")),n.a.createElement(s.CardMenu,{style:{color:"fff"}},n.a.createElement(s.IconButton,{name:"share"})))):1===this.state.activeTab?n.a.createElement("div",{className:"projects-grid"},n.a.createElement(s.Card,{shadow:5,style:{minWidth:"50",margin:"auto"}},n.a.createElement(s.CardTitle,{style:{color:"gray",height:"176px",background:"url(/portfolio/images/kzsc.png) center / cover"}},"KZSC Radio"),n.a.createElement(s.CardText,null,"CMPS121: Mobile Applications",n.a.createElement("br",null),"This is an improved version of the existing KZSC Radio app where the user can stream 88.1FM on their phones. The new features include live chat with the DJ and other listeners, a donate page, playlist schedule, and album information.",n.a.createElement("br",null),n.a.createElement("br",null),"The tools used to create this application were Android Studio, Java and XML."),n.a.createElement(s.CardActions,{border:!0},n.a.createElement(s.Button,{colored:!0,href:"https://github.com/kemunoz/kzscradio",target:"_blank"},"Github"),n.a.createElement(s.Button,{colored:!0,href:"https://drive.google.com/file/d/1URhyYZD5JEdcOoTjqVTmRkHZO6qxalRo/view?usp=sharing",target:"_blank"},"Live Demo")),n.a.createElement(s.CardMenu,{style:{color:"fff"}},n.a.createElement(s.IconButton,{name:"share"}))),n.a.createElement(s.Card,{shadow:5,style:{minWidth:"50",margin:"auto"}},n.a.createElement(s.CardTitle,{style:{color:"gray",height:"176px",background:"url(/portfolio/images/scriptscribble.png) center / cover"}},"Script Scribble"),n.a.createElement(s.CardText,null,"CMPS115: Intro to Software Engineering ",n.a.createElement("br",null),"Inspired by Scratch, Script Scribble is an education mobile app intended to teach programming logic to younger audiences through the use of draggable blocks. This was a project done in a team of 5, using SCRUM to handle project management",n.a.createElement("br",null),n.a.createElement("br",null),"The tools used to create this application were Android Studio, Java and XML."),n.a.createElement(s.CardActions,{border:!0},n.a.createElement(s.Button,{colored:!0,href:"https://bitbucket.org/mcsquizzy123/script_scribble/src/master/",target:"_blank"},"Bitbucket"),n.a.createElement(s.Button,{colored:!0,href:"https://streamable.com/xqblv",target:"_blank"},"Live Demo")),n.a.createElement(s.CardMenu,{style:{color:"fff"}},n.a.createElement(s.IconButton,{name:"share"})))):2===this.state.activeTab?n.a.createElement("div",{className:"projects-grid"},n.a.createElement("h1",null," Coming Soon! ")):void 0}render(){return n.a.createElement("div",{className:"category-tabs"},n.a.createElement(s.Tabs,{activeTab:this.state.activeTab,onChange:e=>this.setState({activeTab:e}),ripple:!0},n.a.createElement(s.Tab,null,"Web Development"),n.a.createElement(s.Tab,null,"Mobile Development"),n.a.createElement(s.Tab,null,"Various Coursework")),n.a.createElement(s.Grid,null,n.a.createElement(s.Cell,{col:12},n.a.createElement("div",{className:"content"},this.toggleCategories()))))}}var S=y;class k extends r.Component{render(){return n.a.createElement(s.Grid,null,n.a.createElement(s.Cell,{col:4},n.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),n.a.createElement(s.Cell,{col:8},n.a.createElement("h4",{style:{marginTop:"0px"}},this.props.schoolName),n.a.createElement("p",null,this.props.schoolDescription)))}}var x=k;class N extends r.Component{render(){return n.a.createElement(s.Grid,null,n.a.createElement(s.Cell,{col:4},n.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),n.a.createElement(s.Cell,{col:8},n.a.createElement("h4",{style:{marginTop:"0px"}},this.props.jobName),n.a.createElement("p",null,this.props.jobDescription)))}}var T=N;r.Component;class j extends r.Component{render(){return n.a.createElement("div",null,n.a.createElement(s.Grid,null,n.a.createElement(s.Cell,{col:4},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("img",{src:"/portfolio/images/resumepic.jpg",alt:"avatar",style:{height:"350px"}})),n.a.createElement("h2",{style:{paddingTop:"20px"}},"Karen Cariaga"),n.a.createElement("h4",{style:{color:"grey"}},"Software Engineer"),n.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),n.a.createElement("p",null,"I am a Software Engineer based in the Greater Sacramento Area. I graduated with a Computer Science Degree from the University of California, Santa Cruz in 2018. Since then, I have been honing my skills through my various experiences from starting as a Software Support Engineer for SCADA/HMI Software and into growing into a Software Engineer role. I am enthusiastic about continuing to learn and grow into more specialized skills as my career advances."),n.a.createElement(s.Button,{raised:!0,accent:!0,ripple:!0,href:"https://drive.google.com/file/d/1QYCV8rKnpZ4EJL4X8epNciaPa8VfpdBr/view?usp=sharing",target:"_blank"},"Download My Resume"),n.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}})),n.a.createElement(s.Cell,{className:"resume-right-col",col:8},n.a.createElement("h2",null,"Education"),n.a.createElement(x,{startYear:2016,endYear:2018,schoolName:"University of California- Santa Cruz",schoolDescription:"Bachelor's in Computer Science"}),n.a.createElement(x,{startYear:2013,endYear:2016,schoolName:"Folsom Lake College",schoolDescription:"Associates in Math and Science"}),n.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),n.a.createElement("h2",null,"Experience"),n.a.createElement(T,{startYear:2019,endYear:"Present",jobName:"Inductive Automation - Software Engineer",jobDescription:"Coordinated with a team of developers to break down the internal CRM Monolith into microservices running on an EC2 Instance on AWS. Developed Web APIs using\r Java Frameworks such as Javalin and Quarkus. Also contributed updates and new features to CI/CD tools like Gradle and Jenkins "}),n.a.createElement(T,{startYear:2019,endYear:2021,jobName:"Inductive Automation - Software Support Engineer",jobDescription:"Troubleshooting through issues for customers with Ignition SCADA/HMI software. \r Skills utilized for troubleshooting include but are not limited to:\r OPC-UA, OPC-DA/COM, SQL, SMTP Servers, Networking, Redundant Systems, Distributed Systems"}),n.a.createElement(T,{startYear:2019,endYear:2019,jobName:"iD Tech Camps - Brand Ambassador",jobDescription:"Attending to ground marketing and recruiting events in order to\r spread the word of iD Tech to potential clients and future employees."}),n.a.createElement(T,{startYear:2017,endYear:2018,jobName:"iD Tech Camps, Sacramento State - Coding Instructor",jobDescription:"\r \u2022 Worked at iD Tech Camps for two summer sessions.Taught beginning to advanced \r computer programming courses in C++, Java, Python, and Scratch to class sizes\r of up to 10 students(ages 13-18)."}),n.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}))))}}var D=j;var A=()=>n.a.createElement(i.a,null,n.a.createElement(m.a,{exact:!0,path:"/portfolio/",component:u}),n.a.createElement(m.a,{path:"/portfolio/about",component:p}),n.a.createElement(m.a,{path:"/portfolio/contact",component:w}),n.a.createElement(m.a,{path:"/portfolio/projects",component:S}),n.a.createElement(m.a,{path:"/portfolio/resume",component:D})),M=t(14),B=t(18),I=t(19);M.b.add(I.e),M.b.add(I.c),M.b.add(I.a),M.b.add(I.b),M.b.add(I.d),M.b.add(I.f);class L extends r.Component{render(){return n.a.createElement("div",{className:"footer-style"},n.a.createElement(C.d,{className:"font-small pt-4 mt-4"},n.a.createElement(C.b,{fluid:!0,className:"text-center text-md-left"},n.a.createElement(C.o,null,n.a.createElement(C.a,{md:"4",class:"center"}),n.a.createElement(C.a,{md:"4",class:"center"},n.a.createElement("p",null,"This Website was built with the following tools:"),n.a.createElement("div",{className:"footer-tools"},n.a.createElement(B.a,{icon:["fab","github-square"],size:"lg",color:"white"}),n.a.createElement(B.a,{icon:["fab","yarn"],size:"lg",color:"white"}),n.a.createElement(B.a,{icon:["fab","react"],size:"lg",color:"white"}),n.a.createElement(B.a,{icon:["fab","js-square"],size:"lg",color:"white"}),n.a.createElement(B.a,{icon:["fab","html5"],size:"lg",color:"white"}),n.a.createElement(B.a,{icon:["fab","css3"],size:"lg",color:"white"}))),n.a.createElement(C.a,{md:"4",class:"center"}))),n.a.createElement("div",{className:"footer-copyright text-center py-3",color:"white"},n.a.createElement(C.b,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Copyright"," ","Karen Cariaga"))))}}var Y=L;class z extends r.Component{render(){return n.a.createElement("div",{className:"demo-big-content"},n.a.createElement(s.Layout,null,n.a.createElement(s.Header,{className:"header-color",title:"Karen Cariaga",scroll:!0},n.a.createElement(s.Navigation,null,n.a.createElement(c.a,{to:"/portfolio/"},"Home"),n.a.createElement(c.a,{to:"/portfolio/resume"},"Resume"),n.a.createElement(c.a,{to:"/portfolio/projects"},"Projects"))),n.a.createElement(s.Drawer,{title:"Karen Cariaga"},n.a.createElement(s.Navigation,null,n.a.createElement(c.a,{to:"/portfolio/"},"Home"),n.a.createElement(c.a,{to:"/portfolio/resume"},"Resume"),n.a.createElement(c.a,{to:"/portfolio/projects"},"Projects"))),n.a.createElement(s.Content,null,n.a.createElement(A,null)),n.a.createElement(Y,null)))}}var H=z;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(145),t(147),t(148),t(149);var _=t(155);l.a.render(n.a.createElement(_.a,null,n.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},68:function(e,a,t){e.exports=t(150)},73:function(e,a,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.f19e4f5c.chunk.js.map