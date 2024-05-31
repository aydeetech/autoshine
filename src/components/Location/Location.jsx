import React from 'react'

const Location = () => {
  return (
    <div>
        <div className='location-container mt-4 rounded-2 d-block d-md-block   shadow-sm bg-white'>
                    <form className='h-100 d-flex'>
                        <div className='h-100 d-flex p-3 flex-column'>
                            <label className='ps-2'>Car location</label>
                        <input type="text" placeholder='Enter address or postcode' className=' w-100 h-100' />
                        </div>
                        <button>BOOK YOUR WASH NOW</button>
                    </form>
                </div>
    </div>
  )
}

export default Location