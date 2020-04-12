import React, {useContext, useEffect} from 'react';
import NoTasks from '../components/NoTasks'
import Layout from '../components/MyLayout';
import TasksComponent from '../components/Tasks'
import {Tasks} from '../context/Tasks'
import fetch from 'isomorphic-unfetch';
import jsCookie from 'js-cookie';


export default function Blog(props) {
  const context = useContext(Tasks)
  const {tasks} = context;
  useEffect(()=>{
    console.log(props)
    context.setTasks(props.tasks)
  }, [])

  return (
    <Layout>
        {tasks.length?<TasksComponent/>: <NoTasks />}
        <style jsx>{`
          h1,
          a {
            margin: 0;
            padding: 0;
            font-family: 'Arial';
          }
          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}
        </style>
    </Layout>
  );
}

Blog.getInitialProps= async (ctx) =>{
  try {
    let res = await fetch('http://localhost:3000/api/tasks', {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache': 'no-cache'
      },
      credentials: 'same-origin'
    })

    if(res.status !== 404){
      let tasks = await res.json();
      return {
        tasks
      }
    }else {
      return{
        tasks: []
      }
    }
  }catch (error) {
    return{
      tasks: []
    }
  }
}