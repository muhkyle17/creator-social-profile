import Profile from './components/Profile'
import SocialProfilePreview from './components/SocialProfilePreview'
import SocialLinks from './components/SocialLinks'
import Links from './components/Links'

const Divider = () => <hr className='bg-gray-500 h-[2px] mx-8' />

export default function Home() {
  return (
    <div className='flex flex-row h-full min-h-screen'>
      <div className='w-3/4 flex flex-col bg-foreground overflow-y-auto min-h-screen h-screen'>
        <Profile />
        <Divider />
        <SocialLinks />
        <Divider />
        <Links />
      </div>
      <div className='w-1/4 max-h-screen'>
        <SocialProfilePreview />
      </div>
    </div>
  )
}
