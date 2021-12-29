import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

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
      descripcion: 'Diseño en Figma para una app de venta de vehiculos'
    },
    {
      trabajo: 'Riide Travel Services',
      imagen: 'riide',
      descripcion: 'Migración de Wordpress a Angular y reestilización de una pagina web servicios de transporte'
    },
    {
      trabajo: 'Xtron Online',
      imagen: 'xtron',
      descripcion: 'Sistema de membresías basado en la blockchain de tron desarrollado en React'
    },
    {
      trabajo: 'Gestion de Prestamos',
      imagen: 'prestamos',
      descripcion: 'Desarrollo en Angular de CRM para solicitud y gestión de prestamos'
    },
    {
      trabajo: 'Academia Online',
      imagen: 'academy',
      descripcion: 'Diseño en Figma de app para clases en linea inspirado en Udemy'
    },
    {
      trabajo: 'Gestion de Expedientes',
      imagen: 'expedientes',
      descripcion: 'Desarrollo de App local para gestión de expedientes en .NET MVC'
    },
    {
      trabajo: 'Sembradores',
      imagen: 'sembradores',
      descripcion: 'Sistema MLM de membresías desarrollado en .NET MVC'
    },
  ]
}
