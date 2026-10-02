import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  displayedColumns: string[] = [ 'name', 'date', 'status' ];

  @Input({ required: true }) userList: IUser[] = [];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected( user: IUser ) {
    console.log('User selected:', user);
    this.userSelectedEmitt.emit(user);
  }
}
