import { ErrorMessage, Field, FieldProps, useField } from 'formik'
import React from 'react'
import { FlexColumn, FlexRow } from '../common/Flex'
import FormError from './FormError'

interface IFormField {
  name: string,
  label: string,
  type?: string,
  required?: boolean,
  width?: number,
  style?: React.CSSProperties
}

const FormField = (props: IFormField) => {
  const { label, style, required, type } = props
  const [field, meta, helpers] = useField(props);
   return (
     <FlexColumn style={style}>
        <label>
          {label}{required ? ' *' : ''}
        </label>
        <input {...field} type={type} required={required} />
        {meta.touched && meta.error ? (
          <FormError>{meta.error}</FormError>
        ) : null}
     </FlexColumn>
   );
}

export default FormField