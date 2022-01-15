import { GameStatus } from "../../App";

export function StatsComponent({status}: { status: GameStatus }) {
    return (
        <div className="stats-wrapper">
            stats will be here
            <span>={status}=</span>
        </div>
    );
}
