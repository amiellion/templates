import Input from 'components/FormElements/FormInput';
import { storiesOf } from '@storybook/react';
import withFormik from 'storybook-formik';
import yup from 'yup';
import validation from 'constants/validation';
import FormBS from 'react-bootstrap/Form';
import { Formik } from 'formik';



export default {
    title: "my-components/Forms/Formik/Input",
    component: Input,
    // decorators: [withFormik],
    // parameters: {
    //     formik: {
    //         initialValues: {
    //             input: "",
    //         },
    //         validationSchema,
    //         onSubmit: (v) => console.log("I want to log these... ", v),
    //     },
    // },
}

const validationSchema = yup.object({
    memberid: yup
        .string()
        .typeError(validation.typeError)
        .required(validation.required),
})

const Template = (args) => <Input {...args} />
export const FormikInput = Template.bind({});
FormikInput.args = {
    id: "test",
    label: "Sample label",
    required: true,
    error: true,
    errorMessage: "test",
}




// export const FormikInput = () => (
//     <Input
//         name="input"
//         id="input"
//         label="Describe formik in 80 characters"
//         placeholder="I love formik because..."
//     />
// );
// FormikInput.parameters = {
//     formik: {
//         initialValues: {
//             formikTweet: '',
//         },
//         validationSchema,
//         onSubmit: v => console.log('I want to log these... ', v),
//     },
// };