import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const DeleteTreino = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .delete(`http://localhost:3000/treinos/${id}`)
      .then(response => {
        // Lógica adicional após a exclusão do treino
        console.log(response.data);
        toast.success('Treino excluído com sucesso!');
        navigate('/'); // Redireciona para a página inicial após a exclusão do treino
      })
      .catch(error => {
        console.error(error);
      });
  }, [id, navigate]);

  return (
    <div>
      <h1>Excluir Treino</h1>
      <p>Excluindo treino...</p>
    </div>
  );
};

export default DeleteTreino;
