import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'lakic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ebook';

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:2020/').subscribe((res) => {
      console.log(res);
      console.log('test');
      

    })

  }
}
