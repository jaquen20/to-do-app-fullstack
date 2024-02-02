package com.example.demoHostel.service;

import com.example.demoHostel.model.CompletedTask;
import com.example.demoHostel.model.TaskData;
import com.example.demoHostel.repo.TaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    TaskRepo taskRepo;
    @Autowired
    CompletedTaskService completedTaskService;

    public TaskData saveData(TaskData data) {
        return taskRepo.save(data);
    }

    public Optional<TaskData> findById(Long id) {
        return taskRepo.findById(id);
    }




    public List<TaskData> getAllTask() {
        return taskRepo.findAll();
    }

    public boolean deleteToDoItem(Long id) {
        taskRepo.deleteById(id);
        if (taskRepo.findById(id).isEmpty()) {
            return true;
        }

        return false;
    }

    public TaskData getToDoItemById(Long id) {
        return taskRepo.findById(id).get();
    }

    public boolean saveOrUpdateToDoItem(TaskData todo) {
        TaskData updatedObj = taskRepo.save(todo);

        if (getToDoItemById(updatedObj.getId()) != null) {
            return true;
        }

        return false;
    }

    public boolean updateStatus(Long id) {
        TaskData todo = getToDoItemById(id);
        //todo.setCompleted(true);


        CompletedTask completedTask = new CompletedTask();
        completedTask.setTitle(todo.getTitle());
        completedTask.setDescription(todo.getDescription());
        completedTask.setDue_Date(todo.getDue_Date());
        completedTask.setCompleted(true);

        completedTaskService.save(completedTask);
        deleteToDoItem(id);

        return true;
    }

    public Optional<TaskData> getDataById(Long id) {
        return taskRepo.findById(id);
    }

}
