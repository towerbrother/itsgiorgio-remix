import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: ${({ theme }) =>
    theme.position === 'left' ? 'flex-end' : 'flex-start'};
  width: fit-content;
  padding: 20px;
  margin: 5px 10px;
  background: lightgray;
  border-radius: 10px;

  * {
    text-align: ${({ theme }) => theme.position};
  }
`;

export const Date = styled.span`
  letter-spacing: 2px;
`;

export const List = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  direction: ${({ theme }) => (theme.position === 'left' ? 'ltr' : 'rtl')};
`;

export const Responsibility = styled.li``;
