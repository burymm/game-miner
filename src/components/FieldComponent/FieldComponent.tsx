import './FieldComponent.scss';
import { CellComponent } from "../CellComponent/CellComponent";
import { Cell } from "../../common/cell";
import { GameStatus } from "../../App";

export function FieldComponent(props:
                                   {onCellClick: any, onCellRightClick: any, field: Cell[][], gameStatus: GameStatus }) {
    const mineMap = props.field.map((row, rowIndex) => {
        const rowComponent = row.map((cell, cellIndex) => {
            return (
                <div className="field-cell" key={cellIndex.toString()}>
                    <CellComponent
                        cell={cell}
                        onCellClick={props.onCellClick }
                        onCellRightClick={ props.onCellRightClick }
                        gameStatus={props.gameStatus}
                    />
                </div>
            );
        });

        return (
            <div key={rowIndex.toString()} className="filed-row">
                {rowComponent}
            </div>
        );
    });

    function getGameStatus() {
        if (props.gameStatus === GameStatus.lose) {
            return (
                <div className="game-status-wrapper">
                    <h2 className="status-title">You lose</h2>
                </div>
            );
        }

        if (props.gameStatus === GameStatus.win) {
            return (
                <div className="game-status-wrapper">
                    <h2 className="status-title"> You win</h2>
                </div>
            );
        }

        return '';
    }

    return (
        <div className="field-component">
            { getGameStatus() }
            <div className="field">
                {mineMap}
            </div>
        </div>
    );
}
