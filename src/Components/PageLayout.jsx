export default function PageLayout({title, imgUrl, children}) {
  return (
    <>
      <div className="background-image bg-1"></div>
      <div className="background-image bg-2"></div>
      <div className="background-image bg-3"></div>
      <div className="background-image bg-4"></div>

      <div className="glass-layer"></div>

      <div className="content">
        <div className={`bg-[url('${imgUrl}')] bg-cover bg-no-repeat h-[480px]`}>
          <div className="w-full h-full flex flex-col">
            <div className="py-5 bg-primary bg-opacity-20">Header</div>
            <div className="px-52 flex items-center font-playfair flex-grow">
              <p className="text-secondary font-extrabold text-5xl leading-normal">
                {title}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
            {children}
        </div>
      </div>
    </>
  );
}
