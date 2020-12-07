import {ExcelComponent} from '@core/ExcelComponent.js';
import {createTable} from '@/components/table/table.template.js';


export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
        super($root, {
            name: Table,
            // listeners: ['click', 'mousedown', 'mouseup', 'mousemove']
        })
    }

    toHtml() {
        return createTable(20);
    }

//     onClick(event) {
//         console.log('Click', event.target);
//     }

//     onMousedown(event) {
//         console.log('Mousedown', event.target);
//     }

//     onMouseup(event) {
//         console.log('Mouseup', event.target);
//     }

//     onMousemove(event) {
//         console.log('Mousemove');
//     }
}
