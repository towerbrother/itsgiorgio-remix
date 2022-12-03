import { useState } from 'react';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

import * as S from './styles';

type CompanyType = { name: string; url: string };
type EmployeeType = { name: string; role: string };
type ExternalLinkType = { text: string; url: string };
type InternalLinkType = { text: string; slug: string };

export type HeaderProps = {
  company: CompanyType;
  employee: EmployeeType;
  externalLinks: Array<ExternalLinkType>;
  internalLinks: Array<InternalLinkType>;
};

const Header = (props: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <S.Header>
      <Navbar {...props} toggle={toggle} />
      <Sidebar {...props} isOpen={isOpen} toggle={toggle} />
    </S.Header>
  );
};

export default Header;
