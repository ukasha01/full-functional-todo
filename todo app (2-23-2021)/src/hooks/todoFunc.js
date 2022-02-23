import React, { useState } from "react";
const UseTodo = () => {
    const [item, setItem] = useState("");
    const [todoArr, addArr] = useState([]);
    let showItem = (event) => {
        setItem(event.target.value);
    };
    let addItem = (newTodo) => {
        let  a = newTodo
        //   console.log(todoArr)
        if (item.length == 0) {
            alert("please Enter the item");
        } else {
            addArr([...todoArr, a]);

            setItem("");
            
           
            
        } 
    
    } 
    let updateTodo = (ind)=>{
        
        
        let updatedArr = [...todoArr]
        updatedArr[ind].isCompleted = !updatedArr[ind].isCompleted
        addArr(updatedArr)
        console.log(updatedArr)
        // console.log(todoArr)
        
    }
    
    let editTodo = () => {
        setItem(editVal);
        let lst = [...todoArr];
        lst[editind] = item;
        editNewArr(lst);
    };
    let removeArr = (ind) => {
        let arr = [...todoArr];

        arr.splice(ind, 1);
        addArr(arr);
    }
    return { item, todoArr, showItem, addItem, editTodo,removeArr,updateTodo }
}
export default UseTodo