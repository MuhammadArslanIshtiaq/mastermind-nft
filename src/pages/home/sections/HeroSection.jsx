import React from 'react';
import CounterComponent from '../../../components/CounterComponent';

const HeroSection = () => {
  const list = [
    {
      text: `Ongoing access to monthly mastermind sessions where the focus is on accomplishment through collaboration.`,
    },
    { text: `We meet the second Tuesday of each month at 1 pm PST ` },
    {
      text: `Gain direct access and connections to people who have accomplished what others are only ‘talking’ about.`,
    },
    {
      text: `Our members are celebrities, millionaires, and social media icons who are ready to pass the torch of knowledge so that you too - may create a life of abundance and security that few can only imagine.`,
    },
  ];

  return (
    <>
      <span className='block md:hidden absolute top-0'>
        <img
          className='block h-full w-full'
          src='/assets/images/bg-red.svg'
          alt='...'
        />
      </span>
      <section className='max-w-7xl mx-auto px-6 lg:px-8 mt-8 pb-2 border-b-2 border-gray-700'>
        <div className='text-center uppercase text-2xl md:text-3xl lg:text-4xl font-bold font-titleBold'>
          <span className='text-blue-300'>MASTERMIND</span>{' '}
          <span className='text-red-400'>NFT</span>
        </div>
      </section>
      <section
        className='relative z-20 bg-no-repeat bg-bottom bg-heroD'
        style={{ backgroundSize: '100% 54%' }}
      >
        <div className='max-w-7xl mx-auto px-6 lg:px-8 h-full py-10 md:py-24 relative'>
          <div className='grid grid-cols-3 gap-8 h-full'>
            {/* lists */}
            <div className='md:hidden col-span-3 text-center'>
              <ul className='space-y-3'>
                {list.map((item) => (
                  <li key={item.text} className='flex items-baseline'>
                    <span className='text-[1.1rem]'>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='col-span-3 lg:col-span-1'>
              <div className='bg-GPrimary p-8 rounded-2xl'>
                <ul className='space-y-6'>
                  <li>
                    <div className='mb-4 capitalize font-semibold text-3xl text-center'>
                      Mint NFT
                    </div>
                  </li>
                  <li className='border-b-2 border-white pb-4'>
                    <div className='text-lg font-semibold'>Balance</div>
                  </li>
                  <li className='border-b-2 border-white pb-4'>
                    <div className='flex justify-between items-center'>
                      <div className='text-lg font-semibold'>Amount</div>
                      <div>
                        <CounterComponent />
                      </div>
                      <div>
                        <button
                          type='button'
                          className=' bg-white text-black transition-all duration-200 transform active:scale-105 font-semibold  p-2 rounded-lg'
                        >
                          Max
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className='border-b-2 border-white pb-4'>
                    <div className='flex justify-between'>
                      <div className='text-lg font-semibold'>Total</div>
                      <div>0.08 ETH</div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <button
                        type='button'
                        className='px-8 py-2 shadow-sm rounded-lg text-[1rem] bg-gradient-to-r from-secondary to-primary text-white hover:text-white focus:outline-none transition duration-200 transform hover:scale-105 w-full font-semibold'
                      >
                        Connect Wallet
                      </button>
                      <i className='text-[0.7rem] text-center block mt-2'>
                        Make sure your MetaMask wallet is connected
                      </i>
                    </div>
                  </li>
                  <li>
                    <div className='border-b border-gray-700' />
                  </li>
                  <li>
                    <div>
                      <h4 className='text-[0.75rem] sm:text-[0.9rem] font-semibold text-center mb-2'>
                        New to NFT space? no worries we got you!
                      </h4>
                      <button
                        type='button'
                        className='px-8 py-2 shadow-sm rounded-lg text-[1rem] bg-gradient-to-r from-secondary to-primary text-white hover:text-white focus:outline-none transition duration-200 transform hover:scale-105 w-full font-semibold'
                      >
                        Get Your NFT with Card
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-span-3 lg:col-span-2 relative'>
              <div>
                {/* lists */}
                <div className='hidden md:block'>
                  <ul className='space-y-3'>
                    {list.map((item) => (
                      <li key={item.text} className='flex items-baseline'>
                        <span className='block w-4 min-w-[1.1rem] h-4 mr-2'>
                          <img
                            className='block h-full w-full'
                            src='/assets/images/icon-0.svg'
                            alt='...'
                          />
                        </span>
                        <span className='text-[0.9rem]'>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* videos-cards */}
                <div className='text-center mt-14'>
                  <div className='w-[100%] md:w-[45%] mx-auto relative'>
                    <span className='absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] shadow-bg-primary' />
                    <img
                      className='block h-full w-full relative'
                      src='/assets/videos/card-video.gif'
                      alt='..'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
