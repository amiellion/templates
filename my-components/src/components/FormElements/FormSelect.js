import React, { forwardRef } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Select, { components } from 'react-select';

import { useField } from 'formik';
import { InvalidInputMessage, ValidInputMessage } from 'components/FormElements/ValidationHelper';

const iconCheck = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e"
const iconError = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"

const DropdownWrong = (
  props
) => {
  return (
    <components.DropdownIndicator {...props}>
      <img
        src={iconError}
        alt="right"
        className="customError"
        style={{
          width: 'calc(.75em + .375rem)',
          height: 'calc(.75em + .375rem)',
        }}
      />

    </components.DropdownIndicator>
  );
};
const DropdownCorrect = (
  props
) => {
  return (
    <components.DropdownIndicator {...props}>
      <img
        src={iconCheck}
        alt="wrong"
        className="customError"
        style={{
          width: 'calc(.75em + .375rem)',
          height: 'calc(.75em + .375rem)',
        }}
      />

    </components.DropdownIndicator>
  );
};


const FormSelect = forwardRef((props, ref) => {
  const { label, options, value, required, onChange } = props

  const [field, meta] = useField(props)

  const errorStyle = {
    border: "1px solid #dc3545",
    borderRadius: 5,
    // borderColor: "1px solid #dc3545",
  }
  const correctStyle = {
    border: "1px solid #198754",
    borderRadius: 5,
    // borderColor: "1px solid #dc3545",
  }



  // selectValue
  const defaultValue = (passedOptions, passedValue) => passedOptions ? passedOptions.find(option => option.value === passedValue) : '';

  return (
    <Form.Group as={Col}>
      <Form.Label> {label} {required && <span className="text-danger">*</span>}</Form.Label>
      <Select
        {...field}
        {...props}
        ref={ref}
        placeholder="Select..."
        styles={{
          control: (base, state) => {
            return {
              ...base,
              ...(meta.touched || meta.value) && (meta.error && !meta.value ? errorStyle : correctStyle),
              boxShadow: (meta.touched || meta.value) && (state.isSelected || state.isFocused) && ((meta.error && !meta.value) ? '0 0 0 5px #F8D8DB' : '0 0 0 5px #C5E1D4')
            }
          }
        }}
        components={(meta.touched || meta.value) && { DropdownIndicator: (meta.error && !meta.value) ? DropdownWrong : DropdownCorrect }}
        value={defaultValue(options, value)}
        onChange={({ value: valueChange }) => onChange(valueChange)}
      />
      {(meta.error && meta.touched && !meta.value) && (
        <InvalidInputMessage>{meta.error}</InvalidInputMessage>
      )}
      {(meta.value && !meta.error) && (
        <ValidInputMessage />
      )}
    </Form.Group>
  )
});


export default FormSelect;
