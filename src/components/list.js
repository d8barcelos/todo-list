import React from "react";
import ListItem from "./listItem";

function List(props) {

    return (<ul>
        {props.items.map(item => <ListItem item={item} onDone={props.onDone} onItemDeleted={props.onItemDeleted} key={item.id}></ListItem>)}
    </ul>
    )
}


export default List;