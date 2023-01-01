
const NavbarR = ({signup}) => {
  return (
        <nav className="navigation">
          <a href="/" className="brand-name">
            Datalands
          </a>
          
          {(!signup) ? (<div
            className="navigation-menu">
            <ul>
              <li>
                <a href="/medium">Medium</a>
              </li>
              <li>
                <a href="/Freecodecamp">Freecodecamp</a>
              </li>
            </ul>
          </div>) : ''}
        </nav>
      );
}

export default NavbarR;