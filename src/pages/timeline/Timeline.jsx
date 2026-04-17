import React, { useContext, useState } from 'react';
import { FriendContext } from '../../context/FriendContext';
import { MdOutlineAddIcCall } from 'react-icons/md';
import { FaRegMessage } from 'react-icons/fa6';
import { IoVideocamOutline } from 'react-icons/io5';

const Timeline = () => {
        const FriendContexthere = useContext(FriendContext);
        console.log(FriendContexthere.Activity,"FriendContexthere");
        const [filterType, setfilterType] = useState(FriendContexthere.Activity);
        const handleFilterType = (event) => {
            console.log(event.target);
            const filterValue = event.target.value;
            console.log(filterValue);
            if(filterValue == 'Filter Timeline'){
                    setfilterType(FriendContexthere.Activity);
            }
            else{
                setfilterType(FriendContexthere.Activity.filter(filterTypesing => filterTypesing.type === filterValue));
            }
           
        }
        const handle_searchType = (event) => {
              const typed_text = event.target.value.toLowerCase();
            console.log(typed_text);
             const results = FriendContexthere.Activity.filter(
                (activity) =>
                  
                activity.type.toLowerCase().includes(typed_text)||
                activity.Friend.name.toLowerCase().includes(typed_text)
            );
            console.log(results, "rtesrer");
            setfilterType(results);
        }
    return (
        <div className='container mx-auto my-20 p-5'>
            <h2 className='text-gray-900 font-bold text-2xl'>Timeline</h2>
            <div className='flex gap-10 items-center'>
            <select onChange={(e)=>handleFilterType(e)} defaultValue="Small" className="select select-md my-3 border-gray-200">
                <option vlaue="">Filter Timeline</option>
                <option value="Call">Call</option>
                <option value="Text" >Text</option>
                <option value="Video" >Video</option>
            </select>
            <input onInput={(e)=>handle_searchType(e)} type="text" placeholder="Search" className="input input-neutral border-gray-200" />
            </div>
            {
                (filterType.length < 1) ?  <div className='flex gap-4 items-center justify-center bg-white shadow-md rounded-md my-3 p-3 border border-gray-200'><p>No timeline recorded yet</p></div> : ''
            }
            {
            filterType.map((Activity,inx) => 
                (
                    <div key={inx} className='flex gap-4 items-center bg-white shadow-md rounded-md my-3 p-3 border border-gray-200'>
                  
                          {
                    Activity.type === 'Call' ? (
                       <MdOutlineAddIcCall className='text-2xl' />
                    ) : Activity.type === 'Text' ? (
                         <FaRegMessage className='text-2xl' />
                    ) : Activity.type === 'Video' ? (
                          <IoVideocamOutline className='text-2xl' />
                    ) : ''
                  }
                  <div>
                        <p className='text-slate-500'><strong className='text-gray-900'>{Activity.type}</strong> with {Activity.Friend.name}</p>
                          <p className='text-slate-500' >{Activity.date}</p>
                  </div>
                    </div>
                )
            )}
        </div>
    );
};

export default Timeline;