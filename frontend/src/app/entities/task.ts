import { Project } from "./project";
import { User } from "./user";

export class Task {
    id:number;
    name:string;
    description:string;
    deadline:Date;
    project:Project;
    manager:User;
}
