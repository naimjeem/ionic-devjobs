import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github',
  templateUrl: './github.page.html',
  styleUrls: ['./github.page.scss'],
})
export class GithubPage implements OnInit {
  data: any;
  searchVal = 'code';
  page = 1;

  constructor(
    private router: Router,
    private jobService: JobService
  ) { }

  ngOnInit() {
    this.jobService.github(this.searchVal, this.page)
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

  loadMoreNews(event) {
    this.page++;
    console.log(event);
    this.jobService
      .github(this.searchVal, this.page)
        .subscribe(data => {
          // console.log(data);
          // this.data = data;
          for (const job of data['jobs']) {
            this.data.jobs.push(job);
          }
          event.target.complete();
          console.log(this.data);
        });
  }

}
