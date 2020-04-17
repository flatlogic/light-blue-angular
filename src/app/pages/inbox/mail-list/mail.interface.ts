export interface Mail {
  id: number;
  sender: string;
  senderMail: string;
  subject: string;
  date: string;
  paperclip: boolean;
  attachment: boolean;
  unread: boolean;
  starred: boolean;
  folderId: number;
  selected: boolean;
  attachments: string[];
  body: string;
  timestamp: number;
}
