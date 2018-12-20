import React from 'react';

const SvgXdn = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <path
      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.691-20v8h2.738c1.322 0 3.683-.803 3.683-4s-2.36-4-3.683-4zm1.51 6.38v-4.76h1.134c.944 0 2.077.578 2.077 2.38s-1.133 2.38-2.077 2.38zM20.77 12v8h.566v-6.872L26.433 20H27v-8h-.567v7.026L21.335 12zM5 12v2h1.888v-2zm2.833 0v2H9.72v-2zm2.832 0v2h1.889v-2zm0 3v2h1.889v-2zm0 3v2h1.889v-2zm-2.832-3v2H9.72v-2z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgXdn;