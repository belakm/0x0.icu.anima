import { useEffect, useState } from 'react'

interface IProgressLoader {
  width: number
  text: string
}

const ProgressLoader = ({ width, text }: IProgressLoader) => {
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(progress == 100 ? 0 : progress + 1)
    }, 15)
    return () => clearInterval(timer)
  })

  const toLoaderString = () => {
    const loaderWidth = Math.ceil(width / 3)
    const startPosition = Math.floor((width / 100) * progress)
    const endPosition = (startPosition + loaderWidth) % width
    if (startPosition < endPosition) {
      return `${'.'.repeat(startPosition)}${'#'.repeat(
        loaderWidth,
      )}${'.'.repeat(width - endPosition)}`
    } else {
      return `${'#'.repeat(endPosition)}${'.'.repeat(
        startPosition - endPosition,
      )}${'#'.repeat(width - startPosition)}`
    }
  }

  return (
    <p>
      {text}[{toLoaderString()}]
    </p>
  )
}

export default ProgressLoader
