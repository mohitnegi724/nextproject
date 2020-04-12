import React, {useContext, useEffect} from 'react';
import NoTasks from '../components/NoTasks'
import Layout from '../components/MyLayout';
import {Tasks} from '../context/Tasks'
import fetch from 'isomorphic-unfetch';


export default function Blog(props) {
  let context = useContext(Tasks)
  
  useEffect(()=>{
    context.setTasks(props.tasks)
  }, [])

  return (
    <Layout>
        <NoTasks />
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

Blog.getInitialProps= async ({req}) =>{
  try {
    let res = await fetch('http://localhost:3000/api/tasks')
    if(res){
      let tasks = await res.json();
      return {
        tasks: tasks
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