package com.example.backend.service.impl;

import com.example.backend.repository.CourseinfoRepository;
import com.example.backend.service.LessonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LessonImplementation implements LessonService {
    @Autowired
    private CourseinfoRepository courseinfoRepository;
}
