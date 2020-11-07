const CODES = {
    A: 65,
    Z: 90,
}


function createRow(value, index = '' ) {
    const resize = index? '<div class="row-resize"></div>' : ''
    return (`
<div class="row">
    <div class="row-info">
    ${index}
    ${resize}
    </div>
    <div class="row-data">${value}</div>
</div>`)
}

function createColumn(value = '') {
    return (
        `<div class="column">
        ${value}
        <div class="col-resize"></div>
        </div>`)
}

function createCell(value = '') {
    return `<div class="cell" contenteditable="">${value}</div>`
}

function toChar(_, ind) {
    return String.fromCharCode(CODES.A + ind)
}

export default function createTable(rowsCount) {
    const columnsCount = CODES.Z - CODES.A + 1;
    const rows = []
    const headerColumns = new Array(columnsCount)
        .fill('')
        .map(toChar)
        .map(createColumn)
        .join('')
    rows.push(createRow(headerColumns))
    for (let i = 1; i <= rowsCount; i++) {
        const cells = new Array(columnsCount)
            .fill('')
            .map(createCell)
            .join('')
        rows.push(createRow(cells, i))
    }
    return rows.join('')
}

