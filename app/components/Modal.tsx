import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { cn } from '~/lib/helper';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

const Modal = ({ isOpen, onClose, children, className }: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-50" />
      <DialogPanel
        className={cn(
          'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-primary-light text-primary-dark',
          className,
        )}
      >
        {children}
      </DialogPanel>
    </Dialog>
  );
};

export default Modal;
