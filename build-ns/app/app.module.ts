import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {AppComponent} from "./app.component";

import {Ng2BalloonMsgNsTestComponent} from "./test/ng2-balloon-msg-ns-test.component";
import {Ng2BalloonMsgNsModule} from "./ng2-balloon-msg/nativescript/ng2-balloon-msg-ns.module";
import {Ng2BalloonMsgService} from "./ng2-balloon-msg/services/ng2-balloon-msg.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        Ng2BalloonMsgNsModule
    ],
    declarations: [
        AppComponent, Ng2BalloonMsgNsTestComponent
    ],
    providers: [Ng2BalloonMsgService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
