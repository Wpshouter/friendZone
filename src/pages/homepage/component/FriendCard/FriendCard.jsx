import React, { use } from 'react';
import { Link } from 'react-router';

const FriendCard = ({ frineData }) => {
  const friends = use(frineData); // resolved JSON array
  console.log(friends, "friend from stats card");

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-stretch">
      {friends.map(friend => (

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
