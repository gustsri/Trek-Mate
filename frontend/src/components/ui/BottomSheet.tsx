import React from 'react';

export interface BottomSheetProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const BottomSheet: React.FC<BottomSheetProps> = () => {
  return null;
};
