import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 85%;
  padding: 35px 0px;

  @media only screen and (min-width: 740px) {
    width: 50%;
    padding: 50px 0px;
  }
`;

// Standard Page Title ??
export const Title = styled.span`
  font-size: 64px;
  margin-bottom: 40px;
  padding: 0px 15px;
  width: fit-content;
  background-color: salmon;

  @media only screen and (min-width: 740px) {
    font-size: 80px;
    margin-bottom: 50px;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: salmon;
  padding: 15px;
`;

export const SubTitle = styled.span`
  font-size: 24px;
  margin-bottom: 30px;

  @media only screen and (min-width: 740px) {
    font-size: 28px;
  }
`;

export const Input = styled.input`
  margin: 0px 0px 20px 0px;
  padding: 5px 0px;
  border: none;
  border-bottom: 1px solid black;
  background: transparent;

  &::placeholder {
    font-size: 18px;
    color: #000;

    @media only screen and (min-width: 740px) {
      font-size: 24px;
    }
  }
`;

export const TextArea = styled.textarea`
  padding: 5px;
  margin: 5px 0px 20px 0px;
  height: 150px;
  background: transparent;
  border: 1px solid black;

  &::placeholder {
    color: #000;
  }
`;

export const SubmitArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 5px;
`;

export const CheckboxInput = styled.input`
  margin-right: 10px;
`;

export const Label = styled.label`
  font-size: 11px;

  @media only screen and (min-width: 740px) {
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button`
  padding: 5px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  @media only screen and (min-width: 740px) {
    font-size: 18px;
  }
`;
