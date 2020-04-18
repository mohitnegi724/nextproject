import React, {useContext, useEffect} from 'react';
import NoTasks from '../components/NoTasks'
import Layout from '../components/MyLayout';
import TasksComponent from '../components/Tasks'
import {Tasks} from '../context/Tasks'
import nextCookie from 'next-cookies'
import fetch from 'isomorphic-unfetch';

export default function Homepage(props) {
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

Homepage.getInitialProps= async (ctx) =>{
  const { pathname, query, req, err } = ctx;
  
   try {
    let res  = await fetch('http://localhost:3000/api/tasks', {
      method: 'GET',
      headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined
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