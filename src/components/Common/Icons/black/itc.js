import React from 'react';

const SvgItc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <path
      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.248-12.65v-6.677a1.153 1.153 0 0 0-.416-2.233 1.154 1.154 0 0 0-.779.297L17.225 7.4A1.16 1.16 0 0 0 16.088 6a1.16 1.16 0 0 0-1.15 1.34l-5.97 3.42a1.17 1.17 0 0 0-1.306-.207c-.437.207-.698.66-.658 1.138.04.478.375.882.84 1.013v6.616a1.153 1.153 0 0 0 .322 2.264c.236 0 .465-.07.658-.204l3.098 1.772v.035h.067l2.94 1.683A1.161 1.161 0 0 0 16.118 26a1.158 1.158 0 0 0 1.134-1.268l6.03-3.29c.36.196.797.189 1.15-.019.353-.208.57-.586.568-.993a1.166 1.166 0 0 0-.752-1.08zm-4.118-2.605h-.004l-.005-.027-.004-.062-.139-.067-.873-.52.913-.545.144-.067.009-.346h.004V9.827l2.533 1.452a1.192 1.192 0 0 0-.044.315c0 .55.392 1.024.935 1.133v6.57a1.16 1.16 0 0 0-.797 1.674l-2.672 1.457zm-4.04-8.436c.312 0 .61-.125.828-.347L19.53 9.46v5.607l-1.052.63-1.42-.843a1.025 1.025 0 0 0-1.016-1.177 1.025 1.025 0 0 0-1.01 1.217l-1.375.808-1.087-.648V9.441l2.65-1.519c.22.246.536.387.868.387zm.68 8.422a1.035 1.035 0 0 0-1.428-.022l-1.065-.635 1.07-.621a1.035 1.035 0 0 0 1.418-.023l1.088.649zm-7.528 4.147c.128-.303.12-.646-.024-.943s-.406-.519-.724-.61V12.7c.6-.171.956-.785.801-1.385l2.628-1.506v5.435h.004v.213l.35.178.751.444-.832.488-.224.133-.045.045-.004.177v5.492zm6.848 2.793a1.162 1.162 0 0 0-.998.56l-2.525-1.448v-5.714l1.074-.626 1.392.826c-.01.06-.016.12-.018.182 0 .564.461 1.02 1.03 1.02s1.03-.456 1.03-1.02a.824.824 0 0 0-.014-.151l1.419-.853 1.007.6v5.736l-2.47 1.35a1.156 1.156 0 0 0-.927-.462z"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgItc;