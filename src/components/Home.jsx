import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div className="">
      <div className="flex flex-row mt-5 px-6">
        <div className="basis-full text-end">
          <Link to="/add-user" className="px-4 py-2 bg-pink-600 text-white rounded font-semibold">Add User</Link>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home