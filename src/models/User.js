export default class User {

    constructor(firstname, lastname, birthdate, faculty, gpa) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.faculty = faculty;
        this.gpa = gpa;
        this.courses = [];
    }

    setgpa() {
        let points = 0;
        for(let i = 0; i < this.courses.length; i++) {
            let grade = this.courses[i].grade;
            switch (Math.ceil(grade/10)) {
                case 10:
                    points += 4;
                    break;
                case 9:
                    points += 3;
                    break;
                case 8:
                    points += 2;
                    break;
                case 7:
                    points += 1;
                    break;
                case 6:
                    points += 0.5;
                    break;
            }
        }
        this.gpa = points / this.courses.length;
    }
}