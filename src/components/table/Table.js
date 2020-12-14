import {ExcelComponent} from '@core/ExcelComponent.js';
import {$} from '@core/dom.js';

import {createTable} from '@/components/table/table.template.js';
import {resizeHandler} from '@/components/table/table.resize.js';
import {TableSelection} from '@/components/table/TableSelection.js';

import {shouldResize, isCell, matrix, nextSelector} from '@/components/table/table.functions.js';


export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
        super($root, {
            name: Table,
            listeners: ['mousedown', 'keydown']
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
        this.selection.select($cell);
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
            }
        }
    }

    onKeydown(event) {
        const keys = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'Tab', 'Enter'];
        const {key} = event;

        if(keys.includes(key) && !event.shifKey) {
            event.preventDefault();
            const id = this.selection.current.id(true);
            const $next = this.$root.find(nextSelector(key, id));
            this.selection.select($next);
        }
    }
}
