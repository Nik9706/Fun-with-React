function customRender(reactElement,Container){
    const domElement =document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('href',reactElement.props.href)
    domElement.append(Container)
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