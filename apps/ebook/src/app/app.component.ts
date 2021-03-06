import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'lakic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ebook';
  book: any = null;
  interval: any;
  dynamicdata = 'This is dynamic data!';

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:2020/').subscribe((res) => {
      console.log(res);
      console.log('test');


    })

  }

  change1(event: any) {
    console.log(event.target.files[0]);

    const formData: FormData = new FormData();
    formData.append('files', event.target.files[0], event.target.files[0].name);

    this.http.post('http://localhost:2020/epub', formData).subscribe((res) => {
      console.log(res);
      this.book = res;

    })

  }
}
