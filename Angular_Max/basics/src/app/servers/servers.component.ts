import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allow = true;
  serverCreationStatus = 'No Server was Created';
  serverName = '';
  servers = ['s1', 's2', 's3'];

  constructor() {
    setTimeout(() => {
      this.allow = !this.allow;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created , name is ' + this.serverName;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: any) {
    this.serverName = event;
  }
}
