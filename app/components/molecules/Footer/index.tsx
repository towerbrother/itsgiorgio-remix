import type { FooterType } from '~/models/types';
import { StyledFooter, StyledCopyright } from './styles';

export default function Footer({ copyright }: FooterType) {
  return (
    <StyledFooter>
      <StyledCopyright>&copy; {copyright}</StyledCopyright>
    </StyledFooter>
  );
}
