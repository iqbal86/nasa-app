import useFetchApod from '../hooks/useFetchApod'
import NasaPage from './NasaPage'

export const NasaPageContainer = () => {
  const { data, isLoading, errorMessage, setDate, date } = useFetchApod()

  console.log('data..', data)
  console.log('date..', date)

  return (
    <NasaPage
      onSetDate={setDate}
      date={date}
      data={data ? data : null}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  )
}

export default NasaPageContainer
