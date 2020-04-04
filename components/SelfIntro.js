import React, {Fragment, useState, useEffect} from 'react';
import Head from 'next/head'

const SelfIntro = () => {
  const Profession = ["Developer", "Learner", "Photographer"];
  let [count, setCount] = useState(0);
  const setProfFunction=()=>{
    setInterval(()=>{
      if(count>Profession.length-1){
        count = 0
      }else{
        setCount(count++)
      }
    }, 3000)
  }
  useEffect(()=>{
    setProfFunction()
  }, [])
  return(
    <Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <h1 className="introHeading">
          I'm a {Profession[count]} .
        </h1>
      </div>
      <style jsx>
        {`
          .introHeading {
            font-family: 'Oswald';
            text-transform: uppercase;
          }
        `}  
      </style>
    </Fragment>
  )
}

export default SelfIntro;