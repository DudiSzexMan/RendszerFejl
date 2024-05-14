import { Project } from "./project";

export class Developer {
    id:number;
    name:string;
    email:string;
    projects:Set<Project>;
}
