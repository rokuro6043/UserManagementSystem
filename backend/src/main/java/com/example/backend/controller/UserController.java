package com.example.backend.controller;

import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.Console;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserRepository repo;

    public UserController(UserRepository repo){
        this.repo = repo;
    }

    @GetMapping
    public ResponseEntity<List<User>> getUsers(){
        System.out.println(repo.findAll());
        return ResponseEntity.ok(repo.findAll());
    }

    @PostMapping
    public User addUser(@RequestBody User user){
        return repo.save(user);
    }
}
