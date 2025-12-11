import { Button as MuiButton, type ButtonProps } from '@mui/material';

type Props = ButtonProps & {
  shape?: 'rounded' | 'square';
};

export const Button = ({ shape = 'rounded', ...rest }: Props) => {
  return (
    <MuiButton
      {...rest}
      sx={{ borderRadius: shape === 'rounded' ? '9999px' : '0px' }}
    />
  );
};
