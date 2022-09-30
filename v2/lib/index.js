class FeedbackWidget {
    template = 'template';
    baseURL = 'https://cdn.jsdelivr.net/gh/vduggen/feedback-widget-lib/v2';

    init(template) {
        this.template = template;
        this.addStyle();
        // this.fetchButton();
        // this.fetchTemplate();
        this.fetchHtml();
    }

    addStyle() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `${this.baseURL}/lib/style.css`;
        const headPage = document.head;
        headPage.append(link);
    }

    fetchButton() {
        fetch(`${this.baseURL}/template/button.html`)
        .then(response => response.text())
        .then(data => this.injectHtmlWrapper(data))
    }

    fetchTemplate() {
        fetch(`${this.baseURL}/template/${this.template}.html`)
        .then(response => response.text())
        .then(data => this.injectHtmlWrapper(data))
    }

    fetchHtml() {
        fetch(`http://127.0.0.1:5555/v2/api.js`)
            .then(response => console.log(response))
    }

    injectHtmlWrapper(html) {
        const element = document.querySelector('[data-activator-feedback]');
        element.innerHTML += html;
    }
}

function handleViewModal() {
    const element = document.querySelector("#myDIV");
    element.classList.toggle('modal--hidden');
}