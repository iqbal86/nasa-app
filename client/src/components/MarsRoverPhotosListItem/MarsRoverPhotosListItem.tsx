import {
  Grid,
  Typography,
  CardMedia,
  Card,
  CardContent,
  Container,
  CircularProgress,
} from '@mui/material'
import { PhotoData } from '../../types/types'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  error: {
    color: 'red',
    textAlign: 'center',
    margin: '20px 0',
  },
}))

type Props = {
  data: PhotoData | null
  isLoading: boolean
  errorMessage: string | null
}

const marsRoverPhotosListItemPrefix = 'MarsRoverPhotosListItem_'

const MarsRoverPhotosListItem = ({ data, isLoading, errorMessage }: Props) => {
  const classes = useStyles()

  return (
    <Container>
      <Typography variant="h3" align="center" padding="50px" color="primary">
        Mars Rover Photos
      </Typography>

      {isLoading && (
        <CircularProgress
          sx={{ color: '#ffffff' }}
          data-testid={`${marsRoverPhotosListItemPrefix}_loading`}
        />
      )}

      {errorMessage && (
        <Typography
          className={classes.error}
          data-testid={`${marsRoverPhotosListItemPrefix}_error`}
        >
          {errorMessage}
        </Typography>
      )}

      {!isLoading && !errorMessage && data && data?.photos.length > 0 && (
        <Grid
          container
          spacing={3}
          data-testid={`${marsRoverPhotosListItemPrefix}_container`}
        >
          {data?.photos.map((photo) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
              <Card>
                <CardMedia
                  component="img"
                  alt={photo.camera.full_name}
                  height="200"
                  image={photo.img_src}
                  title={photo.camera.full_name}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    {photo.earth_date}
                  </Typography>
                  <Typography variant="body1" component="p">
                    {photo.camera.full_name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {!isLoading && !errorMessage && data?.photos.length === 0 && (
        <Typography align="center" variant="body1" color="textSecondary">
          No photos available.
        </Typography>
      )}
    </Container>
  )
}

export default MarsRoverPhotosListItem
