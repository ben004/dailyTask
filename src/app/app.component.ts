import { Component } from '@angular/core';
import { isEmpty } from 'lodash';
import * as moment from 'moment';
import { Message } from '../common/interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dailyTask';
  messages: Message[] = [];
  inputValue = "";
  notShow = true;
  getValue (event: any) {
    this.inputValue = event;
  }

  returnSendTime () {
    return moment().format('hh:mm A | MMM DD, YYYY');
  }

  sendMessage() {
    if (!isEmpty(this.inputValue)) {
      const message: Message = {
        time: this.returnSendTime(),
        message: this.inputValue,
      }
      this.messages.push(message);
      this.inputValue = "";
    }
  }

  addEmoji(event: any) {
    this.inputValue += event.emoji.native;
  }
}
