import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Navbar from './Navbar';

const CreateTreino = () => {
  const [nomeTreino, setNomeTreino] = useState('');
  const [tipoTreino, setTipoTreino] = useState('');
  const [qntdExercicios, setQntdExercicios] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const novoTreino = {
      nomeTreino,
      tipoTreino,
      qntdExercicios
    };

    axios.post('http://localhost:3000/treinos', novoTreino)
      .then(response => {
        console.log(response.data);
        toast.success('Treino criado com sucesso!');
        navigate('/'); // Redireciona para a página inicial após a criação do treino
      })
      .catch(error => {
        console.error(error);
        toast.error('Erro ao criar treino');
      });
  };

  return (
    <Grid container justifyContent="center">
      <Navbar />
      <Grid item xs={12} md={6} lg={4}>
        <Box p={2}>
          <h1>Criar Treino</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nome do Treino"
              fullWidth
              value={nomeTreino}
              onChange={event => setNomeTreino(event.target.value)}
              margin="normal"
            />
            <TextField
              label="Tipo do Treino"
              fullWidth
              value={tipoTreino}
              onChange={event => setTipoTreino(event.target.value)}
              margin="normal"
            />
            <TextField
              label="Quantidade de Exercícios"
              type="number"
              fullWidth
              onChange={event => setQntdExercicios(event.target.value)}
              margin="normal"
            />
            <Button type="submit" variant="contained" className="btn-submit">
              Criar
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CreateTreino;
