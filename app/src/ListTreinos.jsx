import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Edit, Delete } from '@mui/icons-material';
import Container from '@mui/material/Container';
import Navbar from './Navbar'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import dbData from '../../db.json';

const ListTreinos = () => {
  const [treinos, setTreinos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/treinos')
      .then(response => {
        setTreinos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

    // Configuração Recharts 

    const data = dbData.treinos.map((treino, index) => ({
      name: treino.nomeTreino,
      qntdExercicios: parseInt(treino.qntdExercicios),
    }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} className="container">
      <Navbar />
      <Container style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <Typography variant="h4" component="h1" gutterBottom>
            Lista de Treinos
          </Typography>
          <List>
            {treinos.map(treino => (
              <ListItem key={treino.id} disablePadding>
                <ListItemText primary={treino.nomeTreino} secondary={treino.tipoTreino} />
                <ListItemSecondaryAction>
                  <IconButton component={Link} to={`/treinos/update/${treino.id}`} aria-label="editar">
                    <Edit />
                  </IconButton>
                  <IconButton component={Link} to={`/treinos/delete/${treino.id}`} aria-label="excluir">
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
        <BarChart width={600} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="qntdExercicios" fill="#8884d8" />
        </BarChart>

      </Container>
    </div>
  );
};

export default ListTreinos;
