import React, { useState, useEffect, useRef, forwardRef } from 'react';
const FloatingInput = forwardRef(({ onSubmit }, ref) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [intention, setIntention] = useState('');
  const inputRef = useRef(null);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (inputRef.current) {
        const rect = inputRef.current.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          // The click happened inside the input; do nothing.
          return;
        }
        inputRef.current.focus();
      }
    };  
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []); // The empty array ensures this effect runs only once, similar to componentDidMount
  
  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      
      onSubmit(intention);
      setIntention(' ');
      console.log(intention)
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y + 'px',
        left: position.x - 15 + 'px',
      }}
    >
      <input
        ref={ref}
        name='intention'
        className="custom-cursor"
        placeholder='Type your intentions here...'
        value={intention}
        onChange={(e) => setIntention(e.target.value)}
        onKeyDown={onKeyDown}
        onClick={handleClick}
      />
    </div>
  );
});

export default FloatingInput;