import { Developer } from "./developer";
import { ProjectType } from "./project-type";

export class Project {
    id:number;
    name:string;
    description:string;
    type:ProjectType;
    developers:Set<Developer>;

    constructor(){
        this.id = -1;
        this.name = "";
        this.description = "";
        this.type = new ProjectType(-1,"");
    }
}
