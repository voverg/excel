import {ExcelComponent} from '@core/ExcelComponent.js';
import {$} from '@core/dom.js';

import {createTable} from '@/components/table/table.template.js';
import {resizeHandler} from '@/components/table/table.resize.js';
import {TableSelection} from '@/components/table/TableSelection.js';

import {shouldResize, isCell, matrix, nextSelector} from '@/components/table/table.functions.js';


export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root, options) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown', 'keydown', 'input'],
            ...options
        })
    }

    toHtml() {
        return createTable(20);
    }

    prepare() {
        this.selection = new TableSelection();
    }

    init() {
        super.init();

        const $cell = this.$root.find('[data-id="0:0"]');
        this.selectCell($cell);

        this.$on('formula:input', text => {
            this.selection.current.text(text);
        });

        this.$on('formula:done', () => {
            this.selection.current.focus();
        })
    }

    selectCell($cell) {
        this.selection.select($cell);
        this.$emit('table:select', $cell);
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event);
        } else if (isCell(event)) {
            const $target = $(event.target);
            if (event.shiftKey) {
                const current = this.selection.current.id(true);
                const target = $target.id(true);

                const $cells = matrix(current, target)
                    .map(id => this.$root.find(`[data-id="${id}"]`));
                    
                this.selection.selectGroup($cells);
            } else {
                this.selection.select($target);

                this.$emit('table:mousedown', $target);
            }
        }
    }

    onKeydown(event) {
        const keys = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'Tab', 'Enter'];
        const {key} = event;

        if(keys.includes(key) && !event.shiftKey) {
            event.preventDefault();
            const id = this.selection.current.id(true);
            const $next = this.$root.find(nextSelector(key, id));
            this.selectCell($next);
        }
    }

    onInput(event) {
        this.$emit('table:input', $(event.target));
    }
}
