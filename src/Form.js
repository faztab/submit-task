export function Form ({submitHandler, listInput, setListInput}) {
        return (
                <form onSubmit={submitHandler}>
                    <label id="taskInput">
                        <p id="taskText">Task:</p>
                        <input type="text" 
                        value={listInput}
                        onChange={(e) => setListInput(e.target.value)} 
                        id="textBox"/>
                        <input type="submit" id="Submit"/>
                    </label>
                </form>
        )
}
export default Form;