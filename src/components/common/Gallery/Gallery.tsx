import React from 'react'
import ImageFrame from './ImageFrame'
import imgsuccubus from '../../../../public/images/art/succubus.jpg'
import imgteszt from '../../../../public/images/art/teszt.png'
import imgwhateven from '../../../../public/images/art/whateven.png'
import imgsfinga from '../../../../public/images/art/sfinga.png'
import imgsitofinal from '../../../../public/images/art/sitofinal.png'
import imgstickers from '../../../../public/images/art/stickers.png'
import imgferretfinal from '../../../../public/images/art/ferretfinal.png'
import imgmalware from '../../../../public/images/art/malware.png'
import imgkissis from '../../../../public/images/art/kissis.png'
import imgmask from '../../../../public/images/art/mask.png'
import imgplague from '../../../../public/images/art/plague.png'
import imgespeon from '../../../../public/images/art/espeon.jpg'
import imgduo from '../../../../public/images/art/duo.png'
import imggrl from '../../../../public/images/art/grl.png'
import imgriotflower from '../../../../public/images/art/riotflower.png'
import imgroom from '../../../../public/images/art/room.png'
import imgdog from '../../../../public/images/art/dog.png'
import imgcabinfever from '../../../../public/images/art/cabinfever.png'
import imgalien from '../../../../public/images/art/alien.png'
import imgdt from '../../../../public/images/art/dt.png'

const images = [
  {
    src: imgmask,
    title: 'mask',
  },
  {
    src: imgmalware,
    title: 'malware',
  },
  {
    src: imgsuccubus,
    title: 'succubus',
  },
  {
    src: imgteszt,
    title: 'teszt',
  },
  {
    src: imgwhateven,
    title: 'whateven',
  },
  {
    src: imgsfinga,
    title: 'sfinga',
  },
  {
    src: imgsitofinal,
    title: 'sitofinal',
  },
  {
    src: imgstickers,
    title: 'stickers',
  },
  {
    src: imgferretfinal,
    title: 'ferretfinal',
  },
  {
    src: imgkissis,
    title: 'kissis',
  },
  {
    src: imgplague,
    title: 'plague',
  },
  {
    src: imgespeon,
    title: 'espeon',
  },
  {
    src: imgduo,
    title: 'duo',
  },
  {
    src: imggrl,
    title: 'grl',
  },
  {
    src: imgriotflower,
    title: 'riotflower',
  },
  {
    src: imgroom,
    title: 'room',
  },
  {
    src: imgdog,
    title: 'dog',
  },
  {
    src: imgcabinfever,
    title: 'cabinfever',
  },
  {
    src: imgalien,
    title: 'alien',
  },
  {
    src: imgdt,
    title: 'dt',
  },
]

const Gallery = () => {
  return (
    <div
      style={{
        padding: '120px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      {images.map(({ title, src }) => (
        <div key={title}>
          <ImageFrame
            title={title}
            icon="access_220"
            width={480}
            height="auto"
            src={src}
          />
        </div>
      ))}
    </div>
  )
}

export default Gallery
