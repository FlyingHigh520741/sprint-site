import React, { useState } from 'react';

// Estrutura dos dados de perguntas
const questions = [
    {
        question: "1- Ano da primeira corrida da Fórmula E?",
        options: ["2012", "2013", "2014", "2015"],
        correctAnswerIndex: 2, // C = "2014"
        feedbacks: [
            "A primeira corrida da Fórmula E ocorreu em 2014, não em 2012.",  // A
            "A primeira corrida da Fórmula E ocorreu em 2014, não em 2013.",  // B
            "A primeira corrida da Fórmula E ocorreu em 2014, em Pequim.",    // C
            "A primeira corrida da Fórmula E ocorreu em 2014, não em 2015."   // D
        ],
        infoLink: "https://en.wikipedia.org/wiki/Formula_E"
    },
    {
        question: "2- Principal característica dos carros da Fórmula E?",
        options: ["Motores a gasolina", "Motores elétricos", "Motores híbridos", "Motores a diesel"],
        correctAnswerIndex: 1, // B = "Motores elétricos"
        feedbacks: [
            "Os carros da Fórmula E utilizam motores elétricos, e não a gasolina.",  // A
            "Os carros da Fórmula E utilizam motores elétricos.",                    // B
            "Os carros da Fórmula E utilizam motores elétricos, e não híbridos.",    // C
            "Os carros da Fórmula E utilizam motores elétricos, e não a diesel."     // D
        ],
        infoLink: "https://en.wikipedia.org/wiki/Formula_E"
    },
    {
        question: "3- Fundador da Fórmula E?",
        options: ["Alejandro Agag", "Bernie Ecclestone", "Jean Todt", "Toto Wolff"],
        correctAnswerIndex: 0, // A = "Alejandro Agag"
        feedbacks: [
            "Alejandro Agag é o fundador da Fórmula E.",                    // A
            "Bernie Ecclestone não fundou a Fórmula E.",                    // B
            "Jean Todt não é o fundador da Fórmula E.",                     // C
            "Toto Wolff não fundou a Fórmula E, foi Alejandro Agag."        // D
        ],
        infoLink: "https://en.wikipedia.org/wiki/Formula_E"
    },
    {
        question: "4- Cidade da primeira corrida da Fórmula E?",
        options: ["Nova York", "Paris", "Pequim", "Londres"],
        correctAnswerIndex: 2, // C = "Pequim"
        feedbacks: [
            "A primeira corrida da Fórmula E foi em Pequim, não em Nova York.",  // A
            "A primeira corrida da Fórmula E foi em Pequim, não em Paris.",      // B
            "A primeira corrida da Fórmula E foi em Pequim.",                    // C
            "A primeira corrida da Fórmula E foi em Pequim, não em Londres."     // D
        ],
        infoLink: "https://en.wikipedia.org/wiki/Formula_E"
    },
    {
        question: "5- Quantos carros por equipe na Fórmula E?",
        options: ["Um", "Dois", "Três", "Quatro"],
        correctAnswerIndex: 1, // B = "Dois"
        feedbacks: [
            "Cada equipe na Fórmula E possui dois carros, e não um.",       // A
            "Cada equipe na Fórmula E possui dois carros.",                 // B
            "Cada equipe na Fórmula E possui dois carros, e não três.",     // C
            "Cada equipe na Fórmula E possui dois carros, e não quatro."    // D
        ],
        infoLink: "https://en.wikipedia.org/wiki/Formula_E"
    },
    {
        question: "6- Diferença principal entre Fórmula E e Fórmula 1?",
        options: ["Motores elétricos vs. combustão", "Corridas mais longas", "Circuitos ovais vs. de rua", "Reabastecimento permitido"],
        correctAnswerIndex: 0, // A = "Motores elétricos vs. combustão"
        feedbacks: [
            "A principal diferença é o uso de motores elétricos na Fórmula E e motores a combustão na Fórmula 1.",  // A
            "A Fórmula E não tem corridas mais longas do que a F1.",                                               // B
            "A Fórmula E não é focada em circuitos ovais, mas sim de rua.",                                        // C
            "A Fórmula E não permite reabastecimento, ao contrário da Fórmula 1."                                  // D
        ],
        infoLink: "https://en.wikipedia.org/wiki/Formula_E"
    },
    {
        question: "7- Duração média de uma corrida de Fórmula E?",
        options: ["45 min + 1 volta", "60 min + 2 voltas", "90 min + 1 volta", "120 min + 2 voltas"],
        correctAnswerIndex: 0, // A = "45 min + 1 volta"
        feedbacks: [
            "Uma corrida de Fórmula E dura em média 45 minutos + 1 volta.",                // A
            "A duração é 45 minutos + 1 volta, não 60 minutos + 2 voltas.",                // B
            "Uma corrida dura menos tempo: 45 minutos + 1 volta.",                         // C
            "A Fórmula E tem corridas mais curtas: 45 minutos + 1 volta."                  // D
        ],
        infoLink: "https://en.wikipedia.org/wiki/Formula_E"
    },
    {
        question: "8- Temporadas completadas até 2023?",
        options: ["7", "8", "9", "10"],
        correctAnswerIndex: 3, // D = "10"
        feedbacks: [
            "Até 2023, foram completadas 10 temporadas, não 7.",                           // A
            "Até 2023, foram completadas 10 temporadas, não 8.",                           // B
            "Até 2023, foram completadas 10 temporadas, não 9.",                           // C
            "Até 2023, foram completadas 10 temporadas da Fórmula E."                      // D
        ],
        infoLink: "https://en.wikipedia.org/wiki/Formula_E"
    },
    {
        question: "9- Sistema de votação dos fãs?",
        options: ["Fan Boost", "Power Up", "Speed Boost", "Turbo Vote"],
        correctAnswerIndex: 0, // A = "Fan Boost"
        feedbacks: [
            "O sistema de votação dos fãs na Fórmula E é chamado Fan Boost.",              // A
            "O nome do sistema de votação é Fan Boost, não Power Up.",                     // B
            "O nome do sistema de votação é Fan Boost, não Speed Boost.",                  // C
            "O sistema é Fan Boost, não Turbo Vote."                                       // D
        ],
        infoLink: "https://en.wikipedia.org/wiki/Formula_E"
    },
    {
        question: "10- Nome do troféu do campeão da Fórmula E?",
        options: ["Troféu de Ouro", "Troféu das Estrelas", "Troféu Jules Bianchi", "Troféu ABB FIA"],
        correctAnswerIndex: 3, // D = "Troféu ABB FIA"
        feedbacks: [
            "O nome do troféu é Troféu ABB FIA, não Troféu de Ouro.",                      // A
            "O nome do troféu é Troféu ABB FIA, não Troféu das Estrelas.",                 // B
            "O troféu é chamado ABB FIA, não Troféu Jules Bianchi.",                       // C
            "O troféu do campeão da Fórmula E é chamado Troféu ABB FIA."                   // D
        ],
        infoLink: "https://en.wikipedia.org/wiki/Formula_E"
    }
];


const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswerIndex, setUserAnswerIndex] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [score, setScore] = useState(0);
    const [incorrectQuestions, setIncorrectQuestions] = useState([]);
    const [quizEnded, setQuizEnded] = useState(false);
    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswerSelection = (selectedAnswerIndex) => {
        setUserAnswerIndex(selectedAnswerIndex);
        setShowFeedback(true);

        if (selectedAnswerIndex === currentQuestion.correctAnswerIndex) {
            setScore(score + 1);
        } else {
            setIncorrectQuestions([...incorrectQuestions, currentQuestion]);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setShowFeedback(false);
            setUserAnswerIndex(null);
        } else {
            setQuizEnded(true);
        }
    };

    return (
        <div className="container mt-5 py-5 ">
            <div className="card shadow-lg">
                <div className="card-body">
                    {!quizEnded ? (
                        <div>
                            <h4 className="card-title text-primary mb-4">
                                {currentQuestion.question}
                            </h4>
                            <div className="list-group mb-3">
                                {currentQuestion.options.map((option, index) => (
                                    <button
                                        key={index}
                                        className={`list-group-item list-group-item-action ${showFeedback && index === currentQuestion.correctAnswerIndex ? 'list-group-item-success' : ''}`}
                                        onClick={() => handleAnswerSelection(index)}
                                        disabled={showFeedback}
                                    >
                                        {String.fromCharCode(65 + index)}) {option}
                                    </button>
                                ))}
                            </div>
                            {showFeedback && (
                                <div className="alert alert-info mt-3">
                                    {userAnswerIndex === currentQuestion.correctAnswerIndex
                                        ? <p><strong>Parabéns!</strong> {currentQuestion.feedbacks[userAnswerIndex]}</p>
                                        : <p><strong>Que pena!</strong> A resposta correta é {String.fromCharCode(65 + currentQuestion.correctAnswerIndex)}. {currentQuestion.feedbacks[userAnswerIndex]}</p>
                                    }
                                    <button className="btn btn-primary mt-3" onClick={handleNextQuestion}>
                                        Próxima pergunta
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <h4 className="text-primary">Quiz completo!</h4>
                            <p className="mt-3">Sua pontuação: <strong>{score} / {questions.length}</strong></p>
                            <p>Abaixo, você encontra links para aprender mais sobre os temas das questões que você errou:</p>
                            <ul className="list-group">
                                {incorrectQuestions.map((question, index) => (
                                    <li key={index} className="list-group-item">
                                        <a href={question.infoLink} target="_blank" rel="noopener noreferrer" className="text-primary">
                                            {question.question}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;