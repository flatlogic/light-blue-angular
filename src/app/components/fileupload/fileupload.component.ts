import { Component, ViewEncapsulation } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: '[fileupload]',
  templateUrl: './fileupload.template.html',
  styleUrls: [ './fileupload.style.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class Fileupload {
  public uploader:FileUploader = new FileUploader({url: URL});

  ngOnInit(): void {
    setInterval(() => {
      console.log(this.uploader)
    }, 10000)
  }

  cancelItem(item: any): void {
    item.isUploading ? item.cancel() : item.remove();
  }
}
