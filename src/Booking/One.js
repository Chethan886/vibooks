import React from 'react';
import myPdf from './one.pdf';

const One = () => {
  return (
    <div className='pdf'>
      <embed src={myPdf} width="1500" height="900" type="application/pdf" />
    </div>
  );
};

export default One;