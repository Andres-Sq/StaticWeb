'use client';
import { useState, useCallback } from 'react';

export type ModalKey = 'privacy' | 'cons' | null;

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
