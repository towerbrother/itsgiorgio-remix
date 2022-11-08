import * as S from './styles';
import type { IBurgerMenuIconProps } from './types';

export default function BurgerMenuIcon({ setShow }: IBurgerMenuIconProps) {
  return (
    <S.Container>
      <S.Button
        aria-label="burgerMenuIcon"
        onClick={() => setShow((prev) => !prev)}
        onBlur={() => setShow(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: '#000' }}
        >
          <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
        </svg>
      </S.Button>
    </S.Container>
  );
}
