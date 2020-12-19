import React from 'react'
import BrandImg from '../../../public/images/brand/logo.png'
import { FlexRow } from '../common/Flex'

const BrandTop = () => {
  return (
    <section>
      <FlexRow align="center">
        <img src={BrandImg} alt="Sitri logo" title="Hey there!" />
      </FlexRow>
    </section>
  )
}

export default BrandTop
