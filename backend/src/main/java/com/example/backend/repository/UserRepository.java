package com.example.backend.repository;

import com.example.backend.entity.Userinfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface UserRepository extends JpaRepository<Userinfo,Long> {
    List<Userinfo> findByEmail(String email);
}
