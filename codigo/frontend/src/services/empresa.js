import api from "./api";

export const submitEmpresa = async (e, form, setForm) => {
  e.preventDefault();
  try {
    await api.post('/empresas', form);
    alert('Empresa cadastrada com sucesso!');
    setForm({ nomeFantasia: '', email: '', senha: '', cnpj: '' });
  } catch (err) {
    alert('Erro ao cadastrar empresa.');
  }
};