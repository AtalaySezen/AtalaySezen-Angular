import { Component, EventEmitter, Input,Injectable} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'notepad-app';
  color:string='primary';

  colorChange(){
    if(this.color === 'primary'){
      this.color = 'warn';
    }else if(this.color==='warn'){
      this.color ='accent'
    }else if(this.color ==='accent'){
      this.color ='basic';
    }else if(this.color ==='basic'){
      this.color = 'primary';
    }
  }

}


