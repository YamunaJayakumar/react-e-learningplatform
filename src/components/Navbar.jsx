import React from 'react'

function Navbar() {
  return (
    <>

      <div className=" mx-auto px-6 py-6 flex items-center justify-between max-w-9xl " >
        {/* logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-linear-to-br from-indigo-600 to-pink-500 font-bold text-white">E</div>
          <div className="font-semi-bold text-lg">EduFlow</div>
        </div>
        {/* nav */}
        <nav className='hidden md:flex items-center gap-10 text-md'>
          <a href="#courses" className='hover:text-purple-400'>Courses</a>
          <a href="#features" className='hover:text-purple-400'>Features</a>
          <a href="#features" className='hover:text-purple-400'>Blogs</a>
          <a href="#testmoinals" className='hover:text-purple-400'>Testmoinals</a>

        </nav>
        <button className='ml-4 px-6 py-2 rounded-xl bg-linear-to-br from-indigo-600 to-pink-600 hover:border hover:border-purple-600'>Sign in</button>
      </div>
    </>
  )
}

export default Navbar











