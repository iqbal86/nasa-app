import { useQuery } from 'react-query'
import { useApiContext } from '../common/ApiProvider'
import { useState } from 'react'

const useFetchRoverPhotos = () => {
  const { roverPhotosService } = useApiContext()
  const [roverPhotosErrorMessage, setRoverPhotosErrorMessage] = useState<
    string | null
  >(null)

  const { data, isLoading } = useQuery(
    ['rover'],
    () => roverPhotosService.getPhotos(),
    {
      onError: () => {
        setRoverPhotosErrorMessage(
          'Failed to load mars rover photos. Please try again later.',
        )
      },
    },
  )

  return { data, roverPhotosErrorMessage, isLoading }
}

export default useFetchRoverPhotos
