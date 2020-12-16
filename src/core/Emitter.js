export class Emitter {
    constructor() {
        this.listeners = {};
    }

    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) return;

        this.listeners[event].forEach(listener => {
            listener(...args);
        });

        return true;
    }

    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(fn);

        return () => {
            this.listeners[event] = this.listeners[event].filter(listener => listener !== fn);
        }
    }
}


// Example
// const emitter = new Emitter
// const unsub = emitter.subscribe('vovka', data => console.log(data))
// setTimeout(() => {
//     emitter.emit('vovka', 'After 2 seconds')
// }, 2000)

// setTimeout(() => {
//     emitter.emit('vovka', 'After 4 seconds')
// }, 4000)

// setTimeout(() => {
//     unsub()
// }, 3000)
// emitter.emit('v', 32)