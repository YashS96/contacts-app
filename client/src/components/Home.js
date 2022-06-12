import React from 'react'
import './Home.css';
import { Button, Card, CardContent, Grid, Stack  } from '@mui/material'

import hello from '../images/hello.jpg'
import KN from '../images/KNLogo.png'

const Home = () =>{

    let imgSrc1 = hello
    let imgSrc2 = KN
    let link='https://kisannetwork.com/'
    return(
        <Card style={{width: '50%', margin : 'auto', marginTop: '4%'}}>
            <CardContent >
                <Stack spacing={2} direction="column">
                    <Grid>
                    <img  src={imgSrc1} alt = " hello image"/>
                    </Grid>
                    <Grid>
                    <a href={link}><img  src={imgSrc2} alt = "KN image"/> </a>
                    </Grid>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Home;