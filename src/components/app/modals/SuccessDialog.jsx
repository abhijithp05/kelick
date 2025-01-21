import { Button, Modal, Text } from '@/components/ui';
import { CheckCircle } from 'lucide-react';
import React from 'react';

const SuccessDialog = ({ isSuccessModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      isOpen={isSuccessModalOpen}
      onClose={() => setIsModalOpen(false)}
      width="450px"
      height="300px"
    >
      <div className="flex flex-col justify-center w-fit gap-2 self-start">
        {/* Ensure DialogTitle is included */}
        <div>
          {/* Hidden but accessible */}
          <CheckCircle className="text-center text-teal-500 w-12 h-12 mx-auto" />
          <Text tag="h2" className="text-lg text-center font-semibold mt-4">
            Congrats! You’ve successfully added all your employees!
          </Text>
          <Text tag="h4" className="text-gray-600 mt-2 text-center">
            Would you like to generate payroll?
          </Text>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            I’ll do it later
          </Button>
          <Button variant="primary" onClick={() => setIsModalOpen(false)}>
            Generate Payroll
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default React.memo(SuccessDialog);
