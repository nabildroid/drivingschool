
import {
  PlusIcon,
  QrCodeIcon,
  UsersRoundIcon,
  CalendarClockIcon,
} from "lucide-react";
import NewStudent from "./components/newStudent";

export default function Page() {
  return (
    <div dir="ltr" className="w-full bg-slate-50">
      <div className="relative mx-auto flex h-lvh w-full max-w-sm flex-col lg:shadow-md">
        <div className="relative w-full overflow-hidden p-4">
          <div className="overflow-hidden w-[calc( 100% + 20px )] absolute -inset-x-2 -top-5 h-full rounded-b-[30%] bg-gradient-to-b from-[#FCF300] to-[#C69900]">
            <img className="float-right -mr-[25%] opacity-50" src="/texture.png" />
          </div>

          <div className="relative">
            <div className="flex items-center justify-between">
              <a className="font-bold">Autoecole Salim</a>

              <a>
                <QrCodeIcon />
              </a>
            </div>

            <div className="mt-4 flex items-center justify-around">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <div className="inline-flex flex-col items-center rounded-lg bg-black/25 px-1 py-0.5 ring ring-black/5">
                    <p className="text-base font-bold">{i + 5}</p>
                    <p className="s text-sm text-black/50">Mars</p>
                  </div>
                ))}
            </div>

            <div className="mx-0 mt-4 grid grid-cols-2 items-center justify-around gap-8 rounded-xl bg-white p-2 ring-2 ring-black/5">
              <button className="rounded-md bg-black py-1 text-center font-bold text-white">
                Code
              </button>
              <button className="rounded-md bg-slate-100 py-1 text-center font-bold text-black ring-2 ring-black/10">
                Conduit
              </button>
            </div>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-8 gap-4 overflow-y-auto pb-12 pl-6 pr-4">
          <div className="col-span-2 text-sm text-zinc-400">Time</div>
          <div className="col-span-6 text-sm text-zinc-400">Group</div>
          {Array(10)
            .fill("")
            .map((_, i) => (
              <>
                <div className="col-span-2 py-1.5">{i + 9}am</div>
                <div className="col-span-6 rounded-md bg-white p-2 shadow ring-2 ring-black/5">
                  <h1 className="text-sm font-bold">Group A_1</h1>
                  <div className="inline-flex items-center gap-2 text-xs font-medium">
                    <UsersRoundIcon className="size-4 text-zinc-300" />
                    <span className="text-zinc-500">20 people</span>
                  </div>
                  <div className="ml-2 inline-flex items-center gap-2 text-xs font-medium">
                    <CalendarClockIcon className="size-4 text-zinc-300" />
                    <span className="text-zinc-500">20 people</span>
                  </div>
                </div>
              </>
            ))}
        </div>

     <NewStudent />
      </div>
    </div>
  );
}
