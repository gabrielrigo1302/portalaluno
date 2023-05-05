import { Button } from "@mui/material";
import { style } from "./styles";

interface ButtonProps {
  enabled?: boolean,
  message: string,
  onClick: () => void
}

export const CustomButton = (props: ButtonProps) => {
  const { message, enabled, onClick } = props;

  return(
    <Button 
      disabled={!enabled} 
      onClick={() => onClick()} 
      variant="contained" 
      sx={style} 
    > 
      {message}
    </Button>
  )
}
