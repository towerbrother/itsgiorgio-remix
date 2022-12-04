import { v4 as uuidv4 } from 'uuid';

import type { TileProps } from '~/components/atoms/Tile';
import Tile from '~/components/atoms/Tile';

import * as S from './styles';

export type TimelineProps = {
  tiles: Array<TileProps>;
};

const Timeline = ({ tiles }: TimelineProps) => {
  return (
    <S.Wrapper>
      {tiles.map((tile, index) => (
        <Tile
          key={uuidv4()}
          {...tile}
          position={index % 2 === 0 ? 'right' : 'left'}
        />
      ))}
    </S.Wrapper>
  );
};

export default Timeline;
