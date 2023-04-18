import React from "react";
import Card from "./card";

function DoneCheckbox(props) {
    return (
        <label className="checkbox">
            <input
                type="checkbox"
                checked={props.done}
                onChange={() => {
                    props.onDone(props.item);
                }}
            />
            <span></span>
        </label>
    );
}

function ListItem(props) {
    return (
        <li key={props.item.id}>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div className="controls">
                <DoneCheckbox done={props.item.done} onDone={props.onDone} item={props.item} />
                <div>
                <button className="delete" onClick={() => { props.onItemDeleted(props.item) }}>x</button>
                </div>
                </div>
            </Card>
        </li>
    );
}



export default ListItem;