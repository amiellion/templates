import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useField } from 'formik';

const FormInput = props => {
    const { label, required, id, error, errorMessage } = props;
    const [field, meta] = useField(props)

    return (
        <Form.Group as={Col} id={id}>
            <Form.Label>{label}{required && <span className="text-danger"> *</span>}</Form.Label>
            <Form.Control
                {...field}
                {...props}
            />
            {(meta.value && !meta.error || error) && (
                <Form.Control.Feedback>
                    Looks Good!
                </Form.Control.Feedback>
            )}
            {(meta.error && meta.touched || error) && (
                <Form.Control.Feedback type="invalid">
                    {meta.error || ( errorMessage || "Error")}
                </Form.Control.Feedback>
            )}
        </Form.Group>
    )
}

export default FormInput;
FormInput.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
}