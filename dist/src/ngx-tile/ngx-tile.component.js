import { Component, HostBinding } from '@angular/core';
var NgxTileComponent = /** @class */ (function () {
    function NgxTileComponent() {
        this.classes = 'item';
    }
    NgxTileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-tile',
                    template: "<div class=\"tile\"><ng-content></ng-content></div>",
                    styles: ["\n    :host {\n        display: inline-block;\n        white-space: initial;\n        padding: 10px;\n        box-sizing: border-box;\n        vertical-align: top;\n    }\n\n    .tile {\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n  "]
                },] },
    ];
    NgxTileComponent.propDecorators = {
        classes: [{ type: HostBinding, args: ['class',] }]
    };
    return NgxTileComponent;
}());
export { NgxTileComponent };
//# sourceMappingURL=ngx-tile.component.js.map