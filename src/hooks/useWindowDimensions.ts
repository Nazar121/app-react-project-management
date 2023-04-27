import React from 'react';

export const useWindowDimensions = () => {
  const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const getHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  const [dimensions, setDimensions] = React.useState({
    width: getWidth(),
    height: getHeight(),
  });

  React.useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId: any = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);

      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => {
        setDimensions({
          width: getWidth(),
          height: getHeight(),
        });
      }, 150);
    };

    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return dimensions;
};
