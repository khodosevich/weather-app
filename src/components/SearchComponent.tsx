import { Alert, Box, Button } from "@mui/material"
import { useState } from "react"
import { searchMethod } from "../api/methods"

const SearchComponent = ({setCurrentCity}) => {
    
    const [value, setValue] = useState("")

    const [isError, setIsError] = useState(false)
    const [errorCity, setErrorCity] = useState("")

    const search = async () => {
        
        clear()
        if(!value) return

        try{
            const response = await searchMethod(value)
            setCurrentCity({name : response.name, favorite : false, isSet : true})
        }catch(err){
            setErrorCity(value)
            setIsError(true)
            setTimeout(() => {
                setIsError(false)
            }, 3000)
            console.log(err)
        }finally{
            setValue("")
        }
    }

    const clear = () => {
        setValue("")
        setCurrentCity({name : "", favorite : false, isSet : false})
    }

    return ( 
             <Box>
                
                  {isError && <Alert sx={{position:"absolute", top:"50px", width:"420px"}} severity="error">City: <span style={{fontWeight:"bold"}}>{errorCity}</span> not found</Alert>}
                
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
                            transition:"all 0.5s",
                            "&:hover": {
                                bgcolor:"white",
                                color:"black"
                            }
                        }}
                        >Search</Button>

                        <Button
                        onClick={clear}
                        variant="contained"
                        sx={{
                            bgcolor:"#660000",
                            color:"white",
                            marginLeft:"10px",
                            borderRadius:"10px",
                            padding:"7px 20px",
                            transition:"all 0.5s",
                            "&:hover": {
                                bgcolor:"#990000",
                                color:"white"
                            }
                        }}>Clear</Button>
                     </Box>
            </Box>
    )
}

export default SearchComponent 