import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Navbar from './Navbar';

const UpdateTreino = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [treino, setTreino] = useState(null);
  const [nomeTreino, setNomeTreino] = useState('');
  const [tipoTreino, setTipoTreino] = useState('');
  const [qntdExercicios, setQntdExercicios] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/treinos/${id}`)
      .then(response => {
        setTreino(response.data);
        setNomeTreino(response.data.nomeTreino);
        setTipoTreino(response.data.tipoTreino);
        setQntdExercicios(response.data.qntdExercicios);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const treinoAtualizado = {
      ...treino,
      nomeTreino,
      tipoTreino,
      qntdExercicios
    };

    axios.put(`http://localhost:3000/treinos/${id}`, treinoAtualizado)
      .then(response => {
        console.log(response.data);
        toast.success('Treino atualizado com sucesso!');
        navigate('/'); // Redireciona para a página inicial após a atualização do treino
      })
      .catch(error => {
        console.error(error);
        toast.error('Erro ao atualizar treino.');
      });
  };

  if (!treino) {
    return <div>Carregando...</div>;
  }

  return (
    <Grid container justifyContent="center">
      <Navbar />
      <Grid item xs={12} md={6} lg={4}>
        <Box p={2}>
          <h1>Atualizar Treino</h1>
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
              value={qntdExercicios}
              onChange={event => setQntdExercicios(event.target.value)}
              margin="normal"
            />
            <Button type="submit" variant="contained" className="btn-submit">
              Atualizar
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UpdateTreino;
