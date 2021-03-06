import { Component, OnInit, Input } from "@angular/core";
import { Student } from "../student";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {
  @Input() student: Student;
  @Input() idx: number;

  constructor() {}

  ngOnInit() {}
}
