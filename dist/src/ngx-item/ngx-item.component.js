import { Component, HostBinding } from '@angular/core';
var NgxItemComponent = /** @class */ (function () {
    function NgxItemComponent() {
        this.classes = 'item';
    }
    NgxItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-item',
                    template: "<ng-content></ng-content>",
                    styles: ["\n    :host {\n        display: inline-block;\n        white-space: initial;\n        vertical-align: top;\n    }\n  "]
                },] },
    ];
    NgxItemComponent.propDecorators = {
        classes: [{ type: HostBinding, args: ['class',] }]
    };
    return NgxItemComponent;
}());
export { NgxItemComponent };
//# sourceMappingURL=ngx-item.component.js.map