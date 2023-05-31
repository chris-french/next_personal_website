import React from 'react';
import Border from './Border';
import Link from 'next/link';

const ImageComponent = ({ data }) => {
  const { imagePath, darkMode } = data;
  
  return (
    <Border
      className={`p-1 ${darkMode ? 'bg-dark' : 'bg-light'}`}
      borderRadius="rounded-2xl"
    >
      <div
        className={`flex flex-col rounded-2xl p-2 ${
          darkMode ? 'bg-off-light' : 'bg-off-dark'
        }`}
      >
        <div
          className={`p-2 pb-4 mt-4 text-center items-center md:w-[400px] rounded-2xl ${
            darkMode
              ? 'bg-off-light text-off-dark'
              : 'text-off-light bg-off-dark'
          }`}
        >
          <h2>Created in a weekend with help from ChatGPT-4 🤓</h2>
          <h3>(Styling took longer 😞)</h3>
        </div>
        <img
          
          src={imagePath}
          alt="Logo auto-generated from stable diffusion: the theme is 'create a website with ChatGPT in a weekend'."
          width={'400px'}
          height={'400px'}
          className="rounded-full pt-1"
        />

        <div
          className={`p-2 mt-4 text-center items-center md:w-[400px] rounded-2xl ${
            darkMode
              ? 'bg-off-light text-off-dark'
              : 'text-off-light bg-off-dark'
          }`}
        >
          <div className="font-bold w-[350px] mx-auto">
            <p>
              The above image was created using{' '}
              <span className="text-highlight font-bold">
                <Link href="https://stablediffusionweb.com/#demo">
                  Stable Diffusion
                </Link>
              </span>{' '}
              using the following <b>prompt</b>:
            </p>
          </div>
          <div
            className={`mt-4 pt-2 image-caption rounded-2xl flex flex-row ${
              darkMode
                ? 'bg-alt-dark text-alt-light'
                : 'text-alt-light bg-alt-dark'
            }`}
          >
            <div>
              <span className="pl-4 text-9xl text-alt-light">&ldquo;</span>
            </div>
            <div
              className={`p-1 text-sm ${
                darkMode ? 'text-off-light' : 'text-off-light'
              }`}
            >
              <p className="p-3">
                Create a circular logo using ChatGPT to design a website in a
                weekend. The website is built with React, Next.js, and Tailwind
                CSS. The logo features 1980&apos;s themed font styling and is 
                set against a white background. The image is always displayed in a
                circular shape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Border>
  );
};

export default ImageComponent;
