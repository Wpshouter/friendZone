import React, { use } from 'react';
import FriendCard from '../FriendCard/FriendCard';

const Stats = ({frineData}) => {
    const friends = use(frineData);
    //console.log(friends, "friend from stats jsx");
    const onTrack = friends.filter(friend => friend.status === 'on-track');
    const overDue = friends.filter(friend => friend.status === 'overdue');
    //console.log(onTrack);
    return (
        <div className='container mx-auto mb-20'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 items-stretch'>
                <div className='border border-gray-200 shadow-md py-10 PX-3 text-center bg-white'>
                    <h3 className='text-2xl font-semibold text-emerald-900'>{friends.length}</h3>
                    <p className='text-slate-500'>Total Friends</p>
                </div>
                 <div className='border border-gray-200 shadow-md py-10 PX-3 text-center bg-white'>
                    <h3 className='text-2xl font-semibold text-emerald-900'>{onTrack.length}</h3>
                    <p className='text-slate-500'>On Track</p>
                </div>
                   <div className='border border-gray-200 shadow-md py-10 PX-3 text-center bg-white'>
                    <h3 className='text-2xl font-semibold text-emerald-900'>{overDue.length}</h3>
                    <p className='text-slate-500'>Need Attention</p>
                </div>
                <div className='border border-gray-200 shadow-md py-10 PX-3 text-center bg-white'>
                    <h3 className='text-2xl font-semibold text-emerald-900'>12</h3>
                    <p className='text-slate-500'>Interaction This Month</p>
                </div>
            </div>
            <div className='divider mb-10'> </div>
              <FriendCard frineData={frineData} />
        </div>
    );
};

export default Stats;