'use client'

import useStore from '../hooks/useStore'

const IncreaseBearPopulation = () => {
  const bears = useStore(state => state.bears)
  console.log(bears, 'bears')

  const increasePopulation = useStore(state => state.increasePopulation)

  const decreasePopulation = useStore(state => {
    console.log(state, 'state')
    return state.decreasePopulation
  })

  const removeAllBears = useStore(state => state.removeAllBears)

  const updateBears = useStore(state => state.updateBears)

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center gap-5'>
      <button className='bg-orange-400 px-5 py-2 rounded-full' onClick={increasePopulation}>
        Increase Population
      </button>

      <button className='bg-orange-300 px-5 py-2 rounded-full' onClick={decreasePopulation}>
        Decrease Population
      </button>

      <button className='bg-orange-500 px-5 py-2 rounded-full' onClick={removeAllBears}>
        Remove All Bears
      </button>

      <button className='bg-orange-600 px-5 py-2 rounded-full' onClick={() => updateBears(10)}>
        Set to 10 bears
      </button>
    </div>
  )
}

export default IncreaseBearPopulation
