import { Button } from "@mui/material"

export const Counter = ({restar, contador, sumar}) => {
  return (
    <div style={{padding: "10px"}}>
       <Button variant="contained" onClick={restar}>Restar</Button>
       <h2 style={{padding: "10px"}}>{contador}</h2>
       <Button variant="contained" onClick={sumar}>Sumar</Button> 
    </div>
  )
}
