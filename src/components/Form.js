import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Formik,Form,Field } from 'formik';
import {object,string }from 'yup';
import { Typography } from '@mui/material';

const initialValues ={
    email:"",
    name:"",
    password:""
}


const Formk = () => {
  return (
    <div className='Mform'>
        <Formik initialValues={initialValues} 
        onSubmit={(values,formikHelpers)=>{
        console.log(values);
        formikHelpers.resetForm();
        }}
        validationSchema={object({
            email:string().required("Please Enter email").email("Inavild email"),
            name:string().required("Please Enter your Name").min(2,"Name too short"),
            password:string().required("Please Enter your password").min(7,"Password Should be minimum 7 charaters")
        })}
        >
            {({errors,isValid,touched,dirty})=>(
            <Form>
                <Field as={TextField} 
                 name="email"
                 type="email" 
                 id="outlined-basic" 
                 color="primary"
                 label="Email" 
                 variant="outlined"
                 error={Boolean(errors.email) && Boolean(touched.email)}
                 helperText={Boolean(touched.email) && errors.email}
                 />

             <Box height={14} />
                <Field as={TextField} 
                     name="name"
                     type="name" 
                     id="outlined-basic" 
                     color="primary"
                     label="Name" 
                     variant="outlined"
                     error={Boolean(errors.name) && Boolean(touched.name)}
                     helperText={Boolean(touched.name) && errors.name}
                     />
                     <Box height={14} />
                <Field as={TextField} 
                 name="password"
                 type="password" 
                 id="outlined-basic" 
                 color="primary"
                 label="Password" 
                 variant="outlined"
                 error={Boolean(errors.password) && Boolean(touched.password)}
                 helperText={Boolean(touched.password) && errors.password}
                 />
                 <Box height={16} />
                <Button type ="submit" variant='contained' color="primary" size='large' disabled={!dirty || !isValid}>Sign  up</Button>
            </Form>
            )}
        </Formik>
        {/* 2day */}
        <Typography>Thanks bro</Typography>
        <Typography>Welcome</Typography>
        </div>
  )
}

export default Formk