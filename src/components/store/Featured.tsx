import React from 'react'
import styled from 'styled-components'
import Window from './../Win95/Window/Window'

const FeaturedImage = styled.img`
  width: 360px;
  height: 360px;
`

// https://threejs.org/examples/#webgl_loader_gltf_variants

const Featured = () => {
  return (
    <Window title="Featured">
      <FeaturedImage src="https://preview.free3d.com/img-dev/2017/10/1763913110306948854/yw6whnyt-900.jpg"></FeaturedImage>
    </Window>
  )
}

export default Featured
