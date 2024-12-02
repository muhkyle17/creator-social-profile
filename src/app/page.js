import Profile from './components/Profile'
import SocialProfilePreview from './components/SocialProfilePreview/SocialProfilePreview'
import SocialLinks from './components/SocialLinks'
import Links from './components/Links'

const Divider = () => <hr className='bg-gray-500 h-[2px] mx-8' />

export default function Home() {
  return (
    <div
      className='flex flex-col-reverse items-center justify-center gap-10 min-h-screen overflow-auto h-full
      xl:flex-row xl:mt-0'>
      <div
        className='w-full flex flex-col bg-foreground xl:overflow-y-auto min-h-screen h-full
                  xl:w-3/4 xl:h-screen'>
        <Profile />
        <Divider />
        <SocialLinks />
        <Divider />
        <Links />
      </div>
      <div className='w-full xl:w-1/3 xl:max-h-screen'>
        <SocialProfilePreview />
      </div>
    </div>
  )
}
