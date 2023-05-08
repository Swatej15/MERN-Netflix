import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { Autoplay } from 'swiper';
import { Swiper,  SwiperSlide } from 'swiper/react';
import Titles from '../Titles';
import  { UsersData }  from '../../Data/MoviesData';

function MovieCasts() {
  return (
    <div className='my-12'>
        <Titles title='Casts' Icon={FaUserFriends} />
        <div className='mt-10'>
            <Swiper autoplay={{
                display: 1000,
                disableOnInteraction: false,
            }} 
            loop={true} 
            speed={1000} 
            modules={[Autoplay]} 
            spaceBetween={10}
            slidesPerView={4}
            breakpoints ={{
                0: {
                    slidesPreView: 1,
                    
                },
                400: {
                    slidesPreView: 2,
                },
                768:{
                    slidesPreView: 3,
                },
                1024: {
                    slidesPreView: 4,
                },
                1280: {
                    slidesPreView: 5,
                    spaceBetween: 30,
                }
            }}
            >
                { UsersData.map((user,i) => (
                        <SwiperSlide key={i}>
                            <div className='w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800'>
                                <img 
                                    src={`/images/${user.image}`} 
                                    alt={user.fullName} 
                                    className=' w-full h-64 object-cover rounded mb-2' />
                                {/* <p>{user?.fullName}</p> */}
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    </div>
  )
}

export default MovieCasts