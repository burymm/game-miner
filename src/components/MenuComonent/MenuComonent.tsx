export function MenuComonent(props: any) {
    function newGameClick() {
        props.newGameClick();
    }

    return (
        <div className="menu-wrapper">
            <button className="btn btn-primary" onClick={newGameClick}>New game</button>
        </div>
    );
}
