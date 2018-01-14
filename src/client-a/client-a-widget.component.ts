import { Component, Input } from '@angular/core';
import { ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'client-a-widget',
  template: `
    <div id="widget">
        <h1>Client-A Widget</h1>
        <input [formControl]="control"> {{ value$ | push }}
    </div>
  `,
  styles: [`
        #widget { padding:10px; border: 2px darkred dashed }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class ClientAWidgetComponent implements OnInit {
    control = new FormControl();
    value$: Observable<string>;
  
    ngOnInit(): void {
      this.value$ = this.control.valueChanges;
    }
}

