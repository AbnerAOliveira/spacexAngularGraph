import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { LaunchDetailsGQL } from '../services/spacexGraphql.service';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent implements OnInit {

  launchDetails$ = this.route.paramMap.pipe(
    switchMap(params => {
      const id: any = params.get('id');
      return this.launchDetailService.fetch({ id })
    }),
    map(res => res.data.launch)
  )

  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchDetailService: LaunchDetailsGQL
  ) { }

  ngOnInit(): void {
  }

}
