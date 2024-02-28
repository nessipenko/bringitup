export default class Difference {

    constructor(oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer)
        this.newOfficer = document.querySelector(newOfficer)
        try {
            this.oldItems = this.oldOfficer.querySelectorAll(items)
            this.newItems = this.newOfficer.querySelectorAll(items)
        } catch (e) { }
        this.oldCounter = 0
        this.newCounter = 0
    }

    bindTriggers(container, items, counter) {
        container.querySelector('.plus').addEventListener('click', () => {
            if (counter !== items.length - 2) {
                items[counter].style.display = 'flex'
                items[counter].classList.add('animated', 'fadeInDown')
                counter++
            } else {
                items[counter].style.display = 'flex'
                items[items.length - 1].remove()

            }
        })
    }
    hideitems(items) {
        items.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none'
            }
        })
    }
    init() {
        try {
            this.hideitems(this.oldItems)
            this.hideitems(this.newItems)

            this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter)
            this.bindTriggers(this.newOfficer, this.newItems, this.newCounter)

        } catch (e) { }
    }

}