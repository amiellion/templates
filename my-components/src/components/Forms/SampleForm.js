import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';

import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import FormBS from 'react-bootstrap/Form';

import { FormDatetime, FormSelect, FormInput, FormRadio } from 'components/FormElements/';

import { ValidInputMessage, InvalidInputMessage } from 'components/FormElements/ValidationHelper';
import validation from 'constants/validation';
import { civilStatus, gender } from 'constants/options';
import * as yup from 'yup';


const ID = {
    select: "select",
    input: "input",
    datetime: "datetime",
    radio: "radio",
}

const validationSchema = yup.object({
    [ID.select]: yup
        .string()
        .typeError(validation.typeError)
        .required(validation.required),
    [ID.input]: yup
        .string()
        .typeError(validation.typeError)
        .required(validation.required),
    [ID.datetime]: yup
        .string()
        .typeError(validation.typeError)
        .required(validation.required),
    [ID.radio]: yup
        .string()
        .typeError(validation.typeError)
        .required(validation.required),
})

const SampleForm = ({
    formTitle = "Sample Form",
}) => {
    const initialValues = {
        [ID.select]: '',
        [ID.input]: '',
        [ID.datetime]: '',
        [ID.radio]: '',
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
        >
            {({
                values,
                errors,
                touched,
                setValues,
                handleSubmit,
                setFieldValue
            }) => (
                <FormBS className="general-forms" noValidate onSubmit={handleSubmit}>

                    <h3 className="text-center"> {`${formTitle || ""}`}</h3>

                    <div className="divider" />
                    <FormInput
                        required
                        label="Sample Input"
                        name={ID.input}
                        isValid={values[ID.input] && !errors[ID.input]}
                        isInvalid={touched[ID.input] && errors[ID.input]}
                    />

                    <FormBS.Group as={Col} id="transaction-transaction">
                        <div className="align-self-start justify-self-start">
                            <FormBS.Label>Sample Radio <span className="text-danger">*</span></FormBS.Label>
                        </div>
                        <div id="transaction-content" className={`d-flex align-items-center justify-content-around border-box w-100 ${touched[ID.radio] && (errors[ID.radio] ? 'border-danger' : 'border-success')}`}>
                            <FormRadio
                                type="radio"
                                label="Choice1"
                                value="choice1"
                                name={ID.radio}
                            />
                            <FormRadio
                                type="radio"
                                label="Choice2"
                                value="choice2"
                                name={ID.radio}
                            />
                        </div>
                        {(errors[ID.radio] && touched[ID.radio]) && (
                            <InvalidInputMessage>{errors[ID.radio]}</InvalidInputMessage>
                        )}
                        {(values[ID.radio] && !errors[ID.radio]) && (
                            <ValidInputMessage>Looks Good!</ValidInputMessage>
                        )}
                    </FormBS.Group>

                    <FormDatetime
                        required
                        label="Sample Date"
                        id={ID.datetime}
                        name={ID.datetime}
                        isValid={values[ID.datetime] && !errors[ID.datetime]}
                        isInvalid={touched[ID.datetime] && errors[ID.datetime]}
                        onChange={value => {
                            setFieldValue(ID.datetime, value)
                        }}
                    />
                    <FormSelect
                        required
                        label="Sample Select"
                        name={ID.select}
                        options={civilStatus}
                        value={values[ID.select]}
                        onChange={value => setFieldValue(ID.select, value)}
                    />

                    <div className="divider" />
                    <Button variant="outline-danger" onClick={() =>  {
                        setValues({...initialValues})
                    }}>Clear</Button>
                    <Button type="submit" variant="primary">SUBMIT</Button>
                </FormBS>

            )}
        </Formik>
    )
}


export default SampleForm;
SampleForm.propTypes = {
    formTitle: PropTypes.string
}
SampleForm.defaultProps = {
    formTitle: "Sample Form"
}