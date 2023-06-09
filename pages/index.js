import { useState, useEffect } from 'react';
import HomeLink from '../components/HomeLink';
import resumeData from '../utils/resumeData';
import aboutData from '../utils/aboutData';
import Toggle from '../components/Toggle';
import Resume from '../components/resume';
import AboutPage from '../components/AboutPage';
import Border from '../components/Border';
import Footer from '../components/Footer';
import Link from 'next/link';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('About');
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    } else {
      return false;
    }
  });

  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      }
    }

    const getWindowDimensions = () => {
      const { innerWidth: width, innerHeight: height } = window;
      return { width, height };
    };

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    setWindowDimensions(getWindowDimensions());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, [darkMode]);

  const context = {
    headerHeight: '100px',
    isMobile: windowDimensions.width < 800,
    windowDimensions: windowDimensions
  };

  return (
    <div className={`h-screen flex flex-col ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <div
        className={`flex flex-col items-center h-full ${
          darkMode ? 'bg-off-dark' : 'bg-off-light'
        }`}
      >
        <div
          style={{ zIndex: 10 }}
          className={`flex flex-col ${
            darkMode ? 'bg-off-dark' : 'bg-off-light'
          }`}
        >
          <div
            className={`w-screen flex justify-center ${
              darkMode ? 'bg-off-dark' : 'bg-off-light'
            }`}
          >
            <Border
              style={{ zIndex: 12 }}
              shadow="shadow-lg"
              borderWidth="border-2"
              borderRadius="md:rounded-lg"
              className={`

              overflow-hidden
              border-opacity-75
              ring ring-opacity-75 ring-inset
              md:w-[92vw]
              flex
              
              ${darkMode ? 'bg-alt-dark ring-off-light' : 'bg-alt-light ring-off-dark border-dark '}
              fixed w-full md:top-4 z-10 md:pl-[2em] md:pr-[2em] pb-3
               ${darkMode ? 'bg-alt-dark' : 'bg-alt-light'}`}
            >
              <div className="flex flex-col w-full">
              
              <div className="mx-auto">
                <p
                  className={`about-front-title md:pt-1 ${
                    darkMode ? 'text-alt-light' : 'text-alt-dark'
                  } font-bold underline-offset-auto underline`}
                >
                  chris french
                </p>
              </div>
              <div className="flex flex-row items-center gap-1 w-full pl-[1em]">
                <div className='flex-grow'></div>
                <div className="pt-[1vh] flex flex-row gap-2 md:pl-[8em] items-center flex-grow">
                  <HomeLink
                    name="About"
                    isSelected={selectedTab === 'About'}
                    onClick={() => setSelectedTab('About')}
                    darkMode={darkMode}
                  />
                  <HomeLink
                    name="Resume"
                    isSelected={selectedTab === 'Resume'}
                    onClick={() => setSelectedTab('Resume')}
                    darkMode={darkMode}
                  />
                  {/* TODO: CV link
                      <HomeLink 
                        name="CV" 
                        isSelected={selectedTab === 'CV'}
                        onClick={() => setSelectedTab('CV')} 
                        darkMode={darkMode} 
                      />
                    */}
                </div>
                <div className='w-[10em] md:pb-[1vh] pt-2 pr-4'>
                  <Border
                  borderColor={`${darkMode ? 'off-light' : 'off-dark'}`}
                  borderStyle=''
                    className={` md:h-[2.5em] pl-2 pr-2 pb-2 pt-1 drop-shadow-lg
                      transition 
                      duration-500 
                      rounded 
                      ${
                      darkMode ? 'text-off-light bg-alt-dark shadow-off-light' : 'text-off-dark bg-alt-light shadow-off-dark'
                    }`}
                  >
                    <Toggle
                      text={darkMode ? 'Dark Mode' : 'Light Mode'}
                      onToggled={setDarkMode}
                      id="dark_mode_toggle"
                      darkMode={darkMode}
                      checked={darkMode}
                    />
                  </Border>
                </div>   
              </div>
            </div>
          </Border>
        </div>
      </div>
      <div
        style={{ zIndex: 8 }}
        className={`pb-[3.2em] pl-1 pr-1  mt-[7em] md:mt-[10em] h-full w-full items-center overflow-y-hidden`}
      >
        {selectedTab === 'Resume' && (
          <Resume
            resumeData={resumeData}
            darkMode={darkMode}
            context={context}
          />
        )}
        {selectedTab === 'About' && (
          <AboutPage
            aboutData={aboutData}
            darkMode={darkMode}
            context={context}
          />
        )}
        {/* selectedTab === 'CV' && <CV /> */}

        <Footer
          style={{ zIndex: 7 }}
          className="fixed inset-x-0 mt-10 bottom-0 flex flex-row"
          darkMode={darkMode}
        >
          <p>
            This static site was created with Next.js, Tailwinds.css, and React
            Flow.
          </p>
          <Link href="https://github.com/chris-french/next_personal_website">
          <a className="ml-auto font-bold h-full w-[10em]">
            Fork me on GitHub.
          </a>
          </Link>
        </Footer>
      </div>
    </div>
  </div>
  );
};

export default Home;
