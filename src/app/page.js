import Profile from './components/Profile'
import SocialProfilePreview from './components/SocialProfilePreview'
import SocialLinks from './components/SocialLinks'

export default function Home() {
  return (
    <div className='flex flex-row h-screen'>
      <div className='w-3/4 flex flex-col bg-foreground'>
        <Profile />
        <hr className='bg-gray-500 h-[2px] mx-8' />
        <SocialLinks />
      </div>
      <div className='w-1/4'>
        <SocialProfilePreview />
      </div>
    </div>
  )
}
