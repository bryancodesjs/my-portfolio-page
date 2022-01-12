import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  // I'll use this empty array to store the portfolio item the user cliks on
  workOnModal = {
    trabajo: '',
    imagen: '',
    preview: '',
    descripcion: ''
  };

  servicios = [
    {
      servicio: 'Wireframing',
      descripcion: 'Production of interactive wireframes and flows using Balsamiq',
      icon: 'wireframing'
    },
    {
      servicio: 'Prototype Design',
      descripcion: 'Plan and design of high-fidelity mockups and prototypes using Figma +/ Photoshop',
      icon: 'mockup'
    },
    {
      servicio: 'Website Restyling',
      descripcion: 'Partially/Completelly modify your current site/app.',
      icon: 'restyle'
    },
    {
      servicio: 'WordPress',
      descripcion: 'Develop/Maintain/Modify a WordPress site',
      icon: 'wordpress'
    },
    {
      servicio: 'Shopify',
      descripcion: 'Design and deploy your own Shopify store in 24 hours',
      icon: 'shopify'
    },
    {
      servicio: 'CRM',
      descripcion: 'Design and Develop a custom Content Management System to manage your business',
      icon: 'dashboard'
    },
    {
      servicio: 'Express Website',
      descripcion: 'Design and create a one-page website to show your business, services and contact information',
      icon: 'website'
    },
    {
      servicio: 'Enterprise',
      descripcion: 'Create a complex and custom web app to match all your requirements',
      icon: 'enterprise'
    }
  ]
  trabajos = [
    {
      trabajo: 'Creative Directory',
      imagen: 'directorio-creativo',
      descripcion: 'Development of Design System for the first government-backed freelance directory in the Dominican Republic.',
      preview: 'preview-directorio-creativo.webp'
    },
    {
      trabajo: 'Autogenio',
      imagen: 'autogenio',
      descripcion: 'UI Design of a website for a car sales company',
      preview: 'preview-autogenio.webp'
    },
    {
      trabajo: 'Riide Travel Services',
      imagen: 'riide',
      descripcion: 'Redesign and migration of private transportation website from WordPress to Angular 12',
      preview: 'preview-riide.webp'
    },
    {
      trabajo: 'Xtron Online',
      imagen: 'xtron',
      descripcion: 'Design and development (React) of a MLM Web3 app based on the Tron blockchain',
      preview: 'preview-xtron.webp'
    },
    {
      trabajo: 'Loan Management System',
      imagen: 'prestamos',
      descripcion: 'Design and development of a custom loan management system for a credit firm',
      preview: 'preview-prestamos.webp'
    },
    {
      trabajo: 'Online Academy',
      imagen: 'academy',
      descripcion: 'UI Design for an online academy startup inspired on Udemy',
      preview: 'preview-academy.webp'
    },
    {
      trabajo: 'Investigation Records Management',
      imagen: 'expedientes',
      descripcion: 'Design and development (.NET MVC) of a complex CRM for managing investigation records',
      preview: 'privacy.webp'
    },
    {
      trabajo: 'Sembradores',
      imagen: 'sembradores',
      descripcion: 'Design and development (.NET MVC) of a MLM web app with Coinpayments API integration',
      preview: 'preview-sembradores.webp'
    },
  ]

  navigateTo(sitename: string) {
    switch(sitename) {
      case 'linkedin':
        window.location.href = "https://www.linkedin.com/in/bryancamposhernandez/";
        break;
      case 'github':
        window.location.href = "https://github.com/bryancodesjs";
        break;
      case 'whatsapp':
        window.location.href = "https://api.whatsapp.com/send?phone=18296436666";
        break;
      case 'instagram':
        window.location.href = "https://instagram.com/br.void";
        break;
      case 'email':
        window.location.href = "mailto:bcampos100k@gmail.com";
        break;
      case 'agenda':
        window.location.href = "https://bryancamposwebdesignampdevelopment.setmore.com/bookappointment";
        break;
      default:
        window.location.href = "https://bryancampos.netlify.com";
        break;

    }
  }

  //toggle preview modal
  toggleModal(work: any){
    console.log(work);
    this.workOnModal = work;
    if( (document.getElementById('previewmodal') as HTMLElement).className == 'modal fade show d-block') {
      (document.getElementById('previewmodal') as HTMLElement).className = 'modal fade';
      (document.getElementById('body') as HTMLElement).className = '';
    } else {
      (document.getElementById('previewmodal') as HTMLElement).className = 'modal fade show d-block';
      (document.getElementById('body') as HTMLElement).className = 'overflow-hidden';
    }
  }

  //scroll to anchor position
  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
