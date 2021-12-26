export enum CellTypeEnum {
    empty = ' ',
    mine = 'm'
}

export enum CellViewTypeEnum {
    empty = 'empty',
    unknown = 'unknown',
    mine = 'mine',
}


export class Cell {
    type: CellTypeEnum;
    isOpen = false;
    minesAround = 0;
    id: string;
    debugInfo?: string;
    viewType: CellViewTypeEnum;

    constructor(id: string, type: CellTypeEnum, isOpen = false) {
        this.type = type;
        this.isOpen = isOpen;
        this.minesAround = 0;
        this.id = id;
        this.viewType = CellViewTypeEnum.empty;
    }

    open() {
        this.isOpen = true;
    }

    toggle() {
        switch (this.viewType) {
            case CellViewTypeEnum.empty:
                this.viewType = CellViewTypeEnum.mine;
                break;
            case CellViewTypeEnum.mine:
                this.viewType = CellViewTypeEnum.unknown;
                break;
            case CellViewTypeEnum.unknown:
                this.viewType = CellViewTypeEnum.empty;
                break;
        }
    }

    setType(type: CellTypeEnum) {
        this.type = type;
    }
}
