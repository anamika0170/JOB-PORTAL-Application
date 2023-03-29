import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'

const Error = () => {
  return (
    <center>
      <div>
        <img src={img} alt='not found' />
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </center>
  )
}

export default Error
