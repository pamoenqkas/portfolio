import React from 'react'

import ThemeSwitcher from './ThemeSwitcher'

const Nav = () => {
  return (
      <div className='bg-slate-50 dark:bg-slate-600 max-w-full p-4'>
        <div className='flex justify-between items-center space-x-2'>
          <img src='src/assets/icons8-fedex.svg' alt='Logo FedEx' className='w-20'></img>
          <div className='space-x-4'>
          </div>
          {/* <button className='text-blue-300  rounded-br-lg rounded-tl-lg md-rounded-lg m-2 bg-slate-500 w-20 h-10' >Contact</button> */}
          <div className='bg-slate dark:bg-slate-800 h-10 w-10 flex items-center justify-center'>
        <ThemeSwitcher/> 
      </div>
        </div>
      </div>
  )
}

export default Nav