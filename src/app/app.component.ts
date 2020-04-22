import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular';
 data = [
    {
      siteName: 'WP Product Data Portal',
      manufacturerName:[ 
        {name: 'American Force ATV', status: true},
        {name:'American Racing', status: true},
        {name:'Asant Off Road', status: true},
        {name:'Fairway Allows',status: true}],
        status:[ 
        {name: 'American Force ATV', status: true},
        {name:'American Racing', status: true},
        {name:'Asant Off Road', status: true},
        {name:'Fairway Allows',status: true}]
    },
        {
      siteName: 'WP Data Portal',
      manufacturerName:[ 
        {name: 'American Force ATV', status: true},
        {name:'American Racing', status: true},
        {name:'Asant Off Road', status: true},
        {name:'Fairway Allows',status: true}],
        status:[ 
        {name: 'American Force ATV', status: true},
        {name:'American Racing', status: true},
        {name:'Asant Off Road', status: true},
        {name:'Fairway Allows',status: true}]
    }
  ];

  settings = {
    columns: {
      siteName: {
        title: 'Site Name',
      },
      manufacturerName: {
        title: 'Manufacturer Name',
        type: 'html',
        valuePrepareFunction: (value) => {
          let returnHtml = '';
          value.forEach(function(item){
            returnHtml += `<a href="#">${item.name}</a> <br/> <br/> `
          });
        return returnHtml;
      }
      },
            status: {
        title: 'Status',
        type: 'html',
        valuePrepareFunction: (value) => {
          let returnHtml = '';
          value.forEach(function(item){
            returnHtml += `${item.status}<br/> <br/> `
          });
        return returnHtml;
      }
      }
    }
  };
}
