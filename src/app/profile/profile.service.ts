import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class ProfileService {

  constructor() {}

  certificates: any = [
    {
      id: 1,
      imgUrl: "assets/images/Angular.png",
    },
    {
      id: 2,
      imgUrl: "assets/images/DevOps.png",
    },
    {
      id: 3,
      imgUrl: "assets/images/Java.png"
    },
    {
      id: 4,
      imgUrl: "assets/images/React Js.png",
    }
  ];
  about = `Software Developer with 3+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 9+ versions, HTML/CSS and TypeScript .
  Testing and debugging best practices were used to verify program logic .
  Collaborating in translation of project requirements and business objectives into polished user .
  interfaces with product managers and UX designers .
  Developing user interfaces for complex websites and applications .
  Working closely with UX designers, web developers and other team members to deliver an overall
  seamless user experience .
  Converting mockups into cross-browser HTML/CSS/JavaScript templates .
  Working alongside web developers to implement code .
  Directing and mentoring junior developers and engineers, teaching skills in Angular coding and
  working to improve overall team performance .
  Have good understanding of Java, C, C++, MYSQL`;

  resumeurl =
    "https://drive.google.com/file/d/1CjtH8A7CI4j9mnGRywoKhqmvVC0jm4Gg/view?usp=drive_link";

  skillsData: any = [
    {
      id: "1",
      skill: "ANGULAR 11+",
      progress: "90%",
    },
    {
      id: "2",
      skill: "HTML/CSS",
      progress: "85%",
    },
    {
      id: "3",
      skill: "JAVASCRIPT",
      progress: "70%",
    },
    {
      id: "4",
      skill: "SQL , MYSQL",
      progress: "60%",
    },
    {
      id: "5",
      skill: "Java",
      progress: "60%",
    },
    {
      id: "6",
      skill: "C, C++",
      progress: "60%",
    },
  ];

  educationData: any = [
    {
      id: "1",
      from_to_year: "2016 - 2020",
      education: "Bachelor's Degree",
      stream: "Bachelor of Engineering: Computer Science",
      info: `Completed B.E in Computer Engineering with 74%`,
      institution:
        "University Visvesvaraya College of Engineering - BangaloreD",
    },
    {
      id: "2",
      from_to_year: "2014 - 2016",
      education: "Higher Secondary",
      stream: "Science and Mathematics",
      institution: "Akshara PU College - Shikaripura",
      info: `The High School was mainly focus on the bases of science, mathematics, and Chemistry
              There was also a good base on physics, mathematics and chemistry.
              Completed my high school with 89%.`,
    },
    {
      id: "3",
      from_to_year: "2013 - 2014",
      education: "Secondary  School",
      stream: "Science and Mathematics",
      institution: "Government Junior College – Shiralakoppa",
      info: `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
              Completed my Secondary school with 90%.`,
    },
  ];

  exprienceData: any = [
    {
      id: 1,
      company: "Comviva Technology Limitted",
      location: "Bangalore",
      timeline: "Jan 2020 to Present",
      role: "Senior Software Engineer",
      work: "Working as a Front End developer .Responsible for handling the UI in Angular .",
    },
  ];

  skills(): Observable<any> {
    return this.skillsData;
  }

  getCertificates(): Observable<any> {
    return this.certificates;
  }
  education(): Observable<any> {
    return this.educationData;
  }

  exprience(): Observable<any> {
    return this.exprienceData;
  }
}
