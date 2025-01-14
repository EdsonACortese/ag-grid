[[only-angular]]
|Below is a simple example of filter component class:
|
|```js
|import {IFilterAngularComp} from "ag-grid-angular";
|import {IDoesFilterPassParams, IFilterParams} from "ag-grid-community";
|
|@Component({
|    selector: 'year-filter',
|    template: `
|      <div style="display: inline-block; width: 400px;">
|           <div style="padding: 10px; background-color: #d3d3d3; text-align: center;">This is a very wide filter</div>
|           <label style="margin: 10px; padding: 50px; display: inline-block; background-color: #999999">
|               <input type="radio" name="year" [(ngModel)]="year" (ngModelChange)="updateFilter()" [value]="'All'"/> All
|           </label>
|           <label style="margin: 10px; padding: 50px; display: inline-block; background-color: #999999">
|               <input type="radio" name="year" [(ngModel)]="year" (ngModelChange)="updateFilter()" [value]="'2010'"/> Since 2010
|           </label>
|      </div>
|    `
|})
|export class YearFilter implements IFilterAngularComp {
|    params: IFilterParams;
|    year: string = 'All';
|
|    agInit(params: IFilterParams): void {
|        this.params = params;
|    }
|
|    isFilterActive(): boolean {
|        return this.year === '2010'
|    }
|
|    doesFilterPass(params: IDoesFilterPassParams): boolean {
|        return params.data.year >= 2010;
|    }
|
|    getModel() {
|    }
|
|    setModel(model: any) {
|    }
|
|    updateFilter() {
|        this.params.filterChangedCallback();
|    }
|}
|```
