package com.example.demoHostel.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data @Entity
@NoArgsConstructor
@AllArgsConstructor
public class TaskData {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String description;
    private String title;


    private String due_Date;
    private Boolean Completed;
}
