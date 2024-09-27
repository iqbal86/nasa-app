import { PhotoData } from '../types/types'
import { IAxiosClient } from '../utility/AxiosClient'

const roverPhotosPath = 'api/rover'

export async function getPhotos(client: IAxiosClient): Promise<PhotoData> {
  const data = await client.get<PhotoData>(`${roverPhotosPath}`)

  const limitedPhotos = {
    ...data,
    photos: data.photos.slice(0, 20),
  }
  return limitedPhotos
}
