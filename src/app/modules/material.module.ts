import { NgModule } from '@angular/core';

import { MatButtonModule, MatIconModule, MatRippleModule, MatCommonModule, MatMenuModule } from '@angular/material';


@NgModule({
    imports: [MatButtonModule, MatIconModule, MatRippleModule, MatCommonModule, MatMenuModule ],
    exports: [MatButtonModule, MatIconModule, MatRippleModule, MatCommonModule, MatMenuModule ]
})
export class MaterialsModule { }
