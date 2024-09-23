import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CircularProgress,
} from '@mui/material'
import { ApodResponse } from '../../types/types'
import { makeStyles } from '@mui/styles'
import { Dispatch, SetStateAction } from 'react'
import { Theme } from '@mui/material/styles'

const useStyles = makeStyles((theme: Theme) => ({
  image: {
    width: '800px',
    height: 'auto',
    marginTop: '20px',
    border: '5px solid #ffffff',
  },
  card: {
    maxWidth: 645,
    border: '5px solid #ffffff',
    [theme.breakpoints.down('md')]: {
      margin: '0 20px 0 20px',
    },
  },
  dateInput: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1em',
    width: '200px',
  },
  cardDate: {
    fontSize: '0.9em',
    color: '#ffffff',
    fontFamily: 'Space Grotesk',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    margin: '20px 0',
  },
}))

type Props = {
  onSetDate: Dispatch<SetStateAction<string>>
  date: string
  data: ApodResponse | null
  isLoading: boolean
  errorMessage: string | null
}

const nasaApodPrefix = 'NasaApod_'

const NasaApod = ({
  data,
  isLoading,
  onSetDate,
  date,
  errorMessage,
}: Props) => {
  const classes = useStyles()

  console.log(isLoading)

  const formatDate = (dateString: string | null) => {
    if (!dateString) return
    const date = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }
    return date.toLocaleDateString('en-US', options)
  }

  console.log('error messag..', errorMessage)

  return (
    <Grid container spacing={1} data-testid={`${nasaApodPrefix}_container`}>
      <Grid item xs={12} display="flex" justifyContent="center">
        <input
          type="date"
          value={date}
          onChange={(e) => onSetDate(e.target.value)}
          placeholder="Date"
          className={classes.dateInput}
        />
      </Grid>

      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        className={classes.cardDate}
      >
        <Typography>{formatDate(date)}</Typography>
      </Grid>

      <Grid item xs={12} display="flex" justifyContent="center">
        {errorMessage ? (
          <Typography className={classes.error} data-testid={'NasaApod__error'}>
            {errorMessage}
          </Typography>
        ) : isLoading ? (
          <CircularProgress sx={{ color: 'white' }} />
        ) : (
          <Card className={classes.card}>
            <CardMedia
              component="img"
              height="440"
              image={data?.hdurl}
              alt="pic of the day"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data?.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {data?.explanation}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Grid>
    </Grid>
  )
}

export default NasaApod
