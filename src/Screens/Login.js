import React from 'react';
import Layout from '../Layout/Layout';
import { Input } from '../Components/UsedInputs';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Layout>
      <div className='container mx-auto px-2 my-24 flex-colo items-center justify-center'>
        <div className='w-full 2xl:w-2/5 gap-8 md:w-3/5 lg:w-2/5 p-14 bg-dry rounded-lg border border-border'>
          <img src='/images/logo.png' alt='logo' className='w-full h-12 object-contain' 
          />
          <Input 
            label='Email' 
            placeholder='netflix@gmail.com' 
            type='email' 
            bg={true} 
          />
          <div className="mb-4">
          <Input 
            label="Password" 
            placeholder='********' 
            type='password' 
            bg={true} 
          />
          </div>
          <div className='flex justify-center space-x-4'>
          <Link to='/dashboard' className='bg-subMain transitions hover:bg-main flex items-center justify-center flex-rows gap-4 text-white p-4 rounded-lg w-full'>
              <FiLogIn className='w-4 h-4 mr-2' /> Sign In
           </Link>
           </div> 
          <p className='text-center text-border'>
              Don't have an account?{' '}
              <Link to='/register' className='text-dryGray font-semibold ml-2'>
                 Sign Up
              </Link>
            </p>
        </div>
      </div> 
    </Layout>
  );
}

export default Login;
