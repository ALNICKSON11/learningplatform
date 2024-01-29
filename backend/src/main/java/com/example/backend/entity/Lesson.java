package com.example.backend.entity;

import jakarta.persistence.*;
@Entity

public class Lesson {



        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "lesson_id")
        private Long lessonId;

        private String lessonName;
        private String lessonDescription;
        private String lessonLink;

    public Long getLessonId() {
        return lessonId;
    }

    public void setLessonId(Long lessonId) {
        this.lessonId = lessonId;
    }

    public String getLessonName() {
        return lessonName;
    }

    public void setLessonName(String lessonName) {
        this.lessonName = lessonName;
    }

    public String getLessonDescription() {
        return lessonDescription;
    }

    public void setLessonDescription(String lessonDescription) {
        this.lessonDescription = lessonDescription;
    }

    public String getLessonLink() {
        return lessonLink;
    }

    public void setLessonLink(String lessonLink) {
        this.lessonLink = lessonLink;
    }

    public Courseinfo getCourse() {
        return course;
    }

    public void setCourse(Courseinfo course) {
        this.course = course;
    }

    @ManyToOne
        @JoinColumn(name = "course_id")
        private Courseinfo course;
}
