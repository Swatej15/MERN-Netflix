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
            <h2 className='text-xl font-bold '>Categories</h2>
            <div className='flex-grow' /> 
            
            <button
  onClick={() => setModalOpen(true)}
  className='bg-subMain font-medium flex items-center gap-2 transition hover:bg-main border border-subMain text-white py-3 px-5 rounded'
>
  <HiPlusCircle /> <span>Create</span>
</button>

            
        </div>

        <Table2 data={CategoriesData} users={false} OnEditFunction={OnEditFunction} /> 
      </div>
    </SideBar>
  );
}

export default Categories;