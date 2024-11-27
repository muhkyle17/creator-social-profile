import Profile from './components/Profile'
import SocialProfilePreview from './components/SocialProfilePreview'

export default function Home() {
  return (
    <div className='p-8'>
      <div>
        <Profile />
      </div>
      <div>
        <SocialProfilePreview />
      </div>
    </div>
  )
}
