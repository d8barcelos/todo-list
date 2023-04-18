import React, { useEffect, useState } from "react";
import './todo.css';
import List from './components/list.js';
import TodoForm from "./components/todoForm";
import Item from './components/item';
import Modal from "./components/modal";

const SAVED_ITEMS = "savedItems";

function Todo() {

    const [showModal, setShowModal] = useState(false); 

    const [items, setItems] = useState(() => {
        const savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        return savedItems || [];
      });
    
    useEffect (() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items])


    function onAddItem(text) {
        let item = new Item(text);
        setItems([...items, item])
        onHideModal(false);
    }

    function onItemDeleted(item) {

        let filteredItems = items.filter(it => it.id !== item.id)
        setItems(filteredItems);

    }

    function onDone(item) {

        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done
             }
             return it;
        })
        setItems(updatedItems);
    }

    function onHideModal () {
        setShowModal(false)
    }

    return (
        <div className="container">
        <header className="header">
        <h1>Todo List</h1>
        <button className="addButton" onClick={()=> {setShowModal(true)}}>+</button>
        </header>
            {/*<TodoForm onAddItem={onAddItem}></TodoForm>*/}
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
            <Modal show={showModal} onHideModal = {onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
        </div>
    )
}

export default Todo;