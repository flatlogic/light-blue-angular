import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'inbox',
  templateUrl: './inbox.template.html',
  styleUrls: ['./inbox.style.scss']
})

export class InboxComponent implements AfterViewInit, OnDestroy {
  mailListShow: boolean = true;
  mailFormShow: boolean = false;
  mailDetailShow: boolean = false;
  currentMail: any;
  currentFolderName: string = 'Inbox';
  repliedMessage: any;

  public showAlert: boolean = false;
  public timer: any;

  public ngAfterViewInit(): void {
    this.timer = setTimeout(() => { this.onShowAlert(); }, 3000);
  }

  public ngOnDestroy(): void {
    if (Boolean(this.timer)) {
      clearTimeout(this.timer);
    }
  }

  public onShowAlert(): void {
    this.showAlert = true;
  }

  public onHideAlert(): void {
    this.showAlert = false;
  }

  handleComposeBtn(): void {
    this.repliedMessage = void 0;
    this.changeEmailComponents('mailForm');
  }

  onReplyMail(mail: any): void {
    this.currentMail = mail;
    this.changeEmailComponents('mailDetail');
  }

  changeEmailComponents(componentName: string): void {
    const mailState = {
      'mailList': (that): void => {
        that.mailFormShow = that.mailDetailShow = false;
        that.mailListShow = true;
      },

      'mailForm': (that): void => {
        that.mailListShow = that.mailDetailShow = false;
        that.mailFormShow = true;
      },

      'mailDetail': (that): void => {
        that.mailListShow = that.mailFormShow = false;
        that.mailDetailShow = true;
      },
    };

    mailState[componentName](this);
  }

  setFolderName(folderName: string): void {
    this.currentFolderName = folderName;
    if (!this.mailListShow) {
      this.changeEmailComponents('mailList');
    }
  }

}
