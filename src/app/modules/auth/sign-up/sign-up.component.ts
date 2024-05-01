

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  isHoverLeft: boolean = false;
  isHoverRight: boolean = false;
  isHoverTop: boolean = false;
  isHoverBottom: boolean = false;

  onMouseMove(event: MouseEvent) {
    const boxRect: DOMRect | null = (event.target as HTMLElement).getBoundingClientRect();
    if (!boxRect) return;

    const offsetX: number = event.clientX - boxRect.left;
    const offsetY: number = event.clientY - boxRect.top;

    this.isHoverLeft = offsetX < boxRect.width / 2;
    this.isHoverRight = offsetX >= boxRect.width / 2;
    this.isHoverTop = offsetY < boxRect.height / 2;
    this.isHoverBottom = offsetY >= boxRect.height / 2;
  }

  onMouseLeave() {
    this.isHoverLeft = false;
    this.isHoverRight = false;
    this.isHoverTop = false;
    this.isHoverBottom = false;
  }
}
