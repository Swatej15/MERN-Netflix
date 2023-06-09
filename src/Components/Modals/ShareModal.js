import React from 'react';
import MainModal from './MainModal';
import { FaFacebook, FaPinterest, FaTwitter, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FacebookShareButton, TwitterShareButton, TelegramShareButton, WhatsappShareButton, PinterestShareButton, EmailShareButton } from 'react-share';

function ShareMovieModal({ modalOpen, setModalOpen, movie }) {
  const shareData = [
    {
      icon: FaFacebook,
      shareButton: FacebookShareButton,
    },
    {
      icon: FaTwitter,
      shareButton: TwitterShareButton,
    },
    {
      icon: FaTelegram,
      shareButton: TelegramShareButton,
    },
    {
      icon: FaWhatsapp,
      shareButton: WhatsappShareButton,
    },
    {
      icon: FaPinterest,
      shareButton: PinterestShareButton,
    },
    {
      icon: MdEmail,
      shareButton: EmailShareButton,
    },
  ];

  const url = `${window.location.protocol}//${window.location.host}/movie/${movie.name}`;
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className='inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-2xl'>
        <h2 className='text-2xl'>Share <span className='text-xl font-bold'>"{movie?.name}"</span></h2>
        <div className='flex flex-wrap justify-center  gap-6 mt-6'>
          {shareData.map((data, index) => (
            <data.shareButton key={index} url={url} quote='Netflix | Free Movies Site'>
              <div className='w-12 transition hover:bg-subMain text-lg h-12 bg-white rounded bg-opacity-30 flex items-center justify-center'>
                <data.icon />
              </div>
            </data.shareButton>
          ))}
        </div>
      </div>
    </MainModal>
  );
}

export default ShareMovieModal;
