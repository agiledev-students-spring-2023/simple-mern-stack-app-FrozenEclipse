import { Link } from 'react-router-dom'
import './AboutUs.css'

/**
 * A React component that represents the About Us page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  return (
    <>
      <h1>About Me</h1>
      <p>Hello! My name is Jeffrey.  <br />I'm currently a Junior at CAS pursuing a BA in Computer Science.  <br />I'm interested in doing Software Development!  <br />I'm currently leetcoding and still looking for internship opportunities!  <br />Have a really badly photoshopped picture of me I made for my Intro to Web Development Class! </p>
      <img src="https://frozeneclipse.github.io/image/imgme.png" alt="picture of myself"/>
      <p>(This is currently completely in the front-end but will convert to back-end in the future).</p>

    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
