
import ReactDOM from 'react-dom/client'
// // import App from './App.jsx'
// import External from './External1.jsx'
import React from 'react'

// function MyApp(){
//     return(
//         <>
//         <h1>MyApp</h1>
//         <h2>Hello</h2>
//         </>
//     )
// }

// const AnotherElement = (
//     <a href='"http://google.com' target='_blank'>Visit Google</a>
// )

//react can't know the below type element 
// const reactElement = {
//       type: 'a',
//       props: {
//           href: "https://google.com",
//           target: '_blank'
//       },
//       children: 'Click me to visit google'
//     }

//in react this element can declared like the below code
const areactElement = React.createElement(
    'a',
    {href: 'http://google.com', target: "_blank"},
    'click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <>
    // <App />
    // <External />
    // <MyApp />
    // </>
    
    // AnotherElement 
    //AnotherElement can use without any tag

    // react can't know the below type element
    //reactElement

    //reactElement used below
    areactElement
)
