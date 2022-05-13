import { Component, Input } from '@angular/core';
import { EmployeeService } from './employee.service';

// Note: we have enabled bootstrap inside this app
// number:'2.1-1' -> before decimal 2 digits and afte decimal min-max digits
// currency:'INR':true:'4.2-2'  -> currecy:symbol:showsymbol(boolean):format like above number withdecimals
// slice -> Used for Slicing strings
@Component({
    selector: 'gd-angular-pipes',
    template: `
    <mark><span class='h5'>Pipes in Angular:</span></mark><br/><hr/>
    
        <span class='h6'>
                Movie Name:  {{movie.title | uppercase}} <br/>
                Collection:  {{movie.collections | number}}<br/>
                Rating:     {{movie.rating | number:'1.1-1'}}<br/>  
                Ticket Cost (Max):  {{movie.ticketCost | currency:'INR':true:'4.2-2'}}<br/>
                Released Date: {{movie.releasedate | date}}<br/>
                Total US Collection: {{movie.usCollection | percent:'2.1-1'}}<br/>
                India Currency Code: {{'INDIA' | slice:0:2}}R <br/><br/>
            <br/>
                <!-- With JSON pipe: { "foo": "bar",  "xyz": 3, "numbers": [ 1, 2, 3, 4, 5 ]  } --> 
                With JSON pipe: {{object | json}}<br/>
                <!-- Without JSON pipe: [object Object] -->
                Without JSON pipe: {{object}}<br/><br/>
            <br/>
                This is the custom pipe for news headlines:<br/>
                Enter the number of characters you want to see in news headline:<br/>
                (Word count:{{newsHeadline | wordcount }}):<br/> 
                (Total char count:{{newsHeadline | charcount }}):<br/> 
                <input type='text' [(ngModel)]="num" />
                <br/> 
                <span class="text-primary" style="background-color: rgba(0,0,255,0.1);">
                 <a href="#">{{newsHeadline | summary:num}}</a>
                </span>
            <br/>
        </span>
        <br/>

    `
})
export class PipesComponent {
    movie = {
        title: "Avenger Endgame",
        collections: 99989898999,
        rating: 8.9745,
        ticketCost: 1290.95,
        releasedate: new Date(2019, 4, 26),
        usCollection: 0.7519
    }

    //json pipe
    object: Object = { 
        "item": "gold",  
        "price": 3400, 
        "weight": [ 1.2, 2.3, 3.6, 4.1, 5.0 ]
    };


    //custom pipe
    num:number=20;
    newsHeadline="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
}

@Component({
    selector: 'app-employee-names',
    template:`  
    <mark>
        <span class='h5'>Employee Names
        :</span>
    </mark>
    <br/><hr/>
    <span class='h6'>
        <ul *ngFor="let emp of employees;let i=index;" class="list-group">
            <li class="list-group-item"> {{ emp.name | uppercase }} </li>
        </ul>
    </span>
    `,
    styles: [],
    providers: [EmployeeService]
  })
  export class EmployeeNamesComponent {
      public employees:any =[];
      constructor(private _employeeService : EmployeeService){
              this.employees = _employeeService.getEmployees();
    }
  } 
  
export const AllCompComponent =
    [PipesComponent,
     EmployeeNamesComponent
    ];
