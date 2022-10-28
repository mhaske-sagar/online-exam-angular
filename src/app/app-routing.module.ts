import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AdditionComponent } from './addition/addition.component';
import { AppComponent } from './app.component';
import { ArrayComponent } from './array/array.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { EmployeepComponent } from './employeep/employeep.component';
import { FormComponent } from './form/form.component';
import { InterfaceexComponent } from './interfaceex/interfaceex.component';
import { LoginComponent } from './login/login.component';
import { MasterComponent } from './master/master.component';
import { ParentDComponent } from './parent-d/parent-d.component';
import { ParentComponent } from './parent/parent.component';
import { Parent1Component } from './parent1/parent1.component';
import { ParentsComponent } from './parents/parents.component';
import { PipeComponent } from './pipe/pipe.component';
import { RegistationComponent } from './registation/registation.component';
import { Service2Component } from './service2/service2.component';
import { Sevice1Component } from './sevice1/sevice1.component';
import { WebserviceComponent } from './webservice/webservice.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"addition",component:AdditionComponent},
  {path:"array",component:ArrayComponent},
  {path:"account",component:AccountComponent},
  {path:"Parent",component:ParentComponent},
  {path:"transfer",component:InterfaceexComponent},
  {path:"parents",component:ParentsComponent},
  {path:"employeep",component:EmployeepComponent},
  {path:"ip-ot",component:Parent1Component},
  {path:"service1",component:Sevice1Component},
  {path:"service2",component:Service2Component},
  {path:"pipe",component:PipeComponent},
  {path:"form",component:FormComponent},
  {path:"register",component:RegistationComponent},
  {path:"login",component:LoginComponent},
  {path:"welcome",component:WelcomeComponent},
  {path:"webservice",component:WebserviceComponent},
  {path:"AN-DJ",component:ParentDComponent},
  {path:"log",component:ClientLoginComponent},
  {path:"master",component:MasterComponent},
  {path:"home",component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
