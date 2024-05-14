import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/entities/project';
import { ProjectType } from 'src/app/entities/project-type';
import { ProjectService } from 'src/app/service/project.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Set<Project> = new Set<Project>();
  showingProjects: Set<Project> = new Set<Project>();
  projectTypes: Set<ProjectType> = new Set<ProjectType>();

  constructor(private projectService:ProjectService,private userService:UserService){}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects: Set<Project>) => {
      this.projects = new Set(projects);
      this.showingProjects = new Set(this.projects);
      this.projects.forEach(project => {
        this.projectTypes.add(project.type);
      });
    })
  }

  filterByType(type:ProjectType){
    this.showingProjects = new Set(this.projects);
    this.showingProjects.forEach(project => {
      if(project.type!==type){
        this.showingProjects.delete(project);
      }
    });
  }
  
  resetFilter(){
    this.showingProjects = new Set(this.projects);
  }

  logout(){
    this.userService.logout();
  }


}
