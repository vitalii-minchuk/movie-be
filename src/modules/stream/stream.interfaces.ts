import { Request } from 'express'

export interface StreamRequest extends Request {
  params: {
    magnet: string
    fileName: string
  }
  headers: {
    range: string
  }
}

export interface ErrorWithStatus extends Error {
  status: number
}

export interface AddMagnetRequest extends Request {
  params: {
    magnetUrl: string
  }
}
