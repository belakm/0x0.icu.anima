import { gql } from '@urql/core'
import { useContext } from 'react'
import styled from 'styled-components'
import { useMutation } from 'urql'
import ModalContext from '../../contexts/ModalContext'
import Window, { WindowWrapper } from '../Win95/Window/Window'

const DeleteItem = gql`
  mutation MyMutation($id: Int!) {
    deletePostById(input: { id: $id }) {
      deletedPostId
    }
  }
`

export interface ICmsPorfolioItem {
  body: string
  createdAt: string
  headline: string
  id: string
  media: string
  mediaType: string
  updatedAt: string
  reload: Function
}

const ImageViewer = styled.div`
  background-image: linear-gradient(45deg, #808080 25%, transparent 25%),
    linear-gradient(-45deg, #808080 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #808080 75%),
    linear-gradient(-45deg, transparent 75%, #808080 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  img {
    width: 100%;
    height: auto;
  }
`

const CmsPortfolioItem = ({
  body,
  createdAt,
  headline,
  id,
  media,
  mediaType,
  updatedAt,
  reload,
}: ICmsPorfolioItem) => {
  const [deleteItemResult, deleteItem] = useMutation(DeleteItem)
  const modalContext = useContext(ModalContext)

  const confirmDeletion = () => {
    deleteItem({ id }).then(({ error }) => {
      if (error) {
        console.log(error)
      } else {
        reload()
      }
    })
  }

  const deleteItemFn = () => {
    modalContext.openDialogModal({
      message: <p>Do you really wanna delete: {headline}?</p>,
      handleMessage: confirmation => {
        if (confirmation) {
          confirmDeletion()
        }
      },
    })
  }

  return (
    <Window
      title={headline}
      options={[
        {
          text: 'X',
          fn: deleteItemFn,
        },
      ]}
    >
      <WindowWrapper>
        <h3>{headline}</h3>
        <ImageViewer>
          <img src={'data:' + mediaType + ';base64,' + media} />
        </ImageViewer>
        <h2>
          Created: {createdAt}, Updated: {updatedAt}
        </h2>
        <p>{body}</p>
      </WindowWrapper>
    </Window>
  )
}

export default CmsPortfolioItem
