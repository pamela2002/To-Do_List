import React from "react";
import { FcCancel } from "react-icons/fc";
const ToDoLists = (props) =>{
    return (<>
        <div className="todo_style">
            <FcCancel onClick={()=>{props.onSelect(props.id);}}/>
            <li >{props.text}</li>
        </div>
        </>
        );
}
export default ToDoLists;
//<i className="fa fa-times" aria-hidden="true" onClick={()=>{props.onSelect(props.id);}}/>