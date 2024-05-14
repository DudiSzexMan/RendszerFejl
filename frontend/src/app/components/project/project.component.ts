import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/entities/project';
import { Task } from 'src/app/entities/task';
import { User } from 'src/app/entities/user';
import { ProjectService } from 'src/app/service/project.service';
import { TaskService } from 'src/app/service/task.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  
  projectId:number;
  project:Project = new Project();
  tasks:Set<Task> = new Set<Task>();

  showingTasks:Set<Task> = new Set<Task>();
  
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private taskService: TaskService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ){}

  createForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    deadline: ['', [Validators.required]],
  }, { updateOn: 'blur' });

  get name() { return this.createForm.get('name') }
  get description() { return this.createForm.get('description') }
  get deadline() { return this.createForm.get('deadline') }

  createTask(){
    let task = new Task();

    task.name = this.name!.value;
    task.description = this.description!.value;
    task.deadline = new Date(this.deadline!.value);

    this.taskService.createTask(task,this.projectId).subscribe((task) => {
      this.tasks.add(task);
      this.showingTasks.add(task);
      this.createForm.reset();
    })
  }
  
  ngOnInit(): void {
    const projectIdParam = this.route.snapshot.params['projectId'];
    
    if (!isNaN(Number(projectIdParam))) {
      this.projectId = Number(projectIdParam);
    } else {
      this.router.navigate(['/']);
      return;
    }

    this.projectService.getProjectById(this.projectId).subscribe((project:Project) =>{
      this.project = project;
      this.taskService.getTasksByProjectId(this.projectId).subscribe((tasks:Set<Task>) =>{
        this.tasks = new Set(tasks);
        this.showingTasks = new Set(tasks);
      })
    })
    
  }

  filterByOwn() {
    this.userService.getAuthenticatedUser().subscribe((user) => {
      this.showingTasks.forEach(task => {
        if(task.manager.id!=user?.id){
          this.showingTasks.delete(task);
        }
      })
    });
  }

  showAll() {
    this.showingTasks = new Set(this.tasks);
  }

}
