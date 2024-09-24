import { ApodResponseData } from '../types/types'
import { IAxiosClient } from '../utility/AxiosClient'

// const { API_KEY } = process.env.API_KEY
const API_KEY = 'tOkhmYsJSdKaIlpbf0ldy2uvkjn6T0rGaT1fX2FM'
const apodPath = `planetary/apod?api_key=${API_KEY}`

export async function getAPOD(
  client: IAxiosClient,
  date: string,
): Promise<ApodResponseData> {
  const data = await client.get<ApodResponseData>(`/${apodPath}&date=${date}`)
  return data
}
