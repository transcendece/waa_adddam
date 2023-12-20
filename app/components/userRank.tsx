'use client';

import React, {useEffect,useState} from 'react';

type LeaderboardDto = {
  username: string;
  avatar: string;
  rank: number;
  level: number;
  achievements: string[];
 };

function UserRank() {
  const [userData, setUserData] = useState<LeaderboardDto[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/leaderboard', {
      method: "GET",
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        console.log("ibzdane n jesus",data);
        setUserData(data);
      })
      .catch(error => console.error('Error:', error));
   }, []);

   const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

   useEffect(() => {
    if (typeof window !== 'undefined') {
     const handleResize = () => setWindowWidth(window.innerWidth);
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
    }
   }, []);
      
  return (
   
  <div className="w-full  flex flex-col space-y-4 justify-center items-center mt-40 ">
    <div className="hidden max-[640px]:flex max-[768px]:w-[90%] w-full  bg-[#30313E] flex-row flex-end items-center justify-around rounded-lg h-16  "> 
        <div className='  flex flex-row items-center gap-4'><p className='font-mono'>Avatar </p></div>
          <div className='  flex flex-row items-center gap-4 '><p className='font-mono'>Username </p></div>
          <div className='  flex flex-row items-center  gap-4'><p className='font-mono'>Rank </p> </div>
          <div className='  flex flex-row items-center  gap-4'><p className='font-mono'>Lvl</p></div>
          <div className='  flex flex-row items-center  gap-4'><p className='font-mono'>PG</p></div>
    </div>
  {userData.map((user, index) => (

    <div key={index} className='max-[768px]:w-[90%] w-full bg-[#30313E] py-2 px-6 flex flex-row items-center justify-between rounded-lg '>
      <div className='flex flex-row items-center gap-10'>
        <img className='mr-4 profile-img bg-black rounded-full w-10 h-10 object-cover' src={user.avatar} />
        <div className='flex flex-row items-center gap-10'>
          <div className='bg-[#30313E] flex flex-row items-center gap-4 truncate'><p className='hidden min-[1024px]:block mr-6'>Username :</p><p>{windowWidth < 640  && user.username.length > 7 ? `${user.username.slice(0, 7)}...` : user.username}</p></div>
          <div className='bg-[#30313E] flex flex-row items-center gap-4 truncate'><p className='hidden min-[1024px]:block mr-6'>Rank :</p><p>{user.rank}</p></div>
          <div className='bg-[#30313E] flex flex-row items-center gap-4 truncate'><p className='hidden min-[1024px]:block mr-6'>Level :</p><p>{user.level}</p></div>
          <div className='bg-[#30313E] flex flex-row items-center gap-4 truncate'><p className='hidden min-[1024px]:block '>Games Played :</p><p>{user.level}</p></div>
        </div>
      </div>
        <div className=' min-[xl]:  hidden md:flex flex-row items-center gap-3 '>
          <img className='profile-img bg-[#30313E] rounded-full w-10 h-10 object-cover' src ={user.achievements[0]} />
          <img className='profile-img bg-[#30313E] rounded-full w-10 h-10 object-cover'src ={user.achievements[1]} />
          <img className='profile-img bg-[#30313E] rounded-full w-10 h-10 object-cover'src ={user.achievements[2]} />
        </div>
    </div>
  ))}
 
 </div>
   
  );
}



export default UserRank;




