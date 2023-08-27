import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flag-device',
  templateUrl: './flag-device.component.html',
  styleUrls: ['./flag-device.component.scss']
})
export class FlagDeviceComponent implements OnInit {
  @Input() label: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
