import type { FooterType } from '~/models/types';
import * as S from './styles';

export default function Footer({ copyright }: FooterType) {
  return (
    <S.Footer>
      <S.Copyright>&copy; {copyright}</S.Copyright>
    </S.Footer>
  );
}
