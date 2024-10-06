export type ApodResponseData = {
  date: string
  explanation: string
  hdurl: string
  title: string
  url: string
}

export type RoverPhoto = {
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
