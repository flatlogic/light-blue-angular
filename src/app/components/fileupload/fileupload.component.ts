import { Component, ViewEncapsulation } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: '[fileupload]',
  templateUrl: './fileupload.template.html',
  styleUrls: [ './fileupload.style.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class Fileupload {

  ngOnInit(): void {
    // Initialize the jQuery File Upload widget:
    var $fileupload = jQuery('#fileupload');
    $fileupload.fileupload({
      // Uncomment the following to send cross-domain cookies:
      //xhrFields: {withCredentials: true},
      url: '/blabla/bla',
      dropZone: jQuery('#dropzone')
    });

    // Enable iframe cross-domain access via redirect option:
    $fileupload.fileupload(
      'option',
      'redirect',
      window.location.href.replace(
        /\/[^\/]*$/,
        '/cors/result.html?%s'
      )
    );

    // Load existing files:
    jQuery.ajax({
      // Uncomment the following to send cross-domain cookies:
      //xhrFields: {withCredentials: true},
      url: $fileupload.fileupload('option', 'url'),
      dataType: 'json',
      context: $fileupload[0]
    }).done(function (result) {
      jQuery(this).fileupload('option', 'done')
        .call(this, null, {result: result});
    });

  }

}
