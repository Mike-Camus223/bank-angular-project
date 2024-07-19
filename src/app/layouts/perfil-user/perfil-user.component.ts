import { Component } from '@angular/core';
import { BankDataUser} from '../../core/models/bankdatauser.interface';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.scss']
})
export class PerfilUserComponent {
  
PerfilWelcome: BankDataUser[] = [
 { 
    perfilphoto: 'images/cat.jpg',
    name: 'Orange el gato',
    description: 'your scare me',
    balance: 5000
 },
]
}
