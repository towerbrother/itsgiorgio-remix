import { StyledFooter, StyledCopyright } from './styles';

export default function Footer({ copyright }: { copyright: string }) {
  return (
    <StyledFooter>
      <StyledCopyright>&copy; {copyright}</StyledCopyright>
    </StyledFooter>
  );
}
