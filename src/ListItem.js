export function ListItem({deleteHandler,taskContent}) {
    return (
        <div id="listContainer" onClick={() => deleteHandler()}>
            <li id="listItem">{taskContent}</li>
            <input type="checkbox" id="checkbox" onClick={function(e) {e.stopPropagation()}}></input>
        </div>
    )
}
export default ListItem