import React from 'react';

const SvgAct = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <path
      fill="#FFF"
      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM13.77 6.5a.87.87 0 0 0-.759.444L6.105 19.263a.87.87 0 0 0 0 .85l2.21 3.942a.87.87 0 0 0 .758.445h13.854a.87.87 0 0 0 .759-.445l2.209-3.942a.87.87 0 0 0 0-.85L18.989 6.944a.87.87 0 0 0-.759-.444h-4.46zM16 11.401l4.653 8.287h-9.306L16 11.401z"
    />
  </svg>
);

export default SvgAct;