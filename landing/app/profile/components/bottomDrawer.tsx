"use client";

import { useState } from "react";
import { Drawer } from "vaul";
import { clsx } from "clsx";
import { ThumbsUpIcon, CircleSlashIcon } from "lucide-react";

export default function BottomDrawer(props: { startHeightPx: string }) {
  const [snap, setSnap] = useState<number | string | null>(props.startHeightPx);

  return (
    <>
      <div
        style={{ height: `calc( ${props.startHeightPx} - 20px )` }}
        className="z-20 bg-slate-100"
      />

      <Drawer.Root
        snapPoints={[props.startHeightPx, 0.9]}
        activeSnapPoint={snap}
        setActiveSnapPoint={setSnap}
        modal={false && snap != props.startHeightPx}
        dismissible={false}
        open
      >
        <Drawer.Overlay className="fixed inset-0 z-30 bg-black/40" />
        <Drawer.Portal>
          <Drawer.Content
            onClick={() => (snap == props.startHeightPx ? setSnap(0.9) : "")}
            className="fixed bottom-0 left-0 right-0 z-30 mx-[-1px] h-full flex  max-h-[97%] flex-col rounded-t-2xl bg-black/85 pb-4 pt-1 backdrop-blur"
          >
            <div className="z-20">
              <div className="mb-2 text-center">
                <div className="inline-block h-2 w-1/3 rounded-full bg-zinc-500" />
              </div>

              <div className="flex items-center justify-around">
                <button className="rounded-full bg-white/95 p-1.5 ring ring-zinc-900">
                  <ThumbsUpIcon strokeWidth={3} className="size-6" />
                </button>

                <img
                  className="aspect-video rounded-md ring ring-zinc-900"
                  src="/code.png"
                />

                <button className="rounded-full bg-white/95 p-1.5 ring ring-zinc-900">
                  <CircleSlashIcon strokeWidth={3} className="size-6" />
                </button>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
