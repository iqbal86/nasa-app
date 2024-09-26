import { Grid, Skeleton, Card, CardContent } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    textAlign: 'center',
    paddingTop: '80px',
  },
  dateInput: {
    marginBottom: '16px',
    width: '200px',
  },
  cardDate: {
    marginBottom: '16px',
    width: '150px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  card: {
    minWidth: '30%',
    border: '5px solid #ffffff',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardMedia: {
    height: 440,
  },
  cardTitle: {
    marginBottom: '8px',
  },
  cardExplanation: {
    minHeight: '250px',
  },
}))

const loading = 'ListSkeleton_'

const ListSkeleton = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      spacing={1}
      className={classes.root}
      data-testid={`${loading}_container`}
      direction="column"
      justifyContent="center"
    >
      {/* Date Input Skeleton */}
      <Grid item xs={12} display="flex" justifyContent="center">
        <Skeleton
          variant="rectangular"
          className={classes.dateInput}
          height={40}
        />
      </Grid>

      {/* Date Text Skeleton */}
      <Grid item xs={12} display="flex" justifyContent="center">
        <Skeleton variant="text" className={classes.cardDate} />
      </Grid>

      {/* Card Skeleton for Image and Content */}
      <Grid item xs={12} display="flex" justifyContent="center">
        <Card className={classes.card}>
          {/* Image Skeleton */}
          <Skeleton variant="rectangular" className={classes.cardMedia} />

          <CardContent>
            {/* Title Skeleton */}
            <Skeleton
              variant="text"
              className={classes.cardTitle}
              height={40}
              width="80%"
            />

            {/* Explanation Skeleton */}
            <Skeleton
              variant="text"
              className={classes.cardExplanation}
              height={80}
              width="100%"
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ListSkeleton
