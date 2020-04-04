import { Fragment } from 'react';

export default function Blog() {
  return (
    <Fragment>
      <div className='container'>
        <a href="/api/auth/google">google</a>
      </div>
      <style jsx>{`
      .container {
        padding: 10px 5%;
        width: 90%;
        height: 100%;
      }
      `}</style>
    </Fragment>
  );
}