'use client'
import style from '@/sections/ctas/video.module.css';

const MapEmbed = () => {
  return (
    <div className='relative flex justify-center items-center rounded-2xl p-2 ring-1 ring-border w-fit m-auto'>
        <div className={style.video}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d828.3940589697957!2d38.78716048699148!3d9.015464130280675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859c1798e667%3A0xb85bdfaee7884bed!2sAwaj%20Ai!5e0!3m2!1sen!2set!4v1700640608773!5m2!1sen!2set" 
                width="800" 
                height="600" 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
  );
};
export default MapEmbed;
