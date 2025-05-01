'use client';
import { useState, useCallback } from 'react';

export type ModalKey = 'app' | 'web' | 'soporte' | 'redes' | 'Marketing' | null;

export const useModal = () => {
  const [openModal, setOpenModal] = useState<ModalKey>(null);

  const open = useCallback((key: ModalKey) => setOpenModal(key), []);
  const close = useCallback(() => setOpenModal(null), []);
  const isOpen = useCallback(
    (key: ModalKey) => openModal === key,
    [openModal]
  );

  return { openModal, open, close, isOpen };
};