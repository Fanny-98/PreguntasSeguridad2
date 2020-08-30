import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas-seguridad2',
  templateUrl: './preguntas-seguridad2.component.html',
  styleUrls: ['./preguntas-seguridad2.component.css']
})
export class PreguntasSeguridad2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}export class NzDemoAlertClosableComponent {
  afterClose(): void {
    console.log('close');
  }
}