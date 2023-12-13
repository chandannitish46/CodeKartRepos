import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'sample-test-qloron';
  displayedColumns: string[] = ['demo-userId', 'demo-id', 'demo-title', 'demo-body'];

  posts: SampleData[] = [];
  dataSource = this.posts;



  constructor(private apiService: UserDataService) { }

  ngOnInit() {

    // Need to cast the api end point data to Sample Data array, was facing the issue
    this.apiService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
      this.dataSource = this.posts;
    });

  }
}

export interface SampleData {

  userId?: string,
  id?: string,
  title?: string,
  body?: string,
}
