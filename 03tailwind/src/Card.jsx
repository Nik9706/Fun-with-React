import React from 'react'

function Card({username}) {
  return (
    <>
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/29536485/pexels-photo-29536485.jpeg"
          alt=""
          className=" object-center w-full rounded-md h-72 bg-gray-500" text-center
        />
        <div className="mt-100 mb-2 flex ">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h1 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h1>
        </div>
        <p className="text-gray-300">
        Welcome to Fun aur React where we are going to learn about the react
          
        </p>
      </div>
    </>
  )
}

export default Card