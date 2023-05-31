import Border from './Border';

function Banner({ darkMode, isMobile }) {
  return (
    <Border
      style={{ zIndex: 1 }}
      borderColor={darkMode ? 'light' : 'dark'}
      className={`resume-tooltip ${
        darkMode ? 'bg-alt-dark text-light' : 'text-dark bg-alt-light'
      } 
      ${isMobile ? 'hidden' : 'visible'}
            absolute text-center p-2 w-screen pl-[20vh] h-[5em] rotate-45 
            transform left-[40vw] top-[10vh]  `}
    >
      <p>
        Click and drag!
        <br />
        <br />
        Middle scroll mouse is zoom.
      </p>
    </Border>
  );
}

export default Banner;
