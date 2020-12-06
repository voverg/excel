import {ExcelComponent} from '@core/ExcelComponent.js';
import {createTable} from '@/components/table/table.template.js';


export class Table extends ExcelComponent {
    static className = 'excel__table';

    toHtml() {
        return createTable(20);
    }
}
