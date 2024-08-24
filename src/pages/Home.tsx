import { useEffect, useState } from "react";

interface dimensionsInterface {
  screenWidth: number;
  screenHeight: number;
  buttonWidth: number;
  buttonHeight: number;
  asideWidth: number;
  asideHeight: number;
}

export default function Home() {
  const [dimensions, setDimesions] = useState<dimensionsInterface | null>(null);

  useEffect(() => {
    const buttons =
      document.getElementsByClassName("menu-button").length > 0
        ? Array.from(document.getElementsByClassName("menu-button"))
        : [];
    const aside = document.querySelector("aside");

    if (buttons.length > 0 && aside) {
      setDimesions({
        screenWidth: window.innerWidth,
        screenHeight: window.window.innerHeight,
        buttonWidth: buttons[0].getBoundingClientRect().width,
        buttonHeight: buttons[0].getBoundingClientRect().height,
        asideWidth: aside.getBoundingClientRect().width,
        asideHeight: aside.getBoundingClientRect().height,
      });

      console.log({ dimensions });
    }
  }, [document.getElementsByClassName("menu-button").length]);

  return (
    <>
      <section className="h-[100vh] w-full overflow-hidden">
        {dimensions && (
          <>
            <p>screenWidth: {dimensions?.screenWidth}</p>
            <p>screenHeight: {dimensions?.screenHeight}</p>
            <p>buttonWidth: {dimensions?.buttonWidth}</p>
            <p>buttonHeight: {dimensions?.buttonHeight}</p>
            <p>asideWidth: {dimensions?.asideWidth}</p>
            <p>asideHeight: {dimensions?.asideHeight}</p>
          </>
        )}
        <div className="flex flex-col lg:flex-row h-full w-full justify-center items-center px-4">
          <div className="mb-6 lg:mb-0 w-[70%] lg:w-[40vw] hidden-animation hidden-animation-left">
            <img
              className="rounded-3xl m-auto"
              src="images/profile.jpg"
              alt="Profile picture"
            />
          </div>
          <div className="font-impact text-center w-full md:w-[60vw] flex flex-col gap-8 hidden-animation hidden-animation-right">
            <p className="text-3xl md:text-4xl xl:text-5xl leading-snug">
              Welcome! <br />I am Pablo, a{" "}
              <span className="text-primary">web developer</span> especiallized
              in <span className="text-primary">frontend</span>
            </p>
            <div className="m-auto w-[80%] bg-font-base h-1 rounded-lg"></div>
            <div className="mt-2 flex flex-row gap-4 2xl:gap-12 w-full justify-center">
              <div className="w-fit py-1 lg:py-2 2xl:py-3 px-2 lg:px-4 2xl:px-6 border-2 border-font-base lg:text-md 2xl:text-lg rounded-md flex items-center justify-center">
                <span>Web development</span>
              </div>
              <div className="w-fit py-1 lg:py-2 2xl:py-3 px-2 lg:px-4 2xl:px-6 border-2 border-font-base lg:text-md 2xl:text-lg rounded-md flex items-center justify-center">
                <span>UI Design</span>
              </div>
              <div className="w-fit py-1 lg:py-2 2xl:py-3 px-2 lg:px-4 2xl:px-6 border-2 border-font-base lg:text-md 2xl:text-lg rounded-md flex items-center justify-center">
                <span>User Experience</span>
              </div>
              <div className="hidden xl:flex py-1 lg:py-2 2xl:py-3 px-2 lg:px-4 2xl:px-6 border-2 border-font-base lg:text-md 2xl:text-lg rounded-md items-center justify-center">
                <span>Fullstack</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
