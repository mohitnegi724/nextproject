import React from 'react';

export default function NoTasks() {
  return (
    <div className="NoTaskContainer">
      <div className="NoTaskQuotePart">
        Quote Part
      </div>

      <div className="AddTaskPart">
        Add Task Part
      </div>
      <style jsx>{
        `
        .NoTaskContainer{
          display: flex;
          transition: 0.9s ease-in-out;
        }
        
        `
      }
      </style>
    </div>
  )
}
