import React, { Fragment, useContext} from 'react';
import {Tasks} from '../context/Tasks'

export default Tasks=props=>{
  const context = useContext(Tasks);
  return(
    <Fragment>
      Tasks
    </Fragment>
  )
}