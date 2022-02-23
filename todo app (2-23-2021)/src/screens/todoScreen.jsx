import React, { useState } from "react";
import Input from '../component/input'
import UseTodo from "../hooks/todoFunc";
import Btn from "../component/button";
import List from "../component/list";
const TodoScr = () => {
    const { item, todoArr, showItem, addItem, editTodo,removeArr,updateTodo } = UseTodo()
    return (
        <>
            <Input
                onchng={showItem}
                val={item}
                plhldr="Enter your Data"
            />
            <Btn
                add={addItem}
                todoArr={todoArr}
                item={item}
            />
            <List
                todoArr={todoArr}
                remTodoItem={removeArr}
                upto={updateTodo}
                item={item}

                
            />
        </>
    );
}
export default TodoScr