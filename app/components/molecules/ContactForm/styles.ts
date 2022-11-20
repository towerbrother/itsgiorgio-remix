import styled from 'styled-components';
import { devices } from '~/common/constants';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 85%;
  padding: 35px 0px;
  color: #fff;

  @media ${devices.tablet} {
    width: 65%;
    padding: 50px 0px;
  }
`;

// Standard Page Title ??
export const Title = styled.span`
  font-size: 64px;
  margin-bottom: 40px;
  padding: 0px 15px;
  width: fit-content;
  background-color: #000;

  @media ${devices.tablet} {
    font-size: 80px;
    margin-bottom: 50px;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #000;
  padding: 20px;

  input {
    margin: 0px 0px 20px 0px;
    padding: 5px 0px;
    color: #fff;
    border-bottom: 1px solid #fff;

    &::placeholder {
      font-size: 18px;
      color: #fff;

      @media ${devices.tablet} {
        font-size: 24px;
      }
    }
  }
`;

export const SubTitle = styled.span`
  font-size: 24px;
  margin-bottom: 30px;

  @media ${devices.tablet} {
    font-size: 28px;
  }
`;

export const TextArea = styled.textarea`
  padding: 5px;
  margin: 5px 0px 20px 0px;
  height: 150px;
  background: transparent;
  border: 1px solid #fff;

  &::placeholder {
    color: #fff;
  }
`;

export const SubmitArea = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    color: #000;
    background-color: #fff;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  padding: 10px 5px;

  input {
    margin: 0px 10px 0px 0px;
  }
`;
