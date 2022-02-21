import React, { useState, useRef } from 'react'
import { useFormik } from "formik";
import { Block, Hero } from '@hyperobjekt/material-ui-website';

import {
  Typography,
  Box,
  TextField
} from '@material-ui/core';

import { ContactPageStyles } from './styles/ContactStyles'
import RoundedButton from '../general/RoundedButton'

//formik validator
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Required';
  } else if (values.message.length > 15) {
    errors.message = 'Must be 15 characters or less';
  }

  return errors;
};


const ContactPage = () => {
  const classes = ContactPageStyles()

  const success = "Messsage received! Thanks for contacting us."
  const failed = "Sorry, something went wrong with the form submission."

  const honeypotRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmittedError, setIsSubmittedError] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  // handler for form submission
  const handleSubmit = (values) => {
    // detect spam with honeypot
    if (honeypotRef.current.value !== "") return;
    // netlify forms submission
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then(() => {
        formik.setSubmitting(false);
        setIsSubmitted(true);
        formik.resetForm();
      })
      .catch((error) => {
        console.log("Submission error:", error);
        formik.setSubmitting(false);
        setIsSubmittedError(true);
      });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: handleSubmit
  });

  const customTextFields =
    <Box className={classes.flexAlign}>
      <Box className={classes.flexAlign}>
        <Typography variant="overline">NAME</Typography>
        <TextField
          id="name"
          name="name"
          InputProps={{ disableUnderline: true }}
          className={classes.textField}
          error={formik.touched.name && formik.errors.name}
          helperText={formik.touched.name && formik.errors.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </Box>
      <Box className={classes.flexAlign}>
        <Typography variant="overline">EMAIL</Typography>
        <TextField
          id="email"
          name="email"
          InputProps={{ disableUnderline: true }}
          className={classes.textField}
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </Box>
      <Box className={classes.flexAlign}>
        <Typography variant="overline">MESSAGE</Typography>
        <TextField
          id="message"
          name="message"
          InputProps={{ disableUnderline: true }}
          className={classes.textFieldMessage}
          InputLabelProps={{ shrink: true }}
          error={formik.touched.message && formik.errors.message}
          helperText={formik.touched.message && formik.errors.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.errors.message ? <div>{formik.errors.message}</div> : null}
      </Box>
    </Box>

  return (
    <Block className={classes.block}>
      <form
        name="contact"
        method="POST"
        onSubmit={formik.handleSubmit}
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <Box className={classes.contactUs}>
          <Box>
            <Typography variant="h3">CONTACT US</Typography>
            <Typography>
              Have a question? Please send us an email. We will get back to you as soon as possible.
            </Typography>
          </Box>
          {customTextFields}
          <RoundedButton
            type={"submit"}
            buttonStyles={classes.submitButton}
            text={'SUBMIT FORM'}
            textStyles={classes.submitButtonText}
          />
          <Box>
            {isSubmitted && !isSubmittedError && (
              <Typography
                role="alert"
              >
                {success}
              </Typography>
            )}
            {isSubmittedError && (
              <Typography
                role="alert"
              >
                {failed}
              </Typography>
            )}
          </Box>
        </Box>
      </form>
    </Block>
  )
}

export default ContactPage