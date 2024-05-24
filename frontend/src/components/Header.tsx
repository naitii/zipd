import { Link } from 'react-router-dom'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'

function Header() {
  return (
    <header className='flex mx-10 mt-5 justify-between'>

        <Link to='/'>
          <div className='logo'>
            <h2 className='text-3xl font-semibold tracking-wide text-yellow-400'>
              zipd
            </h2>
          </div>
        </Link>
      <div className='auth-buttons flex gap-5'>
        <Link to='/about'>
          <Button variant={"link"} className='btn font-medium text-lg '>About us</Button>
        </Link>
        <Link to='/auth'>
          <Button variant={"secondary"} className='btn font-medium text-lg '>Get In</Button>
        </Link>
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
