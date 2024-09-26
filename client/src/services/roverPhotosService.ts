import { PhotoData } from '../types/types'
import { IAxiosClient } from '../utility/AxiosClient'

// const API_KEY = 'tOkhmYsJSdKaIlpbf0ldy2uvkjn6T0rGaT1fX2FM'
// const roverPhotosPath = `mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=MAST&api_key=${API_KEY}`
const roverPhotosPath = 'api/rover'

export async function getPhotos(client: IAxiosClient): Promise<PhotoData> {
  const data = await client.get<PhotoData>(`${roverPhotosPath}`)

  const limitedPhotos = {
    ...data,
    photos: data.photos.slice(0, 20),
  }
  return limitedPhotos
}
