import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UserList } from './data/user-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { userFilterList } from './utils/filter-user-list';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  showUserDetails: boolean = false;
  selectedUser: IUser = {} as IUser;
  userList: IUser[] = [];
  filteredUserList: IUser[] = [];


  ngOnInit(): void {
    setTimeout(() => {
      this.userList = UserList;
      this.filteredUserList = this.userList;
    }, 1);

  }

  onUserSelected(user: IUser) {
    this.selectedUser = user;
    this.showUserDetails = true;
  }


  onFilter(filterOptions: IFilterOptions) {
    console.log(filterOptions);
    this.filteredUserList = userFilterList(filterOptions, this.userList);
  }

}

