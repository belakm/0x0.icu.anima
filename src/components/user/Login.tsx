import { Form, Formik, FormikValues } from 'formik'
import { useContext, useEffect, useState } from 'react'
import { gql, useMutation } from 'urql'
import AuthContext from '../../contexts/AuthContext'
import ModalContext from '../../contexts/ModalContext'
import { FlexColumn } from '../containers/Flex'
import Modal from '../system/Modal/Modal'
import FormField from '../form/FormField'
import Button from '../system/Button/Button'

const SignIn = gql`
  mutation SignIn($email: String!, $password: String!) {
    authenticate(input: { email: $email, password: $password }) {
      jwtToken
    }
  }
`

export interface ILogin {
  message?: React.ReactNode
}

const Login = ({ message }: ILogin) => {
  const [signInResult, signIn] = useMutation(SignIn)
  const modalContext = useContext(ModalContext)
  const authContext = useContext(AuthContext)
  const [error, setError] = useState<string | null>(null)
  const displayMessage = message || (
    <p style={{ textAlign: 'center', color: 'grey' }}>Are you new?</p>
  )

  useEffect(() => {
    const { error, data } = signInResult
    if (error != null) {
      setError('Incorrect credentials.')
    } else if (data != null) {
    }
  }, [signInResult])

  const login = (
    values: FormikValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    setSubmitting(true)
    signIn(values).then(result => {
      setSubmitting(false)
      if (result.error) {
        setError('Incorrect credentials.')
      } else {
        const {
          data: {
            authenticate: { jwtToken },
          },
        } = result
        if (jwtToken == null) {
          setError('Incorrect credentials.')
        } else {
          authContext.setToken(jwtToken)
          modalContext.closeAllModals()
        }
      }
    })
  }

  const openRegistrationModal = () => {
    modalContext.openRegistrationModal()
  }
  return (
    <Modal width="480" title="CONNECT IN">
      {displayMessage}
      <div style={{ padding: '0 1em' }}>
        <FlexColumn>
          <Button onClick={openRegistrationModal}>CREATE NEW ACCOUNT</Button>
        </FlexColumn>
      </div>
      <hr style={{ width: '90%', marginTop: '2em', borderColor: 'grey' }} />
      <p style={{ textAlign: 'center', color: 'grey' }}>
        Been here before? Sign in below.
      </p>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          login(values, { setSubmitting })
        }}
      >
        {({ isSubmitting }) => (
          <Form style={{ padding: '1em' }}>
            <FormField required name="email" type="email" label="E-mail" />
            <FormField
              required
              name="password"
              type="password"
              label="Password"
            />
            <FlexColumn>
              <Button
                type="submit"
                disabled={isSubmitting}
                style={{ marginTop: '1em' }}
              >
                SIGN-IN
              </Button>
            </FlexColumn>
            {error && <p color="red">{error} Try again :)</p>}
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default Login
