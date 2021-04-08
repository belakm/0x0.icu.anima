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

export interface IForm<T> {
  fields: IField[]
  onSubmit?: (values: T) => void
  textSubmit: string
  initialValues: T
}

const Form = <T,>({
  fields,
  onSubmit,
  textSubmit,
  initialValues,
}: IForm<T>) => {
  const [error, setError] = useState<string | null>(null)
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit ? onSubmit(values) : null
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
              {textSubmit}
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
