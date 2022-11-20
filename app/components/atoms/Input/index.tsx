import type { FC } from 'react';
import type { InputProps } from './types';

import * as S from './styles';

const Input: FC<InputProps> = ({ name, label, ...rest }) => (
  <>
    {label && <S.Label htmlFor={name}>{label}</S.Label>}
    <S.Input id={name} {...rest}></S.Input>
  </>
);

export default Input;
