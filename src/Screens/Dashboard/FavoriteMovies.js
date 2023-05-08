import React from 'react';
import SideBar from './SideBar';
import Table from '../../Components/Table';
import Movies from '../../Data/MoviesData';

function FavoriteMovies() {
  return (
    <SideBar>
    <div className='flex flex-col gap-6'>
        <div className='flex-btn gap-2'>
            <h2 className='text-xl font-bold'>Favorites Movies</h2>
            <button className='bg-main font-medium transition hover:bg-subMain border border-subMain text-White py-6 px-6 rounded'>
                Delete All
            </button>
        </div>

        <Table dta={Movies} admin={false}/>
    </div>
    </SideBar>
  )
}

export default FavoriteMovies