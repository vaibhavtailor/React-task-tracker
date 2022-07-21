import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h3>Made by Vaibhav Tailor</h3>
      <p>Student Number: 200458209</p>
      <p>Application made with ReactJS</p>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About