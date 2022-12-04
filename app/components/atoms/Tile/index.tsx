import { ThemeProvider } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { colors } from '~/common/constants';
import Headline from '../Headline';

import * as S from './styles';
import { formatDate } from './utils';

export type TileProps = {
  startDate: Date;
  endDate: Date | 'ongoing';
  company: string;
  role: string;
  responsibilities: Array<string>;
  position?: 'left' | 'right';
};

const Tile = ({
  startDate,
  endDate,
  company,
  role,
  responsibilities,
  position,
}: TileProps) => {
  return (
    <ThemeProvider theme={{ position: position || 'left' }}>
      <S.Wrapper>
        <S.Date>{formatDate(startDate, endDate, 'MMM yyyy')}</S.Date>
        <Headline
          text={company}
          tag={'h5'}
          style={{
            padding: '0px',
            color: colors.offBlack,
            background: 'lightgray',
          }}
        />
        <Headline
          text={role}
          tag={'h6'}
          style={{
            padding: '2px 4px',
            color: colors.offBlack,
            background: colors.secondaryBackground,
          }}
        />
        <S.List>
          {responsibilities.map((responsibility: string) => (
            <S.Responsibility key={uuidv4()}>{responsibility}</S.Responsibility>
          ))}
        </S.List>
      </S.Wrapper>
    </ThemeProvider>
  );
};

export default Tile;
