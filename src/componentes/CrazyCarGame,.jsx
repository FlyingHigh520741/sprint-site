import React from 'react';

const CrazyCarGame = () => {
  return (
    <div className="game-container" style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Agora divirta-se um pouco!</h2>
      <iframe
        src="https://www.friv.com/z/games/sprintclubnitro/game.html"
        width="100%"
        height="600px"
        style={{ border: 'none', maxWidth: '1000px' }}
        allowFullScreen
        title="Crazy Car Arena"
      ></iframe>
    </div>
  );
};

export default CrazyCarGame;