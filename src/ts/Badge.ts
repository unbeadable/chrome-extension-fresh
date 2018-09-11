
export class Badge {

    readonly element: HTMLElement = document.createElement('div');

    constructor() {
        this.element.setAttribute('id', 'badge');
    }
}