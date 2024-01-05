import { Box, Container, CssBaseline, Typography } from "@mui/material";
import SearchComponent from "./SearchComponent";
import  {  useState } from "react";
import Card from "./Card";

const App = () => {

    const [currentCity, setCurrentCity] = useState({
        name: "",
        favorite: false,
        isSet: false
    })

    const [favorites,setFavorites] = useState([
        { name: 'minsk' , favorite: true},
        { name: 'moscow', favorite: true },
        { name: 'new york', favorite: true }
    ]);
   
    return(
        <Box>
            <Container>
            <CssBaseline/>
                <Typography sx={{margin: '20px 0'}} variant="h3">Weather App</Typography>
                <Box sx={{display: 'flex', flexDirection: 'column' , justifyContent: 'space-between', alignItems: 'center'}}>
                    <SearchComponent setCurrentCity={setCurrentCity}/>    

                    {
                        currentCity.isSet && 
                        <Card name={currentCity.name} favorite={currentCity.favorite} setFavorites={setFavorites} setCurrentCity={setCurrentCity}/>
                    }

                    <Typography variant="h4" sx={{ marginTop: '20px' }}>Favorites:</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        { favorites.length > 0 
                            ?  [...favorites].reverse().map((favoriteCity) => (
                            <Card key={favoriteCity.name} name={favoriteCity.name} favorite={favoriteCity.favorite} setFavorites={setFavorites} setCurrentCity={setCurrentCity}/> 
                         )) : 
                            <Typography variant="h5" sx={{ marginTop: '20px' }}>No favorites</Typography>      
                        }
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default App;