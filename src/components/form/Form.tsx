import { Formik, Form as FormikForm } from 'formik'
import { CSSProperties, useState } from 'react'
import { FlexColumn } from '../common/Flex'
import FormField from '../form/FormField'
import Button from '../Win95/Button/Button'

export interface IField {
  type: string
  name: string
  required?: boolean
  label: string
  style?: CSSProperties
}

export interface IForm {
  fields: IField[]
  onSubmit: (values: Object) => void
}

const Form = ({ fields, onSubmit }: IForm) => {
  const [error, setError] = useState<string | null>(null)
  return (
    <Formik
      initialValues={fields.reduce(
        (initialValues, { type, name }) => ({
          ...initialValues,
          [name]: type == 'string' ? '' : null,
        }),
        {},
      )}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm style={{ padding: '1em' }}>
          {fields.map(({ required, name, label, type, style }) => (
            <FormField
              required={required}
              name={name}
              label={label}
              type={type}
              style={style}
            />
          ))}
          <FlexColumn style={{ marginTop: '1em' }}>
            <Button type="submit" disabled={isSubmitting}>
              REGISTER
            </Button>
          </FlexColumn>
          {error && <p color="red">{error} Try again :)</p>}
          <p>* All fields are required.</p>
        </FormikForm>
      )}
    </Formik>
  )
}

export default Form
