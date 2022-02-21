import React from 'react'

import { Block, Hero } from '@hyperobjekt/material-ui-website';

import {
  Typography,
  Box,
  TextField
} from '@material-ui/core';

import { ContactPageStyles } from './styles/ContactStyles'
import RoundedButton from '../general/RoundedButton'

const CustomTextField = (props) => {
  const { boxStyles, textFieldStyles, header } = props
  return (
    <Box className={boxStyles}>
      <Typography variant="overline">{header}</Typography>
      <TextField
        InputProps={{ disableUnderline: true }}
        className={textFieldStyles}
      />
    </Box>
  )
}

const ContactPage = () => {
  const classes = ContactPageStyles()

  return (
    <Block className={classes.block}>
      <Box className={classes.contactUs}>
        <Box>
          <Typography variant="h3">CONTACT US</Typography>
          <Typography>
            Have a question? Please send us an email. We will get back to you as soon as possible.
          </Typography>
        </Box>
        <Box className={classes.flexAlign}>
          {<CustomTextField boxStyles={classes.flexAlign} textFieldStyles={classes.textField} header={'NAME'}/>}
          {<CustomTextField boxStyles={classes.flexAlign} textFieldStyles={classes.textField} header={'EMAIL'}/>}
          {<CustomTextField boxStyles={classes.flexAlign} textFieldStyles={classes.textFieldMessage} header={'MESSAGE'}/>}
        </Box>
        <RoundedButton
          handleClick={() => console.log('submitted')}
          buttonStyles={classes.submitButton}
          text={'SUBMIT FORM'}
          textStyles={classes.submitButtonText}
        />
      </Box>
    </Block>
  )
}

export default ContactPage