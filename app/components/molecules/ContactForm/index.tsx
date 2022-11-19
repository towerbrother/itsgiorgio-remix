import * as S from './styles';

export default function ContactForm() {
  return (
    <S.Form>
      <S.Title>Contact</S.Title>
      <S.InnerWrapper>
        <S.SubTitle>Let's help each other, shall we!?</S.SubTitle>
        <S.Input
          type="text"
          name="name"
          placeholder="Name"
          aria-label="name"
          autoComplete="off"
        />
        <S.Input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="email"
          autoComplete="off"
        />
        <S.TextArea placeholder="Type your message here..." />
        <S.SubmitArea>
          <S.CheckboxContainer>
            <S.CheckboxInput type="checkbox" name="agreement" />
            <S.Label htmlFor="agreement">I agree to be contacted</S.Label>
          </S.CheckboxContainer>
          <S.SubmitButton type="submit">Submit</S.SubmitButton>
        </S.SubmitArea>
      </S.InnerWrapper>
    </S.Form>
  );
}
