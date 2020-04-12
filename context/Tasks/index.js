import React, {createContext, useState} from 'react';

export const Tasks = createContext([])

export const TasksProvider =props=>{
  const [tasks, setState] = useState([])
  return(
    <Tasks.Provider value={{
      tasks,
      setTasks: newtasks=>{
        setState(newtasks)
      }}}>
      {props.children}
  </Tasks.Provider>
  )
}