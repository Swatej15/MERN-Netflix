import React from 'react';
import Layout from './../Layout/Layout';
import Head from '../Components/Head';

function Aboutus() {
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title="About Us"/>
        <div className='xl:py-20 py-20 px-4'>
          <div className='grid grid-flow-row xl:grid-cols-2 gap-2 xl:gap-16 items-center'>
            <div>
              <h3 className='text-xl lg:text-3xl mb-4 font-semibold'>
                Welcome to our Netflix
              </h3>
              <div className='mt-3 text-sm leading-8 text-text'>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </p>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </p> 
              </div>
              <div className='grid md:grid-cols-2 gap-6 mt-8'>
                <div className='p-8 bg-dry rounded-lg'>
                  <span className='text-3l block font-extrabold mt-4'>
                    10k
                  </span>
                  <h4 className='text-lg font-bold my-2'>Listed Movies</h4>
                  <p className='mb-0 text-text leading-7 text-sm'>
                    Loren ipsum s simply dummy text of printing and 
                  </p>
                </div>
                <div className='p-8 bg-dry rounded-lg'>
                  <span className='text-3l block font-extrabold mt-4'>
                    8k
                  </span>
                  <h4 className='text-lg font-bold my-2'>Lovely users</h4>
                  <p className='mb-0 text-text leading-7 text-sm'>
                    Completely free,without registration! Loren ipsum it's simply
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-10 lg:mt-0'>
              <img
                src='/images/poster2.jpeg'
                alt='aboutus'
                className='w-full xl:block hidden h-header rounded-lg object-cover' />
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Aboutus;