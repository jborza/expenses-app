import { Component } from '@angular/core';
@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    expanded = false;
    toggleState() {
        this.expanded = this.expanded === false ? true : false;
    }
}