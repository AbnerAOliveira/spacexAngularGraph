import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { PastLaunchesListGQL } from '../services/spacexGraphql.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {

  launches$ = this.launchService.fetch({limit: 30}).pipe(
    map(res => res.data.launchesPast)
  )

  constructor(
    private readonly launchService: PastLaunchesListGQL
  ) { }

  ngOnInit(): void {
  }

}
