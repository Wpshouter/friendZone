import React from 'react';
import { FiArchive } from 'react-icons/fi';
import { MdDeleteOutline, MdOutlineNotificationsActive } from 'react-icons/md';
const SideBar = ({friend}) => {
    return (
        <div>
               <div className='border border-gray-200 shadow-md  text-center bg-white text-center p-5 rounded-xl'>
            <p className=''><img src={friend.picture} alt={friend.name} className="max-w-[100px] mx-auto rounded-full mb-2" /></p>
                              <p className='text-gray-800 font-bold text-xl'>{friend.name}</p>
                              <p className='text-slate-600 my-2'>62d ago</p>
                  
                  {
                    friend.status === 'overdue' ? (
                       <div className="badge badge-error my-2">Overdue</div>
                    ) : friend.status === 'on-track' ? (
                         <div className="badge badge-primary my-2">On-Track</div>
                    ) : friend.status === 'almost due' ? (
                          <div className="badge badge-warning my-2">Almost Due</div>
                    ) : ''
                  }
                  <br></br>
                  {
                    friend.tags.map((tag, indx) => (
                      <div key={indx} className="badge badge-success mx-2">{tag}</div>
                    ))
                  }
                  <p className='text-slate-500 text-md italic my-2'>"{friend.bio}"</p>
                  <p className='text-slate-500 text-md mb-3'>Preferred:Email</p>
        </div>
          <div className='  bg-white text-center my-4'>
                  <button className='border border-gray-200  btn btn=ghost w-full bg-white text-[18px] py-7'><MdOutlineNotificationsActive className='text-xl'/> Snooze 2 Weeks</button>
          </div>

           <div className='  bg-white text-center my-4'>
                  <button className='border border-gray-200  btn btn=ghost w-full bg-white text-[18px] py-7'><FiArchive className='text-xl'/> Archive</button>
          </div>

           <div className='  bg-white text-center my-4'>
                  <button className='border border-gray-200  btn btn=ghost w-full bg-white text-[18px] py-7 text-red-500'><MdDeleteOutline className='text-xl'/> Delete</button>
          </div>
        </div>
    );
};

export default SideBar;