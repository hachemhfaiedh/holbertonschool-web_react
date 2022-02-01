namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number
    }
    
    export class Java extends Subject {
        getRequirements(): string { return 'Here is the list of requirements for Java' }
        getAvailableTeacher(): string { return !this.teacher.experienceTeachingJava ? 
            'No available teacher' : `Available Teacher: ${this.teacher.firstName}` 
        }
    }
} 