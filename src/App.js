import './App.css';
import {useState} from "react"
import {Form} from "./Form.js"
import {ListItem} from "./ListItem"

function App() {

  const [tasks,setTasks] = useState([])
  const [listInput,setListInput] = useState('')
  const [toggle,setToggle] = useState(true)

  function submitHandler (e) {
    if (listInput !== "") {
      e.preventDefault()
      setTasks([...tasks,listInput])
      setListInput("")
  }
  else {
    e.preventDefault()
  }
}

function changeToggle () {
  if (toggle) {
    setToggle(false)
  }
  else {
    setToggle(true)
  }
}

function deleteHandler (index) {
    let updatedArray = [...tasks]  //make copy of state
    updatedArray.splice(index,1)  //make changes
    setTasks(updatedArray)  //update state
  }
  
  return (
    <div className="App">
      <h1>To Do List</h1>
      <Form submitHandler={submitHandler} listInput={listInput} setListInput={setListInput}/>
      <div id="list" style={toggle ? {paddingBottom: "10px"} : {paddingBottom: "0" }}>
        <button onClick={() => changeToggle()} id="showHide">{toggle ? "Hide List" : "Show List" }</button>
        {toggle && tasks.map(function(task,index) {
          return <ListItem deleteHandler={() => deleteHandler(index)} taskContent={task}/>
        })}
      </div>
    </div>
  )
}

export default App;
