import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SettingIconPros {
  color?: string;
}

const SettingIcon = ({ color = '#fff' }: SettingIconPros) => (
  <Svg width={28} height={28} fill='none'>
    <Path
      fill={color}
      fillRule='evenodd'
      d='M3.5 18.666h6.961a1.167 1.167 0 0 1 0 2.334H3.5a1.167 1.167 0 1 1 0-2.334ZM16.333 8.167c0-.645.522-1.167 1.167-1.167h7a1.167 1.167 0 0 1 0 2.333h-7a1.167 1.167 0 0 1-1.167-1.166ZM2.333 8.167C2.333 7.522 2.855 7 3.5 7h.011a1.167 1.167 0 1 1 0 2.333H3.5a1.167 1.167 0 0 1-1.167-1.166ZM23.333 19.833c0-.644.522-1.166 1.167-1.166h.011a1.167 1.167 0 1 1 0 2.333H24.5a1.167 1.167 0 0 1-1.167-1.167ZM17.5 15.166a4.667 4.667 0 1 0 0 9.334 4.667 4.667 0 0 0 0-9.334ZM10.5 3.5a4.667 4.667 0 1 0 0 9.333 4.667 4.667 0 0 0 0-9.333Z'
      clipRule='evenodd'
    />
  </Svg>
);

export default SettingIcon;
