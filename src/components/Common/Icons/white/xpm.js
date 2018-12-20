import React from 'react';

const SvgXpm = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <path
      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8-16.438V8h-3.455v7.475c0 3.313-2.854 3.153-2.854 3.153V8h-3.47v10.628s-2.766.029-2.766-3.11V8H8v7.24c0 6.015 5.284 6.234 6.207 6.234v1.168h-2.123v1.562h2.127V26h3.48v-1.796h2.224v-1.562h-2.224V21.49c2.883 0 6.309-1.504 6.309-5.927z"
      fill="#fff"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgXpm;