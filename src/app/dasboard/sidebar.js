import React from 'react'
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux'
import {AiOutlineHome,AiOutlineSearch} from 'react-icons/ai';
import {BiLibrary} from 'react-icons/bi';
import SideBarOption from './sidebarOption';
import './sidebar.css';

function SideBar() {
    const playlists = useSelector(state=>state.user.playlists)
  return (
    <div className='sidebar'>
        <Image src={'https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'} width={180} height={70} alt='Spotify logo' className='sidebar__logo'/>
        <SideBarOption Icon={AiOutlineHome} title={"Home"}/>
        <SideBarOption Icon={AiOutlineSearch} title={"Search"}/>
        <SideBarOption Icon={BiLibrary}title={"Your Library"}/>

        <br/>
        <strong className='sidebar__title'>PLAYLISTS</strong>
        <hr/>
        {playlists?.items?.map((playlist,index)=>(
            <SideBarOption title={playlist.name} key={index}/>
        ))}
    </div>
  )
}

export default SideBar