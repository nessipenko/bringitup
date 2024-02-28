export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
    }
    downloadItem(path, event) {
        event.preventDefault();
        event.stopPropagation()
        const link = document.createElement('a');

        link.setAttribute('href', path);
        link.setAttribute('download', 'nice_picture');

        link.style.display = 'none';
        document.body.appendChild(link)

        link.click()

        document.body.removeChild(link)
    }

    init() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.downloadItem(this.path, event);
            })
        })
    }
}