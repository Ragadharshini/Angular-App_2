import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'The Shard Residences ',
      city: 'London',
      state: 'UK',
      photo: `https://www.london-se1.co.uk/news/imageuploads/1431280971_146.199.67.93.jpg`,
      availableUnits: 4,
      wifi: "Yes",
      laundry: "Yes"
    },
    {
      id: 1,
      name: 'Infinity Towers',
      city: 'Mumbai',
      state: 'India',
      photo: `https://images.adsttc.com/media/images/505b/5ee4/28ba/0d27/1300/0152/medium_jpg/stringio.jpg?1414196024`,
      availableUnits: 0,
      wifi: "No",
      laundry: "Yes"
    },
    {
      id: 2,
      name: 'Opus Hong Kong',
      city: 'Hong Kong',
      state: 'China',
      photo: `https://list.juwai.com/uploads/images/2012/08/opus2.jpg`,
      availableUnits: 1,
      wifi: "No",
      laundry: "No"
    },
    {
      id: 3,
      name: 'Princess Tower',
      city: 'Dubai',
      state: 'UAE',
      photo: `https://i0.wp.com/eppicpdm.com/wp-content/uploads/2020/12/5-2.png?ssl=1`,
      availableUnits: 1,
      wifi: "Yes",
      laundry: "No"
    },
    
    
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/