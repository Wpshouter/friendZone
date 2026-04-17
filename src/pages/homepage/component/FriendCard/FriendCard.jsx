import React, { use } from 'react';
import { Link } from 'react-router';

const FriendCard = ({ frineData }) => {
  const friends = use(frineData); // resolved JSON array
  console.log(friends, "friend from stats card");

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-stretch">
      {friends.map(friend => (
        // <div key={friend.id} className="p-4 border rounded shadow">
        //   <img
        //     src={friend.picture}
        //     alt={friend.name}
        //     className="w-16 h-16 rounded-full mb-2"
        //   />
        //   <h2 className="text-lg font-bold">{friend.name}</h2>
        //   <p className="text-sm text-gray-600">{friend.email}</p>
        //   <p className="mt-2">{friend.bio}</p>
        //   <p className="text-xs text-gray-500">
        //     Days since contact: {friend.days_since_contact} | Status: {friend.status}
        //   </p>
        // </div>
          <Link key={friend.id} to={`/friend/${friend.id}`}>
           <div  className='border border-gray-200 shadow-md py-10 PX-3 text-center bg-white cursor-pointer h-full'>
                  <p className=''><img src={friend.picture} alt={friend.name} className="max-w-[100px] mx-auto rounded-full mb-2" /></p>
                  <p className='text-gray-800 font-bold text-xl'>{friend.name}</p>
                  <p className='text-slate-600 my-2'>{friend.days_since_contact}d ago</p>
                  {
                    friend.tags.map((tag, indx) => (
                      <div key={indx} className="badge badge-success mx-2">{tag}</div>
                    ))
                  }
                  <br></br>
                  {
                    friend.status === 'overdue' ? (
                       <div className="badge badge-error my-2 text-white">Overdue</div>
                    ) : friend.status === 'on-track' ? (
                         <div className="badge badge-primary my-2 text-white">On-Track</div>
                    ) : friend.status === 'almost due' ? (
                          <div className="badge badge-warning my-2 text-white">Almost Due</div>
                    ) : ''
                  }

            </div>
            </Link>
      ))}
    </div>
  );
};

export default FriendCard;
