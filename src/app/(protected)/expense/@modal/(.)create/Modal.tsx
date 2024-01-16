"use client";

import React from "react";
import { createPortal } from "react-dom";

export default function Modal(props: { children: React.ReactNode }) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  React.useEffect(() => {
    if (!dialogRef.current!.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  return createPortal(
    <>
      <main className="h-screen w-screen bg-black opacity-50 absolute top-0 bottom-0 left-0 right-0 z-100">
        <dialog ref={dialogRef} className="w-full min-h-1/2 rounded-xl">
          {props.children}
        </dialog>
      </main>
    </>,
    document.getElementById("modal-root")!
  );
}
