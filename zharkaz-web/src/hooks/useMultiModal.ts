import { useState, useCallback } from 'react';

type ModalKey = 'privacy' | 'terms' | 'legal' | null;

export const useMultiModal = () => {
  const [openModal, setOpenModal] = useState<ModalKey>(null);

  const open = useCallback((key: ModalKey) => setOpenModal(key), []);
  const close = useCallback(() => setOpenModal(null), []);
  const isOpen = useCallback(
    (key: ModalKey) => openModal === key,
    [openModal]
  );

  return { openModal, open, close, isOpen };
};