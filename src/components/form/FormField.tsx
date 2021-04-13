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
    <FlexColumn style={style}>
      {type == 'select' ? (
        <>
          <label>
            {label}
            {required ? ' *' : ''}
          </label>
          <select
            onChange={({ target }) => {
              helpers.setValue(target.value)
            }}
            required={required}
            defaultValue={options ? options[0].value : 0}
          >
            {options?.map(({ value, text }, index) => (
              <option value={value} key={index}>
                {text}
              </option>
            ))}
          </select>
        </>
      ) : type == 'file' ? (
        <>
          <label>
            {label}
            {required ? ' *' : ''}
          </label>
          <input
            name={field.name}
            type={type}
            required={required}
            onChange={({ target }) => {
              target && target.files && helpers.setValue(target.files[0])
            }}
          />
        </>
      ) : (
        <>
          <label>
            {label}
            {required ? ' *' : ''}
          </label>
          <input {...field} type={type} required={required} />
        </>
      )}
      {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
    </FlexColumn>
  )
}

export default FormField
