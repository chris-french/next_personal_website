import Border from './Border';

function Banner({ darkMode }) {
  return (
    <Border
      style={{ zIndex: 1 }}
      borderColor={darkMode ? 'light' : 'dark'}
      className={`resume-tooltip ${
        darkMode ? 'bg-off-dark text-light' : 'text-dark bg-alt-light'
      } 
            absolute text-center p-2 w-[800px] pl-40 h-[100px] rotate-45 
            left-full transform -translate-x-2/3 -translate-y-1/4`}
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
