import { defaultFont, defaultFontSize, defaultFontWeight, defaultTheme } from '../../styles/default'

export const style = { 
  width: '120px',
  height: '40px',
  borderRadius: '12px',
  background: `${defaultTheme['purple-100']}`,
  color: `${defaultTheme['purple-500']}`,
  borderColor: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: `${defaultFont.font}`,
  fontSize: `${defaultFontSize.small}`,
  fontWeight: `${defaultFontWeight.normal}`,
  letterSpacing: '2.5px',
  '&:disabled': {
    color: `${defaultTheme['gray-300']}`,
    background: `${defaultTheme['gray-100']}`,
  },
  '&:hover': {
    background: `${defaultTheme['purple-300']}`,
  }
};