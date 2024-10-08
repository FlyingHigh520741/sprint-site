import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Titulo } from '../componentes/Titulo';

function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');


    useEffect(() => {
        const dadosSalvos = localStorage.getItem('dadosFormulario');
        if (dadosSalvos) {
            const { nomeSalvo, emailSalvo, mensagemSalva } = JSON.parse(dadosSalvos);
            setNome(nomeSalvo);
            setEmail(emailSalvo);
            setMensagem(mensagemSalva);
        }
    }, []);


    useEffect(() => {
        const dadosFormulario = { nome, email, mensagem };
        localStorage.setItem('dadosFormulario', JSON.stringify(dadosFormulario));
    }, [nome, email, mensagem]);

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Dados do formulário:', { nome, email, mensagem });

        setNome('');
        setEmail('');
        setMensagem('');
        localStorage.removeItem('dadosFormulario');
    };

    return (
        <Container className='my-5 '>
            <Titulo tamanhoFonte='30px'>Entre em contato conosco!</Titulo>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formNome" className='py-3'>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formEmail" className='py-3'>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formMensagem" className='py-3'>
                    <Form.Label>Mensagem:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Digite sua mensagem"
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Enviar
                </Button>
            </Form>
        </Container>
    );
}

export default Contato;