"use client";

import Image from "next/image";
import Modal from "react-modal";
import apple from "../../public/assets/apple_logo.png";
import android from "../../public/assets/android_logo.png";
import apk from "../../public/assets/apk_logo.png";
import qrcode from "../../public/assets/QR_code.png";

import { useRef, useState } from "react";

type ButtonRef = React.RefObject<HTMLButtonElement>;

export function Header() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [contentRef, setContentRef] = useState<ButtonRef | null>(null);
  const appleRef = useRef<HTMLButtonElement>(null);
  const androidRef = useRef<HTMLButtonElement>(null);

  const customStyles = {
    content: {
      left: modalPosition.left,
      top: modalPosition.top,
      right: 0,
      borderStyle: "None",
      overflow: "unset",
      borderRadius: "16px",
      transform: "translate(-50%, 0)",
      paddingTop: "16px",
      padding: "25px",
      backgroundColor: "#252631",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "245px",
      width: "245px",
    },
    overlay: {
      backgroundColor: "unset",
      zIndex: "50",
    },
  };

  function openModal(ref: React.RefObject<HTMLButtonElement>) {
    setModalIsOpen(true);
    setContentRef(ref);
  }

  function afterOpenModal() {
    if (contentRef && contentRef.current) {
      let { top, left } = contentRef.current.getBoundingClientRect();
      top = top + 70;
      left = left + 20;
      setModalPosition({ top, left });
    }
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="bg-darkblue text-slate-200 flex flex-row justify-end pt-10 pb-4 px-20">
      <div className="flex">
        <button
          ref={appleRef}
          className="w-12 h-12 bg-darkgrey rounded-full flex items-center justify-center"
          onClick={() => openModal(appleRef)}
        >
          <Image height="22" src={apple} alt="Apple Store" />
        </button>
        <button
          ref={androidRef}
          className="w-12 h-12 bg-darkgrey rounded-full flex items-center justify-center mx-6"
          onClick={() => openModal(androidRef)}
        >
          <Image height="22" src={android} alt="Google Play Store" />
        </button>
        <button
          className="w-12 h-12 bg-darkgrey rounded-full flex items-center justify-center"
          onClick={() => openModal(androidRef)}
        >
          <Image height="12" src={apk} alt=".apk Download" />
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={{
          ...customStyles,
          content: { ...customStyles.content, ...modalPosition },
        }}
      >
        <div className="font-semibold text-white text-center text-sm mb-2">
          Zum Download scannen
        </div>
        <Image
          className="p-2 rounded-lg bg-white"
          height="179"
          src={qrcode}
          alt={"Apple Store QR Code"}
        />
      </Modal>
    </div>
  );
}
