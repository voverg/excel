import {ExcelComponent} from '@core/ExcelComponent.js';
import {$} from '@core/dom.js';

import {createTable} from '@/components/table/table.template.js';
import {resizeHandler} from '@/components/table/table.resize.js';
import {TableSelection} from '@/components/table/TableSelection.js';

import {shouldResize} from '@/components/table/table.functions.js';
import {isCell} from '@/components/table/table.functions.js';


export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
        super($root, {
            name: Table,
            listeners: ['mousedown']
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
            this.selection.select($target);
        }
    }
}
