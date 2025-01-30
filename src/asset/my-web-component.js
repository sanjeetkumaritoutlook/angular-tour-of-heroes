class myWebComponent extends HTMLElement{
//Life cycle hooks with custom elements
connectedCallback(){
    console.log('connectedCallback');
}

}
customElements.define('my-web-component', myWebComponent); //pass web constructor 