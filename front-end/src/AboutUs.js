import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import './AboutUs.css'

/**
 * A React component that represents the About Us page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  const [about, setabout] = useState([])
  useEffect(() => {
    fetch('http://localhost:5002/AboutUs')
    .then(res => res.json())
    .then(data => {
      setabout(data);
    })
    .catch(err => {
      console.log(err)
    });
  }, [])

  return (
    <>
      <h1>About Me</h1>
      <p>{about.paragraph}</p>
      <img src={about.image} alt="picture of myself"/>
      {/* <p>(This is currently completely in the front-end but will convert to back-end in the future).</p> */}

    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
