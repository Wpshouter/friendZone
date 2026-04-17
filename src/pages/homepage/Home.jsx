import React, { Suspense, use } from 'react';
import { GoPlus } from 'react-icons/go';
import Stats from './component/Stats/Stats';
import FriendCard from './component/FriendCard/FriendCard';

//const frineData = fetch('/data.json').then( res => res.json());

const Home = ({frineData}) => {
    
    //console.log(frieds, "friend data");
    return (
        <div className='p-5'>
            <h1 className='text-5xl font-bold text-gray-800 text-center mt-20 my-5'>Friends to keep close in your life</h1>
            <p className='text-slate-500 text-center my-6'>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br></br>
relationships that matter most.</p>
            <p className='text-center my-6'> <button className='bg-emerald-900 btn text-white btn-primary'><GoPlus className='text-2xl' />  Add a Friend</button></p>
            <Suspense fallback={<div className='flex justify-center items-center p-50'><span className="loading loading-spinner loading-xl"></span></div>}>
                <Stats frineData={frineData}/>
              
            </Suspense>
        </div>
    );
};

export default Home;