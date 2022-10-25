import { StyledFooter, StyledCopyright } from './styles';

export type FooterType = {
  copyright: string;
};

export default function Footer({ copyright }: FooterType) {
  return (
    <StyledFooter>
      <StyledCopyright>&copy; {copyright}</StyledCopyright>
    </StyledFooter>
  );
}
