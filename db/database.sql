CREATE DATABASE pomodoro;

CREATE TABLE tasks(
  task_id SERIAL PRIMARY KEY,
  task_name VARCHAR(50),
  task_description VARCHAR(100)
);