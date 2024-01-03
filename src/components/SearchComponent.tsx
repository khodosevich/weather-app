import { Box, Button } from "@mui/material"
import { useState } from "react"
import { searchMethod } from "../api/methods"

const SearchComponent = ({setCurrentCity}) => {
    
    const [value, setValue] = useState("")

    const search = async () => {

        if(!value) return

        try{
            const response = await searchMethod(value)
            setCurrentCity(response.name)
            console.log(response)
        }catch(err){
            console.log(err)
        }finally{
            setValue("")
        }
        
    }

    return (
        <Box sx={{ bgcolor:"white" , padding:"10px", borderRadius:"10px" , display:"flex" , alignItems:"center",
        
        '@media (max-width: 600px)': {
            flexDirection:"column",
            gap:"10px",
           },

       }} >
           <input
            style={{minWidth:"300px",maxWidth:"400px" , fontSize:"15px", outline:"none", padding:"10px", borderRadius:"10px", border:"1px solid black" }} 
            type="text" 
            placeholder="Search"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            />

            <Button
            onClick={search}
            variant="contained"
            sx={{
                bgcolor:"black",
                color:"white",
                marginLeft:"10px",
                borderRadius:"10px",
                padding:"7px 20px",
                transition:"all 0.5s ease",
                "&:hover": {
                    bgcolor:"white",
                    color:"black"
                }
            }}
            >Search</Button>

        </Box>
    )
}

export default SearchComponent 