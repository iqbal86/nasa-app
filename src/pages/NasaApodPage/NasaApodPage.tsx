import { Grid } from '@mui/material'
import { ApodResponseData } from '../../types/types'
import { makeStyles } from '@mui/styles'
import NasaPageHeader from '../../components/shared/NasaPagesHeader/NasaPagesHeader'
import backgroundImage from '../../../public/astroma-bg.jpg'
import NasaApod from '../../components/NasaApodContent/NasaApodContent'
import { Dispatch, SetStateAction } from 'react'

const useStyles = makeStyles({
  root: {
    padding: '100px 0 140px 0',
    minHeight: '100% !important',
    minWidth: '100vw !important',
    textAlign: 'center',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    marginLeft: '-8px',
    display: 'flex',
    justifyContent: 'center',
  },
  footer: {
    paddingTop: '90px',
  },
})

type Props = {
  onSetDate: Dispatch<SetStateAction<string>>
  date: string
  data: ApodResponseData | null
  isLoading: boolean
  errorMessage: string | null
}

const NasaApodPage = ({
  data,
  isLoading,
  errorMessage,
  onSetDate,
  date,
}: Props) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid item>
        <NasaPageHeader />
      </Grid>
      <Grid item>
        <NasaApod
          data={data}
          isLoading={isLoading}
          onSetDate={onSetDate}
          date={date}
          errorMessage={errorMessage}
        />
      </Grid>

      {/* <Grid item xs={12} className={classes.footer}>
        <NasaPageFooter />
      </Grid> */}
    </Grid>
  )
}

export default NasaApodPage
