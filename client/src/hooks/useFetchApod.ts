import { useQuery } from 'react-query'
import { useApiContext } from '../common/ApiProvider'
import { useState } from 'react'

const useFetchApod = () => {
  const { apodService } = useApiContext()
  const [date, setDate] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSetDate: React.Dispatch<React.SetStateAction<string>> = (
    newDate,
  ) => {
    setErrorMessage(null) // Reset error message when new date is set
    setDate(newDate)
  }

  const { data, isLoading } = useQuery(
    ['apod', date],
    () => apodService.getAPOD(date),
    {
      onError: () => {
        setErrorMessage(
          'Failed to load astronomy picture of the day. Please try again later.',
        )
      },
    },
  )

  return { data, errorMessage, isLoading, setDate: handleSetDate, date }
}

export default useFetchApod
