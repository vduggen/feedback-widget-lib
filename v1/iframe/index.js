function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle('modal--hidden');
}

function createElementToInject() {
    const element = document.createElement('div');
    element.className = 'feedback';
    document.body.appendChild(element);
}

function injectStylesheet(href) {
    var link = document.createElement( "link" );
    link.href = href;
    link.type = "text/css";
    link.rel = "stylesheet";
    
    document.getElementsByTagName( "head" )[0].appendChild( link );
}

function injectHtml(html) {
    const element = document.querySelector('.feedback');
    element.innerHTML += html;
}

function injectLib() {
    injectStylesheet('https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css');
    injectStylesheet('./iframe/btn.css');
    injectStylesheet('./iframe/modal.css');
    
    injectHtml(`<button onclick="myFunction()" class="btn btn--primary btn--action"> <svg class="btn__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/> </svg> <span class="btn__text">Feedback</span> </button>`);
    injectHtml(`<div id="myDIV" class="modal modal--hidden"> <div class="modal__content"> <header class="modal__header"> <button onclick="myFunction()" class="btn modal__close"> <svg viewBox="0 0 24 24"> <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"/> </svg> </button> </header> <div class="modal__main"> <h3 class="modal__title">Give feedback</h3> <p class="modal__description">What do you think of the editing tool?</p><div class="modal__emojis"> <span class="modal__emoji">😥</span> <span class="modal__emoji">😔</span> <span class="modal__emoji">😐</span> <span class="modal__emoji">😀</span> <span class="modal__emoji">😇</span> </div></div><footer class="modal__actions"> <button onclick="myFunction()" class="btn btn--primary"> <span class="btn__text">Send</span> </button> <button onclick="myFunction()" class="btn btn--outline"> <span class="btn__text">Cancel</span> </button> </footer> </div></div>`);
}

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        createElementToInject();

        injectLib();
    }
}