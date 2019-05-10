insert into boards (board_name) VALUES ('Home Board');
insert into boards (board_name) VALUES ('Project 2');

insert into lists (board_name, lists) VALUES ('Project 2', 'To-Do');

insert into lists (board_name, lists) VALUES ('Home Board', 'In-progress');
insert into lists (board_name, lists) VALUES ('Home Board', 'Done');

insert into tasks (task_type, task_title, task_priority, created_date, due_date, assigned_to, task_description, board_name) VALUES ('To-Do', 'Build SQL DB', 1, UTC_TIMESTAMP(), CONVERT_TZ('2019-05-09 18:30:00', '-7:00', '+00:00'), 'Regina Garcia', 'Build database and table with 5 colums', 'Project 2');
insert into tasks (task_type, task_title, task_priority, created_date, due_date, assigned_to, task_description, board_name) VALUES ('To-Do', 'Find team logo', 3, UTC_TIMESTAMP(), CONVERT_TZ('2019-05-10 9:30:00', '-7:00', '+00:00'), 'Luann Tomas', 'Logo should include a cricket', 'Project 2');
insert into tasks (task_type, task_title, created_date, due_date, assigned_to, task_description, board_name) VALUES ('In-progress', 'Help Jason with Homework', UTC_TIMESTAMP(), CONVERT_TZ('2019-05-29 12:45:00', '-7:00', '+00:00'), 'Regina Garcia', 'Math Homework and Reading for 30 minutes', 'Home Board');
insert into tasks (task_type, task_title, task_priority, created_date, due_date, assigned_to, task_description, board_name) VALUES ('Done', 'Take Jason to tutoring', 1, UTC_TIMESTAMP(), CONVERT_TZ('2019-05-16 10:30:00', '-7:00', '+00:00'), 'Regina Garcia', 'Wednesday at 4:30pm', 'Home Board');
