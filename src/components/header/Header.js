import {ExcelComponent} from '@core/ExcelComponent.js';


export class Header extends ExcelComponent {
    static className = 'excel__header';

    toHtml() {
        return `
                <input type="text" class="input" value="Новая таблица">
                <div class="buttons">
                    <div class="button"><span class="material-icons">delete</span></div>
                    <div class="button"><span class="material-icons">exit_to_app</span></div>
                </div>
        `
    }
}