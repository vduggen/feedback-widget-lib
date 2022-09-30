class FeedbackWidget {
    template = 'template';
    baseURL = 'https://cdn.jsdelivr.net/gh/vduggen/feedback-widget-lib/v2';

    init(template) {
        this.template = template;
        this.addStyle();
        this.fetchButton();
        this.fetchModal();
        this.fetchModalContent();
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
            .then(data => this.injectHtml(data))
    }

    fetchModal() {
        fetch(`${this.baseURL}/template/modal.html`)
            .then(response => response.text())
            .then(data => this.injectHtml(data))
    }

    fetchModalContent() {
        fetch(`${this.baseURL}/template/${this.template}.html`)
            .then(response => response.text())
            .then(data => this.injectHtml(data, '[data-activator-feedback] .modal__main'))
    }

    injectHtml(html, seletor = '[data-activator-feedback]') {
        const element = document.querySelector(seletor);
        element.innerHTML += html;
    }
}

function handleViewModal() {
    const element = document.querySelector("#myDIV");
    element.classList.toggle('modal--hidden');
}