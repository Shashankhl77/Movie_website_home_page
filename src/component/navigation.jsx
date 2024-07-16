import React from 'react'

function Navigation() {
  return (
   <>
<div className='navbar'>
  <div className='col-2'>
  <h1>MO<span className='color'>movies</span></h1>
  </div>
  <div className='navinfo col-10'>
   
  <ul className="nav nav-pills">
  <li className="nav-item">
    <a className="nav-link" aria-current="page">
      <input type='text' id='search' placeholder='search movie'/> &nbsp;
    <i className="fa-solid fa-magnifying-glass"></i>
    </a>
  </li>
  <li className="nav-item dropdown">
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">
      Home&nbsp;
      <i className="fa-solid fa-house"></i>
    </a>
  </li>
 
  <li className="nav-item">
    <a className="nav-link" href="#">
      Movies &nbsp;
    <i className="fa-solid fa-video"></i>
    </a>
  </li>
  <li className="nav-item">
  <a className="nav-link" href="#">
  <i class="fa-solid fa-right-to-bracket"></i> &nbsp;
    Login
   
    </a>
  </li>
</ul>
  </div>
</div>

   </>
  )
}

export default Navigation;