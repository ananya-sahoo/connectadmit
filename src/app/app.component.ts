import { Component } from '@angular/core';

interface Counselor {
  name: string;
  email: string;
  score: string;
  experience: string;
  photo: string;
}

interface CourseData {
  [course: string]: Counselor[];
}

interface CollegeData {
  [college: string]: {
    courses: CourseData;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true 
})
export class AppComponent {
  data: CollegeData = {
    'IIM Ahmedabad': {
      courses: {
        PGP: [
          {
            name: 'Rajeev Mehta',
            email: 'rajeev.iim@gmail.com',
            score: 'CAT 99.87%ile',
            experience: '2 yrs at McKinsey',
            photo: 'https://randomuser.me/api/portraits/men/45.jpg'
          },
          {
            name: 'Shreya Gupta',
            email: 'shreya.gupta@iima.in',
            score: 'CAT 99.65%ile',
            experience: '3 yrs at BCG',
            photo: 'https://randomuser.me/api/portraits/women/44.jpg'
          }
        ],
        ePGP: [
          {
            name: 'Kunal Sinha',
            email: 'kunal@iima.in',
            score: 'GMAT 720',
            experience: '5 yrs at Deloitte',
            photo: 'https://randomuser.me/api/portraits/men/33.jpg'
          }
        ]
      }
    },
    'IIM Bangalore': {
      courses: {
        MBA: [
          {
            name: 'Divya Rao',
            email: 'divya.rao@iimb.in',
            score: 'CAT 99.91%ile',
            experience: '2 yrs at Bain & Co',
            photo: 'https://randomuser.me/api/portraits/women/25.jpg'
          }
        ],
        PGPEM: [
          {
            name: 'Amit Desai',
            email: 'amit@iimb.in',
            score: 'GMAT 710',
            experience: '4 yrs at Infosys',
            photo: 'https://randomuser.me/api/portraits/men/53.jpg'
          }
        ]
      }
    },
    'IIM Kozhikode': {
      courses: {
        MBA: [
          {
            name: 'Divya Rao',
            email: 'divya.rao@iimb.in',
            score: 'CAT 99.91%ile',
            experience: '2 yrs at Bain & Co',
            photo: 'https://randomuser.me/api/portraits/women/25.jpg'
          }
        ],
        PGPEM: [
          {
            name: 'Amit Desai',
            email: 'amit@iimb.in',
            score: 'GMAT 710',
            experience: '4 yrs at Infosys',
            photo: 'https://randomuser.me/api/portraits/men/53.jpg'
          }
        ]
      }
    }
  };

  selectedCollege: string | null = null;
  selectedCourse: string | null = null;

  get colleges(): string[] {
    return Object.keys(this.data);
  }

  get courses(): string[] {
    return this.selectedCollege ? Object.keys(this.data[this.selectedCollege].courses) : [];
  }

  get counselors(): Counselor[] {
    return this.selectedCollege && this.selectedCourse
      ? this.data[this.selectedCollege].courses[this.selectedCourse]
      : [];
  }

  selectCollege(college: string) {
    this.selectedCollege = college;
    this.selectedCourse = null;
  }

  selectCourse(course: string) {
    this.selectedCourse = course;
  }
}