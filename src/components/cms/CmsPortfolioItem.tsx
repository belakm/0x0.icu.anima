import { gql } from '@urql/core'
import Form from '../form/Form'
import { useContext, useEffect, useState } from 'react'
import { useMutation } from 'urql'
import AuthContext from '../../contexts/AuthContext'
import ModalContext from '../../contexts/ModalContext'
import GalleryItem, { IGalleryItem } from '../gallery/GalleryItem'
import Button from '../Win95/Button/Button'
import Window, { WindowWrapper } from '../Win95/Window/Window'
import { IPostFormValues, postFormFields } from './CmsPortfolio'
import toDataUrl from '../../utils/toDataUrl'
import { UpdatePost } from '../../graphql/Post'

const DeleteItem = gql`
  mutation MyMutation($id: Int!) {
    deletePostById(input: { id: $id }) {
      deletedPostId
    }
  }
`

export interface ICmsPorfolioItem extends IGalleryItem {
  reload: Function
}

const CmsPortfolioItem = ({
  body,
  createdAt,
  headline,
  id,
  media,
  mediaType,
  updatedAt,
  topic,
  reload,
}: ICmsPorfolioItem) => {
  const [item, setItem] = useState<IGalleryItem>({
    body,
    createdAt,
    headline,
    id,
    media,
    mediaType,
    updatedAt,
    topic,
  })
  const [deleteItemResult, deleteItem] = useMutation(DeleteItem)
  const modalContext = useContext(ModalContext)
  const [editMode, setEditMode] = useState<boolean>(false)
  const authContext = useContext(AuthContext)
  const [updatedPost, updatePost] = useMutation(UpdatePost)

  interface IUpdateFormValues {
    body?: string
    headline?: string
    media?: string | Blob
    topic?: string
  }

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
        {editMode ? (
          <>
            <Form
              onSuccess={() => {
                setEditMode(false)
              }}
              onSubmit={async ({ body, headline, media, topic }) => {
                try {
                  let mediaType, mediaData
                  if (media) {
                    const values1 = await toDataUrl(media as Blob)
                    const split = values1.substr(5).split(';base64,')
                    if (split.length == 2) {
                      mediaType = split[0]
                      mediaData = split[1]
                    }
                  }
                  const values = {
                    id,
                    body,
                    headline,
                    media: mediaData,
                    mediaType,
                    topic,
                    authorId: authContext.user?.id,
                  }
                  const { error, data } = await updatePost(values)
                  if (error) {
                    throw error
                  } else if (data?.updatePostById?.post) {
                    const {
                      body,
                      createdAt,
                      headline,
                      id,
                      media,
                      mediaType,
                      updatedAt,
                      topic,
                    } = data.updatePostById.post
                    setItem({
                      body,
                      createdAt,
                      headline,
                      id,
                      media,
                      mediaType,
                      updatedAt,
                      topic,
                    })
                  }
                  return { values }
                } catch (e) {
                  return {
                    error:
                      typeof e == 'object' && e.error != null
                        ? e.message
                        : JSON.stringify(e),
                  }
                }
              }}
              fields={postFormFields.map(f => ({ ...f, required: false }))}
              textSubmit="SUBMIT"
              initialValues={
                {
                  body: item.body,
                  headline: item.headline,
                  media: '',
                  topic: item.topic,
                } as IUpdateFormValues
              }
            />
          </>
        ) : (
          <>
            <GalleryItem
              body={item.body}
              createdAt={item.createdAt}
              headline={item.headline}
              id={item.id}
              media={item.media}
              mediaType={item.mediaType}
              updatedAt={item.updatedAt}
              topic={item.topic}
            />
            <Button onClick={() => setEditMode(true)}>Edit</Button>
          </>
        )}
      </WindowWrapper>
    </Window>
  )
}

export default CmsPortfolioItem
