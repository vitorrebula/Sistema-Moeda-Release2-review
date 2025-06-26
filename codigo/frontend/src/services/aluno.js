import api from "./api";

export const submitAluno = async (e, form, setForm) => {
  e.preventDefault();
  try {
    await api.post('/alunos', form);
    alert('Aluno cadastrado com sucesso!');
    setForm({
      nome: '',
      email: '',
      senha: '',
      cpf: '',
      rg: '',
      endereco: '',
      curso: ''
    });
  } catch (err) {
    alert('Erro ao cadastrar aluno.');
  }
};
