import React, { useState } from 'react';
import { submitAluno } from '../../services/aluno';
import '../defaultStyles/Form.css';

export default function AlunoForm() {
  const [form, setForm] = useState({
    nome: '', email: '', senha: '', cpf: '', rg: '', endereco: '', curso: ''
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="form-container">
      <form onSubmit={(e) => submitAluno(e, form, setForm)}>
        <h2>Cadastro de Aluno</h2>
        <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="senha" type="password" placeholder="Senha" value={form.senha} onChange={handleChange} />
        <input name="cpf" placeholder="CPF" value={form.cpf} onChange={handleChange} />
        <input name="rg" placeholder="RG" value={form.rg} onChange={handleChange} />
        <input name="endereco" placeholder="Endereço" value={form.endereco} onChange={handleChange} />
        <input name="curso" placeholder="Curso" value={form.curso} onChange={handleChange} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
