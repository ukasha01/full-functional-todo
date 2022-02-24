import React from "react";
import Input from '../component/input'
import Btn from "../component/button";
// import List from "../component/list";

const List = ({todoArr,remTodoItem,upto,item,showItem,edit})=>{
    return<>
    {todoArr.map((val,ind)=>{
        return<>
        <p style={{textDecoration: val.isCompleted ? "line-through" : "none" }}>
            <span>{ind+1}</span>
            <span  onClick={()=>upto(ind)} key={ind}>{val.todotext}</span>
            <button onClick={()=>remTodoItem(ind)}> Delet </button>
            <button onClick={()=>edit(ind)}> Edit </button>

            
           
        </p>
        </>
    })}
    </>

}
export default List