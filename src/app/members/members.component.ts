import { Component, OnInit } from '@angular/core';
import {MemberlistService} from '../memberlist.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  nevim = [];
  constructor(private router: Router, private memberService: MemberlistService) { }

  ngOnInit() {
  }

  addMember = (data) => {
    this.memberService.addMember(data)
      .subscribe(
      (res: []) => {
        console.log(this.nevim);
        // Update the list of cars
        this.nevim = res;
        this.router.navigateByUrl('/create');
      }
    );
  }
}
