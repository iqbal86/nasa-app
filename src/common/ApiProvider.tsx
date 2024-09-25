/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useMemo, useState } from 'react'
import { getAPOD } from '../services/apodService'
import { AxiosClient, IAxiosClient } from '../utility/AxiosClient'
import { ApodResponseData, PhotoData } from '../types/types'
import { getPhotos } from '../services/roverPhotosService'

type ApiContextProps = {
  apodService: {
    getAPOD: (date: string) => Promise<ApodResponseData>
  }
  roverPhotosService: {
    getPhotos: () => Promise<PhotoData>
  }
}

export const ApiContext = createContext<ApiContextProps>({} as ApiContextProps)

const ApiProvider = ({ children }: { children: ReactNode }) => {
  const [client] = useState<IAxiosClient>(
    new AxiosClient({
      baseURL: 'https://api.nasa.gov/',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }),
  )

  const apiContext: ApiContextProps = useMemo(
    () => ({
      apodService: {
        getAPOD: async (date: string) => getAPOD(client, date),
      },
      roverPhotosService: {
        getPhotos: async () => getPhotos(client),
      },
    }),
    [client],
  )

  return (
    <ApiContext.Provider value={apiContext}>{children}</ApiContext.Provider>
  )
}

export const useApiContext = () => useContext(ApiContext)

export default ApiProvider
