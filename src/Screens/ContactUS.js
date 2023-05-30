import React from 'react';
import Layout from '../Layout/Layout';
import Head from '../Components/Head';
import { FiMail, FiPhoneCall, FiMapPin } from 'react-icons/fi';

function ContactUS() {
  const ContactData = [
    {
      id: 1,
      title: 'Email Us',
      info: 'Interactivity grow backend ideas cross-platform models.',
      icon: FiMail,
      contact: 'swatejpamrar0315@gmail.com'
    },
    {
      id: 2,
      title: 'Call Us',
      info: 'Distinctively exploit optimal alignments for intuitive bandwidth.',
      icon: FiPhoneCall,
      contact: '+91 749 002 4575'
    },
    {
      id: 3,
      title: 'Location',
      info: 'Pratapnagar, Vadodara, Gujarat.',
      icon: FiMapPin,
      contact: ''
    },
  ];

  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title="Contact Us" />
        <div className='grid grid-cols-3 gap-6 lg:mt-20 mt-10 xl:gap-8'>
          {ContactData.map((item) => (
            <div
              key={item.id}
              className='border border-border p-10 bg-dry rounded-lg text-center flex flex-col items-center'
            >
              <span className='w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl flex items-center justify-center'>
                <item.icon />
              </span>
              <h5 className='text-xl font-semibold mb-2'>{item.title}</h5>
              <p className='mb-0 text-sm text-text leading-7'>
                <a href={`mailto:${item.contact}`} className='text-blue-600'>
                  {item.contact}
                </a>{' '}
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default ContactUS;
