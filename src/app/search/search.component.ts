import { Component, OnInit } from '@angular/core';
import {MemberlistService} from '../memberlist.service';
import {Member} from '../entity/members';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  list: Member[];
  name: string;

  constructor(private memberList: MemberlistService) { }

  ngOnInit() {
  }
  getMember = (list) => {
    this.memberList.getMember(list)
      .subscribe(
        (res: Member[]) => {
          this.list = res;
    });
  }

}
