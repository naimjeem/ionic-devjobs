import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../job.service';

@Component({
  selector: 'app-codepen',
  templateUrl: './codepen.page.html',
  styleUrls: ['./codepen.page.scss'],
})
export class CodepenPage implements OnInit {
  data: any;
  page = 1;

  constructor(
    private router: Router,
    private jobService: JobService
  ) { }

  ngOnInit() {
    this.jobService.codepen()
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

}
