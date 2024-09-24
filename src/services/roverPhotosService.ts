import { PhotoData } from '../types/types'
import { IAxiosClient } from '../utility/AxiosClient'

const API_KEY = 'tOkhmYsJSdKaIlpbf0ldy2uvkjn6T0rGaT1fX2FM'
const roverPhotosPath = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=MAST&api_key=${API_KEY}`

export async function getAPOD(client: IAxiosClient): Promise<PhotoData> {
  const data = await client.get<PhotoData>(`/${roverPhotosPath}`)
  return data
}
