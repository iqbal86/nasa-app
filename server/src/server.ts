import express, { Request, Response } from 'express'
import axios from 'axios'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

const NASA_API_BASE_URL = 'https://api.nasa.gov/'

interface APODResponse {
  date: string
  explanation: string
  hdurl: string
  title: string
  url: string
}

interface RoverPhoto {
  id: number
  sol: number
  camera: {
    id: number
    name: string
    rover_id: number
    full_name: string
  }
  img_src: string
  earth_date: string
  rover: {
    id: number
    name: string
    landing_date: string
    launch_date: string
    status: string
  }
}

// Define the root route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the NASA API Backend!')
})

// Endpoint to get Astronomy Picture of the Day
app.get('/api/apod', async (req: Request, res: Response) => {
  const { date } = req.query

  try {
    const response = await axios.get<APODResponse>(
      `${NASA_API_BASE_URL}planetary/apod?api_key=${process.env.NASA_API_KEY}&date=${date}`,
    )
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch APOD data', error })
  }
})

// Endpoint to get Mars Rover photos
app.get('/api/rover', async (req: Request, res: Response) => {
  try {
    const response = await axios.get<{ photos: RoverPhoto[] }>(
      `${NASA_API_BASE_URL}mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=MAST&api_key=${process.env.NASA_API_KEY}`,
    )
    res.json(response.data)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch Mars Rover photos', error })
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
