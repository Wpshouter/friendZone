import React, { use } from 'react';
import { FiArchive } from 'react-icons/fi';
import { MdDeleteOutline, MdOutlineNotificationsActive } from 'react-icons/md';
import { useParams } from 'react-router';
import SideBar from './component/sidebar';


const FriendDetails = ({frineData}) => {

    const params = useParams();
    //console.log(params);
    const all_data = use(frineData);
    const friend = all_data.find(friend => friend.id == params.id);
    console.log(friend, "friendreta");
    const rawDate = friend.next_due_date;

    // Convert to Date object
    const dateObj = new Date(rawDate);

    // Format with options
    const formatted = dateObj.toLocaleDateString("en-US", {
    month: "short",  // "Feb"
    day: "numeric",  // "27"
    year: "numeric"  // "2026"
    });

    //console.log(formatted); // "Jul 22, 2025"

    return (
        <div className='container mx-auto'>
   
     <div className="flex h-screen gap-10 my-20 items-stretch">
      {/* Sidebar */}
      <aside className="w-1/4">
        <SideBar friend={friend}/>

      </aside>

      {/* Main Content */}
      <main className="flex-1  overflow-y-auto">
            <div className='grid grid-cols-3 gap-10'>
                <div className='border border-gray-200 shadow-md py-10 PX-3 text-center bg-white rounded-xl'>
                    <h3 className='text-3xl font-semibold text-emerald-900 mb-3'>{friend.days_since_contact}</h3>
                    <p className='text-slate-500 text-xl'>Days Since Contact</p>
                </div>
                <div className='border border-gray-200 shadow-md py-10 PX-3 text-center bg-white rounded-xl'>
                    <h3 className='text-3xl font-semibold text-emerald-900 mb-3'>{friend.goal}</h3>
                    <p className='text-slate-500 text-xl'>Goals (Days)</p>
                </div>
                <div className='border border-gray-200 shadow-md py-10 PX-3 text-center bg-white rounded-xl'>
                    <h3 className='text-3xl font-semibold text-emerald-900 mb-3'>{formatted}</h3>
                    <p className='text-slate-500 text-xl'>Next Due</p>
                </div>
            </div>
      </main>
    </div>

        </div>
    );
};

export default FriendDetails;