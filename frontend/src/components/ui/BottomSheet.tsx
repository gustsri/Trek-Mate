import React from 'react';

export interface BottomSheetProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen = false, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div aria-modal="true" className="fixed inset-0 z-50 flex items-end bg-black/60 p-3" role="dialog">
      <div className="w-full rounded-[2rem] bg-[#142217] p-5 text-[#f2eedf] shadow-2xl">
        <div className="mb-4 flex justify-end"><button aria-label="Close" className="rounded-full p-2 text-[#c3cbbf]" onClick={onClose} type="button">×</button></div>
        {children}
      </div>
    </div>
  );
};
