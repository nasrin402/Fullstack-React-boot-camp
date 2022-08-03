import React from 'react';

const BoilingVerdict = (props) => {
    const temperature = (props.celsius >= 100)
    return(
      <>
      {temperature ? ("Water will be boiled") : ("Water will not be boiled")}
      </>
    )}

export default BoilingVerdict;
