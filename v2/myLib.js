class FeedbackWidget {
    template = 'template';

    fetchContent() {
        fetch(`http://127.0.0.1:5555/v2/${this.template}.html`)
        .then(response => response.text())
        .then(data => {
            const element = document.querySelector('[data-activator-feedback]');
            element.innerHTML += data;
        })
    }

    init(template) {
        const element = document.querySelector('[data-activator-feedback]');
        element.innerHTML = `<button onclick="toggleClass()" class="btn btn--primary btn--action"> <svg class="btn__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/> </svg> <span class="btn__text">Feedback</span></button>`;

        this.template = template;

        this.fetchContent();
    }
}

function toggleClass() {
    const element = document.querySelector("#myDIV");
    element.classList.toggle('modal--hidden');
}