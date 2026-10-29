import React from 'react';

export const WhatsAppFloatingButton: React.FC = () => {
  const handleClick = () => {
    const msg = encodeURIComponent('¡Hola CyC Producciones! Quisiera recibir información y asesoría para un evento.');
    window.open(`https://wa.me/573004978810?text=${msg}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 p-0 rounded-full bg-transparent transition-transform hover:scale-110 flex items-center justify-center cursor-pointer drop-shadow-lg"
      title="Atención Directa por WhatsApp"
      id="floating-whatsapp-btn"
    >
      <img 
        src="https://lh3.googleusercontent.com/d/1JKMPRq27BdYOATgMiPePz-9GJDkjyOFw" 
        alt="WhatsApp" 
        className="w-11 h-11 sm:w-14 sm:h-14 object-contain"
        referrerPolicy="no-referrer"
      />
    </button>
  );
};

