import React, { memo } from 'react';

const SplashScreen = () => {
  return (
    <div id="splash-screen" className="splash-screen">
      <span className="loader"></span>
    </div>
  );
};

export default memo(SplashScreen);
