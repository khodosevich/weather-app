import { useState, useEffect, Fragment } from 'react';
import { Box, Typography , CircularProgress } from '@mui/material';
import {searchMethod  } from "../api/methods"

const Card = ({ name }) => {
  
    console.log(name)

    const [infoCard, setInfoCard] = useState({
        name: "",
        sys: {
            country: ""
        },
        main: {
            temp: ""
        }
    })

    const [isFetching, setIsFetching] = useState(false)

    const getCards = async () => {

        try{
            setIsFetching(true)
            const data = await searchMethod(name)
            setInfoCard(data)
        }catch(err){
            console.log(err)
        }finally{
            setIsFetching(false)
        }
    }

    useEffect(() => {
        getCards()
    }, [])

  return (

        <Fragment>
                {
                isFetching ? 
                <CircularProgress />
                :   
                <Box
                    sx={{
                    border: '1px solid #ccc',
                    margin: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                    position: 'relative',
                    width:"300px",
                    height:"200px"
                    }}
            >
                <Typography variant="h3">{infoCard.name}</Typography>
                <Typography variant="h4">
                    {
                        Math.round(parseInt(infoCard.main.temp, 10))
                    }&deg;C
                </Typography>
                <Typography variant="h4">{infoCard.sys.country}</Typography>
                
            </Box>
            }
        </Fragment>
    
  );
};

export default Card;
