import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar';
import { HiPlusCircle } from 'react-icons/hi';
import Table2 from '../../../Components/Table2';
import { CategoriesData } from '../../../Data/CategoriesData';
import CategoryModal from '../../../Components/Modals/CategoryModal';

function Categories() {
    const [modalOpen, setModalOpen] = useState(false);
    const [category, setCategory] = useState();

    const OnEditFunction = (id) => {
        setCategory(id);
        setModalOpen(!modalOpen);
    }

    useEffect(() => {
        if(modalOpen === false) {
            setCategory();
        }
    },[modalOpen ]);
    
  return (
    <SideBar>
        <CategoryModal modalOpen={modalOpen} setModalOpen={setModalOpen} category={category}/>
      <div className='flex flex-col gap-6'>
        <div className='flex-btn gap-2'>
            <h2 className='text-xl font-bold'>Categories</h2>
            <button 
            onClick={() => setModalOpen(true)}
            className='bg-subMain font-medium flex-rows gap-4 transition hover:bg-main border border-subMain text-White py-6 px-6 rounded'>
                <HiPlusCircle /> Create
            </button>
        </div>

        <Table2 data={CategoriesData} users={false} OnEditFunction={OnEditFunction} /> 
      </div>
    </SideBar>
  );
}

export default Categories;