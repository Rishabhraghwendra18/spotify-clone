import React from 'react';
import {AiOutlineHome,AiOutlineSearch} from 'react-icons/ai';
import {useSelector} from 'react-redux';
import { Avatar } from '@mui/material';
import './header.css';

function Header({children}) {
    const user = useSelector(state=>state.user?.user);
  return (
    <div className='header'>
        <div className='header_left'>
            <AiOutlineSearch/>
            <input
            placeholder='Search for Artists, Songs'
            type='text'
            />
        </div>
        <div className='header_right'>
            <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header;