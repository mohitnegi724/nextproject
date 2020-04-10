import React from 'react';
import NoTasks from '../components/NoTasks'
import Layout from '../components/MyLayout';

export default function Blog() {
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
      `}</style>
    </Layout>
  );
}