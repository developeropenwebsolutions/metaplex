import React from 'react';

export const AppLayout = React.memo((props: any) => {
    
  return (
    <>
        {props.children}
    </>
  );
});
