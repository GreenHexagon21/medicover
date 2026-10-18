import { NgTemplateOutlet } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  imports: [NgTemplateOutlet],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu implements OnInit {
  items: MenuItem[] = [];
  openId: string | null = null;

  ngOnInit(): void {
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
              { label: 'Video', icon: 'pi pi-video' },
            ],
          },
          { label: 'Open', icon: 'pi pi-folder-open' },
          { label: 'Print', icon: 'pi pi-print' },
        ],
      },
      {
        id: 'viszgalatok',
        label: 'Vizsgálatok',
        icon: 'pi pi-pencil',
        items: [
          { label: 'Copy', icon: 'pi pi-copy' },
          { label: 'Delete', icon: 'pi pi-trash' },
        ],
      },
      {
        id: 'szolgaltatohelyek',
        label: 'Szolgáltatóhelyek',
        icon: 'pi pi-pencil',
        items: [
          { label: 'Copy', icon: 'pi pi-copy' },
          { label: 'Delete', icon: 'pi pi-trash' },
        ],
      },
      {
        id: 'arak',
        label: 'Árok',
        icon: 'pi pi-pencil',
        items: [
          { label: 'Copy', icon: 'pi pi-copy' },
          { label: 'Delete', icon: 'pi pi-trash' },
        ],
      },
      {
        id: 'orvosok',
        label: 'Orvosok',
        icon: 'pi pi-pencil',
        items: [
          { label: 'Copy', icon: 'pi pi-copy' },
          { label: 'Delete', icon: 'pi pi-trash' },
        ],
      },
      {
        id: 'rolunk',
        label: 'Rólunk',
        icon: 'pi pi-pencil',
        items: [
          { label: 'Copy', icon: 'pi pi-copy' },
          { label: 'Delete', icon: 'pi pi-trash' },
        ],
      },
      {
        id: 'kapcsolat',
        label: 'Kapcsolat',
        icon: 'pi pi-pencil',
        items: [
          { label: 'Copy', icon: 'pi pi-copy' },
          { label: 'Delete', icon: 'pi pi-trash' },
        ],
      },
      {
        id: 'fitness-wellness',
        label: 'Fitness-wellness',
        icon: 'pi pi-pencil',
        items: [
          { label: 'Copy', icon: 'pi pi-copy' },
          { label: 'Delete', icon: 'pi pi-trash' },
        ],
      },
      {
        id: 'webshop',
        label: 'Webshop',
        icon: 'pi pi-pencil',
        items: [
          { label: 'Copy', icon: 'pi pi-copy' },
          { label: 'Delete', icon: 'pi pi-trash' },
        ],
      },
    ];
  }

  openMenu(item: MenuItem): void {
    this.openId = item.items?.length ? (item.id ?? null) : null;
  }

  onTopClick(item: MenuItem, event: MouseEvent): void {
    if (item.items?.length) {
      this.openMenu(item);
      return;
    }

    this.activate(item, event);
  }

  onItemClick(item: MenuItem, event: MouseEvent): void {
    if (item.items?.length) {
      return;
    }

    this.activate(item, event);
  }

  onFocusOut(event: FocusEvent): void {
    const container = event.currentTarget as HTMLElement;
    const next = event.relatedTarget as Node | null;

    if (!next || !container.contains(next)) {
      this.closeMenu();
    }
  }

  closeMenu(): void {
    this.openId = null;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target;

    if (!(target instanceof Element) || !target.closest('.menu-container')) {
      this.closeMenu();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    const active = document.activeElement as HTMLElement | null;
    const topItem = active?.closest('.menu-item');
    const trigger = topItem?.querySelector<HTMLButtonElement>('.menu-trigger');

    this.closeMenu();
    trigger?.focus();
  }

  private activate(item: MenuItem, event: MouseEvent): void {
    item.command?.({ originalEvent: event, item });
    this.closeMenu();
  }
}