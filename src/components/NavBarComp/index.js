import {Link} from 'react-router-dom'
import {NavBar, LogoImg} from '../../StyledComponents'

import './index.css'

const NavBarComp = () => (
  <NavBar>
    <Link to="/">
      <LogoImg
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </NavBar>
)

export default NavBarComp
