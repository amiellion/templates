import withFormik from 'storybook-formik';
import Input from 'components/FormElements/FormInput';
import { inputSchema as validationSchema } from './formikCompSchemas';

export default {
    title: "my-components/Forms/Formik-Input",
    component: Input
}



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