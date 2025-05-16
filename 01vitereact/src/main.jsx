import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
  <h1>Hello Gaurav</h1>
)
}

// const reactElement = {
//     type: 'a',
//     props:{
//         href: 'https://google.com',
//         target:'_blank'
//     },
//     children: "Click me to visit google"
// }

const reactElement = React.createElement(
  'a',
  {href:"https://google.com",target: "_blank"},
  'Click me to visit google'
)

const anotherElement = 
  <a href="https://google.com">visit here</a>





ReactDom.createRoot(document.getElementById('root')).render(
  
    // <MyApp />
    // anotherElement
    // reactElement
    <App/>
  
)
