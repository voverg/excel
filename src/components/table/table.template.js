const cods = {
    A: 65,
    Z: 90
}

// function toCell(_, index) {
//     return `
//         <div class="cell" data-col=${index} contenteditable></div>
//     `
// }

function toCell(rowIndex) {
    return function(_, colIndex) {
        return `
            <div class="cell" data-col="${colIndex}" data-id="${rowIndex}:${colIndex}" contenteditable></div>
        `
    }
}

function toColumn(colContent, colIndex) {
    return `
        <div class="column" data-type="resizable" data-col="${colIndex}">
            ${colContent}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `
}

function createRow(content, index = '') {
    const resize = index?`<div class="row-resize" data-resize="row"></div>`:'';
    return `
        <div class="row" data-type="resizable">
            <div class="row-info">
                ${index}
                ${resize}
            </div>
            <div class="row-data">${content}</div>
        </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(cods.A + index);
}

export function createTable(rowsCount = 15) {
    const colsCount = cods.Z - cods.A + 1;
    const rows = [];

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('');

    // The first row
    rows.push(createRow(cols))
    // The other rows
    for (let row = 0; row < rowsCount; row++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell(row))
            .join('');

        rows.push(createRow(cells, row + 1));
    }

    return rows.join('');
}