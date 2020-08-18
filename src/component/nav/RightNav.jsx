import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;


const RightNav =({open})=> {
    return (
        <div className="right-nav">
            <Ul open={open}>
                <Link to='/home' className="nav-links">Home</Link>
                <Link to='/sermon' className="nav-links">Sermons</Link>
                <Link to='/event' className="nav-links">Our Events</Link>
                <Link to='/location' className="nav-links">Our Locations</Link>
                <Link to='/contact' className="nav-links">Contact Us</Link>
            </Ul>
        </div>
    )
}

export default RightNav;