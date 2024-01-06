import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import CardComponent from '../(Components)/CardComponent'
 

const Dashboard = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex flex-col items-center'>
        <input type="text" placeholder="Search here" className="input input-bordered input-primary max-w-xs w-full md:max-w-2xl" />
      </div>

      {false && (<div className='flex flex-col items-center'>
        <div className='flex'>
        <input type="text" placeholder="Search here" className="input input-bordered input-primary max-w-xs w-full md:max-w-2xl" />
        <button className='btn btn-circle btn-ghost p-2'>
          <FontAwesomeIcon icon={faSearch} className='w-7 h-7' />
        </button>
        </div>
      </div>)}
        
      <div className="grid md:grid-cols-3 sm:grid-cols-1">
        {[1,2,3,4,5,6,7,8,9,10].map(data=><CardComponent/>)}
      </div>
    </div>
  )
}

export default Dashboard