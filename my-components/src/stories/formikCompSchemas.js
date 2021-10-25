import yup from 'yup';
import validation from 'constants/validation';

export const inputSchema = yup.object({
    memberid: yup
        .string()
        .typeError(validation.typeError)
        .required(validation.required),
});