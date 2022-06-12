import express from 'express'

import getContacts from '../controller/contacts-controller.js'
import sendMessage from '../controller/message-controller.js'

const router = new express.Router();

// endpoint for fetching contacts 
router.get('/getContacts', getContacts);

// endpoint for sending OTP message  
router.post('/sendMessage/:phone', sendMessage);

export default router