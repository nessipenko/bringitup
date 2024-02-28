export default class OpenModulesPage {
    constructor() {
        this.openModuleBtn = document.querySelector('.new__page');
        if (this.openModuleBtn) {
            this.openModuleBtn.addEventListener('click', this.openModules.bind(this));
        }

    }
    openModules() {
        window.location.href = './modules.html';

    }


}