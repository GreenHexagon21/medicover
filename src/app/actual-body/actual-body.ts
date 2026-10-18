import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-actual-body',
  styleUrl: './actual-body.scss',
  templateUrl: './actual-body.html',
})
export class ActualBody {
  
surgeryCards = [
  { title: 'Daganatsebészeti műtétek',      icon: 'daganatsebeszet-ikon' },
  { title: 'Érsebészeti műtét',             icon: 'ersebeszet-ikon' },
  { title: 'Fül-orr-gégészeti műtétek',     icon: 'ful-orr-ikon' },
  { title: 'Gerincsebészeti műtétek',       icon: 'gerinc-ikon' },
  { title: 'Gyermeksebészet',               icon: 'gyereksebeszet-ikon' },
  { title: 'Kéz- és lábsebészeti műtétek',  icon: 'kezsebeszet-ikon' },
  { title: 'Nőgyógyászati műtétek',         icon: 'nogyogy-ikon' },
  { title: 'Ortopédiai műtétek',            icon: 'ortopedia-ikon' },
  { title: 'Sebészeti műtétek',             icon: 'sebeszet-ikon' },
  { title: 'Szemészeti műtétek',            icon: 'szemeszet-ikon' },
  { title: 'Urológiai műtétek',             icon: 'urologia-ikon' },
  { title: 'Tartózkodás a kórházban',       icon: 'korhaz-ikon' },
  { title: 'Medicare Optika',               icon: 'optika-ikon' },
];


  
}
