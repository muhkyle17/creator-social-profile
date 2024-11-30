'use client'

import useStore from '../hooks/useStore'

const IncreaseBearPopulation = () => {
  const bears = useStore(state => state.bears)
  console.log(bears, 'bears')

  const increasePopulation = useStore(state => state.increasePopulation)

  return (
    <div className='w-screen h-screen flex items-center justify-center gap-5'>
      <button className='bg-orange-400 px-5 py-2 rounded-full' onClick={increasePopulation}>
        Increase Population
      </button>
    </div>
  )
}

export default IncreaseBearPopulation
