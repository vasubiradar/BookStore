import React from 'react';
import Modal from 'react-modal';
import Payment from './Payment';// Replace the path with the actual path to your Payment component

const PaymentModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Payment Modal"
    >
      <button onClick={closeModal}>Close</button>
      <Payment />
    </Modal>
  );
};

export default PaymentModal;