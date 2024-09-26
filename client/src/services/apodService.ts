import { ApodResponseData } from '../types/types'
import { IAxiosClient } from '../utility/AxiosClient'

const apodPath = 'api/apod'

export async function getAPOD(
  client: IAxiosClient,
  date: string,
): Promise<ApodResponseData> {
  const data = await client.get<ApodResponseData>(`${apodPath}?date=${date}`)
  return data
}
