import React from "react";
function Btn({add,todoarr,item}) {
    return <>
        <button onClick={()=>add({todotext:item,isCompleted:false})}>Add</button>
    </>
}
export default Btn