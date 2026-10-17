import { Component,OnInit } from '@angular/core';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  imports: [TieredMenuModule, ButtonModule],
  selector: 'app-menu',
  styleUrl: './menu.scss',
  templateUrl: './menu.html',
})
export class Menu {
  items: MenuItem[] | undefined;

  ngOnInit() {

    this.items = [
  {
    id: 'mutetek',
    label: 'Műtétek',
    icon: 'pi pi-file',
    items: [
      {
        label: 'New',
        icon: 'pi pi-plus',
        items: [
          { label: 'Document', icon: 'pi pi-file' },
          { label: 'Image', icon: 'pi pi-image' },
          { label: 'Video', icon: 'pi pi-video' }
        ]
      },
      { label: 'Open', icon: 'pi pi-folder-open' },
      { label: 'Print', icon: 'pi pi-print' }
    ]
  },
  {
    id: 'viszgalatok',
    label: 'Vizsgálatok',
    icon: 'pi pi-pencil',
    items: [
      { label: 'Copy', icon: 'pi pi-copy' },
      { label: 'Delete', icon: 'pi pi-trash' }
    ]
  },
  {
    id: 'szolgaltatohelyek',
    label: 'Szolgáltatóhelyek',
    icon: 'pi pi-pencil',
    items: [
      { label: 'Copy', icon: 'pi pi-copy' },
      { label: 'Delete', icon: 'pi pi-trash' }
    ]
  },
  {
    id: 'arak',
    label: 'Árok',
    icon: 'pi pi-pencil',
    items: [
      { label: 'Copy', icon: 'pi pi-copy' },
      { label: 'Delete', icon: 'pi pi-trash' }
    ]
  },
  {
    id: 'orvosok',
    label: 'Orvosok',
    icon: 'pi pi-pencil',
    items: [
      { label: 'Copy', icon: 'pi pi-copy' },
      { label: 'Delete', icon: 'pi pi-trash' }
    ]
  },
  {
    id: 'rolunk',
    label: 'Rólunk',
    icon: 'pi pi-pencil',
    items: [
      { label: 'Copy', icon: 'pi pi-copy' },
      { label: 'Delete', icon: 'pi pi-trash' }
    ]
  },
  {
    id: 'kapcsolat',
    label: 'Kapcsolat',
    icon: 'pi pi-pencil',
    items: [
      { label: 'Copy', icon: 'pi pi-copy' },
      { label: 'Delete', icon: 'pi pi-trash' }
    ]
  },
  {
    id: 'fitness-wellness',
    label: 'Fitness-wellness',
    icon: 'pi pi-pencil',
    items: [
      { label: 'Copy', icon: 'pi pi-copy' },
      { label: 'Delete', icon: 'pi pi-trash' }
    ]
  },
  {
    id: 'webshop',
    label: 'Webshop',
    icon: 'pi pi-pencil',
    items: [
      { label: 'Copy', icon: 'pi pi-copy' },
      { label: 'Delete', icon: 'pi pi-trash' }
    ]
  }
];
  }
}
