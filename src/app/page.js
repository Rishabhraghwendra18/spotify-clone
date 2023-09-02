'use client'
import Image from 'next/image';
import {accessUrl} from './spotify'
import './page.css';

export default function Home() {
  return (
    <div className='login'>
      <Image src={"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"} width={830} height={350} alt='Spotify logo'/>
      <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}
