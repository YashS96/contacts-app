import React, {useEffect, useState} from 'react'
import { Button, Card, CardContent, Grid, Stack  } from '@mui/material'
import { Box } from '@mui/system';
import { message } from '../../services/api.js'

function ContactCard(props) {

    // const [value, setValue] = useState(0);

    let name = props.data.name;
    let phone = props.data.phone;
    let populateHistory=props.method;

    let f = () => {
        populateHistory({ 
            timeStamp: new Date().toISOString(),
            name: name,
            phone: phone
        })
        message(phone)
    }
    return (
        <Box>
        <Card style={{
            margin : '2rem',
            broderRadius: '.3rem',
            padding: '1rem',
            fontWeight : 'bold',
            '&:hover':{
                boxShadow : '.3em .3em .5em rgba(0,0,0, .4)'
            },
            display: { xs: 'flex'}
        }}>
            <CardContent style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'strech'
            }} >
                <Stack spacing={7} direction="row" >
                    <Grid>
                        {name}
                    </Grid>
                    <Grid>
                        {phone}
                    </Grid>
                    <Grid>
                        <Button varient="contained" 
                        style={{
                            borderRadius: 25,
                            backgroundColor: "black",
                            color: 'white',
                            padding: "5px 10px",
                            fontSize: "10px"
                        }}
                        onClick={()=>f()}>Send OTP</Button>
                    </Grid>
                </Stack>
            </CardContent>
        </Card>
        </Box>
    )
}

export default ContactCard