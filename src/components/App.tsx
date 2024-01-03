import { Box, Container, CssBaseline, Typography } from "@mui/material";
import SearchComponent from "./SearchComponent";
import  {  useEffect, useState } from "react";
import Card from "./Card";

const App = () => {

   
    const [currentCity, setCurrentCity] = useState()

    const [favorites] = useState([
        { name: 'minsk' },
        { name: 'moscow' },
        { name: 'kazan' }
    ]);

   

    useEffect(() => {
    }, [currentCity]);

    return(
        <Box>
            <Container>
            <CssBaseline/>
                <Typography sx={{margin: '20px 0'}} variant="h3">Weather App</Typography>
                <Box sx={{display: 'flex', flexDirection: 'column' , justifyContent: 'space-between', alignItems: 'center'}}>
                    <SearchComponent setCurrentCity={setCurrentCity}/>    

                    {
                        currentCity && (
                            <Card name={currentCity} />
                        )
                    }
                    

                    <Typography variant="h4" sx={{ marginTop: '20px' }}>Favorites:</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {favorites.map((favoriteCity, index) => (
                            <Card key={index} name={favoriteCity.name}/>
                        ))}
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default App;