import { ChangeDetectionStrategy, Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'lakic-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss'],
})
export class ReaderComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) { }
  private _book: any = null;
  iframeDoc: any;
  @Input()
  set book(input: any) {
    console.log(input);

    this._book = input;

    if (input !== undefined && input !== null) {
      this.renderEpub()
    }
  }

  get book() {
    return this._book
  }

  ngOnInit(): void {

  }


  renderEpub() {
    const parser = new DOMParser();

    const firstSection = this._book.filter((item: any) =>
      item.name === 'index_split_000.html');
    console.log(firstSection[0].data);

    const section = parser.parseFromString(firstSection[0].data,
      "application/xhtml+xml")

    console.log(section);

    const ser = new XMLSerializer().serializeToString(section);

    console.log(typeof ser);


      this.iframeDoc = ser
    // this.iframeDoc = this.sanitizer.sanitize(SecurityContext.HTML, ser);

    // console.log(this.iframeDoc);




  }
}
