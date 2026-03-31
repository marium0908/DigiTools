import React from 'react'

const View = () => {
  return (
    <div className='bg-gradient-to-l from-[#9514FA] to-[#4F39F6] h-[247px] mt-[60px] mb-[120px]
 flex items-center'>
      
      <div className='max-w-[1180px] w-full mx-auto flex items-center'>
        
        <div className='flex-1 text-center border-r border-white/40'>
          <h2 className='text-[28px] sm:text-[40px] md:text-[50px] font-extrabold text-white leading-none'>
            50K+
          </h2>
          <p className='text-white text-base sm:text-2xl mt-1'>
            Active Users
          </p>
        </div>

        <div className='flex-1 text-center border-r border-white/40'>
          <h2 className='text-[28px] sm:text-[40px] md:text-[50px] font-extrabold text-white leading-none'>
            200+
          </h2>
          <p className='text-white text-base sm:text-2xl mt-1'>
            Premium Tools
          </p>
        </div>

        <div className='flex-1 text-center'>
          <h2 className='text-[28px] sm:text-[40px] md:text-[50px] font-extrabold text-white leading-none'>
            4.9
          </h2>
          <p className='text-white text-base sm:text-2xl mt-1'>
            Rating
          </p>
        </div>

      </div>
    </div>
  )
}

export default View