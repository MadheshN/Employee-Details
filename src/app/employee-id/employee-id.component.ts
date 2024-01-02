import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-id',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-id.component.html',
  styleUrl: './employee-id.component.css'
})
export class EmployeeIdComponent {
  public hideSalary=false;
employees=[
  {id:'104',name:'sairaj',designation:'sse',date:'5/6/2016',address:'hyderbad,hitechcity',salary:750000},
  {id:'102',name:'Manoj',designation:'TL',date:'5/7/2018',address:'Banglore,whitefield',salary:900000},
  {id:'105',name:'Ramesh',designation:'se',date:'7/12/2016',address:'hyderbad,hitechcity',salary:65546},
  {id:'340',name:'suresh',designation:'sse',date:'9/10/2016',address:'Chennai,Sipcot',salary:654645},
  {id:'456',name:'Ravi',designation:'AM',date:'4/6/2016',address:'Banglore,whitefield',salary:34555},
  {id:'688',name:'sam',designation:'se',date:'3/6/2016',address:'hyderbad,hitechcity',salary:34534},
  {id:'478',name:'ram',designation:'sse',date:'3/6/2016',address:'Chennai,Sipcot',salary:34534534},
  {id:'346',name:'jai',designation:'TL',date:'3/6/2016',address:'Banglore,whitefield',salary:4534534},
  {id:'457',name:'kamal',designation:'M',date:'3/6/2016',address:'hyderbad,hitechcity',salary:453454},
  {id:'124',name:'mona',designation:'Se',date:'3/6/2016',address:'Chennai,Sipcot',salary:364535},


]

toggleSalaryVisibility()
{
  this.hideSalary=!this.hideSalary;
}
}
