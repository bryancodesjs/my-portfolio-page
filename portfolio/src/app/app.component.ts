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
      descripcion: 'Esquematización de proyectos',
      icon: 'wireframing'
    },
    {
      servicio: 'Diseño de Mocks',
      descripcion: 'Diseño e ilustración de mocks en .PSD y Figma',
      icon: 'mockup'
    },
    {
      servicio: 'Reestilización',
      descripcion: 'Renueva tu página o aplicación web',
      icon: 'restyle'
    },
    {
      servicio: 'Wordpress',
      descripcion: 'Desarrollo y mantenimiento para tu sitio en Wordpress',
      icon: 'wordpress'
    },
    {
      servicio: 'Shopify',
      descripcion: 'Crea tu tienda en linea en Shopify en 24 horas',
      icon: 'shopify'
    },
    {
      servicio: 'CRM',
      descripcion: 'Crea un dashboard único para manejar tu negocio',
      icon: 'dashboard'
    },
    {
      servicio: 'Página Web Express',
      descripcion: 'Crea una página web para mostrar tu negocio, servicios y contacto',
      icon: 'website'
    },
    {
      servicio: 'Enterprise',
      descripcion: 'Crea una aplicación web compleja y personalizada',
      icon: 'enterprise'
    }
  ]
  trabajos = [
    {
      trabajo: 'Autogenio',
      imagen: 'autogenio',
      descripcion: 'Diseño en Figma para una app de venta de vehiculos',
      preview: 'preview-autogenio.webp'
    },
    {
      trabajo: 'Riide Travel Services',
      imagen: 'riide',
      descripcion: 'Migración de Wordpress a Angular y reestilización de una pagina web de servicios de transporte',
      preview: 'preview-riide.webp'
    },
    {
      trabajo: 'Xtron Online',
      imagen: 'xtron',
      descripcion: 'Sistema de membresías basado en la blockchain de tron desarrollado en React',
      preview: 'preview-xtron.webp'
    },
    {
      trabajo: 'Gestion de Prestamos',
      imagen: 'prestamos',
      descripcion: 'Desarrollo en Angular de CRM para solicitud y gestión de prestamos',
      preview: 'preview-prestamos.webp'
    },
    {
      trabajo: 'Academia Online',
      imagen: 'academy',
      descripcion: 'Diseño en Figma de app para clases en linea inspirado en Udemy',
      preview: 'preview-academy.webp'
    },
    {
      trabajo: 'Gestion de Expedientes',
      imagen: 'expedientes',
      descripcion: 'Desarrollo de App local para gestión de expedientes en .NET MVC',
      preview: 'privacy.webp'
    },
    {
      trabajo: 'Sembradores',
      imagen: 'sembradores',
      descripcion: 'Sistema MLM de membresías desarrollado en .NET MVC',
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
