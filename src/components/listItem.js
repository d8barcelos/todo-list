import React from "react";
import Card from "./card";

function DoneImg(props) {

    if (props.done) {
        return (<img className="check" alt="done" src="./assets/switchon.png"></img>)
    } else {
        return (<img className="notCheck" alt="undone" src="./assets/switchoff.png"></img>)
    }
}

function ListItem(props) {

    return (
        
            <li key={props.item.id}>
            <Card className={props.item.done? "done item" : "item" }>
            {props.item.text}
            <div className="icons">
            <button onClick={()=> {props.onDone(props.item)} }><DoneImg done={props.item.done}></DoneImg></button>
            <button onClick={()=> {props.onItemDeleted(props.item)} }><img className="delete" src="./assets/delete.svg" alt="img"></img></button>
            </div>
            </Card>
            </li>)}
        

export default ListItem;