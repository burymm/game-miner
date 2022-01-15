import './CellComponent.scss';
import { Cell, CellTypeEnum, CellViewTypeEnum } from "../../common/cell";
import { GameStatus } from "../../App";

export function CellComponent(props: { onCellClick: any, onCellRightClick: any, cell: Cell, gameStatus: GameStatus}) {


    function getCellClass(value: Cell) {
        if (!value.isOpen) {
            switch (value.viewType) {
                case CellViewTypeEnum.empty:
                    if (props.gameStatus === GameStatus.lose && value.type === CellTypeEnum.mine) {
                        return 'view-mine-missed';
                    }
                    return 'close';
                case CellViewTypeEnum.mine:
                    return 'view-mine';
                case CellViewTypeEnum.unknown:
                    return 'view-unknown';
            }
            return 'close';
        }

        return value.type === CellTypeEnum.empty
            ? 'empty'
            : value.type === CellTypeEnum.mine
                ? 'mine'
                : value.minesAround === 0 ? '' :  'number';
    }

    function getCellValue(value: Cell): string {
        if (!value.isOpen && props.gameStatus === GameStatus.inProgress) {
            return '';
        }

        if (value.minesAround > 0 && (props.gameStatus === GameStatus.inProgress || value.isOpen)) {
            return value.minesAround.toString();
        }

        if (props.gameStatus === GameStatus.lose && value.type !== CellTypeEnum.empty) {
            return 'm';
        }
        return value.type === CellTypeEnum.empty ? ' ' : 'm';
    }

    function cellLeftClick() {
        props.onCellClick(props.cell.id);
    }

    function cellRightClick(event: any) {
        event.stopPropagation();
        event.preventDefault();
        props.onCellRightClick(props.cell.id);
    }

    return (
        <div
            onClick={cellLeftClick}
            onContextMenu={cellRightClick}
            key={props.cell.id}
            className={`cell-wrapper ${getCellClass(props.cell)}`}>
            {/*<span style={{fontSize: "9px", padding: "10px"}}>{ props.cell.debugInfo }</span>*/}
            { getCellValue(props.cell)}
        </div>
    );
}
