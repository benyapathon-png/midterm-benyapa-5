import axios from 'axios'
import React, { useState, useEffect} from 'react'


function ToDoList() {
  const [getToDo,setGetToDo] = useState([])
  const [addTask,setAddTask] = useState("")
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)
  const [editText,setEditText] = useState([])

  const hdlFetch = () => {
    fetch('https://drive-accessible-pictures-send.trycloudflare.com/todos/5')
    .then((res) => res.json())
    .then((data) => {setGetToDo(data)})
    .catch(err => setError(err))
    .finally(()=>setLoading(false))
  }

  useEffect(()=>{
    hdlFetch()
  },[])

console.log(getToDo)

    if(loading) {
      return <h1>Loading.....</h1>
    }

    if(error) {
      return <h1 className='text-red-800'>Error Ja</h1>
    }

    const hdlPost = async (evt) => {
      evt.preventDefault()
      const res = await axios.post('https://drive-accessible-pictures-send.trycloudflare.com/todos/5',addTask)
      console.log(res.data)
      hdlFetch()
    }
    console.log(addTask)
    
    const hdlDelete = async (id) => { 
      try {
        const res = await axios.delete(`https://drive-accessible-pictures-send.trycloudflare.com/todos/5/${id}`)
      }
      catch (error){
        console.log('ลบเถอะ')
      }ß
        hdlFetch()
    }

    const hdlAddTask = (evt) => {
      const {value} = evt.target
      // const newTask = addTask.length===0 ? : 1 : addTask.[addtask.length - 1].id +1 
      setAddTask({content:value})
      console.log(value)
    }

console.log(getToDo.id)
  return (
    <div className='bg-pink-100 min-h-screen flex justify-center p-1 px-2'>
      <div className='backdrop-blur-noneg-pink-200 mt-5 min-h-screen p-6 rounded-b-md max-w-md flex flex-col border-gray rounded-md w-full'>
        <p className='text-3xl'>My Todo</p>

       <form onSubmit={hdlPost} 
       className='flex justify-between'> 
        <input
        type="text"
        className='rounded bg-pink-100'
        placeholder='newtask'
        onChange={hdlAddTask}
        value={addTask.content}/>
        <button className='bg-pink-400 border p-1 rounded-2xl'>New Task</button> 
        </form>


        <hr className='mt-5'/>
        
        <div className=''>
              {getToDo.map(el=> 
              (<div className='mt-1 flex justify-between'>
              <input className='mt-4 m-4' type="checkbox"></input>
              <label key={el.id} 
              id={el.id}>{el.content}</label> 
                
              <div className='flex gap-5'>
              <button className='bg-pink-400 border p-1 rounded-2xl' >edit</button> 
              <button className='bg-pink-400 border p-1 rounded-2xl' onClick={()=>hdlDelete(el.id)}>Delete</button> 
              </div></div>))}
        </div>
      </div>
     {/* <pre>{JSON.stringify(getToDo,null,2)}</pre> */}
    </div>
  )
}

export default ToDoList