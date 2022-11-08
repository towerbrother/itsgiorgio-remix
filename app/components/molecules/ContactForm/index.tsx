import * as S from './styles';

export default function ContactForm() {
  return (
    <S.StyledForm>
      <S.StyledTitle>Let's connect!</S.StyledTitle>
      <S.StyledInput
        type="text"
        name="name"
        placeholder="Name"
        aria-label="name"
      />
      <S.StyledInput
        type="email"
        name="email"
        placeholder="Email"
        aria-label="email"
      />
      <S.StyledTextArea placeholder="Type your message here..." />
      <S.StyledSubmitArea>
        <S.StyledCheckboxContainer>
          <S.StyledCheckboxInput type="checkbox" name="agreement" />
          <S.StyledLabel htmlFor="agreement">
            I agree to be contacted
          </S.StyledLabel>
        </S.StyledCheckboxContainer>
        <S.StyledSubmitButton type="submit">Submit</S.StyledSubmitButton>
      </S.StyledSubmitArea>
    </S.StyledForm>
  );
}
