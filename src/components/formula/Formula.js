import {ExcelComponent} from '@core/ExcelComponent.js';
import {$} from '@core/dom.js';


export class Formula extends ExcelComponent {
    static className = 'excel__formula';

    constructor($root, options) {
        super($root, {
        name: 'Formula',
        listeners: ['input', 'keydown'],
        ...options
    })
    }

    toHtml() {
        return `
                <div class="info">fx</div>
                <div id="formula" class="input" contenteditable spellcheck="false"></div>
        `
    }

    init() {
        super.init()

        this.$formula = this.$root.find('#formula');
        const formulaEvents = ['table:select', 'table:mousedown', 'table:input'];

        formulaEvents.forEach(event => {
            this.$on(event, $cell => {
                this.$formula.text($cell.text());
            });
        });

        // this.$on('table:select', $cell => {
        //     this.$formula.text($cell.text());
        // });

        // this.$on('table:mousedown', $cell => {
        //     this.$formula.text($cell.text());
        // })

        // this.$on('table:input', $cell => {
        //     this.$formula.text($cell.text());
        // })
    }

    onInput(event) {
        this.$emit('formula:input', $(event.target).text());
    }

    onKeydown(event) {
        const keys = ['Enter', 'Tab']
        if (keys.includes(event.key)) {
            event.preventDefault();
            this.$emit('formula:done');
        }
    }
}