import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isScrolled = false;
  menuOpen = false;

  @HostListener('window:scroll')
  onScroll() { this.isScrolled = window.scrollY > 60; }

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  scrollTo(id: string) {
    this.menuOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  readonly services = [
    { icon: '🏗️', title: 'Commercial Construction', desc: 'Offices, retail centers, hotels, and industrial facilities delivered on time and on budget.' },
    { icon: '🏠', title: 'Residential Development', desc: 'Custom homes, apartment complexes, and luxury residences built to last generations.' },
    { icon: '🔧', title: 'Renovation & Fit-Out', desc: 'Full-scale interior renovations and fit-outs for commercial and residential spaces.' },
    { icon: '🌉', title: 'Civil Engineering', desc: 'Infrastructure projects, road works, and structural engineering solutions.' }
  ];

  readonly projects = [
    { name: 'Helios Tower', category: 'Commercial', year: '2024', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=70' },
    { name: 'Marina Residences', category: 'Residential', year: '2023', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=70' },
    { name: 'Piraeus Logistics Hub', category: 'Industrial', year: '2023', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=70' },
    { name: 'Thessaloniki Retail Park', category: 'Commercial', year: '2022', img: 'https://images.unsplash.com/photo-1590072658-f4779426fec5?w=700&q=70' }
  ];

  readonly stats = [
    { value: '30+', label: 'Years Experience' },
    { value: '850+', label: 'Projects Completed' },
    { value: '€1.2B', label: 'Total Project Value' },
    { value: '450', label: 'Skilled Workers' }
  ];

  readonly process = [
    { num: '01', title: 'Consultation', desc: 'We meet to understand your vision, timeline, and budget constraints in full detail.' },
    { num: '02', title: 'Planning & Design', desc: 'Our engineers and architects develop detailed plans, permits, and project schedules.' },
    { num: '03', title: 'Construction', desc: 'Expert teams execute the build to the highest safety and quality standards.' },
    { num: '04', title: 'Delivery', desc: 'Final inspection, handover, and a full after-care programme for peace of mind.' }
  ];
}
