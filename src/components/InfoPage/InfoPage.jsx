import React from 'react';
import { SvgIcon as MuiSvgIcon, styled } from '@mui/material';

const SvgIcon = styled(MuiSvgIcon, {
  name: 'MopeimIcon',
  shouldForwardProp: (prop) => prop !== 'fill',
})(() => ({
  fill: 'none',
  stroke: 'currentColor',
 strokeLinecap: 'round',
 strokeLinejoin:  'round',
 strokeWidth:  '2.25px',
}));

SvgIcon.defaultProps = {
 viewBox: '0 0 24 24',
focusable: 'false',
 'aria-hidden': 'true',
 };

function InfoPage(props) {


    

  return (
    <>
      <div className="container">
        <h1>Info Page</h1>
      </div>
        <SvgIcon {...props}>
          <path d="M15,19.16V15.07a4.27,4.27,0,0,0,6,0h0a4.27,4.27,0,0,0,0-6h0a4.27,4.27,0,0,0-6,0l-3,3-3,3a4.27,4.27,0,0,1-6,0h0a4.27,4.27,0,0,1,0-6h0A4.27,4.27,0,0,1,9,9" />
        </SvgIcon>
      

      
    </>
  );
}


export default InfoPage;
