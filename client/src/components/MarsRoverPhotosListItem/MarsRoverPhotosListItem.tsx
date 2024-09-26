import {
  Grid,
  Typography,
  CardMedia,
  Card,
  CardContent,
  Container,
} from '@mui/material'
import { PhotoData } from '../../types/types'

type Props = {
  data: PhotoData | null
  isLoading: boolean
  errorMessage: string | null
}

const marsRoverPhotosListItemPrefix = 'MarsRoverPhotosListItem_'

const MarsRoverPhotosListItem = ({ data, isLoading, errorMessage }: Props) => {
  return (
    <Container>
      <Typography variant="h3" align="center" padding="50px" color="primary">
        Mars Rover Photos
      </Typography>
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
    </Container>
  )
}

export default MarsRoverPhotosListItem
