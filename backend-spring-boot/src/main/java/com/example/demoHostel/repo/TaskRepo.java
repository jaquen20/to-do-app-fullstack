package com.example.demoHostel.repo;

import com.example.demoHostel.model.TaskData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepo extends JpaRepository<TaskData,Long> {


}
