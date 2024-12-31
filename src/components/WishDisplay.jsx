import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Input } from 'antd'; // Import Input from Ant Design
import { WhatsAppOutlined } from '@ant-design/icons';

const WishDisplay = () => {
  const { senderName: senderNameParam, recipientName: recipientNameParam } = useParams();

  // State for controlling the input fields for WhatsApp share
  const [senderNameInput, setSenderNameInput] = useState('');
  const [recipientNameInput, setRecipientNameInput] = useState('');

  // Initialize with URL params
  useEffect(() => {
    setRecipientNameInput(recipientNameParam || '');
  }, [recipientNameParam]);

  const shareUrl = `https://wa.me/?text=🎆 Happy New Year, ${recipientNameInput || 'Friend'}! 🎆%0A%0AWishing you a joyful and prosperous year ahead, from ${senderNameInput || 'Your Friend'}.%0A%0ASend your personalized wish here: ${window.location.origin}/wish/${senderNameInput || 'Your Friend'}/${recipientNameInput || 'Friend'}`;

  const handleShare = () => {
    if (senderNameInput && recipientNameInput) {
      window.open(shareUrl, '_blank');
    }
  };

  // Function to generate balloon elements dynamically
  useEffect(() => {
    const createBalloons = () => {
      const container = document.getElementById('balloon-container');
      if (container) {
        for (let i = 0; i < 30; i++) {
          const balloon = document.createElement('div');
          balloon.className = 'balloon';
          balloon.style.left = `${Math.random() * 100}%`;
          balloon.style.animationDelay = `${Math.random() * 5}s`;
          container.appendChild(balloon);
        }
      }
    };

    createBalloons();
    return () => {
      const container = document.getElementById('balloon-container');
      if (container) {
        container.innerHTML = ''; // Clear balloons on component unmount
      }
    };
  }, []);

  return (
    <div className="container d-flex flex-column justify-content-center" style={{ height: '100vh' }}>
      {/* Balloon Animation */}
      <div id="balloon-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />

      {/* Static Wish Preview */}
      <div className="text-center" style={{ marginTop: '50px' }}>
        <h1 className="text-capitalize">🎆 Happy New Year, {recipientNameParam || 'Friend'}! 🎆</h1>
        <p className="mb-4">
          Wishing you a wonderful year ahead filled with joy and success, <br /> from -{' '}
          <span className="text-capitalize font-monospace">{senderNameParam || 'Your Friend'}</span>.
        </p>
      </div>

      {/* Share Button and Input Form */}
      <div className="d-flex flex-column align-items-center mt-auto mb-2">
        <div className="text-center text-capitalize">
          <Input
            name="recipientName"
            placeholder="Enter your name (Sender)"
            value={recipientNameInput}
            onChange={(e) => setRecipientNameInput(e.target.value)}
            style={{ width: '300px', marginBottom: '10px', textTransform: 'capitalize' }}
            addonBefore="From"
          />
          <br />
          <Input
            name="senderName"
            placeholder="Enter recipient's name"
            value={senderNameInput}
            onChange={(e) => setSenderNameInput(e.target.value)}
            style={{ width: '300px', marginBottom: '10px', textTransform: 'capitalize' }}
            addonBefore="To"
          />
        </div>
        <Button type="primary" icon={<WhatsAppOutlined />} onClick={handleShare} className="mt-4">
          Share on WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default WishDisplay;
