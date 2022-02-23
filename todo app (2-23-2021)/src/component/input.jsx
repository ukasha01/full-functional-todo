import React ,{useState} from "react";
import UseTodo from "../hooks/todoFunc";
   const TodoScr = ({onchng,val,plhldr})=>{
    //  console.log(val)
    const {item}= UseTodo
     return(
         <>
         <input onChange={onchng} value={val} placeholder={plhldr}  />
         </>
     )
 }
 export default  TodoScr