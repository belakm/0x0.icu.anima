import React, { Component } from 'react';
import styled from 'styled-components';
import GlitchedImage from './GlitchedImage';

const GalleryColumn = styled.div`
  display: inline-block;
  width: ${(props) => {
    return `calc(${(100 / props.numOfColumns)}% - ${ (props.numOfColumns - 1) / props.numOfColumns }em)`
  }};
  &:not(:nth-last-child(2)) {
    margin: 0 1em 0 0;
  }
`

class Gallery extends Component {

  state = {
    images: [],
    columns: []
  }

  getRandomDimension  = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  generateColumns = (numOfImages) => {
    const numOfColumns = Math.floor(window.innerWidth / 350 )
    const images = this.generateImages(numOfImages)
    const columns = new Array(numOfColumns)
      .fill([])
      .map((column, columnIndex) => {
        return column.concat(images.reduce((imagesInColumn, image, imageIndex) => {
          if (imageIndex % 3 === columnIndex) {
            return [ ...imagesInColumn, { ...image } ]
          } else return imagesInColumn
        }, []))
      })
    return columns
  };

  updateColumns() {
    this.setState({columns: this.generateColumns(15)})
  }

  generateImages(numberOfImages) {
    let generatedImages = [];
    for (let x = 0; x < numberOfImages; x++) {
      let xDim = this.getRandomDimension(200, 240)
      let yDim = this.getRandomDimension(400, 480)
      generatedImages.push({
        lores: `https://loremflickr.com/${xDim}/${yDim}/drawing,art/all?i=${x}`,
        hires: `https://loremflickr.com/${xDim * 2}/${yDim * 2}/drawing,art/all?i=${x}`,
        alt: 'Testing image',
        id: x
      })
    }
    return generatedImages
  }

  componentDidMount() {
    this.updateColumns();
    this.setState({images: this.generateImages(15)})
    window.addEventListener('resize', this.updateColumns.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateColumns.bind(this))
  }

  render() {
    return <div>
      {this.state.columns.map((column, index) => {
        return <GalleryColumn key={index} numOfColumns={this.state.columns.length}>
          {
            column.map(image => {
              return <GlitchedImage key={image.id} image={image} ></GlitchedImage>
            })
          }
        </GalleryColumn>
      })}
      <svg style={{display: 'none'}}>
        <filter id="r"><feColorMatrix
          type="matrix"
          values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0 "/>
        </filter>
        <filter id="g"><feColorMatrix
          type="matrix"
          values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0 "/>
        </filter>
        <filter id="b"><feColorMatrix
          type="matrix"
          values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0 "/>
        </filter>
      </svg>
    </div>
  }
}

export default Gallery