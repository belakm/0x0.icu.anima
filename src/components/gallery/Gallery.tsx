import React, { useEffect, useState } from 'react'
/*import imgsuccubus from '../../../public/images/art/succubus.jpg'
import imgteszt from '../../../public/images/art/teszt.png'
import imgwhateven from '../../../public/images/art/whateven.png'
import imgsfinga from '../../../public/images/art/sfinga.png'
import imgsitofinal from '../../../public/images/art/sitofinal.png'
import imgstickers from '../../../public/images/art/stickers.png'
import imgferretfinal from '../../../public/images/art/ferretfinal.png'
import imgmalware from '../../../public/images/art/malware.png'
import imgkissis from '../../../public/images/art/kissis.png'
import imgmask from '../../../public/images/art/mask.png'
import imgplague from '../../../public/images/art/plague.png'
import imgespeon from '../../../public/images/art/espeon.jpg'
import imgduo from '../../../public/images/art/duo.png'
import imggrl from '../../../public/images/art/grl.png'
import imgriotflower from '../../../public/images/art/riotflower.png'
import imgroom from '../../../public/images/art/room.png'
import imgdog from '../../../public/images/art/dog.png'
import imgcabinfever from '../../../public/images/art/cabinfever.png'
import imgalien from '../../../public/images/art/alien.png'
import imgdt from '../../../public/images/art/dt.png'*/
import GalleryImage from './GalleryImage'
import { FlexColumn, FlexRow } from '../common/Flex'

interface IGalleryImage {
  src: string
  title: string
}

const sitriImages: IGalleryImage[] = [
  /*{
    src: imgmask,
    title: 'mask',
  }*/
]

const Gallery = () => {
  const [images, setImages] = useState<IGalleryImage[]>([])
  useEffect(() => {
    setImages(sitriImages)
  }, [])
  return (
    <section>
      <FlexRow wrap="wrap" align="center">
        {images.map(({ src, title }) => (
          <FlexColumn style={{ width: '30%', margin: '1em' }} key={title}>
            <GalleryImage
              src={src}
              title={`${title.toUpperCase()}.sitrifile`}
            />
          </FlexColumn>
        ))}
      </FlexRow>
    </section>
  )
}

export default Gallery
