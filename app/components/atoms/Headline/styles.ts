import styled from 'styled-components';
import { colors } from '~/common/constants';

import type { Style } from '.';

export const H1 = styled.h1`
  font-size: 62px;
`;

export const H2 = styled.h2`
  font-size: 52px;
`;

export const H3 = styled.h3`
  font-size: 42px;
`;

export const H4 = styled.h4`
  font-size: 32px;
`;

export const H5 = styled.h5`
  font-size: 22px;
`;

export const H6 = styled.h6`
  font-size: 12px;
`;

export const Text = styled.span<Style>`
  font-weight: 700;
  padding: ${({ padding }) => (padding ? padding : '5px 10px')};
  color: ${({ color }) => (color ? color : colors.offBlack)};
  background-color: ${({ background }) =>
    background ? background : colors.secondaryBackground};
`;
