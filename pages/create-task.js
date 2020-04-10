import React, { useState } from 'react'
import Layout from '../components/MyLayout'
import Axios from 'axios'

export default function Blog() {
  let [title, setTitle] = useState('')
  let [content, setContent] = useState('')
  let [pros, setPros] = useState('')
  let [cons, setCons] = useState('')
  let [minDays, setMinDays] = useState(0)
  let [maxDays, setMaxDays] = useState(0)

  let handleSubmit=event=>{
    event.preventDefault();
    let formBody = {title, content, minDays, maxDays, pros, cons}
    Axios.post('http://localhost:3000/api/createTask', formBody)
  }

  return (
    <Layout>
      <form method="POST" action="/api/createTask" onSubmit={e=>handleSubmit(e)}>
        <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)} placeholder="title" />
        <input type="text" name="content" value={content} onChange={e=>setContent(e.target.value)} placeholder="content" />
        <input type="number" name="minDays" value={minDays} onChange={e=>setMinDays(e.target.value)} placeholder="minDays" />
        <input type="number" name="maxDays" value={maxDays} onChange={e=>setMaxDays(e.target.value)} placeholder="maxDays" />
        <input type="text" name="pros" value={pros} onChange={e=>setPros(e.target.value)} placeholder="Pros" />
        <input type="text" name="cons" value={cons} onChange={e=>setCons(e.target.value)} placeholder="Cons" />
        <input type="submit" value="Submit" />
      </form>
    </Layout>
  );
}