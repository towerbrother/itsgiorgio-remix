import {
  StyledForm,
  StyledTitle,
  StyledInput,
  StyledTextArea,
  StyledSubmitArea,
  StyledCheckboxContainer,
  StyledCheckboxInput,
  StyledLabel,
  StyledSubmitButton,
} from './styles';

export default function ContactForm() {
  return (
    <StyledForm>
      <StyledTitle>Let's connect!</StyledTitle>
      <StyledInput
        type="text"
        name="name"
        placeholder="Name"
        aria-label="name"
      />
      <StyledInput
        type="email"
        name="email"
        placeholder="Email"
        aria-label="email"
      />
      <StyledTextArea placeholder="Type your message here..." />
      <StyledSubmitArea>
        <StyledCheckboxContainer>
          <StyledCheckboxInput type="checkbox" name="agreement" />
          <StyledLabel htmlFor="agreement">I agree to be contacted</StyledLabel>
        </StyledCheckboxContainer>
        <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
      </StyledSubmitArea>
    </StyledForm>
  );
}
