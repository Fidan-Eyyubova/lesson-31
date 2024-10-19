import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
     <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 ">
  <div className="col-md-4 d-flex align-items-center">
    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
      <svg className="bi" width={30} height={24}><use xlinkHref="#bootstrap" /></svg>
    </a>
    <span className="mb-3 mb-md-0 ">© Adopting Animals</span>
  </div>
  <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
    <li className='icon'>
  <FaTwitter />
    </li>
    <li className='icon'>
    <FaInstagram />
    </li>
    <li className='icon'>
    <FaFacebookF />
    </li>
  </ul>
</footer>
    </div>
  )
}

export default Footer
