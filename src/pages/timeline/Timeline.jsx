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
    return (
        <div className='container mx-auto my-20 p-5'>
            <h2 className='text-gray-900 font-bold text-2xl'>Timeline</h2>
            <select onChange={(e)=>handleFilterType(e)} defaultValue="Small" className="select select-md my-3 border-gray-200">
            <option vlaue="">Filter Timeline</option>
                <option value="Call">Call</option>
                <option value="Text" >Text</option>
                <option value="Video" >Video</option>
            </select>
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