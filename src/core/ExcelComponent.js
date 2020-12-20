import {DomListener} from '@core/DomListener.js';


export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || '';
        this.store = options.store;
        this.emitter = options.emitter;
        this.unsubscribers = [];
        this.storeSub = null;

        this.prepare();
    }

    prepare() {}

    toHtml() {
        return '';
    }

    $emit(event, ...args) {
        this.emitter.emit(event, ...args);
    }

    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn);
        this.unsubscribers.push(unsub);
    }

    $dispatch(action) {
        this.store.dispatch(action);
    }

    $subsctibe(fn) {
        this.storeSub = this.store.subscribe(fn);
    }

    init() {
        this.initDOMListeners();
    }

    destroy() {
        this.removeDOMListeners();
        this.unsubscribers.forEach(unsub => unsub());
        this.storeSub.unsubscribe();
    }
}