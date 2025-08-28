import { useState } from "react";
import MainLayout from "../components/mainLayout";
import ModalRsvp from "../components/modalRsvp";
import useVisibility from "../../services/hooks/useVisibility";
import { motion } from "framer-motion";

export default function Rsvp({ name }: { name: string }) {
  const text1 = useVisibility();
  const text2 = useVisibility();
  const text3 = useVisibility();
  const btn1 = useVisibility();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <MainLayout height="h-full" className="text-center gap-4">
        <motion.h1
          ref={text1.ref}
          animate={
            text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
          }
          transition={{ duration: 0.7 }}
          className="latin-20"
        >
          RSVP
        </motion.h1>
        <motion.p
          ref={text2.ref}
          animate={
            text2.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
          }
          transition={{ duration: 0.7 }}
          className="font-medium text-gray-700 px-4"
        >
          Tanpa mengurangi rasa hormat kami kepada para tamu undangan, mohon
          sekiranya tamu undangan dapat melakukan konfirmasi kehadiran terlebih
          dahulu.
        </motion.p>
        <motion.p
          ref={text3.ref}
          animate={
            text3.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
          }
          transition={{ duration: 0.7 }}
          className="text-gray-600 px-4"
        >
          Isi konfirmasi kehadiran hanya dapat dilakukan satu kali
        </motion.p>
        <motion.button
          ref={btn1.ref}
          animate={
            btn1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
          }
          transition={{ duration: 0.7 }}
          disabled={isModalOpen}
          onClick={() => setIsModalOpen(true)}
          className="btn-maroon z-10 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Isi Konfirmasi Kehadiran
        </motion.button>
      </MainLayout>
      {isModalOpen && (
        <ModalRsvp setIsModalOpen={setIsModalOpen} username={name} />
      )}
    </>
  );
}