// function customRender(reactElement,Container){
//     const domElement =document.createElement(reactElement.type)
//     domElement.innerHTML=reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.append(Container)
// }

function customRender(reactElement,Container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=(reactElement.children)
  
   for (const prop in reactElement.props) {
    domElement.setAttribute(prop,reactElement.props[prop])
    
        
    
    Container.appendChild(domElement)
   }

}

const createElement={
    type:"a",
    props:{
        href:"www.google.com",
        target:"_blank",

    },
    children:"click me to visit to google"
}
const mainContainer=document.querySelector('#root')

customRender(createElement,mainContainer)