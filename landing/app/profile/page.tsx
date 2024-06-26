import { CircleSlashIcon, ThumbsUpIcon } from "lucide-react";
import BottomDrawer from "./components/bottomDrawer";

export default function Page() {
  return (
    <div className="h-lvh w-full bg-slate-100">
      <div className="mx-auto flex h-full w-full max-w-sm flex-col lg:shadow-md">
        <div className="flex items-center justify-between bg-black px-3 py-1.5 text-lg">
          <a
            href="#"
            className="shrink-0 rounded-lg bg-yellow-400 px-2 py-0.5 font-bold text-black"
          >
            0571895845
          </a>

          <a href="#" className="shrink-0 font-bold text-white">
            Salime Autoecole
          </a>
        </div>

        <div className="z-20 mt-4 select-none px-3">
          <div className="relative flex aspect-[23/10] overflow-hidden rounded-xl shadow-lg ring-4 ring-black">
            <img
              src="/card.png"
              className="absolute inset-0 h-full w-full rounded-xl"
            />

            <div className="absolute -inset-y-2 left-10 w-4 bg-black/10" />

            <span className="absolute inset-x-0 bg-gradient-to-r from-[#CCA5A5] to-[#986A40] bg-clip-text text-center text-4xl text-transparent opacity-10 mix-blend-color-burn">
              Salime Autoecole
            </span>
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-[#CCA5A5] to-[#986A40] bg-clip-text text-center text-4xl text-transparent opacity-10 mix-blend-color-burn">
              Salime Autoecole
            </span>
            <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#CCA5A5] to-[#986A40] bg-clip-text text-center text-4xl text-transparent opacity-10 mix-blend-color-burn">
              Salime Autoecole
            </span>

            <img
              src="/qr.png"
              className="relative mx-2 my-4 mix-blend-darken"
            />

            <div className="relative my-5 ml-2 inline-flex flex-1 flex-col text-left">
              <h1 className="text-xl font-bold">Card</h1>

              <span className="flex-1" />

              <p className="text-lg">ID:87778788</p>
              <p className="text-lg">Group: 014</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex-1">
          <div className="absolute -inset-y-6 left-1/2 top-0 w-2 -translate-x-1/2 bg-black" />
          <div className="absolute inset-x-0 top-0 z-20 h-4 bg-gradient-to-b from-slate-100 to-transparent" />

          <div
            dir="ltr"
            className="absolute inset-0 z-10 flex flex-col pb-20 gap-4 overflow-y-auto px-2 py-4"
          >
            {Array(10)
              .fill("")
              .map(() => (
                <div className="relative z-10 flex items-center justify-between rounded-md border border-zinc-200 bg-white px-4 py-1 shadow-sm">
                  <div>
                    <p className="text-md font-bold">11 am</p>
                    <p className="text-md font-bold text-zinc-600">
                      15/01/2025
                    </p>
                  </div>
                  <p className="text-md font-bold">Code</p>
                </div>
              ))}
          </div>

          <div className="absolute inset-x-0 bottom-0 z-20 h-4 bg-gradient-to-t from-slate-100 to-transparent" />
        </div>


        <BottomDrawer startHeightPx="148px" />
      </div>
    </div>
  );
}
