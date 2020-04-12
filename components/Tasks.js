import React, { Fragment, useContext} from 'react';
import {Tasks} from '../context/Tasks'

export default function TasksComponent(props){
  const context= useContext(Tasks)
  const {tasks} = context;
  const printTasks = () => {
    return tasks.map(task=>(
      <Fragment>
        <h3>
          {task.title}
        </h3>
        <p>
          {task.content}
        </p>
        <div>
          <strong>Pros</strong>
          <br/>
          <span>{task.pros}</span>
        </div>
        <div>
          <strong>Cons</strong>
          <br/>
          <span>{task.cons}</span>
        </div>
      </Fragment>
    ))
  }
  return(
    <Fragment>
      Tasks
      {printTasks()}
    </Fragment>
  )
}