import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  username: string;

  getServerStatus() {
    return this.serverStatus;
  }
  resetUser() {
    return this.username = "";

  }
  test(event: any) {
    console.log(event)
  }
  updateUser(event: Event) {
    this.username = (<HTMLInputElement> event.target).value;
  }
}
