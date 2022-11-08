import type { FooterType } from '~/models/types';
import * as S from './styles';

export default function Footer({ copyright }: FooterType) {
  return (
    <S.StyledFooter>
      <S.StyledCopyright>&copy; {copyright}</S.StyledCopyright>
    </S.StyledFooter>
  );
}
