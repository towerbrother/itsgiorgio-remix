import styled from 'styled-components';

export const StyledForm = styled.form`
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

export const StyledTitle = styled.span`
  font-size: 28px;
  text-align: left;
  margin-bottom: 40px;

  @media only screen and (min-width: 740px) {
    font-size: 32px;
    text-align: center;
    margin-bottom: 50px;
  }
`;

export const StyledInput = styled.input`
  padding: 5px 0px 20px 5px;
  border: none;
  border-bottom: 1px solid black;

  &::placeholder {
    font-size: 18px;

    @media only screen and (min-width: 740px) {
      font-size: 24px;
    }
  }
`;

export const StyledTextArea = styled.textarea`
  padding: 5px;
  height: 150px;
`;

export const StyledSubmitArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledCheckboxContainer = styled.div`
  padding: 10px 5px;
`;

// create a base input and extend?
export const StyledCheckboxInput = styled.input`
  margin-right: 10px;
`;

export const StyledLabel = styled.label`
  font-size: 14px;

  @media only screen and (min-width: 740px) {
    font-size: 16px;
  }
`;

export const StyledSubmitButton = styled.button`
  padding: 5px 15px;
  font-size: 14px;

  @media only screen and (min-width: 740px) {
    font-size: 18px;
  }
`;
