# angular-ngx-charts-tutorial
angular-ngx-charts-tutorial

https://swimlane.gitbook.io/ngx-charts/examples

# installg ngx-charts-tutorial

npm i @swimlane/ngx-charts --save

npm install @angular/cdk

# app.module.ts

add imports

```javascript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
```

add to import array

```javascript
imports: [
  ...
  NgxChartsModule,
  BrowserAnimationsModule
]
```