import { useState } from "react"

const Addtask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e)=> {
        e.preventDefault()
    
        if(!text){
            alert('Please add a task 😊')
            return
        };

        onAdd({ text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)

    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className="formcontrol">
            <label>Task</label>
            <input type="text" placeholder='Add Task' 
            value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="formcontrol">
            <label>Day & Time</label>
            <input type="text" placeholder='Add Date' 
            value={day} onChange={(e)=>setDay(e.target.value)}/>
        </div>
        <div className="formcontrol form-control-check">
            <div className="cj">
            <label>Set Reminder:</label>
            <input type="checkbox" 
            checked={reminder} 
            value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
        </div>
        <div>
            <input type="submit" value="Save Task" className='btn-btn-block' />
        </div>
    </form>
  )
}

export default Addtask
