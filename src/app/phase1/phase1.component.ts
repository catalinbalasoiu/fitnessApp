import { Component, OnInit } from '@angular/core';
import { PHASE1RECORDS } from '../mock-phaseRecord';
import { Phase } from '../phase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phase1',
  templateUrl: './phase1.component.html',
  styleUrls: ['./phase1.component.css']
})
export class Phase1Component implements OnInit {
  phase1List = PHASE1RECORDS;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPhase(phase: Phase) {
    this.router.navigateByUrl('/phase1/' + phase.id);
  }

}
