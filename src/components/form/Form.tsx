import { Formik, Form as FormikForm } from 'formik'
import { useEffect, useState } from 'react'
import { FlexColumn } from '../common/Flex'
import FormField, { IFormField } from '../form/FormField'
import Button from '../system/Button/Button'

export interface IForm<T> {
  fields: IFormField[]
  onSubmit?: (values: T) => Promise<{ values?: T; error?: string }>
  onSuccess?: (values?: T) => void
  textSubmit: string
  initialValues: T
}

const Form = <T,>({
  fields,
  onSubmit,
  onSuccess,
  textSubmit,
  initialValues,
}: IForm<T>) => {
  const [error, setError] = useState<string | null>(null)
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onSubmit
          ? onSubmit(values).then(({ values, error }) => {
              if (error) {
                setError(error)
              } else {
                resetForm()
                onSuccess ? onSuccess(values) : null
              }
            })
          : null
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm style={{ padding: '1em' }}>
          {fields.map(({ required, name, label, type, style, options }) => (
            <FormField
              required={required}
              name={name}
              label={label}
              type={type}
              style={style}
              options={options}
              key={name}
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
