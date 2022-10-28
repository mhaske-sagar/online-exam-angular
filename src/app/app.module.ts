import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { ArrayComponent } from './array/array.component';
import { AccountComponent } from './account/account.component';
import { InterfaceexComponent } from './interfaceex/interfaceex.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChildsComponent } from './childs/childs.component';
import { ParentsComponent } from './parents/parents.component';
import { EmployeepComponent } from './employeep/employeep.component';
import { EmployeecComponent } from './employeec/employeec.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Sevice1Component } from './sevice1/sevice1.component';
import { Service2Component } from './service2/service2.component';
import { DyanamicComponent } from './dyanamic/dyanamic.component';
import { TitlenamePipe } from './titlename.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { MyModule } from './my/my.module';
import { FormComponent } from './form/form.component';
import { RegistationComponent } from './registation/registation.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WebserviceComponent } from './webservice/webservice.component';
import { HttpclientService } from './httpclient.service';
import { HttpClientModule } from '@angular/common/http';
import { ChildDComponent } from './child-d/child-d.component';
import { ParentDComponent } from './parent-d/parent-d.component';
import { FormDComponent } from './form-d/form-d.component';
import { ClientServerComponent } from './client-server/client-server.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { MasterComponent } from './master/master.component';
@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    DisplayComponent,
    ArrayComponent,
    InterfaceexComponent,
    AccountComponent,
    ParentComponent,
    ChildComponent,
    ChildsComponent,
    ParentsComponent,
    EmployeepComponent,
    EmployeecComponent,
    Parent1Component,
    Child1Component,
    Sevice1Component,
    Service2Component,
    DyanamicComponent,
    TitlenamePipe,
    PipeComponent,
    FormComponent,
    RegistationComponent,
    LoginComponent,
    WelcomeComponent,
    WebserviceComponent,
    ChildDComponent,
    ParentDComponent,
    FormDComponent,
    ClientServerComponent,
    ClientLoginComponent,
    MasterComponent,
  ],
  imports: [
   
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MyModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  
    
    

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

