// import CancelIcon from '@/assets/icons/cancel.webp';
import { ICONS } from '@/assets/url';
import { Button } from '.';
import Text from './Text';
import Icon from './Icon';

const Modal = ({ isOpen, title, onClose, onSubmit, children }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          {/* Modal Content */}
          <div className="flex flex-col justify-between bg-white rounded-lg p-6 pt-1 max-w-[50%] h-2/3 w-full mx-4 relative">
            {/* Close Button */}
            <div className="flex flex-row justify-between">
              <Text className="font-quicksand font-bold text-xl leading-8 tracking-tighter text-primary-black">
                {title}
              </Text>
              <Button
                onClick={onClose}
                className=" text-gray-600 hover:text-gray-900 h-6 w-6"
              >
                <Icon src={ICONS.CancelIcon} />
              </Button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
