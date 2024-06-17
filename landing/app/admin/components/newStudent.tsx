"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { PlusIcon } from "lucide-react";

export default function NewStudent() {
  return (
    <Drawer>
      <DrawerTrigger>
        <button className="fixed bottom-4 right-4 flex size-10 items-center justify-center rounded-full bg-black text-yellow-400">
          <PlusIcon strokeWidth={3} />
        </button>
      </DrawerTrigger>
      <DrawerContent
        dir="ltr"
        className="border-0 bg-black/60 px-2 pb-4 text-white backdrop-blur"
      >
        <DrawerHeader>
          <DrawerTitle>Add New Student</DrawerTitle>
        </DrawerHeader>

        <p className="text-sm text-zinc-700">Info</p>
        <div className="border-4 border-dashed border-zinc-900 p-2">
          <label>
            <span className="text-sm text-zinc-200">Name</span>
            <input
              className="mt-1 block w-full rounded-md border border-white/30 bg-neutral-900 px-2 py-0.5"
              type="text"
            />
          </label>

          <label className="mt-2">
            <span className="text-sm text-zinc-200">Phone</span>
            <input
              className="mt-1 block w-full rounded-md border border-white/30 bg-neutral-900 px-2 py-0.5"
              type="tel"
            />
          </label>
        </div>

        <p className="mt-2 text-sm text-zinc-700">Groups</p>
        <div className="border-4 border-dashed border-zinc-900 p-2"></div>

        <button className="mt-2 block w-full rounded-md bg-white font-bold text-black py-1">

          Scheduler
        </button>
      </DrawerContent>
    </Drawer>
  );
}
