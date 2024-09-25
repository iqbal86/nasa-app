import useFetchApod from '../../hooks/useFetchApod'
import NasaApodPage from './NasaApodPage'

export const NasaApodPageContainer = () => {
  const { data, isLoading, errorMessage, setDate, date } = useFetchApod()

  return (
    <NasaApodPage
      onSetDate={setDate}
      date={date}
      data={data ? data : null}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  )
}

export default NasaApodPageContainer
