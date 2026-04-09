import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

interface HomeIconPros {
  color?: string;
}

const HomeIcon = ({ color = '#fff' }: HomeIconPros) => (
  <Svg width={28} height={28} fill='none'>
    <G clipPath='url(#a)'>
      <Path
        fill={color}
        d='m14.116 9.075-9.283 7.646v8.251a.806.806 0 0 0 .806.806l5.642-.015a.806.806 0 0 0 .801-.806V20.14a.806.806 0 0 1 .806-.806h3.222a.806.806 0 0 1 .805.806v4.815a.806.806 0 0 0 .806.808l5.64.016a.805.805 0 0 0 .805-.806v-8.257l-9.28-7.64a.614.614 0 0 0-.77 0Zm14.662 5.197-4.209-3.47V3.83a.604.604 0 0 0-.604-.604h-2.82a.604.604 0 0 0-.604.604v3.655l-4.507-3.708a2.417 2.417 0 0 0-3.071 0L.218 14.272a.605.605 0 0 0-.08.85l1.284 1.561a.603.603 0 0 0 .85.082l11.844-9.754a.614.614 0 0 1 .77 0l11.843 9.755a.604.604 0 0 0 .851-.081l1.284-1.56a.602.602 0 0 0-.086-.853Z'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill={color} d='M0 0h29v29H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default HomeIcon;
