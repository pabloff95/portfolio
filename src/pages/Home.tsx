export default function Home() {
  return (
    <>
      <section className="h-[100vh] w-full">
        <div className="flex h-full w-full justify-center items-center px-4">
          <div className="w-[40%]">
            <img
              className="rounded-3xl m-auto"
              src="./public/images/profile.png"
              alt="Profile picture"
            />
          </div>
          <div className="font-impact text-center w-[60%] px-2 flex flex-col gap-8">
            <p className="text-5xl leading-snug">
              Welcome! <br />I am Pablo, a{" "}
              <span className="text-primary">web developer</span> especiallized
              in <span className="text-primary">frontend</span> technologies
            </p>
            <div className="m-auto w-[80%] bg-font-base h-1 rounded-lg"></div>
            <div className="mt-2 flex gap-12 w-full justify-center">
              <div className="py-3 px-6 border-2 text-lg rounded-md">
                <span>Web development</span>
              </div>
              <div className="py-3 px-6 border-2 text-lg rounded-md">
                <span>UI Design</span>
              </div>
              <div className="py-3 px-6 border-2 text-lg rounded-md">
                <span>User Experience</span>
              </div>
              <div className="py-3 px-6 border-2 text-lg rounded-md">
                <span>Fullstack</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
