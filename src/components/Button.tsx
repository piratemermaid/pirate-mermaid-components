import { Button as MuiButton, type ButtonProps } from '@mui/material';

type Props = ButtonProps & {
  shape?: 'rounded' | 'square';
};

export const Button = ({ shape = 'rounded', ...rest }: Props) => {
  return (
    <MuiButton
      {...rest}
      sx={{
        textTransform: 'none',
        borderRadius: shape === 'rounded' ? '9999px' : 'default' }}
    />
  );
};
