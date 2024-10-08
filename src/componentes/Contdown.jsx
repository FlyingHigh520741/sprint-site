import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CountdownContainer = styled.div`
  top: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center; /* Alinha o conteúdo no centro */
`;

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(0);
    const raceName = "São Paulo E-Prix";

    useEffect(() => {
        const countdownDate = new Date('2024-12-07T15:00:00'); // Define a data e hora da corrida

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            setTimeLeft(distance);

            if (distance < 0) {
                clearInterval(timer);
                setTimeLeft(0);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (milliseconds) => {
        const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
        const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
        const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24)); // Calcula os dias
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    return (
        <CountdownContainer>
            <h4>Próxima Corrida: {raceName}</h4>
            <div>
                <h4>
                {timeLeft > 0 ? formatTime(timeLeft) : "A corrida começou!"}
                </h4>
            </div>
        </CountdownContainer>
    );
};

export default Countdown; 
