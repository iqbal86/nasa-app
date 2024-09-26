import { Grid } from '@mui/material'
import { PhotoData } from '../../types/types'
import { makeStyles } from '@mui/styles'
import NasaPageHeader from '../../components/shared/NasaPagesHeader/NasaPagesHeader'
import backgroundImage from '../../../public/astroma-bg.jpg'
import MarsRoverPhotosListItem from '../../components/MarsRoverPhotosListItem/MarsRoverPhotosListItem'

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
})

type Props = {
  data: PhotoData | null
  isLoading: boolean
  roverPhotosErrorMessage: string | null
}

const MarsRoverPhotosPage = ({
  data,
  isLoading,
  roverPhotosErrorMessage,
}: Props) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid item>
        <NasaPageHeader />
      </Grid>
      <Grid item>
        <MarsRoverPhotosListItem
          data={data}
          isLoading={isLoading}
          errorMessage={roverPhotosErrorMessage}
        />
      </Grid>
    </Grid>
  )
}

export default MarsRoverPhotosPage
