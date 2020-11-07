import {ExcelComponent} from "@core/ExcelComponent";
import createTable from "@/components/table/table.template";

export class Table extends ExcelComponent {
    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['click', 'mousedown'],
        });
    }
    static className = "excel__table"
    toHTML() {
        return createTable(15)
    }

    onClick(event) {
        console.log(event.target)
    }
    onMousedown(event) {
        console.log("onMouseDown")
    }
}
