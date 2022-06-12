import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import {contacts} from '../../services/api.js'
import ContactCard from './ContactCard.js'

function Contacts(props) {

    const [contactList, setContactList] = useState([])
    const [value, setValue] = useState(0);
 
    let getContatcs = async () =>{
        try{
       
            let list = await contacts();

            setContactList([...list.contacts]);
            console.log([...list.contacts])
            if(value === 0)
                setValue(1)

        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getContatcs();
    },[value])

    return(
        <Box style={{  
             margin : 'auto',
             marginTop: '4%',    
             width: '60%',
             fontFamily: 'ITCG Light Narrow'
             }}>
            { 
            contactList.map((contact, index) => {
            return <ContactCard key = {index} data = {contact} method={props.method} />
            })
            }
        </Box>
    )
}

export default Contacts;