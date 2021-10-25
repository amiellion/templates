import React, { forwardRef } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Datetime from 'react-datetime';

import { useField } from 'formik';

import { slashYMD } from 'constants/dateFormat';

const FormDatetime = forwardRef((props, ref) => {
  // eslint-disable-next-line
  const { label, required, onChange, isValid, isInvalid } = props
  const [field, meta] = useField(props)

  return (
    <Form.Group as={Col}>
      <Form.Label> {label} {required && <span className="text-danger">*</span>}</Form.Label>
      <Datetime
        dateFormat={slashYMD}
        ref={ref}
        renderInput={

          (props2, openCalendar) => {
            return (
              <Form.Control
                {...field}
                {...props2}
                required
                isValid={isValid}
                isInvalid={isInvalid}
                readOnly
                autoComplete="off"
                onClick={openCalendar}
              />
            )
          }
        }
        timeFormat={false}
        closeOnSelect
        inputProps={{ autoComplete: false }}
        onChange={(value) => onChange(value)}
      />
      {(meta.error && meta.touched && !meta.value) && (
        <div style={{
          width: '100%',
          marginTop: '.25rem',
          fontSize: '0.875em',
          color: '#dc3545',
        }}
        >
          {meta.error}
        </div>
      )}
      {(meta.value && !meta.error) && (
        <div style={{
          width: '100%',
          marginTop: '.25rem',
          fontSize: '0.875em',
          color: '#198754',
        }}
        >
          Looks Good!
        </div>
      )}
    </Form.Group>
  )
});


export default FormDatetime;
