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
  }, [darkMode]);

  const context = {
    headerHeight: '100px',
  };

  return (
    <div className={`flex flex-col ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <div
        className={`flex flex-col items-center ${
          darkMode ? 'bg-off-dark' : 'bg-off-light'
        }`}
      >
        <div
          style={{ zIndex: 10 }}
          className={`flex mb-auto self-stretch ${
            darkMode ? 'bg-off-dark' : 'bg-off-light'
          }`}
        >
          <div
            className={`h-[100px] w-screen flex justify-center ${
              darkMode ? 'bg-off-dark' : 'bg-off-light'
            }`}
          >
            <Border
              style={{ zIndex: 12 }}
              shadow="shadow-lg"
              borderWidth="border-2"
              borderRadius="rounded-lg"
              className={`
              ring-inset overflow-hidden

              border-opacity-75

              ring
              ring-opacity-75
              
              w-[95vw]
              
              ${darkMode ? 'bg-alt-dark ring-off-light' : 'bg-alt-light ring-off-dark border-dark '} 
              fixed w-full top-4 z-10 items-center  flex justify-between pr-10 pl-10 pb-2
               ${darkMode ? 'bg-alt-dark' : 'bg-alt-light'}`}
            >
              <div className="flex flex-col w-full">
                <div className="mx-auto">
                  <p
                    className={`about-front-title pt-1 ${
                      darkMode ? 'text-alt-light' : 'text-alt-dark'
                    } font-bold underline-offset-auto underline`}
                  >
                    chris french
                  </p>
                </div>
                <div className="flex flex-row w-full pl-[8em]">
                  <div className="pt-[1vh] mx-auto ">
                    <div className="flex flex-row gap-1 mb-auto ">
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
                  </div>
                  <Border
                  borderColor={`${darkMode ? 'off-light' : 'off-dark'}`}
                  borderStyle=''
                    className={`mb-2 p-1 drop-shadow-lg
                      transition 
                      duration-500 
                      rounded 
                      border-spacing-2
                      border-2
                      
                      ${
                      darkMode ? 'text-off-light bg-alt-dark shadow-off-light' : 'text-off-dark bg-alt-light shadow-off-dark'
                    }`}
                  >
                    <Toggle
                      text={darkMode ? 'Dark Mode' : 'Light Mode'}
                      onToggled={setDarkMode}
                      id="dark_mode_toggle"
                      checked={darkMode}
                    />
                  </Border>
                </div>
              </div>
            </Border>
          </div>
        </div>

        <div
          style={{ zIndex: 8 }}
          className={`pb-[9.2em] pl-1 pr-1 pt-[1em] h-screen w-full flex items-center`}
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
        </div>

        <Footer
          style={{ zIndex: 1 }}
          className="fixed inset-x-0 bottom-0 flex flex-row"
          darkMode={darkMode}
        >
          <p>
            This static site was created with Next.js, Tailwinds.css, and React
            Flow.
          </p>
          <p className="ml-auto font-bold">
            Fork me on{' '}
            <span className="font-bold">
              <Link href="https://github.com/chris-french/next_personal_website">
                GitHub
              </Link>
            </span>
            .
          </p>
        </Footer>
      </div>
    </div>
  );
};

export default Home;
