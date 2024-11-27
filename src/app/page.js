import Profile from './components/Profile'
import SocialProfilePreview from './components/SocialProfilePreview'

export default function Home() {
  return (
    <div className='flex flex-row'>
      <div className='w-3/4 h-screen'>
        <Profile />
      </div>
      <div className='w-1/4'>
        <SocialProfilePreview />
      </div>
    </div>
  )
}
