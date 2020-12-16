import {range} from '@core/utils.js';


export function shouldResize(event) {
    return event.target.dataset.resize;
}

export function isCell(event) {
    return event.target.dataset.type === 'cell';
}

export function matrix(current, target) {
    const cols = range(current.col, target.col);
    const rows = range(current.row, target.row);

    return rows.reduce((acc, row) => {
        cols.forEach(col => acc.push(`${row}:${col}`));
        return acc;
    }, []);
}

export function nextSelector(key, {row, col}) {
    const minVal = 0;
    
    switch(key) {
        case 'Enter':
        case 'ArrowDown':
            row++;
            break;
        case 'Tab':
        case 'ArrowRight':
            col++;
            break;
        case 'ArrowLeft':
            col = col - 1 < minVal ? minVal : col - 1;
            break;
        case 'ArrowUp':
            row = row - 1 < minVal ? minVal : row - 1;
            break;
    }

    return `[data-id="${row}:${col}"]`;
}