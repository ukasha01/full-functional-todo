import react, { useState } from "react";
// import Todo from "/./components/todo-item";
import TodoScreen from "./screens/todoScreen";
import "./App.css"
// import ListComp from "./components/list";
function App() {
  return (
    <div>
      <h1>todo List </h1>
      <TodoScreen />
    </div>
  );
}

export default App;
