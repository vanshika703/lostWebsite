import { Chrono } from 'react-chrono';
import './Timeline.css';
import { items } from './Timeline/Items';
import LazyLoad from 'react-lazy-load';
import TL1 from '../img/TL1.webp';
import TL2 from '../img/TL2.webp';
import TL3 from '../img/TL3.jpeg';
import TL4 from '../img/TL4.jpeg';
import TL5 from '../img/TL5.jpeg';
import TL6 from '../img/lostsoul.jpg';
import TL7 from '../img/TL7.avif';
import TL8 from '../img/TL8.jpg';
import TL9 from '../img/TL9.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Timeline = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=' w-screen h-full bg-[#e4f2f7]'>
      <div className='text-center mt-20 mx-auto md:w-4/5'>
        <div className='p-6 md:ml-8'>
          <h1 className='text-4xl font-playfair font-semibold text-black mt-16 md:my-5 tracking-widest'>
            HOW IT All
          </h1>
          <h1 className='text-4xl font-playfair font-semibold text-[#116b89] mt-3 md:my-5 tracking-widest'>
            STARTED
          </h1>
        </div>

        <Chrono
          flipLayout
          borderLessCards={true}
          hideControls
          lineWidth={70}
          classNames={{
            card: 'my-card',
            cardMedia: 'my-card-media',
            cardSubTitle: 'my-card-subtitle',
            cardText: 'my-card-text',
            cardTitle: 'my-card-title',
            controls: 'my-controls',
            title: 'my-title',
          }}
          slideShow
          scrollable
          disableNavOnKey
          slideItemDuration={2500}
          slideShowType='slide_from_sides'
          items={[
            {
              title: (
                <div
                  className='title'
                  data-aos='fade-up-right'
                  data-aos-duration='1500'
                >
                  <img className='title' src={TL1} />
                </div>
              ),
              url: 'http://google.com',
            },
            {
              title: (
                <div
                  className='title'
                  data-aos='fade-up-right'
                  data-aos-duration='1500'
                >
                  <img className='title' src={TL2} />
                </div>
              ),
              url: 'http://google.com',
            },
            {
              title: (
                <div
                  className='title'
                  data-aos='fade-up-right'
                  data-aos-duration='1500'
                >
                  <img className='title' src={TL3} />
                </div>
              ),
              url: 'http://google.com',
            },
            {
              title: (
                <div
                  className='title'
                  data-aos='fade-up-right'
                  data-aos-duration='1500'
                >
                  <img className='title' src={TL4} />
                </div>
              ),
              url: 'http://google.com',
            },
            {
              title: (
                <div
                  className='title'
                  data-aos='fade-up-right'
                  data-aos-duration='1500'
                >
                  <img className='title' src={TL5} />
                </div>
              ),
              url: 'http://google.com',
            },
            {
              title: (
                <div
                  className='title'
                  data-aos='fade-up-right'
                  data-aos-duration='1500'
                >
                  <img className='title' src={TL6} />
                </div>
              ),
              url: 'http://google.com',
            },
            {
              title: (
                <div
                  className='title'
                  data-aos='fade-up-right'
                  data-aos-duration='1500'
                >
                  <img className='title' src={TL7} />
                </div>
              ),
              url: 'http://google.com',
            },
            {
              title: (
                <div
                  className='title'
                  data-aos='fade-up-right'
                  data-aos-duration='1500'
                >
                  <img className='title' src={TL8} />
                </div>
              ),
              url: 'http://google.com',
            },
            {
              title: (
                <div
                  className='title'
                  data-aos='fade-up-right'
                  data-aos-duration='1500'
                >
                  <img className='title' src={TL9} />
                </div>
              ),
              url: 'http://google.com',
            },
          ]}
          mode='VERTICAL_ALTERNATING'
          theme={{
            primary: '#116b89',
            secondary: 'none',
            cardBgColor: '#e7f0f3',
            cardForeColor: '#e7f0f3',
            titleColor: '#116b89',
            titleColorActive: '#000000',
            cardTitleColor: '#116b89',
          }}
        >
          {items.map((item) => (
            <div
              className='border-none w-full'
              data-aos='zoom-in-left'
              data-aos-duration='1500'
              key={item.cardTitle}
            >
              <p className='mb-2 font-light'>{item.year}</p>
              <p className=' text-xl text-start font-bold text-[#116b89] mb-0.5'>
                {item.cardTitle}
              </p>
              <p className='text-[#116b89e2] font-semibold mb-2'>
                {item.cardSubtitle}
              </p>
              <p className='text-[#116b89b5] font-light'>
                {item.cardDetailedText}
              </p>
            </div>
          ))}
        </Chrono>
      </div>
    </div>
  );
};

export default Timeline;
