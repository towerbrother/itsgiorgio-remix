import type { FC } from 'react';
import * as S from './styles';

import type { AriaAttributes, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & AriaAttributes;

const Button: FC<ButtonProps> = ({ children, ...rest }) => (
  <S.Button {...rest}>{children}</S.Button>
);

export default Button;
