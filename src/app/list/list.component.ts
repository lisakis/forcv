import { Component, OnInit } from '@angular/core';
import {MemberlistService} from '../memberlist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list;


  constructor(private memberList: MemberlistService ) { }

    ngOnInit() {
    this.getAllMembers();
    }


  getAllMembers = () => {
    this.memberList.getMembers().subscribe((data) => {
      this.list = data['data'];
    });
  }
}
