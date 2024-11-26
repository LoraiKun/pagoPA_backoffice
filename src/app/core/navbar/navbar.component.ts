import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarService } from '../../services/sidebar-service/sidebar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SidebarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isVisible: boolean = true


  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.isVisible$.subscribe((isVisible) => {
      this.isVisible = isVisible;
    });
  }
}
