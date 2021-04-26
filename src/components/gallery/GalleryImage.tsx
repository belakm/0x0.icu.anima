import Window from '../Win95/Window/Window'

interface IGalleryImage {
  src: string
  title: string
}
const GalleryImage = ({ src, title }: IGalleryImage) => {
  return (
    <Window title={title}>
      <img src={src} title={title} alt={title} />
    </Window>
  )
}

export default GalleryImage
