import * as React from 'react';

export const BuildingIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='currentColor'
      height='1em'
      width='1em'
      {...props}
    >
      <path d='M18 2H6c-1.103 0-2 .897-2 2v17a1 1 0 001 1h14a1 1 0 001-1V4c0-1.103-.897-2-2-2zm0 18H6V4h12v16z' />
      <path d='M8 6h3v2H8zm5 0h3v2h-3zm-5 4h3v2H8zm5 .031h3V12h-3zM8 14h3v2H8zm5 0h3v2h-3z' />
    </svg>
  );
};
