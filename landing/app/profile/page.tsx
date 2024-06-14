export default function Page() {
  return (
    <div className="w-full h-screen bg-slate-100">
      <div className="mx-auto flex flex-col h-screen max-w-sm lg:shadow-md w-full ">
        <div className="flex justify-between text-lg items-center bg-black px-3 py-1.5">
          <a
            href="#"
            className="shrink-0 px-2 py-0.5 rounded-lg font-bold text-black bg-yellow-400"
          >
            0571895845
          </a>

          <a href="#" className="shrink-0 font-bold text-white">
            Salime Autoecole
          </a>
        </div>

        <div className="z-20 mt-4 px-3 select-none ">
          <div className="flex relative aspect-[23/10] overflow-hidden ring-4 ring-black rounded-xl shadow-lg">
            <img
              src="/card.png"
              className="absolute w-full  h-full rounded-xl inset-0"
            />

            <div className="absolute w-4 left-10 -inset-y-2 bg-black/10" />

            <span className="absolute bg-clip-text bg-gradient-to-r from-[#CCA5A5] to-[#986A40]  text-4xl inset-x-0 text-center text-transparent mix-blend-color-burn opacity-10 ">
              Salime Autoecole
            </span>
            <span className="absolute bottom-0 bg-clip-text bg-gradient-to-r from-[#CCA5A5] to-[#986A40]  text-4xl inset-x-0 text-center text-transparent mix-blend-color-burn opacity-10 ">
              Salime Autoecole
            </span>
            <span className="absolute top-1/2 -translate-y-1/2 bg-clip-text bg-gradient-to-r from-[#CCA5A5] to-[#986A40]  text-4xl inset-x-0 text-center text-transparent mix-blend-color-burn opacity-10 ">
              Salime Autoecole
            </span>

            <img
              src="/qr.png"
              className="relative mix-blend-darken mx-2 my-4"
            />

            <div className="relative text-left flex-1 ml-2 my-5 inline-flex flex-col">
              <h1 className="text-xl font-bold">Card</h1>

              <span className="flex-1" />

              <p className="text-lg">ID:87778788</p>
              <p className="text-lg">Group: 014</p>
            </div>
          </div>
        </div>

        <div className="relative flex-1 z-10">
          <div className="absolute top-0 w-3 left-1/2 -translate-x-1/2 -inset-y-6 bg-black" />
          <div className="absolute z-20 top-0 inset-x-0 h-4 from-slate-100 to-transparent bg-gradient-to-b" />

          <div className="absolute z-10 inset-0   flex flex-col gap-4  overflow-y-auto py-4">
            {Array(10)
              .fill("")
              .map(() => (
                <div className="relative z-10 bg-white border border-zinc-300 p-4"></div>
              ))}
          </div>

          <div className="absolute z-20 bottom-0 inset-x-0 h-4 from-slate-100 to-transparent bg-gradient-to-t" />

        </div>

        <div className="z-20 h-40 bg-black/85 backdrop-blur rounded-t-2xl "></div>
      </div>
    </div>
  );
}
