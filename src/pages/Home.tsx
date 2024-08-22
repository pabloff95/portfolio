export default function Home() {
  return (
    <>
      <section className="h-[100vh] w-full overflow-hidden">
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
