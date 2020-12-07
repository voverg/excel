import {ExcelComponent} from '@core/ExcelComponent.js';
import {createTable} from '@/components/table/table.template.js';
import {$} from '@core/dom.js';


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

//     onClick(event) {
//         console.log('Click', event.target);
//     }

    onMousedown(event) {
        if (event.target.dataset.resize) {
            const $resizer = $(event.target);
            const $parent = $resizer.closest('[data-type="resizable"]');
            const coords = $parent.getCoords();

            document.onmousemove = e => {
                console.log('mousemove');
                const delta = e.pageX - coords.right;
                const value = coords.width + delta;
                $parent.$el.style.width = value + 'px';

                document.querySelectorAll(`[data-col="${$parent.data.col}"]`)
                    .forEach(el => el.style.width = value + 'px');
            }

            document.onmouseup = () => {
                document.onmousemove = null;
            }
        }
    }

//     onMouseup(event) {
//         console.log('Mouseup', event.target);
//     }
}
