import { Link } from "react-router-dom"
export default function Header() {
  return (
    <div>
        <h1>Hearded part</h1>
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li> <Link to={'/About'}>About</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/Blogs'}>blogs</Link></li>
                
            </ul>
        </nav>
    </div>
  )
}
