import {ExcelComponent} from '@core/ExcelComponent.js';
import {createTable} from '@/components/table/table.template.js';


export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
        super($root, {
            name: Table,
            listeners: []
        })
    }

    toHtml() {
        return createTable(20);
    }
}
