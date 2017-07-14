import { Component, OnInit } from '@angular/core';

@Component({
	// selector: 'app-servers',
	// selector: '[app-servers]',
	selector: '.app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
	serverCreateStatus = 'No server was created.';
	serverName: string = '';
	created: boolean = false;
	servers = ['server1','server2'];
	constructor() {
		setTimeout(()=>{
			this.allowNewServer = true;
		},2000);
	}

	ngOnInit() {
	}

	createServer(){
		this.serverCreateStatus = 'Server was created.' + this.serverName;
		this.created = true;
		this.servers.push(this.serverName);
	}

	updateServerName(event){
		this.serverName = event;
	}
}
