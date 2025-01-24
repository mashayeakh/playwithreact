// console.log("Holla");



//* getting root 
const mainContainer = document.getElementById("root");


//* lets create some properties of our own react element
const reactElement = {
    //? type
    //? props [property]
    //? children

    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    Children: "Click me to go to google!!!!"
};


//* now creating a func that will take reactElement and mainContainer
function customReact(reactElement, mainContainer) {

    /*
    //creating dom element and adding the type of reactElement
    const domEle = document.createElement(reactElement.type);

    //adding innerHTML
    domEle.innerHTML = reactElement.Children;

    //adding attributes
    domEle.setAttribute("href", reactElement.props.href);

    domEle.setAttribute("target", reactElement.props.target);

    //appending the domEle to mainContainer
    mainContainer.appendChild(domEle);
     */

    //Better aprroach
    const domElement = document.createElement(reactElement.type);

    //loop to all all the props
    for (const p in reactElement.props) {
        console.log(p);
        if (p === "children") continue;
        domElement.setAttribute(p, reactElement.props[p]);
    }

    domElement.innerHTML = reactElement.Children;
    mainContainer.appendChild(domElement);

}

customReact(reactElement, mainContainer);