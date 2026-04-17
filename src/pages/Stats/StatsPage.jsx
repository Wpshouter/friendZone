import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContext';
import PieChartCompo from './componenet/PieChartCompo';

const StatsPage = ({frineData}) => {
    const FriendContextHere = useContext(FriendContext);
    console.log(FriendContextHere);
    const TextData = FriendContextHere.Activity.filter(Activity => Activity.type === 'Text');
    const CallData = FriendContextHere.Activity.filter(Activity => Activity.type === 'Call');
    const VideoData = FriendContextHere.Activity.filter(Activity => Activity.type === 'Video');
    const data = [
  { name: "Text", value: TextData.length },
  { name: "Call", value: CallData.length },
  { name: "Video", value: VideoData.length },
];

    return (
        <div className='container mx-auto my-20 p-5'>
             <h2 className='text-gray-900 font-bold text-2xl my-3'>Friendship Analytics</h2>
            <PieChartCompo data={data}/>
        </div>
    );
};

export default StatsPage;