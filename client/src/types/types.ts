export type ApodResponseData = {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

export type Photo = {
  id: number
  sol: number
  camera: Camera
  img_src: string
  earth_date: string
  rover: Rover
}

export type Camera = {
  id: number
  name: string
  rover_id: number
  full_name: string
}

export type Rover = {
  id: number
  name: string
  landing_date: string
  launch_date: string
  status: string
  max_sol: number
  max_date: string
  total_photos: number
  cameras: RoverCamera[]
}

export type RoverCamera = {
  name: string
  full_name: string
}

export type PhotoData = {
  photos: Photo[]
}
