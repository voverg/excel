const cods = {
    A: 65,
    Z: 90
}

function createCell() {
    return `
        <div class="cell" contenteditable>B1</div>
    `
}

function toColumn(colContent) {
    return `
        <div class="column">${colContent}</div>
    `
}

function createRow(content) {
    return `
        <div class="row">
            <div class="row-info"></div>
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

    rows.push(createRow(cols))

    return rows.join('');
}