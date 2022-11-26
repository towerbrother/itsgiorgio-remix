import type { FC, AriaAttributes, InputHTMLAttributes } from 'react';

import * as S from './styles';

type InputProps = {
  name: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  AriaAttributes;

const Input: FC<InputProps> = ({ name, label, ...rest }) => (
  <>
    {label && <S.Label htmlFor={name}>{label}</S.Label>}
    <S.Input id={name} {...rest}></S.Input>
  </>
);

export default Input;
