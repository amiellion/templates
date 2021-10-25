import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import {useField} from 'formik';

const FormRadio = ({ label, ...props }) => {
   const [field] = useField(props);
   return (
     <FormControlLabel {...field} control={<Radio />} label={label} />
   )
 }

export default FormRadio;
