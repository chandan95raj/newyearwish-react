import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from 'antd';

const WishInput = () => {
  const [senderName, setSenderName] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (senderName.trim() && recipientName.trim()) {
      navigate(`/wish/${encodeURIComponent(senderName)}/${encodeURIComponent(recipientName)}`);
    }
  };

  return (
    <div className="container text-center" style={{ marginTop: '50px' }}>
      <h1 className="mb-4">🎉 Create Your New Year Wish 🎉</h1>
      <Input
        className="mb-4"
        placeholder="Enter your name (Sender)"
        value={senderName}
        onChange={(e) => setSenderName(e.target.value)}
        style={{ width: '300px', marginBottom: '10px' }}
      />
      <br />
      <Input
        className="mb-4"
        placeholder="Enter recipient's name"
        value={recipientName}
        onChange={(e) => setRecipientName(e.target.value)}
        style={{ width: '300px', marginBottom: '10px' }}
      />
      <br />
      <Button type="primary" onClick={handleSubmit}>
        Generate Wish
      </Button>
    </div>
  );
};

export default WishInput;
