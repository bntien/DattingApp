import { Component, Input } from '@angular/core';
import { Member } from '../../_models/member';
import { MembersService } from '../../_services/member.service';
import { ToastrService } from 'ngx-toastr';
import { PresenceService } from '../../_services/presence.service';



@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent {
  @Input() member: Member | undefined;
  constructor(private memberService: MembersService, private toastr: ToastrService,
  public presenceService: PresenceService) { }
  addLike(member: Member) {
  this.memberService.addLike(member.userName).subscribe({
    next: () => this.toastr.success('You have liked ' + member.knownAs)
  })
  }

}