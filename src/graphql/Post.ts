import { gql } from 'urql'

export const FetchPosts = gql`
  query FetchPosts {
    allPosts {
      nodes {
        body
        createdAt
        headline
        id
        media
        summary
        personByAuthorId {
          fullName
        }
        topic
        updatedAt
      }
    }
  }
`

export const FetchPostsByTopic = gql`
  query FetchPosts($topic: PostTopic!) {
    allPosts(condition: { topic: $topic }) {
      nodes {
        body
        createdAt
        headline
        id
        media
        summary
        personByAuthorId {
          fullName
        }
        topic
        updatedAt
      }
    }
  }
`

export const SubmitPost = gql`
  mutation SubmitPost(
    $body: String!
    $headline: String!
    $media: Base64EncodedBinary!
    $mediaType: String!
    $authorId: Int!
    $topic: PostTopic!
  ) {
    createPost(
      input: {
        post: {
          body: $body
          headline: $headline
          media: $media
          mediaType: $mediaType
          topic: $topic
          authorId: $authorId
        }
      }
    ) {
      clientMutationId
    }
  }
`

export const UpdatePost = gql`
  mutation UpdatePost(
    $id: Int!
    $body: String
    $headline: String
    $media: Base64EncodedBinary
    $mediaType: String
    $authorId: Int!
    $topic: PostTopic
  ) {
    updatePostById(
      input: {
        id: $id
        postPatch: {
          body: $body
          headline: $headline
          media: $media
          mediaType: $mediaType
          topic: $topic
          authorId: $authorId
        }
      }
    ) {
      post {
        body
        createdAt
        headline
        id
        media
        mediaType
        summary
        personByAuthorId {
          fullName
        }
        topic
        updatedAt
      }
    }
  }
`
