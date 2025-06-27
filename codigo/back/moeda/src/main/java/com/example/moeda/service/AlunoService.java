package com.example.moeda.service;

import org.springframework.transaction.annotation.Transactional;    
import org.springframework.stereotype.Service;
import com.example.moeda.model.Aluno;
import com.example.moeda.repository.AlunoRepository;
import java.util.List;

@Service
public class AlunoService {
    private final AlunoRepository alunoRepository;

    public AlunoService(AlunoRepository alunoRepository) {
        this.alunoRepository = alunoRepository;
    }

    @Transactional
    public Aluno salvar(Aluno aluno) {
        return alunoRepository.save(aluno);
    }

    @Transactional
    public void deletar(Long id) {
        alunoRepository.deleteById(id);
    }

    public List<Aluno> listarTodos() {
        return alunoRepository.findAll();
    }

    public Aluno buscarPorId(Long id) {
        return alunoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Aluno não encontrado com id: " + id));
    }
}