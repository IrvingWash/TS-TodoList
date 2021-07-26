export const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper pink darken-4 px1'>
        <a href='/' className='brand-logo'>
          React + TypeScript
        </a>
        <ul className='right hide-on-med-and-down'>
          <li>
            <a href='/'>Todo list</a>
          </li>
          <li>
            <a href='/'>Information</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
