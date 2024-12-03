import Image from 'next/image'

const ProfilePreview = ({ photoUrl, profileName, profileDescription }) => {
  return (
    <div className='flex flex-col gap-2 text-center items-center'>
      {/* <Image
        alt='Temporary Image' // !Temporary Image
        src={'https://uncommonschools.org/wp-content/uploads/2018/02/ryan-gosling-2-800x667.jpg'}
        sizes='100vw'
        style={{
          width: '100%',
          height: 'auto',
        }}
        width={500}
        height={300}
        className='rounded-3xl'
      />
      <h1 className='text-2xl font-bold'>Ryan Gosling</h1>
      <p className='text-lg opacity-60'>This is a temporary description</p> */}

      {photoUrl && (
        <Image
          alt='Profile Image'
          src={photoUrl}
          sizes='100vw'
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={500}
          height={300}
          className='rounded-3xl'
        />
      )}

      {profileName && <h1 className='text-2xl font-bold'>{profileName}</h1>}
      {profileDescription && <p className='text-lg opacity-60'>{profileDescription}</p>}
    </div>
  )
}

export default ProfilePreview
