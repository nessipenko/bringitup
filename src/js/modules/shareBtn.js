export default class ShareBlock {
    constructor(btnClass) {
        this.shareBtns = document.querySelectorAll(`.${btnClass}`);
        this.shareBtns.forEach(btn => {
            btn.addEventListener('click', this.shareModule.bind(this));
        });
    }

    shareModule(event) {
        const moduleId = event.currentTarget.dataset.moduleId;
        const moduleLink = `${window.location.href}`;

        const textarea = document.createElement('textarea');
        textarea.value = moduleLink;
        document.body.appendChild(textarea);

        textarea.select();
        document.execCommand('copy');

        document.body.removeChild(textarea);

        alert('Ссылка скопирована: ' + moduleLink);
    }

}