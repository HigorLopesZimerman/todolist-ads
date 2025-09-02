package com.todoapp.service;

import com.todoapp.model.Todo;
import com.todoapp.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {
    private final TodoRepository repo;

    public TodoService(TodoRepository repo) {
        this.repo = repo;
    }

    public List<Todo> getAll() { return repo.findAll(); }

    public Optional<Todo> getById(Long id) { return repo.findById(id); }

    public Todo create(Todo todo) { return repo.save(todo); }

    public Todo update(Long id, Todo updated) {
        return repo.findById(id).map(t -> {
            t.setTitle(updated.getTitle());
            t.setDescription(updated.getDescription());
            t.setCompleted(updated.isCompleted());
            return repo.save(t);
        }).orElseThrow(() -> new RuntimeException("Todo not found"));
    }

    public void delete(Long id) { repo.deleteById(id); }
}
