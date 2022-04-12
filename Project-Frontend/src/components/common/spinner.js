import React from 'react';
import spinner from '../../img/spinner.gif';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
export default () => {
  return (
    <div style={{padding:"10%",margin:"auto",textAlign:"center"}}>
      <Dimmer active inverted>
        <Loader size="big" inverted content='Loading' />
      </Dimmer>
    </div>
  );
};
