import Button from '~/components/atoms/Button';
import Input from '~/components/atoms/Input';
import * as S from './styles';

export default function ContactForm() {
  return (
    <S.Form>
      <S.Title>Contact</S.Title>
      <S.InnerWrapper>
        <S.SubTitle>Let's help each other, shall we!?</S.SubTitle>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          aria-label="name"
          autoComplete="off"
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="email"
          autoComplete="off"
        />
        <S.TextArea placeholder="Type your message here..." />
        <S.SubmitArea>
          <S.CheckboxWrapper>
            <Input
              name="agreement"
              label="I agree to be contacted"
              type="checkbox"
            />
          </S.CheckboxWrapper>
          <Button type="submit">Submit</Button>
        </S.SubmitArea>
      </S.InnerWrapper>
    </S.Form>
  );
}
