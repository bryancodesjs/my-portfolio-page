import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  // I'll use this empty array to store in memory the details of a portfolio item a user cliks on
  // so when the preview modal shows, it will take the info of the item in this array
  workOnModal = {
    trabajo: '',
    imagen: '',
    preview: '',
    descripcion: '',
    skills: [],
    figmaLink: '',
    githubLink: '',
    itemWebsite: '',
  };

  //List of Freelance services offered
  servicios = [
    {
      servicio: 'Wireframing',
      descripcion:
        'Production of interactive wireframes and user-flows using Balsamiq',
      icon: 'wireframing',
    },
    {
      servicio: 'Production-ready Prototypes',
      descripcion:
        'Planning, researching and design of high-fidelity mockups and prototypes using Figma and Photoshop',
      icon: 'mockup',
    },
    {
      servicio: 'Website Restyling',
      descripcion: 'Partially/Completely modifying existing websites.',
      icon: 'restyle',
    },
    {
      servicio: 'WordPress',
      descripcion: 'Developing/Maintaining/Modifying WordPress sites',
      icon: 'wordpress',
    },
    {
      servicio: 'Shopify',
      descripcion: 'Designing and deploying custom Shopify stores',
      icon: 'shopify',
    },
    {
      servicio: 'CMS',
      descripcion:
        'Designing and developing custom UIs for Content Management Systems',
      icon: 'dashboard',
    },
    {
      servicio: 'Express Websites',
      descripcion: 'Designing and coding static websites and landing pages',
      icon: 'website',
    },
    {
      servicio: 'Enterprise',
      descripcion: 'Designing and developing complex/custom user interfaces',
      icon: 'enterprise',
    },
  ];

  //Portfolio Items
  trabajos = [
    {
      trabajo: 'ESS',
      imagen: 'preview-ess',
      descripcion: 'Epidemiologic case tracking and management system',
      preview: 'ess.webp',
      skills: ['Angular', 'UX/UI Prototyping', 'Figma'],
      figmaLink:
        'https://www.figma.com/proto/d4ViJ2erFPA883zElqkiHA/ESS-2.0-Prototype?node-id=13-666&starting-point-node-id=1%3A2&mode=design&t=o0gmsKWMWEXXi4lw-1',
      githubLink: 'none',
      itemWebsite: 'none',
    },
    {
      trabajo: 'Creative Directory',
      imagen: 'directorio-creativo',
      descripcion:
        'Development of a Design System for the first government-backed freelance directory in the Dominican Republic',
      preview: 'preview-directorio-creativo.webp',
      skills: ['Angular', 'UX/UI Design', 'figma', 'typescale'],
      figmaLink:
        'https://www.figma.com/proto/ISDiJNDycHPaOqvknp9yJi/Directorio-Creativo?node-id=1%3A2',
      githubLink: 'none',
      itemWebsite: 'none',
    },
    {
      trabajo: 'Autogenio',
      imagen: 'autogenio',
      descripcion: "UI Design for a car sales company's website",
      preview: 'preview-autogenio.webp',
      skills: ['Angular', 'UX/UI Design', 'Photoshop'],
      figmaLink: 'none',
      githubLink: 'none',
      itemWebsite: 'none',
    },
    {
      trabajo: 'Riide Travel Services',
      imagen: 'riide',
      descripcion:
        'Redesign and migration of private transportation website from WordPress to Angular 12',
      preview: 'preview-riide.webp',
      skills: [
        'Angular',
        'UX/UI Design',
        'Firebase Auth',
        'Firebase Realtime DB',
      ],
      figmaLink: 'none',
      githubLink: 'https://github.com/bryancodesjs/riide.git',
      itemWebsite: 'https://riidetravel.com',
    },
    {
      trabajo: 'Xtron Online',
      imagen: 'xtron',
      descripcion:
        'Design and development (React) of a MLM Web3 app based on the Tron blockchain',
      preview: 'preview-xtron.webp',
      skills: ['React', 'UX/UI Design', 'Photoshop'],
      figmaLink: 'none',
      githubLink: 'none',
      itemWebsite: 'none',
    },
    {
      trabajo: 'Loan Management System',
      imagen: 'prestamos',
      descripcion:
        'Design and development of a custom loan management system for a credit firm',
      preview: 'preview-prestamos.webp',
      skills: ['Angular', 'Node.js', 'UX/UI Design', 'Figma'],
      figmaLink: 'none',
      githubLink: 'none',
      itemWebsite: 'none',
    },
    {
      trabajo: 'Online Academy',
      imagen: 'academy',
      descripcion: 'UI Design for an online academy startup inspired on Udemy',
      preview: 'preview-academy.webp',
      skills: ['Angular', 'UX/UI Design', 'Figma'],
      figmaLink: 'none',
      githubLink: 'https://github.com/bryancodesjs/academy.com',
      itemWebsite: 'none',
    },
  ];

  //This function triggers a redirect to the specified URL
  navigateTo(sitename: string) {
    switch (sitename) {
      case 'linkedin':
        window.location.href =
          'https://www.linkedin.com/in/bryancamposhernandez/';
        break;
      case 'github':
        window.location.href = 'https://github.com/bryancodesjs';
        break;
      case 'whatsapp':
        window.location.href =
          'https://api.whatsapp.com/send?phone=18296436666';
        break;
      case 'instagram':
        window.location.href = 'https://instagram.com/br.void';
        break;
      case 'email':
        window.location.href = 'mailto:bcampos100k@gmail.com';
        break;
      case 'agenda':
        window.location.href =
          'https://bryancamposwebdesignampdevelopment.setmore.com/bookappointment';
        break;
      case 'figma':
        window.location.href = this.workOnModal.figmaLink;
        break;
      case 'githubItem':
        window.location.href = this.workOnModal.githubLink;
        break;
      case 'itemWebsite':
        window.location.href = this.workOnModal.itemWebsite;
        break;
      default:
        window.location.href = 'https://bryancampos.netlify.com';
        break;
    }
  }

  //This function hides/shows the item preview modal
  toggleModal(work: any) {
    //console.log(work);

    //assigns the values of the clicked item to the workOnModal array
    this.workOnModal = work;

    //if the preview modal is showing then...
    if (
      (document.getElementById('previewmodal') as HTMLElement).className ==
      'modal fade show d-block'
    ) {
      //let's hide it
      (document.getElementById('previewmodal') as HTMLElement).className =
        'modal fade';
      //and delete all classes from the body node
      (document.getElementById('body') as HTMLElement).className = '';
    } else {
      //if the preview modal is not showing, then...
      //add these cute classes to it
      (document.getElementById('previewmodal') as HTMLElement).className =
        'modal fade show d-block';
      //and let's stop all this scrolling on the body node
      (document.getElementById('body') as HTMLElement).className =
        'overflow-hidden';
    }
  }

  //scroll to anchor position which is passed to the function
  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
