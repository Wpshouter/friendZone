import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footert = () => {
    return (
       <footer className="footer footer-horizontal footer-center bg-[#244d3f] text-primary-content p-10">
  <aside className='container mx-auto'>
    <img className="max-w-[90%] mx-auto mt-15" src="/assets/logo-xl.png" />
    <p className='text-white opacity-80 my-3'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
    <p className='text-white text-xl'>Social Links</p>
    <div className='flex items-center justify-center gap-2'>
        <div className='w-40px h-40px rounded-full bg-white p-2'>
               <FaInstagramSquare className='text-xl text-black '/>
        </div>
        <div className='w-40px h-40px rounded-full bg-white p-2'>
               <FaFacebookSquare className='text-xl text-black '/>
        </div>
         <div className='w-40px h-40px rounded-full bg-white p-2'>
               <FaSquareXTwitter className='text-xl text-black '/>
        </div>
    </div>
  </aside>
  <div className='container mx-auto'>  
       <div className="w-full h-px bg-white opacity-5"></div>
        <div className='w-full flex justify-between'>
              <p className='text-white opacity-80 '>Copyright © {new Date().getFullYear()} KeenKeeper. All right reserved</p>
              <nav>
                <ul>
                    <li className='text-white opacity-80'><a href="#">Privacy Policy</a></li>
                    <li className='text-white opacity-80'><a href="#">Terms of Service</a></li>
                    <li className='text-white opacity-80'><a href="#">Cookies</a></li>
                </ul>
              </nav>
        </div>
  </div>
  


</footer>
    );
};

export default Footert;