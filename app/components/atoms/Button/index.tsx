import type { FC } from 'react';
import * as S from './styles';
import type { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ children, ...rest }) => (
  <S.Button {...rest}>{children}</S.Button>
);

export default Button;
