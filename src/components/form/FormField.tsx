import { useField } from 'formik'
import { FlexColumn } from '../common/Flex'
import FormError from './FormError'

interface IFormOption {
  value: string
  text: string
}

export interface IFormField {
  name: string
  label: string
  type?: string
  required?: boolean
  width?: number
  style?: React.CSSProperties
  options?: IFormOption[]
}

const FormField = (props: IFormField) => {
  const { label, style, required, type, options } = props
  const [field, meta, helpers] = useField(props)

  return (
    <FlexColumn style={{ marginBottom: '.5em', ...style }}>
      <label style={{ marginBottom: '.2em' }}>
        {label}
        {required ? ' *' : ''}
      </label>
      {type == 'select' ? (
        <select
          name={field.name}
          onChange={({ target }) => {
            helpers.setValue(target.value)
          }}
          required={required}
          defaultValue={meta.initialValue}
        >
          {options?.map(({ value, text }, index) => (
            <option value={value} key={index}>
              {text}
            </option>
          ))}
        </select>
      ) : type == 'file' ? (
        <input
          name={field.name}
          type={type}
          required={required}
          onChange={({ target }) => {
            target && target.files && helpers.setValue(target.files[0])
          }}
        />
      ) : (
        <input {...field} type={type} required={required} />
      )}
      {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
    </FlexColumn>
  )
}

export default FormField
