import React, { Fragment, useContext} from 'react';
import {Tasks} from '../context/Tasks'
import SingleTask from './SingleTask' 

export default function TasksComponent(props){
  const context= useContext(Tasks)
  const {tasks} = context;
  const printTasks = () => {
    return tasks.map((task, index)=>(
      <SingleTask task={task} key={index}/>
    ))
  }
  return(
    <Fragment>
      Tasks
      <div className="tasksContainer">
        {printTasks()}
      </div>
      <style jsx>
        {`
        .tasksContainer {
          display: flex;
          flex-direction: row;
        }
        `}
      </style>
    </Fragment>
  )
}