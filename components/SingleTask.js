import React, {Fragment} from 'react'
export default function singleTask(props){
  const {title, content, pros, cons} = props.task;
  return(
    <Fragment>
    <div className="taskContainer">
      <div className="title">
        {title}
      </div>
      <p>
        {content}
      </p>
      <div>
        <strong>Pros</strong>
        <br/>
        <span>{pros}</span>
      </div>
      <div>
        <strong>Cons</strong>
        <br/>
        <span>{cons}</span>
      </div>
    </div>
    <style jsx>
      {
        `
        .taskContainer {
          display: flex;
          flex-direction: column;
          width: 240px;
          background-clip: padding-box;
          margin: 16px;
          border: 1px solid #5f6368;
          background-clip: padding-box;
          padding: 10px 5px;
          box-sizing: border-box;
        }
        .title {
          display: flex;
          align-items: center;
          width: 100%;
          height: 40px;
          color: black;
          font-weight: 600;
        }
        `
      }
    </style>
    </Fragment>
  )
}
