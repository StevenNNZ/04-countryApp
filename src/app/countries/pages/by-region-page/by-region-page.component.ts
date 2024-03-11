import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

import { Region } from '../../interfaces/region.type';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public regionSelected?: Region;
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.regionSelected = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region) {
    this.regionSelected = region;
    this.countriesService
      .searchRegion(region)
      .subscribe((countries) => (this.countries = countries));
  }
}
