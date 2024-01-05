import { useState, useEffect, Fragment } from 'react';
import { Box, Typography , CircularProgress, IconButton } from '@mui/material';
import {searchMethod  } from "../api/methods"
import StarIcon from "@mui/icons-material/Star"

const Card = ({ name, favorite,setFavorites,setCurrentCity  }) => {
  
    const [infoCard, setInfoCard] = useState({
        name: "",
        sys: {
            country: ""
        },
        main: {
            temp: ""
        },
        weather: [
            {
                main: ""
            }
        ]
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

    const handlerFavorite = () => {
        setFavorites(prev => {
          let cityIndex = prev.findIndex(info => (info.name).toLowerCase() === (infoCard.name).toLowerCase());
                     
          setCurrentCity({name : "", favorite : false, isSet : false});
          
          if (cityIndex !== -1) {
            return prev.filter(info => (info.name).toLowerCase()  !== name.toLowerCase());
          } else {
            return [...prev, { ...infoCard, favorite: true }];
          }
        });
      };
      

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
                    width:"350px",
                    height:"100%"
                    }}
                    >
                        <Typography variant="h3">{infoCard.name},{infoCard.sys.country}</Typography>
                        <Typography variant="h4">
                            {
                                Math.round(parseInt(infoCard.main.temp, 10))
                            }&deg;C
                        </Typography>
                        
                        <Typography variant="h4">{infoCard.weather[0].main}</Typography>

                        <IconButton
                            onClick={handlerFavorite}
                            sx={{
                                position: 'absolute',
                                top: '5px',
                                right: '5px',
                                color: favorite ? "gold" : "grey", 
                            }}
                        >
                            <StarIcon />
                        </IconButton>


                    </Box>
            }
        </Fragment>
    
  );
};

export default Card;
