import { Label } from "../Label";
import { style } from "./styles";
import { Checkbox } from "@mui/material";

interface CheckBoxProps {
  enabled?: boolean,
  checked: boolean,
  message: string,
  size?: string
  onClick: () => void
}

export const CustomCheckbox = (props: CheckBoxProps) => {
  const { 
    message, 
    size = 'small', 
    enabled = true, 
    checked,
    onClick 
  } = props;

  return( 
    <div>
      <Checkbox 
        checked={checked}
        disabled={!enabled}
        onClick={() => onClick()}
        sx={style}
      />
      <Label message={message} size={size}/>
    </div>
  )
}
