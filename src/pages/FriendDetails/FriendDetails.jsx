import React, { Activity, use, useContext, useEffect } from 'react';
import { FiArchive } from 'react-icons/fi';
import { MdDeleteOutline, MdOutlineAddIcCall, MdOutlineNotificationsActive } from 'react-icons/md';
import { useParams } from 'react-router';
import SideBar from './component/sidebar';
import { FaCheck, FaRegMessage } from 'react-icons/fa6';
import { IoVideocamOutline } from 'react-icons/io5';
import { FriendContext } from '../../context/FriendContext';
import { toast } from 'react-toastify';


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
    const FriendContexthere = useContext(FriendContext);
    console.log(FriendContexthere);




    const handle_activity = (Type, friend) => {
        //event.preventDefault();
        const today = new Date();
        const options = { month: "short", day: "numeric", year: "numeric" };
        const formattedDate = today.toLocaleDateString("en-US", options);

        //console.log(Type)
        const NewActivity = {
                date : formattedDate,
                'type': Type,
                'Friend': friend
        }
        //console.log(NewActivity);
         FriendContexthere.setActivity(prev => [...prev, NewActivity]);
         toast( <div className="flex items-center gap-2">
    <FaCheck className="text-primary text-xl" />
    <span>{Type} With {friend.name}</span>
  </div>, {
position: "top-center",
autoClose: 3500,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
        //console.log(FriendContexthere.Activity, "FriendContexthere.Activity");
    }
    useEffect(() => {
  console.log(FriendContexthere.Activity, "FriendContexthere.Activity");
}, [FriendContexthere.Activity]);

    return (
        <div className='container mx-auto p-5'>
   
     <div className="flex flex-col md:flex-row  gap-10 my-20 items-stretch">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4">
        <SideBar friend={friend}/>

      </aside>

      {/* Main Content */}
      <main className="flex-1">
            <div className='grid grid-cols-3 gap-4 md:gap-10 mb-8'>
                <div className='border border-gray-200 shadow-md px-1 md:px-3 py-10 text-center bg-white rounded-xl'>
                    <h3 className=' text-2xl md:text-3xl font-semibold text-emerald-900 mb-3'>{friend.days_since_contact}</h3>
                    <p className='text-slate-500 text-md md:text-xl'>Days Since Contact</p>
                </div>
                <div className='border border-gray-200 shadow-md px-1 md:px-3 py-10 text-center bg-white rounded-xl'>
                    <h3 className='text-2xl md:text-3xl font-semibold text-emerald-900 mb-3'>{friend.goal}</h3>
                    <p className='text-slate-500 text-md md:text-xl'>Goals (Days)</p>
                </div>
                <div className='border border-gray-200 shadow-md px-1 md:px-3 py-10 text-center bg-white rounded-xl'>
                    <h3 className='text-2xl md:text-3xl font-semibold text-emerald-900 mb-3'>{formatted}</h3>
                    <p className='text-slate-500 text-md md:text-xl'>Next Due</p>
                </div>
            </div>
            <div className='w-full border border-gray-200 shadow-md text-center bg-white rounded-xl mb-8'>
                  <div className='flex justify-between items-start p-7'>
                        <div>
                            <h3 className='text-xl font-bold text-slate-700 text-left mb-5'>Relationship Goal</h3>
                                 <h3 className='text-xl text-slate-700'>Connect Every <strong>{friend.goal} days</strong></h3>
                        </div>
                        <div>
                            <button className='btn '>Edit</button>
                        </div>
                  </div>
            </div>
            <div className='w-full border border-gray-200 shadow-md text-center bg-white rounded-xl p-7 mb-8'>
                      <h3 className='text-xl font-bold text-slate-700 text-left mb-5'>Quick Check-In</h3>
                  <div className='grid grid-cols-3 items-center gap-6'>
                
                        <button onClick={()=>handle_activity('Call', friend)} className='btn p-10 py-15 text-center'>
                            <p className='text-xl font-bold text-slate-700 flex flex-col text-center justify-center items-center gap-2'>  <MdOutlineAddIcCall className='text-2xl' /><span>Call</span></p>
                        </button>

                           <button onClick={()=>handle_activity('Text', friend)} className='btn p-10 py-15 text-center'>
                            <p className='text-xl font-bold text-slate-700 flex flex-col text-center justify-center items-center gap-2'>  <FaRegMessage className='text-2xl' /><span>Text</span></p>
                        </button>

                           <button onClick={()=>handle_activity('Video', friend)} className='btn p-10 py-15 text-center'>
                            <p className='text-xl font-bold text-slate-700 flex flex-col text-center justify-center items-center gap-2'>  <IoVideocamOutline className='text-2xl' /><span>Video</span></p>
                        </button>
                  </div>
            </div>

      </main>
    </div>

        </div>
    );
};

export default FriendDetails;