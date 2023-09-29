import { $ } from '@wdio/globals'
import { Selector } from 'webdriverio'

export default class WebElement {
    private selector!: Selector;
    private parent!: WebElement;

    constructor(selector: Selector, parent?: WebElement) {
        this.selector = selector;
        if (parent) {
            this.parent = parent;
        };
    }

    findElement(): ChainablePromiseElement {
        if (this.parent == undefined) {
            return $(this.selector);
        } else {
            return this.parent.findElement().$(this.selector);
        }
    }

    async enter(value: string){
        await this.findElement().setValue(value);
    }
    
    async click() {
        await this.findElement().click();
    }
}