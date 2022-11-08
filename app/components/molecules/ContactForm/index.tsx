import * as S from './styles';

export default function ContactForm() {
  return (
    <S.Form>
      <S.Title>Let's connect!</S.Title>
      <S.Input type="text" name="name" placeholder="Name" aria-label="name" />
      <S.Input
        type="email"
        name="email"
        placeholder="Email"
        aria-label="email"
      />
      <S.TextArea placeholder="Type your message here..." />
      <S.SubmitArea>
        <S.CheckboxContainer>
          <S.CheckboxInput type="checkbox" name="agreement" />
          <S.Label htmlFor="agreement">I agree to be contacted</S.Label>
        </S.CheckboxContainer>
        <S.SubmitButton type="submit">Submit</S.SubmitButton>
      </S.SubmitArea>
    </S.Form>
  );
}
