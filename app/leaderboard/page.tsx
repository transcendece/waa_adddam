import React from 'react';
import UserRank from '../components/userRank';
import Navbar from "../components/Navbar";

export default function page() {
 return (
//  <div className='h-screen w-full'>
//      <UserRank />
//  </div>
<div className="flex flex-col min-h-screen w-full">
      <div className="h-16 mb-7 w-full Large:h-24"><Navbar pageName="leaderboard" /></div>
            <div className='h-screen w-full '>
              <UserRank />
            </div>
            </div>
 );
}
