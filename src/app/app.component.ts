import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  data = [
    {
      parentBrand: "WP Product Data Portal",
      childBrands: [
        {
          name: "American Force ATV",
          countries: ["usa", "canada", "india"],
          status: true
        },
        {
          name: "American Racing",
          countries: ["usa", "canada", "india"],
          status: true
        },
        {
          name: "Asant Off Road",
          countries: ["usa", "canada", "india"],
          status: true
        },
        {
          name: "Fairway Allows",
          countries: ["usa", "canada", "india"],
          status: true
        }
      ],
      status: [
        {
          name: "American Force ATV",
          countries: ["usa", "canada", "india"],
          status: true
        },
        {
          name: "American Racing",
          countries: ["usa", "canada", "india"],
          status: true
        },
        {
          name: "Asant Off Road",
          countries: ["usa", "canada", "india"],
          status: true
        },
        {
          name: "Fairway Allows",
          countries: ["usa", "canada", "india"],
          status: true
        }
      ],
      techFields: [
        {
          name: "American Force ATV",
          countries: ["usa", "canada", "india"],
          status: true
        },
        {
          name: "American Racing",
          countries: ["usa", "canada", "india"],
          status: true
        },
        {
          name: "Asant Off Road",
          countries: ["usa", "canada", "india"],
          status: true
        },
        {
          name: "Fairway Allows",
          countries: ["usa", "canada", "india"],
          status: true
        }
      ]
    },
    {
      parentBrand: "WP Data Portal",
      childBrands: [
        {
          name: "American Force ATV",
          countries: ["usa", "canada", "india"],
          status: true
        },
        {
          name: "American Racing",
          countries: ["usa", "canada", "india"],
          status: true
        },
        {
          name: "Asant Off Road",
          countries: ["usa", "canada", "india"],
          status: true
        },
        {
          name: "Fairway Allows",
          countries: ["usa", "canada", "india"],
          status: true
        }
      ],
      status: [
        {
          name: "American Force ATV",
          countries: ["usa", "canada", "india"],
          status: true
        },
        {
          name: "American Racing",
          countries: ["usa", "canada", "india"],
          status: true
        },
        {
          name: "Asant Off Road",
          countries: ["usa", "canada", "india"],
          status: true
        },
        {
          name: "Fairway Allows",
          countries: ["usa", "canada", "india"],
          status: true
        }
      ],
      techFields: [
        {
          name: "American Force ATV",
          countries: ["usa", "canada", "india"],
          status: true
        },
        {
          name: "American Racing",
          countries: ["usa", "canada", "india"],
          status: true
        },
        {
          name: "Asant Off Road",
          countries: ["usa", "canada", "india"],
          status: true
        },
        {
          name: "Fairway Allows",
          countries: ["usa", "canada", "india"],
          status: true
        }
      ]
    }
  ];

  settings = {
    columns: {
      parentBrand: {
        title: "Parent Brand"
      },
      childBrands: {
        title: "Child Brands",
        type: "html",
        valuePrepareFunction: value => {
          let returnHtml = "";
          value.forEach(function(item) {
            returnHtml += `<a href="#">${item.name}</a> <br/> <br/> `;
          });
          return returnHtml;
        }
      },
      status: {
        title: "Status",
        type: "html",
        valuePrepareFunction: value => {
          let returnHtml = "";
          value.forEach(function(item) {
            returnHtml += `${item.status}<br/> <br/> `;
          });
          return returnHtml;
        }
      },
      techFields: {
        title: "Status",
        type: "html",
        valuePrepareFunction: value => {
          let returnHtml = "";
          value.forEach(function(item) {
            returnHtml += '<div class="boxed">'
            item.countries.forEach(function(country) {
              returnHtml += `  ${country}  `;
            });
            returnHtml += '</div> <br/>'
          });
          return returnHtml;
        }
      }
    }
  };
}
