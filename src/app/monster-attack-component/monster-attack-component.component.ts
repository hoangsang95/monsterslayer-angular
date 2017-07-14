import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-monster',
	templateUrl: './monster-attack-component.component.html',
	styleUrls: ['./monster-attack-component.component.css']
})
export class MonsterAttackComponentComponent implements OnInit {

	healthPlayer: number = 100;
	healthMonster: number = 100;
	disableSpecialAttack = false;
	disableHeal2 = false;
	isRunning = false;
	showDamageMonster = [];
	showDamagePlayer = [];
	showHeal = [];
	logs = [];
	
	startGame() {
		this.healthMonster = 100;
		this.healthPlayer = 100;
		this.isRunning = true;
		this.showDamageMonster = [];
		this.showDamagePlayer = [];
		this.showHeal = [];
		this.logs = [];
		this.disableSpecialAttack = false;
		this.disableHeal2 = false;
	}

	giveUp() {
		this.isRunning = false;

	}

	attack() {
		this.checkWin();
		let playerHitMonster: any = this.randomDamage(3, 10);
		let monsterHitPlayer = this.monsterHitPlayer();
		this.healthMonster -= playerHitMonster;
		this.healthPlayer -= monsterHitPlayer;
		this.showDamageMonster.push(monsterHitPlayer);
		this.showDamagePlayer.push(playerHitMonster);
		this.log(playerHitMonster,monsterHitPlayer);
		
	}

	log(playerHitMonster, monsterHitPlayer){
		this.logs.unshift({
			textHeal: '',
			textPlayer: 'Player hits Monster for ' + playerHitMonster,
			textMonster: 'Monster hits player for ' + monsterHitPlayer,
		});
	}

	monsterHitPlayer() {
		return this.randomDamage(5, 12);
	}


	specialAttack() {
		let playerHitMonster: any = this.randomDamage(10, 18);
		let monsterHitPlayer = this.monsterHitPlayer();
		this.healthMonster -= playerHitMonster;
		this.healthPlayer -= monsterHitPlayer;
		this.showDamageMonster.push(monsterHitPlayer);
		this.showDamagePlayer.push(playerHitMonster);
		this.log(playerHitMonster,monsterHitPlayer);
		this.disableSpecialAttack = true;
	}

	get disableHeal() {
		if (this.healthPlayer > 90)
			return true;
	}

	heal() {
		let heal = this.randomDamage(5, 10)
		this.healthPlayer += heal;
		this.showHeal.push(heal);
		this.logs.unshift({
			textHeal: 'You is healed ' + heal +' health',
			textPlayer: '',
			textMonster: '',
		});
		this.disableHeal2 = true;
	}

	checkWin() {
		setTimeout(() => {
			if (this.healthMonster <= 0) {
				if (confirm('You won! New game?'))
					this.startGame();
				else
					this.isRunning = false;
				return true;
			}
			if (this.healthPlayer <= 0) {
				if (confirm('You lost! New game?'))
					this.startGame();
				else
					this.isRunning = false;
				return true;
			}
		}, 500);
	}

	randomDamage(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}
	constructor() { }

	ngOnInit() {
	}

}
