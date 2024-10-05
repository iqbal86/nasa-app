import useFetchRoverPhotos from '../../hooks/useFetchRoverPhotos'
import MarsRoverPhotosPage from './MarsRoverPhotosPage'

export const MarsRoverPhotosPageContainer = () => {
  const { data, isLoading, roverPhotosErrorMessage } = useFetchRoverPhotos()

  console.log('data..', data)
  console.log('roverPhotosErrorMessage..', roverPhotosErrorMessage)
  console.log('isLoading..', isLoading)

  return (
    <MarsRoverPhotosPage
      data={data ? data : null}
      isLoading={isLoading}
      roverPhotosErrorMessage={roverPhotosErrorMessage}
    />
  )
}

export default MarsRoverPhotosPageContainer
