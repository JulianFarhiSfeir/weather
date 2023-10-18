import { Pipe, PipeTransform } from '@angular/core';
import {Condition} from "../components/condition-card/condition-card.component.typings";

@Pipe({
  name: 'conditionTabLabel',
  standalone: true,
})
export class ConditionTabLabelPipe implements PipeTransform {

  transform(condition: Condition): unknown {
    return `${condition.name} (${condition.zipcode})`;
  }

}
