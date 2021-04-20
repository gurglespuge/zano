(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_helpers/directives/confirm-modal/confirm-modal.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/_helpers/directives/confirm-modal/confirm-modal.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <div class=\"content\">\r\n    <i class=\"icon info\"></i>\r\n    <div class=\"message-container\">\r\n      <span class=\"title\">{{title}}</span>\r\n      <span class=\"message\">{{message}}</span>\r\n\r\n      <div class=\"wrap-btn\">\r\n        <button type=\"button\" class=\"action-button\" (click)=\"onSubmit()\" #btn>{{ 'MODALS.OK' | translate }}</button>\r\n        <button type=\"button\" class=\"action-button\" (click)=\"onClose()\">{{ 'MODALS.CANCEL' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <button type=\"button\" class=\"close-button\" (click)=\"onClose()\"><i class=\"icon close\"></i></button>\r\n</div>"

/***/ }),

/***/ "./src/app/_helpers/directives/confirm-modal/confirm-modal.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/_helpers/directives/confirm-modal/confirm-modal.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.25);\n  z-index: 5; }\n\n.modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-position: center;\n  background-size: 200%;\n  padding: 3rem;\n  min-width: 34rem;\n  max-width: 60rem; }\n\n.modal .content {\n    display: flex; }\n\n.modal .content .icon {\n      flex: 0 0 auto;\n      width: 4.4rem;\n      height: 4.4rem; }\n\n.modal .content .icon.info {\n        -webkit-mask: url('modal-info.svg') no-repeat center;\n                mask: url('modal-info.svg') no-repeat center; }\n\n.modal .content .message-container {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center;\n      margin-left: 2rem; }\n\n.modal .content .message-container .title {\n        font-size: 1.8rem;\n        font-weight: 600;\n        line-height: 2.2rem; }\n\n.modal .content .message-container .message {\n        font-size: 1.3rem;\n        line-height: 1.8rem;\n        margin-top: 0.4rem; }\n\n.modal .wrap-btn {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    margin-top: 3.5rem; }\n\n.modal .action-button {\n    width: 10rem;\n    height: 2.4rem; }\n\n.modal .close-button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n    margin: 0;\n    padding: 0;\n    width: 2.4rem;\n    height: 2.4rem; }\n\n.modal .close-button .icon {\n      -webkit-mask: url('close.svg') no-repeat center;\n              mask: url('close.svg') no-repeat center;\n      width: 2.4rem;\n      height: 2.4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy9jb25maXJtLW1vZGFsL0Q6XFxQcm9qZWN0XFxXT1JLX05FV1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXF9oZWxwZXJzXFxkaXJlY3RpdmVzXFxjb25maXJtLW1vZGFsXFxjb25maXJtLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQ0FBcUM7RUFDckMsVUFBVSxFQUFBOztBQUVaO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQVJsQjtJQVdJLGFBQWEsRUFBQTs7QUFYakI7TUFjTSxjQUFjO01BQ2QsYUFBYTtNQUNiLGNBQWMsRUFBQTs7QUFoQnBCO1FBbUJRLG9EQUE0RDtnQkFBNUQsNENBQTRELEVBQUE7O0FBbkJwRTtNQXdCTSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2Qix1QkFBdUI7TUFDdkIsaUJBQWlCLEVBQUE7O0FBNUJ2QjtRQStCUSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLG1CQUFtQixFQUFBOztBQWpDM0I7UUFxQ1EsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixrQkFBa0IsRUFBQTs7QUF2QzFCO0lBNkNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLGtCQUFrQixFQUFBOztBQWhEdEI7SUFvREksWUFBWTtJQUNaLGNBQWMsRUFBQTs7QUFyRGxCO0lBeURJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixjQUFjLEVBQUE7O0FBbkVsQjtNQXNFTSwrQ0FBdUQ7Y0FBdkQsdUNBQXVEO01BQ3ZELGFBQWE7TUFDYixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9faGVscGVycy9kaXJlY3RpdmVzL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XHJcbiAgcGFkZGluZzogM3JlbTtcclxuICBtaW4td2lkdGg6IDM0cmVtO1xyXG4gIG1heC13aWR0aDogNjByZW07XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgd2lkdGg6IDQuNHJlbTtcclxuICAgICAgaGVpZ2h0OiA0LjRyZW07XHJcblxyXG4gICAgICAmLmluZm8ge1xyXG4gICAgICAgIG1hc2s6IHVybCh+c3JjL2Fzc2V0cy9pY29ucy9tb2RhbC1pbmZvLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcblxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC40cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAud3JhcC1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMy41cmVtO1xyXG4gIH1cclxuICBcclxuICAuYWN0aW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBoZWlnaHQ6IDIuNHJlbTtcclxuICB9XHJcblxyXG4gIC5jbG9zZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDIuNHJlbTtcclxuICAgIGhlaWdodDogMi40cmVtO1xyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgbWFzazogdXJsKH5zcmMvYXNzZXRzL2ljb25zL2Nsb3NlLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDIuNHJlbTtcclxuICAgICAgaGVpZ2h0OiAyLjRyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/_helpers/directives/confirm-modal/confirm-modal.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/_helpers/directives/confirm-modal/confirm-modal.component.ts ***!
  \******************************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent() {
        this.confirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ConfirmModalComponent.prototype.ngOnInit = function () {
        this.button.nativeElement.focus();
    };
    ConfirmModalComponent.prototype.onSubmit = function () {
        this.confirmed.emit(true);
    };
    ConfirmModalComponent.prototype.onClose = function () {
        this.confirmed.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmModalComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmModalComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ConfirmModalComponent.prototype, "confirmed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConfirmModalComponent.prototype, "button", void 0);
    ConfirmModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-modal',
            template: __webpack_require__(/*! ./confirm-modal.component.html */ "./src/app/_helpers/directives/confirm-modal/confirm-modal.component.html"),
            styles: [__webpack_require__(/*! ./confirm-modal.component.scss */ "./src/app/_helpers/directives/confirm-modal/confirm-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/input-disable-selection/input-disable-selection.directive.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/_helpers/directives/input-disable-selection/input-disable-selection.directive.ts ***!
  \**************************************************************************************************/
/*! exports provided: InputDisableSelectionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDisableSelectionDirective", function() { return InputDisableSelectionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputDisableSelectionDirective = /** @class */ (function () {
    function InputDisableSelectionDirective() {
    }
    InputDisableSelectionDirective.prototype.handleInput = function (event) {
        if (event.target.readOnly) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], InputDisableSelectionDirective.prototype, "handleInput", null);
    InputDisableSelectionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'input'
        }),
        __metadata("design:paramtypes", [])
    ], InputDisableSelectionDirective);
    return InputDisableSelectionDirective;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/input-validate/input-validate.directive.ts":
/*!********************************************************************************!*\
  !*** ./src/app/_helpers/directives/input-validate/input-validate.directive.ts ***!
  \********************************************************************************/
/*! exports provided: InputValidateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputValidateDirective", function() { return InputValidateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputValidateDirective = /** @class */ (function () {
    function InputValidateDirective(el, variablesService) {
        this.el = el;
        this.variablesService = variablesService;
    }
    Object.defineProperty(InputValidateDirective.prototype, "defineInputType", {
        set: function (type) {
            this.type = type;
        },
        enumerable: true,
        configurable: true
    });
    InputValidateDirective.prototype.handleInput = function (event) {
        if (this.type === 'money') {
            this.moneyValidation(event);
        }
        else if (this.type === 'integer') {
            this.integerValidation(event);
        }
    };
    InputValidateDirective.prototype.moneyValidation = function (event) {
        var currentValue = event.target.value;
        var originalValue = currentValue;
        var OnlyD = /[^\d\.]/g;
        var _has_error = currentValue.match(OnlyD);
        if (_has_error && _has_error.length) {
            currentValue = currentValue.replace(',', '.').replace(OnlyD, '');
        }
        var _double_separator = currentValue.match(/\./g);
        if (_double_separator && _double_separator.length > 1) {
            currentValue = currentValue.substr(0, currentValue.lastIndexOf('.'));
        }
        if (currentValue.indexOf('.') === 0) {
            currentValue = '0' + currentValue;
        }
        var _zero_fill = currentValue.split('.');
        if (_zero_fill[0].length > 7) {
            _zero_fill[0] = _zero_fill[0].substr(0, 7);
        }
        if (1 in _zero_fill && _zero_fill[1].length) {
            _zero_fill[1] = _zero_fill[1].substr(0, this.variablesService.digits);
        }
        currentValue = _zero_fill.join('.');
        if (currentValue !== originalValue) {
            event.target.value = currentValue;
            var cursorPosition = event.target.selectionEnd;
            event.target.setSelectionRange(cursorPosition, cursorPosition);
            event.target.dispatchEvent(new Event('input'));
        }
    };
    InputValidateDirective.prototype.integerValidation = function (event) {
        var currentValue = event.target.value;
        var originalValue = currentValue;
        var OnlyD = /[^\d]/g;
        var _has_error = currentValue.match(OnlyD);
        if (_has_error && _has_error.length) {
            currentValue = currentValue.replace(OnlyD, '');
        }
        if (currentValue !== originalValue) {
            var cursorPosition = event.target.selectionEnd;
            event.target.value = currentValue;
            event.target.setSelectionRange(cursorPosition, cursorPosition);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appInputValidate'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], InputValidateDirective.prototype, "defineInputType", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], InputValidateDirective.prototype, "handleInput", null);
    InputValidateDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appInputValidate]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"]])
    ], InputValidateDirective);
    return InputValidateDirective;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/modal-container/modal-container.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/_helpers/directives/modal-container/modal-container.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <div class=\"content\">\r\n    <i class=\"icon\" [class.error]=\"type === 'error'\" [class.success]=\"type === 'success'\" [class.info]=\"type === 'info'\"></i>\r\n    <div class=\"message-container\">\r\n      <span class=\"title\">{{title}}</span>\r\n      <span class=\"message\" [innerHTML]=\"message\"></span>\r\n    </div>\r\n  </div>\r\n  <button type=\"button\" class=\"action-button\" (click)=\"onClose()\" #btn>{{ 'MODALS.OK' | translate }}</button>\r\n  <button type=\"button\" class=\"close-button\" (click)=\"onClose()\"><i class=\"icon close\"></i></button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_helpers/directives/modal-container/modal-container.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/_helpers/directives/modal-container/modal-container.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.25); }\n\n.modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-position: center;\n  background-size: 200%;\n  padding: 2rem;\n  min-width: 34rem;\n  max-width: 60rem; }\n\n.modal .content {\n    display: flex;\n    margin: 1.2rem 0; }\n\n.modal .content .icon {\n      flex: 0 0 auto;\n      width: 4.4rem;\n      height: 4.4rem; }\n\n.modal .content .icon.error {\n        -webkit-mask: url('modal-alert.svg') no-repeat center;\n                mask: url('modal-alert.svg') no-repeat center; }\n\n.modal .content .icon.success {\n        -webkit-mask: url('modal-success.svg') no-repeat center;\n                mask: url('modal-success.svg') no-repeat center; }\n\n.modal .content .icon.info {\n        -webkit-mask: url('modal-info.svg') no-repeat center;\n                mask: url('modal-info.svg') no-repeat center; }\n\n.modal .content .message-container {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center;\n      margin-left: 2rem; }\n\n.modal .content .message-container .title {\n        font-size: 1.8rem;\n        font-weight: 600;\n        line-height: 2.2rem; }\n\n.modal .content .message-container .message {\n        font-size: 1.3rem;\n        line-height: 1.8rem;\n        margin-top: 0.4rem; }\n\n.modal .action-button {\n    margin: 1.2rem auto 0.6rem;\n    width: 10rem;\n    height: 2.4rem; }\n\n.modal .close-button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n    margin: 0;\n    padding: 0;\n    width: 2.4rem;\n    height: 2.4rem; }\n\n.modal .close-button .icon {\n      -webkit-mask: url('close.svg') no-repeat center;\n              mask: url('close.svg') no-repeat center;\n      width: 2.4rem;\n      height: 2.4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy9tb2RhbC1jb250YWluZXIvRDpcXFByb2plY3RcXFdPUktfTkVXXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcX2hlbHBlcnNcXGRpcmVjdGl2ZXNcXG1vZGFsLWNvbnRhaW5lclxcbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBUmxCO0lBV0ksYUFBYTtJQUNiLGdCQUFnQixFQUFBOztBQVpwQjtNQWVNLGNBQWM7TUFDZCxhQUFhO01BQ2IsY0FBYyxFQUFBOztBQWpCcEI7UUFvQlEscURBQTZEO2dCQUE3RCw2Q0FBNkQsRUFBQTs7QUFwQnJFO1FBd0JRLHVEQUErRDtnQkFBL0QsK0NBQStELEVBQUE7O0FBeEJ2RTtRQTRCUSxvREFBNEQ7Z0JBQTVELDRDQUE0RCxFQUFBOztBQTVCcEU7TUFpQ00sYUFBYTtNQUNiLHNCQUFzQjtNQUN0Qix1QkFBdUI7TUFDdkIsdUJBQXVCO01BQ3ZCLGlCQUFpQixFQUFBOztBQXJDdkI7UUF3Q1EsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixtQkFBbUIsRUFBQTs7QUExQzNCO1FBOENRLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsa0JBQWtCLEVBQUE7O0FBaEQxQjtJQXNESSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGNBQWMsRUFBQTs7QUF4RGxCO0lBNERJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixjQUFjLEVBQUE7O0FBdEVsQjtNQXlFTSwrQ0FBdUQ7Y0FBdkQsdUNBQXVEO01BQ3ZELGFBQWE7TUFDYixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9faGVscGVycy9kaXJlY3RpdmVzL21vZGFsLWNvbnRhaW5lci9tb2RhbC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxufVxyXG4ubW9kYWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIG1pbi13aWR0aDogMzRyZW07XHJcbiAgbWF4LXdpZHRoOiA2MHJlbTtcclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMS4ycmVtIDA7XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgd2lkdGg6IDQuNHJlbTtcclxuICAgICAgaGVpZ2h0OiA0LjRyZW07XHJcblxyXG4gICAgICAmLmVycm9yIHtcclxuICAgICAgICBtYXNrOiB1cmwofnNyYy9hc3NldHMvaWNvbnMvbW9kYWwtYWxlcnQuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnN1Y2Nlc3Mge1xyXG4gICAgICAgIG1hc2s6IHVybCh+c3JjL2Fzc2V0cy9pY29ucy9tb2RhbC1zdWNjZXNzLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5pbmZvIHtcclxuICAgICAgICBtYXNrOiB1cmwofnNyYy9hc3NldHMvaWNvbnMvbW9kYWwtaW5mby5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZS1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjJyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44cmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxLjJyZW0gYXV0byAwLjZyZW07XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBoZWlnaHQ6IDIuNHJlbTtcclxuICB9XHJcblxyXG4gIC5jbG9zZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDIuNHJlbTtcclxuICAgIGhlaWdodDogMi40cmVtO1xyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgbWFzazogdXJsKH5zcmMvYXNzZXRzL2ljb25zL2Nsb3NlLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDIuNHJlbTtcclxuICAgICAgaGVpZ2h0OiAyLjRyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/_helpers/directives/modal-container/modal-container.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/_helpers/directives/modal-container/modal-container.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ModalContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalContainerComponent = /** @class */ (function () {
    function ModalContainerComponent(translate) {
        this.translate = translate;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalContainerComponent.prototype.ngOnInit = function () {
        this.button.nativeElement.focus();
        switch (this.type) {
            case 'error':
                this.title = this.translate.instant('MODALS.ERROR');
                break;
            case 'success':
                this.title = this.translate.instant('MODALS.SUCCESS');
                break;
            case 'info':
                this.title = this.translate.instant('MODALS.INFO');
                break;
        }
    };
    ModalContainerComponent.prototype.onClose = function () {
        this.close.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalContainerComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalContainerComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalContainerComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ModalContainerComponent.prototype, "button", void 0);
    ModalContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-container',
            template: __webpack_require__(/*! ./modal-container.component.html */ "./src/app/_helpers/directives/modal-container/modal-container.component.html"),
            styles: [__webpack_require__(/*! ./modal-container.component.scss */ "./src/app/_helpers/directives/modal-container/modal-container.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ModalContainerComponent);
    return ModalContainerComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/progress-container/progress-container.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/_helpers/directives/progress-container/progress-container.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress-bar-container\">\r\n  <div class=\"progress-bar\">\r\n    <div class=\"progress-bar-full\" [style.width]=\"width\"></div>\r\n  </div>\r\n  <div class=\"progress-labels\">\r\n    <span *ngFor=\"let label of labels\">\r\n      {{ label | translate }}\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_helpers/directives/progress-container/progress-container.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/_helpers/directives/progress-container/progress-container.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress-bar-container {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0 3rem;\n  width: 100%;\n  height: 3rem; }\n  .progress-bar-container .progress-bar {\n    position: absolute;\n    top: -0.7rem;\n    left: 0;\n    margin: 0 3rem;\n    width: calc(100% - 6rem);\n    height: 0.7rem; }\n  .progress-bar-container .progress-bar .progress-bar-full {\n      height: 0.7rem; }\n  .progress-bar-container .progress-labels {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 1.2rem;\n    height: 100%; }\n  .progress-bar-container .progress-labels span {\n      flex: 1 0 0;\n      text-align: center; }\n  .progress-bar-container .progress-labels span:first-child {\n        text-align: left; }\n  .progress-bar-container .progress-labels span:last-child {\n        text-align: right; }\n  .progress-bar-container .progress-time {\n    position: absolute;\n    top: -3rem;\n    left: 50%;\n    transform: translateX(-50%);\n    font-size: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy9wcm9ncmVzcy1jb250YWluZXIvRDpcXFByb2plY3RcXFdPUktfTkVXXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcX2hlbHBlcnNcXGRpcmVjdGl2ZXNcXHByb2dyZXNzLWNvbnRhaW5lclxccHJvZ3Jlc3MtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFOZDtJQVNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsY0FBYyxFQUFBO0VBZGxCO01BaUJNLGNBQWMsRUFBQTtFQWpCcEI7SUFzQkksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLFlBQVksRUFBQTtFQTFCaEI7TUE2Qk0sV0FBVztNQUNYLGtCQUFrQixFQUFBO0VBOUJ4QjtRQWlDUSxnQkFBZ0IsRUFBQTtFQWpDeEI7UUFxQ1EsaUJBQWlCLEVBQUE7RUFyQ3pCO0lBMkNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULDJCQUEyQjtJQUMzQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL19oZWxwZXJzL2RpcmVjdGl2ZXMvcHJvZ3Jlc3MtY29udGFpbmVyL3Byb2dyZXNzLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcy1iYXItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcGFkZGluZzogMCAzcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogM3JlbTtcclxuXHJcbiAgLnByb2dyZXNzLWJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0wLjdyZW07XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAwIDNyZW07XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNnJlbSk7XHJcbiAgICBoZWlnaHQ6IDAuN3JlbTtcclxuXHJcbiAgICAucHJvZ3Jlc3MtYmFyLWZ1bGwge1xyXG4gICAgICBoZWlnaHQ6IDAuN3JlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcy1sYWJlbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgZmxleDogMSAwIDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcy10aW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTNyZW07XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/_helpers/directives/progress-container/progress-container.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/_helpers/directives/progress-container/progress-container.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProgressContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressContainerComponent", function() { return ProgressContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressContainerComponent = /** @class */ (function () {
    function ProgressContainerComponent() {
    }
    ProgressContainerComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProgressContainerComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProgressContainerComponent.prototype, "labels", void 0);
    ProgressContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress-container',
            template: __webpack_require__(/*! ./progress-container.component.html */ "./src/app/_helpers/directives/progress-container/progress-container.component.html"),
            styles: [__webpack_require__(/*! ./progress-container.component.scss */ "./src/app/_helpers/directives/progress-container/progress-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressContainerComponent);
    return ProgressContainerComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/staking-switch/staking-switch.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/_helpers/directives/staking-switch/staking-switch.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"switch\" (click)=\"toggleStaking(); $event.stopPropagation()\">\r\n  <span class=\"option\" *ngIf=\"staking\">{{ 'STAKING.SWITCH.ON' | translate }}</span>\r\n  <span class=\"circle\" [class.on]=\"staking\" [class.off]=\"!staking\"></span>\r\n  <span class=\"option\" *ngIf=\"!staking\">{{ 'STAKING.SWITCH.OFF' | translate }}</span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_helpers/directives/staking-switch/staking-switch.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/_helpers/directives/staking-switch/staking-switch.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".switch {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 1rem;\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 0.5rem;\n  width: 5rem;\n  height: 2rem; }\n  .switch .circle {\n    border-radius: 1rem;\n    width: 1.2rem;\n    height: 1.2rem; }\n  .switch .option {\n    margin: 0 0.2rem;\n    line-height: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy9zdGFraW5nLXN3aXRjaC9EOlxcUHJvamVjdFxcV09SS19ORVdcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxfaGVscGVyc1xcZGlyZWN0aXZlc1xcc3Rha2luZy1zd2l0Y2hcXHN0YWtpbmctc3dpdGNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFUZDtJQVlJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYyxFQUFBO0VBZGxCO0lBa0JJLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL19oZWxwZXJzL2RpcmVjdGl2ZXMvc3Rha2luZy1zd2l0Y2gvc3Rha2luZy1zd2l0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpdGNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgd2lkdGg6IDVyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG5cclxuICAuY2lyY2xlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICB3aWR0aDogMS4ycmVtO1xyXG4gICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgfVxyXG5cclxuICAub3B0aW9uIHtcclxuICAgIG1hcmdpbjogMCAwLjJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4ycmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/_helpers/directives/staking-switch/staking-switch.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/_helpers/directives/staking-switch/staking-switch.component.ts ***!
  \********************************************************************************/
/*! exports provided: StakingSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakingSwitchComponent", function() { return StakingSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StakingSwitchComponent = /** @class */ (function () {
    function StakingSwitchComponent(backend, variablesService) {
        this.backend = backend;
        this.variablesService = variablesService;
        this.stakingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StakingSwitchComponent.prototype.ngOnInit = function () { };
    StakingSwitchComponent.prototype.toggleStaking = function () {
        var wallet = this.variablesService.getWallet(this.wallet_id);
        if (wallet && wallet.loaded) {
            this.stakingChange.emit(!this.staking);
            if (!this.staking) {
                this.backend.startPosMining(this.wallet_id);
            }
            else {
                this.backend.stopPosMining(this.wallet_id);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StakingSwitchComponent.prototype, "wallet_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StakingSwitchComponent.prototype, "staking", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StakingSwitchComponent.prototype, "stakingChange", void 0);
    StakingSwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staking-switch',
            template: __webpack_require__(/*! ./staking-switch.component.html */ "./src/app/_helpers/directives/staking-switch/staking-switch.component.html"),
            styles: [__webpack_require__(/*! ./staking-switch.component.scss */ "./src/app/_helpers/directives/staking-switch/staking-switch.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"], _services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"]])
    ], StakingSwitchComponent);
    return StakingSwitchComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/tooltip.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/_helpers/directives/tooltip.directive.ts ***!
  \**********************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(el, renderer, route) {
        this.el = el;
        this.renderer = renderer;
        this.route = route;
        this.timeout = 0;
        this.timeDelay = 0;
        this.delay = 0;
        this.showWhenNoOverflow = true;
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TooltipDirective.prototype.onMouseEnter = function () {
        var _this = this;
        if (this.showWhenNoOverflow || (!this.showWhenNoOverflow && this.el.nativeElement.offsetWidth < this.el.nativeElement.scrollWidth)) {
            this.cursor = 'pointer';
            if (!this.tooltip) {
                if (this.timeDelay !== 0) {
                    this.removeTooltipTimeDelay = setTimeout(function () {
                        _this.show();
                    }, this.timeDelay);
                }
                else {
                    this.show();
                }
            }
            else {
                this.cancelHide();
            }
        }
    };
    TooltipDirective.prototype.onMouseLeave = function () {
        clearTimeout(this.removeTooltipTimeDelay);
        if (this.tooltip) {
            this.hide();
        }
    };
    TooltipDirective.prototype.show = function () {
        this.create();
        this.placement = this.placement === null ? 'top' : this.placement;
        this.setPosition(this.placement);
    };
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        this.removeTooltipTimeout = setTimeout(function () {
            _this.renderer.setStyle(_this.tooltip, 'opacity', '0');
            _this.removeTooltipTimeoutInner = setTimeout(function () {
                _this.renderer.removeChild(document.body, _this.tooltip);
                _this.tooltip.removeEventListener('mouseenter', _this.enter);
                _this.tooltip.removeEventListener('mouseleave', _this.leave);
                _this.tooltip = null;
                _this.onHide.emit(true);
            }, _this.delay);
        }, this.timeout);
    };
    TooltipDirective.prototype.cancelHide = function () {
        clearTimeout(this.removeTooltipTimeout);
        clearTimeout(this.removeTooltipTimeoutInner);
        this.renderer.setStyle(this.tooltip, 'opacity', '1');
    };
    TooltipDirective.prototype.create = function () {
        var _this = this;
        this.tooltip = this.renderer.createElement('div');
        var innerBlock = this.renderer.createElement('div');
        if (typeof this.tooltipInner === 'string') {
            innerBlock.innerHTML = this.tooltipInner;
        }
        else {
            innerBlock = this.tooltipInner;
        }
        this.renderer.addClass(innerBlock, 'tooltip-inner');
        this.renderer.addClass(innerBlock, 'scrolled-content');
        this.renderer.appendChild(this.tooltip, innerBlock);
        this.renderer.appendChild(document.body, this.tooltip);
        this.enter = function () {
            _this.cancelHide();
        };
        this.tooltip.addEventListener('mouseenter', this.enter);
        this.leave = function () {
            if (_this.tooltip) {
                _this.hide();
            }
        };
        this.tooltip.addEventListener('mouseleave', this.leave);
        this.renderer.setStyle(document.body, 'position', 'relative');
        this.renderer.setStyle(this.tooltip, 'position', 'absolute');
        if (this.tooltipClass !== null) {
            var classes = this.tooltipClass.split(' ');
            for (var i = 0; i < classes.length; i++) {
                this.renderer.addClass(this.tooltip, classes[i]);
            }
        }
        this.renderer.setStyle(this.tooltip, 'opacity', '0');
        this.renderer.setStyle(this.tooltip, '-webkit-transition', "opacity " + this.delay + "ms");
        this.renderer.setStyle(this.tooltip, '-moz-transition', "opacity " + this.delay + "ms");
        this.renderer.setStyle(this.tooltip, '-o-transition', "opacity " + this.delay + "ms");
        this.renderer.setStyle(this.tooltip, 'transition', "opacity " + this.delay + "ms");
        window.setTimeout(function () {
            _this.renderer.setStyle(_this.tooltip, 'opacity', '1');
        }, 0);
    };
    TooltipDirective.prototype.setPosition = function (placement) {
        var hostPos = this.el.nativeElement.getBoundingClientRect();
        this.renderer.addClass(this.tooltip, 'ng-tooltip-' + placement);
        var topExit = hostPos.top - this.tooltip.getBoundingClientRect().height - parseInt(getComputedStyle(this.tooltip).marginTop, 10) < 0;
        var bottomExit = window.innerHeight < hostPos.bottom + this.tooltip.getBoundingClientRect().height + parseInt(getComputedStyle(this.tooltip).marginTop, 10);
        switch (placement) {
            case 'top':
                if (topExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('bottom');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.left + (hostPos.right - hostPos.left) / 2 - this.tooltip.getBoundingClientRect().width / 2 + 'px');
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.top - this.tooltip.getBoundingClientRect().height + 'px');
                    this.checkSides();
                }
                break;
            case 'top-left':
                if (topExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('bottom-left');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.left + 'px');
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.top - this.tooltip.getBoundingClientRect().height + 'px');
                    this.checkSides();
                }
                break;
            case 'top-right':
                if (topExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('bottom-right');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.right - this.tooltip.offsetWidth + 'px');
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.top - this.tooltip.getBoundingClientRect().height + 'px');
                    this.checkSides();
                }
                break;
            case 'bottom':
                if (bottomExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('top');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom + 'px');
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.left + (hostPos.right - hostPos.left) / 2 - this.tooltip.getBoundingClientRect().width / 2 + 'px');
                    this.checkSides();
                }
                break;
            case 'bottom-left':
                if (bottomExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('top-left');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom + 'px');
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.left + 'px');
                    this.checkSides();
                }
                break;
            case 'bottom-right':
                if (bottomExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('top-right');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom + 'px');
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.right - this.tooltip.offsetWidth + 'px');
                    this.checkSides();
                }
                break;
            case 'left':
                this.renderer.setStyle(this.tooltip, 'left', hostPos.left - this.tooltip.getBoundingClientRect().width + 'px');
                this.renderer.setStyle(this.tooltip, 'top', hostPos.top + (hostPos.bottom - hostPos.top) / 2 - this.tooltip.getBoundingClientRect().height / 2 + 'px');
                break;
            case 'left-top':
                this.renderer.setStyle(this.tooltip, 'top', hostPos.top + 'px');
                this.renderer.setStyle(this.tooltip, 'left', hostPos.left - this.tooltip.getBoundingClientRect().width + 'px');
                break;
            case 'left-bottom':
                this.renderer.setStyle(this.tooltip, 'left', hostPos.left - this.tooltip.getBoundingClientRect().width + 'px');
                this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom - this.tooltip.getBoundingClientRect().height + 'px');
                break;
            case 'right':
                this.renderer.setStyle(this.tooltip, 'left', hostPos.right + 'px');
                this.renderer.setStyle(this.tooltip, 'top', hostPos.top + (hostPos.bottom - hostPos.top) / 2 - this.tooltip.getBoundingClientRect().height / 2 + 'px');
                break;
            case 'right-top':
                this.renderer.setStyle(this.tooltip, 'top', hostPos.top + 'px');
                this.renderer.setStyle(this.tooltip, 'left', hostPos.right + 'px');
                break;
            case 'right-bottom':
                this.renderer.setStyle(this.tooltip, 'left', hostPos.right + 'px');
                this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom - this.tooltip.getBoundingClientRect().height + 'px');
                break;
        }
    };
    TooltipDirective.prototype.checkSides = function () {
        if (this.tooltip.getBoundingClientRect().left < 0) {
            this.renderer.setStyle(this.tooltip, 'left', 0);
        }
        if (this.tooltip.getBoundingClientRect().right > window.innerWidth) {
            this.renderer.setStyle(this.tooltip, 'left', window.innerWidth - this.tooltip.getBoundingClientRect().width + 'px');
        }
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        clearTimeout(this.removeTooltipTimeout);
        clearTimeout(this.removeTooltipTimeoutInner);
        clearTimeout(this.removeTooltipTimeDelay);
        if (this.tooltip) {
            this.renderer.removeChild(document.body, this.tooltip);
            this.tooltip = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.cursor'),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "cursor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tooltip'),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltipInner", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "placement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "tooltipClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "timeout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "timeDelay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "delay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "showWhenNoOverflow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "onHide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseLeave", null);
    TooltipDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[tooltip]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TooltipDirective);
    return TooltipDirective;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/transaction-details/transaction-details.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/_helpers/directives/transaction-details/transaction-details.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table\">\r\n  <div class=\"row\">\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.ID' | translate }}</span>\r\n    <span class=\"cell key-value\" [style.flex-basis]=\"sizes[1] + 'px'\" (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, transaction.tx_hash)\" (click)=\"openInBrowser(transaction.tx_hash)\">{{transaction.tx_hash}}</span>\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[2] + 'px'\">{{ 'HISTORY.DETAILS.SIZE' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[3] + 'px'\">{{ 'HISTORY.DETAILS.SIZE_VALUE' | translate : {value: transaction.tx_blob_size} }}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.HEIGHT' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[1] + 'px'\">{{transaction.height}}</span>\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[2] + 'px'\">{{ 'HISTORY.DETAILS.CONFIRMATION' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[3] + 'px'\">{{transaction.height === 0 ? 0 : variablesService.height_app - transaction.height}}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.INPUTS' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[1] + 'px'\" tooltip=\"{{inputs.join(', ')}}\" placement=\"top\" tooltipClass=\"table-tooltip table-tooltip-dimensions\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{inputs.join(', ')}}</span>\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[2] + 'px'\">{{ 'HISTORY.DETAILS.OUTPUTS' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[3] + 'px'\" tooltip=\"{{outputs.join(', ')}}\" placement=\"top\" tooltipClass=\"table-tooltip table-tooltip-dimensions\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{outputs.join(', ')}}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.PAYMENT_ID' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[1] + sizes[2] + sizes[3] + 'px'\"\r\n          tooltip=\"{{transaction.payment_id}}\" placement=\"top\" tooltipClass=\"table-tooltip comment-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">\r\n      {{transaction.payment_id}}\r\n    </span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.COMMENT' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[1] + sizes[2] + sizes[3] + 'px'\"\r\n          tooltip=\"{{transaction.comment}}\" placement=\"top\" tooltipClass=\"table-tooltip comment-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\"\r\n          (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, transaction.comment)\">\r\n      {{transaction.comment}}\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_helpers/directives/transaction-details/transaction-details.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/_helpers/directives/transaction-details/transaction-details.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%; }\n\n.table {\n  border-top: 0.2rem solid #ebebeb;\n  margin: 0 3rem;\n  padding: 0.5rem 0; }\n\n.table .row {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    border-top: none;\n    line-height: 3rem;\n    margin: 0 -3rem;\n    width: 100%;\n    height: 3rem; }\n\n.table .row .cell {\n      flex-shrink: 0;\n      flex-grow: 0;\n      padding: 0 1rem;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n\n.table .row .cell:first-child {\n        padding-left: 3rem; }\n\n.table .row .cell:last-child {\n        padding-right: 3rem; }\n\n.table .row .cell.key-value {\n        cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy90cmFuc2FjdGlvbi1kZXRhaWxzL0Q6XFxQcm9qZWN0XFxXT1JLX05FV1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXF9oZWxwZXJzXFxkaXJlY3RpdmVzXFx0cmFuc2FjdGlvbi1kZXRhaWxzXFx0cmFuc2FjdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFIbkI7SUFNSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQWJoQjtNQWdCTSxjQUFjO01BQ2QsWUFBWTtNQUNaLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsdUJBQXVCLEVBQUE7O0FBcEI3QjtRQXVCUSxrQkFBa0IsRUFBQTs7QUF2QjFCO1FBMkJRLG1CQUFtQixFQUFBOztBQTNCM0I7UUErQlEsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy90cmFuc2FjdGlvbi1kZXRhaWxzL3RyYW5zYWN0aW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIGJvcmRlci10b3A6IDAuMnJlbSBzb2xpZCAjZWJlYmViO1xyXG4gIG1hcmdpbjogMCAzcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG5cclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gICAgbWFyZ2luOiAwIC0zcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcblxyXG4gICAgLmNlbGwge1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYua2V5LXZhbHVlIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/_helpers/directives/transaction-details/transaction-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/_helpers/directives/transaction-details/transaction-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TransactionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsComponent", function() { return TransactionDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_transaction_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/transaction.model */ "./src/app/_helpers/models/transaction.model.ts");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_shared/constants */ "./src/app/_shared/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TransactionDetailsComponent = /** @class */ (function () {
    function TransactionDetailsComponent(variablesService, backendService, intToMoneyPipe) {
        this.variablesService = variablesService;
        this.backendService = backendService;
        this.intToMoneyPipe = intToMoneyPipe;
        this.inputs = [];
        this.outputs = [];
    }
    TransactionDetailsComponent.prototype.ngOnInit = function () {
        for (var input in this.transaction.td['spn']) {
            if (this.transaction.td['spn'].hasOwnProperty(input)) {
                this.inputs.push(this.intToMoneyPipe.transform(this.transaction.td['spn'][input]));
            }
        }
        for (var output in this.transaction.td['rcv']) {
            if (this.transaction.td['rcv'].hasOwnProperty(output)) {
                this.outputs.push(this.intToMoneyPipe.transform(this.transaction.td['rcv'][output]));
            }
        }
    };
    TransactionDetailsComponent.prototype.openInBrowser = function (tr) {
        this.backendService.openUrlInBrowser((this.variablesService.testnet ? _shared_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_EXPLORER_TN_TX_URL_PREFIX"] : _shared_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_EXPLORER_TX_URL_PREFIX"]) + tr);
    };
    TransactionDetailsComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_transaction_model__WEBPACK_IMPORTED_MODULE_1__["Transaction"])
    ], TransactionDetailsComponent.prototype, "transaction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TransactionDetailsComponent.prototype, "sizes", void 0);
    TransactionDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction-details',
            template: __webpack_require__(/*! ./transaction-details.component.html */ "./src/app/_helpers/directives/transaction-details/transaction-details.component.html"),
            styles: [__webpack_require__(/*! ./transaction-details.component.scss */ "./src/app/_helpers/directives/transaction-details/transaction-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"], _services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"], _pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_4__["IntToMoneyPipe"]])
    ], TransactionDetailsComponent);
    return TransactionDetailsComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/models/transaction.model.ts":
/*!******************************************************!*\
  !*** ./src/app/_helpers/models/transaction.model.ts ***!
  \******************************************************/
/*! exports provided: Transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    return Transaction;
}());



/***/ }),

/***/ "./src/app/_helpers/models/wallet.model.ts":
/*!*************************************************!*\
  !*** ./src/app/_helpers/models/wallet.model.ts ***!
  \*************************************************/
/*! exports provided: Wallet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wallet", function() { return Wallet; });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

var Wallet = /** @class */ (function () {
    function Wallet(id, name, pass, path, address, balance, unlocked_balance, mined, tracking) {
        if (mined === void 0) { mined = 0; }
        if (tracking === void 0) { tracking = ''; }
        this.updated = false;
        this.history = [];
        this.pages = [];
        this.excluded_history = [];
        this.contracts = [];
        this.send_data = {
            address: null,
            amount: null,
            comment: null,
            mixin: null,
            fee: null,
            hide: null
        };
        this.wallet_id = id;
        this.name = name;
        this.pass = pass;
        this.path = path;
        this.address = address;
        this.balance = balance;
        this.unlocked_balance = unlocked_balance;
        this.mined_total = mined;
        this.tracking_hey = tracking;
        this.alias = {};
        this.staking = false;
        this.new_messages = 0;
        this.new_contracts = 0;
        this.history = [];
        this.excluded_history = [];
        this.progress = 0;
        this.loaded = false;
    }
    Wallet.prototype.getMoneyEquivalent = function (equivalent) {
        return this.balance.multipliedBy(equivalent).toFixed(0);
    };
    Wallet.prototype.havePass = function () {
        return (this.pass !== '' && this.pass !== null);
    };
    Wallet.prototype.isActive = function (id) {
        return this.wallet_id === id;
    };
    Wallet.prototype.prepareHistoryItem = function (item) {
        if (item.tx_type === 4) {
            item.sortFee = item.amount.plus(item.fee).negated();
            item.sortAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["BigNumber"](0);
        }
        else if (item.tx_type === 3) {
            item.sortFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["BigNumber"](0);
        }
        else if ((item.hasOwnProperty('contract') && (item.contract[0].state === 3 || item.contract[0].state === 6 || item.contract[0].state === 601) && !item.contract[0].is_a)) {
            item.sortFee = item.fee.negated();
            item.sortAmount = item.amount;
        }
        else {
            if (!item.is_income) {
                item.sortFee = item.fee.negated();
                item.sortAmount = item.amount.negated();
            }
            else {
                item.sortAmount = item.amount;
            }
        }
        return item;
    };
    Wallet.prototype.prepareHistory = function (items) {
        for (var i = 0; i < items.length; i++) {
            if ((items[i].tx_type === 7 && items[i].is_income) || (items[i].tx_type === 11 && items[i].is_income) || (items[i].amount.eq(0) && items[i].fee.eq(0) && !items[i].is_mining)) {
                var exists = false;
                for (var j = 0; j < this.excluded_history.length; j++) {
                    if (this.excluded_history[j].tx_hash === items[i].tx_hash) {
                        exists = true;
                        if (this.excluded_history[j].height !== items[i].height) {
                            this.excluded_history[j] = items[i];
                        }
                        break;
                    }
                }
                if (!exists) {
                    this.excluded_history.push(items[i]);
                }
            }
            else {
                var exists = false;
                for (var j = 0; j < this.history.length; j++) {
                    if (this.history[j].tx_hash === items[i].tx_hash) {
                        exists = true;
                        if (this.history[j].height !== items[i].height) {
                            this.history[j] = this.prepareHistoryItem(items[i]);
                        }
                        break;
                    }
                }
                if (!exists) {
                    if (this.history.length && items[i].timestamp >= this.history[0].timestamp) {
                        this.history.unshift(this.prepareHistoryItem(items[i]));
                    }
                    else {
                        this.history.push(this.prepareHistoryItem(items[i]));
                    }
                }
            }
        }
    };
    Wallet.prototype.removeFromHistory = function (hash) {
        for (var i = 0; i < this.history.length; i++) {
            if (this.history[i].tx_hash === hash) {
                this.history.splice(i, 1);
                break;
            }
        }
    };
    Wallet.prototype.prepareContractsAfterOpen = function (items, exp_med_ts, height_app, viewedContracts, notViewedContracts) {
        var wallet = this;
        var _loop_1 = function (i) {
            var contract = items[i];
            var contractTransactionExist = false;
            if (wallet && wallet.history) {
                contractTransactionExist = wallet.history.some(function (elem) { return elem.contract && elem.contract.length && elem.contract[0].contract_id === contract.contract_id; });
            }
            if (!contractTransactionExist && wallet && wallet.excluded_history) {
                contractTransactionExist = wallet.excluded_history.some(function (elem) { return elem.contract && elem.contract.length && elem.contract[0].contract_id === contract.contract_id; });
            }
            if (!contractTransactionExist) {
                contract.state = 140;
            }
            else if (contract.state === 1 && contract.expiration_time < exp_med_ts) {
                contract.state = 110;
            }
            else if (contract.state === 2 && contract.cancel_expiration_time !== 0 && contract.cancel_expiration_time < exp_med_ts && contract.height === 0) {
                var searchResult1 = viewedContracts.some(function (elem) { return elem.state === 2 && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
                if (!searchResult1) {
                    contract.state = 130;
                    contract.is_new = true;
                }
            }
            else if (contract.state === 1) {
                var searchResult2 = notViewedContracts.find(function (elem) { return elem.state === 110 && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
                if (searchResult2) {
                    if (searchResult2.time === contract.expiration_time) {
                        contract.state = 110;
                    }
                    else {
                        for (var j = 0; j < notViewedContracts.length; j++) {
                            if (notViewedContracts[j].contract_id === contract.contract_id && notViewedContracts[j].is_a === contract.is_a) {
                                notViewedContracts.splice(j, 1);
                                break;
                            }
                        }
                        for (var j = 0; j < viewedContracts.length; j++) {
                            if (viewedContracts[j].contract_id === contract.contract_id && viewedContracts[j].is_a === contract.is_a) {
                                viewedContracts.splice(j, 1);
                                break;
                            }
                        }
                    }
                }
            }
            else if (contract.state === 2 && (contract.height === 0 || (height_app - contract.height) < 10)) {
                contract.state = 201;
            }
            else if (contract.state === 2) {
                var searchResult3 = viewedContracts.some(function (elem) { return elem.state === 120 && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
                if (searchResult3) {
                    contract.state = 120;
                }
            }
            else if (contract.state === 5) {
                var searchResult4 = notViewedContracts.find(function (elem) { return elem.state === 130 && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
                if (searchResult4) {
                    if (searchResult4.time === contract.cancel_expiration_time) {
                        contract.state = 130;
                    }
                    else {
                        for (var j = 0; j < notViewedContracts.length; j++) {
                            if (notViewedContracts[j].contract_id === contract.contract_id && notViewedContracts[j].is_a === contract.is_a) {
                                notViewedContracts.splice(j, 1);
                                break;
                            }
                        }
                        for (var j = 0; j < viewedContracts.length; j++) {
                            if (viewedContracts[j].contract_id === contract.contract_id && viewedContracts[j].is_a === contract.is_a) {
                                viewedContracts.splice(j, 1);
                                break;
                            }
                        }
                    }
                }
            }
            else if (contract.state === 6 && (contract.height === 0 || (height_app - contract.height) < 10)) {
                contract.state = 601;
            }
            var searchResult = viewedContracts.some(function (elem) { return elem.state === contract.state && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
            contract.is_new = !searchResult;
            wallet.contracts.push(contract);
        };
        for (var i = 0; i < items.length; i++) {
            _loop_1(i);
        }
        this.recountNewContracts();
    };
    Wallet.prototype.recountNewContracts = function () {
        this.new_contracts = (this.contracts.filter(function (item) { return item.is_new === true; })).length;
    };
    Wallet.prototype.getContract = function (id) {
        for (var i = 0; i < this.contracts.length; i++) {
            if (this.contracts[i].contract_id === id) {
                return this.contracts[i];
            }
        }
        return null;
    };
    return Wallet;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/contract-status-messages.pipe.ts":
/*!*****************************************************************!*\
  !*** ./src/app/_helpers/pipes/contract-status-messages.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: ContractStatusMessagesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractStatusMessagesPipe", function() { return ContractStatusMessagesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContractStatusMessagesPipe = /** @class */ (function () {
    function ContractStatusMessagesPipe(translate) {
        this.translate = translate;
    }
    ContractStatusMessagesPipe.prototype.getStateSeller = function (stateNum) {
        var state = { part1: '', part2: '' };
        switch (stateNum) {
            case 1:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.NEW_CONTRACT');
                break;
            case 110:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.IGNORED');
                break;
            case 201:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.ACCEPTED');
                state.part2 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.WAIT');
                break;
            case 2:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.WAITING_BUYER');
                break;
            case 3:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.COMPLETED');
                break;
            case 4:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.NOT_RECEIVED');
                state.part2 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.NULLIFIED');
                break;
            case 5:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.PROPOSAL_CANCEL');
                break;
            case 601:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.BEING_CANCELLED');
                break;
            case 6:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.CANCELLED');
                break;
            case 130:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.IGNORED_CANCEL');
                break;
            case 140:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.EXPIRED');
                break;
        }
        return state.part1 + (state.part2.length ? '. ' + state.part2 : '');
    };
    ContractStatusMessagesPipe.prototype.getStateBuyer = function (stateNum) {
        var state = { part1: '', part2: '' };
        switch (stateNum) {
            case 1:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.WAITING');
                break;
            case 110:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.IGNORED');
                break;
            case 201:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.ACCEPTED');
                state.part2 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.WAIT');
                break;
            case 2:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.ACCEPTED');
                break;
            case 120:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.WAITING_SELLER');
                break;
            case 3:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.COMPLETED');
                break;
            case 4:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.NOT_RECEIVED');
                state.part2 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.NULLIFIED');
                break;
            case 5:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.WAITING_CANCEL');
                break;
            case 601:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.BEING_CANCELLED');
                break;
            case 6:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.CANCELLED');
                break;
            case 130:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.IGNORED_CANCEL');
                break;
            case 140:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.EXPIRED');
                break;
        }
        return state.part1 + (state.part2.length ? '. ' + state.part2 : '');
    };
    ContractStatusMessagesPipe.prototype.transform = function (state, is_a) {
        if (is_a) {
            return this.getStateBuyer(state);
        }
        else {
            return this.getStateSeller(state);
        }
    };
    ContractStatusMessagesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'contractStatusMessages'
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ContractStatusMessagesPipe);
    return ContractStatusMessagesPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/contract-time-left.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/_helpers/pipes/contract-time-left.pipe.ts ***!
  \***********************************************************/
/*! exports provided: ContractTimeLeftPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractTimeLeftPipe", function() { return ContractTimeLeftPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContractTimeLeftPipe = /** @class */ (function () {
    function ContractTimeLeftPipe(service, translate) {
        this.service = service;
        this.translate = translate;
    }
    ContractTimeLeftPipe.prototype.transform = function (value, arg) {
        var time = parseInt(((parseInt(value, 10) - this.service.exp_med_ts) / 3600).toFixed(0), 10);
        var type = arg || 0;
        if (time === 0) {
            return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_LESS_ONE');
        }
        if (this.service.settings.language === 'en') {
            if (type === 0) {
                if (time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY', { time: time });
                }
            }
            else if (type === 1) {
                if (time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE_RESPONSE', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_RESPONSE', { time: time });
                }
            }
            else if (type === 2) {
                if (time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE_WAITING', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_WAITING', { time: time });
                }
            }
        }
        else {
            var rest = time % 10;
            if (type === 0) {
                if (((time > 20) && (rest === 1)) || time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE', { time: time });
                }
                else if ((time > 1) && (time < 5) || ((time > 20) && (rest === 2 || rest === 3 || rest === 4))) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_ALT', { time: time });
                }
            }
            else if (type === 1) {
                if (((time > 20) && (rest === 1)) || time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE_RESPONSE', { time: time });
                }
                else if ((time > 1) && (time < 5) || ((time > 20) && (rest === 2 || rest === 3 || rest === 4))) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_RESPONSE', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_ALT_RESPONSE', { time: time });
                }
            }
            else if (type === 2) {
                if (((time > 20) && (rest === 1)) || time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE_WAITING', { time: time });
                }
                else if ((time > 1) && (time < 5) || ((time > 20) && (rest === 2 || rest === 3 || rest === 4))) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_WAITING', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_ALT_WAITING', { time: time });
                }
            }
        }
        return null;
    };
    ContractTimeLeftPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'contractTimeLeft'
        }),
        __metadata("design:paramtypes", [_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ContractTimeLeftPipe);
    return ContractTimeLeftPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/history-type-messages.pipe.ts":
/*!**************************************************************!*\
  !*** ./src/app/_helpers/pipes/history-type-messages.pipe.ts ***!
  \**************************************************************/
/*! exports provided: HistoryTypeMessagesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryTypeMessagesPipe", function() { return HistoryTypeMessagesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryTypeMessagesPipe = /** @class */ (function () {
    function HistoryTypeMessagesPipe(translate) {
        this.translate = translate;
    }
    HistoryTypeMessagesPipe.prototype.transform = function (item, args) {
        if (item.tx_type === 0) {
            if (item.remote_addresses && item.remote_addresses[0]) {
                return item.remote_addresses[0];
            }
            else {
                if (item.is_income) {
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.HIDDEN');
                }
                else {
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.UNDEFINED');
                }
            }
        }
        else if (item.tx_type === 6 && item.height === 0) {
            return 'unknown';
        }
        else if (item.tx_type === 9) {
            if (item.hasOwnProperty('contract') && item.contract[0].is_a) {
                return this.translate.instant('HISTORY.TYPE_MESSAGES.COMPLETE_BUYER');
            }
            else {
                return this.translate.instant('HISTORY.TYPE_MESSAGES.COMPLETE_SELLER');
            }
        }
        else {
            switch (item.tx_type) {
                // case 0:
                //   return '';
                // case 1:
                //   return '';
                // case 2:
                //   return '';
                // case 3:
                //   return '';
                case 4:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.CREATE_ALIAS');
                case 5:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.UPDATE_ALIAS');
                case 6:
                    return (item.td['spn'] && item.td['spn'].length) ? this.translate.instant('HISTORY.TYPE_MESSAGES.POS_REWARD') : this.translate.instant('HISTORY.TYPE_MESSAGES.POW_REWARD');
                case 7:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.CREATE_CONTRACT');
                case 8:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.PLEDGE_CONTRACT');
                // case 9:
                //   return '';
                case 10:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.NULLIFY_CONTRACT');
                case 11:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.PROPOSAL_CANCEL_CONTRACT');
                case 12:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.CANCEL_CONTRACT');
            }
        }
        return this.translate.instant('HISTORY.TYPE_MESSAGES.UNDEFINED');
    };
    HistoryTypeMessagesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'historyTypeMessages'
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], HistoryTypeMessagesPipe);
    return HistoryTypeMessagesPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/int-to-money.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/_helpers/pipes/int-to-money.pipe.ts ***!
  \*****************************************************/
/*! exports provided: IntToMoneyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntToMoneyPipe", function() { return IntToMoneyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntToMoneyPipe = /** @class */ (function () {
    function IntToMoneyPipe(variablesService) {
        this.variablesService = variablesService;
    }
    IntToMoneyPipe.prototype.transform = function (value, args) {
        if (value === 0 || value === undefined) {
            return '0';
        }
        var maxFraction = this.variablesService.digits;
        if (args) {
            maxFraction = parseInt(args, 10);
        }
        var power = Math.pow(10, this.variablesService.digits);
        var str = (new bignumber_js__WEBPACK_IMPORTED_MODULE_2__["BigNumber"](value)).div(power).toFixed(maxFraction);
        for (var i = str.length - 1; i >= 0; i--) {
            if (str[i] !== '0') {
                str = str.substr(0, i + 1);
                break;
            }
        }
        if (str[str.length - 1] === '.') {
            str = str.substr(0, str.length - 1);
        }
        return str;
    };
    IntToMoneyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'intToMoney'
        }),
        __metadata("design:paramtypes", [_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"]])
    ], IntToMoneyPipe);
    return IntToMoneyPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/money-to-int.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/_helpers/pipes/money-to-int.pipe.ts ***!
  \*****************************************************/
/*! exports provided: MoneyToIntPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyToIntPipe", function() { return MoneyToIntPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoneyToIntPipe = /** @class */ (function () {
    function MoneyToIntPipe(variablesService) {
        this.variablesService = variablesService;
    }
    MoneyToIntPipe.prototype.transform = function (value, args) {
        var CURRENCY_DISPLAY_DECIMAL_POINT = this.variablesService.digits;
        var result;
        if (value) {
            var am_str = value.toString().trim();
            var point_index = am_str.indexOf('.');
            var fraction_size = 0;
            if (-1 !== point_index) {
                fraction_size = am_str.length - point_index - 1;
                while (CURRENCY_DISPLAY_DECIMAL_POINT < fraction_size && '0' === am_str[am_str.length - 1]) {
                    am_str = am_str.slice(0, am_str.length - 1);
                    --fraction_size;
                }
                if (CURRENCY_DISPLAY_DECIMAL_POINT < fraction_size) {
                    return undefined;
                }
                am_str = am_str.slice(0, point_index) + am_str.slice(point_index + 1, am_str.length);
            }
            else {
                fraction_size = 0;
            }
            if (!am_str.length) {
                return undefined;
            }
            if (fraction_size < CURRENCY_DISPLAY_DECIMAL_POINT) {
                for (var i = 0; i !== CURRENCY_DISPLAY_DECIMAL_POINT - fraction_size; i++) {
                    am_str = am_str + '0';
                }
            }
            result = (new bignumber_js__WEBPACK_IMPORTED_MODULE_2__["BigNumber"](am_str)).integerValue();
        }
        return result;
    };
    MoneyToIntPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'moneyToInt'
        }),
        __metadata("design:paramtypes", [_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"]])
    ], MoneyToIntPipe);
    return MoneyToIntPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/safe-html.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/_helpers/pipes/safe-html.pipe.ts ***!
  \**************************************************/
/*! exports provided: SafeHTMLPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHTMLPipe", function() { return SafeHTMLPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHTMLPipe = /** @class */ (function () {
    function SafeHTMLPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHTMLPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SafeHTMLPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safeHTML'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHTMLPipe);
    return SafeHTMLPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/services/backend.service.ts":
/*!******************************************************!*\
  !*** ./src/app/_helpers/services/backend.service.ts ***!
  \******************************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/money-to-int.pipe */ "./src/app/_helpers/pipes/money-to-int.pipe.ts");
/* harmony import */ var json_bignumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! json-bignumber */ "./node_modules/json-bignumber/src/JSONBigNumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BackendService = /** @class */ (function () {
    function BackendService(translate, variablesService, modalService, moneyToIntPipe) {
        this.translate = translate;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.moneyToIntPipe = moneyToIntPipe;
        this.backendLoaded = false;
    }
    BackendService_1 = BackendService;
    BackendService.bigNumberParser = function (key, val) {
        if (val.constructor.name === 'BigNumber' && ['balance', 'unlocked_balance', 'amount', 'fee', 'b_fee', 'to_pay', 'a_pledge', 'b_pledge', 'coast', 'a'].indexOf(key) === -1) {
            return val.toNumber();
        }
        if (key === 'rcv' || key === 'spn') {
            for (var i = 0; i < val.length; i++) {
                val[i] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](val[i]);
            }
        }
        return val;
    };
    BackendService.Debug = function (type, message) {
        switch (type) {
            case 0:
                console.error(message);
                break;
            case 1:
                console.warn(message);
                break;
            case 2:
                console.log(message);
                break;
            default:
                console.log(message);
                break;
        }
    };
    BackendService.prototype.informerRun = function (error, params, command) {
        var error_translate = '';
        switch (error) {
            case 'NOT_ENOUGH_MONEY':
                error_translate = 'ERRORS.NOT_ENOUGH_MONEY';
                // error_translate = 'ERRORS.NO_MONEY'; maybe that one?
                if (command === 'cancel_offer') {
                    error_translate = this.translate.instant('ERRORS.NO_MONEY_REMOVE_OFFER', {
                        'fee': this.variablesService.default_fee,
                        'currency': this.variablesService.defaultCurrency
                    });
                }
                break;
            case 'CORE_BUSY':
                error_translate = 'ERRORS.CORE_BUSY';
                break;
            case 'BUSY':
                error_translate = 'ERRORS.DAEMON_BUSY';
                break;
            case 'OVERFLOW':
                if (command !== 'get_all_aliases') {
                    error_translate = '';
                }
                break;
            case 'NOT_ENOUGH_OUTPUTS_FOR_MIXING':
                error_translate = 'ERRORS.NOT_ENOUGH_OUTPUTS_TO_MIX';
                break;
            case 'TX_IS_TOO_BIG':
                error_translate = 'ERRORS.TRANSACTION_IS_TO_BIG';
                break;
            case 'DISCONNECTED':
                error_translate = 'ERRORS.TRANSFER_ATTEMPT';
                break;
            case 'ACCESS_DENIED':
                error_translate = 'ERRORS.ACCESS_DENIED';
                break;
            case 'TX_REJECTED':
                // if (command === 'request_alias_registration') {
                // error_translate = 'INFORMER.ALIAS_IN_REGISTER';
                // } else {
                error_translate = 'ERRORS.TRANSACTION_ERROR';
                // }
                break;
            case 'INTERNAL_ERROR':
                error_translate = 'ERRORS.TRANSACTION_ERROR';
                break;
            case 'BAD_ARG':
                error_translate = 'ERRORS.BAD_ARG';
                break;
            case 'WALLET_WRONG_ID':
                error_translate = 'ERRORS.WALLET_WRONG_ID';
                break;
            case 'WALLET_WATCH_ONLY_NOT_SUPPORTED':
                error_translate = 'ERRORS.WALLET_WATCH_ONLY_NOT_SUPPORTED';
                break;
            case 'WRONG_PASSWORD':
                params = JSON.parse(params);
                if (!params.testEmpty) {
                    error_translate = 'ERRORS.WRONG_PASSWORD';
                }
                break;
            case 'FILE_RESTORED':
                if (command === 'open_wallet') {
                    error_translate = 'ERRORS.FILE_RESTORED';
                }
                break;
            case 'FILE_NOT_FOUND':
                if (command !== 'open_wallet' && command !== 'get_alias_info_by_name' && command !== 'get_alias_info_by_address') {
                    error_translate = this.translate.instant('ERRORS.FILE_NOT_FOUND');
                    params = JSON.parse(params);
                    if (params.path) {
                        error_translate += ': ' + params.path;
                    }
                }
                break;
            case 'NOT_FOUND':
                if (command !== 'open_wallet' && command !== 'get_alias_info_by_name' && command !== 'get_alias_info_by_address') {
                    error_translate = this.translate.instant('ERRORS.FILE_NOT_FOUND');
                    params = JSON.parse(params);
                    if (params.path) {
                        error_translate += ': ' + params.path;
                    }
                }
                break;
            case 'CANCELED':
            case '':
                break;
            case 'FAIL':
                if (command === 'create_proposal' || command === 'accept_proposal' || command === 'release_contract' || command === 'request_cancel_contract' || command === 'accept_cancel_contract') {
                    error_translate = ' ';
                }
                break;
            case 'ALREADY_EXISTS':
                error_translate = 'ERRORS.FILE_EXIST';
                break;
            case 'FAILED':
                BackendService_1.Debug(0, "Error: (" + error + ") was triggered by command: " + command);
                break;
            default:
                error_translate = error;
        }
        if (error.indexOf('FAIL:failed to save file') > -1) {
            error_translate = 'ERRORS.FILE_NOT_SAVED';
        }
        if (error.indexOf('FAILED:failed to open binary wallet file for saving') > -1 && command === 'generate_wallet') {
            error_translate = '';
        }
        if (error_translate !== '') {
            this.modalService.prepareModal('error', error_translate);
        }
    };
    BackendService.prototype.commandDebug = function (command, params, result) {
        BackendService_1.Debug(2, '----------------- ' + command + ' -----------------');
        var debug = {
            _send_params: params,
            _result: result
        };
        BackendService_1.Debug(2, debug);
        try {
            BackendService_1.Debug(2, json_bignumber__WEBPACK_IMPORTED_MODULE_6__["default"].parse(result, BackendService_1.bigNumberParser));
        }
        catch (e) {
            BackendService_1.Debug(2, { response_data: result, error_code: 'OK' });
        }
    };
    BackendService.prototype.backendCallback = function (resultStr, params, callback, command) {
        var _this = this;
        var Result = resultStr;
        if (command !== 'get_clipboard') {
            if (!resultStr || resultStr === '') {
                Result = {};
            }
            else {
                try {
                    Result = json_bignumber__WEBPACK_IMPORTED_MODULE_6__["default"].parse(resultStr, BackendService_1.bigNumberParser);
                }
                catch (e) {
                    Result = { response_data: resultStr, error_code: 'OK' };
                }
            }
        }
        else {
            Result = {
                error_code: 'OK',
                response_data: Result
            };
        }
        var core_busy = Result.error_code === 'CORE_BUSY';
        var Status = (Result.error_code === 'OK' || Result.error_code === 'TRUE');
        if (!Status && Status !== undefined && Result.error_code !== undefined) {
            BackendService_1.Debug(1, 'API error for command: "' + command + '". Error code: ' + Result.error_code);
        }
        var data = ((typeof Result === 'object') && 'response_data' in Result) ? Result.response_data : Result;
        var res_error_code = false;
        if (typeof Result === 'object' && 'error_code' in Result && Result.error_code !== 'OK' && Result.error_code !== 'TRUE' && Result.error_code !== 'FALSE') {
            if (core_busy) {
                setTimeout(function () {
                    // this is will avoid update data when user
                    // on other wallet after CORE_BUSY (blink of data)
                    if (command !== 'get_recent_transfers') {
                        _this.runCommand(command, params, callback);
                    }
                    else {
                        var current_wallet_id = _this.variablesService.currentWallet.wallet_id;
                        if (current_wallet_id === params.wallet_id) {
                            _this.runCommand(command, params, callback);
                        }
                    }
                }, 50);
            }
            else {
                this.informerRun(Result.error_code, params, command);
                res_error_code = Result.error_code;
            }
        }
        // if ( command === 'get_offers_ex' ){
        //   Service.printLog( "get_offers_ex offers count "+((data.offers)?data.offers.length:0) );
        // }
        if (!core_busy) {
            if (typeof callback === 'function') {
                callback(Status, data, res_error_code);
            }
            else {
                return data;
            }
        }
    };
    BackendService.prototype.runCommand = function (command, params, callback) {
        if (this.backendObject) {
            if (command === 'get_recent_transfers') {
                this.variablesService.get_recent_transfers = true;
            }
            var Action = this.backendObject[command];
            if (!Action) {
                BackendService_1.Debug(0, 'Run Command Error! Command "' + command + '" don\'t found in backendObject');
            }
            else {
                var that_1 = this;
                params = (typeof params === 'string') ? params : json_bignumber__WEBPACK_IMPORTED_MODULE_6__["default"].stringify(params);
                if (params === undefined || params === '{}') {
                    if (command === 'get_recent_transfers') {
                        this.variablesService.get_recent_transfers = false;
                    }
                    Action(function (resultStr) {
                        that_1.commandDebug(command, params, resultStr);
                        return that_1.backendCallback(resultStr, params, callback, command);
                    });
                }
                else {
                    Action(params, function (resultStr) {
                        that_1.commandDebug(command, params, resultStr);
                        return that_1.backendCallback(resultStr, params, callback, command);
                    });
                }
            }
        }
    };
    BackendService.prototype.eventSubscribe = function (command, callback) {
        if (command === 'on_core_event') {
            this.backendObject[command].connect(callback);
        }
        else {
            this.backendObject[command].connect(function (str) {
                callback(json_bignumber__WEBPACK_IMPORTED_MODULE_6__["default"].parse(str, BackendService_1.bigNumberParser));
            });
        }
    };
    BackendService.prototype.initService = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            if (!_this.backendLoaded) {
                _this.backendLoaded = true;
                var that_2 = _this;
                window.QWebChannel(window.qt.webChannelTransport, function (channel) {
                    that_2.backendObject = channel.objects.mediator_object;
                    observer.next('ok');
                });
            }
            else {
                if (!_this.backendObject) {
                    observer.error('error');
                    observer.error('error');
                }
            }
        });
    };
    BackendService.prototype.webkitLaunchedScript = function () {
        return this.runCommand('webkit_launched_script');
    };
    BackendService.prototype.quitRequest = function () {
        return this.runCommand('on_request_quit');
    };
    BackendService.prototype.getAppData = function (callback) {
        this.runCommand('get_app_data', {}, callback);
    };
    BackendService.prototype.storeAppData = function (callback) {
        var _this = this;
        if (this.variablesService.wallets.length) {
            this.variablesService.settings.wallets = [];
            this.variablesService.wallets.forEach(function (wallet) {
                _this.variablesService.settings.wallets.push({ name: wallet.name, path: wallet.path });
            });
        }
        this.runCommand('store_app_data', this.variablesService.settings, callback);
    };
    BackendService.prototype.getSecureAppData = function (pass, callback) {
        this.runCommand('get_secure_app_data', pass, callback);
    };
    BackendService.prototype.setMasterPassword = function (pass, callback) {
        this.runCommand('set_master_password', pass, callback);
    };
    BackendService.prototype.checkMasterPassword = function (pass, callback) {
        this.runCommand('check_master_password', pass, callback);
    };
    BackendService.prototype.storeSecureAppData = function (callback) {
        var _this = this;
        var data;
        var wallets = [];
        var contacts = [];
        this.variablesService.wallets.forEach(function (wallet) {
            wallets.push({ name: wallet.name, pass: wallet.pass, path: wallet.path, staking: wallet.staking });
        });
        this.variablesService.contacts.forEach(function (contact) {
            contacts.push({ name: contact.name, address: contact.address, notes: contact.notes });
        });
        data = { wallets: wallets, contacts: contacts };
        this.backendObject['store_secure_app_data'](JSON.stringify(data), this.variablesService.appPass, function (dataStore) {
            _this.backendCallback(dataStore, {}, callback, 'store_secure_app_data');
        });
    };
    BackendService.prototype.dropSecureAppData = function (callback) {
        var _this = this;
        this.backendObject['drop_secure_app_data'](function (dataStore) {
            _this.backendCallback(dataStore, {}, callback, 'drop_secure_app_data');
        });
    };
    BackendService.prototype.haveSecureAppData = function (callback) {
        this.runCommand('have_secure_app_data', {}, callback);
    };
    BackendService.prototype.saveFileDialog = function (caption, fileMask, default_path, callback) {
        var dir = default_path ? default_path : '/';
        var params = {
            caption: caption,
            filemask: fileMask,
            default_dir: dir
        };
        this.runCommand('show_savefile_dialog', params, callback);
    };
    BackendService.prototype.openFileDialog = function (caption, fileMask, default_path, callback) {
        var dir = default_path ? default_path : '/';
        var params = {
            caption: caption,
            filemask: fileMask,
            default_dir: dir
        };
        this.runCommand('show_openfile_dialog', params, callback);
    };
    BackendService.prototype.storeFile = function (path, buff) {
        this.backendObject['store_to_file'](path, buff);
    };
    BackendService.prototype.loadFile = function (path, callback) {
        this.runCommand('load_from_file', path, callback);
    };
    BackendService.prototype.generateWallet = function (path, pass, callback) {
        var params = {
            path: path,
            pass: pass
        };
        this.runCommand('generate_wallet', params, callback);
    };
    BackendService.prototype.openWallet = function (path, pass, txs_to_return, testEmpty, callback) {
        var params = {
            path: path,
            pass: pass,
            txs_to_return: txs_to_return
        };
        params['testEmpty'] = !!(testEmpty);
        this.runCommand('open_wallet', params, callback);
    };
    BackendService.prototype.closeWallet = function (wallet_id, callback) {
        this.runCommand('close_wallet', { wallet_id: +wallet_id }, callback);
    };
    BackendService.prototype.getSmartWalletInfo = function (_a, callback) {
        var wallet_id = _a.wallet_id, seed_password = _a.seed_password;
        this.runCommand('get_smart_wallet_info', { wallet_id: +wallet_id, seed_password: seed_password }, callback);
    };
    BackendService.prototype.getSeedPhraseInfo = function (param, callback) {
        this.runCommand('get_seed_phrase_info', param, callback);
    };
    BackendService.prototype.runWallet = function (wallet_id, callback) {
        this.runCommand('run_wallet', { wallet_id: +wallet_id }, callback);
    };
    BackendService.prototype.isValidRestoreWalletText = function (param, callback) {
        this.runCommand('is_valid_restore_wallet_text', param, callback);
    };
    BackendService.prototype.restoreWallet = function (path, pass, seed_phrase, seed_pass, callback) {
        var params = {
            seed_phrase: seed_phrase,
            path: path,
            pass: pass,
            seed_pass: seed_pass
        };
        this.runCommand('restore_wallet', params, callback);
    };
    BackendService.prototype.sendMoney = function (from_wallet_id, to_address, amount, fee, mixin, comment, hide, callback) {
        var params = {
            wallet_id: parseInt(from_wallet_id, 10),
            destinations: [
                {
                    address: to_address,
                    amount: amount
                }
            ],
            mixin_count: (mixin) ? parseInt(mixin, 10) : 0,
            lock_time: 0,
            fee: this.moneyToIntPipe.transform(fee),
            comment: comment,
            push_payer: !hide
        };
        this.runCommand('transfer', params, callback);
    };
    BackendService.prototype.validateAddress = function (address, callback) {
        this.runCommand('validate_address', address, callback);
    };
    BackendService.prototype.setClipboard = function (str, callback) {
        return this.runCommand('set_clipboard', str, callback);
    };
    BackendService.prototype.getClipboard = function (callback) {
        return this.runCommand('get_clipboard', {}, callback);
    };
    BackendService.prototype.createProposal = function (wallet_id, title, comment, a_addr, b_addr, to_pay, a_pledge, b_pledge, time, payment_id, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            details: {
                t: title,
                c: comment,
                a_addr: a_addr,
                b_addr: b_addr,
                to_pay: this.moneyToIntPipe.transform(to_pay),
                a_pledge: this.moneyToIntPipe.transform(a_pledge),
                b_pledge: this.moneyToIntPipe.transform(b_pledge)
            },
            payment_id: payment_id,
            expiration_period: parseInt(time, 10) * 60 * 60,
            fee: this.variablesService.default_fee_big,
            b_fee: this.variablesService.default_fee_big
        };
        BackendService_1.Debug(1, params);
        this.runCommand('create_proposal', params, callback);
    };
    BackendService.prototype.getContracts = function (wallet_id, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10)
        };
        BackendService_1.Debug(1, params);
        this.runCommand('get_contracts', params, callback);
    };
    BackendService.prototype.acceptProposal = function (wallet_id, contract_id, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            contract_id: contract_id
        };
        BackendService_1.Debug(1, params);
        this.runCommand('accept_proposal', params, callback);
    };
    BackendService.prototype.releaseProposal = function (wallet_id, contract_id, release_type, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            contract_id: contract_id,
            release_type: release_type // "normal" or "burn"
        };
        BackendService_1.Debug(1, params);
        this.runCommand('release_contract', params, callback);
    };
    BackendService.prototype.requestCancelContract = function (wallet_id, contract_id, time, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            contract_id: contract_id,
            fee: this.variablesService.default_fee_big,
            expiration_period: parseInt(time, 10) * 60 * 60
        };
        BackendService_1.Debug(1, params);
        this.runCommand('request_cancel_contract', params, callback);
    };
    BackendService.prototype.acceptCancelContract = function (wallet_id, contract_id, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            contract_id: contract_id
        };
        BackendService_1.Debug(1, params);
        this.runCommand('accept_cancel_contract', params, callback);
    };
    BackendService.prototype.getMiningHistory = function (wallet_id, callback) {
        this.runCommand('get_mining_history', { wallet_id: parseInt(wallet_id, 10) }, callback);
    };
    BackendService.prototype.startPosMining = function (wallet_id, callback) {
        this.runCommand('start_pos_mining', { wallet_id: parseInt(wallet_id, 10) }, callback);
    };
    BackendService.prototype.stopPosMining = function (wallet_id, callback) {
        this.runCommand('stop_pos_mining', { wallet_id: parseInt(wallet_id, 10) }, callback);
    };
    BackendService.prototype.openUrlInBrowser = function (url, callback) {
        this.runCommand('open_url_in_browser', url, callback);
    };
    BackendService.prototype.start_backend = function (node, host, port, callback) {
        var params = {
            configure_for_remote_node: node,
            remote_node_host: host,
            remote_node_port: parseInt(port, 10)
        };
        this.runCommand('start_backend', params, callback);
    };
    BackendService.prototype.getDefaultFee = function (callback) {
        this.runCommand('get_default_fee', {}, callback);
    };
    BackendService.prototype.setBackendLocalization = function (stringsArray, title, callback) {
        var params = {
            strings: stringsArray,
            language_title: title
        };
        this.runCommand('set_localization_strings', params, callback);
    };
    BackendService.prototype.registerAlias = function (wallet_id, alias, address, fee, comment, reward, callback) {
        var params = {
            wallet_id: wallet_id,
            alias: {
                alias: alias,
                address: address,
                tracking_key: '',
                comment: comment
            },
            fee: this.moneyToIntPipe.transform(fee),
            reward: this.moneyToIntPipe.transform(reward)
        };
        this.runCommand('request_alias_registration', params, callback);
    };
    BackendService.prototype.updateAlias = function (wallet_id, alias, fee, callback) {
        var params = {
            wallet_id: wallet_id,
            alias: {
                alias: alias.name.replace('@', ''),
                address: alias.address,
                tracking_key: '',
                comment: alias.comment
            },
            fee: this.moneyToIntPipe.transform(fee)
        };
        this.runCommand('request_alias_update', params, callback);
    };
    BackendService.prototype.getAllAliases = function (callback) {
        this.runCommand('get_all_aliases', {}, callback);
    };
    BackendService.prototype.getAliasByName = function (value, callback) {
        return this.runCommand('get_alias_info_by_name', value, callback);
    };
    BackendService.prototype.getAliasByAddress = function (value, callback) {
        return this.runCommand('get_alias_info_by_address', value, callback);
    };
    BackendService.prototype.getAliasCoast = function (alias, callback) {
        this.runCommand('get_alias_coast', { v: alias }, callback);
    };
    BackendService.prototype.getWalletAlias = function (address) {
        var _this = this;
        if (address !== null && this.variablesService.daemon_state === 2) {
            if (this.variablesService.aliasesChecked[address] == null) {
                this.variablesService.aliasesChecked[address] = {};
                if (this.variablesService.aliases.length) {
                    for (var i = 0, length_1 = this.variablesService.aliases.length; i < length_1; i++) {
                        if (i in this.variablesService.aliases && this.variablesService.aliases[i]['address'] === address) {
                            this.variablesService.aliasesChecked[address]['name'] = this.variablesService.aliases[i].name;
                            this.variablesService.aliasesChecked[address]['address'] = this.variablesService.aliases[i].address;
                            this.variablesService.aliasesChecked[address]['comment'] = this.variablesService.aliases[i].comment;
                            return this.variablesService.aliasesChecked[address];
                        }
                    }
                }
                this.getAliasByAddress(address, function (status, data) {
                    if (status) {
                        _this.variablesService.aliasesChecked[data.address]['name'] = '@' + data.alias;
                        _this.variablesService.aliasesChecked[data.address]['address'] = data.address;
                        _this.variablesService.aliasesChecked[data.address]['comment'] = data.comment;
                    }
                });
            }
            return this.variablesService.aliasesChecked[address];
        }
        return {};
    };
    BackendService.prototype.getContactAlias = function () {
        var _this = this;
        if (this.variablesService.contacts.length && this.variablesService.daemon_state === 2) {
            this.variablesService.contacts.map(function (contact) {
                _this.getAliasByAddress(contact.address, function (status, data) {
                    if (status) {
                        if (data.alias) {
                            contact.alias = '@' + data.alias;
                        }
                    }
                    else {
                        contact.alias = null;
                    }
                });
            });
        }
    };
    BackendService.prototype.getRecentTransfers = function (id, offset, count, exclude_mining_txs, callback) {
        var params = {
            wallet_id: id,
            offset: offset,
            count: count,
            exclude_mining_txs: exclude_mining_txs
        };
        this.runCommand('get_recent_transfers', params, callback);
    };
    BackendService.prototype.getPoolInfo = function (callback) {
        this.runCommand('get_tx_pool_info', {}, callback);
    };
    BackendService.prototype.getVersion = function (callback) {
        var _this = this;
        this.runCommand('get_version', {}, function (status, version) {
            _this.runCommand('get_network_type', {}, function (status, type) {
                callback(version, type);
            });
        });
    };
    BackendService.prototype.setLogLevel = function (level) {
        return this.runCommand('set_log_level', { v: level });
    };
    var BackendService_1;
    BackendService = BackendService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_5__["MoneyToIntPipe"]])
    ], BackendService);
    return BackendService;
}());

/*

      toggleAutoStart: function (value) {
        return this.runCommand('toggle_autostart', asVal(value));
      },

      getOptions: function (callback) {
        return this.runCommand('get_options', {}, callback);
      },

      isFileExist: function (path, callback) {
        return this.runCommand('is_file_exist', path, callback);
      },

      isAutoStartEnabled: function (callback) {
        this.runCommand('is_autostart_enabled', {}, function (status, data) {
          if (angular.isFunction(callback)) {
            callback('error_code' in data && data.error_code !== 'FALSE')
          }
        });
      },

      resetWalletPass: function (wallet_id, pass, callback) {
        this.runCommand('reset_wallet_password', {wallet_id: wallet_id, pass: pass}, callback);
      },



      getOsVersion: function (callback) {
        this.runCommand('get_os_version', {}, function (status, version) {
          callback(version)
        })
      },

      getLogFile: function (callback) {
        this.runCommand('get_log_file', {}, function (status, version) {
          callback(version)
        })
      },

      resync_wallet: function (wallet_id, callback) {
        this.runCommand('resync_wallet', {wallet_id: wallet_id}, callback);
      },

      storeFile: function (path, buff, callback) {
        this.backendObject['store_to_file'](path, (typeof buff === 'string' ? buff : JSON.stringify(buff)), function (data) {
          backendCallback(data, {}, callback, 'store_to_file');
        });
      },

      getMiningEstimate: function (amount_coins, time, callback) {
        var params = {
          "amount_coins": $filter('money_to_int')(amount_coins),
          "time": parseInt(time)
        };
        this.runCommand('get_mining_estimate', params, callback);
      },

      backupWalletKeys: function (wallet_id, path, callback) {
        var params = {
          "wallet_id": wallet_id,
          "path": path
        };
        this.runCommand('backup_wallet_keys', params, callback);
      },

      setBlockedIcon: function (enabled, callback) {
        var mode = (enabled) ? "blocked" : "normal";
        Service.runCommand('bool_toggle_icon', mode, callback);
      },

      getWalletInfo: function (wallet_id, callback) {
        this.runCommand('get_wallet_info', {wallet_id: wallet_id}, callback);
      },

      printText: function (content) {
        return this.runCommand('print_text', {html_text: content});
      },

      printLog: function (msg, log_level) {
        return this.runCommand('print_log', {msg: msg, log_level: log_level});
      },

*/


/***/ }),

/***/ "./src/app/_helpers/services/modal.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_helpers/services/modal.service.ts ***!
  \****************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _directives_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/modal-container/modal-container.component */ "./src/app/_helpers/directives/modal-container/modal-container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalService = /** @class */ (function () {
    function ModalService(componentFactoryResolver, appRef, injector, ngZone, translate) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.ngZone = ngZone;
        this.translate = translate;
        this.components = [];
    }
    ModalService.prototype.prepareModal = function (type, message) {
        var _this = this;
        var length = this.components.push(this.componentFactoryResolver.resolveComponentFactory(_directives_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_2__["ModalContainerComponent"]).create(this.injector));
        this.components[length - 1].instance['type'] = type;
        this.components[length - 1].instance['message'] = message.length ? this.translate.instant(message) : '';
        this.components[length - 1].instance['close'].subscribe(function () {
            _this.removeModal(length - 1);
        });
        this.ngZone.run(function () {
            _this.appendModal(length - 1);
        });
    };
    ModalService.prototype.appendModal = function (index) {
        this.appRef.attachView(this.components[index].hostView);
        var domElem = this.components[index].hostView.rootNodes[0];
        document.body.appendChild(domElem);
    };
    ModalService.prototype.removeModal = function (index) {
        if (this.components[index]) {
            this.appRef.detachView(this.components[index].hostView);
            this.components[index].destroy();
            this.components.splice(index, 1);
        }
        else {
            var last = this.components.length - 1;
            this.appRef.detachView(this.components[last].hostView);
            this.components[last].destroy();
            this.components.splice(last, 1);
        }
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/_helpers/services/pagination.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/_helpers/services/pagination.service.ts ***!
  \*********************************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _pagination_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.store */ "./src/app/_helpers/services/pagination.store.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaginationService = /** @class */ (function () {
    function PaginationService(variables, ngZone, paginationStore) {
        this.variables = variables;
        this.ngZone = ngZone;
        this.paginationStore = paginationStore;
    }
    PaginationService.prototype.paginate = function (currentPage) {
        var _this = this;
        if (currentPage === void 0) { currentPage = 1; }
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > this.variables.currentWallet.totalPages) {
            currentPage = this.variables.currentWallet.totalPages;
        }
        var startPage, endPage;
        if (this.variables.currentWallet.totalPages <= this.variables.maxPages) {
            startPage = 1;
            endPage = this.variables.currentWallet.totalPages;
        }
        else {
            var maxPagesBeforeCurrentPage = Math.floor(this.variables.maxPages / 2);
            var maxPagesAfterCurrentPage = Math.ceil(this.variables.maxPages / 2) - 1;
            if (currentPage <= maxPagesBeforeCurrentPage) {
                startPage = 1;
                this.variables.currentWallet.totalPages > this.variables.maxPages
                    ? endPage = this.variables.maxPages
                    : endPage = this.variables.currentWallet.totalPages;
            }
            else if (currentPage + maxPagesAfterCurrentPage >= this.variables.currentWallet.totalPages) {
                startPage = this.variables.currentWallet.totalPages - this.variables.maxPages + 1;
                endPage = this.variables.currentWallet.totalPages;
            }
            else {
                startPage = currentPage - maxPagesBeforeCurrentPage;
                endPage = currentPage + maxPagesAfterCurrentPage;
            }
        }
        this.ngZone.run(function () {
            _this.variables.currentWallet.pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        });
    };
    PaginationService.prototype.getOffset = function (walletID) {
        var mining = this.variables.currentWallet.exclude_mining_txs;
        var currentPage = (this.variables.currentWallet.currentPage);
        var offset = ((currentPage - 1) * this.variables.count);
        if (!mining) {
            return offset;
        }
        var value = this.paginationStore.value;
        var pages = value.filter(function (item) { return item.walletID === walletID; });
        if (pages && pages.length) {
            var max = lodash__WEBPACK_IMPORTED_MODULE_3__["maxBy"](pages, 'page');
            var isForward = this.paginationStore.isForward(pages, currentPage);
            if (isForward) {
                offset = max.offset;
            }
            else {
                var index = pages.findIndex(function (item) { return item.page === (currentPage); });
                offset = pages[index].offset;
            }
        }
        return offset;
    };
    PaginationService.prototype.calcPages = function (data) {
        if (data.total_history_items && (data && data.history)) {
            this.variables.currentWallet.totalPages = Math.ceil(data.total_history_items / this.variables.count);
            this.variables.currentWallet.totalPages > this.variables.maxPages
                ? this.variables.currentWallet.pages = new Array(5).fill(1).map(function (value, index) { return value + index; })
                : this.variables.currentWallet.pages =
                    new Array(this.variables.currentWallet.totalPages).fill(1).map(function (value, index) { return value + index; });
        }
        else if (this.variables.currentWallet.restore) {
            this.variables.currentWallet.totalPages = Math.ceil(data.history.length / this.variables.count);
            this.variables.currentWallet.totalPages > this.variables.maxPages
                ? this.variables.currentWallet.pages = new Array(5).fill(1).map(function (value, index) { return value + index; })
                : this.variables.currentWallet.pages =
                    new Array(this.variables.currentWallet.totalPages).fill(1).map(function (value, index) { return value + index; });
        }
    };
    PaginationService.prototype.prepareHistory = function (data, status) {
        var _this = this;
        if (status && (data && data.total_history_items)) {
            this.variables.currentWallet.history.splice(0, this.variables.currentWallet.history.length);
            this.ngZone.run(function () {
                _this.paginate(_this.variables.currentWallet.currentPage);
                if (data.history.length !== 0) {
                    _this.variables.currentWallet.restore = false;
                    _this.variables.currentWallet.total_history_item = data.total_history_items;
                    _this.variables.currentWallet.prepareHistory(data.history);
                    if (_this.variables.currentWallet.currentPage === 1 && data.unconfirmed) {
                        _this.variables.currentWallet.prepareHistory(data.unconfirmed);
                    }
                }
            });
        }
    };
    PaginationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _pagination_store__WEBPACK_IMPORTED_MODULE_2__["PaginationStore"]])
    ], PaginationService);
    return PaginationService;
}());



/***/ }),

/***/ "./src/app/_helpers/services/pagination.store.ts":
/*!*******************************************************!*\
  !*** ./src/app/_helpers/services/pagination.store.ts ***!
  \*******************************************************/
/*! exports provided: PaginationStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationStore", function() { return PaginationStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaginationStore = /** @class */ (function () {
    function PaginationStore() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.pages$ = this.subject.asObservable();
    }
    PaginationStore.prototype.isForward = function (pages, currentPage) {
        var max = lodash__WEBPACK_IMPORTED_MODULE_2__["maxBy"](pages, 'page');
        return !max || max.page < currentPage || max.page === currentPage;
    };
    PaginationStore.prototype.setPage = function (pageNumber, offset, walletID) {
        var newPages = [];
        var pages = this.subject.getValue();
        if (pages && pages.length) {
            newPages = pages.slice(0);
        }
        newPages.push({ page: pageNumber, offset: offset, walletID: walletID });
        this.subject.next(newPages);
    };
    Object.defineProperty(PaginationStore.prototype, "value", {
        get: function () {
            return this.subject.value;
        },
        enumerable: true,
        configurable: true
    });
    PaginationStore = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PaginationStore);
    return PaginationStore;
}());



/***/ }),

/***/ "./src/app/_helpers/services/utils.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_helpers/services/utils.service.ts ***!
  \****************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.prototype.getMinWidthByScale = function (scale) {
        switch (scale) {
            case 7.5: return 900;
            case 10: return 1200;
            case 12.5: return 1500;
            case 15: return 1800;
            default: return 1200;
        }
    };
    UtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/app/_helpers/services/variables.service.ts":
/*!********************************************************!*\
  !*** ./src/app/_helpers/services/variables.service.ts ***!
  \********************************************************/
/*! exports provided: VariablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesService", function() { return VariablesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var idlejs_dist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! idlejs/dist */ "./node_modules/idlejs/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VariablesService = /** @class */ (function () {
    function VariablesService(router, ngZone, contextMenuService) {
        var _this = this;
        this.router = router;
        this.ngZone = ngZone;
        this.contextMenuService = contextMenuService;
        this.request_on_in = {};
        this.stop_paginate = {};
        this.sync_started = false;
        this.digits = 12;
        this.appPass = '';
        this.appLogin = false;
        this.moneyEquivalent = 0;
        this.defaultTheme = 'dark';
        this.defaultCurrency = 'ZANO';
        this.exp_med_ts = 0;
        this.net_time_delta_median = 0;
        this.height_app = 0;
        this.height_max = 0;
        this.downloaded = 0;
        this.total = 0;
        this.last_build_available = '';
        this.last_build_displaymode = 0;
        this.daemon_state = 3;
        this.sync = {
            progress_value: 0,
            progress_value_text: '0'
        };
        this.download = {
            progress_value: 0,
            progress_value_text: '0'
        };
        this.get_recent_transfers = false; // avoid of execute function before collback complete
        this.default_fee = '0.010000000000';
        this.default_fee_big = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__["BigNumber"]('10000000000');
        this.settings = {
            appLockTime: 15,
            appLog: 0,
            theme: '',
            scale: 10,
            language: 'en',
            default_path: '/',
            viewedContracts: [],
            notViewedContracts: [],
            wallets: []
        };
        this.count = 40;
        this.maxPages = 5;
        this.testnet = false;
        this.networkType = ''; // testnet of mainnet
        this.wallets = [];
        this.aliases = [];
        this.aliasesChecked = {};
        this.enableAliasSearch = false;
        this.maxWalletNameLength = 25;
        this.maxCommentLength = 255;
        this.dataIsLoaded = false;
        this.contacts = [];
        this.newContact = { name: null, address: null, notes: null };
        this.pattern = '^[a-zA-Z0-9_.\\\]\*\|\~\!\?\@\#\$\%\^\&\+\{\}\(\)\<\>\:\;\"\'\-\=\/\,\[\\\\]*$';
        this.after_sync_request = {};
        this.getExpMedTsEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getHeightAppEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getHeightMaxEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getDownloadedAppEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getTotalEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getRefreshStackingEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getAliasChangedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.idle = new idlejs_dist__WEBPACK_IMPORTED_MODULE_2__["Idle"]()
            .whenNotInteractive()
            .do(function () {
            if (_this.appPass == '') {
                _this.restartCountdown();
            }
            else {
                _this.ngZone.run(function () {
                    _this.idle.stop();
                    _this.appPass = '';
                    _this.appLogin = false;
                    _this.router.navigate(['/login'], { queryParams: { type: 'auth' } });
                });
            }
        });
    }
    VariablesService.prototype.setExpMedTs = function (timestamp) {
        if (timestamp !== this.exp_med_ts) {
            this.exp_med_ts = timestamp;
            this.getExpMedTsEvent.next(timestamp);
        }
    };
    VariablesService.prototype.setHeightApp = function (height) {
        if (height !== this.height_app) {
            this.height_app = height;
            this.getHeightAppEvent.next(height);
        }
    };
    VariablesService.prototype.setHeightMax = function (height) {
        if (height !== this.height_max) {
            this.height_max = height;
            this.getHeightMaxEvent.next(height);
        }
    };
    VariablesService.prototype.setDownloadedBytes = function (bytes) {
        if (bytes !== this.downloaded) {
            this.downloaded = this.bytesToMb(bytes);
            this.getDownloadedAppEvent.next(bytes);
        }
    };
    VariablesService.prototype.setTotalBytes = function (bytes) {
        if (bytes !== this.total) {
            this.total = this.bytesToMb(bytes);
            this.getTotalEvent.next(bytes);
        }
    };
    VariablesService.prototype.setRefreshStacking = function (wallet_id) {
        this.getHeightAppEvent.next(wallet_id);
    };
    VariablesService.prototype.changeAliases = function () {
        this.getAliasChangedEvent.next(true);
    };
    VariablesService.prototype.setCurrentWallet = function (id) {
        var _this = this;
        this.wallets.forEach(function (wallet) {
            if (wallet.wallet_id === id) {
                _this.currentWallet = wallet;
            }
        });
    };
    VariablesService.prototype.getWallet = function (id) {
        for (var i = 0; i < this.wallets.length; i++) {
            if (this.wallets[i].wallet_id === id) {
                return this.wallets[i];
            }
        }
        return null;
    };
    VariablesService.prototype.getNotLoadedWallet = function () {
        for (var i = 0; i < this.wallets.length; i++) {
            if (!this.wallets[i].loaded) {
                return this.wallets[i];
            }
        }
        return null;
    };
    VariablesService.prototype.startCountdown = function () {
        this.idle.within(this.settings.appLockTime).start();
    };
    VariablesService.prototype.stopCountdown = function () {
        this.idle.stop();
    };
    VariablesService.prototype.restartCountdown = function () {
        this.idle.within(this.settings.appLockTime).restart();
    };
    VariablesService.prototype.bytesToMb = function (bytes) {
        return Number((bytes / Math.pow(1024, 2)).toFixed(1));
    };
    VariablesService.prototype.onContextMenu = function ($event) {
        $event.target['contextSelectionStart'] = $event.target['selectionStart'];
        $event.target['contextSelectionEnd'] = $event.target['selectionEnd'];
        if ($event.target && ($event.target['nodeName'].toUpperCase() === 'TEXTAREA' || $event.target['nodeName'].toUpperCase() === 'INPUT') && !$event.target['readOnly']) {
            this.contextMenuService.show.next({
                contextMenu: this.allContextMenu,
                event: $event,
                item: $event.target,
            });
            $event.preventDefault();
            $event.stopPropagation();
        }
    };
    VariablesService.prototype.onContextMenuOnlyCopy = function ($event, copyText) {
        this.contextMenuService.show.next({
            contextMenu: this.onlyCopyContextMenu,
            event: $event,
            item: copyText
        });
        $event.preventDefault();
        $event.stopPropagation();
    };
    VariablesService.prototype.onContextMenuPasteSelect = function ($event) {
        $event.target['contextSelectionStart'] = $event.target['selectionStart'];
        $event.target['contextSelectionEnd'] = $event.target['selectionEnd'];
        console.warn($event.target);
        console.warn($event.target['disabled']);
        if ($event.target && ($event.target['nodeName'].toUpperCase() === 'TEXTAREA' || $event.target['nodeName'].toUpperCase() === 'INPUT') && !$event.target['readOnly']) {
            this.contextMenuService.show.next({
                contextMenu: this.pasteSelectContextMenu,
                event: $event,
                item: $event.target,
            });
            $event.preventDefault();
            $event.stopPropagation();
        }
    };
    VariablesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_4__["ContextMenuService"]])
    ], VariablesService);
    return VariablesService;
}());



/***/ }),

/***/ "./src/app/_shared/constants.ts":
/*!**************************************!*\
  !*** ./src/app/_shared/constants.ts ***!
  \**************************************/
/*! exports provided: MIXIN, RCV_ADDR_QR_SCALE, AUDITABLE_WALLET_HELP_PAGE, CREATE_NEW_WALLET_HELP_PAGE, LOCKED_BALANCE_HELP_PAGE, DOWNLOADS_PAGE_URL, BLOCK_EXPLORER_TX_URL_PREFIX, BLOCK_EXPLORER_TN_TX_URL_PREFIX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIXIN", function() { return MIXIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RCV_ADDR_QR_SCALE", function() { return RCV_ADDR_QR_SCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUDITABLE_WALLET_HELP_PAGE", function() { return AUDITABLE_WALLET_HELP_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_NEW_WALLET_HELP_PAGE", function() { return CREATE_NEW_WALLET_HELP_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCKED_BALANCE_HELP_PAGE", function() { return LOCKED_BALANCE_HELP_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOADS_PAGE_URL", function() { return DOWNLOADS_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_EXPLORER_TX_URL_PREFIX", function() { return BLOCK_EXPLORER_TX_URL_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_EXPLORER_TN_TX_URL_PREFIX", function() { return BLOCK_EXPLORER_TN_TX_URL_PREFIX; });
var MIXIN = 10; // default mixin value
var RCV_ADDR_QR_SCALE = 2; // scale factor for QR code
var AUDITABLE_WALLET_HELP_PAGE = 'docs.zano.org/docs/auditable-wallets';
var CREATE_NEW_WALLET_HELP_PAGE = 'docs.zano.org/docs/getting-started-1#section-create-new-wallet';
var LOCKED_BALANCE_HELP_PAGE = 'docs.zano.org/docs/locked-balance';
var DOWNLOADS_PAGE_URL = 'zano.org/downloads.html';
var BLOCK_EXPLORER_TX_URL_PREFIX = 'explorer.zano.org/transaction/';
var BLOCK_EXPLORER_TN_TX_URL_PREFIX = 'testnet-explorer.zano.org/transaction/';


/***/ }),

/***/ "./src/app/add-contacts/add-contacts.component.html":
/*!**********************************************************!*\
  !*** ./src/app/add-contacts/add-contacts.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/contacts']\">{{ 'CONTACTS.TITLE' | translate }}</span>\r\n      <span>{{ 'CONTACTS.ADD' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-add\" [formGroup]=\"addContactForm\" (ngSubmit)=\"add()\">\r\n\r\n    <div class=\"input-block input-block-name\">\r\n      <label for=\"add-name\">{{ 'CONTACTS.FORM.NAME' | translate }}</label>\r\n      <input type=\"text\" id=\"add-name\" formControlName=\"name\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"addContactForm.controls['name'].invalid && (addContactForm.controls['name'].dirty || addContactForm.controls['name'].touched)\">\r\n        <div *ngIf=\"addContactForm.controls['name'].errors['minlength'] || addContactForm.controls['name'].errors['maxlength']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.NAME_LENGTH' | translate }}\r\n        </div>\r\n        <div *ngIf=\"addContactForm.controls['name'].errors['required']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.NAME_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"addContactForm.controls['name'].errors['dublicated']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.NAME_DUBLICATED' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block input-block-alias\">\r\n      <label for=\"address\">{{ 'CONTACTS.FORM.ADDRESS' | translate }}</label>\r\n  \r\n      <input type=\"text\" id=\"address\" formControlName=\"address\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n  \r\n      <div class=\"error-block\" *ngIf=\"addContactForm.controls['address'].invalid && (addContactForm.controls['address'].dirty || addContactForm.controls['address'].touched)\">\r\n        <div *ngIf=\"addContactForm.controls['address'].errors['required']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.ADDRESS_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"addContactForm.controls['address'].errors['address_not_valid']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.ADDRESS_NOT_VALID' | translate }}\r\n        </div>\r\n        <div *ngIf=\"addContactForm.controls['address'].errors['dublicated']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.ADDRESS_DUBLICATED' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block input-block-notes\">\r\n      <label for=\"notes\">{{ 'CONTACTS.FORM.NOTES' | translate }}</label>\r\n  \r\n      <input type=\"text\" id=\"notes\" formControlName=\"notes\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      \r\n      <div class=\"error-block\" *ngIf=\"addContactForm.controls['notes'].invalid\">\r\n        <div *ngIf=\"addContactForm.controls['notes'].errors['maxLength']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n   \r\n    <button type=\"submit\" class=\"blue-button\" [disabled]=\"!addContactForm.valid\">{{ 'CONTACTS.BUTTON.ADD_EDIT' | translate }}</button>\r\n  \r\n    <app-send-modal *ngIf=\"isModalDialogVisible\" [form]=\"addContactForm\" (confirmed)=\"confirmed($event)\"></app-send-modal>\r\n  \r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-contacts/add-contacts.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/add-contacts/add-contacts.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-add {\n  margin-top: 3rem; }\n  .form-add .input-block-name {\n    width: 50%; }\n  .form-add button {\n    margin-top: 3rem;\n    width: 100%;\n    max-width: 18rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNvbnRhY3RzL0Q6XFxQcm9qZWN0XFxXT1JLX05FV1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXGFkZC1jb250YWN0c1xcYWRkLWNvbnRhY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUE7RUFEbEI7SUFJSSxVQUFVLEVBQUE7RUFKZDtJQVFJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZGQtY29udGFjdHMvYWRkLWNvbnRhY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tYWRkIHtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG5cclxuICAuaW5wdXQtYmxvY2stbmFtZSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMThyZW07XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/add-contacts/add-contacts.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-contacts/add-contacts.component.ts ***!
  \********************************************************/
/*! exports provided: AddContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContactsComponent", function() { return AddContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddContactsComponent = /** @class */ (function () {
    function AddContactsComponent(route, backend, variablesService, modalService, ngZone, location) {
        var _this = this;
        this.route = route;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.location = location;
        this.addContactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                function (g) {
                    if (g.value) {
                        _this.backend.validateAddress(g.value, function (valid_status) {
                            _this.ngZone.run(function () {
                                if (valid_status === false) {
                                    g.setErrors(Object.assign({ address_not_valid: true }, g.errors));
                                }
                                else {
                                    if (g.hasError('address_not_valid')) {
                                        delete g.errors['address_not_valid'];
                                        if (Object.keys(g.errors).length === 0) {
                                            g.setErrors(null);
                                        }
                                    }
                                }
                            });
                        });
                        return g.hasError('address_not_valid')
                            ? { address_not_valid: true }
                            : null;
                    }
                    return null;
                },
                function (g) {
                    var isDublicated = _this.variablesService.contacts.findIndex(function (contact) { return contact.address === g.value; });
                    if (isDublicated !== -1 && !(_this.id === isDublicated)) {
                        return { dublicated: true };
                    }
                    return null;
                }
            ]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                function (g) {
                    if (g.value) {
                        if (g.value.length > _this.variablesService.maxCommentLength) {
                            return { maxLength: true };
                        }
                        else {
                            return null;
                        }
                    }
                    else {
                        return null;
                    }
                }
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25),
                function (g) {
                    if (g.value) {
                        var isDublicated = _this.variablesService.contacts.findIndex(function (contact) { return contact.name === g.value.trim(); });
                        if (isDublicated !== -1 && !(_this.id === isDublicated)) {
                            return { dublicated: true };
                        }
                        return null;
                    }
                }
            ])
        });
    }
    AddContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.id) {
                _this.id = parseInt(params.id, 10);
                _this.addContactForm.reset({
                    name: _this.variablesService.contacts[params.id]['name'],
                    address: _this.variablesService.contacts[params.id]['address'],
                    notes: _this.variablesService.contacts[params.id]['notes']
                });
            }
            else {
                _this.addContactForm.reset({
                    name: _this.variablesService.newContact['name'],
                    address: _this.variablesService.newContact['address'],
                    notes: _this.variablesService.newContact['notes']
                });
            }
        });
    };
    AddContactsComponent.prototype.add = function () {
        var _this = this;
        if (!this.variablesService.appPass) {
            this.modalService.prepareModal('error', 'CONTACTS.FORM_ERRORS.SET_MASTER_PASSWORD');
        }
        else {
            if (this.addContactForm.valid) {
                this.backend.validateAddress(this.addContactForm.get('address').value, function (valid_status) {
                    if (valid_status === false) {
                        _this.ngZone.run(function () {
                            _this.addContactForm
                                .get('address')
                                .setErrors({ address_not_valid: true });
                        });
                    }
                    else {
                        if (_this.id || _this.id === 0) {
                            _this.variablesService.contacts.forEach(function (contact, index) {
                                if (index === _this.id) {
                                    contact.name = _this.addContactForm.get('name').value.trim();
                                    contact.address = _this.addContactForm.get('address').value;
                                    contact.notes =
                                        _this.addContactForm.get('notes').value || '';
                                }
                            });
                            _this.backend.storeSecureAppData();
                            _this.backend.getContactAlias();
                            _this.modalService.prepareModal('success', 'CONTACTS.SUCCESS_SAVE');
                        }
                        else {
                            _this.variablesService.contacts.push({
                                name: _this.addContactForm.get('name').value.trim(),
                                address: _this.addContactForm.get('address').value,
                                notes: _this.addContactForm.get('notes').value || ''
                            });
                            _this.backend.storeSecureAppData();
                            _this.backend.getContactAlias();
                            _this.modalService.prepareModal('success', 'CONTACTS.SUCCESS_SENT');
                            _this.variablesService.newContact = {
                                name: null,
                                address: null,
                                notes: null
                            };
                            _this.addContactForm.reset({
                                name: null,
                                address: null,
                                notes: null
                            });
                        }
                    }
                });
            }
        }
    };
    AddContactsComponent.prototype.back = function () {
        this.location.back();
    };
    AddContactsComponent.prototype.ngOnDestroy = function () {
        if (!(this.id || this.id === 0)) {
            this.variablesService.newContact = {
                name: this.addContactForm.get('name').value,
                address: this.addContactForm.get('address').value,
                notes: this.addContactForm.get('notes').value
            };
        }
        this.queryRouting.unsubscribe();
    };
    AddContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-contacts',
            template: __webpack_require__(/*! ./add-contacts.component.html */ "./src/app/add-contacts/add-contacts.component.html"),
            styles: [__webpack_require__(/*! ./add-contacts.component.scss */ "./src/app/add-contacts/add-contacts.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AddContactsComponent);
    return AddContactsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/wallet/wallet.component.ts");
/* harmony import */ var _send_send_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send/send.component */ "./src/app/send/send.component.ts");
/* harmony import */ var _receive_receive_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receive/receive.component */ "./src/app/receive/receive.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contracts/contracts.component */ "./src/app/contracts/contracts.component.ts");
/* harmony import */ var _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./purchase/purchase.component */ "./src/app/purchase/purchase.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _typing_message_typing_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./typing-message/typing-message.component */ "./src/app/typing-message/typing-message.component.ts");
/* harmony import */ var _staking_staking_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./staking/staking.component */ "./src/app/staking/staking.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-wallet/create-wallet.component */ "./src/app/create-wallet/create-wallet.component.ts");
/* harmony import */ var _open_wallet_open_wallet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./open-wallet/open-wallet.component */ "./src/app/open-wallet/open-wallet.component.ts");
/* harmony import */ var _restore_wallet_restore_wallet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./restore-wallet/restore-wallet.component */ "./src/app/restore-wallet/restore-wallet.component.ts");
/* harmony import */ var _seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./seed-phrase/seed-phrase.component */ "./src/app/seed-phrase/seed-phrase.component.ts");
/* harmony import */ var _wallet_details_wallet_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./wallet-details/wallet-details.component */ "./src/app/wallet-details/wallet-details.component.ts");
/* harmony import */ var _assign_alias_assign_alias_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assign-alias/assign-alias.component */ "./src/app/assign-alias/assign-alias.component.ts");
/* harmony import */ var _edit_alias_edit_alias_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./edit-alias/edit-alias.component */ "./src/app/edit-alias/edit-alias.component.ts");
/* harmony import */ var _transfer_alias_transfer_alias_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./transfer-alias/transfer-alias.component */ "./src/app/transfer-alias/transfer-alias.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-contacts/add-contacts.component */ "./src/app/add-contacts/add-contacts.component.ts");
/* harmony import */ var _contact_send_contact_send_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contact-send/contact-send.component */ "./src/app/contact-send/contact-send.component.ts");
/* harmony import */ var _export_import_export_import_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./export-import/export-import.component */ "./src/app/export-import/export-import.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components
























var routes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    },
    {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'wallet/:id',
        component: _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_4__["WalletComponent"],
        children: [
            {
                path: 'send',
                component: _send_send_component__WEBPACK_IMPORTED_MODULE_5__["SendComponent"]
            },
            {
                path: 'receive',
                component: _receive_receive_component__WEBPACK_IMPORTED_MODULE_6__["ReceiveComponent"]
            },
            {
                path: 'history',
                component: _history_history_component__WEBPACK_IMPORTED_MODULE_7__["HistoryComponent"]
            },
            {
                path: 'contracts',
                component: _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_8__["ContractsComponent"],
            },
            {
                path: 'purchase',
                component: _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_9__["PurchaseComponent"]
            },
            {
                path: 'purchase/:id',
                component: _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_9__["PurchaseComponent"]
            },
            {
                path: 'messages',
                component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_10__["MessagesComponent"],
            },
            {
                path: 'messages/:id',
                component: _typing_message_typing_message_component__WEBPACK_IMPORTED_MODULE_11__["TypingMessageComponent"],
            },
            {
                path: 'staking',
                component: _staking_staking_component__WEBPACK_IMPORTED_MODULE_12__["StakingComponent"]
            },
            {
                path: '',
                redirectTo: 'history',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'create',
        component: _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_14__["CreateWalletComponent"]
    },
    {
        path: 'open',
        component: _open_wallet_open_wallet_component__WEBPACK_IMPORTED_MODULE_15__["OpenWalletComponent"]
    },
    {
        path: 'restore',
        component: _restore_wallet_restore_wallet_component__WEBPACK_IMPORTED_MODULE_16__["RestoreWalletComponent"]
    },
    {
        path: 'seed-phrase',
        component: _seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_17__["SeedPhraseComponent"]
    },
    {
        path: 'details',
        component: _wallet_details_wallet_details_component__WEBPACK_IMPORTED_MODULE_18__["WalletDetailsComponent"]
    },
    {
        path: 'assign-alias',
        component: _assign_alias_assign_alias_component__WEBPACK_IMPORTED_MODULE_19__["AssignAliasComponent"]
    },
    {
        path: 'edit-alias',
        component: _edit_alias_edit_alias_component__WEBPACK_IMPORTED_MODULE_20__["EditAliasComponent"]
    },
    {
        path: 'transfer-alias',
        component: _transfer_alias_transfer_alias_component__WEBPACK_IMPORTED_MODULE_21__["TransferAliasComponent"]
    },
    {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"]
    },
    {
        path: 'contacts',
        component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_22__["ContactsComponent"]
    },
    {
        path: 'add-contacts',
        component: _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_23__["AddContactsComponent"]
    },
    {
        path: 'edit-contacts/:id',
        component: _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_23__["AddContactsComponent"]
    },
    {
        path: 'contact-send/:id',
        component: _contact_send_contact_send_component__WEBPACK_IMPORTED_MODULE_24__["ContactSendComponent"]
    },
    {
        path: 'import',
        component: _export_import_export_import_component__WEBPACK_IMPORTED_MODULE_25__["ExportImportComponent"]
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar *ngIf=\"variablesService.appLogin\"></app-sidebar>\r\n\r\n<div class=\"app-content scrolled-content\">\r\n  <router-outlet *ngIf=\"[0, 1, 2, 6].indexOf(variablesService.daemon_state) !== -1\"></router-outlet>\r\n  <div class=\"preloader\" *ngIf=\"[3, 4, 5].indexOf(variablesService.daemon_state) !== -1\">\r\n    <span *ngIf=\"variablesService.daemon_state === 3\">{{ 'SIDEBAR.SYNCHRONIZATION.LOADING' | translate }}</span>\r\n    <span *ngIf=\"variablesService.daemon_state === 4\">{{ 'SIDEBAR.SYNCHRONIZATION.ERROR' | translate }}</span>\r\n    <span *ngIf=\"variablesService.daemon_state === 5\">{{ 'SIDEBAR.SYNCHRONIZATION.COMPLETE' | translate }}</span>\r\n    <span class=\"loading-bar\"></span>\r\n  </div>\r\n</div>\r\n<context-menu #allContextMenu>\r\n  <ng-template contextMenuItem (execute)=\"contextMenuCopy($event.item)\">{{ 'CONTEXT_MENU.COPY' | translate }}</ng-template>\r\n  <ng-template contextMenuItem (execute)=\"contextMenuPaste($event.item)\">{{ 'CONTEXT_MENU.PASTE' | translate }}</ng-template>\r\n  <ng-template contextMenuItem (execute)=\"contextMenuSelect($event.item)\">{{ 'CONTEXT_MENU.SELECT' | translate }}</ng-template>\r\n</context-menu>\r\n\r\n<context-menu #onlyCopyContextMenu>\r\n  <ng-template contextMenuItem (execute)=\"contextMenuOnlyCopy($event.item)\">{{ 'CONTEXT_MENU.COPY' | translate }}</ng-template>\r\n</context-menu>\r\n\r\n<context-menu #pasteSelectContextMenu>\r\n  <ng-template contextMenuItem (execute)=\"contextMenuPaste($event.item)\">{{ 'CONTEXT_MENU.PASTE' | translate }}</ng-template>\r\n  <ng-template contextMenuItem (execute)=\"contextMenuSelect($event.item)\">{{ 'CONTEXT_MENU.SELECT' | translate }}</ng-template>\r\n</context-menu>\r\n\r\n\r\n<app-open-wallet-modal *ngIf=\"needOpenWallets.length\" [wallets]=\"needOpenWallets\"></app-open-wallet-modal>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n* Implementation of themes\r\n*/\n.app-content {\n  display: flex;\n  overflow-x: overlay;\n  overflow-y: hidden;\n  width: 100%; }\n.app-content .preloader {\n    align-self: center;\n    color: #fff;\n    font-size: 2rem;\n    margin: 0 auto;\n    text-align: center;\n    width: 50%; }\n.app-content .preloader .loading-bar {\n      display: block;\n      -webkit-animation: move 5s linear infinite;\n              animation: move 5s linear infinite;\n      background-image: -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.125, rgba(0, 0, 0, 0.15)), color-stop(0.125, transparent), color-stop(0.25, transparent), color-stop(0.25, rgba(0, 0, 0, 0.1)), color-stop(0.375, rgba(0, 0, 0, 0.1)), color-stop(0.375, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(0, 0, 0, 0.15)), color-stop(0.625, rgba(0, 0, 0, 0.15)), color-stop(0.625, transparent), color-stop(0.75, transparent), color-stop(0.75, rgba(0, 0, 0, 0.1)), color-stop(0.875, rgba(0, 0, 0, 0.1)), color-stop(0.875, transparent), to(transparent)), -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.125, rgba(0, 0, 0, 0.3)), color-stop(0.125, transparent), color-stop(0.25, transparent), color-stop(0.25, rgba(0, 0, 0, 0.25)), color-stop(0.375, rgba(0, 0, 0, 0.25)), color-stop(0.375, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(0, 0, 0, 0.3)), color-stop(0.625, rgba(0, 0, 0, 0.3)), color-stop(0.625, transparent), color-stop(0.75, transparent), color-stop(0.75, rgba(0, 0, 0, 0.25)), color-stop(0.875, rgba(0, 0, 0, 0.25)), color-stop(0.875, transparent), to(transparent));\n      background-size: 10rem 10rem;\n      margin-top: 2rem;\n      width: 100%;\n      height: 1rem; }\n@-webkit-keyframes move {\n  0% {\n    background-position: 100% -10rem; }\n  100% {\n    background-position: 100% 10rem; } }\n@keyframes move {\n  0% {\n    background-position: 100% -10rem; }\n  100% {\n    background-position: 100% 10rem; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2plY3RcXFdPUktfTkVXXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFzc2V0c1xcc2Nzc1xcYmFzZVxcX21peGlucy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0Q6XFxQcm9qZWN0XFxXT1JLX05FV1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RUE7O0NDNUVDO0FDQUQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7QUFKYjtJQU9JLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVSxFQUFBO0FBWmQ7TUFlTSxjQUFjO01BQ2QsMENBQWtDO2NBQWxDLGtDQUFrQztNQUNsQywrbENBc0JHO01BQ0gsNEJBQTRCO01BQzVCLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsWUFBWSxFQUFBO0FBSWhCO0VBQ0U7SUFDRSxnQ0FBZ0MsRUFBQTtFQUVsQztJQUNFLCtCQUErQixFQUFBLEVBQUE7QUFMbkM7RUFDRTtJQUNFLGdDQUFnQyxFQUFBO0VBRWxDO0lBQ0UsK0JBQStCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiB0ZXh0LXRydW5jYXRlIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuQG1peGluIHRleHRXcmFwIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICBsaW5lLWJyZWFrOiBzdHJpY3Q7XHJcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIGh5cGhlbnM6IGF1dG87XHJcbn1cclxuQG1peGluIGNvdmVyQm94IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcbkBtaXhpbiBhYnMgKCR0b3A6IGF1dG8sICRyaWdodDogYXV0bywgJGJvdHRvbTogYXV0bywgJGxlZnQ6IGF1dG8pIHtcclxuICB0b3A6ICR0b3A7XHJcbiAgcmlnaHQ6ICRyaWdodDtcclxuICBib3R0b206ICRib3R0b207XHJcbiAgbGVmdDogJGxlZnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbkBtaXhpbiBjb3ZlckltZyB7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHQtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0LW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbn1cclxuQG1peGluIHZhbGluZ0JveCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogIDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuQG1peGluIHVuU2VsZWN0IHtcclxuXHQtd2Via2l0LXRvdWNoLWNvbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuQG1peGluIG1heDExOTkgeyAvLyBtYWtldCAxMTcxXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkgeyBAY29udGVudDsgfVxyXG59XHJcbkBtaXhpbiBtYXgxMTcwIHsgLy8gbWFrZXRzIDk5MlxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTcwcHgpIHsgQGNvbnRlbnQ7IH1cclxufVxyXG5AbWl4aW4gbWF4OTkxIHsgLy8gbWFrZXRzIDc2MlxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgeyBAY29udGVudDsgfVxyXG59XHJcbkBtaXhpbiBtYXg3NjEgeyAvLyBtYWtldHMgNTc2XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2MXB4KSB7IEBjb250ZW50OyB9XHJcbn1cclxuQG1peGluIG1heDU3NSB7IC8vIG1ha2V0cyA0MDBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHsgQGNvbnRlbnQ7IH1cclxufVxyXG5AbWl4aW4gbW9iaWxlIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMzk5cHgpIHsgQGNvbnRlbnQ7IH1cclxufVxyXG5AbWl4aW4gaWNvQ2VudGVyIHtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59XHJcbkBtaXhpbiBwc2V1ZG8gKCRkaXNwbGF5OiBibG9jaywgJHBvczogYWJzb2x1dGUsICRjb250ZW50OiAnJyl7XHJcbiAgY29udGVudDogJGNvbnRlbnQ7XHJcbiAgZGlzcGxheTogJGRpc3BsYXk7XHJcbiAgcG9zaXRpb246ICRwb3M7XHJcbn1cclxuXHJcbi8qXHJcbiogSW1wbGVtZW50YXRpb24gb2YgdGhlbWVzXHJcbiovXHJcbkBtaXhpbiB0aGVtaWZ5KCR0aGVtZXM6ICR0aGVtZXMpIHtcclxuICBAZWFjaCAkdGhlbWUsICRtYXAgaW4gJHRoZW1lcyB7XHJcbiAgICAudGhlbWUtI3skdGhlbWV9ICYge1xyXG4gICAgICAkdGhlbWUtbWFwOiAoKSAhZ2xvYmFsO1xyXG4gICAgICBAZWFjaCAka2V5LCAkc3VibWFwIGluICRtYXAge1xyXG4gICAgICAgICR2YWx1ZTogbWFwLWdldChtYXAtZ2V0KCR0aGVtZXMsICR0aGVtZSksICcjeyRrZXl9Jyk7XHJcbiAgICAgICAgJHRoZW1lLW1hcDogbWFwLW1lcmdlKCR0aGVtZS1tYXAsICgka2V5OiAkdmFsdWUpKSAhZ2xvYmFsO1xyXG4gICAgICB9XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgICAkdGhlbWUtbWFwOiBudWxsICFnbG9iYWw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gdGhlbWVkKCRrZXkpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJHRoZW1lLW1hcCwgJGtleSk7XHJcbn1cclxuIiwiLypcclxuKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGVtZXNcclxuKi9cbi5hcHAtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IG92ZXJsYXk7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7IH1cbiAgLmFwcC1jb250ZW50IC5wcmVsb2FkZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA1MCU7IH1cbiAgICAuYXBwLWNvbnRlbnQgLnByZWxvYWRlciAubG9hZGluZy1iYXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBhbmltYXRpb246IG1vdmUgNXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMCwgMTAwJSAxMDAlLCBjb2xvci1zdG9wKDAuMTI1LCByZ2JhKDAsIDAsIDAsIDAuMTUpKSwgY29sb3Itc3RvcCgwLjEyNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuMjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjI1LCByZ2JhKDAsIDAsIDAsIDAuMSkpLCBjb2xvci1zdG9wKDAuMzc1LCByZ2JhKDAsIDAsIDAsIDAuMSkpLCBjb2xvci1zdG9wKDAuMzc1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCByZ2JhKDAsIDAsIDAsIDAuMTUpKSwgY29sb3Itc3RvcCgwLjYyNSwgcmdiYSgwLCAwLCAwLCAwLjE1KSksIGNvbG9yLXN0b3AoMC42MjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjc1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC43NSwgcmdiYSgwLCAwLCAwLCAwLjEpKSwgY29sb3Itc3RvcCgwLjg3NSwgcmdiYSgwLCAwLCAwLCAwLjEpKSwgY29sb3Itc3RvcCgwLjg3NSwgdHJhbnNwYXJlbnQpLCB0byh0cmFuc3BhcmVudCkpLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAxMDAlLCAxMDAlIDAsIGNvbG9yLXN0b3AoMC4xMjUsIHJnYmEoMCwgMCwgMCwgMC4zKSksIGNvbG9yLXN0b3AoMC4xMjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC4yNSwgcmdiYSgwLCAwLCAwLCAwLjI1KSksIGNvbG9yLXN0b3AoMC4zNzUsIHJnYmEoMCwgMCwgMCwgMC4yNSkpLCBjb2xvci1zdG9wKDAuMzc1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC41LCByZ2JhKDAsIDAsIDAsIDAuMykpLCBjb2xvci1zdG9wKDAuNjI1LCByZ2JhKDAsIDAsIDAsIDAuMykpLCBjb2xvci1zdG9wKDAuNjI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC43NSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNzUsIHJnYmEoMCwgMCwgMCwgMC4yNSkpLCBjb2xvci1zdG9wKDAuODc1LCByZ2JhKDAsIDAsIDAsIDAuMjUpKSwgY29sb3Itc3RvcCgwLjg3NSwgdHJhbnNwYXJlbnQpLCB0byh0cmFuc3BhcmVudCkpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMHJlbSAxMHJlbTtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMXJlbTsgfVxuXG5Aa2V5ZnJhbWVzIG1vdmUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAtMTByZW07IH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMHJlbTsgfSB9XG4iLCJAaW1wb3J0ICd+c3JjL2Fzc2V0cy9zY3NzL2Jhc2UvbWl4aW5zJztcclxuXHJcbi5hcHAtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvdmVyZmxvdy14OiBvdmVybGF5O1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLnByZWxvYWRlciB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAubG9hZGluZy1iYXIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYW5pbWF0aW9uOiBtb3ZlIDVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgICAgICAtd2Via2l0LWdyYWRpZW50KFxyXG4gICAgICAgICAgICBsaW5lYXIsIDAgMCwgMTAwJSAxMDAlLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC4xMjUsIHJnYmEoMCwgMCwgMCwgLjE1KSksIGNvbG9yLXN0b3AoLjEyNSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC4yNTAsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguMjUwLCByZ2JhKDAsIDAsIDAsIC4xMCkpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC4zNzUsIHJnYmEoMCwgMCwgMCwgLjEwKSksIGNvbG9yLXN0b3AoLjM3NSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC41MDAsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNTAwLCByZ2JhKDAsIDAsIDAsIC4xNSkpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC42MjUsIHJnYmEoMCwgMCwgMCwgLjE1KSksIGNvbG9yLXN0b3AoLjYyNSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC43NTAsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNzUwLCByZ2JhKDAsIDAsIDAsIC4xMCkpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC44NzUsIHJnYmEoMCwgMCwgMCwgLjEwKSksIGNvbG9yLXN0b3AoLjg3NSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICB0byh0cmFuc3BhcmVudClcclxuICAgICAgICApLFxyXG4gICAgICAgIC13ZWJraXQtZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIGxpbmVhciwgMCAxMDAlLCAxMDAlIDAsXHJcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoLjEyNSwgcmdiYSgwLCAwLCAwLCAuMzApKSwgY29sb3Itc3RvcCguMTI1LCB0cmFuc3BhcmVudCksXHJcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoLjI1MCwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC4yNTAsIHJnYmEoMCwgMCwgMCwgLjI1KSksXHJcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoLjM3NSwgcmdiYSgwLCAwLCAwLCAuMjUpKSwgY29sb3Itc3RvcCguMzc1LCB0cmFuc3BhcmVudCksXHJcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoLjUwMCwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC41MDAsIHJnYmEoMCwgMCwgMCwgLjMwKSksXHJcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoLjYyNSwgcmdiYSgwLCAwLCAwLCAuMzApKSwgY29sb3Itc3RvcCguNjI1LCB0cmFuc3BhcmVudCksXHJcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoLjc1MCwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC43NTAsIHJnYmEoMCwgMCwgMCwgLjI1KSksXHJcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoLjg3NSwgcmdiYSgwLCAwLCAwLCAuMjUpKSwgY29sb3Itc3RvcCguODc1LCB0cmFuc3BhcmVudCksXHJcbiAgICAgICAgICAgIHRvKHRyYW5zcGFyZW50KVxyXG4gICAgICAgICk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTByZW0gMTByZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIG1vdmUge1xyXG4gICAgMCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIC0xMHJlbTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_services_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_helpers/services/utils.service */ "./src/app/_helpers/services/utils.service.ts");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store */ "./src/store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppComponent = /** @class */ (function () {
    function AppComponent(http, renderer, translate, backend, router, variablesService, ngZone, intToMoneyPipe, modalService, utilsService, store) {
        var _this = this;
        this.http = http;
        this.renderer = renderer;
        this.translate = translate;
        this.backend = backend;
        this.router = router;
        this.variablesService = variablesService;
        this.ngZone = ngZone;
        this.intToMoneyPipe = intToMoneyPipe;
        this.modalService = modalService;
        this.utilsService = utilsService;
        this.store = store;
        this.onQuitRequest = false;
        this.firstOnlineState = false;
        this.translateUsed = false;
        this.needOpenWallets = [];
        translate.addLangs(['en', 'fr', 'de', 'it', 'pt']);
        translate.setDefaultLang('en');
        // const browserLang = translate.getBrowserLang();
        // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        translate.use('en').subscribe(function () {
            _this.translateUsed = true;
        });
    }
    AppComponent.prototype.setBackendLocalization = function () {
        var _this = this;
        if (this.translateUsed) {
            var stringsArray = [
                this.translate.instant('BACKEND_LOCALIZATION.QUIT'),
                this.translate.instant('BACKEND_LOCALIZATION.IS_RECEIVED'),
                this.translate.instant('BACKEND_LOCALIZATION.IS_CONFIRMED'),
                this.translate.instant('BACKEND_LOCALIZATION.INCOME_TRANSFER_UNCONFIRMED'),
                this.translate.instant('BACKEND_LOCALIZATION.INCOME_TRANSFER_CONFIRMED'),
                this.translate.instant('BACKEND_LOCALIZATION.MINED'),
                this.translate.instant('BACKEND_LOCALIZATION.LOCKED'),
                this.translate.instant('BACKEND_LOCALIZATION.IS_MINIMIZE'),
                this.translate.instant('BACKEND_LOCALIZATION.RESTORE'),
                this.translate.instant('BACKEND_LOCALIZATION.TRAY_MENU_SHOW'),
                this.translate.instant('BACKEND_LOCALIZATION.TRAY_MENU_MINIMIZE')
            ];
            this.backend.setBackendLocalization(stringsArray, this.variablesService.settings.language);
        }
        else {
            console.warn('wait translate use');
            setTimeout(function () {
                _this.setBackendLocalization();
            }, 10000);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.variablesService.allContextMenu = this.allContextMenu;
        this.variablesService.onlyCopyContextMenu = this.onlyCopyContextMenu;
        this.backend.initService().subscribe(function (initMessage) {
            console.log('Init message: ', initMessage);
            _this.backend.webkitLaunchedScript();
            _this.backend.start_backend(false, '127.0.0.1', 11512, function (st2, dd2) {
                console.log(st2, dd2);
            });
            _this.backend.eventSubscribe('quit_requested', function () {
                if (!_this.onQuitRequest) {
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/']);
                    });
                    _this.needOpenWallets = [];
                    _this.variablesService.daemon_state = 5;
                    var saveFunction_1 = function () {
                        _this.backend.storeAppData(function () {
                            var recursionCloseWallets = function () {
                                if (_this.variablesService.wallets.length) {
                                    var lastIndex_1 = _this.variablesService.wallets.length - 1;
                                    _this.backend.closeWallet(_this.variablesService.wallets[lastIndex_1].wallet_id, function () {
                                        _this.variablesService.wallets.splice(lastIndex_1, 1);
                                        recursionCloseWallets();
                                    });
                                }
                                else {
                                    _this.backend.quitRequest();
                                }
                            };
                            recursionCloseWallets();
                        });
                    };
                    if (_this.variablesService.appPass) {
                        _this.backend.storeSecureAppData(function () {
                            saveFunction_1();
                        });
                    }
                    else {
                        saveFunction_1();
                    }
                }
                _this.onQuitRequest = true;
            });
            _this.backend.eventSubscribe('update_wallet_status', function (data) {
                console.log('----------------- update_wallet_status -----------------');
                console.log(data);
                var wallet_state = data.wallet_state;
                var is_mining = data.is_mining;
                var wallet = _this.variablesService.getWallet(data.wallet_id);
                // 1-synch, 2-ready, 3 - error
                if (wallet) {
                    _this.ngZone.run(function () {
                        wallet.loaded = false;
                        wallet.staking = is_mining;
                        if (wallet_state === 2) { // ready
                            wallet.loaded = true;
                        }
                        if (wallet_state === 3) { // error
                            // wallet.error = true;
                        }
                        wallet.balance = data.balance;
                        wallet.unlocked_balance = data.unlocked_balance;
                        wallet.mined_total = data.minied_total;
                        wallet.alias_available = data.is_alias_operations_available;
                    });
                }
            });
            _this.backend.eventSubscribe('wallet_sync_progress', function (data) {
                console.log('----------------- wallet_sync_progress -----------------');
                console.log(data);
                var wallet = _this.variablesService.getWallet(data.wallet_id);
                if (wallet) {
                    _this.ngZone.run(function () {
                        wallet.progress = (data.progress < 0) ? 0 : ((data.progress > 100) ? 100 : data.progress);
                        if (!_this.variablesService.sync_started) {
                            _this.variablesService.sync_started = true;
                        }
                        _this.addToStore(wallet, true); // subscribe on data
                        if (wallet.progress === 0) {
                            wallet.loaded = false;
                        }
                        else if (wallet.progress === 100) {
                            wallet.loaded = true;
                            _this.addToStore(wallet, false);
                        }
                    });
                }
            });
            _this.backend.eventSubscribe('update_daemon_state', function (data) {
                console.log('----------------- update_daemon_state -----------------');
                console.log('DAEMON:' + data.daemon_network_state);
                console.log(data);
                // this.variablesService.exp_med_ts = data['expiration_median_timestamp'] + 600 + 1;
                _this.variablesService.setExpMedTs(data['expiration_median_timestamp'] + 600 + 1);
                _this.variablesService.net_time_delta_median = data.net_time_delta_median;
                _this.variablesService.last_build_available = data.last_build_available;
                _this.variablesService.last_build_displaymode = data.last_build_displaymode;
                _this.variablesService.setHeightApp(data.height);
                _this.variablesService.setHeightMax(data.max_net_seen_height);
                _this.variablesService.setDownloadedBytes(data.downloaded_bytes);
                _this.variablesService.setTotalBytes(data.download_total_data_size);
                _this.backend.getContactAlias();
                _this.ngZone.run(function () {
                    _this.variablesService.daemon_state = data['daemon_network_state'];
                    if (data['daemon_network_state'] === 1) {
                        var max = data['max_net_seen_height'] - data['synchronization_start_height'];
                        var current = data.height - data['synchronization_start_height'];
                        var return_val = Math.floor((current * 100 / max) * 100) / 100;
                        if (max === 0 || return_val < 0) {
                            _this.variablesService.sync.progress_value = 0;
                            _this.variablesService.sync.progress_value_text = '0.00';
                        }
                        else if (return_val >= 100) {
                            _this.variablesService.sync.progress_value = 100;
                            _this.variablesService.sync.progress_value_text = '99.99';
                        }
                        else {
                            _this.variablesService.sync.progress_value = return_val;
                            _this.variablesService.sync.progress_value_text = return_val.toFixed(2);
                        }
                    }
                    if (data['daemon_network_state'] === 6) {
                        var max = data['download_total_data_size'];
                        var current = data['downloaded_bytes'];
                        var return_val = Math.floor((current / max) * 100);
                        if (max === 0 || return_val < 0) {
                            _this.variablesService.download.progress_value = 0;
                            _this.variablesService.download.progress_value_text = '0.00';
                        }
                        else if (return_val >= 100) {
                            _this.variablesService.download.progress_value = 100;
                            _this.variablesService.download.progress_value_text = '99.99';
                        }
                        else {
                            _this.variablesService.download.progress_value = return_val;
                            _this.variablesService.download.progress_value_text = return_val.toFixed(2);
                        }
                    }
                });
                if (!_this.firstOnlineState && data['daemon_network_state'] === 2) {
                    _this.getAliases();
                    _this.backend.getContactAlias();
                    _this.backend.getDefaultFee(function (status_fee, data_fee) {
                        _this.variablesService.default_fee_big = new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](data_fee);
                        _this.variablesService.default_fee = _this.intToMoneyPipe.transform(data_fee);
                    });
                    _this.firstOnlineState = true;
                }
            });
            _this.backend.eventSubscribe('money_transfer', function (data) {
                console.log('----------------- money_transfer -----------------');
                console.log(data);
                if (!data.ti) {
                    return;
                }
                var wallet_id = data.wallet_id;
                var tr_info = data.ti;
                var wallet = _this.variablesService.getWallet(wallet_id);
                if (wallet) {
                    if (wallet.history.length > 40) {
                        wallet.history.splice(40, 1);
                    }
                    _this.ngZone.run(function () {
                        if (!wallet.loaded) {
                            wallet.balance = data.balance;
                            wallet.unlocked_balance = data.unlocked_balance;
                        }
                        else {
                            wallet.balance = data.balance;
                            wallet.unlocked_balance = data.unlocked_balance;
                        }
                        if (tr_info.tx_type === 6) {
                            _this.variablesService.setRefreshStacking(wallet_id);
                        }
                        var tr_exists = wallet.excluded_history.some(function (elem) { return elem.tx_hash === tr_info.tx_hash; });
                        tr_exists = (!tr_exists) ? wallet.history.some(function (elem) { return elem.tx_hash === tr_info.tx_hash; }) : tr_exists;
                        if (wallet.currentPage === 1) {
                            wallet.prepareHistory([tr_info]);
                            if (wallet.restore) {
                                wallet.total_history_item = wallet.history.length;
                                wallet.totalPages = Math.ceil(wallet.total_history_item / _this.variablesService.count);
                                wallet.totalPages > _this.variablesService.maxPages
                                    ? wallet.pages = new Array(5).fill(1).map(function (value, index) { return value + index; })
                                    : wallet.pages = new Array(wallet.totalPages).fill(1).map(function (value, index) { return value + index; });
                            }
                        }
                        if (tr_info.hasOwnProperty('contract')) {
                            var exp_med_ts = _this.variablesService.exp_med_ts;
                            var height_app = _this.variablesService.height_app;
                            var contract_1 = tr_info.contract[0];
                            if (tr_exists) {
                                for (var i = 0; i < wallet.contracts.length; i++) {
                                    if (wallet.contracts[i].contract_id === contract_1.contract_id && wallet.contracts[i].is_a === contract_1.is_a) {
                                        wallet.contracts[i].cancel_expiration_time = contract_1.cancel_expiration_time;
                                        wallet.contracts[i].expiration_time = contract_1.expiration_time;
                                        wallet.contracts[i].height = contract_1.height;
                                        wallet.contracts[i].timestamp = contract_1.timestamp;
                                        break;
                                    }
                                }
                                // $rootScope.getContractsRecount();
                                return;
                            }
                            if (contract_1.state === 1 && contract_1.expiration_time < exp_med_ts) {
                                contract_1.state = 110;
                            }
                            else if (contract_1.state === 5 && contract_1.cancel_expiration_time < exp_med_ts) {
                                contract_1.state = 130;
                            }
                            else if (contract_1.state === 1) {
                                var searchResult2 = _this.variablesService.settings.notViewedContracts.find(function (elem) { return elem.state === 110 && elem.is_a === contract_1.is_a && elem.contract_id === contract_1.contract_id; });
                                if (searchResult2) {
                                    if (searchResult2.time === contract_1.expiration_time) {
                                        contract_1.state = 110;
                                    }
                                    else {
                                        for (var j = 0; j < _this.variablesService.settings.notViewedContracts.length; j++) {
                                            if (_this.variablesService.settings.notViewedContracts[j].contract_id === contract_1.contract_id && _this.variablesService.settings.notViewedContracts[j].is_a === contract_1.is_a) {
                                                _this.variablesService.settings.notViewedContracts.splice(j, 1);
                                                break;
                                            }
                                        }
                                        for (var j = 0; j < _this.variablesService.settings.viewedContracts.length; j++) {
                                            if (_this.variablesService.settings.viewedContracts[j].contract_id === contract_1.contract_id && _this.variablesService.settings.viewedContracts[j].is_a === contract_1.is_a) {
                                                _this.variablesService.settings.viewedContracts.splice(j, 1);
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            else if (contract_1.state === 2 && (contract_1.height === 0 || (height_app - contract_1.height) < 10)) {
                                contract_1.state = 201;
                            }
                            else if (contract_1.state === 2) {
                                var searchResult3 = _this.variablesService.settings.viewedContracts.some(function (elem) { return elem.state === 120 && elem.is_a === contract_1.is_a && elem.contract_id === contract_1.contract_id; });
                                if (searchResult3) {
                                    contract_1.state = 120;
                                }
                            }
                            else if (contract_1.state === 5) {
                                var searchResult4 = _this.variablesService.settings.notViewedContracts.find(function (elem) { return elem.state === 130 && elem.is_a === contract_1.is_a && elem.contract_id === contract_1.contract_id; });
                                if (searchResult4) {
                                    if (searchResult4.time === contract_1.cancel_expiration_time) {
                                        contract_1.state = 130;
                                    }
                                    else {
                                        for (var j = 0; j < _this.variablesService.settings.notViewedContracts.length; j++) {
                                            if (_this.variablesService.settings.notViewedContracts[j].contract_id === contract_1.contract_id && _this.variablesService.settings.notViewedContracts[j].is_a === contract_1.is_a) {
                                                _this.variablesService.settings.notViewedContracts.splice(j, 1);
                                                break;
                                            }
                                        }
                                        for (var j = 0; j < _this.variablesService.settings.viewedContracts.length; j++) {
                                            if (_this.variablesService.settings.viewedContracts[j].contract_id === contract_1.contract_id && _this.variablesService.settings.viewedContracts[j].is_a === contract_1.is_a) {
                                                _this.variablesService.settings.viewedContracts.splice(j, 1);
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            else if (contract_1.state === 6 && (contract_1.height === 0 || (height_app - contract_1.height) < 10)) {
                                contract_1.state = 601;
                            }
                            var searchResult = _this.variablesService.settings.viewedContracts.some(function (elem) { return elem.state === contract_1.state && elem.is_a === contract_1.is_a && elem.contract_id === contract_1.contract_id; });
                            contract_1.is_new = !searchResult;
                            var findContract = false;
                            for (var i = 0; i < wallet.contracts.length; i++) {
                                if (wallet.contracts[i].contract_id === contract_1.contract_id && wallet.contracts[i].is_a === contract_1.is_a) {
                                    for (var prop in contract_1) {
                                        if (contract_1.hasOwnProperty(prop)) {
                                            wallet.contracts[i][prop] = contract_1[prop];
                                        }
                                    }
                                    findContract = true;
                                    break;
                                }
                            }
                            if (findContract === false) {
                                wallet.contracts.push(contract_1);
                            }
                            wallet.recountNewContracts();
                        }
                    });
                }
            });
            _this.backend.eventSubscribe('money_transfer_cancel', function (data) {
                console.log('----------------- money_transfer_cancel -----------------');
                console.log(data);
                if (!data.ti) {
                    return;
                }
                var wallet_id = data.wallet_id;
                var tr_info = data.ti;
                var wallet = _this.variablesService.getWallet(wallet_id);
                if (wallet) {
                    if (tr_info.hasOwnProperty('contract')) {
                        for (var i = 0; i < wallet.contracts.length; i++) {
                            if (wallet.contracts[i].contract_id === tr_info.contract[0].contract_id && wallet.contracts[i].is_a === tr_info.contract[0].is_a) {
                                if (wallet.contracts[i].state === 1 || wallet.contracts[i].state === 110) {
                                    wallet.contracts[i].is_new = true;
                                    wallet.contracts[i].state = 140;
                                    wallet.recountNewContracts();
                                }
                                break;
                            }
                        }
                    }
                    wallet.removeFromHistory(tr_info.tx_hash);
                    var error_tr = '';
                    switch (tr_info.tx_type) {
                        case 0:
                            error_tr = _this.translate.instant('ERRORS.TX_TYPE_NORMAL') + '<br>' +
                                tr_info.tx_hash + '<br>' + wallet.name + '<br>' + wallet.address + '<br>' +
                                _this.translate.instant('ERRORS.TX_TYPE_NORMAL_TO') + ' ' + _this.intToMoneyPipe.transform(tr_info.amount) + ' ' +
                                _this.translate.instant('ERRORS.TX_TYPE_NORMAL_END');
                            break;
                        case 1:
                            // this.translate.instant('ERRORS.TX_TYPE_PUSH_OFFER');
                            break;
                        case 2:
                            // this.translate.instant('ERRORS.TX_TYPE_UPDATE_OFFER');
                            break;
                        case 3:
                            // this.translate.instant('ERRORS.TX_TYPE_CANCEL_OFFER');
                            break;
                        case 4:
                            error_tr = _this.translate.instant('ERRORS.TX_TYPE_NEW_ALIAS') + '<br>' +
                                tr_info.tx_hash + '<br>' + wallet.name + '<br>' + wallet.address + '<br>' +
                                _this.translate.instant('ERRORS.TX_TYPE_NEW_ALIAS_END');
                            break;
                        case 5:
                            error_tr = _this.translate.instant('ERRORS.TX_TYPE_UPDATE_ALIAS') + '<br>' +
                                tr_info.tx_hash + '<br>' + wallet.name + '<br>' + wallet.address + '<br>' +
                                _this.translate.instant('ERRORS.TX_TYPE_NEW_ALIAS_END');
                            break;
                        case 6:
                            error_tr = _this.translate.instant('ERRORS.TX_TYPE_COIN_BASE');
                            break;
                    }
                    if (error_tr) {
                        _this.modalService.prepareModal('error', error_tr);
                    }
                }
            });
            _this.backend.eventSubscribe('on_core_event', function (data) {
                console.log('----------------- on_core_event -----------------');
                console.log(data);
                data = JSON.parse(data);
                if (data.events != null) {
                    var _loop_1 = function (i, length_1) {
                        switch (data.events[i].method) {
                            case 'CORE_EVENT_BLOCK_ADDED':
                                break;
                            case 'CORE_EVENT_ADD_ALIAS':
                                if (_this.variablesService.aliasesChecked[data.events[i].details.address] != null) {
                                    _this.variablesService.aliasesChecked[data.events[i].details.address]['name'] = '@' + data.events[i].details.alias;
                                    _this.variablesService.aliasesChecked[data.events[i].details.address]['address'] = data.events[i].details.address;
                                    _this.variablesService.aliasesChecked[data.events[i].details.address]['comment'] = data.events[i].details.comment;
                                }
                                if (_this.variablesService.enableAliasSearch) {
                                    var newAlias = {
                                        name: '@' + data.events[i].details.alias,
                                        address: data.events[i].details.address,
                                        comment: data.events[i].details.comment
                                    };
                                    _this.variablesService.aliases = _this.variablesService.aliases.concat(newAlias);
                                    _this.variablesService.changeAliases();
                                }
                                break;
                            case 'CORE_EVENT_UPDATE_ALIAS':
                                for (var address in _this.variablesService.aliasesChecked) {
                                    if (_this.variablesService.aliasesChecked.hasOwnProperty(address)) {
                                        if (_this.variablesService.aliasesChecked[address].name === '@' + data.events[i].details.alias) {
                                            if (_this.variablesService.aliasesChecked[address].address !== data.events[i].details.details.address) {
                                                delete _this.variablesService.aliasesChecked[address]['name'];
                                                delete _this.variablesService.aliasesChecked[address]['address'];
                                                delete _this.variablesService.aliasesChecked[address]['comment'];
                                            }
                                            else {
                                                _this.variablesService.aliasesChecked[address].comment = data.events[i].details.details.comment;
                                            }
                                            break;
                                        }
                                    }
                                }
                                if (_this.variablesService.aliasesChecked[data.events[i].details.details.address] != null) {
                                    _this.variablesService.aliasesChecked[data.events[i].details.details.address]['name'] = '@' + data.events[i].details.alias;
                                    _this.variablesService.aliasesChecked[data.events[i].details.details.address]['address'] = data.events[i].details.details.address;
                                    _this.variablesService.aliasesChecked[data.events[i].details.details.address]['comment'] = data.events[i].details.details.comment;
                                }
                                if (_this.variablesService.enableAliasSearch) {
                                    var CurrentAlias = _this.variablesService.aliases.find(function (element) { return element.name === '@' + data.events[i].details.alias; });
                                    if (CurrentAlias) {
                                        CurrentAlias.address = data.events[i].details.details.address;
                                        CurrentAlias.comment = data.events[i].details.details.comment;
                                    }
                                }
                                _this.variablesService.changeAliases();
                                break;
                            default:
                                break;
                        }
                    };
                    for (var i = 0, length_1 = data.events.length; i < length_1; i++) {
                        _loop_1(i, length_1);
                    }
                }
            });
            _this.intervalUpdateContractsState = setInterval(function () {
                _this.variablesService.wallets.forEach(function (wallet) {
                    wallet.contracts.forEach(function (contract) {
                        if (contract.state === 201 && contract.height !== 0 && (_this.variablesService.height_app - contract.height) >= 10) {
                            contract.state = 2;
                            contract.is_new = true;
                            console.warn('need check state in contracts');
                        }
                        else if (contract.state === 601 && contract.height !== 0 && (_this.variablesService.height_app - contract.height) >= 10) {
                            contract.state = 6;
                            contract.is_new = true;
                        }
                    });
                });
            }, 30000);
            _this.expMedTsEvent = _this.variablesService.getExpMedTsEvent.subscribe(function (newTimestamp) {
                _this.variablesService.wallets.forEach(function (wallet) {
                    wallet.contracts.forEach(function (contract) {
                        if (contract.state === 1 && contract.expiration_time <= newTimestamp) {
                            contract.state = 110;
                            contract.is_new = true;
                            wallet.recountNewContracts();
                        }
                        else if (contract.state === 5 && contract.cancel_expiration_time <= newTimestamp) {
                            contract.state = 130;
                            contract.is_new = true;
                            wallet.recountNewContracts();
                        }
                    });
                });
            });
            _this.backend.getAppData(function (status, data) {
                if (data && Object.keys(data).length > 0) {
                    for (var key in data) {
                        if (data.hasOwnProperty(key) && _this.variablesService.settings.hasOwnProperty(key)) {
                            _this.variablesService.settings[key] = data[key];
                        }
                    }
                    if (_this.variablesService.settings.hasOwnProperty('theme') && ['dark', 'white', 'gray'].indexOf(_this.variablesService.settings.theme) !== -1) {
                        _this.renderer.addClass(document.body, 'theme-' + _this.variablesService.settings.theme);
                    }
                    else {
                        _this.renderer.addClass(document.body, 'theme-' + _this.variablesService.defaultTheme);
                    }
                    if (_this.variablesService.settings.hasOwnProperty('scale') && [7.5, 10, 12.5, 15].indexOf(_this.variablesService.settings.scale) !== -1) {
                        var width = _this.utilsService.getMinWidthByScale(_this.variablesService.settings.scale);
                        var app = document.documentElement.querySelector('app-root');
                        _this.renderer.setStyle(app, 'min-width', width + 'px');
                        _this.renderer.setStyle(document.documentElement, 'font-size', _this.variablesService.settings.scale + 'px');
                    }
                }
                else {
                    _this.variablesService.settings.theme = _this.variablesService.defaultTheme;
                    _this.renderer.addClass(document.body, 'theme-' + _this.variablesService.settings.theme);
                }
                _this.translate.use(_this.variablesService.settings.language);
                _this.setBackendLocalization();
                _this.backend.setLogLevel(_this.variablesService.settings.appLog);
                if (_this.router.url !== '/login') {
                    _this.backend.haveSecureAppData(function (statusPass) {
                        if (statusPass) {
                            _this.ngZone.run(function () {
                                _this.router.navigate(['/login'], { queryParams: { type: 'auth' } });
                            });
                        }
                        else {
                            if (Object.keys(data).length !== 0) {
                                _this.needOpenWallets = JSON.parse(JSON.stringify(_this.variablesService.settings.wallets));
                                _this.ngZone.run(function () {
                                    _this.variablesService.appLogin = true;
                                    _this.router.navigate(['/']);
                                });
                            }
                            else {
                                _this.ngZone.run(function () {
                                    _this.router.navigate(['/login'], { queryParams: { type: 'reg' } });
                                });
                            }
                        }
                    });
                }
            });
        }, function (error) {
            console.log(error);
        });
        this.getMoneyEquivalent();
        this.intervalUpdatePriceState = setInterval(function () {
            _this.getMoneyEquivalent();
        }, 30000);
    };
    AppComponent.prototype.getMoneyEquivalent = function () {
        var _this = this;
        this.http.get('https://api.coingecko.com/api/v3/ping').subscribe(function () {
            _this.http.get('https://api.coingecko.com/api/v3/simple/price?ids=zano&vs_currencies=usd').subscribe(function (data) {
                _this.variablesService.moneyEquivalent = data['zano']['usd'];
            }, function (error) {
                console.warn('api.coingecko.com price error: ', error);
            });
        }, function (error) {
            console.warn('api.coingecko.com error: ', error);
            setTimeout(function () {
                _this.getMoneyEquivalent();
            }, 30000);
        });
    };
    AppComponent.prototype.getAliases = function () {
        var _this = this;
        this.backend.getAllAliases(function (status, data, error) {
            console.warn(error);
            if (error === 'CORE_BUSY') {
                window.setTimeout(function () {
                    _this.getAliases();
                }, 10000);
            }
            else if (error === 'OVERFLOW') {
                _this.variablesService.aliases = [];
                _this.variablesService.enableAliasSearch = false;
                _this.variablesService.wallets.forEach(function (wallet) {
                    wallet.alias = _this.backend.getWalletAlias(wallet.address);
                });
            }
            else {
                _this.variablesService.enableAliasSearch = true;
                if (data.aliases && data.aliases.length) {
                    _this.variablesService.aliases = [];
                    data.aliases.forEach(function (alias) {
                        var newAlias = {
                            name: '@' + alias.alias,
                            address: alias.address,
                            comment: alias.comment
                        };
                        _this.variablesService.aliases.push(newAlias);
                    });
                    _this.variablesService.wallets.forEach(function (wallet) {
                        wallet.alias = _this.backend.getWalletAlias(wallet.address);
                    });
                    _this.variablesService.aliases = _this.variablesService.aliases.sort(function (a, b) {
                        if (a.name.length > b.name.length) {
                            return 1;
                        }
                        if (a.name.length < b.name.length) {
                            return -1;
                        }
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    });
                    _this.variablesService.changeAliases();
                }
            }
        });
    };
    AppComponent.prototype.contextMenuCopy = function (target) {
        if (target && (target['nodeName'].toUpperCase() === 'TEXTAREA' || target['nodeName'].toUpperCase() === 'INPUT')) {
            var start = (target['contextSelectionStart']) ? 'contextSelectionStart' : 'selectionStart';
            var end = (target['contextSelectionEnd']) ? 'contextSelectionEnd' : 'selectionEnd';
            var canUseSelection = ((target[start]) || (target[start] === '0'));
            var SelectedText = (canUseSelection) ? target['value'].substring(target[start], target[end]) : target['value'];
            this.backend.setClipboard(String(SelectedText));
        }
    };
    AppComponent.prototype.contextMenuOnlyCopy = function (text) {
        if (text) {
            this.backend.setClipboard(String(text));
        }
    };
    AppComponent.prototype.contextMenuPaste = function (target) {
        if (target && (target['nodeName'].toUpperCase() === 'TEXTAREA' || target['nodeName'].toUpperCase() === 'INPUT')) {
            this.backend.getClipboard(function (status, clipboard) {
                clipboard = String(clipboard);
                if (typeof clipboard !== 'string' || clipboard.length) {
                    var start = (target['contextSelectionStart']) ? 'contextSelectionStart' : 'selectionStart';
                    var end = (target['contextSelectionEnd']) ? 'contextSelectionEnd' : 'selectionEnd';
                    var _pre = target['value'].substring(0, target[start]);
                    var _aft = target['value'].substring(target[end], target['value'].length);
                    var text = _pre + clipboard + _aft;
                    var cursorPosition = (_pre + clipboard).length;
                    if (target['maxLength'] && parseInt(target['maxLength'], 10) > 0) {
                        text = text.substr(0, parseInt(target['maxLength'], 10));
                    }
                    target['value'] = text;
                    target.setSelectionRange(cursorPosition, cursorPosition);
                    target.dispatchEvent(new Event('input'));
                    target['focus']();
                }
            });
        }
    };
    AppComponent.prototype.contextMenuSelect = function (target) {
        if (target && (target['nodeName'].toUpperCase() === 'TEXTAREA' || target['nodeName'].toUpperCase() === 'INPUT')) {
            target['focus']();
            setTimeout(function () {
                target['select']();
            });
        }
    };
    AppComponent.prototype.addToStore = function (wallet, boolean) {
        var value = this.store.value.sync;
        if (value && value.length) {
            var sync = value.filter(function (item) { return item.wallet_id === wallet.wallet_id; });
            if (sync && sync.length) {
                var result = value.map(function (item) {
                    if (item.wallet_id === wallet.wallet_id) {
                        return { sync: boolean, wallet_id: wallet.wallet_id };
                    }
                    else {
                        return item;
                    }
                });
                this.store.set('sync', result);
            }
            else {
                value.push({ sync: boolean, wallet_id: wallet.wallet_id });
                this.store.set('sync', value);
            }
        }
        else {
            this.store.set('sync', [{ sync: boolean, wallet_id: wallet.wallet_id }]);
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.intervalUpdateContractsState) {
            clearInterval(this.intervalUpdateContractsState);
        }
        if (this.intervalUpdatePriceState) {
            clearInterval(this.intervalUpdatePriceState);
        }
        this.expMedTsEvent.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('allContextMenu'),
        __metadata("design:type", ngx_contextmenu__WEBPACK_IMPORTED_MODULE_6__["ContextMenuComponent"])
    ], AppComponent.prototype, "allContextMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('onlyCopyContextMenu'),
        __metadata("design:type", ngx_contextmenu__WEBPACK_IMPORTED_MODULE_6__["ContextMenuComponent"])
    ], AppComponent.prototype, "onlyCopyContextMenu", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_helpers_services_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_5__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_7__["IntToMoneyPipe"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"],
            _helpers_services_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"],
            store__WEBPACK_IMPORTED_MODULE_11__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, highchartsFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highchartsFactory", function() { return highchartsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-wallet/create-wallet.component */ "./src/app/create-wallet/create-wallet.component.ts");
/* harmony import */ var _open_wallet_open_wallet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./open-wallet/open-wallet.component */ "./src/app/open-wallet/open-wallet.component.ts");
/* harmony import */ var _open_wallet_modal_open_wallet_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./open-wallet-modal/open-wallet-modal.component */ "./src/app/open-wallet-modal/open-wallet-modal.component.ts");
/* harmony import */ var _restore_wallet_restore_wallet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./restore-wallet/restore-wallet.component */ "./src/app/restore-wallet/restore-wallet.component.ts");
/* harmony import */ var _seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./seed-phrase/seed-phrase.component */ "./src/app/seed-phrase/seed-phrase.component.ts");
/* harmony import */ var _wallet_details_wallet_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wallet-details/wallet-details.component */ "./src/app/wallet-details/wallet-details.component.ts");
/* harmony import */ var _assign_alias_assign_alias_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assign-alias/assign-alias.component */ "./src/app/assign-alias/assign-alias.component.ts");
/* harmony import */ var _edit_alias_edit_alias_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-alias/edit-alias.component */ "./src/app/edit-alias/edit-alias.component.ts");
/* harmony import */ var _transfer_alias_transfer_alias_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transfer-alias/transfer-alias.component */ "./src/app/transfer-alias/transfer-alias.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/wallet/wallet.component.ts");
/* harmony import */ var _send_send_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./send/send.component */ "./src/app/send/send.component.ts");
/* harmony import */ var _receive_receive_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./receive/receive.component */ "./src/app/receive/receive.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contracts/contracts.component */ "./src/app/contracts/contracts.component.ts");
/* harmony import */ var _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./purchase/purchase.component */ "./src/app/purchase/purchase.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _typing_message_typing_message_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./typing-message/typing-message.component */ "./src/app/typing-message/typing-message.component.ts");
/* harmony import */ var _staking_staking_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./staking/staking.component */ "./src/app/staking/staking.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_services_pagination_store__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./_helpers/services/pagination.store */ "./src/app/_helpers/services/pagination.store.ts");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! store */ "./src/store.ts");
/* harmony import */ var _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./_helpers/pipes/money-to-int.pipe */ "./src/app/_helpers/pipes/money-to-int.pipe.ts");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var _helpers_pipes_history_type_messages_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./_helpers/pipes/history-type-messages.pipe */ "./src/app/_helpers/pipes/history-type-messages.pipe.ts");
/* harmony import */ var _helpers_pipes_contract_status_messages_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./_helpers/pipes/contract-status-messages.pipe */ "./src/app/_helpers/pipes/contract-status-messages.pipe.ts");
/* harmony import */ var _helpers_pipes_contract_time_left_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./_helpers/pipes/contract-time-left.pipe */ "./src/app/_helpers/pipes/contract-time-left.pipe.ts");
/* harmony import */ var _helpers_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./_helpers/pipes/safe-html.pipe */ "./src/app/_helpers/pipes/safe-html.pipe.ts");
/* harmony import */ var _helpers_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./_helpers/directives/tooltip.directive */ "./src/app/_helpers/directives/tooltip.directive.ts");
/* harmony import */ var _helpers_directives_input_validate_input_validate_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./_helpers/directives/input-validate/input-validate.directive */ "./src/app/_helpers/directives/input-validate/input-validate.directive.ts");
/* harmony import */ var _helpers_directives_staking_switch_staking_switch_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./_helpers/directives/staking-switch/staking-switch.component */ "./src/app/_helpers/directives/staking-switch/staking-switch.component.ts");
/* harmony import */ var _helpers_directives_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./_helpers/directives/modal-container/modal-container.component */ "./src/app/_helpers/directives/modal-container/modal-container.component.ts");
/* harmony import */ var _helpers_directives_transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./_helpers/directives/transaction-details/transaction-details.component */ "./src/app/_helpers/directives/transaction-details/transaction-details.component.ts");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! highcharts/modules/exporting.src */ "./node_modules/highcharts/modules/exporting.src.js");
/* harmony import */ var highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _helpers_directives_progress_container_progress_container_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./_helpers/directives/progress-container/progress-container.component */ "./src/app/_helpers/directives/progress-container/progress-container.component.ts");
/* harmony import */ var _helpers_directives_input_disable_selection_input_disable_selection_directive__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./_helpers/directives/input-disable-selection/input-disable-selection.directive */ "./src/app/_helpers/directives/input-disable-selection/input-disable-selection.directive.ts");
/* harmony import */ var _send_modal_send_modal_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./send-modal/send-modal.component */ "./src/app/send-modal/send-modal.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./add-contacts/add-contacts.component */ "./src/app/add-contacts/add-contacts.component.ts");
/* harmony import */ var _contact_send_contact_send_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./contact-send/contact-send.component */ "./src/app/contact-send/contact-send.component.ts");
/* harmony import */ var _export_import_export_import_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./export-import/export-import.component */ "./src/app/export-import/export-import.component.ts");
/* harmony import */ var _helpers_directives_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./_helpers/directives/confirm-modal/confirm-modal.component */ "./src/app/_helpers/directives/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































// SERVICES



// SERVICES
// Feature module

// Feature module























function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_28__["TranslateHttpLoader"](httpClient, './assets/i18n/', '.json');
}

// import * as more from 'highcharts/highcharts-more.src';
// import * as exporting from 'highcharts/modules/exporting.src';
// import * as highstock from 'highcharts/modules/stock.src';
function highchartsFactory() {
    // Default options.
    highcharts__WEBPACK_IMPORTED_MODULE_48__["setOptions"]({
        time: {
            useUTC: false
        }
    });
    return [highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_49___default.a];
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_8__["CreateWalletComponent"],
                _open_wallet_open_wallet_component__WEBPACK_IMPORTED_MODULE_9__["OpenWalletComponent"],
                _open_wallet_modal_open_wallet_modal_component__WEBPACK_IMPORTED_MODULE_10__["OpenWalletModalComponent"],
                _restore_wallet_restore_wallet_component__WEBPACK_IMPORTED_MODULE_11__["RestoreWalletComponent"],
                _seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_12__["SeedPhraseComponent"],
                _wallet_details_wallet_details_component__WEBPACK_IMPORTED_MODULE_13__["WalletDetailsComponent"],
                _assign_alias_assign_alias_component__WEBPACK_IMPORTED_MODULE_14__["AssignAliasComponent"],
                _edit_alias_edit_alias_component__WEBPACK_IMPORTED_MODULE_15__["EditAliasComponent"],
                _transfer_alias_transfer_alias_component__WEBPACK_IMPORTED_MODULE_16__["TransferAliasComponent"],
                _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_17__["WalletComponent"],
                _send_send_component__WEBPACK_IMPORTED_MODULE_18__["SendComponent"],
                _receive_receive_component__WEBPACK_IMPORTED_MODULE_19__["ReceiveComponent"],
                _history_history_component__WEBPACK_IMPORTED_MODULE_20__["HistoryComponent"],
                _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_21__["ContractsComponent"],
                _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_22__["PurchaseComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_23__["MessagesComponent"],
                _staking_staking_component__WEBPACK_IMPORTED_MODULE_25__["StakingComponent"],
                _typing_message_typing_message_component__WEBPACK_IMPORTED_MODULE_24__["TypingMessageComponent"],
                _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_35__["MoneyToIntPipe"],
                _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_36__["IntToMoneyPipe"],
                _helpers_directives_staking_switch_staking_switch_component__WEBPACK_IMPORTED_MODULE_43__["StakingSwitchComponent"],
                _helpers_pipes_history_type_messages_pipe__WEBPACK_IMPORTED_MODULE_37__["HistoryTypeMessagesPipe"],
                _helpers_pipes_contract_status_messages_pipe__WEBPACK_IMPORTED_MODULE_38__["ContractStatusMessagesPipe"],
                _helpers_pipes_contract_time_left_pipe__WEBPACK_IMPORTED_MODULE_39__["ContractTimeLeftPipe"],
                _helpers_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_41__["TooltipDirective"],
                _helpers_directives_input_validate_input_validate_directive__WEBPACK_IMPORTED_MODULE_42__["InputValidateDirective"],
                _helpers_directives_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_44__["ModalContainerComponent"],
                _helpers_directives_transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_45__["TransactionDetailsComponent"],
                _helpers_directives_progress_container_progress_container_component__WEBPACK_IMPORTED_MODULE_50__["ProgressContainerComponent"],
                _helpers_directives_input_disable_selection_input_disable_selection_directive__WEBPACK_IMPORTED_MODULE_51__["InputDisableSelectionDirective"],
                _send_modal_send_modal_component__WEBPACK_IMPORTED_MODULE_52__["SendModalComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_53__["ContactsComponent"],
                _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_54__["AddContactsComponent"],
                _contact_send_contact_send_component__WEBPACK_IMPORTED_MODULE_55__["ContactSendComponent"],
                _export_import_export_import_component__WEBPACK_IMPORTED_MODULE_56__["ExportImportComponent"],
                _helpers_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_40__["SafeHTMLPipe"],
                _helpers_directives_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_57__["ConfirmModalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClient"]]
                    }
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_30__["NgSelectModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_47__["ChartModule"],
                ngx_papaparse__WEBPACK_IMPORTED_MODULE_58__["PapaParseModule"],
                ngx_contextmenu__WEBPACK_IMPORTED_MODULE_46__["ContextMenuModule"].forRoot()
            ],
            providers: [
                store__WEBPACK_IMPORTED_MODULE_34__["Store"],
                _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_31__["BackendService"],
                _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_32__["ModalService"],
                _helpers_services_pagination_store__WEBPACK_IMPORTED_MODULE_33__["PaginationStore"],
                _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_35__["MoneyToIntPipe"],
                _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_36__["IntToMoneyPipe"],
                { provide: angular_highcharts__WEBPACK_IMPORTED_MODULE_47__["HIGHCHARTS_MODULES"], useFactory: highchartsFactory }
                // {provide: HIGHCHARTS_MODULES, useFactory: () => [ highstock, more, exporting ] }
            ],
            entryComponents: [
                _helpers_directives_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_44__["ModalContainerComponent"],
                _send_modal_send_modal_component__WEBPACK_IMPORTED_MODULE_52__["SendModalComponent"],
                _helpers_directives_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_57__["ConfirmModalComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assign-alias/assign-alias.component.html":
/*!**********************************************************!*\
  !*** ./src/app/assign-alias/assign-alias.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/wallet/' + wallet.wallet_id + '/history']\">{{ wallet.name }}</span>\r\n      <span>{{ 'BREADCRUMBS.ASSIGN_ALIAS' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-assign\" [formGroup]=\"assignForm\">\r\n\r\n    <div class=\"input-block alias-name\">\r\n      <label for=\"alias-name\" tooltip=\"{{ 'ASSIGN_ALIAS.NAME.TOOLTIP' | translate }}\" placement=\"bottom-left\" tooltipClass=\"table-tooltip assign-alias-tooltip\" [delay]=\"50\">\r\n        {{ 'ASSIGN_ALIAS.NAME.LABEL' | translate }}\r\n      </label>\r\n      <div class=\"has-no-edit-symbol\">\r\n        <input type=\"text\" id=\"alias-name\" formControlName=\"name\" placeholder=\"{{ 'ASSIGN_ALIAS.NAME.PLACEHOLDER' | translate }}\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"assignForm.controls['name'].invalid && (assignForm.controls['name'].dirty || assignForm.controls['name'].touched)\">\r\n        <div *ngIf=\"assignForm.controls['name'].errors['required']\">\r\n          {{ 'ASSIGN_ALIAS.FORM_ERRORS.NAME_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"assignForm.controls['name'].errors['pattern'] && assignForm.get('name').value.length > 6 && assignForm.get('name').value.length <= 25\">\r\n          {{ 'ASSIGN_ALIAS.FORM_ERRORS.NAME_WRONG' | translate }}\r\n        </div>\r\n        <div *ngIf=\"assignForm.get('name').value.length <= 6 || assignForm.get('name').value.length > 25\">\r\n          {{ 'ASSIGN_ALIAS.FORM_ERRORS.NAME_LENGTH' | translate }}\r\n        </div>\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"alias.exists\">\r\n        <div>\r\n          {{ 'ASSIGN_ALIAS.FORM_ERRORS.NAME_EXISTS' | translate }}\r\n        </div>\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"notEnoughMoney\">\r\n        <div>\r\n          {{ 'ASSIGN_ALIAS.FORM_ERRORS.NO_MONEY' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block textarea\">\r\n      <label for=\"alias-comment\" tooltip=\"{{ 'ASSIGN_ALIAS.COMMENT.TOOLTIP' | translate }}\" placement=\"bottom-left\" tooltipClass=\"table-tooltip assign-alias-tooltip\" [delay]=\"50\">\r\n        {{ 'ASSIGN_ALIAS.COMMENT.LABEL' | translate }}\r\n      </label>\r\n      <textarea id=\"alias-comment\"\r\n                class=\"scrolled-content\"\r\n                formControlName=\"comment\"\r\n                placeholder=\"{{ 'ASSIGN_ALIAS.COMMENT.PLACEHOLDER' | translate }}\"\r\n                [maxLength]=\"variablesService.maxCommentLength\"\r\n                (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      </textarea>\r\n      <div class=\"error-block\" *ngIf=\"assignForm.get('comment').value.length >= variablesService.maxCommentLength\">\r\n        {{ 'ASSIGN_ALIAS.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"alias-cost\">{{ \"ASSIGN_ALIAS.COST\" | translate : {value: alias.price | intToMoney, currency: variablesService.defaultCurrency} }}</div>\r\n\r\n    <div class=\"wrap-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"assignAlias()\" [disabled]=\"!assignForm.valid || !canRegister || notEnoughMoney\">{{ 'ASSIGN_ALIAS.BUTTON_ASSIGN' | translate }}</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/assign-alias/assign-alias.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/assign-alias/assign-alias.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-assign {\n  margin: 2.4rem 0; }\n  .form-assign .alias-name {\n    width: 50%; }\n  .form-assign .alias-cost {\n    font-size: 1.3rem;\n    margin-top: 2rem; }\n  .form-assign .wrap-buttons {\n    display: flex;\n    justify-content: space-between;\n    margin: 2.5rem -0.7rem; }\n  .form-assign .wrap-buttons button {\n      margin: 0 0.7rem;\n      width: 15rem; }\n  .assign-alias-tooltip {\n  font-size: 1.3rem;\n  line-height: 2rem;\n  padding: 1rem 1.5rem;\n  max-width: 46rem; }\n  .has-no-edit-symbol {\n  position: relative;\n  width: 100%; }\n  .has-no-edit-symbol input {\n    padding-left: 2.35rem; }\n  .has-no-edit-symbol:after {\n    content: '@';\n    position: absolute;\n    display: inline-block;\n    top: 50%;\n    left: 1rem;\n    transform: translateY(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWduLWFsaWFzL0Q6XFxQcm9qZWN0XFxXT1JLX05FV1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXGFzc2lnbi1hbGlhc1xcYXNzaWduLWFsaWFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUE7RUFEbEI7SUFJSSxVQUFVLEVBQUE7RUFKZDtJQVFJLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtFQVRwQjtJQWFJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsc0JBQXNCLEVBQUE7RUFmMUI7TUFrQk0sZ0JBQWdCO01BQ2hCLFlBQVksRUFBQTtFQUtsQjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQixFQUFBO0VBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTtFQUZiO0lBSUkscUJBQXFCLEVBQUE7RUFKekI7SUFPSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixRQUFRO0lBQ1IsVUFBVTtJQUNWLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXNzaWduLWFsaWFzL2Fzc2lnbi1hbGlhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWFzc2lnbiB7XHJcbiAgbWFyZ2luOiAyLjRyZW0gMDtcclxuXHJcbiAgLmFsaWFzLW5hbWUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5hbGlhcy1jb3N0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB9XHJcblxyXG4gIC53cmFwLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMi41cmVtIC0wLjdyZW07XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAwIDAuN3JlbTtcclxuICAgICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFzc2lnbi1hbGlhcy10b29sdGlwIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICBtYXgtd2lkdGg6IDQ2cmVtO1xyXG59XHJcblxyXG4uaGFzLW5vLWVkaXQtc3ltYm9sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaW5wdXQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyLjM1cmVtO1xyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdAJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMXJlbTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/assign-alias/assign-alias.component.ts":
/*!********************************************************!*\
  !*** ./src/app/assign-alias/assign-alias.component.ts ***!
  \********************************************************/
/*! exports provided: AssignAliasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignAliasComponent", function() { return AssignAliasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/pipes/money-to-int.pipe */ "./src/app/_helpers/pipes/money-to-int.pipe.ts");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AssignAliasComponent = /** @class */ (function () {
    function AssignAliasComponent(ngZone, location, router, backend, variablesService, modalService, moneyToInt, intToMoney) {
        var _this = this;
        this.ngZone = ngZone;
        this.location = location;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.moneyToInt = moneyToInt;
        this.intToMoney = intToMoney;
        this.assignForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^@?[a-z0-9\.\-]{6,25}$/)]),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [function (g) {
                    if (g.value > _this.variablesService.maxCommentLength) {
                        return { 'maxLength': true };
                    }
                    else {
                        return null;
                    }
                }])
        });
        this.alias = {
            name: '',
            fee: this.variablesService.default_fee,
            price: new bignumber_js__WEBPACK_IMPORTED_MODULE_9___default.a(0),
            reward: '0',
            rewardOriginal: '0',
            comment: '',
            exists: false
        };
        this.canRegister = false;
        this.notEnoughMoney = false;
    }
    AssignAliasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wallet = this.variablesService.currentWallet;
        this.assignFormSubscription = this.assignForm.get('name').valueChanges.subscribe(function (value) {
            _this.canRegister = false;
            _this.alias.exists = false;
            var newName = value.toLowerCase().replace('@', '');
            if (!(_this.assignForm.controls['name'].errors && _this.assignForm.controls['name'].errors.hasOwnProperty('pattern')) && newName.length >= 6 && newName.length <= 25) {
                _this.backend.getAliasByName(newName, function (status) {
                    _this.ngZone.run(function () {
                        _this.alias.exists = status;
                    });
                    if (!status) {
                        _this.alias.price = new bignumber_js__WEBPACK_IMPORTED_MODULE_9___default.a(0);
                        _this.backend.getAliasCoast(newName, function (statusPrice, dataPrice) {
                            _this.ngZone.run(function () {
                                if (statusPrice) {
                                    _this.alias.price = bignumber_js__WEBPACK_IMPORTED_MODULE_9___default.a.sum(dataPrice['coast'], _this.variablesService.default_fee_big);
                                }
                                _this.notEnoughMoney = _this.alias.price.isGreaterThan(_this.wallet.unlocked_balance);
                                _this.alias.reward = _this.intToMoney.transform(_this.alias.price, false);
                                _this.alias.rewardOriginal = _this.intToMoney.transform(dataPrice['coast'], false);
                                _this.canRegister = !_this.notEnoughMoney;
                            });
                        });
                    }
                    else {
                        _this.notEnoughMoney = false;
                        _this.alias.reward = '0';
                        _this.alias.rewardOriginal = '0';
                    }
                });
            }
            else {
                _this.notEnoughMoney = false;
                _this.alias.reward = '0';
                _this.alias.rewardOriginal = '0';
            }
            _this.alias.name = newName;
        });
    };
    AssignAliasComponent.prototype.assignAlias = function () {
        var _this = this;
        var alias = this.backend.getWalletAlias(this.wallet.address);
        if (alias.hasOwnProperty('name')) {
            this.modalService.prepareModal('info', 'ASSIGN_ALIAS.ONE_ALIAS');
        }
        else {
            this.alias.comment = this.assignForm.get('comment').value;
            this.backend.registerAlias(this.wallet.wallet_id, this.alias.name, this.wallet.address, this.alias.fee, this.alias.comment, this.alias.rewardOriginal, function (status, data) {
                if (status) {
                    _this.wallet.wakeAlias = true;
                    _this.modalService.prepareModal('info', 'ASSIGN_ALIAS.REQUEST_ADD_REG');
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/wallet/' + _this.wallet.wallet_id]);
                    });
                }
            });
        }
    };
    AssignAliasComponent.prototype.back = function () {
        this.location.back();
    };
    AssignAliasComponent.prototype.ngOnDestroy = function () {
        this.assignFormSubscription.unsubscribe();
    };
    AssignAliasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-alias',
            template: __webpack_require__(/*! ./assign-alias.component.html */ "./src/app/assign-alias/assign-alias.component.html"),
            styles: [__webpack_require__(/*! ./assign-alias.component.scss */ "./src/app/assign-alias/assign-alias.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_5__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"],
            _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_7__["MoneyToIntPipe"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_8__["IntToMoneyPipe"]])
    ], AssignAliasComponent);
    return AssignAliasComponent;
}());



/***/ }),

/***/ "./src/app/contact-send/contact-send.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-send/contact-send.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/contacts']\">{{\r\n        'CONTACTS.TITLE' | translate\r\n      }}</span>\r\n      <span>{{ 'CONTACTS.SEND' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div>\r\n    <div class=\"wallets-selection\">\r\n      <div class=\"input-block\">\r\n        <label>\r\n          {{ 'CONTACTS.SEND_FROM' | translate }}\r\n        </label>\r\n        <ng-select\r\n          class=\"custom-select\"\r\n          [items]=\"this.variablesService.wallets\"\r\n          [(ngModel)]=\"this.variablesService.selectWallet\"\r\n          bindValue=\"wallet_id\"\r\n          bindLabel=\"name\"\r\n          [clearable]=\"false\"\r\n          [searchable]=\"false\"\r\n        >\r\n        </ng-select>\r\n      </div>\r\n      <button [routerLink]=\"['/main']\">\r\n        {{ 'CONTACTS.OPEN_ADD_WALLET' | translate }}\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"address\">{{ 'CONTACTS.SEND_TO' | translate }}</label>\r\n      <input type=\"text\" id=\"address\" [ngModel]=\"address\" [readonly]=\"true\"/>\r\n    </div>\r\n  </div>\r\n  <button class=\"blue-button\" [routerLink]=\"['/wallet/' + this.variablesService.selectWallet + '/send']\" [queryParams]=\"{send: true}\" (click)=\"goToWallet(this.variablesService.selectWallet)\"\r\n    [disabled]=\"!(this.variablesService.selectWallet === 0 || this.variablesService.selectWallet)\">{{ 'CONTACTS.BUTTON.GO_TO_WALLET' | translate }}</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact-send/contact-send.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/contact-send/contact-send.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wallets-selection {\n  display: flex;\n  align-items: center;\n  margin-top: 2rem; }\n  .wallets-selection .input-block {\n    width: 18rem; }\n  .wallets-selection button {\n    padding: 2rem;\n    background: transparent;\n    border: none;\n    outline: none; }\n  .input-block {\n  width: 44rem; }\n  .input-block input {\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .blue-button {\n  margin-top: 2.5rem;\n  width: 100%;\n  max-width: 18rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1zZW5kL0Q6XFxQcm9qZWN0XFxXT1JLX05FV1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXGNvbnRhY3Qtc2VuZFxcY29udGFjdC1zZW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTtFQUhsQjtJQU1JLFlBQVksRUFBQTtFQU5oQjtJQVVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQUlqQjtFQUNFLFlBQVksRUFBQTtFQURkO0lBSUksZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBO0VBSTNCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3Qtc2VuZC9jb250YWN0LXNlbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FsbGV0cy1zZWxlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIFxyXG4gIC5pbnB1dC1ibG9jayB7XHJcbiAgICB3aWR0aDogMThyZW07XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1ibG9jayB7XHJcbiAgd2lkdGg6IDQ0cmVtO1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfVxyXG59XHJcblxyXG4uYmx1ZS1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDE4cmVtO1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/contact-send/contact-send.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-send/contact-send.component.ts ***!
  \********************************************************/
/*! exports provided: ContactSendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSendComponent", function() { return ContactSendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactSendComponent = /** @class */ (function () {
    function ContactSendComponent(location, variablesService, route) {
        this.location = location;
        this.variablesService = variablesService;
        this.route = route;
    }
    ContactSendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.address) {
                _this.address = params.address;
            }
        });
    };
    ContactSendComponent.prototype.goToWallet = function (id) {
        this.variablesService.setCurrentWallet(id);
        this.variablesService.currentWallet.send_data['address'] = this.address;
    };
    ContactSendComponent.prototype.back = function () {
        this.location.back();
    };
    ContactSendComponent.prototype.ngOnDestroy = function () {
        this.queryRouting.unsubscribe();
    };
    ContactSendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-send',
            template: __webpack_require__(/*! ./contact-send.component.html */ "./src/app/contact-send/contact-send.component.html"),
            styles: [__webpack_require__(/*! ./contact-send.component.scss */ "./src/app/contact-send/contact-send.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ContactSendComponent);
    return ContactSendComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\r\n  <div>\r\n    <div class=\"head\">\r\n      <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n        <i class=\"icon back\"></i>\r\n        <span>{{ 'COMMON.BACK' | translate }}</span>\r\n      </button>\r\n    </div>\r\n\r\n    <h3 class=\"contacts-title\">{{ 'CONTACTS.TITLE' | translate }}</h3>\r\n\r\n    <div class=\"wrap-table\">\r\n      <ng-container>\r\n        <table\r\n          *ngIf=\"this.variablesService.contacts.length !== 0; else emptyList\"\r\n        >\r\n          <thead>\r\n            <tr #head (window:resize)=\"calculateWidth()\">\r\n              <th>{{ 'CONTACTS.TABLE.NAME' | translate }}</th>\r\n              <th>{{ 'CONTACTS.TABLE.ALIAS' | translate }}</th>\r\n              <th>{{ 'CONTACTS.TABLE.ADDRESS' | translate }}</th>\r\n              <th>{{ 'CONTACTS.TABLE.NOTES' | translate }}</th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <ng-container\r\n              *ngFor=\"\r\n                let contact of this.variablesService.contacts;\r\n                let i = index\r\n              \"\r\n            >\r\n              <tr>\r\n                <td>\r\n                  {{ contact.name }}\r\n                </td>\r\n                <td>\r\n                  <ng-container *ngIf=\"contact.alias\">\r\n                    <span>{{ contact.alias }}</span\r\n                    >\r\n                  </ng-container>\r\n                </td>\r\n                <td class=\"remote-address\">\r\n                  {{ contact.address }}\r\n                </td>\r\n                <td class=\"remote-notes\">\r\n                  {{ contact.notes }}\r\n                </td>\r\n                <td>\r\n                  <div class=\"button-wrapper\">\r\n                    <button\r\n                      [routerLink]=\"['/contact-send/' + i]\"\r\n                      [queryParams]=\"{ address: contact.address }\"\r\n                    >\r\n                      <i class=\"icon transfer\"></i>\r\n                      <span>{{ 'CONTACTS.BUTTON.SEND' | translate }}</span>\r\n                    </button>\r\n                    <button\r\n                      [routerLink]=\"['/edit-contacts/' + i]\"\r\n                      [queryParams]=\"{ id: i }\"\r\n                    >\r\n                      <i class=\"icon edit\"></i>\r\n                      <span>{{ 'CONTACTS.BUTTON.EDIT' | translate }}</span>\r\n                    </button>\r\n                    <button (click)=\"delete(i)\">\r\n                      <i class=\"icon delete\"></i>\r\n                      <span>{{ 'CONTACTS.BUTTON.DELETE' | translate }}</span>\r\n                    </button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </tbody>\r\n        </table>\r\n      </ng-container>\r\n\r\n      <ng-template #emptyList>\r\n        <div class=\"empty-list\">\r\n          {{ 'CONTACTS.TABLE.EMPTY' | translate }}\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n\r\n    <button [routerLink]=\"['/add-contacts']\" class=\"blue-button\">\r\n      {{ 'CONTACTS.BUTTON.ADD' | translate }}\r\n    </button>\r\n\r\n    <div class=\"footer\">\r\n      <button type=\"button\" class=\"import-btn\" [routerLink]=\"['/import']\">\r\n        <i class=\"icon import\"></i>\r\n        <span>{{ 'CONTACTS.BUTTON.IMPORT_EXPORT' | translate }}</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.scss":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  min-width: 95rem;\n  width: 100%;\n  height: 100%; }\n\n.head {\n  justify-content: flex-end; }\n\n.contacts-title {\n  font-size: 1.7rem; }\n\n.wrap-table {\n  margin: 1rem -3rem; }\n\n.wrap-table table tbody tr td {\n    padding: 0 3rem 0 1rem;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n\n.wrap-table table tbody tr td:first-child {\n      max-width: 10rem;\n      padding: 0 3rem 0 3rem; }\n\n.wrap-table table tbody tr td:nth-child(2) {\n      max-width: 10rem; }\n\n.wrap-table table tbody tr td .alias {\n      cursor: pointer; }\n\n.wrap-table table tbody tr td .button-wrapper {\n      display: flex; }\n\n.wrap-table table tbody tr td .button-wrapper button {\n        display: flex;\n        align-items: center;\n        background: transparent;\n        border: none;\n        font-size: 1.3rem;\n        font-weight: 400;\n        line-height: 3rem;\n        outline: none;\n        padding: 0;\n        height: auto;\n        margin-right: 1.8rem; }\n\n.wrap-table table tbody tr td .button-wrapper button .icon {\n          cursor: pointer;\n          margin-right: 0.8rem;\n          width: 1.7rem;\n          height: 1.7rem; }\n\n.wrap-table table tbody tr td .button-wrapper button .icon.edit {\n            -webkit-mask: url('edit.svg') no-repeat center;\n                    mask: url('edit.svg') no-repeat center; }\n\n.wrap-table table tbody tr td .button-wrapper button .icon.transfer {\n            -webkit-mask: url('send.svg') no-repeat center;\n                    mask: url('send.svg') no-repeat center; }\n\n.wrap-table table tbody tr td .button-wrapper button .icon.delete {\n            -webkit-mask: url('delete.svg') no-repeat center;\n                    mask: url('delete.svg') no-repeat center; }\n\n.wrap-table .empty-list {\n    margin: 2.5rem 3rem; }\n\n.blue-button {\n  width: 100%;\n  max-width: 18rem;\n  margin-top: 3rem; }\n\n.footer {\n  position: absolute;\n  bottom: 3rem;\n  font-size: 1.3rem; }\n\n.footer .import-btn {\n    display: flex;\n    align-items: center;\n    background-color: transparent;\n    font-size: inherit;\n    font-weight: 400;\n    line-height: 1.3rem;\n    padding: 0;\n    height: auto; }\n\n.footer .import-btn .icon {\n      margin-right: 0.7rem;\n      -webkit-mask: url('import-export.svg') no-repeat center;\n              mask: url('import-export.svg') no-repeat center;\n      width: 0.9rem;\n      height: 0.9rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvRDpcXFByb2plY3RcXFdPUktfTkVXXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcY29udGFjdHNcXGNvbnRhY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxrQkFBa0IsRUFBQTs7QUFEcEI7SUFVVSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBOztBQVpqQztNQWVZLGdCQUFnQjtNQUNoQixzQkFBc0IsRUFBQTs7QUFoQmxDO01Bb0JZLGdCQUFnQixFQUFBOztBQXBCNUI7TUF3QlksZUFBZSxFQUFBOztBQXhCM0I7TUE0QlksYUFBYSxFQUFBOztBQTVCekI7UUErQmMsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixVQUFVO1FBQ1YsWUFBWTtRQUNaLG9CQUFvQixFQUFBOztBQXpDbEM7VUE0Q2dCLGVBQWU7VUFDZixvQkFBb0I7VUFDcEIsYUFBYTtVQUNiLGNBQWMsRUFBQTs7QUEvQzlCO1lBa0RrQiw4Q0FBdUQ7b0JBQXZELHNDQUF1RCxFQUFBOztBQWxEekU7WUFzRGtCLDhDQUF1RDtvQkFBdkQsc0NBQXVELEVBQUE7O0FBdER6RTtZQTBEa0IsZ0RBQXlEO29CQUF6RCx3Q0FBeUQsRUFBQTs7QUExRDNFO0lBcUVJLG1CQUFtQixFQUFBOztBQUl2QjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBSWxCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFIbkI7SUFNSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWSxFQUFBOztBQWJoQjtNQWdCTSxvQkFBb0I7TUFDcEIsdURBQWdFO2NBQWhFLCtDQUFnRTtNQUNoRSxhQUFhO01BQ2IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgbWluLXdpZHRoOiA5NXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uY29udGFjdHMtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xyXG59XHJcblxyXG4ud3JhcC10YWJsZSB7XHJcbiAgbWFyZ2luOiAxcmVtIC0zcmVtO1xyXG5cclxuICB0YWJsZSB7XHJcblxyXG4gICAgdGJvZHl7XHJcblxyXG4gICAgICB0ciB7XHJcblxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgM3JlbSAwIDFyZW07XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTByZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgM3JlbSAwIDNyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hbGlhcyB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyAgXHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMS43cmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjdyZW07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJi5lZGl0IHtcclxuICAgICAgICAgICAgICAgICAgbWFzazogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9lZGl0LnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAmLnRyYW5zZmVyIHtcclxuICAgICAgICAgICAgICAgICAgbWFzazogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9zZW5kLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICYuZGVsZXRlIHtcclxuICAgICAgICAgICAgICAgICAgbWFzazogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZW1wdHktbGlzdCB7XHJcbiAgICBtYXJnaW46IDIuNXJlbSAzcmVtO1xyXG4gIH0gIFxyXG59XHJcblxyXG4uYmx1ZS1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMThyZW07XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG5cclxuXHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDNyZW07XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgXHJcbiAgLmltcG9ydC1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zcmVtO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG4gICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2ltcG9ydC1leHBvcnQuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICB3aWR0aDogMC45cmVtO1xyXG4gICAgICBoZWlnaHQ6IDAuOXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(location, variablesService, backend) {
        this.location = location;
        this.variablesService = variablesService;
        this.backend = backend;
        this.calculatedWidth = [];
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.backend.getContactAlias();
    };
    ContactsComponent.prototype.delete = function (index) {
        if (this.variablesService.appPass) {
            this.variablesService.contacts.splice(index, 1);
            this.backend.storeSecureAppData();
        }
    };
    ContactsComponent.prototype.calculateWidth = function () {
        this.calculatedWidth = [];
        this.calculatedWidth.push(this.head.nativeElement.childNodes[0].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[1].clientWidth +
            this.head.nativeElement.childNodes[2].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[3].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[4].clientWidth);
    };
    // openInBrowser(alias: string) {
    //   if (alias !== null) {
    //     this.backend.openUrlInBrowser(
    //       `explorer.zano.org/aliases/${alias.slice(1)}#modalOpen`
    //     );
    //   }
    // }
    ContactsComponent.prototype.back = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('head'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ContactsComponent.prototype, "head", void 0);
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/contacts/contacts.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/contracts/contracts.component.html":
/*!****************************************************!*\
  !*** ./src/app/contracts/contracts.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"empty-contracts\" *ngIf=\"!variablesService.currentWallet.contracts.length\">\r\n  <span>{{ 'CONTRACTS.EMPTY' | translate }}</span>\r\n</div>\r\n\r\n<div class=\"wrap-table scrolled-content\" *ngIf=\"variablesService.currentWallet.contracts.length\">\r\n\r\n  <table class=\"contracts-table\">\r\n    <thead>\r\n    <tr>\r\n      <th>{{ 'CONTRACTS.CONTRACTS' | translate }}</th>\r\n      <th>{{ 'CONTRACTS.DATE' | translate }}</th>\r\n      <th>{{ 'CONTRACTS.AMOUNT' | translate }}</th>\r\n      <th>{{ 'CONTRACTS.STATUS' | translate }}</th>\r\n      <th>{{ 'CONTRACTS.COMMENTS' | translate }}</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of sortedArrayContracts\" [routerLink]=\"'/wallet/' + walletId + '/purchase/' + item.contract_id\">\r\n      <td>\r\n        <div class=\"contract\">\r\n          <i class=\"icon alert\" *ngIf=\"!item.is_new\"></i>\r\n          <i class=\"icon new\" *ngIf=\"item.is_new\"></i>\r\n          <i class=\"icon\" [class.purchase]=\"item.is_a\" [class.sell]=\"!item.is_a\"></i>\r\n          <span tooltip=\"{{ item.private_detailes.t }}\" placement=\"top-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{item.private_detailes.t}}</span>\r\n        </div>\r\n      </td>\r\n      <td>\r\n        <div>{{item.timestamp * 1000 | date : 'dd-MM-yyyy HH:mm'}}</div>\r\n      </td>\r\n      <td>\r\n        <div>{{item.private_detailes.to_pay | intToMoney}} {{variablesService.defaultCurrency}}</div>\r\n      </td>\r\n      <td>\r\n        <div class=\"status\" [class.error-text]=\"item.state === 4\" tooltip=\"{{item.state | contractStatusMessages : item.is_a}}\" placement=\"top\" tooltipClass=\"table-tooltip\" [delay]=\"500\">\r\n          {{item.state | contractStatusMessages : item.is_a}}\r\n        </div>\r\n      </td>\r\n      <td>\r\n        <div class=\"comment\" tooltip=\"{{ item.private_detailes.c }}\" placement=\"top-right\" tooltipClass=\"table-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">\r\n          {{item.private_detailes.c}}\r\n        </div>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n\r\n<div class=\"contracts-buttons\">\r\n  <button type=\"button\" class=\"blue-button\" [routerLink]=\"'/wallet/' + walletId + '/purchase'\">{{ 'CONTRACTS.PURCHASE_BUTTON' | translate }}</button>\r\n  <button type=\"button\" class=\"blue-button\" disabled>{{ 'CONTRACTS.LISTING_BUTTON' | translate }}</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contracts/contracts.component.scss":
/*!****************************************************!*\
  !*** ./src/app/contracts/contracts.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.empty-contracts {\n  font-size: 1.5rem; }\n\n.wrap-table {\n  margin: -3rem -3rem 0 -3rem;\n  overflow-x: auto; }\n\n.wrap-table table tbody tr {\n    cursor: pointer;\n    outline: none !important; }\n\n.wrap-table table tbody tr .contract {\n      position: relative;\n      display: flex;\n      align-items: center; }\n\n.wrap-table table tbody tr .contract .icon {\n        flex-shrink: 0; }\n\n.wrap-table table tbody tr .contract .icon.new, .wrap-table table tbody tr .contract .icon.alert {\n          position: absolute;\n          top: 0; }\n\n.wrap-table table tbody tr .contract .icon.new {\n          left: -2.3rem;\n          -webkit-mask: url('new.svg') no-repeat center;\n                  mask: url('new.svg') no-repeat center;\n          width: 1.7rem;\n          height: 1.7rem; }\n\n.wrap-table table tbody tr .contract .icon.alert {\n          top: 0.2rem;\n          left: -2.1rem;\n          -webkit-mask: url('alert.svg') no-repeat center;\n                  mask: url('alert.svg') no-repeat center;\n          width: 1.2rem;\n          height: 1.2rem; }\n\n.wrap-table table tbody tr .contract .icon.purchase, .wrap-table table tbody tr .contract .icon.sell {\n          margin-right: 1rem;\n          width: 1.5rem;\n          height: 1.5rem; }\n\n.wrap-table table tbody tr .contract .icon.purchase {\n          -webkit-mask: url('purchase.svg') no-repeat center;\n                  mask: url('purchase.svg') no-repeat center; }\n\n.wrap-table table tbody tr .contract .icon.sell {\n          -webkit-mask: url('sell.svg') no-repeat center;\n                  mask: url('sell.svg') no-repeat center; }\n\n.wrap-table table tbody tr .contract span {\n        text-overflow: ellipsis;\n        overflow: hidden; }\n\n.wrap-table table tbody tr .status, .wrap-table table tbody tr .comment {\n      display: inline-block;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      max-width: 100%; }\n\n.contracts-buttons {\n  display: flex;\n  margin: 3rem 0;\n  width: 50%; }\n\n.contracts-buttons button {\n    flex: 0 1 50%;\n    margin-right: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJhY3RzL0Q6XFxQcm9qZWN0XFxXT1JLX05FV1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXGNvbnRyYWN0c1xcY29udHJhY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQixFQUFBOztBQUZsQjtJQVNRLGVBQWU7SUFDZix3QkFBd0IsRUFBQTs7QUFWaEM7TUFhVSxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLG1CQUFtQixFQUFBOztBQWY3QjtRQWtCWSxjQUFjLEVBQUE7O0FBbEIxQjtVQXFCYyxrQkFBa0I7VUFDbEIsTUFBTSxFQUFBOztBQXRCcEI7VUEwQmMsYUFBYTtVQUNiLDZDQUFzRDtrQkFBdEQscUNBQXNEO1VBQ3RELGFBQWE7VUFDYixjQUFjLEVBQUE7O0FBN0I1QjtVQWlDYyxXQUFXO1VBQ1gsYUFBYTtVQUNiLCtDQUF3RDtrQkFBeEQsdUNBQXdEO1VBQ3hELGFBQWE7VUFDYixjQUFjLEVBQUE7O0FBckM1QjtVQXlDYyxrQkFBa0I7VUFDbEIsYUFBYTtVQUNiLGNBQWMsRUFBQTs7QUEzQzVCO1VBK0NjLGtEQUEyRDtrQkFBM0QsMENBQTJELEVBQUE7O0FBL0N6RTtVQW1EYyw4Q0FBdUQ7a0JBQXZELHNDQUF1RCxFQUFBOztBQW5EckU7UUF3RFksdUJBQXVCO1FBQ3ZCLGdCQUFnQixFQUFBOztBQXpENUI7TUE4RFUscUJBQXFCO01BQ3JCLHVCQUF1QjtNQUN2QixnQkFBZ0I7TUFDaEIsZUFBZSxFQUFBOztBQU96QjtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsVUFBVSxFQUFBOztBQUhaO0lBTUksYUFBYTtJQUNiLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udHJhY3RzL2NvbnRyYWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmVtcHR5LWNvbnRyYWN0cyB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi53cmFwLXRhYmxlIHtcclxuICBtYXJnaW46IC0zcmVtIC0zcmVtIDAgLTNyZW07XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuXHJcbiAgdGFibGUge1xyXG5cclxuICAgIHRib2R5IHtcclxuXHJcbiAgICAgIHRyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAuY29udHJhY3Qge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgICAgICAgICAgICYubmV3LCAmLmFsZXJ0IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLm5ldyB7XHJcbiAgICAgICAgICAgICAgbGVmdDogLTIuM3JlbTtcclxuICAgICAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL25ldy5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEuN3JlbTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEuN3JlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5hbGVydCB7XHJcbiAgICAgICAgICAgICAgdG9wOiAwLjJyZW07XHJcbiAgICAgICAgICAgICAgbGVmdDogLTIuMXJlbTtcclxuICAgICAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2FsZXJ0LnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICAgICAgICB3aWR0aDogMS4ycmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMS4ycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnB1cmNoYXNlLCAmLnNlbGwge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnB1cmNoYXNlIHtcclxuICAgICAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3B1cmNoYXNlLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5zZWxsIHtcclxuICAgICAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3NlbGwuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0YXR1cywgLmNvbW1lbnQge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRyYWN0cy1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogM3JlbSAwO1xyXG4gIHdpZHRoOiA1MCU7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmbGV4OiAwIDEgNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/contracts/contracts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contracts/contracts.component.ts ***!
  \**************************************************/
/*! exports provided: ContractsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsComponent", function() { return ContractsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContractsComponent = /** @class */ (function () {
    function ContractsComponent(route, variablesService) {
        this.route = route;
        this.variablesService = variablesService;
    }
    Object.defineProperty(ContractsComponent.prototype, "sortedArrayContracts", {
        get: function () {
            return this.variablesService.currentWallet.contracts.sort(function (a, b) {
                if (a.is_new < b.is_new) {
                    return 1;
                }
                if (a.is_new > b.is_new) {
                    return -1;
                }
                if (a.timestamp < b.timestamp) {
                    return 1;
                }
                if (a.timestamp > b.timestamp) {
                    return -1;
                }
                if (a.contract_id < b.contract_id) {
                    return 1;
                }
                if (a.contract_id > b.contract_id) {
                    return -1;
                }
                return 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    ContractsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentRouting = this.route.parent.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.walletId = params['id'];
            }
        });
    };
    ContractsComponent.prototype.ngOnDestroy = function () {
        this.parentRouting.unsubscribe();
    };
    ContractsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contracts',
            template: __webpack_require__(/*! ./contracts.component.html */ "./src/app/contracts/contracts.component.html"),
            styles: [__webpack_require__(/*! ./contracts.component.scss */ "./src/app/contracts/contracts.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"]])
    ], ContractsComponent);
    return ContractsComponent;
}());



/***/ }),

/***/ "./src/app/create-wallet/create-wallet.component.html":
/*!************************************************************!*\
  !*** ./src/app/create-wallet/create-wallet.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/main']\">{{ 'BREADCRUMBS.ADD_WALLET' | translate }}</span>\r\n      <span>{{ 'BREADCRUMBS.CREATE_WALLET' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" [routerLink]=\"['/main']\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-create\" [formGroup]=\"createForm\">\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"wallet-name\">{{ 'CREATE_WALLET.NAME' | translate }}</label>\r\n      <input type=\"text\" id=\"wallet-name\" formControlName=\"name\" [attr.readonly]=\"walletSaved ? '' : null\" [maxlength]=\"variablesService.maxWalletNameLength\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"createForm.controls['name'].invalid && (createForm.controls['name'].dirty || createForm.controls['name'].touched)\">\r\n        <div *ngIf=\"createForm.controls['name'].errors['required']\">\r\n          {{ 'CREATE_WALLET.FORM_ERRORS.NAME_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"createForm.controls['name'].errors['duplicate']\">\r\n          {{ 'CREATE_WALLET.FORM_ERRORS.NAME_DUPLICATE' | translate }}\r\n        </div>\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"createForm.get('name').value.length >= variablesService.maxWalletNameLength\">\r\n        {{ 'CREATE_WALLET.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"wallet-password\">{{ 'CREATE_WALLET.PASS' | translate }}</label>\r\n      <input type=\"password\" id=\"wallet-password\" formControlName=\"password\" [attr.readonly]=\"walletSaved ? '' : null\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n      <div class=\"error-block\" *ngIf=\"createForm.controls['password'].dirty && createForm.controls['password'].errors\">\r\n        <div *ngIf=\"createForm.controls['password'].errors.pattern\">\r\n          {{ 'ERRORS.WRONG_PASSWORD' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"confirm-wallet-password\">{{ 'CREATE_WALLET.CONFIRM' | translate }}</label>\r\n      <input type=\"password\" id=\"confirm-wallet-password\" formControlName=\"confirm\" [attr.readonly]=\"walletSaved ? '' : null\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n      <div class=\"error-block\" *ngIf=\"createForm.controls['password'].dirty && createForm.controls['confirm'].dirty && createForm.errors\">\r\n        <div *ngIf=\"createForm.errors['confirm_mismatch']\">\r\n          {{ 'CREATE_WALLET.FORM_ERRORS.CONFIRM_NOT_MATCH' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrap-buttons\">\r\n      <button type=\"button\" class=\"transparent-button\" *ngIf=\"walletSaved\" disabled><i class=\"icon\"></i>{{walletSavedName}}</button>\r\n      <button type=\"button\" class=\"blue-button select-button\" (click)=\"saveWallet()\" [disabled]=\"!createForm.valid\" *ngIf=\"!walletSaved\">{{ 'CREATE_WALLET.BUTTON_SELECT' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button create-button\" (click)=\"createWallet()\" [disabled]=\"!walletSaved\">{{ 'CREATE_WALLET.BUTTON_CREATE' | translate }}</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n\r\n<app-progress-container [width]=\"progressWidth\" [labels]=\"['PROGRESS.ADD_WALLET', 'PROGRESS.SELECT_LOCATION', 'Seed Phrase', 'PROGRESS.CREATE_WALLET']\"></app-progress-container>\r\n"

/***/ }),

/***/ "./src/app/create-wallet/create-wallet.component.scss":
/*!************************************************************!*\
  !*** ./src/app/create-wallet/create-wallet.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative; }\n\n.form-create {\n  margin: 2.4rem 0;\n  width: 50%; }\n\n.form-create .wrap-buttons {\n    display: flex;\n    margin: 2.5rem -0.7rem; }\n\n.form-create .wrap-buttons button {\n      margin: 0 0.7rem; }\n\n.form-create .wrap-buttons button.transparent-button {\n        flex-basis: 50%; }\n\n.form-create .wrap-buttons button.select-button {\n        flex-basis: 60%; }\n\n.form-create .wrap-buttons button.create-button {\n        flex: 1 1 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXdhbGxldC9EOlxcUHJvamVjdFxcV09SS19ORVdcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxjcmVhdGUtd2FsbGV0XFxjcmVhdGUtd2FsbGV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFGWjtJQUtJLGFBQWE7SUFDYixzQkFBc0IsRUFBQTs7QUFOMUI7TUFTTSxnQkFBZ0IsRUFBQTs7QUFUdEI7UUFZUSxlQUFlLEVBQUE7O0FBWnZCO1FBZ0JRLGVBQWUsRUFBQTs7QUFoQnZCO1FBb0JRLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS13YWxsZXQvY3JlYXRlLXdhbGxldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5mb3JtLWNyZWF0ZSB7XHJcbiAgbWFyZ2luOiAyLjRyZW0gMDtcclxuICB3aWR0aDogNTAlO1xyXG5cclxuICAud3JhcC1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDIuNXJlbSAtMC43cmVtO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMCAwLjdyZW07XHJcblxyXG4gICAgICAmLnRyYW5zcGFyZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnNlbGVjdC1idXR0b24ge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDYwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jcmVhdGUtYnV0dG9uIHtcclxuICAgICAgICBmbGV4OiAxIDEgNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/create-wallet/create-wallet.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/create-wallet/create-wallet.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWalletComponent", function() { return CreateWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateWalletComponent = /** @class */ (function () {
    function CreateWalletComponent(router, backend, variablesService, modalService, ngZone, translate) {
        var _this = this;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.createForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            return { 'duplicate': true };
                        }
                    }
                    return null;
                }]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.variablesService.pattern)),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        }, function (g) {
            return g.get('password').value === g.get('confirm').value ? null : { 'confirm_mismatch': true };
        });
        this.wallet = {
            id: ''
        };
        this.walletSaved = false;
        this.walletSavedName = '';
        this.progressWidth = '9rem';
    }
    CreateWalletComponent.prototype.ngOnInit = function () {
    };
    CreateWalletComponent.prototype.createWallet = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.progressWidth = '100%';
            _this.router.navigate(['/seed-phrase'], { queryParams: { wallet_id: _this.wallet.id } });
        });
    };
    CreateWalletComponent.prototype.saveWallet = function () {
        var _this = this;
        if (this.createForm.valid && this.createForm.get('name').value.length <= this.variablesService.maxWalletNameLength) {
            this.backend.saveFileDialog(this.translate.instant('CREATE_WALLET.TITLE_SAVE'), '*', this.variablesService.settings.default_path, function (file_status, file_data) {
                if (file_status) {
                    _this.variablesService.settings.default_path = file_data.path.substr(0, file_data.path.lastIndexOf('/'));
                    _this.walletSavedName = file_data.path.substr(file_data.path.lastIndexOf('/') + 1, file_data.path.length - 1);
                    _this.backend.generateWallet(file_data.path, _this.createForm.get('password').value, function (generate_status, generate_data, errorCode) {
                        if (generate_status) {
                            _this.wallet.id = generate_data.wallet_id;
                            _this.variablesService.opening_wallet = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__["Wallet"](generate_data.wallet_id, _this.createForm.get('name').value, _this.createForm.get('password').value, generate_data['wi'].path, generate_data['wi'].address, generate_data['wi'].balance, generate_data['wi'].unlocked_balance, generate_data['wi'].mined_total, generate_data['wi'].tracking_hey);
                            _this.variablesService.opening_wallet.alias = _this.backend.getWalletAlias(generate_data['wi'].address);
                            _this.variablesService.opening_wallet.total_history_item = 0;
                            _this.variablesService.opening_wallet.pages = new Array(1).fill(1);
                            _this.variablesService.opening_wallet.totalPages = 1;
                            _this.variablesService.opening_wallet.currentPage = 1;
                            _this.ngZone.run(function () {
                                _this.walletSaved = true;
                                _this.progressWidth = '33%';
                            });
                        }
                        else {
                            if (errorCode && errorCode === 'ALREADY_EXISTS') {
                                _this.modalService.prepareModal('error', 'CREATE_WALLET.ERROR_CANNOT_SAVE_TOP');
                            }
                            else {
                                _this.modalService.prepareModal('error', 'CREATE_WALLET.ERROR_CANNOT_SAVE_SYSTEM');
                            }
                        }
                    });
                }
            });
        }
    };
    CreateWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-wallet',
            template: __webpack_require__(/*! ./create-wallet.component.html */ "./src/app/create-wallet/create-wallet.component.html"),
            styles: [__webpack_require__(/*! ./create-wallet.component.scss */ "./src/app/create-wallet/create-wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], CreateWalletComponent);
    return CreateWalletComponent;
}());



/***/ }),

/***/ "./src/app/edit-alias/edit-alias.component.html":
/*!******************************************************!*\
  !*** ./src/app/edit-alias/edit-alias.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/wallet/' + wallet.wallet_id + '/history']\">{{ wallet.name }}</span>\r\n      <span>{{ 'BREADCRUMBS.EDIT_ALIAS' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-edit\">\r\n\r\n    <div class=\"input-block alias-name\">\r\n      <label for=\"alias-name\">\r\n        {{ 'EDIT_ALIAS.NAME.LABEL' | translate }}\r\n      </label>\r\n      <input type=\"text\" id=\"alias-name\" [value]=\"alias.name\" placeholder=\"{{ 'EDIT_ALIAS.NAME.PLACEHOLDER' | translate }}\" readonly>\r\n    </div>\r\n\r\n    <div class=\"input-block textarea\">\r\n      <label for=\"alias-comment\">\r\n        {{ 'EDIT_ALIAS.COMMENT.LABEL' | translate }}\r\n      </label>\r\n      <textarea id=\"alias-comment\"\r\n                class=\"scrolled-content\"\r\n                [(ngModel)]=\"alias.comment\"\r\n                [ngModelOptions]=\"{standalone: true}\"\r\n                [maxlength]=\"variablesService.maxCommentLength\"\r\n                (contextmenu)=\"variablesService.onContextMenu($event)\"\r\n                placeholder=\"{{ 'EDIT_ALIAS.COMMENT.PLACEHOLDER' | translate }}\">\r\n      </textarea>\r\n      <div class=\"error-block\" *ngIf=\"alias.comment.length > 0 && notEnoughMoney\">\r\n        {{ 'EDIT_ALIAS.FORM_ERRORS.NO_MONEY' | translate }}\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"alias.comment.length >= variablesService.maxCommentLength\">\r\n        {{ 'EDIT_ALIAS.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"alias-cost\">{{ \"EDIT_ALIAS.COST\" | translate : {value: variablesService.default_fee, currency: variablesService.defaultCurrency} }}</div>\r\n\r\n    <div class=\"wrap-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"updateAlias()\" [disabled]=\"notEnoughMoney || (oldAliasComment === alias.comment) || alias.comment.length > variablesService.maxCommentLength\">{{ 'EDIT_ALIAS.BUTTON_EDIT' | translate }}</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/edit-alias/edit-alias.component.scss":
/*!******************************************************!*\
  !*** ./src/app/edit-alias/edit-alias.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-edit {\n  margin: 2.4rem 0; }\n  .form-edit .alias-name {\n    width: 50%; }\n  .form-edit .alias-cost {\n    font-size: 1.3rem;\n    margin-top: 2rem; }\n  .form-edit .wrap-buttons {\n    display: flex;\n    justify-content: space-between;\n    margin: 2.5rem -0.7rem; }\n  .form-edit .wrap-buttons button {\n      margin: 0 0.7rem;\n      width: 15rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1hbGlhcy9EOlxcUHJvamVjdFxcV09SS19ORVdcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxlZGl0LWFsaWFzXFxlZGl0LWFsaWFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUE7RUFEbEI7SUFJSSxVQUFVLEVBQUE7RUFKZDtJQVFJLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtFQVRwQjtJQWFJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsc0JBQXNCLEVBQUE7RUFmMUI7TUFrQk0sZ0JBQWdCO01BQ2hCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXQtYWxpYXMvZWRpdC1hbGlhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWVkaXQge1xyXG4gIG1hcmdpbjogMi40cmVtIDA7XHJcblxyXG4gIC5hbGlhcy1uYW1lIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuYWxpYXMtY29zdCB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgfVxyXG5cclxuICAud3JhcC1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDIuNXJlbSAtMC43cmVtO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMCAwLjdyZW07XHJcbiAgICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/edit-alias/edit-alias.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-alias/edit-alias.component.ts ***!
  \****************************************************/
/*! exports provided: EditAliasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAliasComponent", function() { return EditAliasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditAliasComponent = /** @class */ (function () {
    function EditAliasComponent(location, router, backend, variablesService, modalService, ngZone) {
        this.location = location;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.requestProcessing = false;
    }
    EditAliasComponent.prototype.ngOnInit = function () {
        this.wallet = this.variablesService.currentWallet;
        var alias = this.backend.getWalletAlias(this.wallet.address);
        this.alias = {
            name: alias.name,
            address: alias.address,
            comment: alias.comment
        };
        this.oldAliasComment = alias.comment;
        this.notEnoughMoney = this.wallet.unlocked_balance.isLessThan(this.variablesService.default_fee_big);
    };
    EditAliasComponent.prototype.updateAlias = function () {
        var _this = this;
        if (this.requestProcessing || this.notEnoughMoney || this.oldAliasComment === this.alias.comment || this.alias.comment.length > this.variablesService.maxCommentLength) {
            return;
        }
        this.requestProcessing = true;
        this.backend.updateAlias(this.wallet.wallet_id, this.alias, this.variablesService.default_fee, function (status) {
            if (status) {
                _this.modalService.prepareModal('success', '');
                _this.wallet.alias['comment'] = _this.alias.comment;
                _this.ngZone.run(function () {
                    _this.router.navigate(['/wallet/' + _this.wallet.wallet_id]);
                });
            }
            _this.requestProcessing = false;
        });
    };
    EditAliasComponent.prototype.back = function () {
        this.location.back();
    };
    EditAliasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-alias',
            template: __webpack_require__(/*! ./edit-alias.component.html */ "./src/app/edit-alias/edit-alias.component.html"),
            styles: [__webpack_require__(/*! ./edit-alias.component.scss */ "./src/app/edit-alias/edit-alias.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], EditAliasComponent);
    return EditAliasComponent;
}());



/***/ }),

/***/ "./src/app/export-import/export-import.component.html":
/*!************************************************************!*\
  !*** ./src/app/export-import/export-import.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\r\n  <div>\r\n    <div class=\"head\">\r\n      <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n        <i class=\"icon back\"></i>\r\n        <span>{{ 'COMMON.BACK' | translate }}</span>\r\n      </button>\r\n    </div>\r\n\r\n    <h3 class=\"contacts-title\">{{ 'CONTACTS.IMPORT_EXPORT' | translate }}</h3>\r\n\r\n    <div class=\"btn-wrapper\">\r\n      <button class=\"blue-button\" type=\"button\" (click)=\"import()\">\r\n        {{ 'CONTACTS.IMPORT' | translate }}\r\n      </button>\r\n      <button class=\"blue-button\" type=\"button\" (click)=\"export()\">\r\n        {{ 'CONTACTS.EXPORT' | translate }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/export-import/export-import.component.scss":
/*!************************************************************!*\
  !*** ./src/app/export-import/export-import.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.head {\n  justify-content: flex-end; }\n\n.contacts-title {\n  font-size: 1.7rem;\n  margin-bottom: 1rem; }\n\n.btn-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 -0.5rem;\n  padding: 1.5rem 0; }\n\n.btn-wrapper button {\n    flex: 1 0 auto;\n    margin: 0 0.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwb3J0LWltcG9ydC9EOlxcUHJvamVjdFxcV09SS19ORVdcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxleHBvcnQtaW1wb3J0XFxleHBvcnQtaW1wb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFMbkI7SUFRSSxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9leHBvcnQtaW1wb3J0L2V4cG9ydC1pbXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uY29udGFjdHMtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5idG4td3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW46IDAgLTAuNXJlbTtcclxuICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/export-import/export-import.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/export-import/export-import.component.ts ***!
  \**********************************************************/
/*! exports provided: ExportImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportImportComponent", function() { return ExportImportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExportImportComponent = /** @class */ (function () {
    function ExportImportComponent(location, variablesService, backend, modalService, papa, translate, router, ngZone) {
        this.location = location;
        this.variablesService = variablesService;
        this.backend = backend;
        this.modalService = modalService;
        this.papa = papa;
        this.translate = translate;
        this.router = router;
        this.ngZone = ngZone;
    }
    ExportImportComponent.prototype.ngOnInit = function () { };
    ExportImportComponent.prototype.import = function () {
        var _this = this;
        this.backend.openFileDialog('', '*', this.variablesService.settings.default_path, function (file_status, file_data) {
            if (file_status) {
                _this.variablesService.settings.default_path = file_data.path.substr(0, file_data.path.lastIndexOf('/'));
                if (_this.isValid(file_data.path)) {
                    _this.backend.loadFile(file_data.path, function (status, data) {
                        if (!status) {
                            _this.modalService.prepareModal('error', 'CONTACTS.ERROR_IMPORT_EMPTY');
                        }
                        else {
                            var options = {
                                header: true
                            };
                            var elements = _this.papa.parse(data, options);
                            var isArray = Array.isArray(elements.data);
                            if (isArray && elements.data.length !== 0 && !elements.errors.length) {
                                if (!_this.variablesService.contacts.length) {
                                    elements.data.forEach(function (element) {
                                        _this.variablesService.contacts.push(element);
                                    });
                                }
                                else {
                                    elements.data.forEach(function (element) {
                                        var indexName = _this.variablesService.contacts.findIndex(function (contact) { return contact.name === element.name; });
                                        var indexAddress = _this.variablesService.contacts.findIndex(function (contact) { return contact.address === element.address; });
                                        if (indexAddress === -1 && indexName === -1) {
                                            _this.variablesService.contacts.push(element);
                                        }
                                        if (indexName !== -1 && indexAddress === -1) {
                                            _this.variablesService.contacts.push({
                                                name: element.name + " " + _this.translate.instant('CONTACTS.COPY'),
                                                address: element.address,
                                                notes: element.notes
                                            });
                                        }
                                    });
                                }
                                _this.backend.getContactAlias();
                                _this.ngZone.run(function () {
                                    _this.router.navigate(['/contacts']);
                                });
                            }
                            if (elements.errors.length) {
                                _this.modalService.prepareModal('error', 'CONTACTS.ERROR_IMPORT');
                                console.log(elements.errors);
                            }
                        }
                    });
                }
                else {
                    _this.modalService.prepareModal('error', 'CONTACTS.ERROR_TYPE_FILE');
                }
            }
        });
    };
    ExportImportComponent.prototype.export = function () {
        var _this = this;
        var contacts = [];
        this.variablesService.contacts.forEach(function (contact) {
            delete contact.alias;
            contacts.push(contact);
        });
        this.backend.saveFileDialog('', '*', this.variablesService.settings.default_path, function (file_status, file_data) {
            if (!_this.variablesService.contacts.length && !(file_data.error_code === 'CANCELED')) {
                _this.modalService.prepareModal('error', 'CONTACTS.ERROR_EMPTY_LIST');
            }
            var path = _this.isValid(file_data.path) ? file_data.path : file_data.path + ".csv";
            if (file_status && _this.isValid(path) && _this.variablesService.contacts.length) {
                _this.backend.storeFile(path, _this.papa.unparse(contacts));
            }
            if (!(file_data.error_code === 'CANCELED') && !_this.isValid(path)) {
                _this.modalService.prepareModal('error', 'CONTACTS.ERROR_EXPORT');
            }
        });
    };
    ExportImportComponent.prototype.isValid = function (file) {
        return file.endsWith('.csv');
    };
    ExportImportComponent.prototype.back = function () {
        this.location.back();
    };
    ExportImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-export-import',
            template: __webpack_require__(/*! ./export-import.component.html */ "./src/app/export-import/export-import.component.html"),
            styles: [__webpack_require__(/*! ./export-import.component.scss */ "./src/app/export-import/export-import.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__["Papa"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ExportImportComponent);
    return ExportImportComponent;
}());



/***/ }),

/***/ "./src/app/history/history.component.html":
/*!************************************************!*\
  !*** ./src/app/history/history.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-table\">\r\n\r\n  <table class=\"history-table\">\r\n    <thead>\r\n    <tr #head (window:resize)=\"calculateWidth()\">\r\n      <th>{{ 'HISTORY.STATUS' | translate }}</th>\r\n      <th>{{ 'HISTORY.DATE' | translate }}</th>\r\n      <th>{{ 'HISTORY.AMOUNT' | translate }}</th>\r\n      <th>{{ 'HISTORY.FEE' | translate }}</th>\r\n      <th>{{ 'HISTORY.ADDRESS' | translate }}</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <ng-container *ngFor=\"let item of variablesService.currentWallet.history\">\r\n      <tr (click)=\"openDetails(item.tx_hash)\" [class.locked-transaction]=\"!item.is_mining && item.unlock_time > 0\">\r\n        <td> \r\n          <div class=\"status\" [class.send]=\"!item.is_income\" [class.received]=\"item.is_income\">\r\n            <ng-container *ngIf=\"variablesService.height_app - item.height < 10 || item.height === 0 && item.timestamp > 0\">\r\n              <div class=\"confirmation\" tooltip=\"{{ 'HISTORY.STATUS_TOOLTIP' | translate : {'current': getHeight(item)/10, 'total': 10} }}\" placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\">\r\n                <div class=\"fill\" [style.height]=\"getHeight(item) + '%'\"></div>\r\n              </div>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"item.unlock_time !== 0 && item.tx_type !== 6\">\r\n              <ng-container *ngIf=\"isLocked(item); else unlock\">\r\n                <ng-container *ngIf=\"item.unlock_time < 500000000\">\r\n                  <i class=\"icon lock-transaction\" tooltip=\"{{ 'HISTORY.LOCK_TOOLTIP' | translate : {'date': time(item) | date : 'MM.dd.yy'} }}\" placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\"\r\n                  [class.position]=\"variablesService.height_app - item.height < 10 || item.height === 0 && item.timestamp > 0\"></i>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"item.unlock_time > 500000000\">\r\n                  <i class=\"icon lock-transaction\" tooltip=\"{{ 'HISTORY.LOCK_TOOLTIP' | translate : {'date': item.unlock_time * 1000 | date : 'MM.dd.yy'} }}\" placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\"\r\n                  [class.position]=\"variablesService.height_app - item.height < 10 || item.height === 0 && item.timestamp > 0\"></i>\r\n                </ng-container>\r\n              </ng-container> \r\n              <ng-template #unlock>\r\n                <i class=\"icon unlock-transaction\" placement=\"bottom-left\" [class.position]=\"variablesService.height_app - item.height < 10 || item.height === 0 && item.timestamp > 0\"></i>\r\n              </ng-template>\r\n            </ng-container>\r\n\r\n            <!-- <ng-container *ngIf=\"!item.is_mining && item.unlock_time > 0\">\r\n              <i class=\"icon lock-transaction\" tooltip=\"{{ 'HISTORY.LOCK_TOOLTIP' | translate : {'date': item.unlock_time * 1000 | date : 'MM.dd.yy'} }}\" placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\"></i>\r\n            </ng-container> -->\r\n            <i class=\"icon status-transaction\"></i>\r\n            <span>{{ (item.is_income ? 'HISTORY.RECEIVED' : 'HISTORY.SEND') | translate }}</span>\r\n          </div>\r\n        </td>\r\n        <td>{{item.timestamp * 1000 | date : 'dd-MM-yyyy HH:mm'}}</td>\r\n        <td>\r\n          <span *ngIf=\"item.sortAmount && item.sortAmount.toString() !== '0'\">{{item.sortAmount | intToMoney}} {{variablesService.defaultCurrency}}</span>\r\n        </td>\r\n        <td>\r\n          <span *ngIf=\"item.sortFee && item.sortFee.toString() !== '0'\">{{item.sortFee | intToMoney}} {{variablesService.defaultCurrency}}</span>\r\n        </td>\r\n        <td class=\"remote-address\">\r\n          <span *ngIf=\"!(item.tx_type === 0 && item.remote_addresses && item.remote_addresses[0])\">{{item | historyTypeMessages}}</span>\r\n          <span *ngIf=\"item.tx_type === 0 && item.remote_addresses && item.remote_addresses[0]\" (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, item.remote_addresses[0])\">{{item.remote_addresses[0]}}</span>\r\n        </td>\r\n      </tr>\r\n      <tr class=\"transaction-details\" [class.open]=\"item.tx_hash === openedDetails\">\r\n        <td colspan=\"5\">\r\n          <ng-container *ngIf=\"item.tx_hash === openedDetails\">\r\n            <app-transaction-details [transaction]=\"item\" [sizes]=\"calculatedWidth\"></app-transaction-details>\r\n          </ng-container>\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/history/history.component.scss":
/*!************************************************!*\
  !*** ./src/app/history/history.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.wrap-table {\n  margin: -3rem; }\n\n.wrap-table table tbody tr td {\n    min-width: 10rem; }\n\n.wrap-table table tbody tr .status {\n    position: relative;\n    display: flex;\n    align-items: center; }\n\n.wrap-table table tbody tr .status .confirmation {\n      position: absolute;\n      top: 50%;\n      left: -2rem;\n      transform: translateY(-50%);\n      display: flex;\n      align-items: flex-end;\n      width: 0.7rem;\n      height: 1.5rem; }\n\n.wrap-table table tbody tr .status .confirmation .fill {\n        width: 100%; }\n\n.wrap-table table tbody tr .status .lock-transaction {\n      position: absolute;\n      left: -2rem;\n      -webkit-mask: url('lock-transaction.svg') no-repeat center;\n              mask: url('lock-transaction.svg') no-repeat center;\n      width: 1.2rem;\n      height: 1.2rem;\n      margin-right: 1.1rem; }\n\n.wrap-table table tbody tr .status .unlock-transaction {\n      position: absolute;\n      left: -2rem;\n      -webkit-mask: url('unlock-transaction.svg') no-repeat center;\n              mask: url('unlock-transaction.svg') no-repeat center;\n      width: 1.2rem;\n      height: 1.2rem;\n      margin-right: 1.1rem; }\n\n.wrap-table table tbody tr .status .position {\n      position: static; }\n\n.wrap-table table tbody tr .status .status-transaction {\n      margin-right: 1rem;\n      width: 1.7rem;\n      height: 1.7rem; }\n\n.wrap-table table tbody tr .status.send .status-transaction {\n      background-color: transparent; }\n\n.wrap-table table tbody tr .status.send .status-transaction::after {\n      display: block;\n      content: '';\n      background: url('send-red.svg') no-repeat center;\n      width: 13px;\n      height: 13px; }\n\n.wrap-table table tbody tr .status.received .status-transaction {\n      background-color: transparent; }\n\n.wrap-table table tbody tr .status.received .status-transaction::after {\n      display: block;\n      content: '';\n      background: url('receive-green.svg') no-repeat center;\n      width: 13px;\n      height: 13px; }\n\n.wrap-table table tbody tr .remote-address {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 25vw; }\n\n.wrap-table table tbody tr:not(.transaction-details) {\n    cursor: pointer; }\n\n.wrap-table table tbody tr.transaction-details {\n    transition: 0.5s height linear, 0s font-size;\n    transition-delay: 0s, 0.5s;\n    height: 0; }\n\n.wrap-table table tbody tr.transaction-details.open {\n      height: 16.2rem; }\n\n.wrap-table table tbody tr.transaction-details td {\n      position: relative;\n      overflow: hidden;\n      line-height: inherit;\n      padding-top: 0;\n      padding-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9EOlxcUHJvamVjdFxcV09SS19ORVdcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxoaXN0b3J5XFxoaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYSxFQUFBOztBQURmO0lBVVUsZ0JBQWdCLEVBQUE7O0FBVjFCO0lBY1Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUIsRUFBQTs7QUFoQjdCO01BbUJZLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsV0FBVztNQUNYLDJCQUEyQjtNQUMzQixhQUFhO01BQ2IscUJBQXFCO01BQ3JCLGFBQWE7TUFDYixjQUFjLEVBQUE7O0FBMUIxQjtRQTZCYyxXQUFXLEVBQUE7O0FBN0J6QjtNQWtDWSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLDBEQUFtRTtjQUFuRSxrREFBbUU7TUFDbkUsYUFBYTtNQUNiLGNBQWM7TUFDZCxvQkFBb0IsRUFBQTs7QUF2Q2hDO01BMkNZLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsNERBQXFFO2NBQXJFLG9EQUFxRTtNQUNyRSxhQUFhO01BQ2IsY0FBYztNQUNkLG9CQUFvQixFQUFBOztBQWhEaEM7TUFvRFksZ0JBQWdCLEVBQUE7O0FBcEQ1QjtNQXdEWSxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLGNBQWMsRUFBQTs7QUExRDFCO01BK0RjLDZCQUE2QixFQUFBOztBQS9EM0M7TUFtRWMsY0FBYztNQUNkLFdBQVU7TUFDVixnREFBa0U7TUFDbEUsV0FBVztNQUNYLFlBQVksRUFBQTs7QUF2RTFCO01BNkVjLDZCQUE2QixFQUFBOztBQTdFM0M7TUFpRmMsY0FBYztNQUNkLFdBQVU7TUFDVixxREFBdUU7TUFDdkUsV0FBVztNQUNYLFlBQVksRUFBQTs7QUFyRjFCO0lBMkZVLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZUFBZSxFQUFBOztBQTdGekI7SUFpR1UsZUFBZSxFQUFBOztBQWpHekI7SUFzR1UsNENBQTRDO0lBQzVDLDBCQUEwQjtJQUMxQixTQUFTLEVBQUE7O0FBeEduQjtNQTJHWSxlQUFlLEVBQUE7O0FBM0czQjtNQStHWSxrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLG9CQUFvQjtNQUNwQixjQUFjO01BQ2QsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi53cmFwLXRhYmxlIHtcclxuICBtYXJnaW46IC0zcmVtO1xyXG5cclxuICB0YWJsZSB7XHJcblxyXG4gICAgdGJvZHkge1xyXG5cclxuICAgICAgdHIge1xyXG5cclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDEwcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAuY29uZmlybWF0aW9uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogLTJyZW07XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICB3aWR0aDogMC43cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcclxuXHJcbiAgICAgICAgICAgIC5maWxsIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5sb2NrLXRyYW5zYWN0aW9uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAtMnJlbTtcclxuICAgICAgICAgICAgbWFzazogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9sb2NrLXRyYW5zYWN0aW9uLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMnJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51bmxvY2stdHJhbnNhY3Rpb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0ycmVtO1xyXG4gICAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3VubG9jay10cmFuc2FjdGlvbi5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4ycmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucG9zaXRpb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zdGF0dXMtdHJhbnNhY3Rpb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjdyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMS43cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuc2VuZCAge1xyXG4gICAgICAgICAgICAuc3RhdHVzLXRyYW5zYWN0aW9uIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnN0YXR1cy10cmFuc2FjdGlvbjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDp1cmwoXCIuLi8uLi9hc3NldHMvaWNvbnMvc2VuZC1yZWQuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEzcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5yZWNlaXZlZCB7XHJcbiAgICAgICAgICAgIC5zdGF0dXMtdHJhbnNhY3Rpb24ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3RhdHVzLXRyYW5zYWN0aW9uOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgY29udGVudDonJztcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnVybChcIi4uLy4uL2Fzc2V0cy9pY29ucy9yZWNlaXZlLWdyZWVuLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJlbW90ZS1hZGRyZXNzIHtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgIG1heC13aWR0aDogMjV2dztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bm90KC50cmFuc2FjdGlvbi1kZXRhaWxzKSB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnRyYW5zYWN0aW9uLWRldGFpbHMge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGhlaWdodCBsaW5lYXIsIDBzIGZvbnQtc2l6ZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgaGVpZ2h0IGxpbmVhciwgMHMgZm9udC1zaXplO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDAuNXM7XHJcbiAgICAgICAgICBoZWlnaHQ6IDA7XHJcblxyXG4gICAgICAgICAgJi5vcGVuIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNi4ycmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(route, variablesService) {
        this.route = route;
        this.variablesService = variablesService;
        this.openedDetails = false;
        this.calculatedWidth = [];
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentRouting = this.route.parent.params.subscribe(function () {
            _this.openedDetails = false;
        });
    };
    HistoryComponent.prototype.ngAfterViewChecked = function () {
        this.calculateWidth();
    };
    HistoryComponent.prototype.getHeight = function (item) {
        if ((this.variablesService.height_app - item.height >= 10 && item.height !== 0) || (item.is_mining === true && item.height === 0)) {
            return 100;
        }
        else {
            if (item.height === 0 || this.variablesService.height_app - item.height < 0) {
                return 0;
            }
            else {
                return (this.variablesService.height_app - item.height) * 10;
            }
        }
    };
    HistoryComponent.prototype.openDetails = function (tx_hash) {
        if (tx_hash === this.openedDetails) {
            this.openedDetails = false;
        }
        else {
            this.openedDetails = tx_hash;
        }
    };
    HistoryComponent.prototype.calculateWidth = function () {
        this.calculatedWidth = [];
        this.calculatedWidth.push(this.head.nativeElement.childNodes[0].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[1].clientWidth + this.head.nativeElement.childNodes[2].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[3].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[4].clientWidth);
    };
    HistoryComponent.prototype.time = function (item) {
        var now = new Date().getTime();
        var unlockTime = now + ((item.unlock_time - this.variablesService.height_max) * 60 * 1000);
        return unlockTime;
    };
    HistoryComponent.prototype.isLocked = function (item) {
        if ((item.unlock_time > 500000000) && (item.unlock_time > new Date().getTime() / 1000)) {
            return true;
        }
        if ((item.unlock_time < 500000000) && (item.unlock_time > this.variablesService.height_max)) {
            return true;
        }
        return false;
    };
    HistoryComponent.prototype.ngOnDestroy = function () {
        this.parentRouting.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('head'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HistoryComponent.prototype, "head", void 0);
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/history/history.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"wrap-login\">\r\n\r\n    <div class=\"logo\" [innerHTML]=\"logo | safeHTML\"></div>\r\n\r\n    <form *ngIf=\"type === 'reg'\" class=\"form-login\" [formGroup]=\"regForm\" (ngSubmit)=\"onSubmitCreatePass()\">\r\n\r\n      <div class=\"input-block\">\r\n        <label for=\"master-pass\">{{ 'LOGIN.SETUP_MASTER_PASS' | translate }}</label>\r\n        <input type=\"password\" id=\"master-pass\" formControlName=\"password\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n        <div class=\"error-block\" *ngIf=\"regForm.controls['password'].dirty && regForm.controls['password'].errors\">\r\n          <div *ngIf=\"regForm.controls['password'].errors.pattern\">\r\n            {{ 'ERRORS.WRONG_PASSWORD' | translate }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-block\">\r\n        <label for=\"confirm-pass\">{{ 'LOGIN.SETUP_CONFIRM_PASS' | translate }}</label>\r\n        <input type=\"password\" id=\"confirm-pass\" formControlName=\"confirmation\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n        <div class=\"error-block\" *ngIf=\"regForm.controls['password'].dirty && regForm.controls['confirmation'].dirty && regForm.errors\">\r\n          <div *ngIf=\"regForm.errors['mismatch']\">\r\n            {{ 'LOGIN.FORM_ERRORS.MISMATCH' | translate }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"wrap-button\">\r\n        <button type=\"submit\" class=\"blue-button\" [disabled]=\"!regForm.controls['password'].value.length || !regForm.controls['confirmation'].value.length || (regForm.errors && regForm.errors['mismatch']) || regForm.controls['password'].errors\">{{ 'LOGIN.BUTTON_NEXT' | translate }}</button>\r\n        <button type=\"button\" class=\"blue-button\" (click)=\"onSkipCreatePass()\" [disabled]=\"regForm.controls['password'].value.length || regForm.controls['confirmation'].value.length\">{{ 'LOGIN.BUTTON_SKIP' | translate }}</button>\r\n      </div>\r\n\r\n    </form>\r\n\r\n    <form *ngIf=\"type !== 'reg'\" class=\"form-login\" [formGroup]=\"authForm\" (ngSubmit)=\"onSubmitAuthPass()\">\r\n\r\n      <div class=\"input-block\">\r\n        <label for=\"master-pass-login\">{{ 'LOGIN.MASTER_PASS' | translate }}</label>\r\n        <input type=\"password\" id=\"master-pass-login\" formControlName=\"password\" autofocus (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n      </div>\r\n\r\n      <div class=\"wrap-button\">\r\n        <button type=\"submit\" class=\"blue-button\">{{ 'LOGIN.BUTTON_NEXT' | translate }}</button>\r\n        <button type=\"button\" class=\"blue-button_reset\" (click)=\"dropSecureAppData()\">{{ 'LOGIN.BUTTON_RESET' | translate }}</button>   <!--Add \"Reset\"-button-->\r\n      </div>\r\n\r\n    </form>\r\n\r\n  </div>\r\n\r\n  <div class=\"synchronization-status\" [ngStyle]=\"{'align-items': variablesService.daemon_state === 1 || variablesService.daemon_state === 6 ? 'flex-start' : 'center'}\">\r\n    <div class=\"status-container\">\r\n    <span class=\"offline\" *ngIf=\"variablesService.daemon_state === 0\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.OFFLINE' | translate }}\r\n    </span>\r\n      <span class=\"syncing\" *ngIf=\"variablesService.daemon_state === 1\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.SYNCING' | translate }} {{ variablesService.height_app }}{{ 'SIDEBAR.SYNCHRONIZATION.SLASH' | translate }}{{ variablesService.height_max }}\r\n    </span>\r\n      <span class=\"online\" *ngIf=\"variablesService.daemon_state === 2\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.ONLINE' | translate }}\r\n    </span>\r\n      <span class=\"loading\" *ngIf=\"variablesService.daemon_state === 3\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.LOADING' | translate }}\r\n    </span>\r\n      <span class=\"offline\" *ngIf=\"variablesService.daemon_state === 4\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.ERROR' | translate }}\r\n    </span>\r\n      <span class=\"online\" *ngIf=\"variablesService.daemon_state === 5\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.COMPLETE' | translate }}\r\n    </span>\r\n      <span class=\"syncing\" *ngIf=\"variablesService.daemon_state === 6\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.DOWNLOADING' | translate }} {{ variablesService.downloaded }}{{ 'SIDEBAR.SYNCHRONIZATION.SLASH' | translate }}{{ variablesService.total }}{{ 'SIDEBAR.SYNCHRONIZATION.MB' | translate }}\r\n    </span>\r\n      <div class=\"progress-bar-container\" *ngIf=\"variablesService.daemon_state === 1 || variablesService.daemon_state === 3\">\r\n        <div class=\"syncing\" *ngIf=\"variablesService.daemon_state === 1\">\r\n          <div class=\"progress-bar\">\r\n            <div class=\"fill\" [style.width]=\"variablesService.sync.progress_value + '%'\"></div>\r\n          </div>\r\n          <div class=\"progress-percent\">{{ variablesService.sync.progress_value_text }}%</div>\r\n        </div>\r\n        <div class=\"loading\" *ngIf=\"variablesService.daemon_state === 3\"></div>\r\n      </div>\r\n\r\n      <div class=\"progress-bar-container\" *ngIf=\"variablesService.daemon_state === 6\">\r\n        <div class=\"syncing downloading\" *ngIf=\"variablesService.daemon_state === 6\">\r\n          <div class=\"progress-bar\">\r\n            <div class=\"fill\" [style.width]=\"variablesService.download.progress_value + '%'\"></div>\r\n          </div>\r\n          <div class=\"progress-percent\">{{ variablesService.download.progress_value_text }}%</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"update-container\" *ngIf=\"(variablesService.daemon_state === 0 || variablesService.daemon_state === 2) && [2, 3, 4].indexOf(variablesService.last_build_displaymode) !== -1\">\r\n      <ng-container *ngIf=\"variablesService.last_build_displaymode === 2\">\r\n        <div class=\"update-text standard\">\r\n          <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.STANDARD' | translate }}</span>\r\n        </div>\r\n        <i class=\"icon update standard\" tooltip=\"{{ 'SIDEBAR.UPDATE.STANDARD_TOOLTIP' | translate }}\" placement=\"right-bottom\" tooltipClass=\"update-tooltip\" [delay]=\"500\"></i>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"variablesService.last_build_displaymode === 3\">\r\n        <div class=\"update-text important\">\r\n          <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.IMPORTANT' | translate }}</span>\r\n          <br>\r\n          <span style=\"font-size: 1rem\">{{ 'SIDEBAR.UPDATE.IMPORTANT_HINT' | translate }}</span>\r\n        </div>\r\n        <i class=\"icon update important\" tooltip=\"{{ 'SIDEBAR.UPDATE.IMPORTANT_TOOLTIP' | translate }}\" placement=\"right-bottom\" tooltipClass=\"update-tooltip important\" [delay]=\"500\"></i>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"variablesService.last_build_displaymode === 4\">\r\n        <div class=\"update-text critical\">\r\n          <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.CRITICAL' | translate }}</span>\r\n          <br>\r\n          <span style=\"font-size: 1rem\">{{ 'SIDEBAR.UPDATE.IMPORTANT_HINT' | translate }}</span>\r\n        </div>\r\n        <i class=\"icon update critical\" tooltip=\"{{ 'SIDEBAR.UPDATE.CRITICAL_TOOLTIP' | translate }}\" placement=\"right-bottom\" tooltipClass=\"update-tooltip critical\" [delay]=\"500\"></i>\r\n      </ng-container>\r\n    </div>\r\n    <div class=\"update-container\" *ngIf=\"variablesService.daemon_state === 2 && variablesService.net_time_delta_median !== 0\">\r\n      <div class=\"update-text time\">\r\n        <span>{{ 'SIDEBAR.UPDATE.TIME' | translate }}</span>\r\n      </div>\r\n      <i class=\"icon time\" tooltip=\"{{ 'SIDEBAR.UPDATE.TIME_TOOLTIP' | translate }}\" placement=\"right-bottom\" tooltipClass=\"update-tooltip important\" [delay]=\"500\"></i>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n  :host .content {\n    display: flex; }\n  :host .content .wrap-login {\n      margin: auto;\n      width: 100%;\n      max-width: 40rem; }\n  :host .content .wrap-login .logo {\n        display: flex;\n        justify-content: center; }\n  :host .content .wrap-login .logo::ng-deep svg {\n          width: 15rem; }\n  :host .content .wrap-login .form-login {\n        display: flex;\n        flex-direction: column; }\n  :host .content .wrap-login .form-login .wrap-button {\n          display: flex;\n          align-items: center;\n          justify-content: space-between; }\n  :host .content .wrap-login .form-login .wrap-button button {\n            margin: 2.5rem 0; }\n  :host .content .wrap-login .form-login button {\n          margin: 2.5rem auto;\n          width: 100%;\n          max-width: 15rem; }\n  .synchronization-status {\n  position: absolute;\n  bottom: 3rem;\n  left: 3rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFByb2plY3RcXFdPUktfTkVXXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVksRUFBQTtFQUxkO0lBUUksYUFBYSxFQUFBO0VBUmpCO01BV00sWUFBWTtNQUNaLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTtFQWJ0QjtRQWdCUSxhQUFhO1FBQ2IsdUJBQXVCLEVBQUE7RUFqQi9CO1VBb0JVLFlBQVksRUFBQTtFQXBCdEI7UUF5QlEsYUFBYTtRQUNiLHNCQUFzQixFQUFBO0VBMUI5QjtVQTZCVSxhQUFhO1VBQ2IsbUJBQW1CO1VBQ25CLDhCQUE4QixFQUFBO0VBL0J4QztZQWtDWSxnQkFBZ0IsRUFBQTtFQWxDNUI7VUF1Q1UsbUJBQW1CO1VBQ25CLFdBQVc7VUFDWCxnQkFBZ0IsRUFBQTtFQU0xQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAud3JhcC1sb2dpbiB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogNDByZW07XHJcblxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgJjo6bmctZGVlcCBzdmcge1xyXG4gICAgICAgICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmZvcm0tbG9naW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgLndyYXAtYnV0dG9uIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMi41cmVtIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgbWFyZ2luOiAyLjVyZW0gYXV0bztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnN5bmNocm9uaXphdGlvbi1zdGF0dXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDNyZW07XHJcbiAgbGVmdDogM3JlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
/* harmony import */ var _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/icons/icons.json */ "./src/assets/icons/icons.json");
var _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/icons/icons.json */ "./src/assets/icons/icons.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, backend, variablesService, modalService, ngZone) {
        this.route = route;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.regForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.variablesService.pattern)),
            confirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        }, [function (g) {
                return g.get('password').value === g.get('confirmation').value ? null : { 'mismatch': true };
            }
        ]);
        this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.type = 'reg';
        this.logo = _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_8__.logo;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.type) {
                _this.type = params.type;
            }
        });
    };
    LoginComponent.prototype.onSubmitCreatePass = function () {
        var _this = this;
        if (this.regForm.valid) {
            this.variablesService.appPass = this.regForm.get('password').value; // the pass what was written in input of login form by user
            this.backend.setMasterPassword({ pass: this.variablesService.appPass }, function (status, data) {
                if (status) {
                    _this.backend.storeSecureAppData({ pass: _this.variablesService.appPass });
                    _this.variablesService.appLogin = true;
                    _this.variablesService.dataIsLoaded = true;
                    if (_this.variablesService.settings.appLockTime) {
                        _this.variablesService.startCountdown();
                    }
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/']);
                    });
                }
                else {
                    console.log(data['error_code']);
                }
            });
        }
    };
    LoginComponent.prototype.onSkipCreatePass = function () {
        var _this = this;
        this.variablesService.appPass = '';
        this.ngZone.run(function () {
            _this.variablesService.appLogin = true;
            _this.router.navigate(['/']);
        });
    };
    LoginComponent.prototype.dropSecureAppData = function () {
        var _this = this;
        this.backend.dropSecureAppData(function () {
            _this.onSkipCreatePass();
        });
        this.variablesService.wallets = [];
        this.variablesService.contacts = [];
    };
    LoginComponent.prototype.onSubmitAuthPass = function () {
        var _this = this;
        if (this.authForm.valid) {
            this.variablesService.appPass = this.authForm.get('password').value;
            if (this.variablesService.dataIsLoaded) {
                this.backend.checkMasterPassword({ pass: this.variablesService.appPass }, function (status, data) {
                    if (status) {
                        _this.variablesService.appLogin = true;
                        if (_this.variablesService.settings.appLockTime) {
                            _this.variablesService.startCountdown();
                        }
                        _this.ngZone.run(function () {
                            _this.router.navigate(['/'], { queryParams: { prevUrl: 'login' } });
                        });
                    }
                });
            }
            else {
                this.getData(this.variablesService.appPass);
            }
        }
    };
    LoginComponent.prototype.getData = function (appPass) {
        var _this = this;
        this.backend.getSecureAppData({ pass: appPass }, function (status, data) {
            if (!data.error_code) {
                _this.variablesService.appLogin = true;
                _this.variablesService.dataIsLoaded = true;
                if (_this.variablesService.settings.appLockTime) {
                    _this.variablesService.startCountdown();
                }
                _this.variablesService.appPass = appPass;
                var isEmptyObject = Object.keys(data).length === 0 && data.constructor === Object;
                if (_this.variablesService.wallets.length) {
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/wallet/' + _this.variablesService.wallets[0].wallet_id]);
                    });
                    return;
                }
                if (data.hasOwnProperty('contacts')) {
                    if (Object.keys(data['contacts']).length !== 0) {
                        data['contacts'].map(function (contact) {
                            _this.variablesService.contacts.push(contact);
                        });
                    }
                }
                if (data.hasOwnProperty('wallets')) {
                    if (Object.keys(data['wallets']).length !== 0) {
                        _this.getWalletData(data['wallets']);
                    }
                    else {
                        _this.ngZone.run(function () {
                            _this.router.navigate(['/']);
                        });
                    }
                }
                if (!data.hasOwnProperty('wallets') && !data.hasOwnProperty('contacts')) {
                    if (data.length !== 0 && !isEmptyObject) {
                        _this.getWalletData(data);
                    }
                    else {
                        _this.ngZone.run(function () {
                            _this.router.navigate(['/']);
                        });
                    }
                }
            }
        });
    };
    LoginComponent.prototype.getWalletData = function (walletData) {
        var _this = this;
        var openWallets = 0;
        var runWallets = 0;
        walletData.forEach(function (wallet, wallet_index) {
            _this.backend.openWallet(wallet.path, wallet.pass, _this.variablesService.count, true, function (open_status, open_data, open_error) {
                if (open_status || open_error === 'FILE_RESTORED') {
                    openWallets++;
                    _this.ngZone.run(function () {
                        var new_wallet = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__["Wallet"](open_data.wallet_id, wallet.name, wallet.pass, open_data['wi'].path, open_data['wi'].address, open_data['wi'].balance, open_data['wi'].unlocked_balance, open_data['wi'].mined_total, open_data['wi'].tracking_hey);
                        new_wallet.alias = _this.backend.getWalletAlias(new_wallet.address);
                        if (wallet.staking) {
                            new_wallet.staking = true;
                            _this.backend.startPosMining(new_wallet.wallet_id);
                        }
                        else {
                            new_wallet.staking = false;
                        }
                        new_wallet.is_auditable = open_data['wi'].is_auditable;
                        new_wallet.is_watch_only = open_data['wi'].is_watch_only;
                        new_wallet.currentPage = 1;
                        new_wallet.exclude_mining_txs = false;
                        if (open_data.recent_history && open_data.recent_history.history) {
                            new_wallet.total_history_item = open_data.recent_history.total_history_items;
                            new_wallet.totalPages = Math.ceil(open_data.recent_history.total_history_items / _this.variablesService.count);
                            new_wallet.totalPages > _this.variablesService.maxPages
                                ? new_wallet.pages = new Array(5).fill(1).map(function (value, index) { return value + index; })
                                : new_wallet.pages = new Array(new_wallet.totalPages).fill(1).map(function (value, index) { return value + index; });
                            new_wallet.prepareHistory(open_data.recent_history.history);
                        }
                        else {
                            new_wallet.total_history_item = 0;
                            new_wallet.pages = new Array(1).fill(1);
                            new_wallet.totalPages = 1;
                        }
                        _this.backend.getContracts(open_data.wallet_id, function (contracts_status, contracts_data) {
                            if (contracts_status && contracts_data.hasOwnProperty('contracts')) {
                                _this.ngZone.run(function () {
                                    new_wallet.prepareContractsAfterOpen(contracts_data.contracts, _this.variablesService.exp_med_ts, _this.variablesService.height_app, _this.variablesService.settings.viewedContracts, _this.variablesService.settings.notViewedContracts);
                                });
                            }
                        });
                        _this.variablesService.wallets.push(new_wallet);
                        if (_this.variablesService.wallets.length === 1) {
                            _this.router.navigate(['/wallet/' + _this.variablesService.wallets[0].wallet_id]);
                        }
                    });
                    _this.backend.runWallet(open_data.wallet_id, function (run_status) {
                        if (run_status) {
                            runWallets++;
                        }
                        else {
                            if (wallet_index === walletData.length - 1 && runWallets === 0) {
                                _this.ngZone.run(function () {
                                    _this.router.navigate(['/']);
                                });
                            }
                        }
                    });
                }
                else {
                    if (wallet_index === walletData.length - 1 && openWallets === 0) {
                        _this.ngZone.run(function () {
                            _this.router.navigate(['/']);
                        });
                    }
                }
            });
        });
    };
    LoginComponent.prototype.getUpdate = function () {
        this.backend.openUrlInBrowser(_shared_constants__WEBPACK_IMPORTED_MODULE_7__["DOWNLOADS_PAGE_URL"]);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.queryRouting.unsubscribe();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\" *ngIf=\"variablesService.wallets.length > 0 && prevUrl !== 'login'\">\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"add-wallet\">\r\n    <h3 class=\"add-wallet-title\">{{ 'MAIN.TITLE' | translate }}</h3>\r\n    <div class=\"add-wallet-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" [routerLink]=\"['/create']\">{{ 'MAIN.BUTTON_NEW_WALLET' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"openWallet()\">{{ 'MAIN.BUTTON_OPEN_WALLET' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button\" [routerLink]=\"['/restore']\">{{ 'MAIN.BUTTON_RESTORE_BACKUP' | translate }}</button>\r\n    </div>\r\n    <div class=\"add-wallet-help\" (click)=\"openInBrowser()\">\r\n      <i class=\"icon\"></i><span>{{ 'MAIN.HELP' | translate }}</span>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex: 1 0 auto;\n  padding: 3rem; }\n\n.content {\n  padding: 3rem;\n  min-height: 100%; }\n\n.content .head {\n    justify-content: flex-end; }\n\n.add-wallet .add-wallet-title {\n  margin-bottom: 1rem; }\n\n.add-wallet .add-wallet-buttons {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 -0.5rem;\n  padding: 1.5rem 0; }\n\n.add-wallet .add-wallet-buttons button {\n    flex: 1 0 auto;\n    margin: 0 0.5rem; }\n\n.add-wallet .add-wallet-help {\n  display: flex;\n  cursor: pointer;\n  font-size: 1.3rem;\n  line-height: 1.5rem; }\n\n.add-wallet .add-wallet-help .icon {\n    -webkit-mask: url('howto.svg') no-repeat center;\n            mask: url('howto.svg') no-repeat center;\n    margin-right: 0.8rem;\n    width: 1.5rem;\n    height: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9EOlxcUHJvamVjdFxcV09SS19ORVdcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFGbEI7SUFLSSx5QkFBeUIsRUFBQTs7QUFJN0I7RUFHSSxtQkFBbUIsRUFBQTs7QUFIdkI7RUFPSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBWHJCO0lBY00sY0FBYztJQUNkLGdCQUFnQixFQUFBOztBQWZ0QjtFQW9CSSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUF2QnZCO0lBMEJNLCtDQUF3RDtZQUF4RCx1Q0FBd0Q7SUFDeEQsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZmxleDogMSAwIGF1dG87XHJcbiAgcGFkZGluZzogM3JlbTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuXHJcbiAgLmhlYWQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbn1cclxuXHJcbi5hZGQtd2FsbGV0IHtcclxuXHJcbiAgLmFkZC13YWxsZXQtdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5hZGQtd2FsbGV0LWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDAgLTAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgICBtYXJnaW46IDAgMC41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFkZC13YWxsZXQtaGVscCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgbWFzazogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9ob3d0by5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMC44cmVtO1xyXG4gICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainComponent = /** @class */ (function () {
    function MainComponent(route, router, location, backend, variablesService, ngZone, translate) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.backend = backend;
        this.variablesService = variablesService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.prevUrl = '';
    }
    MainComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.queryParams && this.route.snapshot.queryParams.prevUrl) {
            this.prevUrl = this.route.snapshot.queryParams.prevUrl;
        }
    };
    MainComponent.prototype.openWallet = function () {
        var _this = this;
        this.backend.openFileDialog(this.translate.instant('MAIN.CHOOSE_PATH'), '*', this.variablesService.settings.default_path, function (file_status, file_data) {
            if (file_status) {
                _this.variablesService.settings.default_path = file_data.path.substr(0, file_data.path.lastIndexOf('/'));
                _this.ngZone.run(function () {
                    _this.router.navigate(['/open'], { queryParams: { path: file_data.path } });
                });
            }
            else {
                console.log(file_data['error_code']);
            }
        });
    };
    MainComponent.prototype.openInBrowser = function () {
        this.backend.openUrlInBrowser(_shared_constants__WEBPACK_IMPORTED_MODULE_6__["CREATE_NEW_WALLET_HELP_PAGE"]);
    };
    MainComponent.prototype.back = function () {
        this.location.back();
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-table\">\r\n\r\n  <table class=\"messages-table\">\r\n    <thead>\r\n    <tr>\r\n      <th>{{ 'MESSAGES.ADDRESS' | translate }}</th>\r\n      <th>{{ 'MESSAGES.MESSAGE' | translate }}</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let message of messages\" [routerLink]=\"[message.address]\">\r\n      <td>\r\n        <span>{{message.address}}</span>\r\n        <i class=\"icon\" *ngIf=\"message.is_new\"></i>\r\n      </td>\r\n      <td>\r\n        <span>{{message.message}}</span>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/messages/messages.component.scss":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.wrap-table {\n  margin: -3rem; }\n\n.wrap-table table tbody tr td:first-child {\n    position: relative;\n    padding-right: 5rem;\n    width: 18rem; }\n\n.wrap-table table tbody tr td:first-child span {\n      display: block;\n      line-height: 3.5rem;\n      max-width: 10rem; }\n\n.wrap-table table tbody tr td:first-child .icon {\n      position: absolute;\n      top: 50%;\n      right: 1rem;\n      transform: translateY(-50%);\n      display: block;\n      -webkit-mask: url('alert.svg') no-repeat 0;\n              mask: url('alert.svg') no-repeat 0;\n      width: 1.2rem;\n      height: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvRDpcXFByb2plY3RcXFdPUktfTkVXXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcbWVzc2FnZXNcXG1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYSxFQUFBOztBQURmO0lBWVksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7O0FBZHhCO01BaUJjLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsZ0JBQWdCLEVBQUE7O0FBbkI5QjtNQXVCYyxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFdBQVc7TUFDWCwyQkFBMkI7TUFDM0IsY0FBYztNQUNkLDBDQUFtRDtjQUFuRCxrQ0FBbUQ7TUFDbkQsYUFBYTtNQUNiLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ud3JhcC10YWJsZSB7XHJcbiAgbWFyZ2luOiAtM3JlbTtcclxuXHJcbiAgdGFibGUge1xyXG5cclxuICAgIHRib2R5IHtcclxuXHJcbiAgICAgIHRyIHtcclxuXHJcbiAgICAgICAgdGQge1xyXG5cclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxOHJlbTtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzLjVyZW07XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICByaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFzazogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9hbGVydC5zdmcpIG5vLXJlcGVhdCAwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
        this.messages = [
            {
                is_new: true,
                address: '@bitmap',
                message: 'No more miners for you!'
            },
            {
                is_new: false,
                address: 'Hjkwey36gHasdhkajshd4bxnb5mcvowyefb2633FdsFGGWbb',
                message: 'Hey! What’s with our BBR deal?'
            },
            {
                is_new: false,
                address: '@john',
                message: 'I’m coming!'
            }
        ];
    }
    MessagesComponent.prototype.ngOnInit = function () { };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/messages/messages.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/open-wallet-modal/open-wallet-modal.component.html":
/*!********************************************************************!*\
  !*** ./src/app/open-wallet-modal/open-wallet-modal.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <h3 class=\"title\">{{ 'OPEN_WALLET.MODAL.TITLE' | translate }}</h3>\r\n  <form class=\"open-form\" (ngSubmit)=\"openWallet()\">\r\n    <div class=\"wallet-path\">{{ wallet.name }}</div>\r\n    <div class=\"wallet-path\">{{ wallet.path }}</div>\r\n    <div class=\"input-block\" *ngIf=\"!wallet.notFound\">\r\n      <label for=\"password\">{{ 'OPEN_WALLET.MODAL.LABEL' | translate }}</label>\r\n      <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"wallet.pass\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\"/>\r\n    </div>\r\n    <div class=\"error-block\" *ngIf=\"wallet.notFound\">\r\n      {{ 'OPEN_WALLET.MODAL.NOT_FOUND' | translate }}\r\n    </div>\r\n    <div class=\"wrap-button\">\r\n      <button type=\"submit\" class=\"blue-button\" [disabled]=\"wallet.notFound\">{{ 'OPEN_WALLET.MODAL.OPEN' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"skipWallet()\">{{ 'OPEN_WALLET.MODAL.SKIP' | translate }}</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/open-wallet-modal/open-wallet-modal.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/open-wallet-modal/open-wallet-modal.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.25); }\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  background-position: center;\n  background-size: 200%;\n  padding: 2rem;\n  min-width: 34rem;\n  max-width: 64rem; }\n\n.modal .title {\n    font-size: 1.8rem;\n    text-align: center; }\n\n.modal .open-form .wallet-path {\n    font-size: 1.3rem;\n    margin: 5rem 0 2rem;\n    word-wrap: break-word;\n    line-height: 2rem; }\n\n.modal .open-form .wrap-button {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 2rem -2rem 0; }\n\n.modal .open-form .wrap-button button {\n      flex: 1 0 0;\n      margin: 0 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blbi13YWxsZXQtbW9kYWwvRDpcXFByb2plY3RcXFdPUktfTkVXXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcb3Blbi13YWxsZXQtbW9kYWxcXG9wZW4td2FsbGV0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQ0FBcUMsRUFBQTs7QUFHdkM7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFQbEI7SUFVSSxpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7O0FBWHRCO0lBaUJNLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQixFQUFBOztBQXBCdkI7SUF3Qk0sYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsb0JBQW9CLEVBQUE7O0FBM0IxQjtNQThCUSxXQUFXO01BQ1gsY0FBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvb3Blbi13YWxsZXQtbW9kYWwvb3Blbi13YWxsZXQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIG1pbi13aWR0aDogMzRyZW07XHJcbiAgbWF4LXdpZHRoOiA2NHJlbTtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm9wZW4tZm9ybSB7XHJcblxyXG4gICAgLndhbGxldC1wYXRoIHtcclxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgIG1hcmdpbjogNXJlbSAwIDJyZW07XHJcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLndyYXAtYnV0dG9uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBtYXJnaW46IDJyZW0gLTJyZW0gMDtcclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZmxleDogMSAwIDA7XHJcbiAgICAgICAgbWFyZ2luOiAwIDJyZW0gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/open-wallet-modal/open-wallet-modal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/open-wallet-modal/open-wallet-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: OpenWalletModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenWalletModalComponent", function() { return OpenWalletModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OpenWalletModalComponent = /** @class */ (function () {
    function OpenWalletModalComponent(variablesService, backend, translate, modalService, ngZone) {
        this.variablesService = variablesService;
        this.backend = backend;
        this.translate = translate;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.wallet = {
            name: '',
            path: '',
            pass: '',
            notFound: false,
            emptyPass: false
        };
    }
    OpenWalletModalComponent.prototype.ngOnInit = function () {
        if (this.wallets.length) {
            this.wallet = this.wallets[0];
            this.wallet.pass = '';
        }
    };
    OpenWalletModalComponent.prototype.openWallet = function () {
        var _this = this;
        if (this.wallets.length === 0) {
            return;
        }
        this.backend.openWallet(this.wallet.path, this.wallet.pass, this.variablesService.count, false, function (open_status, open_data, open_error) {
            if (open_error && open_error === 'FILE_NOT_FOUND') {
                _this.ngZone.run(function () {
                    _this.wallet.notFound = true;
                });
                var error_translate = _this.translate.instant('OPEN_WALLET.FILE_NOT_FOUND1');
                error_translate += ':<br>' + _this.wallet.path;
                error_translate += _this.translate.instant('OPEN_WALLET.FILE_NOT_FOUND2');
                _this.modalService.prepareModal('error', error_translate);
            }
            else {
                if (open_status || open_error === 'FILE_RESTORED') {
                    var exists_1 = false;
                    _this.variablesService.wallets.forEach(function (wallet) {
                        if (wallet.address === open_data['wi'].address) {
                            exists_1 = true;
                        }
                    });
                    if (exists_1) {
                        _this.modalService.prepareModal('error', 'OPEN_WALLET.WITH_ADDRESS_ALREADY_OPEN');
                        _this.backend.closeWallet(open_data.wallet_id);
                    }
                    else {
                        var new_wallet_1 = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_2__["Wallet"](open_data.wallet_id, _this.wallet.name, _this.wallet.pass, open_data['wi'].path, open_data['wi'].address, open_data['wi'].balance, open_data['wi'].unlocked_balance, open_data['wi'].mined_total, open_data['wi'].tracking_hey);
                        new_wallet_1.alias = _this.backend.getWalletAlias(new_wallet_1.address);
                        new_wallet_1.is_auditable = open_data['wi'].is_auditable;
                        new_wallet_1.is_watch_only = open_data['wi'].is_watch_only;
                        new_wallet_1.currentPage = 1;
                        new_wallet_1.exclude_mining_txs = false;
                        if (open_data.recent_history && open_data.recent_history.history) {
                            new_wallet_1.total_history_item = open_data.recent_history.total_history_items;
                            new_wallet_1.totalPages = Math.ceil(open_data.recent_history.total_history_items / _this.variablesService.count);
                            new_wallet_1.totalPages > _this.variablesService.maxPages
                                ? new_wallet_1.pages = new Array(5).fill(1).map(function (value, index) { return value + index; })
                                : new_wallet_1.pages = new Array(new_wallet_1.totalPages).fill(1).map(function (value, index) { return value + index; });
                            new_wallet_1.prepareHistory(open_data.recent_history.history);
                        }
                        else {
                            new_wallet_1.total_history_item = 0;
                            new_wallet_1.pages = new Array(1).fill(1);
                            new_wallet_1.totalPages = 1;
                        }
                        _this.backend.getContracts(open_data.wallet_id, function (contracts_status, contracts_data) {
                            if (contracts_status && contracts_data.hasOwnProperty('contracts')) {
                                _this.ngZone.run(function () {
                                    new_wallet_1.prepareContractsAfterOpen(contracts_data.contracts, _this.variablesService.exp_med_ts, _this.variablesService.height_app, _this.variablesService.settings.viewedContracts, _this.variablesService.settings.notViewedContracts);
                                });
                            }
                        });
                        _this.variablesService.wallets.push(new_wallet_1);
                        _this.backend.runWallet(open_data.wallet_id);
                        _this.skipWallet();
                    }
                }
            }
        });
    };
    OpenWalletModalComponent.prototype.skipWallet = function () {
        var _this = this;
        this.ngZone.run(function () {
            if (_this.wallets.length) {
                _this.wallets.splice(0, 1);
                _this.ngOnInit();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OpenWalletModalComponent.prototype, "wallets", void 0);
    OpenWalletModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-wallet-modal',
            template: __webpack_require__(/*! ./open-wallet-modal.component.html */ "./src/app/open-wallet-modal/open-wallet-modal.component.html"),
            styles: [__webpack_require__(/*! ./open-wallet-modal.component.scss */ "./src/app/open-wallet-modal/open-wallet-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], OpenWalletModalComponent);
    return OpenWalletModalComponent;
}());



/***/ }),

/***/ "./src/app/open-wallet/open-wallet.component.html":
/*!********************************************************!*\
  !*** ./src/app/open-wallet/open-wallet.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/main']\">{{ 'BREADCRUMBS.ADD_WALLET' | translate }}</span>\r\n      <span>{{ 'BREADCRUMBS.OPEN_WALLET' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" [routerLink]=\"['/main']\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-open\" [formGroup]=\"openForm\">\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"wallet-name\">{{ 'OPEN_WALLET.NAME' | translate }}</label>\r\n      <input type=\"text\" id=\"wallet-name\" formControlName=\"name\" [maxLength]=\"variablesService.maxWalletNameLength\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"openForm.controls['name'].invalid && (openForm.controls['name'].dirty || openForm.controls['name'].touched)\">\r\n        <div *ngIf=\"openForm.controls['name'].errors['required']\">\r\n          {{ 'OPEN_WALLET.FORM_ERRORS.NAME_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"openForm.controls['name'].errors['duplicate']\">\r\n          {{ 'OPEN_WALLET.FORM_ERRORS.NAME_DUPLICATE' | translate }}\r\n        </div>\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"openForm.get('name').value.length >= variablesService.maxWalletNameLength\">\r\n        {{ 'OPEN_WALLET.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"wallet-password\">{{ 'OPEN_WALLET.PASS' | translate }}</label>\r\n      <input type=\"password\" id=\"wallet-password\" formControlName=\"password\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n    </div>\r\n\r\n    <div class=\"wrap-buttons\">\r\n      <button type=\"button\" class=\"blue-button create-button\" (click)=\"openWallet()\" [disabled]=\"!openForm.valid\">{{ 'OPEN_WALLET.BUTTON' | translate }}</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/open-wallet/open-wallet.component.scss":
/*!********************************************************!*\
  !*** ./src/app/open-wallet/open-wallet.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-open {\n  margin: 2.4rem 0;\n  width: 50%; }\n  .form-open .wrap-buttons {\n    display: flex;\n    margin: 2.5rem -0.7rem; }\n  .form-open .wrap-buttons button {\n      margin: 0 0.7rem; }\n  .form-open .wrap-buttons button.create-button {\n        flex: 1 1 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blbi13YWxsZXQvRDpcXFByb2plY3RcXFdPUktfTkVXXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcb3Blbi13YWxsZXRcXG9wZW4td2FsbGV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTtFQUZaO0lBS0ksYUFBYTtJQUNiLHNCQUFzQixFQUFBO0VBTjFCO01BU00sZ0JBQWdCLEVBQUE7RUFUdEI7UUFZUSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vcGVuLXdhbGxldC9vcGVuLXdhbGxldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLW9wZW4ge1xyXG4gIG1hcmdpbjogMi40cmVtIDA7XHJcbiAgd2lkdGg6IDUwJTtcclxuXHJcbiAgLndyYXAtYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAyLjVyZW0gLTAuN3JlbTtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXJnaW46IDAgMC43cmVtO1xyXG5cclxuICAgICAgJi5jcmVhdGUtYnV0dG9uIHtcclxuICAgICAgICBmbGV4OiAxIDEgNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/open-wallet/open-wallet.component.ts":
/*!******************************************************!*\
  !*** ./src/app/open-wallet/open-wallet.component.ts ***!
  \******************************************************/
/*! exports provided: OpenWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenWalletComponent", function() { return OpenWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OpenWalletComponent = /** @class */ (function () {
    function OpenWalletComponent(route, router, backend, variablesService, modalService, ngZone, translate) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.openForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            return { 'duplicate': true };
                        }
                    }
                    return null;
                }]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    OpenWalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.path) {
                _this.filePath = params.path;
                var filename = '';
                if (params.path.lastIndexOf('.') === -1) {
                    filename = params.path.substr(params.path.lastIndexOf('/') + 1);
                }
                else {
                    filename = params.path.substr(params.path.lastIndexOf('/') + 1, params.path.lastIndexOf('.') - 1 - params.path.lastIndexOf('/'));
                }
                if (filename.length > 25) {
                    filename = filename.slice(0, 25);
                }
                _this.openForm.get('name').setValue(filename);
                _this.openForm.get('name').markAsTouched();
            }
        });
    };
    OpenWalletComponent.prototype.openWallet = function () {
        var _this = this;
        if (this.openForm.valid && this.openForm.get('name').value.length <= this.variablesService.maxWalletNameLength) {
            this.backend.openWallet(this.filePath, this.openForm.get('password').value, this.variablesService.count, false, function (open_status, open_data, open_error) {
                if (open_error && open_error === 'FILE_NOT_FOUND') {
                    var error_translate = _this.translate.instant('OPEN_WALLET.FILE_NOT_FOUND1');
                    error_translate += ':<br>' + _this.filePath;
                    error_translate += _this.translate.instant('OPEN_WALLET.FILE_NOT_FOUND2');
                    _this.modalService.prepareModal('error', error_translate);
                }
                else {
                    if (open_status || open_error === 'FILE_RESTORED') {
                        var exists_1 = false;
                        _this.variablesService.wallets.forEach(function (wallet) {
                            if (wallet.address === open_data['wi'].address) {
                                exists_1 = true;
                            }
                        });
                        if (exists_1) {
                            _this.modalService.prepareModal('error', 'OPEN_WALLET.WITH_ADDRESS_ALREADY_OPEN');
                            _this.backend.closeWallet(open_data.wallet_id, function () {
                                _this.ngZone.run(function () {
                                    _this.router.navigate(['/']);
                                });
                            });
                        }
                        else {
                            var new_wallet_1 = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__["Wallet"](open_data.wallet_id, _this.openForm.get('name').value, _this.openForm.get('password').value, open_data['wi'].path, open_data['wi'].address, open_data['wi'].balance, open_data['wi'].unlocked_balance, open_data['wi'].mined_total, open_data['wi'].tracking_hey);
                            new_wallet_1.alias = _this.backend.getWalletAlias(new_wallet_1.address);
                            new_wallet_1.currentPage = 1;
                            new_wallet_1.open_from_exist = true;
                            new_wallet_1.exclude_mining_txs = false;
                            new_wallet_1.is_auditable = open_data['wi'].is_auditable;
                            new_wallet_1.is_watch_only = open_data['wi'].is_watch_only;
                            if (open_data.recent_history && open_data.recent_history.history) {
                                new_wallet_1.total_history_item = open_data.recent_history.total_history_items;
                                new_wallet_1.totalPages = Math.ceil(open_data.recent_history.total_history_items / _this.variablesService.count);
                                new_wallet_1.totalPages > _this.variablesService.maxPages
                                    ? new_wallet_1.pages = new Array(5).fill(1).map(function (value, index) { return value + index; })
                                    : new_wallet_1.pages = new Array(new_wallet_1.totalPages).fill(1).map(function (value, index) { return value + index; });
                                new_wallet_1.prepareHistory(open_data.recent_history.history);
                            }
                            else {
                                new_wallet_1.total_history_item = 0;
                                new_wallet_1.pages = new Array(1).fill(1);
                                new_wallet_1.totalPages = 1;
                            }
                            _this.backend.getContracts(open_data.wallet_id, function (contracts_status, contracts_data) {
                                if (contracts_status && contracts_data.hasOwnProperty('contracts')) {
                                    _this.ngZone.run(function () {
                                        new_wallet_1.prepareContractsAfterOpen(contracts_data.contracts, _this.variablesService.exp_med_ts, _this.variablesService.height_app, _this.variablesService.settings.viewedContracts, _this.variablesService.settings.notViewedContracts);
                                    });
                                }
                            });
                            _this.variablesService.wallets.push(new_wallet_1);
                            _this.backend.runWallet(open_data.wallet_id, function (run_status, run_data) {
                                if (run_status) {
                                    if (_this.variablesService.appPass) {
                                        _this.backend.storeSecureAppData();
                                    }
                                    _this.ngZone.run(function () {
                                        _this.router.navigate(['/wallet/' + open_data.wallet_id]);
                                    });
                                }
                                else {
                                    console.log(run_data['error_code']);
                                }
                            });
                        }
                    }
                }
            });
        }
    };
    OpenWalletComponent.prototype.ngOnDestroy = function () {
        this.queryRouting.unsubscribe();
    };
    OpenWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-wallet',
            template: __webpack_require__(/*! ./open-wallet.component.html */ "./src/app/open-wallet/open-wallet.component.html"),
            styles: [__webpack_require__(/*! ./open-wallet.component.scss */ "./src/app/open-wallet/open-wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], OpenWalletComponent);
    return OpenWalletComponent;
}());



/***/ }),

/***/ "./src/app/purchase/purchase.component.html":
/*!**************************************************!*\
  !*** ./src/app/purchase/purchase.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\r\n  <div class=\"breadcrumbs\">\r\n    <span [routerLink]=\"'/wallet/' + currentWalletId + '/contracts'\">{{ 'BREADCRUMBS.CONTRACTS' | translate }}</span>\r\n    <span *ngIf=\"newPurchase\">{{ 'BREADCRUMBS.NEW_PURCHASE' | translate }}</span>\r\n    <span *ngIf=\"!newPurchase\">{{ 'BREADCRUMBS.OLD_PURCHASE' | translate }}</span>\r\n  </div>\r\n  <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n    <i class=\"icon back\"></i>\r\n    <span>{{ 'COMMON.BACK' | translate }}</span>\r\n  </button>\r\n</div>\r\n\r\n<form class=\"form-purchase scrolled-content\" [formGroup]=\"purchaseForm\">\r\n\r\n  <div class=\"input-block\">\r\n    <label for=\"purchase-description\">{{ 'PURCHASE.DESCRIPTION' | translate }}</label>\r\n    <input type=\"text\" id=\"purchase-description\" formControlName=\"description\" maxlength=\"100\" [readonly]=\"!newPurchase\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n    <div class=\"error-block\" *ngIf=\"purchaseForm.controls['description'].invalid && (purchaseForm.controls['description'].dirty || purchaseForm.controls['description'].touched)\">\r\n      <div *ngIf=\"purchaseForm.controls['description'].errors['required']\">\r\n        {{ 'PURCHASE.FORM_ERRORS.DESC_REQUIRED' | translate }}\r\n      </div>\r\n    </div>\r\n    <div class=\"error-block\" *ngIf=\"newPurchase && purchaseForm.controls['description'].value.length >= 100\">\r\n      <div>\r\n        {{ 'PURCHASE.FORM_ERRORS.COMMENT_MAXIMUM' | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"input-blocks-row\">\r\n    <div class=\"input-block input-block-alias\">\r\n      <label for=\"purchase-seller\">{{ 'PURCHASE.SELLER' | translate }}</label>\r\n      <input type=\"text\" id=\"purchase-seller\" formControlName=\"seller\" [readonly]=\"!newPurchase\" (mousedown)=\"addressMouseDown($event)\" (contextmenu)=\"(!newPurchase) ? variablesService.onContextMenuOnlyCopy($event, purchaseForm.controls['seller'].value) : variablesService.onContextMenu($event)\">\r\n      <div class=\"alias-dropdown scrolled-content\" *ngIf=\"isOpen\">\r\n        <div *ngFor=\"let item of localAliases\" (click)=\"setAlias(item.name)\">{{item.name}}</div>\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"purchaseForm.controls['seller'].invalid && (purchaseForm.controls['seller'].dirty || purchaseForm.controls['seller'].touched)\">\r\n        <div *ngIf=\"purchaseForm.controls['seller'].errors['required']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.SELLER_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"purchaseForm.controls['seller'].errors['address_not_valid']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.SELLER_NOT_VALID' | translate }}\r\n        </div>\r\n        <div *ngIf=\"purchaseForm.controls['seller'].errors['address_same']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.SELLER_SAME' | translate }}\r\n        </div>\r\n        <div *ngIf=\"purchaseForm.controls['seller'].errors['alias_not_valid']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.ALIAS_NOT_VALID' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"purchase-amount\">{{ 'PURCHASE.AMOUNT' | translate }}</label>\r\n      <input type=\"text\" id=\"purchase-amount\" formControlName=\"amount\" appInputValidate=\"money\" [readonly]=\"!newPurchase\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"purchaseForm.controls['amount'].invalid && (purchaseForm.controls['amount'].dirty || purchaseForm.controls['amount'].touched)\">\r\n        <div *ngIf=\"purchaseForm.controls['amount'].errors['required']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.AMOUNT_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"purchaseForm.controls['amount'].errors['amount_zero']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.AMOUNT_ZERO' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"input-blocks-row\">\r\n    <div class=\"input-block\">\r\n      <label for=\"purchase-your-deposit\">{{ ( (currentContract && !currentContract.is_a) ? 'PURCHASE.BUYER_DEPOSIT' : 'PURCHASE.YOUR_DEPOSIT') | translate }}</label>\r\n      <input type=\"text\" id=\"purchase-your-deposit\" formControlName=\"yourDeposit\" appInputValidate=\"money\" [readonly]=\"!newPurchase\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"purchaseForm.controls['yourDeposit'].invalid && (purchaseForm.controls['yourDeposit'].dirty || purchaseForm.controls['yourDeposit'].touched)\">\r\n        <div *ngIf=\"purchaseForm.controls['yourDeposit'].errors['required']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.YOUR_DEPOSIT_REQUIRED' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <div class=\"wrap-label\">\r\n        <label for=\"purchase-seller-deposit\">{{ ( (currentContract && !currentContract.is_a) ? 'PURCHASE.YOUR_DEPOSIT' : 'PURCHASE.SELLER_DEPOSIT') | translate }}</label>\r\n        <div class=\"checkbox-block\">\r\n          <input type=\"checkbox\" id=\"purchase-same-amount\" class=\"style-checkbox\" formControlName=\"sameAmount\" (change)=\"sameAmountChange()\">\r\n          <label for=\"purchase-same-amount\">{{ 'PURCHASE.SAME_AMOUNT' | translate }}</label>\r\n        </div>\r\n      </div>\r\n      <input type=\"text\" readonly *ngIf=\"purchaseForm.controls['sameAmount'].value\" [value]=\"purchaseForm.controls['amount'].value\">\r\n      <input type=\"text\" id=\"purchase-seller-deposit\" *ngIf=\"!purchaseForm.controls['sameAmount'].value\" formControlName=\"sellerDeposit\" appInputValidate=\"money\" [readonly]=\"!newPurchase\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"purchaseForm.controls['sellerDeposit'].invalid && (purchaseForm.controls['sellerDeposit'].dirty || purchaseForm.controls['sellerDeposit'].touched)\">\r\n        <div *ngIf=\"purchaseForm.controls['sellerDeposit'].errors['required']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.SELLER_DEPOSIT_REQUIRED' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"input-block\">\r\n    <label for=\"purchase-comment\">{{ 'PURCHASE.COMMENT' | translate }}</label>\r\n    <input type=\"text\" id=\"purchase-comment\" formControlName=\"comment\" maxlength=\"100\" [readonly]=\"!newPurchase\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n    <div class=\"error-block\" *ngIf=\"newPurchase && purchaseForm.controls['comment'].value.length >= 100\">\r\n      <div>\r\n        {{ 'PURCHASE.FORM_ERRORS.COMMENT_MAXIMUM' | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"button\" class=\"purchase-select\" (click)=\"toggleOptions()\">\r\n    <span>{{ 'PURCHASE.DETAILS' | translate }}</span><i class=\"icon arrow\" [class.down]=\"!additionalOptions\" [class.up]=\"additionalOptions\"></i>\r\n  </button>\r\n\r\n  <div class=\"additional-details\" *ngIf=\"additionalOptions\">\r\n    <div class=\"input-block\">\r\n      <label for=\"purchase-fee\">{{ 'PURCHASE.FEE' | translate }}</label>\r\n      <input type=\"text\" id=\"purchase-fee\" formControlName=\"fee\" readonly>\r\n    </div>\r\n    <div class=\"input-block\" *ngIf=\"newPurchase\">\r\n      <label for=\"purchase-time\">{{ 'PURCHASE.WAITING_TIME' | translate }}</label>\r\n      <ng-select id=\"purchase-time\" class=\"custom-select\"\r\n                 [clearable]=\"false\"\r\n                 [searchable]=\"false\"\r\n                 formControlName=\"time\">\r\n        <ng-option [value]=\"1\">1 {{ 'PURCHASE.HOUR' | translate }}</ng-option>\r\n        <ng-option *ngFor=\"let title of [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]\" [value]=\"title\">\r\n          {{title}} {{ 'PURCHASE.HOURS' | translate }}\r\n        </ng-option>\r\n      </ng-select>\r\n    </div>\r\n    <div class=\"input-block\">\r\n      <label for=\"purchase-payment\">{{ 'PURCHASE.PAYMENT' | translate }}</label>\r\n      <input type=\"text\" id=\"purchase-payment\" formControlName=\"payment\" [readonly]=\"!newPurchase\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"button\" class=\"blue-button send-button\" *ngIf=\"newPurchase\" [disabled]=\"!purchaseForm.valid\" (click)=\"createPurchase()\">{{ 'PURCHASE.SEND_BUTTON' | translate }}</button>\r\n\r\n  <div class=\"purchase-states\" *ngIf=\"!newPurchase\">\r\n    <ng-container *ngIf=\"currentContract.state == 1 && !currentContract.is_a && currentContract.private_detailes.b_pledge.plus(variablesService.default_fee_big).plus(variablesService.default_fee_big).isGreaterThan(variablesService.currentWallet.unlocked_balance)\">\r\n      <span>{{ 'PURCHASE.NEED_MONEY' | translate }}</span>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div class=\"purchase-buttons\" *ngIf=\"!newPurchase\">\r\n\r\n    <ng-container *ngIf=\"!currentContract.is_a && currentContract.state == 1\">\r\n      <button type=\"button\" class=\"green-button\" (click)=\"acceptState();\" [disabled]=\"currentContract.private_detailes.b_pledge.plus(variablesService.default_fee_big).plus(variablesService.default_fee_big).isGreaterThan(variablesService.currentWallet.unlocked_balance)\">\r\n        {{'PURCHASE.BUTTON_MAKE_PLEDGE' | translate}}\r\n      </button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"ignoredContract();\">{{'PURCHASE.BUTTON_IGNORE' | translate}}</button>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!showNullify && !showTimeSelect && currentContract.is_a && (currentContract.state == 201 || currentContract.state == 2 || currentContract.state == 120 || currentContract.state == 130)\">\r\n      <button type=\"button\" class=\"green-button\" (click)=\"dealsDetailsFinish();\" [disabled]=\"currentContract.cancel_expiration_time == 0 && (currentContract.height == 0 || (variablesService.height_app - currentContract.height) < 10)\">\r\n        {{'PURCHASE.BUTTON_RECEIVED' | translate}}\r\n      </button>\r\n      <button type=\"button\" class=\"turquoise-button\" (click)=\"showNullify = true;\" [disabled]=\"currentContract.cancel_expiration_time == 0 && (currentContract.height == 0 || (variablesService.height_app - currentContract.height) < 10)\">\r\n        {{'PURCHASE.BUTTON_NULLIFY' | translate}}\r\n      </button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"showTimeSelect = true;\" [disabled]=\"currentContract.cancel_expiration_time == 0 && (currentContract.height == 0 || (variablesService.height_app - currentContract.height) < 10)\">\r\n        {{'PURCHASE.BUTTON_CANCEL_BUYER' | translate}}\r\n      </button>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!currentContract.is_a && currentContract.state == 5\">\r\n      <button type=\"button\" class=\"turquoise-button\" (click)=\"dealsDetailsDontCanceling();\">{{'PURCHASE.BUTTON_NOT_CANCEL' | translate}}</button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"dealsDetailsSellerCancel();\">{{'PURCHASE.BUTTON_CANCEL_SELLER' | translate}}</button>\r\n    </ng-container>\r\n\r\n  </div>\r\n\r\n  <div class=\"nullify-block-row\" *ngIf=\"showNullify\">\r\n    <div>{{'PURCHASE.NULLIFY_QUESTION' | translate}}</div>\r\n    <div class=\"nullify-block-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"showNullify = false;\">{{ 'PURCHASE.CANCEL' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"productNotGot();\">{{ 'PURCHASE.BUTTON_NULLIFY_SHORT' | translate }}</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"time-cancel-block-row\" *ngIf=\"showTimeSelect && !newPurchase && currentContract.is_a && (currentContract.state == 201 || currentContract.state == 2 || currentContract.state == 120 || currentContract.state == 130)\">\r\n    <div class=\"time-cancel-block-question\">{{ 'PURCHASE.WAITING_TIME_QUESTION' | translate }}</div>\r\n    <label for=\"purchase-timeCancel\">{{ 'PURCHASE.WAITING_TIME' | translate }}</label>\r\n    <div class=\"input-block\">\r\n      <ng-select id=\"purchase-timeCancel\" class=\"custom-select\"\r\n                 [clearable]=\"false\"\r\n                 [searchable]=\"false\"\r\n                 formControlName=\"timeCancel\">\r\n        <ng-option [value]=\"1\">1 {{ 'PURCHASE.HOUR' | translate }}</ng-option>\r\n        <ng-option *ngFor=\"let title of [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]\" [value]=\"title\">\r\n          {{title}} {{ 'PURCHASE.HOURS' | translate }}\r\n        </ng-option>\r\n      </ng-select>\r\n    </div>\r\n    <div class=\"time-cancel-block-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"showTimeSelect = false;\">{{ 'PURCHASE.CANCEL' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"dealsDetailsCancel();\">{{ 'PURCHASE.BUTTON_CANCEL_BUYER' | translate }}</button>\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n\r\n<div class=\"progress-bar-container\">\r\n  <div class=\"progress-bar\">\r\n    <div class=\"progress-bar-full\" [style.width]=\"getProgressBarWidth()\"></div>\r\n  </div>\r\n  <div class=\"progress-labels\">\r\n\r\n    <ng-container *ngIf=\"newPurchase\">\r\n      <span>{{ 'PURCHASE.STATUS_MESSAGES.NEW_PURCHASE' | translate }}</span>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!newPurchase && currentContract.is_a\">\r\n      <span *ngIf=\"currentContract.state == 1\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_SELLER' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 110\">{{ 'PURCHASE.STATUS_MESSAGES.IGNORED_SELLER' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 120\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_DELIVERY' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 130\">{{ 'PURCHASE.STATUS_MESSAGES.IGNORED_CANCEL_SELLER' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 140\">{{ 'PURCHASE.STATUS_MESSAGES.EXPIRED' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 2\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_SELLER' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 201\">\r\n        {{ 'PURCHASE.STATUS_MESSAGES.WAITING_CONFIRMATION' | translate }}\r\n        <ng-container *ngIf=\"currentContract.height === 0\">(0/10)</ng-container>\r\n        <ng-container *ngIf=\"currentContract.height !== 0 && (variablesService.height_app - currentContract.height) < 10\">({{variablesService.height_app - currentContract.height}}/10)</ng-container>\r\n      </span>\r\n\r\n      <span *ngIf=\"currentContract.state == 3\">{{ 'PURCHASE.STATUS_MESSAGES.COMPLETED' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 4\" class=\"error-text\">\r\n        {{ 'PURCHASE.STATUS_MESSAGES.NOT_RECEIVED' | translate }}. {{ 'PURCHASE.STATUS_MESSAGES.NULLIFIED' | translate }}\r\n      </span>\r\n\r\n      <span *ngIf=\"currentContract.state == 5\">{{ 'PURCHASE.STATUS_MESSAGES.PROPOSAL_CANCEL_SELLER' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 6\">{{ 'PURCHASE.STATUS_MESSAGES.CANCELLED' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 601\">\r\n        {{ 'PURCHASE.STATUS_MESSAGES.BEING_CANCELLED' | translate }}\r\n        <ng-container *ngIf=\"currentContract.height === 0\">(0/10)</ng-container>\r\n        <ng-container *ngIf=\"currentContract.height !== 0 && (variablesService.height_app - currentContract.height) < 10\">({{variablesService.height_app - currentContract.height}}/10)</ng-container>\r\n      </span>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!newPurchase && !currentContract.is_a\">\r\n      <span *ngIf=\"currentContract.state == 1\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_BUYER' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 110\">{{ 'PURCHASE.STATUS_MESSAGES.IGNORED_BUYER' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 130\">{{ 'PURCHASE.STATUS_MESSAGES.IGNORED_CANCEL_BUYER' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 140\">{{ 'PURCHASE.STATUS_MESSAGES.EXPIRED' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 2\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_DELIVERY' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 201\">\r\n        {{ 'PURCHASE.STATUS_MESSAGES.WAITING_CONFIRMATION' | translate }}\r\n        <ng-container *ngIf=\"currentContract.height === 0\">(0/10)</ng-container>\r\n        <ng-container *ngIf=\"currentContract.height !== 0 && (variablesService.height_app - currentContract.height) < 10\">({{variablesService.height_app - currentContract.height}}/10)</ng-container>\r\n      </span>\r\n\r\n      <span *ngIf=\"currentContract.state == 3\">{{ 'PURCHASE.STATUS_MESSAGES.COMPLETED' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 4\" class=\"error-text\">\r\n        {{ 'PURCHASE.STATUS_MESSAGES.NOT_RECEIVED' | translate }}. {{ 'PURCHASE.STATUS_MESSAGES.NULLIFIED' | translate }}\r\n      </span>\r\n\r\n      <span *ngIf=\"currentContract.state == 5\">{{ 'PURCHASE.STATUS_MESSAGES.PROPOSAL_CANCEL_BUYER' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 6\">{{ 'PURCHASE.STATUS_MESSAGES.CANCELLED' | translate }}</span>\r\n\r\n      <span *ngIf=\"currentContract.state == 601\">\r\n        {{ 'PURCHASE.STATUS_MESSAGES.BEING_CANCELLED' | translate }}\r\n        <ng-container *ngIf=\"currentContract.height === 0\">(0/10)</ng-container>\r\n        <ng-container *ngIf=\"currentContract.height !== 0 && (variablesService.height_app - currentContract.height) < 10\">({{variablesService.height_app - currentContract.height}}/10)</ng-container>\r\n      </span>\r\n    </ng-container>\r\n\r\n  </div>\r\n  <div class=\"progress-time\" *ngIf=\"!newPurchase\">\r\n    <span *ngIf=\"currentContract.is_a && currentContract.state == 1\">{{currentContract.expiration_time | contractTimeLeft: 0}}</span>\r\n    <span *ngIf=\"currentContract.is_a && currentContract.state == 5\">{{currentContract.cancel_expiration_time | contractTimeLeft: 2}}</span>\r\n    <span *ngIf=\"!currentContract.is_a && currentContract.state == 1\">{{currentContract.expiration_time | contractTimeLeft: 1}}</span>\r\n    <span *ngIf=\"!currentContract.is_a && currentContract.state == 5\">{{currentContract.cancel_expiration_time | contractTimeLeft: 1}}</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/purchase/purchase.component.scss":
/*!**************************************************!*\
  !*** ./src/app/purchase/purchase.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  width: 100%; }\n\n.head {\n  flex: 0 0 auto;\n  box-sizing: content-box;\n  margin: -3rem -3rem 0; }\n\n.form-purchase {\n  flex: 1 1 auto;\n  margin: 1.5rem -3rem 0;\n  padding: 0 3rem;\n  overflow-y: overlay; }\n\n.form-purchase .input-blocks-row {\n    display: flex; }\n\n.form-purchase .input-blocks-row .input-block {\n      flex-basis: 50%; }\n\n.form-purchase .input-blocks-row .input-block:first-child {\n        margin-right: 1.5rem; }\n\n.form-purchase .input-blocks-row .input-block:last-child {\n        margin-left: 1.5rem; }\n\n.form-purchase .input-blocks-row .input-block .checkbox-block {\n        display: flex; }\n\n.form-purchase .purchase-select {\n    display: flex;\n    align-items: center;\n    background: transparent;\n    border: none;\n    font-size: 1.3rem;\n    line-height: 1.3rem;\n    margin: 1.5rem 0 0;\n    padding: 0;\n    width: 100%;\n    max-width: 15rem;\n    height: 1.3rem; }\n\n.form-purchase .purchase-select .arrow {\n      margin-left: 1rem;\n      width: 0.8rem;\n      height: 0.8rem; }\n\n.form-purchase .purchase-select .arrow.down {\n        -webkit-mask: url('arrow-down.svg') no-repeat center;\n                mask: url('arrow-down.svg') no-repeat center; }\n\n.form-purchase .purchase-select .arrow.up {\n        -webkit-mask: url('arrow-up.svg') no-repeat center;\n                mask: url('arrow-up.svg') no-repeat center; }\n\n.form-purchase .additional-details {\n    display: flex;\n    margin-top: 1.5rem;\n    padding: 0.5rem 0 2rem; }\n\n.form-purchase .additional-details > div {\n      flex-basis: 25%; }\n\n.form-purchase .additional-details > div:first-child {\n        padding-left: 1.5rem;\n        padding-right: 1rem; }\n\n.form-purchase .additional-details > div:last-child {\n        padding-left: 1rem;\n        padding-right: 1.5rem; }\n\n.form-purchase .purchase-states {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.2rem;\n    line-height: 2.9rem; }\n\n.form-purchase .send-button {\n    margin: 2.4rem 0;\n    width: 100%;\n    max-width: 15rem; }\n\n.form-purchase .purchase-buttons {\n    display: flex;\n    justify-content: flex-start;\n    margin: 2.4rem -0.5rem; }\n\n.form-purchase .purchase-buttons button {\n      flex: 0 1 33%;\n      margin: 0 0.5rem; }\n\n.form-purchase .nullify-block-row {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n\n.form-purchase .nullify-block-row .nullify-block-buttons {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 1rem 0;\n      width: 100%; }\n\n.form-purchase .nullify-block-row .nullify-block-buttons button {\n        flex: 0 1 25%;\n        margin: 0 0.5rem; }\n\n.form-purchase .time-cancel-block-row {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n\n.form-purchase .time-cancel-block-row .time-cancel-block-question {\n      margin-bottom: 1rem; }\n\n.form-purchase .time-cancel-block-row .input-block {\n      width: 25%; }\n\n.form-purchase .time-cancel-block-row label {\n      margin-bottom: 1rem; }\n\n.form-purchase .time-cancel-block-row .time-cancel-block-buttons {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 1rem 0;\n      width: 100%; }\n\n.form-purchase .time-cancel-block-row .time-cancel-block-buttons button {\n        flex: 0 1 25%;\n        margin: 0 0.5rem; }\n\n.progress-bar-container {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0 3rem;\n  width: 100%;\n  height: 3rem; }\n\n.progress-bar-container .progress-bar {\n    position: absolute;\n    top: -0.7rem;\n    left: 0;\n    margin: 0 3rem;\n    width: calc(100% - 6rem);\n    height: 0.7rem; }\n\n.progress-bar-container .progress-bar .progress-bar-full {\n      height: 0.7rem; }\n\n.progress-bar-container .progress-labels {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.2rem;\n    height: 100%; }\n\n.progress-bar-container .progress-time {\n    position: absolute;\n    top: -3rem;\n    left: 50%;\n    transform: translateX(-50%);\n    font-size: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVyY2hhc2UvRDpcXFByb2plY3RcXFdPUktfTkVXXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxccHVyY2hhc2VcXHB1cmNoYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUpyQjtJQU9JLGFBQWEsRUFBQTs7QUFQakI7TUFVTSxlQUFlLEVBQUE7O0FBVnJCO1FBYVEsb0JBQW9CLEVBQUE7O0FBYjVCO1FBaUJRLG1CQUFtQixFQUFBOztBQWpCM0I7UUFxQlEsYUFBYSxFQUFBOztBQXJCckI7SUEyQkksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBQTs7QUFyQ2xCO01Bd0NNLGlCQUFpQjtNQUNqQixhQUFhO01BQ2IsY0FBYyxFQUFBOztBQTFDcEI7UUE2Q1Esb0RBQTREO2dCQUE1RCw0Q0FBNEQsRUFBQTs7QUE3Q3BFO1FBaURRLGtEQUEwRDtnQkFBMUQsMENBQTBELEVBQUE7O0FBakRsRTtJQXVESSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQixFQUFBOztBQXpEMUI7TUE0RE0sZUFBZSxFQUFBOztBQTVEckI7UUErRFEsb0JBQW9CO1FBQ3BCLG1CQUFtQixFQUFBOztBQWhFM0I7UUFvRVEsa0JBQWtCO1FBQ2xCLHFCQUFxQixFQUFBOztBQXJFN0I7SUEyRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTs7QUFoRnZCO0lBb0ZJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7O0FBdEZwQjtJQTBGSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHNCQUFzQixFQUFBOztBQTVGMUI7TUErRk0sYUFBYTtNQUNiLGdCQUFnQixFQUFBOztBQWhHdEI7SUFxR0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCLEVBQUE7O0FBeEczQjtNQTJHTSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixjQUFjO01BQ2QsV0FBVyxFQUFBOztBQS9HakI7UUFrSFEsYUFBYTtRQUNiLGdCQUFnQixFQUFBOztBQW5IeEI7SUF5SEksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCLEVBQUE7O0FBNUgzQjtNQStITSxtQkFBbUIsRUFBQTs7QUEvSHpCO01BbUlNLFVBQVUsRUFBQTs7QUFuSWhCO01BdUlNLG1CQUFtQixFQUFBOztBQXZJekI7TUEySU0sYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsY0FBYztNQUNkLFdBQVcsRUFBQTs7QUEvSWpCO1FBa0pRLGFBQWE7UUFDYixnQkFBZ0IsRUFBQTs7QUFPeEI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFOZDtJQVNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsY0FBYyxFQUFBOztBQWRsQjtNQWlCTSxjQUFjLEVBQUE7O0FBakJwQjtJQXNCSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsWUFBWSxFQUFBOztBQTFCaEI7SUE4Qkksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHVyY2hhc2UvcHVyY2hhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZCB7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgbWFyZ2luOiAtM3JlbSAtM3JlbSAwO1xyXG59XHJcblxyXG4uZm9ybS1wdXJjaGFzZSB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgbWFyZ2luOiAxLjVyZW0gLTNyZW0gMDtcclxuICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgb3ZlcmZsb3cteTogb3ZlcmxheTtcclxuXHJcbiAgLmlucHV0LWJsb2Nrcy1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAuaW5wdXQtYmxvY2sge1xyXG4gICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2hlY2tib3gtYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wdXJjaGFzZS1zZWxlY3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcclxuICAgIG1hcmdpbjogMS41cmVtIDAgMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTVyZW07XHJcbiAgICBoZWlnaHQ6IDEuM3JlbTtcclxuXHJcbiAgICAuYXJyb3cge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgd2lkdGg6IDAuOHJlbTtcclxuICAgICAgaGVpZ2h0OiAwLjhyZW07XHJcblxyXG4gICAgICAmLmRvd24ge1xyXG4gICAgICAgIG1hc2s6IHVybCh+c3JjL2Fzc2V0cy9pY29ucy9hcnJvdy1kb3duLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi51cCB7XHJcbiAgICAgICAgbWFzazogdXJsKH5zcmMvYXNzZXRzL2ljb25zL2Fycm93LXVwLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFkZGl0aW9uYWwtZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAgMnJlbTtcclxuXHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDI1JTtcclxuXHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnB1cmNoYXNlLXN0YXRlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuOXJlbTtcclxuICB9XHJcblxyXG4gIC5zZW5kLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDIuNHJlbSAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDE1cmVtO1xyXG4gIH1cclxuXHJcbiAgLnB1cmNoYXNlLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbjogMi40cmVtIC0wLjVyZW07XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZmxleDogMCAxIDMzJTtcclxuICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5udWxsaWZ5LWJsb2NrLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAubnVsbGlmeS1ibG9jay1idXR0b25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZmxleDogMCAxIDI1JTtcclxuICAgICAgICBtYXJnaW46IDAgMC41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGltZS1jYW5jZWwtYmxvY2stcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC50aW1lLWNhbmNlbC1ibG9jay1xdWVzdGlvbiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LWJsb2NrIHtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnRpbWUtY2FuY2VsLWJsb2NrLWJ1dHRvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBmbGV4OiAwIDEgMjUlO1xyXG4gICAgICAgIG1hcmdpbjogMCAwLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IDAgM3JlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDNyZW07XHJcblxyXG4gIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMC43cmVtO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbjogMCAzcmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDZyZW0pO1xyXG4gICAgaGVpZ2h0OiAwLjdyZW07XHJcblxyXG4gICAgLnByb2dyZXNzLWJhci1mdWxsIHtcclxuICAgICAgaGVpZ2h0OiAwLjdyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZ3Jlc3MtbGFiZWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcy10aW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTNyZW07XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/purchase/purchase.component.ts":
/*!************************************************!*\
  !*** ./src/app/purchase/purchase.component.ts ***!
  \************************************************/
/*! exports provided: PurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseComponent", function() { return PurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PurchaseComponent = /** @class */ (function () {
    function PurchaseComponent(route, backend, variablesService, modalService, ngZone, location, intToMoneyPipe) {
        var _this = this;
        this.route = route;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.location = location;
        this.intToMoneyPipe = intToMoneyPipe;
        this.isOpen = false;
        this.localAliases = [];
        this.newPurchase = false;
        this.purchaseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            seller: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, function (g) {
                    if (g.value === _this.variablesService.currentWallet.address) {
                        return { 'address_same': true };
                    }
                    return null;
                }, function (g) {
                    _this.localAliases = [];
                    if (g.value) {
                        if (g.value.indexOf('@') !== 0) {
                            _this.isOpen = false;
                            _this.backend.validateAddress(g.value, function (valid_status) {
                                _this.ngZone.run(function () {
                                    if (valid_status === false) {
                                        g.setErrors(Object.assign({ 'address_not_valid': true }, g.errors));
                                    }
                                    else {
                                        if (g.hasError('address_not_valid')) {
                                            delete g.errors['address_not_valid'];
                                            if (Object.keys(g.errors).length === 0) {
                                                g.setErrors(null);
                                            }
                                        }
                                    }
                                });
                            });
                            return (g.hasError('address_not_valid')) ? { 'address_not_valid': true } : null;
                        }
                        else {
                            _this.isOpen = true;
                            _this.localAliases = _this.variablesService.aliases.filter(function (item) {
                                return item.name.indexOf(g.value) > -1;
                            });
                            if (!(/^@?[a-z0-9\.\-]{6,25}$/.test(g.value))) {
                                g.setErrors(Object.assign({ 'alias_not_valid': true }, g.errors));
                            }
                            else {
                                _this.backend.getAliasByName(g.value.replace('@', ''), function (alias_status, alias_data) {
                                    _this.ngZone.run(function () {
                                        if (alias_status) {
                                            if (alias_data.address === _this.variablesService.currentWallet.address) {
                                                g.setErrors(Object.assign({ 'address_same': true }, g.errors));
                                            }
                                            if (g.hasError('alias_not_valid')) {
                                                delete g.errors['alias_not_valid'];
                                                if (Object.keys(g.errors).length === 0) {
                                                    g.setErrors(null);
                                                }
                                            }
                                        }
                                        else {
                                            g.setErrors(Object.assign({ 'alias_not_valid': true }, g.errors));
                                        }
                                    });
                                });
                            }
                            return (g.hasError('alias_not_valid')) ? { 'alias_not_valid': true } : null;
                        }
                    }
                    return null;
                }]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, function (g) {
                    if (parseFloat(g.value) === 0) {
                        return { 'amount_zero': true };
                    }
                    return null;
                }]),
            yourDeposit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            sellerDeposit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            sameAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: false, disabled: false }),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.variablesService.default_fee),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: 12, disabled: false }),
            timeCancel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: 12, disabled: false }),
            payment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.additionalOptions = false;
        this.currentContract = null;
        this.showTimeSelect = false;
        this.showNullify = false;
    }
    PurchaseComponent.prototype.checkAndChangeHistory = function () {
        var _this = this;
        if (this.currentContract.state === 201) {
            this.historyBlock = this.variablesService.currentWallet.history.find(function (item) { return item.tx_type === 8 && item.contract[0].contract_id === _this.currentContract.contract_id && item.contract[0].is_a === _this.currentContract.is_a; });
        }
        else if (this.currentContract.state === 601) {
            this.historyBlock = this.variablesService.currentWallet.history.find(function (item) { return item.tx_type === 12 && item.contract[0].contract_id === _this.currentContract.contract_id && item.contract[0].is_a === _this.currentContract.is_a; });
        }
    };
    PurchaseComponent.prototype.addressMouseDown = function (e) {
        if (e['button'] === 0 && this.purchaseForm.get('seller').value && this.purchaseForm.get('seller').value.indexOf('@') === 0) {
            this.isOpen = true;
        }
    };
    PurchaseComponent.prototype.setAlias = function (alias) {
        this.purchaseForm.get('seller').setValue(alias);
    };
    PurchaseComponent.prototype.onClick = function (targetElement) {
        if (targetElement.id !== 'purchase-seller' && this.isOpen) {
            this.isOpen = false;
        }
    };
    PurchaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentRouting = this.route.parent.params.subscribe(function (params) {
            _this.currentWalletId = params['id'];
        });
        this.subRouting = this.route.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.currentContract = _this.variablesService.currentWallet.getContract(params['id']);
                _this.purchaseForm.controls['seller'].setValidators([]);
                _this.purchaseForm.updateValueAndValidity();
                _this.purchaseForm.setValue({
                    description: _this.currentContract.private_detailes.t,
                    seller: _this.currentContract.private_detailes.b_addr,
                    amount: _this.intToMoneyPipe.transform(_this.currentContract.private_detailes.to_pay),
                    yourDeposit: _this.intToMoneyPipe.transform(_this.currentContract.private_detailes.a_pledge),
                    sellerDeposit: _this.intToMoneyPipe.transform(_this.currentContract.private_detailes.b_pledge),
                    sameAmount: _this.currentContract.private_detailes.to_pay.isEqualTo(_this.currentContract.private_detailes.b_pledge),
                    comment: _this.currentContract.private_detailes.c,
                    fee: _this.variablesService.default_fee,
                    time: 12,
                    timeCancel: 12,
                    payment: _this.currentContract.payment_id
                });
                _this.purchaseForm.get('sameAmount').disable();
                _this.newPurchase = false;
                if (_this.currentContract.is_new) {
                    if (_this.currentContract.is_a && _this.currentContract.state === 2) {
                        _this.currentContract.state = 120;
                    }
                    if (_this.currentContract.state === 130 && _this.currentContract.cancel_expiration_time !== 0 && _this.currentContract.cancel_expiration_time < _this.variablesService.exp_med_ts) {
                        _this.currentContract.state = 2;
                    }
                    _this.variablesService.settings.viewedContracts = (_this.variablesService.settings.viewedContracts) ? _this.variablesService.settings.viewedContracts : [];
                    var findViewedCont = false;
                    for (var j = 0; j < _this.variablesService.settings.viewedContracts.length; j++) {
                        if (_this.variablesService.settings.viewedContracts[j].contract_id === _this.currentContract.contract_id && _this.variablesService.settings.viewedContracts[j].is_a === _this.currentContract.is_a) {
                            _this.variablesService.settings.viewedContracts[j].state = _this.currentContract.state;
                            findViewedCont = true;
                            break;
                        }
                    }
                    if (!findViewedCont) {
                        _this.variablesService.settings.viewedContracts.push({
                            contract_id: _this.currentContract.contract_id,
                            is_a: _this.currentContract.is_a,
                            state: _this.currentContract.state
                        });
                    }
                    _this.currentContract.is_new = false;
                    setTimeout(function () {
                        _this.variablesService.currentWallet.recountNewContracts();
                    }, 0);
                }
                _this.checkAndChangeHistory();
            }
            else {
                _this.newPurchase = true;
            }
        });
        this.heightAppEvent = this.variablesService.getHeightAppEvent.subscribe(function (newHeight) {
            if (_this.currentContract && _this.currentContract.state === 201 && _this.currentContract.height !== 0 && (newHeight - _this.currentContract.height) >= 10) {
                _this.currentContract.state = 2;
                _this.currentContract.is_new = true;
                _this.variablesService.currentWallet.recountNewContracts();
            }
            else if (_this.currentContract && _this.currentContract.state === 601 && _this.currentContract.height !== 0 && (newHeight - _this.currentContract.height) >= 10) {
                _this.currentContract.state = 6;
                _this.currentContract.is_new = true;
                _this.variablesService.currentWallet.recountNewContracts();
            }
        });
    };
    PurchaseComponent.prototype.toggleOptions = function () {
        this.additionalOptions = !this.additionalOptions;
    };
    PurchaseComponent.prototype.getProgressBarWidth = function () {
        var progress = '0';
        if (!this.newPurchase) {
            if (this.currentContract) {
                if (this.currentContract.state === 1) {
                    progress = '10%';
                }
                if (this.currentContract.state === 201) {
                    progress = '25%';
                }
                if ([120, 2].indexOf(this.currentContract.state) !== -1) {
                    progress = '50%';
                }
                if ([5, 601].indexOf(this.currentContract.state) !== -1) {
                    progress = '75%';
                }
                if ([110, 130, 140, 3, 4, 6].indexOf(this.currentContract.state) !== -1) {
                    progress = '100%';
                }
            }
        }
        return progress;
    };
    PurchaseComponent.prototype.sameAmountChange = function () {
        if (this.purchaseForm.get('sameAmount').value) {
            this.purchaseForm.get('sellerDeposit').clearValidators();
            this.purchaseForm.get('sellerDeposit').updateValueAndValidity();
        }
        else {
            this.purchaseForm.get('sellerDeposit').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.purchaseForm.get('sellerDeposit').updateValueAndValidity();
        }
    };
    PurchaseComponent.prototype.createPurchase = function () {
        var _this = this;
        if (this.purchaseForm.valid) {
            var sellerDeposit_1 = this.purchaseForm.get('sameAmount').value ? this.purchaseForm.get('amount').value : this.purchaseForm.get('sellerDeposit').value;
            if (this.purchaseForm.get('seller').value.indexOf('@') !== 0) {
                this.backend.createProposal(this.variablesService.currentWallet.wallet_id, this.purchaseForm.get('description').value, this.purchaseForm.get('comment').value, this.variablesService.currentWallet.address, this.purchaseForm.get('seller').value, this.purchaseForm.get('amount').value, this.purchaseForm.get('yourDeposit').value, sellerDeposit_1, this.purchaseForm.get('time').value, this.purchaseForm.get('payment').value, function (create_status) {
                    if (create_status) {
                        _this.back();
                    }
                });
            }
            else {
                this.backend.getAliasByName(this.purchaseForm.get('seller').value.replace('@', ''), function (alias_status, alias_data) {
                    _this.ngZone.run(function () {
                        if (alias_status === false) {
                            _this.ngZone.run(function () {
                                _this.purchaseForm.get('seller').setErrors({ 'alias_not_valid': true });
                            });
                        }
                        else {
                            _this.backend.createProposal(_this.variablesService.currentWallet.wallet_id, _this.purchaseForm.get('description').value, _this.purchaseForm.get('comment').value, _this.variablesService.currentWallet.address, alias_data.address, _this.purchaseForm.get('amount').value, _this.purchaseForm.get('yourDeposit').value, sellerDeposit_1, _this.purchaseForm.get('time').value, _this.purchaseForm.get('payment').value, function (create_status) {
                                if (create_status) {
                                    _this.back();
                                }
                            });
                        }
                    });
                });
            }
        }
    };
    PurchaseComponent.prototype.back = function () {
        this.location.back();
    };
    PurchaseComponent.prototype.acceptState = function () {
        var _this = this;
        this.backend.acceptProposal(this.currentWalletId, this.currentContract.contract_id, function (accept_status) {
            if (accept_status) {
                _this.modalService.prepareModal('info', 'PURCHASE.ACCEPT_STATE_WAIT_BIG');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.ignoredContract = function () {
        this.variablesService.settings.notViewedContracts = (this.variablesService.settings.notViewedContracts) ? this.variablesService.settings.notViewedContracts : [];
        var findViewedCont = false;
        for (var j = 0; j < this.variablesService.settings.notViewedContracts.length; j++) {
            if (this.variablesService.settings.notViewedContracts[j].contract_id === this.currentContract.contract_id && this.variablesService.settings.notViewedContracts[j].is_a === this.currentContract.is_a) {
                this.variablesService.settings.notViewedContracts[j].state = 110;
                this.variablesService.settings.notViewedContracts[j].time = this.currentContract.expiration_time;
                findViewedCont = true;
                break;
            }
        }
        if (!findViewedCont) {
            this.variablesService.settings.notViewedContracts.push({
                contract_id: this.currentContract.contract_id,
                is_a: this.currentContract.is_a,
                state: 110,
                time: this.currentContract.expiration_time
            });
        }
        this.currentContract.is_new = true;
        this.currentContract.state = 110;
        this.currentContract.time = this.currentContract.expiration_time;
        this.variablesService.currentWallet.recountNewContracts();
        this.modalService.prepareModal('info', 'PURCHASE.IGNORED_ACCEPT');
        this.back();
    };
    PurchaseComponent.prototype.productNotGot = function () {
        var _this = this;
        this.backend.releaseProposal(this.currentWalletId, this.currentContract.contract_id, 'REL_B', function (release_status) {
            if (release_status) {
                _this.modalService.prepareModal('info', 'PURCHASE.BURN_PROPOSAL');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.dealsDetailsFinish = function () {
        var _this = this;
        this.backend.releaseProposal(this.currentWalletId, this.currentContract.contract_id, 'REL_N', function (release_status) {
            if (release_status) {
                _this.modalService.prepareModal('success', 'PURCHASE.SUCCESS_FINISH_PROPOSAL');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.dealsDetailsCancel = function () {
        var _this = this;
        this.backend.requestCancelContract(this.currentWalletId, this.currentContract.contract_id, this.purchaseForm.get('timeCancel').value, function (cancel_status) {
            if (cancel_status) {
                _this.modalService.prepareModal('info', 'PURCHASE.SEND_CANCEL_PROPOSAL');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.dealsDetailsDontCanceling = function () {
        this.variablesService.settings.notViewedContracts = this.variablesService.settings.notViewedContracts ? this.variablesService.settings.notViewedContracts : [];
        var findViewedCont = false;
        for (var j = 0; j < this.variablesService.settings.notViewedContracts.length; j++) {
            if (this.variablesService.settings.notViewedContracts[j].contract_id === this.currentContract.contract_id && this.variablesService.settings.notViewedContracts[j].is_a === this.currentContract.is_a) {
                this.variablesService.settings.notViewedContracts[j].state = 130;
                this.variablesService.settings.notViewedContracts[j].time = this.currentContract.cancel_expiration_time;
                findViewedCont = true;
                break;
            }
        }
        if (!findViewedCont) {
            this.variablesService.settings.notViewedContracts.push({
                contract_id: this.currentContract.contract_id,
                is_a: this.currentContract.is_a,
                state: 130,
                time: this.currentContract.cancel_expiration_time
            });
        }
        this.currentContract.is_new = true;
        this.currentContract.state = 130;
        this.currentContract.time = this.currentContract.cancel_expiration_time;
        this.variablesService.currentWallet.recountNewContracts();
        this.modalService.prepareModal('info', 'PURCHASE.IGNORED_CANCEL');
        this.back();
    };
    PurchaseComponent.prototype.dealsDetailsSellerCancel = function () {
        var _this = this;
        this.backend.acceptCancelContract(this.currentWalletId, this.currentContract.contract_id, function (accept_status) {
            if (accept_status) {
                _this.modalService.prepareModal('info', 'PURCHASE.DEALS_CANCELED_WAIT');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.ngOnDestroy = function () {
        this.parentRouting.unsubscribe();
        this.subRouting.unsubscribe();
        this.heightAppEvent.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PurchaseComponent.prototype, "onClick", null);
    PurchaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase',
            template: __webpack_require__(/*! ./purchase.component.html */ "./src/app/purchase/purchase.component.html"),
            styles: [__webpack_require__(/*! ./purchase.component.scss */ "./src/app/purchase/purchase.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_7__["IntToMoneyPipe"]])
    ], PurchaseComponent);
    return PurchaseComponent;
}());



/***/ }),

/***/ "./src/app/receive/receive.component.html":
/*!************************************************!*\
  !*** ./src/app/receive/receive.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-qr\">\r\n  <img src=\"{{qrImageSrc}}\" alt=\"qr-code\">\r\n  <div class=\"wrap-address\">\r\n    <div class=\"address\">{{variablesService.currentWallet.address}}</div>\r\n    <button type=\"button\" class=\"btn-copy-address\" [class.copy]=\"!copyAnimation\" [class.copied]=\"copyAnimation\" (click)=\"copyAddress()\"></button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/receive/receive.component.scss":
/*!************************************************!*\
  !*** ./src/app/receive/receive.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.wrap-qr {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.wrap-qr img {\n    margin: 4rem 0; }\n\n.wrap-qr .wrap-address {\n    display: flex;\n    align-items: center;\n    font-size: 1.4rem;\n    line-height: 2.7rem; }\n\n.wrap-qr .wrap-address .btn-copy-address {\n      margin-left: 1.2rem;\n      width: 1.7rem;\n      height: 1.7rem; }\n\n.wrap-qr .wrap-address .btn-copy-address.copy {\n        -webkit-mask: url('copy.svg') no-repeat center;\n                mask: url('copy.svg') no-repeat center; }\n\n.wrap-qr .wrap-address .btn-copy-address.copy:hover {\n          opacity: 0.75; }\n\n.wrap-qr .wrap-address .btn-copy-address.copied {\n        -webkit-mask: url('complete-testwallet.svg') no-repeat center;\n                mask: url('complete-testwallet.svg') no-repeat center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZWl2ZS9EOlxcUHJvamVjdFxcV09SS19ORVdcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxyZWNlaXZlXFxyZWNlaXZlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUIsRUFBQTs7QUFIckI7SUFNSSxjQUFjLEVBQUE7O0FBTmxCO0lBVUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUE7O0FBYnZCO01BZ0JNLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsY0FBYyxFQUFBOztBQWxCcEI7UUFxQlEsOENBQXVEO2dCQUF2RCxzQ0FBdUQsRUFBQTs7QUFyQi9EO1VBd0JVLGFBQWEsRUFBQTs7QUF4QnZCO1FBNkJRLDZEQUFzRTtnQkFBdEUscURBQXNFLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWNlaXZlL3JlY2VpdmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi53cmFwLXFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbjogNHJlbSAwO1xyXG4gIH1cclxuXHJcbiAgLndyYXAtYWRkcmVzcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuN3JlbTtcclxuXHJcbiAgICAuYnRuLWNvcHktYWRkcmVzcyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxLjJyZW07XHJcbiAgICAgIHdpZHRoOiAxLjdyZW07XHJcbiAgICAgIGhlaWdodDogMS43cmVtO1xyXG5cclxuICAgICAgJi5jb3B5IHtcclxuICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2NvcHkuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNvcGllZCB7XHJcbiAgICAgICAgbWFzazogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9jb21wbGV0ZS10ZXN0d2FsbGV0LnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/receive/receive.component.ts":
/*!**********************************************!*\
  !*** ./src/app/receive/receive.component.ts ***!
  \**********************************************/
/*! exports provided: ReceiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiveComponent", function() { return ReceiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReceiveComponent = /** @class */ (function () {
    function ReceiveComponent(route, backend, variablesService) {
        this.route = route;
        this.backend = backend;
        this.variablesService = variablesService;
        this.copyAnimation = false;
    }
    ReceiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentRouting = this.route.parent.params.subscribe(function () {
            qrcode__WEBPACK_IMPORTED_MODULE_1___default.a.toDataURL(_this.variablesService.currentWallet.address, {
                width: 106 * _shared_constants__WEBPACK_IMPORTED_MODULE_5__["RCV_ADDR_QR_SCALE"],
                height: 106 * _shared_constants__WEBPACK_IMPORTED_MODULE_5__["RCV_ADDR_QR_SCALE"]
            }).then(function (url) {
                _this.qrImageSrc = url;
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    ReceiveComponent.prototype.copyAddress = function () {
        var _this = this;
        this.backend.setClipboard(this.variablesService.currentWallet.address);
        this.copyAnimation = true;
        this.copyAnimationTimeout = window.setTimeout(function () {
            _this.copyAnimation = false;
        }, 2000);
    };
    ReceiveComponent.prototype.ngOnDestroy = function () {
        this.parentRouting.unsubscribe();
        clearTimeout(this.copyAnimationTimeout);
    };
    ReceiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receive',
            template: __webpack_require__(/*! ./receive.component.html */ "./src/app/receive/receive.component.html"),
            styles: [__webpack_require__(/*! ./receive.component.scss */ "./src/app/receive/receive.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"]])
    ], ReceiveComponent);
    return ReceiveComponent;
}());



/***/ }),

/***/ "./src/app/restore-wallet/restore-wallet.component.html":
/*!**************************************************************!*\
  !*** ./src/app/restore-wallet/restore-wallet.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/main']\">{{ 'BREADCRUMBS.ADD_WALLET' | translate }}</span>\r\n      <span>{{ 'BREADCRUMBS.RESTORE_WALLET' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" [routerLink]=\"['/main']\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-restore\" [formGroup]=\"restoreForm\">\r\n\r\n    <div class=\"input-block half-block\">\r\n      <label for=\"wallet-name\">{{ 'RESTORE_WALLET.LABEL_NAME' | translate }}</label>\r\n      <input type=\"text\" id=\"wallet-name\" formControlName=\"name\" [attr.readonly]=\"walletSaved ? '' : null\" [maxLength]=\"variablesService.maxWalletNameLength\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"restoreForm.controls['name'].invalid && (restoreForm.controls['name'].dirty || restoreForm.controls['name'].touched)\">\r\n        <div *ngIf=\"restoreForm.controls['name'].errors['required']\">\r\n          {{ 'RESTORE_WALLET.FORM_ERRORS.NAME_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"restoreForm.controls['name'].errors['duplicate']\">\r\n          {{ 'RESTORE_WALLET.FORM_ERRORS.NAME_DUPLICATE' | translate }}\r\n        </div>\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"restoreForm.get('name').value.length >= variablesService.maxWalletNameLength\">\r\n        {{ 'RESTORE_WALLET.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block half-block\">\r\n      <label for=\"wallet-password\">{{ 'RESTORE_WALLET.PASS' | translate }}</label>\r\n      <input type=\"password\" id=\"wallet-password\" formControlName=\"password\" [attr.readonly]=\"walletSaved ? '' : null\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n      <div class=\"error-block\" *ngIf=\"restoreForm.controls['password'].dirty && restoreForm.controls['password'].errors\">\r\n        <div *ngIf=\"restoreForm.controls['password'].errors.pattern\">\r\n          {{ 'ERRORS.WRONG_PASSWORD' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block half-block\">\r\n      <label for=\"confirm-wallet-password\">{{ 'RESTORE_WALLET.CONFIRM' | translate }}</label>\r\n      <input type=\"password\" id=\"confirm-wallet-password\" formControlName=\"confirm\" [attr.readonly]=\"walletSaved ? '' : null\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n      <div class=\"error-block\" *ngIf=\"restoreForm.controls['password'].dirty && restoreForm.controls['confirm'].dirty && restoreForm.errors\">\r\n        <div *ngIf=\"restoreForm.errors['confirm_mismatch']\">\r\n          {{ 'RESTORE_WALLET.FORM_ERRORS.CONFIRM_NOT_MATCH' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"phrase-key\">{{ 'RESTORE_WALLET.LABEL_PHRASE_KEY' | translate }}</label>\r\n      <input type=\"text\" id=\"phrase-key\" formControlName=\"key\" [attr.readonly]=\"walletSaved ? '' : null\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"restoreForm.controls['key'].invalid && (restoreForm.controls['key'].dirty || restoreForm.controls['key'].touched)\">\r\n        <div *ngIf=\"restoreForm.controls['key'].errors['required']\">\r\n          {{ 'RESTORE_WALLET.FORM_ERRORS.KEY_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"restoreForm.controls['key'].errors['key_not_valid']\">\r\n          {{ 'RESTORE_WALLET.FORM_ERRORS.KEY_NOT_VALID' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block half-block\" *ngIf=\"this.seedPhraseInfo?.syntax_correct && this.seedPhraseInfo?.require_password\">\r\n      <label for=\"seed-password\">{{ 'RESTORE_WALLET.SEED_PASSWORD' | translate }}</label>\r\n      <input type=\"password\" id=\"seed-password\" formControlName=\"seedPassword\">\r\n      <div class=\"error-block\" *ngIf=\"(restoreForm.controls['seedPassword'].dirty || restoreForm.controls['seedPassword'].touched) && !this.seedPhraseInfo?.hash_sum_matched\">\r\n        <span>{{ 'RESTORE_WALLET.FORM_ERRORS.INCORRECT_PASSWORD' | translate }}</span>\r\n      </div>\r\n      <div class=\"success-block\" *ngIf=\"this.seedPhraseInfo?.hash_sum_matched\">\r\n        <span>{{ 'RESTORE_WALLET.OK' | translate }}</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrap-buttons\">\r\n      <button type=\"button\" class=\"transparent-button\" *ngIf=\"walletSaved\" disabled><i class=\"icon\"></i>{{walletSavedName}}</button>\r\n      <button type=\"button\" class=\"blue-button select-button\" (click)=\"saveWallet()\" [disabled]=\"(!this.seedPhraseInfo?.syntax_correct || !this.seedPhraseInfo?.require_password || !this.seedPhraseInfo?.hash_sum_matched) && (!this.seedPhraseInfo?.syntax_correct || this.seedPhraseInfo?.require_password)\" *ngIf=\"!walletSaved\">{{ 'RESTORE_WALLET.BUTTON_SELECT' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button create-button\" (click)=\"createWallet()\" [disabled]=\"!walletSaved\">{{ 'RESTORE_WALLET.BUTTON_CREATE' | translate }}</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n\r\n<app-progress-container [width]=\"progressWidth\" [labels]=\"['PROGRESS.ADD_WALLET', 'PROGRESS.SELECT_LOCATION', 'PROGRESS.RESTORE_WALLET']\"></app-progress-container>\r\n"

/***/ }),

/***/ "./src/app/restore-wallet/restore-wallet.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/restore-wallet/restore-wallet.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative; }\n\n.form-restore {\n  margin: 2.4rem 0;\n  width: 100%; }\n\n.form-restore .input-block.half-block {\n    width: 50%; }\n\n.form-restore .wrap-buttons {\n    display: flex;\n    margin: 2.5rem -0.7rem;\n    width: 50%; }\n\n.form-restore .wrap-buttons button {\n      margin: 0 0.7rem; }\n\n.form-restore .wrap-buttons button.transparent-button {\n        flex-basis: 50%; }\n\n.form-restore .wrap-buttons button.select-button {\n        flex-basis: 60%; }\n\n.form-restore .wrap-buttons button.create-button {\n        flex: 1 1 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdG9yZS13YWxsZXQvRDpcXFByb2plY3RcXFdPUktfTkVXXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxccmVzdG9yZS13YWxsZXRcXHJlc3RvcmUtd2FsbGV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFGYjtJQU9NLFVBQVUsRUFBQTs7QUFQaEI7SUFZSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVUsRUFBQTs7QUFkZDtNQWlCTSxnQkFBZ0IsRUFBQTs7QUFqQnRCO1FBb0JRLGVBQWUsRUFBQTs7QUFwQnZCO1FBd0JRLGVBQWUsRUFBQTs7QUF4QnZCO1FBNEJRLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Jlc3RvcmUtd2FsbGV0L3Jlc3RvcmUtd2FsbGV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvcm0tcmVzdG9yZSB7XHJcbiAgbWFyZ2luOiAyLjRyZW0gMDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLmlucHV0LWJsb2NrIHtcclxuXHJcbiAgICAmLmhhbGYtYmxvY2sge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndyYXAtYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAyLjVyZW0gLTAuN3JlbTtcclxuICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAwIDAuN3JlbTtcclxuXHJcbiAgICAgICYudHJhbnNwYXJlbnQtYnV0dG9uIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuc2VsZWN0LWJ1dHRvbiB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNjAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNyZWF0ZS1idXR0b24ge1xyXG4gICAgICAgIGZsZXg6IDEgMSA1MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/restore-wallet/restore-wallet.component.ts":
/*!************************************************************!*\
  !*** ./src/app/restore-wallet/restore-wallet.component.ts ***!
  \************************************************************/
/*! exports provided: RestoreWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoreWalletComponent", function() { return RestoreWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RestoreWalletComponent = /** @class */ (function () {
    function RestoreWalletComponent(router, backend, variablesService, modalService, ngZone, translate) {
        var _this = this;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.restoreForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            return { duplicate: true };
                        }
                    }
                    return null;
                },
            ]),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.variablesService.pattern)),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            seedPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.variablesService.pattern)),
        }, function (g) {
            return g.get('password').value === g.get('confirm').value
                ? null
                : { confirm_mismatch: true };
        });
        this.wallet = {
            id: '',
        };
        this.walletSaved = false;
        this.walletSavedName = '';
        this.progressWidth = '9rem';
        this.seedPhraseInfo = null;
        this.unsubscribeAll = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    RestoreWalletComponent.prototype.ngOnInit = function () {
        this.checkValidSeedPhrasePassword();
        this.changeDetectionSeedPhrasePassword();
    };
    RestoreWalletComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeAll.next(true);
        this.unsubscribeAll.complete();
    };
    RestoreWalletComponent.prototype.changeDetectionSeedPhrasePassword = function () {
        var _this = this;
        this.restoreForm.controls.seedPassword.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribeAll))
            .subscribe(function () {
            _this.checkValidSeedPhrasePassword();
        });
        this.restoreForm.controls.key.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribeAll))
            .subscribe(function () {
            _this.checkValidSeedPhrasePassword();
        });
    };
    RestoreWalletComponent.prototype.checkValidSeedPhrasePassword = function () {
        var _this = this;
        var seed_password = this.restoreForm.controls.seedPassword.value;
        var seed_phrase = this.restoreForm.controls.key.value;
        this.backend.getSeedPhraseInfo({ seed_phrase: seed_phrase, seed_password: seed_password }, function (status, data) {
            _this.ngZone.run(function () {
                _this.seedPhraseInfo = data;
            });
        });
    };
    RestoreWalletComponent.prototype.createWallet = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.progressWidth = '100%';
            _this.runWallet();
        });
    };
    RestoreWalletComponent.prototype.saveWallet = function () {
        var _this = this;
        if (this.restoreForm.valid &&
            this.restoreForm.get('name').value.length <=
                this.variablesService.maxWalletNameLength) {
            this.backend.isValidRestoreWalletText({
                seed_phrase: this.restoreForm.get('key').value,
                seed_password: this.restoreForm.get('seedPassword').value,
            }, function (valid_status, valid_data) {
                if (valid_data !== 'TRUE') {
                    _this.ngZone.run(function () {
                        _this.restoreForm.get('key').setErrors({ key_not_valid: true });
                    });
                }
                else {
                    _this.backend.saveFileDialog(_this.translate.instant('RESTORE_WALLET.CHOOSE_PATH'), '*', _this.variablesService.settings.default_path, function (save_status, save_data) {
                        if (save_status) {
                            _this.variablesService.settings.default_path = save_data.path.substr(0, save_data.path.lastIndexOf('/'));
                            _this.walletSavedName = save_data.path.substr(save_data.path.lastIndexOf('/') + 1, save_data.path.length - 1);
                            _this.backend.restoreWallet(save_data.path, _this.restoreForm.get('password').value, _this.restoreForm.get('key').value, _this.restoreForm.get('seedPassword').value, function (restore_status, restore_data) {
                                if (restore_status) {
                                    _this.wallet.id = restore_data.wallet_id;
                                    _this.variablesService.opening_wallet = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__["Wallet"](restore_data.wallet_id, _this.restoreForm.get('name').value, _this.restoreForm.get('password').value, restore_data['wi'].path, restore_data['wi'].address, restore_data['wi'].balance, restore_data['wi'].unlocked_balance, restore_data['wi'].mined_total, restore_data['wi'].tracking_hey);
                                    _this.variablesService.opening_wallet.is_auditable =
                                        restore_data['wi'].is_auditable;
                                    _this.variablesService.opening_wallet.is_watch_only =
                                        restore_data['wi'].is_watch_only;
                                    _this.variablesService.opening_wallet.currentPage = 1;
                                    _this.variablesService.opening_wallet.alias = _this.backend.getWalletAlias(_this.variablesService.opening_wallet.address);
                                    _this.variablesService.opening_wallet.pages = new Array(1).fill(1);
                                    _this.variablesService.opening_wallet.totalPages = 1;
                                    _this.variablesService.opening_wallet.currentPage = 1;
                                    _this.variablesService.opening_wallet.total_history_item = 0;
                                    _this.variablesService.opening_wallet.restore = true;
                                    if (restore_data.recent_history &&
                                        restore_data.recent_history.history) {
                                        _this.variablesService.opening_wallet.totalPages = Math.ceil(restore_data.recent_history.total_history_items /
                                            _this.variablesService.count);
                                        _this.variablesService.opening_wallet.totalPages >
                                            _this.variablesService.maxPages
                                            ? (_this.variablesService.opening_wallet.pages = new Array(5)
                                                .fill(1)
                                                .map(function (value, index) { return value + index; }))
                                            : (_this.variablesService.opening_wallet.pages = new Array(_this.variablesService.opening_wallet.totalPages)
                                                .fill(1)
                                                .map(function (value, index) { return value + index; }));
                                        _this.variablesService.opening_wallet.prepareHistory(restore_data.recent_history.history);
                                    }
                                    _this.backend.getContracts(_this.variablesService.opening_wallet.wallet_id, function (contracts_status, contracts_data) {
                                        if (contracts_status &&
                                            contracts_data.hasOwnProperty('contracts')) {
                                            _this.ngZone.run(function () {
                                                _this.variablesService.opening_wallet.prepareContractsAfterOpen(contracts_data.contracts, _this.variablesService.exp_med_ts, _this.variablesService.height_app, _this.variablesService.settings
                                                    .viewedContracts, _this.variablesService.settings
                                                    .notViewedContracts);
                                            });
                                        }
                                    });
                                    _this.ngZone.run(function () {
                                        _this.walletSaved = true;
                                        _this.progressWidth = '50%';
                                    });
                                }
                                else {
                                    _this.modalService.prepareModal('error', 'RESTORE_WALLET.NOT_CORRECT_FILE_OR_PASSWORD');
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    RestoreWalletComponent.prototype.runWallet = function () {
        var _this = this;
        // add flag when wallet was restored form seed
        this.variablesService.after_sync_request[this.wallet.id] = true;
        var exists = false;
        this.variablesService.wallets.forEach(function (wallet) {
            if (wallet.address === _this.variablesService.opening_wallet.address) {
                exists = true;
            }
        });
        if (!exists) {
            this.backend.runWallet(this.wallet.id, function (run_status, run_data) {
                if (run_status) {
                    _this.variablesService.wallets.push(_this.variablesService.opening_wallet);
                    if (_this.variablesService.appPass) {
                        _this.backend.storeSecureAppData();
                    }
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/wallet/' + _this.wallet.id]);
                    });
                }
                else {
                    console.log(run_data['error_code']);
                }
            });
        }
        else {
            this.variablesService.opening_wallet = null;
            this.modalService.prepareModal('error', 'OPEN_WALLET.WITH_ADDRESS_ALREADY_OPEN');
            this.backend.closeWallet(this.wallet.id, function () {
                _this.ngZone.run(function () {
                    _this.router.navigate(['/']);
                });
            });
        }
    };
    RestoreWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-restore-wallet',
            template: __webpack_require__(/*! ./restore-wallet.component.html */ "./src/app/restore-wallet/restore-wallet.component.html"),
            styles: [__webpack_require__(/*! ./restore-wallet.component.scss */ "./src/app/restore-wallet/restore-wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], RestoreWalletComponent);
    return RestoreWalletComponent;
}());



/***/ }),

/***/ "./src/app/seed-phrase/seed-phrase.component.html":
/*!********************************************************!*\
  !*** ./src/app/seed-phrase/seed-phrase.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <!-- breadcrumbs -->\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/main']\">{{ 'BREADCRUMBS.ADD_WALLET' | translate }}</span>\r\n      <span>{{ 'BREADCRUMBS.SAVE_PHRASE' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n  <!-- /breadcrumbs -->\r\n\r\n  <div class=\"scrolled-content\">\r\n    <!-- form detail -->\r\n    <form class=\"form-details\" [formGroup]=\"detailsForm\">\r\n      <div class=\"input-block\">\r\n        <label for=\"wallet-name\">{{ 'WALLET_DETAILS.LABEL_NAME' | translate }}</label>\r\n        <input type=\"text\" id=\"wallet-name\" formControlName=\"name\" [maxLength]=\"variablesService.maxWalletNameLength\"\r\n          (contextmenu)=\"variablesService.onContextMenu($event)\" readonly>\r\n        <div class=\"error-block\"\r\n          *ngIf=\"detailsForm.controls['name'].invalid && (detailsForm.controls['name'].dirty || detailsForm.controls['name'].touched)\">\r\n          <div *ngIf=\"detailsForm.controls['name'].errors['required']\">\r\n            {{ 'WALLET_DETAILS.FORM_ERRORS.NAME_REQUIRED' | translate }}\r\n          </div>\r\n          <div *ngIf=\"detailsForm.controls['name'].errors['duplicate']\">\r\n            {{ 'WALLET_DETAILS.FORM_ERRORS.NAME_DUPLICATE' | translate }}\r\n          </div>\r\n        </div>\r\n        <div class=\"error-block\" *ngIf=\"detailsForm.get('name').value.length >= variablesService.maxWalletNameLength\">\r\n          {{ 'WALLET_DETAILS.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-block\">\r\n        <label for=\"wallet-location\">{{ 'WALLET_DETAILS.LABEL_FILE_LOCATION' | translate }}</label>\r\n        <input type=\"text\" id=\"wallet-location\" formControlName=\"path\" readonly>\r\n      </div>\r\n    </form>\r\n    <!-- /from detail -->\r\n\r\n    <!-- form seed pasword -->\r\n    <ng-container *ngIf=\"!showSeed else seedPhraseContent\">\r\n      <form class=\"form-seed mt-2\" [formGroup]=\"seedPhraseForm\" (ngSubmit)=\"onSubmitSeed()\">\r\n        <label>{{ 'WALLET_DETAILS.LABEL_SEED_PHRASE' | translate }}</label>\r\n        <div class=\"form-content\">\r\n          <div class=\"seed-phrase-form\">\r\n            <div class=\"input-block\">\r\n              <label for=\"create-password\">{{ 'WALLET_DETAILS.CREATE_PASSWORD_SECURE' | translate }} (<a\r\n                  class=\"text-coral\">{{ 'WALLET_DETAILS.INFO' | translate }}</a>)</label>\r\n              <input type=\"password\" id=\"create-password\" formControlName=\"password\">\r\n            </div>\r\n            <div class=\"input-block\">\r\n              <label for=\"confirm-password\">{{ 'WALLET_DETAILS.FORM.CONFIRM_PASSWORD' | translate }}</label>\r\n              <input type=\"password\" id=\"confirm-password\" formControlName=\"confirmPassword\">\r\n            </div>\r\n            <span class=\"error-message\" *ngIf=\"!seedPhraseForm.valid\">\r\n              {{ 'WALLET_DETAILS.FORM_ERRORS.PASSWORDS_DONT_MATCH' | translate }}\r\n            </span>\r\n\r\n            <button type=\"submit\" class=\"blue-button\" [disabled]=\"!seedPhraseForm.valid\"><i class=\"icon safety\"></i>\r\n              {{ 'WALLET_DETAILS.FORM.GENERATE_SECURE_SEED' | translate }}</button>\r\n\r\n            <a class=\"secured-seed\"><i\r\n                class=\"icon info\"></i>{{ 'WALLET_DETAILS.FORM.SECURED_SEED_WILL_REQUIRE' | translate }}</a>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </ng-container>\r\n    <!-- /form seed pasword -->\r\n\r\n    <!-- seed phrase -->\r\n    <ng-template #seedPhraseContent>\r\n      <div class=\"seed-phrase mt-2\">\r\n        <div class=\"seed-phrase-title\">\r\n          <span>{{ 'WALLET_DETAILS.LABEL_SEED_PHRASE' | translate }}</span>\r\n          <p class=\"right-part\">\r\n            <span\r\n              *ngIf=\"seedPhraseForm.controls.password.value.length == 0\">{{ 'WALLET_DETAILS.SEED_IS_UNSECURED' | translate }}\r\n              <i class=\"icon unsecured\"></i></span>\r\n            <span\r\n              *ngIf=\"seedPhraseForm.controls.password.value.length > 0\">{{ 'WALLET_DETAILS.SEED_IS_SECURED' | translate }}\r\n              <i class=\"icon secured\"></i></span>\r\n          </p>\r\n        </div>\r\n        <div class=\"seed-phrase-content\" (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, seedPhrase)\">\r\n          <ng-container *ngFor=\"let word of seedPhrase.split(' '); let index = index\">\r\n            <div class=\"item\"\r\n              [class.dark]=\"(index + 1) >= 1 && (index + 1) <= 7 || (index + 1) >= 15 && (index + 1) <= 21\">\r\n              {{(index + 1) + '. ' + word}}</div>\r\n          </ng-container>\r\n        </div>\r\n        <div class=\"seed-phrase-footer\" *ngIf=\"seedPhraseForm.controls.password.value.length > 0\">\r\n          <span class=\"title\">{{ 'WALLET_DETAILS.REMEMBER_YOU_WILL_REQUIRE' | translate }}</span>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n    <!-- /seed phrase -->\r\n\r\n    <div class=\"wrap-buttons\" *ngIf=\"showSeed\">\r\n      <button type=\"button\" class=\"blue-button seed-phrase-button\"\r\n        (click)=\"runWallet()\">{{ 'SEED_PHRASE.BUTTON_CREATE_ACCOUNT' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button copy-button\"\r\n        (click)=\"copySeedPhrase()\">{{ 'SEED_PHRASE.BUTTON_COPY' | translate }}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-progress-container [width]=\"progressWidth\"\r\n  [labels]=\"['PROGRESS.ADD_WALLET', 'PROGRESS.SELECT_LOCATION', 'Seed Phrase', 'PROGRESS.CREATE_WALLET']\">\r\n</app-progress-container>"

/***/ }),

/***/ "./src/app/seed-phrase/seed-phrase.component.scss":
/*!********************************************************!*\
  !*** ./src/app/seed-phrase/seed-phrase.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative; }\n\n.content {\n  padding: 3.2rem 3rem 3rem; }\n\n.scrolled-content, .content {\n  height: 100%;\n  overflow-y: auto; }\n\n.mt-2 {\n  margin-top: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VlZC1waHJhc2UvRDpcXFByb2plY3RcXFdPUktfTkVXXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcc2VlZC1waHJhc2VcXHNlZWQtcGhyYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VlZC1waHJhc2Uvc2VlZC1waHJhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogMy4ycmVtIDNyZW0gM3JlbTtcclxufVxyXG4uc2Nyb2xsZWQtY29udGVudCwgLmNvbnRlbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubXQtMiB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/seed-phrase/seed-phrase.component.ts":
/*!******************************************************!*\
  !*** ./src/app/seed-phrase/seed-phrase.component.ts ***!
  \******************************************************/
/*! exports provided: SeedPhraseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeedPhraseComponent", function() { return SeedPhraseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SeedPhraseComponent = /** @class */ (function () {
    function SeedPhraseComponent(route, router, location, backend, variablesService, modalService, ngZone) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.location = location;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.seedPhrase = '';
        this.showSeed = false;
        this.seedPhraseCopied = false;
        this.progressWidth = '66%';
        this.detailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            if (_this.variablesService.wallets[i].wallet_id ===
                                _this.variablesService.currentWallet.wallet_id) {
                                return { same: true };
                            }
                            else {
                                return { duplicate: true };
                            }
                        }
                    }
                    return null;
                },
            ]),
            path: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
        this.seedPhraseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(this.variablesService.pattern)),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(this.variablesService.pattern)),
        }, { validators: this.checkPasswords });
    }
    SeedPhraseComponent.prototype.checkPasswords = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.confirmPassword.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    SeedPhraseComponent.prototype.ngOnInit = function () {
        this.showSeed = false;
        this.getWalletId();
        this.setWalletInfoNamePath();
    };
    SeedPhraseComponent.prototype.setWalletInfoNamePath = function () {
        this.detailsForm
            .get('name')
            .setValue(this.variablesService.opening_wallet.name);
        this.detailsForm
            .get('path')
            .setValue(this.variablesService.opening_wallet.path);
    };
    SeedPhraseComponent.prototype.getWalletId = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.wallet_id) {
                _this.wallet_id = params.wallet_id;
            }
        });
    };
    SeedPhraseComponent.prototype.runWallet = function () {
        var _this = this;
        var exists = false;
        this.variablesService.wallets.forEach(function (wallet) {
            if (wallet.address === _this.variablesService.opening_wallet.address) {
                exists = true;
            }
        });
        if (!exists) {
            this.backend.runWallet(this.wallet_id, function (run_status, run_data) {
                if (run_status) {
                    _this.variablesService.wallets.push(_this.variablesService.opening_wallet);
                    if (_this.variablesService.appPass) {
                        _this.backend.storeSecureAppData();
                    }
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/wallet/' + _this.wallet_id]);
                    });
                }
                else {
                    console.log(run_data['error_code']);
                }
            });
        }
        else {
            this.variablesService.opening_wallet = null;
            this.modalService.prepareModal('error', 'OPEN_WALLET.WITH_ADDRESS_ALREADY_OPEN');
            this.backend.closeWallet(this.wallet_id, function () {
                _this.ngZone.run(function () {
                    _this.router.navigate(['/']);
                });
            });
        }
    };
    SeedPhraseComponent.prototype.copySeedPhrase = function () {
        var _this = this;
        this.backend.setClipboard(this.seedPhrase, function () {
            _this.ngZone.run(function () {
                _this.seedPhraseCopied = true;
            });
        });
    };
    SeedPhraseComponent.prototype.back = function () {
        this.location.back();
    };
    SeedPhraseComponent.prototype.showSeedPhrase = function () {
        this.showSeed = true;
        this.progressWidth = '100%';
    };
    SeedPhraseComponent.prototype.onSubmitSeed = function () {
        var _this = this;
        if (this.seedPhraseForm.valid) {
            this.showSeedPhrase();
            var wallet_id = this.wallet_id;
            var seed_password = this.seedPhraseForm.controls.password.value;
            this.backend.getSmartWalletInfo({ wallet_id: wallet_id, seed_password: seed_password }, function (status, data) {
                if (data.hasOwnProperty('seed_phrase')) {
                    _this.ngZone.run(function () {
                        _this.seedPhrase = data['seed_phrase'].trim();
                    });
                }
            });
        }
    };
    SeedPhraseComponent.prototype.ngOnDestroy = function () {
        this.queryRouting.unsubscribe();
    };
    SeedPhraseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seed-phrase',
            template: __webpack_require__(/*! ./seed-phrase.component.html */ "./src/app/seed-phrase/seed-phrase.component.html"),
            styles: [__webpack_require__(/*! ./seed-phrase.component.scss */ "./src/app/seed-phrase/seed-phrase.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SeedPhraseComponent);
    return SeedPhraseComponent;
}());



/***/ }),

/***/ "./src/app/send-modal/send-modal.component.html":
/*!******************************************************!*\
  !*** ./src/app/send-modal/send-modal.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <div class=\"title\">\r\n    <span>{{ 'CONFIRM.TITLE' | translate }}</span>\r\n  </div>\r\n  <form [formGroup]=\"confirmForm\" (ngSubmit)=\"confirm()\">\r\n    <div class=\"content\">\r\n      <div class=\"message-container\">\r\n        <div class=\"message-block\">\r\n          <div class=\"message-label\">{{ 'CONFIRM.MESSAGE.SEND' | translate }}</div>\r\n          <div class=\"message-text\">{{ +form.get('amount').value }} {{variablesService.defaultCurrency}}</div>\r\n        </div>\r\n        <div class=\"message-block\">\r\n          <div class=\"message-label\">{{ 'CONFIRM.MESSAGE.FROM' | translate }}</div>\r\n          <div class=\"message-text\">{{ variablesService.currentWallet.address }}</div>\r\n        </div>\r\n        <div class=\"message-block\">\r\n          <div class=\"message-label\">{{ 'CONFIRM.MESSAGE.TO' | translate }}</div>\r\n          <div class=\"message-text\">{{ form.get('address').value }}</div>\r\n        </div>\r\n        <ng-container *ngIf=\"form.get('comment').value != ''\">\r\n          <div class=\"message-block\" *ngIf=\"form.get('comment').value != null\">\r\n            <div class=\"message-label\">{{ 'CONFIRM.MESSAGE.COMMENT' | translate }}</div>\r\n            <div class=\"message-text\">{{ form.get('comment').value }}</div>\r\n          </div>\r\n        </ng-container>\r\n        <div class=\"message-block confirm-master-pass\">\r\n          <div class=\"input-block\" *ngIf=\"variablesService.appPass\">\r\n            <label for=\"password\">{{ 'LOGIN.MASTER_PASS' | translate }}</label>\r\n            <input type=\"password\" id=\"password\" name=\"password\" formControlName=\"password\" autofocus (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\"/>\r\n            <div class=\"error-block\" >\r\n              <div *ngIf=\"(confirmForm.controls['password'].errors && confirmForm.controls['password'].errors.requiredPass)\r\n                        || (!confirmForm.controls['password'].value && confirmForm.controls['password'].touched)\">\r\n                {{ 'LOGIN.FORM_ERRORS.PASS_REQUIRED' | translate }}\r\n              </div>\r\n              <div *ngIf=\"confirmForm.controls['password'].errors && confirmForm.controls['password'].errors.passwordNotMatch\">\r\n                {{ 'LOGIN.FORM_ERRORS.MISMATCH' | translate }}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"wrapper-buttons\">\r\n      <button type=\"submit\" class=\"blue-button\" (click)=\"confirm()\">{{ 'CONFIRM.BUTTON_CONFIRM' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"onClose()\">{{ 'CONFIRM.BUTTON_CANCEL' | translate }}</button>\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/send-modal/send-modal.component.scss":
/*!******************************************************!*\
  !*** ./src/app/send-modal/send-modal.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.25); }\n\n.modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-position: center;\n  background-size: 200%;\n  padding: 0.3rem 3rem 3rem 3rem;\n  width: 64rem; }\n\n.modal .title {\n    padding: 1.4rem 0;\n    font-size: 1.8rem;\n    line-height: 3rem; }\n\n.modal .content {\n    display: flex;\n    font-size: 1.4rem; }\n\n.modal .content .message-container {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center;\n      margin: 1.4rem 3rem 6.2rem 0; }\n\n.modal .content .message-container .message-block {\n        display: flex;\n        margin-bottom: 1rem; }\n\n.modal .content .message-container .message-block:first-child .message-label {\n          line-height: 4rem; }\n\n.modal .content .message-container .message-block:first-child .message-text {\n          line-height: 4rem; }\n\n.modal .content .message-container .message-block:last-child {\n          margin-bottom: 0; }\n\n.modal .content .message-container .message-block .message-label {\n          min-width: 6.7rem;\n          line-height: 2rem; }\n\n.modal .content .message-container .message-block .message-text {\n          overflow-wrap: break-word;\n          margin-left: 4.8rem;\n          width: 43.4rem;\n          line-height: 2rem; }\n\n.modal .content .message-container .message-block.confirm-master-pass {\n          width: 100%;\n          margin: 2rem 0; }\n\n.modal .content .message-container .message-block.confirm-master-pass .input-block {\n            width: 100%; }\n\n.modal .wrapper-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n\n.modal .wrapper-buttons button {\n      width: 100%;\n      max-width: 15rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC1tb2RhbC9EOlxcUHJvamVjdFxcV09SS19ORVdcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxzZW5kLW1vZGFsXFxzZW5kLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5QixZQUFZLEVBQUE7O0FBUGQ7SUFVSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBOztBQVpyQjtJQWdCSSxhQUFhO0lBQ2IsaUJBQWlCLEVBQUE7O0FBakJyQjtNQW9CTSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2Qix1QkFBdUI7TUFDdkIsNEJBQTRCLEVBQUE7O0FBeEJsQztRQTJCUSxhQUFhO1FBQ2IsbUJBQW1CLEVBQUE7O0FBNUIzQjtVQWlDWSxpQkFBaUIsRUFBQTs7QUFqQzdCO1VBcUNZLGlCQUFpQixFQUFBOztBQXJDN0I7VUEwQ1UsZ0JBQWdCLEVBQUE7O0FBMUMxQjtVQThDVSxpQkFBaUI7VUFDakIsaUJBQWlCLEVBQUE7O0FBL0MzQjtVQW1EVSx5QkFBeUI7VUFDekIsbUJBQW1CO1VBQ25CLGNBQWM7VUFDZCxpQkFBaUIsRUFBQTs7QUF0RDNCO1VBMERVLFdBQVc7VUFDWCxjQUFjLEVBQUE7O0FBM0R4QjtZQTZEWSxXQUFXLEVBQUE7O0FBN0R2QjtJQXFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QixFQUFBOztBQXZFbEM7TUEwRU0sV0FBVztNQUNYLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VuZC1tb2RhbC9zZW5kLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbn1cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XHJcbiAgcGFkZGluZzogMC4zcmVtIDNyZW0gM3JlbSAzcmVtO1xyXG4gIHdpZHRoOiA2NHJlbTtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDEuNHJlbSAwO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuXHJcbiAgICAubWVzc2FnZS1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMS40cmVtIDNyZW0gNi4ycmVtIDA7XHJcblxyXG4gICAgICAubWVzc2FnZS1ibG9jayB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuXHJcbiAgICAgICAgICAubWVzc2FnZS1sYWJlbCB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tZXNzYWdlLXRleHQge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNHJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lc3NhZ2UtbGFiZWwge1xyXG4gICAgICAgICAgbWluLXdpZHRoOiA2LjdyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZXNzYWdlLXRleHQge1xyXG4gICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0LjhyZW07XHJcbiAgICAgICAgICB3aWR0aDogNDMuNHJlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5jb25maXJtLW1hc3Rlci1wYXNzIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICAgICAgICAuaW5wdXQtYmxvY2sge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC53cmFwcGVyLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogMTVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/send-modal/send-modal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/send-modal/send-modal.component.ts ***!
  \****************************************************/
/*! exports provided: SendModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendModalComponent", function() { return SendModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendModalComponent = /** @class */ (function () {
    function SendModalComponent(variablesService) {
        this.variablesService = variablesService;
        this.confirmForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.confirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SendModalComponent.prototype.ngOnInit = function () {
        if (this.variablesService.appPass) {
            this.confirmForm.controls['password'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.confirmForm.updateValueAndValidity();
        }
    };
    SendModalComponent.prototype.confirm = function () {
        if (this.variablesService.appPass) {
            if (this.confirmForm.controls['password'].value === '') {
                this.confirmForm.controls['password'].setErrors({ requiredPass: true });
                return;
            }
            this.confirmForm.controls['password'].setErrors({ requiredPass: false });
            if (this.variablesService.appPass === this.confirmForm.controls['password'].value) {
                this.confirmed.emit(true);
            }
            else {
                this.confirmForm.controls['password'].setErrors({ passwordNotMatch: true });
            }
        }
        else {
            this.confirmed.emit(true);
        }
    };
    SendModalComponent.prototype.onClose = function () {
        this.confirmed.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], SendModalComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SendModalComponent.prototype, "confirmed", void 0);
    SendModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-modal',
            template: __webpack_require__(/*! ./send-modal.component.html */ "./src/app/send-modal/send-modal.component.html"),
            styles: [__webpack_require__(/*! ./send-modal.component.scss */ "./src/app/send-modal/send-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"]])
    ], SendModalComponent);
    return SendModalComponent;
}());



/***/ }),

/***/ "./src/app/send/send.component.html":
/*!******************************************!*\
  !*** ./src/app/send/send.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-send\" [formGroup]=\"sendForm\" (ngSubmit)=\"showDialog()\">\r\n\r\n  <div class=\"input-block input-block-alias\">\r\n    <label for=\"send-address\">{{ 'SEND.ADDRESS' | translate }}</label>\r\n\r\n    <input type=\"text\" id=\"send-address\" formControlName=\"address\" (mousedown)=\"addressMouseDown($event)\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n\r\n    <div class=\"alias-dropdown scrolled-content\" *ngIf=\"isOpen\">\r\n      <div *ngFor=\"let item of localAliases\" (click)=\"setAlias(item.name)\">{{item.name}}</div>\r\n    </div>\r\n\r\n    <div class=\"error-block\" *ngIf=\"sendForm.controls['address'].invalid && (sendForm.controls['address'].dirty || sendForm.controls['address'].touched)\">\r\n      <div *ngIf=\"sendForm.controls['address'].errors['required']\">\r\n        {{ 'SEND.FORM_ERRORS.ADDRESS_REQUIRED' | translate }}\r\n      </div>\r\n      <div *ngIf=\"sendForm.controls['address'].errors['address_not_valid']\">\r\n        {{ 'SEND.FORM_ERRORS.ADDRESS_NOT_VALID' | translate }}\r\n      </div>\r\n      <div *ngIf=\"sendForm.controls['address'].errors['alias_not_valid']\">\r\n        {{ 'SEND.FORM_ERRORS.ALIAS_NOT_VALID' | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"input-blocks-row\">\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"send-amount\">{{ 'SEND.AMOUNT' | translate }}</label>\r\n      <input type=\"text\" id=\"send-amount\" formControlName=\"amount\" appInputValidate=\"money\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"sendForm.controls['amount'].invalid && (sendForm.controls['amount'].dirty || sendForm.controls['amount'].touched)\">\r\n        <div *ngIf=\"sendForm.controls['amount'].errors['required']\">\r\n          {{ 'SEND.FORM_ERRORS.AMOUNT_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"sendForm.controls['amount'].errors['zero']\">\r\n          {{ 'SEND.FORM_ERRORS.AMOUNT_ZERO' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"send-comment\">{{ 'SEND.COMMENT' | translate }}</label>\r\n      <input type=\"text\" id=\"send-comment\" formControlName=\"comment\" [maxLength]=\"variablesService.maxCommentLength\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"sendForm.get('comment').value && sendForm.get('comment').value.length >= variablesService.maxCommentLength\">\r\n        {{ 'SEND.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <button type=\"button\" class=\"send-select\" (click)=\"toggleOptions()\">\r\n    <span>{{ 'SEND.DETAILS' | translate }}</span><i class=\"icon arrow\" [class.down]=\"!additionalOptions\" [class.up]=\"additionalOptions\"></i>\r\n  </button>\r\n\r\n  <div class=\"additional-details\" *ngIf=\"additionalOptions\">\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"send-mixin\">{{ 'SEND.MIXIN' | translate }}</label>\r\n      <input type=\"text\" id=\"send-mixin\" formControlName=\"mixin\" appInputValidate=\"integer\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"sendForm.controls['mixin'].invalid && (sendForm.controls['mixin'].dirty || sendForm.controls['mixin'].touched)\">\r\n        <div *ngIf=\"sendForm.controls['mixin'].errors['required']\">\r\n          {{ 'SEND.FORM_ERRORS.AMOUNT_REQUIRED' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"send-fee\">{{ 'SEND.FEE' | translate }}</label>\r\n      <input type=\"text\" id=\"send-fee\" formControlName=\"fee\" appInputValidate=\"money\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"sendForm.controls['fee'].invalid && (sendForm.controls['fee'].dirty || sendForm.controls['fee'].touched)\">\r\n        <div *ngIf=\"sendForm.controls['fee'].errors['required']\">\r\n          {{ 'SEND.FORM_ERRORS.FEE_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"sendForm.controls['fee'].errors['less_min']\">\r\n          {{ 'SEND.FORM_ERRORS.FEE_MINIMUM' | translate : {fee: variablesService.default_fee} }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"checkbox-block\" [ngClass]=\"{'disabled-checkbox-block': hideWalletAddress}\">\r\n      <input type=\"checkbox\" id=\"send-hide\" class=\"style-checkbox\" formControlName=\"hide\" [checked]= \"hideWalletAddress\">\r\n      <label for=\"send-hide\">{{ 'SEND.HIDE' | translate }}</label>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"blue-button\" [disabled]=\"!sendForm.valid || !variablesService.currentWallet.loaded\">{{ 'SEND.BUTTON' | translate }}</button>\r\n\r\n  <app-send-modal *ngIf=\"isModalDialogVisible\" [form]=\"sendForm\" (confirmed)=\"confirmed($event)\"></app-send-modal>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/send/send.component.scss":
/*!******************************************!*\
  !*** ./src/app/send/send.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.form-send .input-blocks-row {\n  display: flex; }\n\n.form-send .input-blocks-row > div {\n    flex-basis: 50%; }\n\n.form-send .input-blocks-row > div:first-child {\n      margin-right: 1.5rem; }\n\n.form-send .input-blocks-row > div:last-child {\n      margin-left: 1.5rem; }\n\n.form-send .send-select {\n  display: flex;\n  align-items: center;\n  background: transparent;\n  border: none;\n  font-size: 1.3rem;\n  line-height: 1.3rem;\n  margin: 1.5rem 0 0;\n  padding: 0;\n  width: 100%;\n  max-width: 15rem;\n  height: 1.3rem; }\n\n.form-send .send-select .arrow {\n    margin-left: 1rem;\n    width: 0.8rem;\n    height: 0.8rem; }\n\n.form-send .send-select .arrow.down {\n      -webkit-mask: url('arrow-down.svg') no-repeat center;\n              mask: url('arrow-down.svg') no-repeat center; }\n\n.form-send .send-select .arrow.up {\n      -webkit-mask: url('arrow-up.svg') no-repeat center;\n              mask: url('arrow-up.svg') no-repeat center; }\n\n.form-send .additional-details {\n  display: flex;\n  margin-top: 1.5rem;\n  padding: 0.5rem 0 2rem; }\n\n.form-send .additional-details > div {\n    flex-basis: 25%; }\n\n.form-send .additional-details > div:first-child {\n      padding-left: 1.5rem;\n      padding-right: 1rem; }\n\n.form-send .additional-details > div:last-child {\n      padding-left: 1rem;\n      padding-right: 1.5rem; }\n\n.form-send .additional-details .checkbox-block {\n    flex-basis: 50%; }\n\n.form-send .additional-details .checkbox-block > label {\n      top: 3.5rem; }\n\n.form-send .additional-details .checkbox-block.disabled-checkbox-block label {\n      cursor: not-allowed; }\n\n.form-send .additional-details .checkbox-block.disabled-checkbox-block label:before {\n        background-color: #556576;\n        border: 0.1rem solid #556576; }\n\n.form-send button {\n  margin: 2.4rem 0;\n  width: 100%;\n  max-width: 15rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC9EOlxcUHJvamVjdFxcV09SS19ORVdcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxzZW5kXFxzZW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBR0ksYUFBYSxFQUFBOztBQUhqQjtJQU1NLGVBQWUsRUFBQTs7QUFOckI7TUFTUSxvQkFBb0IsRUFBQTs7QUFUNUI7TUFhUSxtQkFBbUIsRUFBQTs7QUFiM0I7RUFtQkksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUE3QmxCO0lBZ0NNLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsY0FBYyxFQUFBOztBQWxDcEI7TUFxQ1Esb0RBQTREO2NBQTVELDRDQUE0RCxFQUFBOztBQXJDcEU7TUF5Q1Esa0RBQTBEO2NBQTFELDBDQUEwRCxFQUFBOztBQXpDbEU7RUErQ0ksYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFqRDFCO0lBb0RNLGVBQWUsRUFBQTs7QUFwRHJCO01BdURRLG9CQUFvQjtNQUNwQixtQkFBbUIsRUFBQTs7QUF4RDNCO01BNERRLGtCQUFrQjtNQUNsQixxQkFBcUIsRUFBQTs7QUE3RDdCO0lBa0VNLGVBQWUsRUFBQTs7QUFsRXJCO01BcUVRLFdBQVcsRUFBQTs7QUFyRW5CO01BeUVVLG1CQUFtQixFQUFBOztBQXpFN0I7UUEyRVkseUJBQXlCO1FBQ3pCLDRCQUE0QixFQUFBOztBQTVFeEM7RUFvRkksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlbmQvc2VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tc2VuZCB7XHJcblxyXG4gIC5pbnB1dC1ibG9ja3Mtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgPiBkaXYge1xyXG4gICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VuZC1zZWxlY3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcclxuICAgIG1hcmdpbjogMS41cmVtIDAgMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTVyZW07XHJcbiAgICBoZWlnaHQ6IDEuM3JlbTtcclxuXHJcbiAgICAuYXJyb3cge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgd2lkdGg6IDAuOHJlbTtcclxuICAgICAgaGVpZ2h0OiAwLjhyZW07XHJcblxyXG4gICAgICAmLmRvd24ge1xyXG4gICAgICAgIG1hc2s6IHVybCh+c3JjL2Fzc2V0cy9pY29ucy9hcnJvdy1kb3duLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi51cCB7XHJcbiAgICAgICAgbWFzazogdXJsKH5zcmMvYXNzZXRzL2ljb25zL2Fycm93LXVwLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFkZGl0aW9uYWwtZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAgMnJlbTtcclxuXHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDI1JTtcclxuXHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jaGVja2JveC1ibG9jayB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuXHJcbiAgICAgID4gbGFiZWwge1xyXG4gICAgICAgIHRvcDogMy41cmVtO1xyXG4gICAgICB9XHJcbiAgICAgICYuZGlzYWJsZWQtY2hlY2tib3gtYmxvY2sge1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTY1NzY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICM1NTY1NzY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAyLjRyZW0gMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/send/send.component.ts":
/*!****************************************!*\
  !*** ./src/app/send/send.component.ts ***!
  \****************************************/
/*! exports provided: SendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendComponent", function() { return SendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SendComponent = /** @class */ (function () {
    function SendComponent(route, backend, variablesService, modalService, ngZone) {
        var _this = this;
        this.route = route;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.isOpen = false;
        this.localAliases = [];
        this.isModalDialogVisible = false;
        this.hideWalletAddress = false;
        this.currentWalletId = null;
        this.sendForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    _this.localAliases = [];
                    if (g.value) {
                        if (g.value.indexOf('@') !== 0) {
                            _this.isOpen = false;
                            _this.backend.validateAddress(g.value, function (valid_status) {
                                _this.ngZone.run(function () {
                                    if (valid_status === false) {
                                        g.setErrors(Object.assign({ 'address_not_valid': true }, g.errors));
                                    }
                                    else {
                                        if (g.hasError('address_not_valid')) {
                                            delete g.errors['address_not_valid'];
                                            if (Object.keys(g.errors).length === 0) {
                                                g.setErrors(null);
                                            }
                                        }
                                    }
                                });
                            });
                            return (g.hasError('address_not_valid')) ? { 'address_not_valid': true } : null;
                        }
                        else {
                            _this.isOpen = true;
                            _this.localAliases = _this.variablesService.aliases.filter(function (item) {
                                return item.name.indexOf(g.value) > -1;
                            });
                            if (!(/^@?[a-z0-9\.\-]{6,25}$/.test(g.value))) {
                                g.setErrors(Object.assign({ 'alias_not_valid': true }, g.errors));
                            }
                            else {
                                _this.backend.getAliasByName(g.value.replace('@', ''), function (alias_status) {
                                    _this.ngZone.run(function () {
                                        if (alias_status) {
                                            if (g.hasError('alias_not_valid')) {
                                                delete g.errors['alias_not_valid'];
                                                if (Object.keys(g.errors).length === 0) {
                                                    g.setErrors(null);
                                                }
                                            }
                                        }
                                        else {
                                            g.setErrors(Object.assign({ 'alias_not_valid': true }, g.errors));
                                        }
                                    });
                                });
                            }
                            return (g.hasError('alias_not_valid')) ? { 'alias_not_valid': true } : null;
                        }
                    }
                    return null;
                }]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    if (new bignumber_js__WEBPACK_IMPORTED_MODULE_6__["BigNumber"](g.value).eq(0)) {
                        return { 'zero': true };
                    }
                    return null;
                }]),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mixin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_shared_constants__WEBPACK_IMPORTED_MODULE_7__["MIXIN"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.variablesService.default_fee, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    if ((new bignumber_js__WEBPACK_IMPORTED_MODULE_6__["BigNumber"](g.value)).isLessThan(_this.variablesService.default_fee)) {
                        return { 'less_min': true };
                    }
                    return null;
                }]),
            hide: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
        this.additionalOptions = false;
    }
    SendComponent.prototype.addressMouseDown = function (e) {
        if (e['button'] === 0 && this.sendForm.get('address').value && this.sendForm.get('address').value.indexOf('@') === 0) {
            this.isOpen = true;
        }
    };
    SendComponent.prototype.setAlias = function (alias) {
        this.sendForm.get('address').setValue(alias);
    };
    SendComponent.prototype.onClick = function (targetElement) {
        if (targetElement.id !== 'send-address' && this.isOpen) {
            this.isOpen = false;
        }
    };
    SendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentRouting = this.route.parent.params.subscribe(function (params) {
            _this.currentWalletId = params['id'];
            _this.mixin = _this.variablesService.currentWallet.send_data['mixin'] || _shared_constants__WEBPACK_IMPORTED_MODULE_7__["MIXIN"];
            if (_this.variablesService.currentWallet.is_auditable) {
                _this.mixin = 0;
                _this.sendForm.controls['mixin'].disable();
            }
            _this.hideWalletAddress = _this.variablesService.currentWallet.is_auditable && !_this.variablesService.currentWallet.is_watch_only;
            if (_this.hideWalletAddress) {
                _this.sendForm.controls['hide'].disable();
            }
            _this.sendForm.reset({
                address: _this.variablesService.currentWallet.send_data['address'],
                amount: _this.variablesService.currentWallet.send_data['amount'],
                comment: _this.variablesService.currentWallet.send_data['comment'],
                mixin: _this.mixin,
                fee: _this.variablesService.currentWallet.send_data['fee'] || _this.variablesService.default_fee,
                hide: _this.variablesService.currentWallet.send_data['hide'] || false
            });
        });
    };
    SendComponent.prototype.showDialog = function () {
        this.isModalDialogVisible = true;
    };
    SendComponent.prototype.confirmed = function (confirmed) {
        if (confirmed) {
            this.onSend();
        }
        this.isModalDialogVisible = false;
    };
    SendComponent.prototype.onSend = function () {
        var _this = this;
        if (this.sendForm.valid) {
            if (this.sendForm.get('address').value.indexOf('@') !== 0) {
                this.backend.validateAddress(this.sendForm.get('address').value, function (valid_status) {
                    if (valid_status === false) {
                        _this.ngZone.run(function () {
                            _this.sendForm.get('address').setErrors({ 'address_not_valid': true });
                        });
                    }
                    else {
                        _this.backend.sendMoney(_this.currentWalletId, _this.sendForm.get('address').value, _this.sendForm.get('amount').value, _this.sendForm.get('fee').value, _this.sendForm.get('mixin').value, _this.sendForm.get('comment').value, _this.sendForm.get('hide').value, function (send_status) {
                            if (send_status) {
                                _this.modalService.prepareModal('success', 'SEND.SUCCESS_SENT');
                                _this.variablesService.currentWallet.send_data = { address: null, amount: null, comment: null, mixin: null, fee: null, hide: null };
                                _this.sendForm.reset({ address: null, amount: null, comment: null, mixin: _this.mixin, fee: _this.variablesService.default_fee, hide: false });
                            }
                        });
                    }
                });
            }
            else {
                this.backend.getAliasByName(this.sendForm.get('address').value.replace('@', ''), function (alias_status, alias_data) {
                    _this.ngZone.run(function () {
                        if (alias_status === false) {
                            _this.ngZone.run(function () {
                                _this.sendForm.get('address').setErrors({ 'alias_not_valid': true });
                            });
                        }
                        else {
                            _this.backend.sendMoney(_this.currentWalletId, alias_data.address, // this.sendForm.get('address').value,
                            _this.sendForm.get('amount').value, _this.sendForm.get('fee').value, _this.sendForm.get('mixin').value, _this.sendForm.get('comment').value, _this.sendForm.get('hide').value, function (send_status) {
                                if (send_status) {
                                    _this.modalService.prepareModal('success', 'SEND.SUCCESS_SENT');
                                    _this.variablesService.currentWallet.send_data = { address: null, amount: null, comment: null, mixin: null, fee: null, hide: null };
                                    _this.sendForm.reset({ address: null, amount: null, comment: null, mixin: _this.mixin, fee: _this.variablesService.default_fee, hide: false });
                                }
                            });
                        }
                    });
                });
            }
        }
    };
    SendComponent.prototype.toggleOptions = function () {
        this.additionalOptions = !this.additionalOptions;
    };
    SendComponent.prototype.ngOnDestroy = function () {
        this.parentRouting.unsubscribe();
        this.variablesService.currentWallet.send_data = {
            address: this.sendForm.get('address').value,
            amount: this.sendForm.get('amount').value,
            comment: this.sendForm.get('comment').value,
            mixin: this.sendForm.get('mixin').value,
            fee: this.sendForm.get('fee').value,
            hide: this.sendForm.get('hide').value
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SendComponent.prototype, "onClick", null);
    SendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send',
            template: __webpack_require__(/*! ./send.component.html */ "./src/app/send/send.component.html"),
            styles: [__webpack_require__(/*! ./send.component.scss */ "./src/app/send/send.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SendComponent);
    return SendComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\r\n\r\n  <div>\r\n    <div class=\"head\">\r\n      <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n        <i class=\"icon back\"></i>\r\n        <span>{{ 'COMMON.BACK' | translate }}</span>\r\n      </button>\r\n    </div>\r\n\r\n    <h3 class=\"settings-title\">{{ 'SETTINGS.TITLE' | translate }}</h3>\r\n\r\n    <div class=\"theme-selection\">\r\n      <div class=\"radio-block\">\r\n        <input class=\"style-radio\" type=\"radio\" id=\"dark\" name=\"theme\" value=\"dark\" [checked]=\"theme == 'dark'\" (change)=\"setTheme('dark')\">\r\n        <label for=\"dark\">{{ 'SETTINGS.DARK_THEME' | translate }}</label>\r\n      </div>\r\n      <div class=\"radio-block\">\r\n        <input class=\"style-radio\" type=\"radio\" id=\"white\" name=\"theme\" value=\"white\" [checked]=\"theme == 'white'\" (change)=\"setTheme('white')\">\r\n        <label for=\"white\">{{ 'SETTINGS.WHITE_THEME' | translate }}</label>\r\n      </div>\r\n      <div class=\"radio-block\">\r\n        <input class=\"style-radio\" type=\"radio\" id=\"gray\" name=\"theme\" value=\"gray\" [checked]=\"theme == 'gray'\" (change)=\"setTheme('gray')\">\r\n        <label for=\"gray\">{{ 'SETTINGS.GRAY_THEME' | translate }}</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"scale-selection\">\r\n      <button type=\"button\" class=\"button-block\" [class.active]=\"item.id === variablesService.settings.scale\" *ngFor=\"let item of appScaleOptions\" (click)=\"setScale(item.id)\">\r\n        <span class=\"label\">{{item.name | translate}}</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"lock-selection\">\r\n      <label class=\"lock-selection-title\">{{ 'SETTINGS.LANGUAGE.TITLE' | translate }}</label>\r\n      <ng-select class=\"custom-select\"\r\n                 [items]=\"languagesOptions\"\r\n                 bindValue=\"name\"\r\n                 bindLabel=\"language\"\r\n                 [(ngModel)]=\"variablesService.settings.language\"\r\n                 [clearable]=\"false\"\r\n                 [searchable]=\"false\"\r\n                 (change)=\"onLanguageChange()\">\r\n        <ng-template ng-label-tmp let-item=\"item\">\r\n          {{item.language | translate}}\r\n        </ng-template>\r\n        <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n          {{item.language | translate}}\r\n        </ng-template>\r\n      </ng-select>\r\n    </div>\r\n\r\n    <div class=\"lock-selection\">\r\n      <label class=\"lock-selection-title\">{{ 'SETTINGS.APP_LOCK.TITLE' | translate }}</label>\r\n      <ng-select class=\"custom-select\"\r\n                 [items]=\"appLockOptions\"\r\n                 bindValue=\"id\"\r\n                 bindLabel=\"name\"\r\n                 [(ngModel)]=\"variablesService.settings.appLockTime\"\r\n                 [clearable]=\"false\"\r\n                 [searchable]=\"false\"\r\n                 (change)=\"onLockChange()\">\r\n        <ng-template ng-label-tmp let-item=\"item\">\r\n          {{item.name | translate}}\r\n        </ng-template>\r\n        <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n          {{item.name | translate}}\r\n        </ng-template>\r\n      </ng-select>\r\n    </div>\r\n\r\n    <div class=\"lock-selection\">\r\n      <label class=\"lock-selection-title\">{{ 'SETTINGS.APP_LOG_TITLE' | translate }}</label>\r\n      <ng-select class=\"custom-select\"\r\n                 [items]=\"appLogOptions\"\r\n                 bindValue=\"id\"\r\n                 bindLabel=\"id\"\r\n                 [(ngModel)]=\"variablesService.settings.appLog\"\r\n                 [clearable]=\"false\"\r\n                 [searchable]=\"false\"\r\n                 (change)=\"onLogChange()\">\r\n      </ng-select>\r\n    </div>\r\n\r\n    <form class=\"master-password\" [formGroup]=\"changeForm\" (ngSubmit)=\"onSubmitChangePass()\">\r\n\r\n      <span class=\"master-password-title\">{{ 'SETTINGS.MASTER_PASSWORD.TITLE' | translate }}</span>\r\n\r\n      <div class=\"input-block\" *ngIf=\"variablesService.appPass\">\r\n        <label for=\"old-password\">{{ 'SETTINGS.MASTER_PASSWORD.OLD' | translate }}</label>\r\n        <input type=\"password\" id=\"old-password\" formControlName=\"password\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\"/>\r\n        <div class=\"error-block\" *ngIf=\"changeForm.invalid && changeForm.controls['password'].valid && (changeForm.controls['password'].dirty || changeForm.controls['password'].touched) && changeForm.errors && changeForm.errors.pass_mismatch\">\r\n          {{ 'SETTINGS.FORM_ERRORS.PASS_NOT_MATCH' | translate }}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-block\">\r\n        <label for=\"new-password\">{{ 'SETTINGS.MASTER_PASSWORD.NEW' | translate }}</label>\r\n        <input type=\"password\" id=\"new-password\" formControlName=\"new_password\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\"/>\r\n        <div class=\"error-block\" *ngIf=\"changeForm.controls['new_password'].dirty && changeForm.controls['new_password'].errors\">\r\n          <div *ngIf=\"changeForm.controls['new_password'].errors.pattern\">\r\n            {{ 'ERRORS.WRONG_PASSWORD' | translate }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-block\">\r\n        <label for=\"confirm-password\">{{ 'SETTINGS.MASTER_PASSWORD.CONFIRM' | translate }}</label>\r\n        <input type=\"password\" id=\"confirm-password\" formControlName=\"new_confirmation\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\"/>\r\n        <div class=\"error-block\" *ngIf=\"changeForm.invalid && (changeForm.controls['new_confirmation'].dirty || changeForm.controls['new_confirmation'].touched) && changeForm.errors && changeForm.errors.confirm_mismatch\">\r\n          {{ 'SETTINGS.FORM_ERRORS.CONFIRM_NOT_MATCH' | translate }}\r\n        </div>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"blue-button\" [disabled]=\"!changeForm.valid\">{{ 'SETTINGS.MASTER_PASSWORD.BUTTON' | translate }}</button>\r\n\r\n    </form>\r\n  </div>\r\n\r\n  <div>\r\n    <div class=\"last-build\">{{ 'SETTINGS.LAST_BUILD' | translate : {value: currentBuild} }}</div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head {\n  justify-content: flex-end; }\n\n.settings-title {\n  font-size: 1.7rem; }\n\n.theme-selection {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 2.4rem 0;\n  width: 50%; }\n\n.theme-selection .radio-block {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1.3rem;\n    line-height: 2.7rem; }\n\n.lock-selection {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 2.4rem 0;\n  width: 50%; }\n\n.lock-selection .lock-selection-title {\n    display: flex;\n    font-size: 1.5rem;\n    line-height: 2.7rem;\n    margin-bottom: 1rem; }\n\n.scale-selection {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 0 4rem;\n  width: 50%;\n  height: 0.5rem; }\n\n.scale-selection .button-block {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1 0 auto;\n    margin: 0 0.2rem;\n    padding: 0;\n    height: 0.5rem; }\n\n.scale-selection .button-block .label {\n      position: absolute;\n      bottom: -1rem;\n      left: 50%;\n      transform: translate(-50%, 100%);\n      font-size: 1rem;\n      white-space: nowrap; }\n\n.master-password {\n  width: 50%; }\n\n.master-password .master-password-title {\n    display: flex;\n    font-size: 1.5rem;\n    line-height: 2.7rem;\n    margin-bottom: 1rem; }\n\n.master-password button {\n    margin: 2.5rem auto;\n    width: 100%;\n    max-width: 15rem; }\n\n.last-build {\n  font-size: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvRDpcXFByb2plY3RcXFdPUktfTkVXXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcc2V0dGluZ3NcXHNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFMWjtJQVFJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTs7QUFJdkI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUxaO0lBUUksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixjQUFjLEVBQUE7O0FBTmhCO0lBU0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGNBQWMsRUFBQTs7QUFoQmxCO01BbUJNLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsU0FBUztNQUNULGdDQUFnQztNQUNoQyxlQUFlO01BQ2YsbUJBQW1CLEVBQUE7O0FBS3pCO0VBQ0UsVUFBVSxFQUFBOztBQURaO0lBSUksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CLEVBQUE7O0FBUHZCO0lBV0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uc2V0dGluZ3MtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xyXG59XHJcblxyXG4udGhlbWUtc2VsZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luOiAyLjRyZW0gMDtcclxuICB3aWR0aDogNTAlO1xyXG5cclxuICAucmFkaW8tYmxvY2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjdyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubG9jay1zZWxlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBtYXJnaW46IDIuNHJlbSAwO1xyXG4gIHdpZHRoOiA1MCU7XHJcblxyXG4gIC5sb2NrLXNlbGVjdGlvbi10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi43cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zY2FsZS1zZWxlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMCAwIDRyZW07XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDAuNXJlbTtcclxuXHJcbiAgLmJ1dHRvbi1ibG9jayB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgICBtYXJnaW46IDAgMC4ycmVtO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogMC41cmVtO1xyXG5cclxuICAgIC5sYWJlbCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAtMXJlbTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1hc3Rlci1wYXNzd29yZCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuXHJcbiAgLm1hc3Rlci1wYXNzd29yZC10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi43cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDIuNXJlbSBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDE1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmxhc3QtYnVpbGQge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helpers_services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/services/utils.service */ "./src/app/_helpers/services/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(renderer, variablesService, backend, location, translate, ngZone, utilsService) {
        var _this = this;
        this.renderer = renderer;
        this.variablesService = variablesService;
        this.backend = backend;
        this.location = location;
        this.translate = translate;
        this.ngZone = ngZone;
        this.utilsService = utilsService;
        this.languagesOptions = [
            {
                name: 'en',
                language: 'SETTINGS.LANGUAGE.EN'
            },
            {
                name: 'fr',
                language: 'SETTINGS.LANGUAGE.FR'
            },
            {
                name: 'de',
                language: 'SETTINGS.LANGUAGE.DE'
            },
            {
                name: 'id',
                language: 'SETTINGS.LANGUAGE.ID'
            },
            {
                name: 'it',
                language: 'SETTINGS.LANGUAGE.IT'
            },
            {
                name: 'pt',
                language: 'SETTINGS.LANGUAGE.PT'
            }
        ];
        this.appLockOptions = [
            {
                id: 5,
                name: 'SETTINGS.APP_LOCK.TIME1'
            },
            {
                id: 15,
                name: 'SETTINGS.APP_LOCK.TIME2'
            },
            {
                id: 60,
                name: 'SETTINGS.APP_LOCK.TIME3'
            },
            {
                id: 0,
                name: 'SETTINGS.APP_LOCK.TIME4'
            }
        ];
        this.appScaleOptions = [
            {
                id: 7.5,
                name: 'SETTINGS.SCALE.75'
            },
            {
                id: 10,
                name: 'SETTINGS.SCALE.100'
            },
            {
                id: 12.5,
                name: 'SETTINGS.SCALE.125'
            },
            {
                id: 15,
                name: 'SETTINGS.SCALE.150'
            }
        ];
        this.appLogOptions = [
            {
                id: -1
            },
            {
                id: 0
            },
            {
                id: 1
            },
            {
                id: 2
            },
            {
                id: 3
            },
            {
                id: 4
            }
        ];
        this.currentBuild = '';
        this.theme = this.variablesService.settings.theme;
        this.scale = this.variablesService.settings.scale;
        this.changeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.variablesService.pattern)),
            new_confirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        }, [function (g) {
                return g.get('new_password').value === g.get('new_confirmation').value ? null : { 'confirm_mismatch': true };
            }, function (g) {
                if (_this.variablesService.appPass) {
                    return g.get('password').value === _this.variablesService.appPass ? null : { 'pass_mismatch': true };
                }
                return null;
            }]);
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backend.getVersion(function (version, type) {
            _this.ngZone.run(function () {
                _this.currentBuild = version;
                _this.variablesService.testnet = false;
                if (type == 'testnet') {
                    _this.currentBuild += ' TESTNET';
                    _this.variablesService.testnet = true;
                }
                _this.variablesService.networkType = type;
            });
        });
    };
    SettingsComponent.prototype.setTheme = function (theme) {
        this.renderer.removeClass(document.body, 'theme-' + this.theme);
        this.theme = theme;
        this.variablesService.settings.theme = this.theme;
        this.renderer.addClass(document.body, 'theme-' + this.theme);
        this.backend.storeAppData();
    };
    SettingsComponent.prototype.setScale = function (scale) {
        this.scale = scale;
        this.variablesService.settings.scale = this.scale;
        var width = this.utilsService.getMinWidthByScale(this.scale);
        var app = document.documentElement.querySelector('app-root');
        this.renderer.setStyle(app, 'min-width', width + 'px');
        this.renderer.setStyle(document.documentElement, 'font-size', this.scale + 'px');
        this.backend.storeAppData();
    };
    SettingsComponent.prototype.onSubmitChangePass = function () {
        var _this = this;
        if (this.changeForm.valid) {
            this.variablesService.appPass = this.changeForm.get('new_password').value;
            if (this.variablesService.appPass) {
                this.backend.setMasterPassword({ pass: this.variablesService.appPass }, function (status, data) {
                    if (status) {
                        _this.backend.storeSecureAppData({ pass: _this.variablesService.appPass });
                        _this.variablesService.appLogin = true;
                        _this.variablesService.dataIsLoaded = true;
                        if (_this.variablesService.settings.appLockTime) {
                            _this.variablesService.startCountdown();
                        }
                    }
                    else {
                        console.log(data['error_code']);
                    }
                });
            }
            else {
                this.backend.dropSecureAppData();
            }
            this.changeForm.reset();
        }
    };
    SettingsComponent.prototype.onLockChange = function () {
        if (this.variablesService.appLogin && this.variablesService.settings.appLockTime) {
            this.variablesService.restartCountdown();
        }
        this.backend.storeAppData();
    };
    SettingsComponent.prototype.onLogChange = function () {
        this.backend.setLogLevel(this.variablesService.settings.appLog);
        this.backend.storeAppData();
    };
    SettingsComponent.prototype.onLanguageChange = function () {
        this.translate.use(this.variablesService.settings.language);
        this.backend.storeAppData();
    };
    SettingsComponent.prototype.back = function () {
        this.location.back();
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            providers: [_helpers_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]],
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _helpers_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-accounts\">\r\n  <div class=\"sidebar-accounts-header\">\r\n    <h3>{{ 'SIDEBAR.TITLE' | translate }}</h3><button (click)=\"goMainPage()\">{{ 'SIDEBAR.ADD_NEW' | translate }}</button>\r\n  </div>\r\n  <div class=\"sidebar-accounts-list scrolled-content\">\r\n    <div class=\"sidebar-account\" *ngFor=\"let wallet of variablesService.wallets\" [class.active]=\"wallet?.wallet_id === walletActive\" [routerLink]=\"['/wallet/' + wallet.wallet_id + '/history']\" [queryParams]=\"{sidenav: true}\">\r\n      <div class=\"wallet-type\" (click)=\"goToAuditableWalletHelpPage($event)\">\r\n        <div class=\"content auditable\" *ngIf=\"wallet.is_auditable && !wallet.is_watch_only\">\r\n            Auditable\r\n        </div>\r\n        <div class=\"content watch-only\" *ngIf=\"!wallet.is_auditable && wallet.is_watch_only\">\r\n            Watch-only\r\n        </div>\r\n        <div class=\"content auditable-watch-only\" *ngIf=\"wallet.is_auditable && wallet.is_watch_only\">\r\n          Tracking\r\n        </div>\r\n      </div>\r\n      <div class=\"close-wallet-wrapper\">\r\n        <button type=\"button\" (click)=\"showDialog(wallet.wallet_id)\" tooltip=\"{{ 'WALLET.TOOLTIPS.CLOSE' | translate }}\" placement=\"top-left\" tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\">\r\n          <i class=\"icon close-wallet\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"sidebar-account-row account-title-balance\">\r\n        <span class=\"title\" tooltip=\"{{ wallet.name }}\" placement=\"top-left\" tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{wallet.name}}</span>\r\n        <span class=\"balance\">{{wallet.balance | intToMoney : '3' }} {{variablesService.defaultCurrency}}</span>\r\n      </div>\r\n      <div class=\"sidebar-account-row account-alias\">\r\n        <div class=\"name\">\r\n          <span tooltip=\"{{wallet.alias['name']}}\" placement=\"top-left\" tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{wallet.alias['name']}}</span>\r\n          <ng-container *ngIf=\"wallet.alias['comment'] && wallet.alias['comment'].length\">\r\n            <span class=\"icon comment\" tooltip=\"{{wallet.alias['comment']}}\" placement=\"top\" tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\">i</span>\r\n          </ng-container>\r\n        </div>\r\n        <span class=\"price\">$ {{wallet.getMoneyEquivalent(variablesService.moneyEquivalent) | intToMoney | number : '1.2-2'}}</span>\r\n      </div>\r\n      <ng-container *ngIf=\"(!wallet.is_auditable && !wallet.is_watch_only) || (wallet.is_auditable && !wallet.is_watch_only)\">\r\n        <div class=\"sidebar-account-row account-staking\" *ngIf=\"!(!wallet.loaded && variablesService.daemon_state === 2)\">\r\n          <span class=\"text\">{{ 'SIDEBAR.ACCOUNT.STAKING' | translate }}</span>\r\n          <app-staking-switch [wallet_id]=\"wallet.wallet_id\" [(staking)]=\"wallet.staking\"></app-staking-switch>\r\n        </div>\r\n      </ng-container>\r\n      <div class=\"sidebar-account-row account-messages\" *ngIf=\"!(!wallet.loaded && variablesService.daemon_state === 2)\">\r\n        <span class=\"text\">{{ 'SIDEBAR.ACCOUNT.MESSAGES' | translate }}</span>\r\n        <span class=\"indicator\">{{wallet.new_contracts}}</span>\r\n      </div>\r\n      <div class=\"sidebar-account-row account-synchronization\" *ngIf=\"!wallet.loaded && variablesService.daemon_state === 2\">\r\n        <span class=\"status\">{{ 'SIDEBAR.ACCOUNT.SYNCING' | translate }}</span>\r\n        <div class=\"progress-bar-container\">\r\n          <div class=\"progress-bar\">\r\n            <div class=\"fill\" [style.width]=\"wallet.progress + '%'\"></div>\r\n          </div>\r\n          <div class=\"progress-percent\">{{ wallet.progress }}%</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"sidebar-settings\">\r\n  <div class=\"wrap-button\" routerLinkActive=\"active\" *ngIf=\"variablesService.appPass === ''; else contactsShow\" tooltip=\"{{ 'SIDEBAR.CONTACTS_TOOLTIP' | translate }}\" placement=\"top\" tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\">\r\n    <button (click)=\"contactsRoute()\" [class.disabled]=\"variablesService.daemon_state !== 2 || variablesService.appPass === ''\"\r\n      [disabled]=\"variablesService.daemon_state !== 2 || variablesService.appPass === ''\">\r\n      <i class=\"icon contacts\"></i>\r\n      <span>{{ 'SIDEBAR.CONTACTS' | translate }}</span>\r\n    </button>\r\n  </div>\r\n  <ng-template #contactsShow>\r\n    <div class=\"wrap-button\" routerLinkActive=\"active\">\r\n      <button (click)=\"contactsRoute()\" [class.disabled]=\"variablesService.daemon_state !== 2\" [disabled]=\"variablesService.daemon_state !== 2\"\r\n        (mouseover)=\"menuItem = true\"\r\n        (mouseleave)=\"menuItem = false\"\r\n      >\r\n        <i class=\"icon contacts\" *ngIf=\"!menuItem; else svgContacts\"></i>\r\n        <ng-template #svgContacts>\r\n          <div class=\"animated\" [innerHTML]=\"contacts | safeHTML\"></div>\r\n        </ng-template>\r\n        <span>{{ 'SIDEBAR.CONTACTS' | translate }}</span>\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n  <div class=\"wrap-button\" routerLinkActive=\"active\">\r\n    <button [routerLink]=\"['/settings']\"\r\n      (mouseover)=\"menuItemHovered = true\"\r\n      (mouseleave)=\"menuItemHovered = false\"\r\n    >\r\n      <i class=\"icon settings\" *ngIf=\"!menuItemHovered; else svgSetting\"></i>\r\n      <ng-template #svgSetting>\r\n        <div class=\"animated\" [innerHTML]=\"settings | safeHTML\"></div>\r\n      </ng-template>\r\n      <span>{{ 'SIDEBAR.SETTINGS' | translate }}</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"wrap-button\" *ngIf=\"variablesService.appPass === ''; else masterPass\" tooltip=\"{{ 'SIDEBAR.LOG_OUT_TOOLTIP' | translate }}\" placement=\"bottom\" tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\">\r\n    <button (click)=\"logOut()\" [class.disabled]=\"variablesService.appPass === ''\" [disabled]=\"variablesService.appPass === ''\">\r\n      <i class=\"icon logout\"></i>\r\n      <span>{{ 'SIDEBAR.LOG_OUT' | translate }}</span>\r\n    </button>\r\n  </div>\r\n  <ng-template #masterPass>\r\n    <div class=\"wrap-button\">\r\n      <button\r\n      (mouseover)=\"itemHovered = true\"\r\n      (mouseleave)=\"itemHovered = false\"\r\n      (click)=\"logOut()\">\r\n        <i class=\"icon logout\" *ngIf=\"!itemHovered; else svgLogout\"></i>\r\n        <ng-template #svgLogout>\r\n          <div class=\"animated\" [innerHTML]=\"exit | safeHTML\"></div>\r\n        </ng-template>\r\n\r\n        <span>{{ 'SIDEBAR.LOG_OUT' | translate }}</span>\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n<div class=\"synchronization-status\" [ngStyle]=\"{'align-items': variablesService.daemon_state === 1 || variablesService.daemon_state === 6 ? 'flex-start' : 'center'}\">\r\n  <div class=\"status-container\">\r\n    <span class=\"offline\" *ngIf=\"variablesService.daemon_state === 0\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.OFFLINE' | translate }}\r\n    </span>\r\n    <span class=\"syncing\" *ngIf=\"variablesService.daemon_state === 1\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.SYNCING' | translate }} {{ variablesService.height_app }}{{ 'SIDEBAR.SYNCHRONIZATION.SLASH' | translate }}{{ variablesService.height_max }}\r\n    </span>\r\n    <span class=\"online\" *ngIf=\"variablesService.daemon_state === 2\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.ONLINE' | translate }}\r\n    </span>\r\n    <span class=\"loading\" *ngIf=\"variablesService.daemon_state === 3\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.LOADING' | translate }}\r\n    </span>\r\n    <span class=\"offline\" *ngIf=\"variablesService.daemon_state === 4\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.ERROR' | translate }}\r\n    </span>\r\n    <span class=\"online\" *ngIf=\"variablesService.daemon_state === 5\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.COMPLETE' | translate }}\r\n    </span>\r\n    <span class=\"syncing\" *ngIf=\"variablesService.daemon_state === 6\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.DOWNLOADING' | translate }} {{ variablesService.downloaded }}{{ 'SIDEBAR.SYNCHRONIZATION.SLASH' | translate }}{{ variablesService.total }}{{ 'SIDEBAR.SYNCHRONIZATION.MB' | translate }}\r\n    </span>\r\n    <div class=\"progress-bar-container\" *ngIf=\"variablesService.daemon_state === 1 || variablesService.daemon_state === 3\">\r\n      <div class=\"syncing\" *ngIf=\"variablesService.daemon_state === 1\">\r\n        <div class=\"progress-bar\">\r\n          <div class=\"fill\" [style.width]=\"variablesService.sync.progress_value + '%'\"></div>\r\n        </div>\r\n        <div class=\"progress-percent\">{{ variablesService.sync.progress_value_text }}%</div>\r\n      </div>\r\n      <div class=\"loading\" *ngIf=\"variablesService.daemon_state === 3\"></div>\r\n    </div>\r\n\r\n    <div class=\"progress-bar-container\" *ngIf=\"variablesService.daemon_state === 6\">\r\n      <div class=\"syncing downloading\" *ngIf=\"variablesService.daemon_state === 6\">\r\n        <div class=\"progress-bar\">\r\n          <div class=\"fill\" [style.width]=\"variablesService.download.progress_value + '%'\"></div>\r\n        </div>\r\n        <div class=\"progress-percent\">{{ variablesService.download.progress_value_text }}%</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"update-container\" *ngIf=\"(variablesService.daemon_state === 0 || variablesService.daemon_state === 2) && [2, 3, 4].indexOf(variablesService.last_build_displaymode) !== -1\">\r\n    <ng-container *ngIf=\"variablesService.last_build_displaymode === 2\">\r\n      <div class=\"update-text standard\">\r\n        <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.STANDARD' | translate }}</span>\r\n      </div>\r\n      <i class=\"icon update standard\" tooltip=\"{{ 'SIDEBAR.UPDATE.STANDARD_TOOLTIP' | translate }}\" placement=\"right-bottom\" tooltipClass=\"update-tooltip\" [delay]=\"500\"></i>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"variablesService.last_build_displaymode === 3\">\r\n      <div class=\"update-text important\">\r\n        <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.IMPORTANT' | translate }}</span>\r\n        <br>\r\n        <span style=\"font-size: 1rem\">{{ 'SIDEBAR.UPDATE.IMPORTANT_HINT' | translate }}</span>\r\n      </div>\r\n      <i class=\"icon update important\" tooltip=\"{{ 'SIDEBAR.UPDATE.IMPORTANT_TOOLTIP' | translate }}\" placement=\"right-bottom\" tooltipClass=\"update-tooltip important\" [delay]=\"500\"></i>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"variablesService.last_build_displaymode === 4\">\r\n      <div class=\"update-text critical\">\r\n        <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.CRITICAL' | translate }}</span>\r\n        <br>\r\n        <span style=\"font-size: 1rem\">{{ 'SIDEBAR.UPDATE.IMPORTANT_HINT' | translate }}</span>\r\n      </div>\r\n      <i class=\"icon update critical\" tooltip=\"{{ 'SIDEBAR.UPDATE.CRITICAL_TOOLTIP' | translate }}\" placement=\"right-bottom\" tooltipClass=\"update-tooltip critical\" [delay]=\"500\"></i>\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"update-container\" *ngIf=\"variablesService.daemon_state === 2 && variablesService.net_time_delta_median !== 0\">\r\n    <div class=\"update-text time\">\r\n      <span>{{ 'SIDEBAR.UPDATE.TIME' | translate }}</span>\r\n    </div>\r\n    <i class=\"icon time\" tooltip=\"{{ 'SIDEBAR.UPDATE.TIME_TOOLTIP' | translate }}\" placement=\"right-bottom\" tooltipClass=\"update-tooltip important\" [delay]=\"500\"></i>\r\n  </div>\r\n</div>\r\n\r\n<app-confirm-modal *ngIf=\"isModalDialogVisible\" [title]=\" 'WALLET.CONFIRM.TITLE' | translate \" [message]=\" 'WALLET.CONFIRM.MESSAGE' | translate \" (confirmed)=\"confirmed($event)\"></app-confirm-modal>\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 0 0 25rem;\n  padding: 0 3rem;\n  max-width: 25rem; }\n\n.animated {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 1.2rem; }\n\n.animated::ng-deep svg {\n    width: 2rem;\n    height: 2rem; }\n\n.animated::ng-deep svg path, .animated::ng-deep svg circle, .animated::ng-deep svg polygon {\n      fill: #4db1ff; }\n\n.wallet-type {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 7px;\n  height: 100%;\n  background-color: transparent;\n  transition: all ease .3s;\n  overflow: hidden; }\n\n.wallet-type:hover {\n    width: 28px; }\n\n.wallet-type .content {\n    height: 100%;\n    padding: 7px;\n    font-size: 12px;\n    line-height: 14px;\n    font-weight: 500;\n    color: #ffffff;\n    text-decoration: none;\n    text-transform: capitalize;\n    transition: all ease .3s;\n    writing-mode: vertical-rl;\n    text-orientation: mixed; }\n\n.wallet-type .content.auditable {\n      background-color: #5cda9d; }\n\n.wallet-type .content.watch-only, .wallet-type .content.auditable-watch-only {\n      background-color: #8686ff; }\n\n.sidebar-accounts {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto; }\n\n.sidebar-accounts .sidebar-accounts-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex: 0 0 auto;\n    height: 8rem;\n    font-weight: 400; }\n\n.sidebar-accounts .sidebar-accounts-header h3 {\n      font-size: 1.7rem; }\n\n.sidebar-accounts .sidebar-accounts-header button {\n      background: transparent;\n      border: none;\n      outline: none; }\n\n.sidebar-accounts .sidebar-accounts-list {\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 auto;\n    margin: 0 -3rem;\n    overflow-y: auto; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      flex-shrink: 0;\n      cursor: pointer;\n      padding: 2.5rem 3rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .close-wallet-wrapper {\n        display: flex;\n        justify-content: flex-end;\n        position: relative; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .close-wallet-wrapper button {\n          display: flex;\n          position: absolute;\n          top: -12px;\n          right: -18px;\n          padding: 0;\n          height: auto;\n          background: transparent;\n          border: none; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .close-wallet-wrapper button .icon {\n            width: 1.3rem;\n            height: 1.3rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .close-wallet-wrapper button .icon.close-wallet {\n              background-color: transparent; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .close-wallet-wrapper button .icon.close-wallet::after {\n              display: block;\n              content: '';\n              background: url('close-wallet-blue.svg') no-repeat center;\n              width: 13px;\n              height: 13px; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row {\n        display: flex;\n        align-items: center;\n        justify-content: space-between; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-title-balance {\n          line-height: 2.7rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-title-balance .title {\n            font-size: 1.5rem;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            white-space: nowrap; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-title-balance .balance {\n            font-size: 1.8rem;\n            font-weight: 600;\n            white-space: nowrap; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-alias {\n          font-size: 1.3rem;\n          line-height: 3.4rem;\n          margin-bottom: 0.7rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-alias .name {\n            display: flex;\n            align-items: center;\n            flex-shrink: 1;\n            line-height: 1.6rem;\n            padding-right: 1rem;\n            overflow: hidden; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-alias .name span {\n              text-overflow: ellipsis;\n              overflow: hidden;\n              white-space: nowrap; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-alias .price {\n            flex-shrink: 0; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-alias .icon {\n            margin-left: 0.5rem;\n            width: 1.3rem;\n            height: 1.3rem;\n            border-radius: 50%;\n            color: #1a1a1a;\n            font-size: 9px;\n            font-weight: 700;\n            line-height: 9px;\n            padding-right: 1px;\n            display: flex;\n            align-items: center;\n            justify-content: center; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-staking {\n          line-height: 2.9rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-staking .text {\n            font-size: 1.3rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-messages {\n          line-height: 2.7rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-messages .text {\n            font-size: 1.3rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-messages .indicator {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            border-radius: 1rem;\n            font-size: 1rem;\n            min-width: 2.4rem;\n            height: 1.6rem;\n            padding: 0 0.5rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-synchronization {\n          flex-direction: column;\n          height: 5.6rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-synchronization .status {\n            align-self: flex-start;\n            font-size: 1.3rem;\n            line-height: 2.6rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-synchronization .progress-bar-container {\n            display: flex;\n            margin: 0.4rem 0;\n            height: 0.7rem;\n            width: 100%; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-synchronization .progress-bar-container .progress-bar {\n              flex: 1 0 auto; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-synchronization .progress-bar-container .progress-bar .fill {\n                height: 100%; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account .sidebar-account-row.account-synchronization .progress-bar-container .progress-percent {\n              flex: 0 0 auto;\n              font-size: 1.3rem;\n              line-height: 0.7rem;\n              padding-left: 0.7rem; }\n\n.sidebar-accounts .sidebar-accounts-list .sidebar-account:focus {\n        outline: none; }\n\n.sidebar-accounts:after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: -3rem;\n    width: calc(100% + 6rem);\n    height: 5rem; }\n\n.sidebar-settings {\n  flex: 0 0 auto;\n  padding-bottom: 1rem; }\n\n.sidebar-settings .wrap-button {\n    margin: 0 -3rem; }\n\n.sidebar-settings .wrap-button button {\n      display: flex;\n      align-items: center;\n      background: transparent;\n      border: none;\n      font-weight: 400;\n      line-height: 3rem;\n      outline: none;\n      padding: 0 3rem;\n      width: 100%; }\n\n.sidebar-settings .wrap-button button.disabled {\n        cursor: url('not-allowed.svg'), not-allowed; }\n\n.sidebar-settings .wrap-button button .icon {\n        margin-right: 1.2rem;\n        width: 2rem;\n        height: 2rem; }\n\n.sidebar-settings .wrap-button button .icon.contacts {\n          -webkit-mask: url('contacts.svg') no-repeat center;\n                  mask: url('contacts.svg') no-repeat center; }\n\n.sidebar-settings .wrap-button button .icon.settings {\n          -webkit-mask: url('settings.svg') no-repeat center;\n                  mask: url('settings.svg') no-repeat center; }\n\n.sidebar-settings .wrap-button button .icon.logout {\n          -webkit-mask: url('logout.svg') no-repeat center;\n                  mask: url('logout.svg') no-repeat center; }\n\n.synchronization-status {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex: 0 0 7rem;\n  font-size: 1.3rem; }\n\n.synchronization-status .status-container {\n    position: relative;\n    flex-grow: 1;\n    text-align: left; }\n\n.synchronization-status .status-container .offline, .synchronization-status .status-container .online {\n      position: relative;\n      display: block;\n      line-height: 1.2rem;\n      padding-left: 2.2rem; }\n\n.synchronization-status .status-container .offline:before, .synchronization-status .status-container .online:before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        border-radius: 50%;\n        width: 1.2rem;\n        height: 1.2rem; }\n\n.synchronization-status .status-container .syncing, .synchronization-status .status-container .loading {\n      line-height: 5rem; }\n\n.synchronization-status .status-container .progress-bar-container {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      height: 0.7rem;\n      width: 100%; }\n\n.synchronization-status .status-container .progress-bar-container .syncing {\n        display: flex; }\n\n.synchronization-status .status-container .progress-bar-container .syncing .progress-bar {\n          flex: 1 0 auto; }\n\n.synchronization-status .status-container .progress-bar-container .syncing .progress-bar .fill {\n            height: 100%; }\n\n.synchronization-status .status-container .progress-bar-container .syncing .progress-percent {\n          flex: 0 0 auto;\n          font-size: 1.3rem;\n          line-height: 0.7rem;\n          padding-left: 0.7rem; }\n\n.synchronization-status .status-container .progress-bar-container .loading {\n        -webkit-animation: move 5s linear infinite;\n                animation: move 5s linear infinite;\n        background-image: -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.125, rgba(0, 0, 0, 0.15)), color-stop(0.125, transparent), color-stop(0.25, transparent), color-stop(0.25, rgba(0, 0, 0, 0.1)), color-stop(0.375, rgba(0, 0, 0, 0.1)), color-stop(0.375, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(0, 0, 0, 0.15)), color-stop(0.625, rgba(0, 0, 0, 0.15)), color-stop(0.625, transparent), color-stop(0.75, transparent), color-stop(0.75, rgba(0, 0, 0, 0.1)), color-stop(0.875, rgba(0, 0, 0, 0.1)), color-stop(0.875, transparent), to(transparent)), -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.125, rgba(0, 0, 0, 0.3)), color-stop(0.125, transparent), color-stop(0.25, transparent), color-stop(0.25, rgba(0, 0, 0, 0.25)), color-stop(0.375, rgba(0, 0, 0, 0.25)), color-stop(0.375, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(0, 0, 0, 0.3)), color-stop(0.625, rgba(0, 0, 0, 0.3)), color-stop(0.625, transparent), color-stop(0.75, transparent), color-stop(0.75, rgba(0, 0, 0, 0.25)), color-stop(0.875, rgba(0, 0, 0, 0.25)), color-stop(0.875, transparent), to(transparent));\n        background-size: 7rem 7rem;\n        height: 100%; }\n\n.synchronization-status .update-container {\n    display: flex;\n    flex-grow: 1;\n    margin-left: 1rem;\n    text-align: right; }\n\n.synchronization-status .update-container .update-text {\n      flex: 1 1 auto;\n      font-size: 1.2rem;\n      line-height: 1.8rem;\n      text-align: left; }\n\n.synchronization-status .update-container .update-text.time {\n        font-size: 1.1rem; }\n\n.synchronization-status .update-container .icon {\n      flex: 1 0 auto;\n      margin: 0.3rem 0 0 0.6rem;\n      width: 1.2rem;\n      height: 1.2rem; }\n\n.synchronization-status .update-container .icon.update {\n        -webkit-mask: url('update.svg') no-repeat center;\n                mask: url('update.svg') no-repeat center; }\n\n.synchronization-status .update-container .icon.time {\n        -webkit-mask: url('time.svg') no-repeat center;\n                mask: url('time.svg') no-repeat center; }\n\n@-webkit-keyframes move {\n  0% {\n    background-position: 100% -7rem; }\n  100% {\n    background-position: 100% 7rem; } }\n\n@keyframes move {\n  0% {\n    background-position: 100% -7rem; }\n  100% {\n    background-position: 100% 7rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9EOlxcUHJvamVjdFxcV09SS19ORVdcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQTs7QUFKdEI7SUFRSSxXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQVRoQjtNQVlNLGFBQWEsRUFBQTs7QUFJbkI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0VBQ1YsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUE7O0FBUmxCO0lBVUksV0FBVyxFQUFBOztBQVZmO0lBYUksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHVCQUF1QixFQUFBOztBQXZCM0I7TUF5Qk0seUJBQXlCLEVBQUE7O0FBekIvQjtNQTRCTSx5QkFBeUIsRUFBQTs7QUFJL0I7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBSmhCO0lBT0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTs7QUFacEI7TUFlTSxpQkFBaUIsRUFBQTs7QUFmdkI7TUFtQk0sdUJBQXVCO01BQ3ZCLFlBQVk7TUFDWixhQUFhLEVBQUE7O0FBckJuQjtJQTBCSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7O0FBOUJwQjtNQWlDTSxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixjQUFjO01BQ2QsZUFBZTtNQUNmLG9CQUFvQixFQUFBOztBQXRDMUI7UUF5Q1EsYUFBYTtRQUNiLHlCQUF5QjtRQUN6QixrQkFBa0IsRUFBQTs7QUEzQzFCO1VBNkNVLGFBQWE7VUFDYixrQkFBa0I7VUFDbEIsVUFBVTtVQUNWLFlBQVk7VUFDWixVQUFVO1VBQ1YsWUFBWTtVQUNaLHVCQUF1QjtVQUN2QixZQUFZLEVBQUE7O0FBcER0QjtZQXVEWSxhQUFhO1lBQ2IsY0FBYyxFQUFBOztBQXhEMUI7Y0EwRGMsNkJBQTZCLEVBQUE7O0FBMUQzQztjQTZEYyxjQUFjO2NBQ2QsV0FBVTtjQUNWLHlEQUEyRTtjQUMzRSxXQUFXO2NBQ1gsWUFBWSxFQUFBOztBQWpFMUI7UUF3RVEsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw4QkFBOEIsRUFBQTs7QUExRXRDO1VBNkVVLG1CQUFtQixFQUFBOztBQTdFN0I7WUFnRlksaUJBQWlCO1lBQ2pCLHVCQUF1QjtZQUN2QixnQkFBZ0I7WUFDaEIsbUJBQW1CLEVBQUE7O0FBbkYvQjtZQXVGWSxpQkFBaUI7WUFDakIsZ0JBQWdCO1lBQ2hCLG1CQUFtQixFQUFBOztBQXpGL0I7VUE4RlUsaUJBQWlCO1VBQ2pCLG1CQUFtQjtVQUNuQixxQkFBcUIsRUFBQTs7QUFoRy9CO1lBbUdZLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsY0FBYztZQUNkLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsZ0JBQWdCLEVBQUE7O0FBeEc1QjtjQTJHYyx1QkFBdUI7Y0FDdkIsZ0JBQWdCO2NBQ2hCLG1CQUFtQixFQUFBOztBQTdHakM7WUFrSFksY0FBYyxFQUFBOztBQWxIMUI7WUFzSFksbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQix1QkFBdUIsRUFBQTs7QUFqSW5DO1VBc0lVLG1CQUFtQixFQUFBOztBQXRJN0I7WUF5SVksaUJBQWlCLEVBQUE7O0FBekk3QjtVQThJVSxtQkFBbUIsRUFBQTs7QUE5STdCO1lBaUpZLGlCQUFpQixFQUFBOztBQWpKN0I7WUFxSlksYUFBYTtZQUNiLG1CQUFtQjtZQUNuQix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsY0FBYztZQUNkLGlCQUFpQixFQUFBOztBQTVKN0I7VUFpS1Usc0JBQXNCO1VBQ3RCLGNBQWMsRUFBQTs7QUFsS3hCO1lBcUtZLHNCQUFzQjtZQUN0QixpQkFBaUI7WUFDakIsbUJBQW1CLEVBQUE7O0FBdksvQjtZQTJLWSxhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxXQUFXLEVBQUE7O0FBOUt2QjtjQWlMYyxjQUFjLEVBQUE7O0FBakw1QjtnQkFvTGdCLFlBQVksRUFBQTs7QUFwTDVCO2NBeUxjLGNBQWM7Y0FDZCxpQkFBaUI7Y0FDakIsbUJBQW1CO2NBQ25CLG9CQUFvQixFQUFBOztBQTVMbEM7UUFxTVEsYUFBYSxFQUFBOztBQXJNckI7SUEyTUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixZQUFZLEVBQUE7O0FBSWhCO0VBQ0UsY0FBYztFQUNkLG9CQUFvQixFQUFBOztBQUZ0QjtJQUtJLGVBQWUsRUFBQTs7QUFMbkI7TUFRTSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixhQUFhO01BQ2IsZUFBZTtNQUNmLFdBQVcsRUFBQTs7QUFoQmpCO1FBbUJRLDJDQUE0RCxFQUFBOztBQW5CcEU7UUF1QlEsb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxZQUFZLEVBQUE7O0FBekJwQjtVQTRCVSxrREFBMkQ7a0JBQTNELDBDQUEyRCxFQUFBOztBQTVCckU7VUFnQ1Usa0RBQTJEO2tCQUEzRCwwQ0FBMkQsRUFBQTs7QUFoQ3JFO1VBb0NVLGdEQUF5RDtrQkFBekQsd0NBQXlELEVBQUE7O0FBT25FO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUxuQjtJQVFJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7O0FBVnBCO01BYU0sa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsb0JBQW9CLEVBQUE7O0FBaEIxQjtRQW1CUSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixPQUFPO1FBQ1Asa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixjQUFjLEVBQUE7O0FBekJ0QjtNQThCTSxpQkFBaUIsRUFBQTs7QUE5QnZCO01Ba0NNLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsT0FBTztNQUNQLGNBQWM7TUFDZCxXQUFXLEVBQUE7O0FBdENqQjtRQXlDUSxhQUFhLEVBQUE7O0FBekNyQjtVQTRDVSxjQUFjLEVBQUE7O0FBNUN4QjtZQStDWSxZQUFZLEVBQUE7O0FBL0N4QjtVQW9EVSxjQUFjO1VBQ2QsaUJBQWlCO1VBQ2pCLG1CQUFtQjtVQUNuQixvQkFBb0IsRUFBQTs7QUF2RDlCO1FBNERRLDBDQUFrQztnQkFBbEMsa0NBQWtDO1FBQ2xDLCtsQ0FzQkc7UUFDSCwwQkFBMEI7UUFDMUIsWUFBWSxFQUFBOztBQXJGcEI7SUEyRkksYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7O0FBOUZyQjtNQWlHTSxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixnQkFBZ0IsRUFBQTs7QUFwR3RCO1FBdUdRLGlCQUFpQixFQUFBOztBQXZHekI7TUE0R00sY0FBYztNQUNkLHlCQUF5QjtNQUN6QixhQUFhO01BQ2IsY0FBYyxFQUFBOztBQS9HcEI7UUFrSFEsZ0RBQXlEO2dCQUF6RCx3Q0FBeUQsRUFBQTs7QUFsSGpFO1FBc0hRLDhDQUF1RDtnQkFBdkQsc0NBQXVELEVBQUE7O0FBTS9EO0VBQ0U7SUFDRSwrQkFBK0IsRUFBQTtFQUVqQztJQUNFLDhCQUE4QixFQUFBLEVBQUE7O0FBTGxDO0VBQ0U7SUFDRSwrQkFBK0IsRUFBQTtFQUVqQztJQUNFLDhCQUE4QixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4OiAwIDAgMjVyZW07XHJcbiAgcGFkZGluZzogMCAzcmVtO1xyXG4gIG1heC13aWR0aDogMjVyZW07XHJcbn1cclxuXHJcbi5hbmltYXRlZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMS4ycmVtO1xyXG5cclxuICAmOjpuZy1kZWVwIHN2ZyB7XHJcblxyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcblxyXG4gICAgcGF0aCwgY2lyY2xlLCBwb2x5Z29uIHtcclxuICAgICAgZmlsbDogIzRkYjFmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLndhbGxldC10eXBlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDdweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjNzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgJjpob3ZlciB7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICB9XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC4zcztcclxuICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XHJcbiAgICB0ZXh0LW9yaWVudGF0aW9uOiBtaXhlZDtcclxuICAgICYuYXVkaXRhYmxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVjZGE5ZDtcclxuICAgIH1cclxuICAgICYud2F0Y2gtb25seSwgJi5hdWRpdGFibGUtd2F0Y2gtb25seSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4Njg2ZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5zaWRlYmFyLWFjY291bnRzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG5cclxuICAuc2lkZWJhci1hY2NvdW50cy1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIGhlaWdodDogOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNpZGViYXItYWNjb3VudHMtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIC0zcmVtO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICAuc2lkZWJhci1hY2NvdW50IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwYWRkaW5nOiAyLjVyZW0gM3JlbTtcclxuXHJcbiAgICAgIC5jbG9zZS13YWxsZXQtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogLTEycHg7XHJcbiAgICAgICAgICByaWdodDogLTE4cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMS4zcmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuM3JlbTtcclxuICAgICAgICAgICAgJi5jbG9zZS13YWxsZXQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuY2xvc2Utd2FsbGV0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgY29udGVudDonJztcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnVybChcIi4uLy4uL2Fzc2V0cy9pY29ucy9jbG9zZS13YWxsZXQtYmx1ZS5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICAgICAgICB3aWR0aDogMTNweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaWRlYmFyLWFjY291bnQtcm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAmLmFjY291bnQtdGl0bGUtYmFsYW5jZSB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMi43cmVtO1xyXG5cclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYmFsYW5jZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY2NvdW50LWFsaWFzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMuNHJlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcclxuXHJcbiAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnByaWNlIHtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMS4zcmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuM3JlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzFhMWExYTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA5cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmFjY291bnQtc3Rha2luZyB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMi45cmVtO1xyXG5cclxuICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmFjY291bnQtbWVzc2FnZXMge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIuN3JlbTtcclxuXHJcbiAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDIuNHJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjZyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY2NvdW50LXN5bmNocm9uaXphdGlvbiB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgaGVpZ2h0OiA1LjZyZW07XHJcblxyXG4gICAgICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMi42cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wcm9ncmVzcy1iYXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjRyZW0gMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwLjdyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgLnByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgICAgICAgZmxleDogMSAwIGF1dG87XHJcblxyXG4gICAgICAgICAgICAgIC5maWxsIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wcm9ncmVzcy1wZXJjZW50IHtcclxuICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC43cmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC43cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAtM3JlbTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA2cmVtKTtcclxuICAgIGhlaWdodDogNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyLXNldHRpbmdzIHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgLndyYXAtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCAtM3JlbTtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMCAzcmVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgIGN1cnNvcjogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9ub3QtYWxsb3dlZC5zdmcpLCBub3QtYWxsb3dlZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMS4ycmVtO1xyXG4gICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuXHJcbiAgICAgICAgJi5jb250YWN0cyB7XHJcbiAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2NvbnRhY3RzLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuc2V0dGluZ3Mge1xyXG4gICAgICAgICAgbWFzazogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9zZXR0aW5ncy5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmxvZ291dCB7XHJcbiAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2xvZ291dC5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3luY2hyb25pemF0aW9uLXN0YXR1cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmbGV4OiAwIDAgN3JlbTtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuXHJcbiAgLnN0YXR1cy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAub2ZmbGluZSwgLm9ubGluZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMi4ycmVtO1xyXG5cclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDEuMnJlbTtcclxuICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zeW5jaW5nLCAubG9hZGluZyB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9ncmVzcy1iYXItY29udGFpbmVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGhlaWdodDogMC43cmVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIC5zeW5jaW5nIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICAgIGZsZXg6IDEgMCBhdXRvO1xyXG5cclxuICAgICAgICAgIC5maWxsIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2dyZXNzLXBlcmNlbnQge1xyXG4gICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjdyZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuN3JlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sb2FkaW5nIHtcclxuICAgICAgICBhbmltYXRpb246IG1vdmUgNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICAgICAgICAtd2Via2l0LWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIGxpbmVhciwgMCAwLCAxMDAlIDEwMCUsXHJcbiAgICAgICAgICAgICAgY29sb3Itc3RvcCguMTI1LCByZ2JhKDAsIDAsIDAsIC4xNSkpLCBjb2xvci1zdG9wKC4xMjUsIHRyYW5zcGFyZW50KSxcclxuICAgICAgICAgICAgICBjb2xvci1zdG9wKC4yNTAsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguMjUwLCByZ2JhKDAsIDAsIDAsIC4xMCkpLFxyXG4gICAgICAgICAgICAgIGNvbG9yLXN0b3AoLjM3NSwgcmdiYSgwLCAwLCAwLCAuMTApKSwgY29sb3Itc3RvcCguMzc1LCB0cmFuc3BhcmVudCksXHJcbiAgICAgICAgICAgICAgY29sb3Itc3RvcCguNTAwLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjUwMCwgcmdiYSgwLCAwLCAwLCAuMTUpKSxcclxuICAgICAgICAgICAgICBjb2xvci1zdG9wKC42MjUsIHJnYmEoMCwgMCwgMCwgLjE1KSksIGNvbG9yLXN0b3AoLjYyNSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICAgIGNvbG9yLXN0b3AoLjc1MCwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC43NTAsIHJnYmEoMCwgMCwgMCwgLjEwKSksXHJcbiAgICAgICAgICAgICAgY29sb3Itc3RvcCguODc1LCByZ2JhKDAsIDAsIDAsIC4xMCkpLCBjb2xvci1zdG9wKC44NzUsIHRyYW5zcGFyZW50KSxcclxuICAgICAgICAgICAgICB0byh0cmFuc3BhcmVudClcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICAtd2Via2l0LWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIGxpbmVhciwgMCAxMDAlLCAxMDAlIDAsXHJcbiAgICAgICAgICAgICAgY29sb3Itc3RvcCguMTI1LCByZ2JhKDAsIDAsIDAsIC4zMCkpLCBjb2xvci1zdG9wKC4xMjUsIHRyYW5zcGFyZW50KSxcclxuICAgICAgICAgICAgICBjb2xvci1zdG9wKC4yNTAsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguMjUwLCByZ2JhKDAsIDAsIDAsIC4yNSkpLFxyXG4gICAgICAgICAgICAgIGNvbG9yLXN0b3AoLjM3NSwgcmdiYSgwLCAwLCAwLCAuMjUpKSwgY29sb3Itc3RvcCguMzc1LCB0cmFuc3BhcmVudCksXHJcbiAgICAgICAgICAgICAgY29sb3Itc3RvcCguNTAwLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjUwMCwgcmdiYSgwLCAwLCAwLCAuMzApKSxcclxuICAgICAgICAgICAgICBjb2xvci1zdG9wKC42MjUsIHJnYmEoMCwgMCwgMCwgLjMwKSksIGNvbG9yLXN0b3AoLjYyNSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICAgIGNvbG9yLXN0b3AoLjc1MCwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC43NTAsIHJnYmEoMCwgMCwgMCwgLjI1KSksXHJcbiAgICAgICAgICAgICAgY29sb3Itc3RvcCguODc1LCByZ2JhKDAsIDAsIDAsIC4yNSkpLCBjb2xvci1zdG9wKC44NzUsIHRyYW5zcGFyZW50KSxcclxuICAgICAgICAgICAgICB0byh0cmFuc3BhcmVudClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA3cmVtIDdyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudXBkYXRlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICAudXBkYXRlLXRleHQge1xyXG4gICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICAmLnRpbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgICAgbWFyZ2luOiAwLjNyZW0gMCAwIDAuNnJlbTtcclxuICAgICAgd2lkdGg6IDEuMnJlbTtcclxuICAgICAgaGVpZ2h0OiAxLjJyZW07XHJcblxyXG4gICAgICAmLnVwZGF0ZSB7XHJcbiAgICAgICAgbWFzazogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy91cGRhdGUuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnRpbWUge1xyXG4gICAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvdGltZS5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW92ZSB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAtN3JlbTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDdyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
/* harmony import */ var _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/icons/icons.json */ "./src/assets/icons/icons.json");
var _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/icons/icons.json */ "./src/assets/icons/icons.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(route, router, variablesService, backend, modal, ngZone) {
        this.route = route;
        this.router = router;
        this.variablesService = variablesService;
        this.backend = backend;
        this.modal = modal;
        this.ngZone = ngZone;
        this.contacts = _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_6__.contacts;
        this.settings = _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_6__.settings;
        this.exit = _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_6__.exit;
        this.isModalDialogVisible = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.indexOf('/wallet/') !== -1) {
            var localPathArr = this.router.url.split('/');
            if (localPathArr.length >= 3) {
                this.walletActive = parseInt(localPathArr[2], 10);
            }
        }
        else if (this.router.url.indexOf('/details') !== -1) {
            this.walletActive = this.variablesService.currentWallet.wallet_id;
        }
        else {
            this.walletActive = null;
        }
        this.walletSubRouting = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (event.url.indexOf('/wallet/') !== -1) {
                    var localPathArr = event.url.split('/');
                    if (localPathArr.length >= 3) {
                        _this.walletActive = parseInt(localPathArr[2], 10);
                    }
                }
                else if (event.url.indexOf('/details') !== -1) {
                    _this.walletActive = _this.variablesService.currentWallet.wallet_id;
                }
                else {
                    _this.walletActive = null;
                }
            }
        });
    };
    SidebarComponent.prototype.goMainPage = function () {
        var _this = this;
        if (this.route.snapshot.queryParams && this.route.snapshot.queryParams.prevUrl === 'login') {
            this.ngZone.run(function () {
                _this.router.navigate(['/'], { queryParams: { prevUrl: 'login' } });
            });
        }
        else {
            this.ngZone.run(function () {
                _this.router.navigate(['/']);
            });
        }
    };
    ;
    SidebarComponent.prototype.contactsRoute = function () {
        if (this.variablesService.appPass) {
            this.router.navigate(['/contacts']);
        }
        else {
            this.modal.prepareModal('error', 'CONTACTS.FORM_ERRORS.SET_MASTER_PASSWORD');
        }
    };
    SidebarComponent.prototype.showDialog = function (wallet_id) {
        this.isModalDialogVisible = true;
        this.closeWalletId = wallet_id;
    };
    SidebarComponent.prototype.confirmed = function (confirmed) {
        if (confirmed) {
            this.closeWallet(this.closeWalletId);
        }
        this.isModalDialogVisible = false;
    };
    SidebarComponent.prototype.closeWallet = function (wallet_id) {
        var _this = this;
        this.backend.closeWallet(wallet_id, function () {
            for (var i = _this.variablesService.wallets.length - 1; i >= 0; i--) {
                if (_this.variablesService.wallets[i].wallet_id === _this.variablesService.currentWallet.wallet_id) {
                    _this.variablesService.wallets.splice(i, 1);
                }
            }
            _this.ngZone.run(function () {
                if (_this.variablesService.wallets.length) {
                    _this.variablesService.currentWallet = _this.variablesService.wallets[0];
                    _this.router.navigate(['/wallet/' + _this.variablesService.currentWallet.wallet_id]);
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
            if (_this.variablesService.appPass) {
                _this.backend.storeSecureAppData();
            }
        });
    };
    SidebarComponent.prototype.getUpdate = function () {
        this.backend.openUrlInBrowser(_shared_constants__WEBPACK_IMPORTED_MODULE_5__["DOWNLOADS_PAGE_URL"]);
    };
    SidebarComponent.prototype.goToAuditableWalletHelpPage = function (e) {
        e.preventDefault();
        this.backend.openUrlInBrowser(_shared_constants__WEBPACK_IMPORTED_MODULE_5__["AUDITABLE_WALLET_HELP_PAGE"]);
    };
    SidebarComponent.prototype.logOut = function () {
        var _this = this;
        this.variablesService.stopCountdown();
        this.variablesService.appLogin = false;
        this.variablesService.appPass = '';
        this.ngZone.run(function () {
            _this.router.navigate(['/login'], { queryParams: { type: 'auth' } });
        });
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.walletSubRouting.unsubscribe();
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/staking/staking.component.html":
/*!************************************************!*\
  !*** ./src/app/staking/staking.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-header\">\r\n  <div class=\"general\">\r\n    <div *ngIf=\"(!variablesService.currentWallet.is_auditable && !variablesService.currentWallet.is_watch_only)\r\n                || (variablesService.currentWallet.is_auditable && !variablesService.currentWallet.is_watch_only)\">\r\n      <span class=\"label\">{{ 'STAKING.TITLE' | translate }}</span>\r\n      <span class=\"value\">\r\n        <app-staking-switch [wallet_id]=\"variablesService.currentWallet.wallet_id\" [(staking)]=\"variablesService.currentWallet.staking\"></app-staking-switch>\r\n      </span>\r\n    </div>\r\n    <div>\r\n      <span class=\"label\">{{ 'STAKING.TITLE_PENDING' | translate }}</span>\r\n      <span class=\"value\">{{pending.total | intToMoney}} {{variablesService.defaultCurrency}}</span>\r\n    </div>\r\n    <div>\r\n      <span class=\"label\">{{ 'STAKING.TITLE_TOTAL' | translate }}</span>\r\n      <span class=\"value\">{{total | intToMoney}} {{variablesService.defaultCurrency}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"selected\" *ngIf=\"selectedDate && selectedDate.date\">\r\n    <span>{{selectedDate.date | date : 'EEEE, MMMM d, y'}}</span>\r\n    <span>{{selectedDate.amount}} {{variablesService.defaultCurrency}}</span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"chart\">\r\n  <div [chart]=\"chart\"></div>\r\n</div>\r\n\r\n<div class=\"chart-options\">\r\n  <div class=\"title\">\r\n    {{ 'STAKING.TITLE_PERIOD' | translate }}\r\n  </div>\r\n  <div class=\"options\">\r\n    <ng-container *ngFor=\"let period of periods\">\r\n      <button type=\"button\" [class.active]=\"period.active\" (click)=\"changePeriod(period)\">{{period.title}}</button>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div class=\"title\">\r\n    {{ 'STAKING.TITLE_GROUP' | translate }}\r\n  </div>\r\n  <div class=\"options\">\r\n    <ng-container *ngFor=\"let group of groups\">\r\n      <button type=\"button\" [class.active]=\"group.active\" (click)=\"changeGroup(group)\">{{group.title}}</button>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/staking/staking.component.scss":
/*!************************************************!*\
  !*** ./src/app/staking/staking.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  width: 100%; }\n\n.chart-header {\n  display: flex;\n  flex: 0 0 auto; }\n\n.chart-header .general {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    flex-grow: 1;\n    font-size: 1.3rem;\n    margin: -0.5rem 0; }\n\n.chart-header .general > div {\n      display: flex;\n      align-items: center;\n      margin: 0.5rem 0;\n      height: 2rem; }\n\n.chart-header .general > div .label {\n        display: inline-block;\n        width: 9rem; }\n\n.chart-header .selected {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: center;\n    flex-grow: 1;\n    font-size: 1.8rem; }\n\n.chart-header .selected span {\n      line-height: 2.9rem; }\n\n.chart {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 1 1 auto;\n  min-height: 40rem; }\n\n.chart > div {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n\n.chart-options {\n  display: flex;\n  align-items: center;\n  height: 2.4rem;\n  flex: 0 0 auto; }\n\n.chart-options .title {\n    font-size: 1.3rem;\n    padding: 0 1rem; }\n\n.chart-options .title:first-child {\n      padding-left: 0; }\n\n.chart-options .options {\n    display: flex;\n    justify-content: space-between;\n    flex-grow: 1;\n    height: 100%; }\n\n.chart-options .options button {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex: 1 1 auto;\n      cursor: pointer;\n      font-size: 1.3rem;\n      margin: 0 0.1rem;\n      padding: 0;\n      height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rha2luZy9EOlxcUHJvamVjdFxcV09SS19ORVdcXHphbm9cXHNyY1xcZ3VpXFxxdC1kYWVtb25cXGh0bWxfc291cmNlL3NyY1xcYXBwXFxzdGFraW5nXFxzdGFraW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUZoQjtJQUtJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBOztBQVhyQjtNQWNNLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLFlBQVksRUFBQTs7QUFqQmxCO1FBb0JRLHFCQUFxQjtRQUNyQixXQUFXLEVBQUE7O0FBckJuQjtJQTJCSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQixFQUFBOztBQWhDckI7TUFtQ00sbUJBQW1CLEVBQUE7O0FBS3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUxuQjtJQVFJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQUloQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFKaEI7SUFPSSxpQkFBaUI7SUFDakIsZUFBZSxFQUFBOztBQVJuQjtNQVdNLGVBQWUsRUFBQTs7QUFYckI7SUFnQkksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osWUFBWSxFQUFBOztBQW5CaEI7TUFzQk0sYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsY0FBYztNQUNkLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLFVBQVU7TUFDVixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdGFraW5nL3N0YWtpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2hhcnQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG5cclxuICAuZ2VuZXJhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIG1hcmdpbjogLTAuNXJlbSAwO1xyXG5cclxuICAgID4gZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgaGVpZ2h0OiAycmVtO1xyXG5cclxuICAgICAgLmxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDlyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWxlY3RlZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjlyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2hhcnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgbWluLWhlaWdodDogNDByZW07XHJcblxyXG4gID4gZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmNoYXJ0LW9wdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDIuNHJlbTtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG5cclxuICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5vcHRpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICBtYXJnaW46IDAgMC4xcmVtO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/staking/staking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/staking/staking.component.ts ***!
  \**********************************************/
/*! exports provided: StakingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakingComponent", function() { return StakingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var StakingComponent = /** @class */ (function () {
    function StakingComponent(route, variablesService, backend, ngZone, intToMoneyPipe, translate) {
        this.route = route;
        this.variablesService = variablesService;
        this.backend = backend;
        this.ngZone = ngZone;
        this.intToMoneyPipe = intToMoneyPipe;
        this.translate = translate;
        this.periods = [
            {
                title: this.translate.instant('STAKING.PERIOD.WEEK1'),
                key: '1 week',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.WEEK2'),
                key: '2 week',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.MONTH1'),
                key: '1 month',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.MONTH3'),
                key: '3 month',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.MONTH6'),
                key: '6 month',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.YEAR'),
                key: '1 year',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.ALL'),
                key: 'All',
                active: true
            }
        ];
        this.groups = [
            {
                title: this.translate.instant('STAKING.GROUP.DAY'),
                key: 'day',
                active: true
            },
            {
                title: this.translate.instant('STAKING.GROUP.WEEK'),
                key: 'week',
                active: false
            },
            {
                title: this.translate.instant('STAKING.GROUP.MONTH'),
                key: 'month',
                active: false
            }
        ];
        this.selectedDate = {
            date: null,
            amount: null
        };
        this.originalData = [];
        this.total = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0);
        this.pending = {
            list: [],
            total: new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0)
        };
    }
    StakingComponent_1 = StakingComponent;
    StakingComponent.makeGroupTime = function (key, date) {
        if (key === 'day') {
            return date.setHours(0, 0, 0, 0);
        }
        else if (key === 'week') {
            return new Date(date.setDate(date.getDate() - date.getDay())).setHours(0, 0, 0, 0);
        }
        else {
            return new Date(date.setDate(1)).setHours(0, 0, 0, 0);
        }
    };
    StakingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentRouting = this.route.parent.params.subscribe(function () {
            _this.getMiningHistory();
        });
        this.heightAppEvent = this.variablesService.getHeightAppEvent.subscribe(function (newHeight) {
            if (!_this.pending.total.isZero()) {
                var pendingCount = _this.pending.list.length;
                for (var i = pendingCount - 1; i >= 0; i--) {
                    if (newHeight - _this.pending.list[i].h >= 10) {
                        _this.pending.list.splice(i, 1);
                    }
                }
                if (pendingCount !== _this.pending.list.length) {
                    _this.pending.total = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0);
                    for (var i = 0; i < _this.pending.list.length; i++) {
                        _this.pending.total = _this.pending.total.plus(_this.pending.list[i].a);
                    }
                }
            }
        });
        this.refreshStackingEvent = this.variablesService.getRefreshStackingEvent.subscribe(function (wallet_id) {
            if (_this.variablesService.currentWallet.wallet_id === wallet_id) {
                _this.getMiningHistory();
            }
        });
    };
    StakingComponent.prototype.drawChart = function (data) {
        var _this = this;
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"]({
            title: { text: '' },
            credits: { enabled: false },
            exporting: { enabled: false },
            legend: { enabled: false },
            chart: {
                type: 'line',
                backgroundColor: 'transparent',
                height: null,
                zoomType: null,
                events: {
                    load: function () {
                        _this.changePeriod();
                    }
                }
            },
            yAxis: {
                min: 0,
                tickAmount: 5,
                title: {
                    text: ''
                },
                gridLineColor: '#2b3644',
                gridLineWidth: 2,
                lineColor: '#2b3644',
                lineWidth: 2,
                tickWidth: 2,
                tickLength: 120,
                tickColor: '#2b3644',
                labels: {
                    y: -8,
                    align: 'left',
                    x: -120,
                    style: {
                        'color': '#e0e0e0',
                        'fontSize': '13px'
                    },
                    format: '{value} ' + this.variablesService.defaultCurrency
                },
                showLastLabel: false,
            },
            xAxis: {
                type: 'datetime',
                gridLineColor: '#2b3644',
                lineColor: '#2b3644',
                lineWidth: 2,
                tickWidth: 2,
                tickLength: 10,
                tickColor: '#2b3644',
                labels: {
                    style: {
                        'color': '#e0e0e0',
                        'fontSize': '13px'
                    }
                },
                minPadding: 0,
                maxPadding: 0,
                minRange: 86400000,
                // tickInterval: 86400000,
                minTickInterval: 3600000,
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, 'rgba(124,181,236,0.2)'],
                            [1, 'rgba(124,181,236,0)']
                        ]
                    },
                    marker: {
                        enabled: false,
                        radius: 2
                    },
                    lineWidth: 2,
                    threshold: null
                },
                series: {
                    point: {
                        events: {
                            mouseOver: function (obj) {
                                _this.selectedDate.date = obj.target['x'];
                                _this.selectedDate.amount = obj.target['y'];
                            }
                        }
                    },
                    events: {
                        mouseOut: function () {
                            _this.selectedDate.date = null;
                            _this.selectedDate.amount = null;
                        }
                    }
                }
            },
            series: [
                {
                    type: 'area',
                    data: data
                }
            ]
        });
    };
    StakingComponent.prototype.getMiningHistory = function () {
        var _this = this;
        if (this.variablesService.currentWallet.loaded) {
            this.backend.getMiningHistory(this.variablesService.currentWallet.wallet_id, function (status, data) {
                _this.total = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0);
                _this.pending.list = [];
                _this.pending.total = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0);
                _this.originalData = [];
                if (data.mined_entries) {
                    data.mined_entries.forEach(function (item, key) {
                        if (item.t.toString().length === 10) {
                            data.mined_entries[key].t = (new Date(item.t * 1000)).setUTCMilliseconds(0);
                        }
                    });
                    data.mined_entries.forEach(function (item) {
                        _this.total = _this.total.plus(item.a);
                        if (_this.variablesService.height_app - item.h < 10) {
                            _this.pending.list.push(item);
                            _this.pending.total = _this.pending.total.plus(item.a);
                        }
                        _this.originalData.push([parseInt(item.t, 10), parseFloat(_this.intToMoneyPipe.transform(item.a))]);
                    });
                    _this.originalData = _this.originalData.sort(function (a, b) {
                        return a[0] - b[0];
                    });
                }
                _this.ngZone.run(function () {
                    _this.drawChart([]);
                });
            });
        }
    };
    StakingComponent.prototype.changePeriod = function (period) {
        if (period) {
            this.periods.forEach(function (p) {
                p.active = false;
            });
            period.active = true;
        }
        else {
            period = this.periods.find(function (p) { return p.active; });
        }
        var d = new Date();
        var min = null;
        var newData = [];
        var group = this.groups.find(function (g) { return g.active; });
        if (period.key === '1 week') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate() - 7, 0, 0, 0, 0);
        }
        else if (period.key === '2 week') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate() - 14, 0, 0, 0, 0);
        }
        else if (period.key === '1 month') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth() - 1, d.getDate(), 0, 0, 0, 0);
        }
        else if (period.key === '3 month') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth() - 3, d.getDate(), 0, 0, 0, 0);
        }
        else if (period.key === '6 month') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth() - 6, d.getDate(), 0, 0, 0, 0);
        }
        else if (period.key === '1 year') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear() - 1, d.getMonth(), d.getDate(), 0, 0, 0, 0);
        }
        else {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
        }
        this.chart.ref.xAxis[0].setExtremes(min, null);
    };
    StakingComponent.prototype.changeGroup = function (group) {
        this.groups.forEach(function (g) {
            g.active = false;
        });
        group.active = true;
        this.changePeriod();
    };
    StakingComponent.prototype.ngOnDestroy = function () {
        this.parentRouting.unsubscribe();
        this.heightAppEvent.unsubscribe();
        this.refreshStackingEvent.unsubscribe();
    };
    var StakingComponent_1;
    StakingComponent = StakingComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staking',
            template: __webpack_require__(/*! ./staking.component.html */ "./src/app/staking/staking.component.html"),
            styles: [__webpack_require__(/*! ./staking.component.scss */ "./src/app/staking/staking.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_5__["IntToMoneyPipe"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], StakingComponent);
    return StakingComponent;
}());



/***/ }),

/***/ "./src/app/transfer-alias/transfer-alias.component.html":
/*!**************************************************************!*\
  !*** ./src/app/transfer-alias/transfer-alias.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/wallet/' + wallet.wallet_id + '/history']\">{{ wallet.name }}</span>\r\n      <span>{{ 'BREADCRUMBS.TRANSFER_ALIAS' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-transfer\">\r\n\r\n    <div class=\"input-block alias-name\">\r\n      <label for=\"alias-name\">\r\n        {{ 'TRANSFER_ALIAS.NAME.LABEL' | translate }}\r\n      </label>\r\n      <input type=\"text\" id=\"alias-name\" [value]=\"alias.name\" placeholder=\"{{ 'EDIT_ALIAS.NAME.PLACEHOLDER' | translate }}\" readonly>\r\n    </div>\r\n\r\n    <div class=\"input-block textarea\">\r\n      <label for=\"alias-comment\">\r\n        {{ 'TRANSFER_ALIAS.COMMENT.LABEL' | translate }}\r\n      </label>\r\n      <textarea id=\"alias-comment\" [value]=\"alias.comment\" placeholder=\"{{ 'EDIT_ALIAS.COMMENT.PLACEHOLDER' | translate }}\"></textarea>\r\n    </div>\r\n\r\n    <div class=\"input-block alias-transfer-address\">\r\n      <label for=\"alias-transfer\">\r\n        {{ 'TRANSFER_ALIAS.ADDRESS.LABEL' | translate }}\r\n      </label>\r\n      <input type=\"text\" id=\"alias-transfer\" [(ngModel)]=\"transferAddress\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"changeAddress()\" placeholder=\"{{ 'TRANSFER_ALIAS.ADDRESS.PLACEHOLDER' | translate }}\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"transferAddress.length > 0 && (transferAddressAlias || !transferAddressValid || (transferAddressValid && !permissionSend) || notEnoughMoney)\">\r\n        <div *ngIf=\"!transferAddressValid\">\r\n          {{ 'TRANSFER_ALIAS.FORM_ERRORS.WRONG_ADDRESS' | translate }}\r\n        </div>\r\n        <div *ngIf=\"transferAddressAlias || (transferAddressValid && !permissionSend)\">\r\n          {{ 'TRANSFER_ALIAS.FORM_ERRORS.ALIAS_EXISTS' | translate }}\r\n        </div>\r\n        <div *ngIf=\"notEnoughMoney\">\r\n          {{ 'TRANSFER_ALIAS.FORM_ERRORS.NO_MONEY' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"alias-cost\">{{ \"TRANSFER_ALIAS.COST\" | translate : {value: variablesService.default_fee, currency: variablesService.defaultCurrency} }}</div>\r\n\r\n    <div class=\"wrap-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"transferAlias()\" [disabled]=\"transferAddressAlias || !transferAddressValid || notEnoughMoney\">{{ 'TRANSFER_ALIAS.BUTTON_TRANSFER' | translate }}</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/transfer-alias/transfer-alias.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/transfer-alias/transfer-alias.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-transfer {\n  margin: 2.4rem 0; }\n  .form-transfer .alias-name {\n    width: 50%; }\n  .form-transfer .alias-cost {\n    font-size: 1.3rem;\n    margin-top: 2rem; }\n  .form-transfer .wrap-buttons {\n    display: flex;\n    justify-content: space-between;\n    margin: 2.5rem -0.7rem; }\n  .form-transfer .wrap-buttons button {\n      margin: 0 0.7rem;\n      width: 15rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNmZXItYWxpYXMvRDpcXFByb2plY3RcXFdPUktfTkVXXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcdHJhbnNmZXItYWxpYXNcXHRyYW5zZmVyLWFsaWFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUE7RUFEbEI7SUFJSSxVQUFVLEVBQUE7RUFKZDtJQVFJLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtFQVRwQjtJQWFJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsc0JBQXNCLEVBQUE7RUFmMUI7TUFrQk0sZ0JBQWdCO01BQ2hCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RyYW5zZmVyLWFsaWFzL3RyYW5zZmVyLWFsaWFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tdHJhbnNmZXIge1xyXG4gIG1hcmdpbjogMi40cmVtIDA7XHJcblxyXG4gIC5hbGlhcy1uYW1lIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuYWxpYXMtY29zdCB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgfVxyXG5cclxuICAud3JhcC1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDIuNXJlbSAtMC43cmVtO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMCAwLjdyZW07XHJcbiAgICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/transfer-alias/transfer-alias.component.ts":
/*!************************************************************!*\
  !*** ./src/app/transfer-alias/transfer-alias.component.ts ***!
  \************************************************************/
/*! exports provided: TransferAliasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferAliasComponent", function() { return TransferAliasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransferAliasComponent = /** @class */ (function () {
    function TransferAliasComponent(location, router, backend, variablesService, modalService, ngZone) {
        this.location = location;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.transferAddress = '';
        this.requestProcessing = false;
    }
    TransferAliasComponent.prototype.ngOnInit = function () {
        this.wallet = this.variablesService.currentWallet;
        var alias = this.backend.getWalletAlias(this.wallet.address);
        this.alias = {
            name: alias.name,
            address: alias.address,
            comment: alias.comment,
            tracking_key: alias.tracking_key
        };
        this.notEnoughMoney = this.wallet.unlocked_balance.isLessThan(this.variablesService.default_fee_big);
    };
    TransferAliasComponent.prototype.changeAddress = function () {
        var _this = this;
        this.backend.validateAddress(this.transferAddress, function (status) {
            _this.transferAddressValid = status;
            if (status) {
                _this.backend.getPoolInfo(function (statusPool, dataPool) {
                    if (dataPool.hasOwnProperty('aliases_que') && dataPool.aliases_que.length) {
                        _this.setStatus(!dataPool.aliases_que.some(function (el) { return el.address === _this.transferAddress; }));
                    }
                    else {
                        _this.setStatus(status);
                    }
                });
            }
            else {
                _this.setStatus(false);
            }
        });
    };
    TransferAliasComponent.prototype.setStatus = function (statusSet) {
        var _this = this;
        this.permissionSend = statusSet;
        if (statusSet) {
            this.backend.getAliasByAddress(this.transferAddress, function (status) {
                _this.ngZone.run(function () {
                    if (status) {
                        _this.transferAddressAlias = true;
                        _this.permissionSend = false;
                    }
                    else {
                        _this.transferAddressAlias = false;
                    }
                });
            });
        }
        else {
            this.ngZone.run(function () {
                _this.transferAddressAlias = false;
            });
        }
    };
    TransferAliasComponent.prototype.transferAlias = function () {
        var _this = this;
        if (this.requestProcessing || !this.permissionSend || !this.transferAddressValid || this.notEnoughMoney) {
            return;
        }
        this.requestProcessing = true;
        var newAlias = {
            name: this.alias.name,
            address: this.transferAddress,
            comment: this.alias.comment,
            tracking_key: this.alias.tracking_key
        };
        this.backend.updateAlias(this.wallet.wallet_id, newAlias, this.variablesService.default_fee, function (status, data) {
            if (status && data.hasOwnProperty('success') && data.success) {
                _this.modalService.prepareModal('info', 'TRANSFER_ALIAS.REQUEST_SEND_REG');
                _this.ngZone.run(function () {
                    _this.router.navigate(['/wallet/' + _this.wallet.wallet_id]);
                });
            }
            _this.requestProcessing = false;
        });
    };
    TransferAliasComponent.prototype.back = function () {
        this.location.back();
    };
    TransferAliasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transfer-alias',
            template: __webpack_require__(/*! ./transfer-alias.component.html */ "./src/app/transfer-alias/transfer-alias.component.html"),
            styles: [__webpack_require__(/*! ./transfer-alias.component.scss */ "./src/app/transfer-alias/transfer-alias.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], TransferAliasComponent);
    return TransferAliasComponent;
}());



/***/ }),

/***/ "./src/app/typing-message/typing-message.component.html":
/*!**************************************************************!*\
  !*** ./src/app/typing-message/typing-message.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\r\n  <div class=\"interlocutor\">\r\n    @bitmain\r\n  </div>\r\n  <a class=\"back-btn\" [routerLink]=\"['/main']\">\r\n    <i class=\"icon back\"></i>\r\n    <span>{{ 'COMMON.BACK' | translate }}</span>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"messages-content\">\r\n  <div class=\"messages-list scrolled-content\">\r\n    <div class=\"date\">10:39</div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"buddy\">\r\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n    </div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"buddy\">\r\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n    </div>\r\n    <div class=\"date\">11:44</div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"buddy\">\r\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n    </div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"date\">12:15</div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"buddy\">\r\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n    </div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"date\">13:13</div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"buddy\">\r\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n    </div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n  </div>\r\n  <div class=\"type-message\">\r\n    <div class=\"input-block textarea\">\r\n      <textarea placeholder=\"{{ 'MESSAGES.SEND_PLACEHOLDER' | translate }}\"></textarea>\r\n    </div>\r\n    <button type=\"button\" class=\"blue-button\">{{ 'MESSAGES.SEND_BUTTON' | translate }}</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/typing-message/typing-message.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/typing-message/typing-message.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  width: 100%; }\n\n.head {\n  flex: 0 0 auto;\n  box-sizing: content-box;\n  margin: -3rem -3rem 0; }\n\n.messages-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-grow: 1; }\n\n.messages-content .messages-list {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.3rem;\n    margin: 1rem -3rem;\n    padding: 0 3rem;\n    overflow-y: overlay; }\n\n.messages-content .messages-list div {\n      margin: 0.7rem 0; }\n\n.messages-content .messages-list div.date {\n        text-align: center; }\n\n.messages-content .messages-list div.my, .messages-content .messages-list div.buddy {\n        position: relative;\n        padding: 1.8rem;\n        max-width: 60%; }\n\n.messages-content .messages-list div.buddy {\n        align-self: flex-end; }\n\n.messages-content .type-message {\n    display: flex;\n    flex: 0 0 auto;\n    width: 100%;\n    height: 4.2rem; }\n\n.messages-content .type-message .input-block {\n      width: 100%; }\n\n.messages-content .type-message .input-block > textarea {\n        min-height: 4.2rem; }\n\n.messages-content .type-message button {\n      flex: 0 0 15rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwaW5nLW1lc3NhZ2UvRDpcXFByb2plY3RcXFdPUktfTkVXXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcdHlwaW5nLW1lc3NhZ2VcXHR5cGluZy1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLFlBQVksRUFBQTs7QUFKZDtJQU9JLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7O0FBWnZCO01BZU0sZ0JBQWdCLEVBQUE7O0FBZnRCO1FBa0JRLGtCQUFrQixFQUFBOztBQWxCMUI7UUFzQlEsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixjQUFjLEVBQUE7O0FBeEJ0QjtRQTRCUSxvQkFBb0IsRUFBQTs7QUE1QjVCO0lBa0NJLGFBQWE7SUFDYixjQUFjO0lBQ2QsV0FBVztJQUNYLGNBQWMsRUFBQTs7QUFyQ2xCO01Bd0NNLFdBQVcsRUFBQTs7QUF4Q2pCO1FBMkNRLGtCQUFrQixFQUFBOztBQTNDMUI7TUFnRE0sZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdHlwaW5nLW1lc3NhZ2UvdHlwaW5nLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZCB7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgbWFyZ2luOiAtM3JlbSAtM3JlbSAwO1xyXG59XHJcblxyXG4ubWVzc2FnZXMtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gIC5tZXNzYWdlcy1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBtYXJnaW46IDFyZW0gLTNyZW07XHJcbiAgICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgICBvdmVyZmxvdy15OiBvdmVybGF5O1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIG1hcmdpbjogMC43cmVtIDA7XHJcblxyXG4gICAgICAmLmRhdGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5teSwgJi5idWRkeSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuOHJlbTtcclxuICAgICAgICBtYXgtd2lkdGg6IDYwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idWRkeSB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50eXBlLW1lc3NhZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQuMnJlbTtcclxuXHJcbiAgICAuaW5wdXQtYmxvY2sge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgID4gdGV4dGFyZWEge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQuMnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGZsZXg6IDAgMCAxNXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/typing-message/typing-message.component.ts":
/*!************************************************************!*\
  !*** ./src/app/typing-message/typing-message.component.ts ***!
  \************************************************************/
/*! exports provided: TypingMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingMessageComponent", function() { return TypingMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypingMessageComponent = /** @class */ (function () {
    function TypingMessageComponent(route) {
        this.route = route;
        this.route.params.subscribe(function (params) { return console.log(params); });
    }
    TypingMessageComponent.prototype.ngOnInit = function () {
    };
    TypingMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typing-message',
            template: __webpack_require__(/*! ./typing-message.component.html */ "./src/app/typing-message/typing-message.component.html"),
            styles: [__webpack_require__(/*! ./typing-message.component.scss */ "./src/app/typing-message/typing-message.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TypingMessageComponent);
    return TypingMessageComponent;
}());



/***/ }),

/***/ "./src/app/wallet-details/wallet-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/wallet-details/wallet-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span (click)=\"back()\">{{variablesService.currentWallet.name}}</span>\r\n      <span>{{ 'BREADCRUMBS.WALLET_DETAILS' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-details\" [formGroup]=\"detailsForm\" (ngSubmit)=\"onSubmitEdit()\">\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"wallet-name\">{{ 'WALLET_DETAILS.LABEL_NAME' | translate }}</label>\r\n      <input type=\"text\" id=\"wallet-name\" formControlName=\"name\" [maxLength]=\"variablesService.maxWalletNameLength\"\r\n        (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\"\r\n        *ngIf=\"detailsForm.controls['name'].invalid && (detailsForm.controls['name'].dirty || detailsForm.controls['name'].touched)\">\r\n        <div *ngIf=\"detailsForm.controls['name'].errors['required']\">\r\n          {{ 'WALLET_DETAILS.FORM_ERRORS.NAME_REQUIRED' | translate }}\r\n        </div>\r\n        <div *ngIf=\"detailsForm.controls['name'].errors['duplicate']\">\r\n          {{ 'WALLET_DETAILS.FORM_ERRORS.NAME_DUPLICATE' | translate }}\r\n        </div>\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"detailsForm.get('name').value.length >= variablesService.maxWalletNameLength\">\r\n        {{ 'WALLET_DETAILS.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"wallet-location\">{{ 'WALLET_DETAILS.LABEL_FILE_LOCATION' | translate }}</label>\r\n      <input type=\"text\" id=\"wallet-location\" formControlName=\"path\" readonly>\r\n    </div>\r\n  </form>\r\n\r\n  <ng-container *ngIf=\"!showSeed else seedPhraseContent\">\r\n    <form class=\"form-seed mt-2\" [formGroup]=\"seedPhraseForm\" (ngSubmit)=\"onSubmitSeed()\">\r\n      <label>{{ 'WALLET_DETAILS.LABEL_SEED_PHRASE' | translate }}</label>\r\n      <div class=\"form-content\">\r\n        <div class=\"seed-phrase-form\">\r\n          <div class=\"input-block\">\r\n            <label for=\"create-password\">{{ 'WALLET_DETAILS.CREATE_PASSWORD_SECURE' | translate }} (<a class=\"text-coral\">{{ 'WALLET_DETAILS.INFO' | translate }}</a>)</label>\r\n            <input type=\"password\" id=\"create-password\" formControlName=\"password\">\r\n          </div>\r\n          <div class=\"input-block\">\r\n            <label for=\"confirm-password\">{{ 'WALLET_DETAILS.FORM.CONFIRM_PASSWORD' | translate }}</label>\r\n            <input type=\"password\" id=\"confirm-password\" formControlName=\"confirmPassword\">\r\n          </div>\r\n          <span class=\"error-message\" *ngIf=\"!seedPhraseForm.valid\">\r\n            {{ 'WALLET_DETAILS.FORM_ERRORS.PASSWORDS_DONT_MATCH' | translate }}\r\n          </span>\r\n\r\n          <button type=\"submit\" class=\"blue-button\" [disabled]=\"!seedPhraseForm.valid\"><i class=\"icon safety\"></i>\r\n            {{ 'WALLET_DETAILS.FORM.GENERATE_SECURE_SEED' | translate }}</button>\r\n\r\n          <a class=\"secured-seed\"><i class=\"icon info\"></i>{{ 'WALLET_DETAILS.FORM.SECURED_SEED_WILL_REQUIRE' | translate }}</a>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </ng-container>\r\n\r\n  <ng-template #seedPhraseContent>\r\n    <div class=\"seed-phrase mt-2\">\r\n      <div class=\"seed-phrase-title\">\r\n        <span>{{ 'WALLET_DETAILS.LABEL_SEED_PHRASE' | translate }}</span>\r\n        <p class=\"right-part\">\r\n          <span\r\n          *ngIf=\"seedPhraseForm.controls.password.value.length == 0\">{{ 'WALLET_DETAILS.SEED_IS_UNSECURED' | translate }} <i class=\"icon unsecured\"></i></span>\r\n          <span\r\n          *ngIf=\"seedPhraseForm.controls.password.value.length > 0\">{{ 'WALLET_DETAILS.SEED_IS_SECURED' | translate }} <i class=\"icon secured\"></i></span>\r\n        </p>\r\n      </div>\r\n      <div class=\"seed-phrase-content\" (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, seedPhrase)\">\r\n        <ng-container *ngFor=\"let word of seedPhrase.split(' '); let index = index\">\r\n          <div class=\"item\"\r\n            [class.dark]=\"(index + 1) >= 1 && (index + 1) <= 7 || (index + 1) >= 15 && (index + 1) <= 21\">\r\n            {{(index + 1) + '. ' + word}}</div>\r\n        </ng-container>\r\n      </div>\r\n      <div class=\"seed-phrase-footer\"\r\n        *ngIf=\"seedPhraseForm.controls.password.value.length > 0\">\r\n        <span class=\"title\">{{ 'WALLET_DETAILS.REMEMBER_YOU_WILL_REQUIRE' | translate }}</span>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</div>"

/***/ }),

/***/ "./src/app/wallet-details/wallet-details.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/wallet-details/wallet-details.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-details {\n  margin-top: 1.8rem; }\n  .form-details .input-block:first-child {\n    width: 50%; }\n  .form-details .wallet-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n  .form-details .wallet-buttons button {\n      margin: 2.9rem 0;\n      width: 100%;\n      max-width: 15rem; }\n  .mt-2 {\n  margin-top: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0LWRldGFpbHMvRDpcXFByb2plY3RcXFdPUktfTkVXXFx6YW5vXFxzcmNcXGd1aVxccXQtZGFlbW9uXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcd2FsbGV0LWRldGFpbHNcXHdhbGxldC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7RUFEcEI7SUFNTSxVQUFVLEVBQUE7RUFOaEI7SUFXSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QixFQUFBO0VBYmxDO01BZ0JNLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7RUFLdEI7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3dhbGxldC1kZXRhaWxzL3dhbGxldC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZGV0YWlscyB7XHJcbiAgbWFyZ2luLXRvcDogMS44cmVtO1xyXG5cclxuICAuaW5wdXQtYmxvY2sge1xyXG5cclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndhbGxldC1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMi45cmVtIDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDE1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm10LTIge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/wallet-details/wallet-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/wallet-details/wallet-details.component.ts ***!
  \************************************************************/
/*! exports provided: WalletDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletDetailsComponent", function() { return WalletDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WalletDetailsComponent = /** @class */ (function () {
    function WalletDetailsComponent(router, backend, variablesService, ngZone, location) {
        var _this = this;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.ngZone = ngZone;
        this.location = location;
        this.seedPhrase = '';
        this.showSeed = false;
        this.copyAnimation = false;
        this.detailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            if (_this.variablesService.wallets[i].wallet_id ===
                                _this.variablesService.currentWallet.wallet_id) {
                                return { same: true };
                            }
                            else {
                                return { duplicate: true };
                            }
                        }
                    }
                    return null;
                },
            ]),
            path: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.seedPhraseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.variablesService.pattern)),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.variablesService.pattern)),
        }, { validators: this.checkPasswords });
    }
    WalletDetailsComponent.prototype.checkPasswords = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.confirmPassword.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    WalletDetailsComponent.prototype.ngOnInit = function () {
        this.showSeed = false;
        this.detailsForm
            .get('name')
            .setValue(this.variablesService.currentWallet.name);
        this.detailsForm
            .get('path')
            .setValue(this.variablesService.currentWallet.path);
    };
    WalletDetailsComponent.prototype.showSeedPhrase = function () {
        this.showSeed = true;
    };
    WalletDetailsComponent.prototype.onSubmitSeed = function () {
        var _this = this;
        if (this.seedPhraseForm.valid) {
            this.showSeedPhrase();
            var wallet_id = this.variablesService.currentWallet.wallet_id;
            var seed_password = this.seedPhraseForm.controls.password.value;
            this.backend.getSmartWalletInfo({ wallet_id: wallet_id, seed_password: seed_password }, function (status, data) {
                if (data.hasOwnProperty('seed_phrase')) {
                    _this.ngZone.run(function () {
                        _this.seedPhrase = data['seed_phrase'].trim();
                    });
                }
            });
        }
    };
    WalletDetailsComponent.prototype.onSubmitEdit = function () {
        var _this = this;
        if (this.detailsForm.value) {
            this.variablesService.currentWallet.name = this.detailsForm.get('name').value;
            this.ngZone.run(function () {
                _this.router.navigate([
                    '/wallet/' + _this.variablesService.currentWallet.wallet_id,
                ]);
            });
        }
    };
    WalletDetailsComponent.prototype.closeWallet = function () {
        var _this = this;
        this.backend.closeWallet(this.variablesService.currentWallet.wallet_id, function () {
            for (var i = _this.variablesService.wallets.length - 1; i >= 0; i--) {
                if (_this.variablesService.wallets[i].wallet_id ===
                    _this.variablesService.currentWallet.wallet_id) {
                    _this.variablesService.wallets.splice(i, 1);
                }
            }
            _this.ngZone.run(function () {
                if (_this.variablesService.wallets.length) {
                    _this.variablesService.currentWallet = _this.variablesService.wallets[0];
                    _this.router.navigate([
                        '/wallet/' + _this.variablesService.currentWallet.wallet_id,
                    ]);
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
            if (_this.variablesService.appPass) {
                _this.backend.storeSecureAppData();
            }
        });
    };
    WalletDetailsComponent.prototype.back = function () {
        this.location.back();
    };
    WalletDetailsComponent.prototype.ngOnDestroy = function () {
    };
    WalletDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet-details',
            template: __webpack_require__(/*! ./wallet-details.component.html */ "./src/app/wallet-details/wallet-details.component.html"),
            styles: [__webpack_require__(/*! ./wallet-details.component.scss */ "./src/app/wallet-details/wallet-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], WalletDetailsComponent);
    return WalletDetailsComponent;
}());



/***/ }),

/***/ "./src/app/wallet/wallet.component.html":
/*!**********************************************!*\
  !*** ./src/app/wallet/wallet.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <div>\r\n    <h3 tooltip=\"{{ variablesService.currentWallet.name }}\" placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{variablesService.currentWallet.name}}</h3>\r\n    <div *ngIf=\"!variablesService.currentWallet.is_auditable\">\r\n      <button [routerLink]=\"['/assign-alias']\" *ngIf=\"!variablesService.currentWallet.alias.hasOwnProperty('name') && variablesService.currentWallet.loaded && variablesService.daemon_state === 2 && variablesService.currentWallet.alias_available\">\r\n        <i class=\"icon account\"></i>\r\n        <span>{{ 'WALLET.REGISTER_ALIAS' | translate }}</span>\r\n      </button>\r\n      <div class=\"alias\" *ngIf=\"variablesService.currentWallet.alias.hasOwnProperty('name') && variablesService.currentWallet.loaded && variablesService.daemon_state === 2\">\r\n        <span>{{variablesService.currentWallet.alias['name']}}</span>\r\n        <ng-container *ngIf=\"variablesService.currentWallet.alias_available\">\r\n          <i class=\"icon edit\" [routerLink]=\"['/edit-alias']\" tooltip=\"{{ 'WALLET.TOOLTIPS.EDIT_ALIAS' | translate }}\" placement=\"bottom-right\" tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\"></i>\r\n          <i class=\"icon transfer\" [routerLink]=\"['/transfer-alias']\" tooltip=\"{{ 'WALLET.TOOLTIPS.TRANSFER_ALIAS' | translate }}\" placement=\"right\" tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\"></i>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <button [routerLink]=\"['/details']\" routerLinkActive=\"active\" tooltip=\"{{ 'WALLET.TOOLTIPS.SETTINGS' | translate }}\" placement=\"left\" tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\" [disabled]=\"variablesService.daemon_state !== 2 || !walletLoaded\">\r\n      <i class=\"icon details\"></i>\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"address\">\r\n  <span>{{variablesService.currentWallet.address}}</span>\r\n  <i class=\"icon\" [class.copy]=\"!copyAnimation\" [class.copied]=\"copyAnimation\" (click)=\"copyAddress()\"></i>\r\n</div>\r\n<div class=\"balance\">\r\n  <span [tooltip]=\"getTooltip()\" [placement]=\"'bottom'\" [tooltipClass]=\"'balance-tooltip'\" [delay]=\"150\" [timeout]=\"0\" (onHide)=\"onHideTooltip()\">{{variablesService.currentWallet.balance | intToMoney  : '3'}} {{variablesService.defaultCurrency}}</span>\r\n  <span>$ {{variablesService.currentWallet.getMoneyEquivalent(variablesService.moneyEquivalent) | intToMoney | number : '1.2-2'}}</span>\r\n</div>\r\n<div class=\"tabs\">\r\n  <div class=\"tabs-header\">\r\n    <ng-container *ngFor=\"let tab of tabs; let index = index\">\r\n      <div class=\"tab\" [class.active]=\"tab.active\" [ngClass]=\"{ 'hide': ((tab.link === '/send' || tab.link === '/contracts') && variablesService.currentWallet.is_watch_only && variablesService.currentWallet.is_auditable) }\"\r\n           [class.disabled]=\"((tab.link === '/send' || tab.link === '/contracts' || tab.link === '/staking') && (variablesService.daemon_state !== 2 || !variablesService.currentWallet.loaded))\r\n                || ((tab.link === '/send' || tab.link === '/contracts') && variablesService.currentWallet.is_watch_only && variablesService.currentWallet.is_auditable)\"\r\n           (click)=\"changeTab(index)\" (mouseover)=\"itemHovered(index, true)\" (mouseleave)=\"itemHovered(index, false)\">\r\n        <i class=\"icon\" [ngClass]=\"tab.icon\"  *ngIf=\"!tab.itemHovered; else svgAnimated\"></i>\r\n        <ng-template #svgAnimated>\r\n          <div class=\"animated\" [innerHTML]=\"tab.animated | safeHTML\"></div>\r\n        </ng-template>\r\n        <span>{{ tab.title | translate }}</span>\r\n        <span class=\"indicator\" *ngIf=\"tab.indicator\">{{variablesService.currentWallet.new_contracts}}</span>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n  <div #scrolledContent class=\"tabs-content scrolled-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div *ngIf=\"activeTab === 'history'\" class=\"pagination-wrapper\">\r\n    <div class=\"pagination\">\r\n      <div>\r\n        <button\r\n          [ngClass]=\"{'disabled': sync_started || wallet}\"\r\n          [disabled]=\"variablesService.currentWallet.currentPage === 1 || sync_started || wallet\"\r\n          (click)=\"setPage(variablesService.currentWallet.currentPage - 1)\">\r\n          <\r\n        </button>\r\n\r\n        <ng-container *ngIf=\"!mining\">\r\n          <button [disabled]=\"sync_started || wallet\"\r\n                  *ngFor=\"let page of variablesService.currentWallet.pages\"\r\n                  [ngClass]=\"{ 'active': variablesService.currentWallet.currentPage === page,'disabled': sync_started || wallet }\"\r\n                  (click)=\"setPage(page)\">{{page}}</button>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"mining\">\r\n          <button [ngClass]=\"{ 'active': variablesService.currentWallet.currentPage, 'disabled': sync_started || wallet}\"\r\n                  [disabled]=\"stop_paginate || sync_started || wallet\"\r\n                  (click)=\"setPage(variablesService.currentWallet.currentPage)\">\r\n            {{variablesService.currentWallet.currentPage}}\r\n          </button>\r\n        </ng-container>\r\n\r\n        <button\r\n          [disabled]=\"stop_paginate || sync_started || wallet\"\r\n          [ngClass]=\"{'disabled': sync_started || wallet}\"\r\n          (click)=\"setPage(variablesService.currentWallet.currentPage + 1)\">\r\n          >\r\n        </button>\r\n\r\n      </div>\r\n      <div class=\"mining-transaction-switch\">\r\n        <span class=\"switch-text\">Hide mining transactions</span>\r\n        <div class=\"switch\" [ngClass]=\"{'disabled': sync_started || wallet}\" (click)=\"toggleMiningTransactions(); $event.stopPropagation()\">\r\n          <span class=\"option\" *ngIf=\"mining\">{{ 'STAKING.SWITCH.ON' | translate }}</span>\r\n          <span class=\"circle\" [class.on]=\"mining\" [class.off]=\"!mining\"></span>\r\n          <span class=\"option\" *ngIf=\"!mining\">{{ 'STAKING.SWITCH.OFF' | translate }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/wallet/wallet.component.scss":
/*!**********************************************!*\
  !*** ./src/app/wallet/wallet.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 0 3rem 3rem;\n  min-width: 95rem;\n  width: 100%;\n  height: 100%; }\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 0 0 auto;\n  height: 8rem; }\n\n.header > div {\n    display: flex;\n    align-items: center; }\n\n.header > div :not(:last-child) {\n      margin-right: 3.2rem; }\n\n.header h3 {\n    font-size: 1.7rem;\n    font-weight: 600;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 50rem;\n    line-height: 2.7rem; }\n\n.header button {\n    display: flex;\n    align-items: center;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    font-weight: 400;\n    outline: none;\n    padding: 0; }\n\n.header button .icon {\n      margin-right: 1.2rem;\n      width: 1.7rem;\n      height: 1.7rem; }\n\n.header button .icon.account {\n        height: 1.6rem;\n        -webkit-mask: url('account.svg') no-repeat center;\n                mask: url('account.svg') no-repeat center; }\n\n.header button .icon.lock {\n        -webkit-mask: url('lock.svg') no-repeat center;\n                mask: url('lock.svg') no-repeat center; }\n\n.header button .icon.details {\n        -webkit-mask: url('details-settings.svg') no-repeat center;\n                mask: url('details-settings.svg') no-repeat center;\n        margin-right: 0;\n        height: 1.8rem; }\n\n.header button .icon.close-wallet {\n        -webkit-mask: url('close-wallet.svg') no-repeat center;\n                mask: url('close-wallet.svg') no-repeat center;\n        margin-right: 0; }\n\n.header .alias {\n    display: flex;\n    align-items: center;\n    font-size: 1.3rem; }\n\n.header .alias .icon {\n      cursor: pointer;\n      margin-right: 1.2rem;\n      width: 1.7rem;\n      height: 1.7rem; }\n\n.header .alias .icon.edit {\n        -webkit-mask: url('details.svg') no-repeat center;\n                mask: url('details.svg') no-repeat center; }\n\n.header .alias .icon.transfer {\n        -webkit-mask: url('send.svg') no-repeat center;\n                mask: url('send.svg') no-repeat center; }\n\n.address {\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  font-size: 1.4rem;\n  line-height: 1.7rem; }\n\n.address .icon {\n    cursor: pointer;\n    margin-left: 1.2rem;\n    width: 1.7rem;\n    height: 1.7rem; }\n\n.address .icon.copy {\n      width: 1.8rem;\n      -webkit-mask: url('copy.svg') no-repeat center;\n              mask: url('copy.svg') no-repeat center; }\n\n.address .icon.copy:hover {\n        opacity: 0.75; }\n\n.address .icon.copied {\n      -webkit-mask: url('complete-testwallet.svg') no-repeat center;\n              mask: url('complete-testwallet.svg') no-repeat center; }\n\n.balance {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  flex: 0 0 auto;\n  margin: 2.6rem 0; }\n\n.balance :first-child {\n    font-size: 3.3rem;\n    font-weight: 600;\n    line-height: 2.4rem;\n    margin-right: 3.5rem; }\n\n.balance :last-child {\n    font-size: 1.8rem;\n    font-weight: 600;\n    line-height: 1.3rem; }\n\n.tabs {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto; }\n\n.tabs .tabs-header {\n    display: flex;\n    justify-content: space-between;\n    flex: 0 0 auto; }\n\n.tabs .tabs-header .tab {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex: 1 0 auto;\n      cursor: pointer;\n      padding: 0 1rem;\n      height: 5rem; }\n\n.tabs .tabs-header .tab.hide {\n        display: none; }\n\n.tabs .tabs-header .tab .animated {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin-right: 1.3rem; }\n\n.tabs .tabs-header .tab .animated ::ng-deep svg {\n        width: 2rem;\n        height: 2rem; }\n\n.tabs .tabs-header .tab .animated ::ng-deep svg path, .tabs .tabs-header .tab .animated ::ng-deep svg circle, .tabs .tabs-header .tab .animated ::ng-deep svg polygon {\n          fill: #4db1ff; }\n\n.tabs .tabs-header .tab .icon {\n        margin-right: 1.3rem;\n        width: 2rem;\n        height: 2rem; }\n\n.tabs .tabs-header .tab .icon.send {\n          -webkit-mask: url('send.svg') no-repeat center;\n                  mask: url('send.svg') no-repeat center; }\n\n.tabs .tabs-header .tab .icon.receive {\n          -webkit-mask: url('receive.svg') no-repeat center;\n                  mask: url('receive.svg') no-repeat center; }\n\n.tabs .tabs-header .tab .icon.history {\n          -webkit-mask: url('history.svg') no-repeat center;\n                  mask: url('history.svg') no-repeat center; }\n\n.tabs .tabs-header .tab .icon.contracts {\n          -webkit-mask: url('contracts.svg') no-repeat center;\n                  mask: url('contracts.svg') no-repeat center; }\n\n.tabs .tabs-header .tab .icon.messages {\n          -webkit-mask: url('message.svg') no-repeat center;\n                  mask: url('message.svg') no-repeat center; }\n\n.tabs .tabs-header .tab .icon.staking {\n          -webkit-mask: url('staking.svg') no-repeat center;\n                  mask: url('staking.svg') no-repeat center; }\n\n.tabs .tabs-header .tab .indicator {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 1rem;\n        font-size: 1rem;\n        font-weight: 600;\n        margin-left: 1.3rem;\n        padding: 0 0.5rem;\n        min-width: 1.6rem;\n        height: 1.6rem; }\n\n.tabs .tabs-header .tab.disabled {\n        cursor: url('not-allowed.svg'), not-allowed; }\n\n.tabs .tabs-header .tab:not(:last-child) {\n        margin-right: 0.3rem; }\n\n.tabs .tabs-content {\n    display: flex;\n    padding: 3rem;\n    flex: 1 1 auto;\n    overflow-x: hidden;\n    overflow-y: overlay; }\n\n.tabs .pagination-wrapper .pagination {\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n\n.tabs .pagination-wrapper .pagination button {\n      margin-right: 0.5rem;\n      padding: 0;\n      width: 2.5rem;\n      height: 2.5rem;\n      font-size: 1.2rem;\n      transition: all 0.3s; }\n\n.tabs .pagination-wrapper .pagination .disabled {\n      background-color: #18202a;\n      color: #e0e0e0;\n      opacity: 0.3;\n      cursor: default;\n      transition: all 0.3s; }\n\n.mining-transaction-switch {\n  display: flex;\n  align-items: center; }\n\n.mining-transaction-switch .switch-text {\n    margin-right: 1rem;\n    font-size: 1.3rem;\n    color: #565c62; }\n\n.mining-transaction-switch .switch {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 1rem;\n    cursor: pointer;\n    font-size: 1rem;\n    padding: 0.5rem;\n    width: 5rem;\n    height: 2rem; }\n\n.mining-transaction-switch .switch .circle {\n      border-radius: 1rem;\n      width: 1.2rem;\n      height: 1.2rem; }\n\n.mining-transaction-switch .switch .option {\n      margin: 0 0.2rem;\n      line-height: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0L0Q6XFxQcm9qZWN0XFxXT1JLX05FV1xcemFub1xcc3JjXFxndWlcXHF0LWRhZW1vblxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXHdhbGxldFxcd2FsbGV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLFlBQVksRUFBQTs7QUFMZDtJQVFJLGFBQWE7SUFDYixtQkFBbUIsRUFBQTs7QUFUdkI7TUFZTSxvQkFBb0IsRUFBQTs7QUFaMUI7SUFpQkksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7O0FBdkJ2QjtJQTJCSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVSxFQUFBOztBQWxDZDtNQXFDTSxvQkFBb0I7TUFDcEIsYUFBYTtNQUNiLGNBQWMsRUFBQTs7QUF2Q3BCO1FBMENRLGNBQWM7UUFDZCxpREFBMEQ7Z0JBQTFELHlDQUEwRCxFQUFBOztBQTNDbEU7UUErQ1EsOENBQXVEO2dCQUF2RCxzQ0FBdUQsRUFBQTs7QUEvQy9EO1FBbURRLDBEQUFtRTtnQkFBbkUsa0RBQW1FO1FBQ25FLGVBQWU7UUFDZixjQUFjLEVBQUE7O0FBckR0QjtRQXlEUSxzREFBK0Q7Z0JBQS9ELDhDQUErRDtRQUMvRCxlQUFlLEVBQUE7O0FBMUR2QjtJQWdFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBOztBQWxFckI7TUFxRU0sZUFBZTtNQUNmLG9CQUFvQjtNQUNwQixhQUFhO01BQ2IsY0FBYyxFQUFBOztBQXhFcEI7UUEyRVEsaURBQTBEO2dCQUExRCx5Q0FBMEQsRUFBQTs7QUEzRWxFO1FBK0VRLDhDQUF1RDtnQkFBdkQsc0NBQXVELEVBQUE7O0FBTS9EO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUxyQjtJQVFJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWMsRUFBQTs7QUFYbEI7TUFjTSxhQUFhO01BQ2IsOENBQXVEO2NBQXZELHNDQUF1RCxFQUFBOztBQWY3RDtRQWtCUSxhQUFhLEVBQUE7O0FBbEJyQjtNQXVCTSw2REFBc0U7Y0FBdEUscURBQXNFLEVBQUE7O0FBSzVFO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUxsQjtJQVFJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9CQUFvQixFQUFBOztBQVh4QjtJQWVJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBSGhCO0lBTUksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjLEVBQUE7O0FBUmxCO01BV00sYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsY0FBYztNQUNkLGVBQWU7TUFDZixlQUFlO01BQ2YsWUFBWSxFQUFBOztBQWpCbEI7UUFtQlEsYUFBYSxFQUFBOztBQW5CckI7UUFzQlEsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsb0JBQW9CLEVBQUE7O0FBekI1QjtRQThCUSxXQUFXO1FBQ1gsWUFBWSxFQUFBOztBQS9CcEI7VUFrQ1UsYUFBYSxFQUFBOztBQWxDdkI7UUF1Q1Esb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxZQUFZLEVBQUE7O0FBekNwQjtVQTRDVSw4Q0FBdUQ7a0JBQXZELHNDQUF1RCxFQUFBOztBQTVDakU7VUFnRFUsaURBQTBEO2tCQUExRCx5Q0FBMEQsRUFBQTs7QUFoRHBFO1VBb0RVLGlEQUEwRDtrQkFBMUQseUNBQTBELEVBQUE7O0FBcERwRTtVQXdEVSxtREFBNEQ7a0JBQTVELDJDQUE0RCxFQUFBOztBQXhEdEU7VUE0RFUsaURBQTBEO2tCQUExRCx5Q0FBMEQsRUFBQTs7QUE1RHBFO1VBZ0VVLGlEQUEwRDtrQkFBMUQseUNBQTBELEVBQUE7O0FBaEVwRTtRQXFFUSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixjQUFjLEVBQUE7O0FBOUV0QjtRQWtGUSwyQ0FBNEQsRUFBQTs7QUFsRnBFO1FBc0ZRLG9CQUFvQixFQUFBOztBQXRGNUI7SUE0RkksYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBOztBQWhHdkI7SUFzR00sYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CLEVBQUE7O0FBekd6QjtNQTJHUSxvQkFBb0I7TUFDcEIsVUFBVTtNQUNWLGFBQWE7TUFDYixjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLG9CQUFvQixFQUFBOztBQWhINUI7TUFtSFEseUJBQXlCO01BQ3pCLGNBQWM7TUFDZCxZQUFZO01BQ1osZUFBZTtNQUNmLG9CQUFvQixFQUFBOztBQU01QjtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFGckI7SUFJSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWMsRUFBQTs7QUFObEI7SUFVSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVksRUFBQTs7QUFsQmhCO01BcUJNLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsY0FBYyxFQUFBOztBQXZCcEI7TUEyQk0sZ0JBQWdCO01BQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvd2FsbGV0L3dhbGxldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDAgM3JlbSAzcmVtO1xyXG4gIG1pbi13aWR0aDogOTVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIGhlaWdodDogOHJlbTtcclxuXHJcbiAgPiBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMuMnJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuN3JlbTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjJyZW07XHJcbiAgICAgIHdpZHRoOiAxLjdyZW07XHJcbiAgICAgIGhlaWdodDogMS43cmVtO1xyXG5cclxuICAgICAgJi5hY2NvdW50IHtcclxuICAgICAgICBoZWlnaHQ6IDEuNnJlbTtcclxuICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2FjY291bnQuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmxvY2sge1xyXG4gICAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvbG9jay5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuZGV0YWlscyB7XHJcbiAgICAgICAgbWFzazogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9kZXRhaWxzLXNldHRpbmdzLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY2xvc2Utd2FsbGV0IHtcclxuICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2Nsb3NlLXdhbGxldC5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWxpYXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjJyZW07XHJcbiAgICAgIHdpZHRoOiAxLjdyZW07XHJcbiAgICAgIGhlaWdodDogMS43cmVtO1xyXG5cclxuICAgICAgJi5lZGl0IHtcclxuICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2RldGFpbHMuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnRyYW5zZmVyIHtcclxuICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3NlbmQuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkcmVzcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjdyZW07XHJcblxyXG4gIC5pY29uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjJyZW07XHJcbiAgICB3aWR0aDogMS43cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjdyZW07XHJcblxyXG4gICAgJi5jb3B5IHtcclxuICAgICAgd2lkdGg6IDEuOHJlbTtcclxuICAgICAgbWFzazogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9jb3B5LnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmNvcGllZCB7XHJcbiAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvY29tcGxldGUtdGVzdHdhbGxldC5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYmFsYW5jZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIG1hcmdpbjogMi42cmVtIDA7XHJcblxyXG4gIDpmaXJzdC1jaGlsZCB7XHJcbiAgICBmb250LXNpemU6IDMuM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMi40cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICA6bGFzdC1jaGlsZCB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnRhYnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuXHJcbiAgLnRhYnMtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuXHJcbiAgICAudGFiIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgICAmLmhpZGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLmFuaW1hdGVkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjNyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbmltYXRlZCA6Om5nLWRlZXAgc3ZnIHtcclxuXHJcbiAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG5cclxuICAgICAgICBwYXRoLCBjaXJjbGUsIHBvbHlnb24ge1xyXG4gICAgICAgICAgZmlsbDogIzRkYjFmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuM3JlbTtcclxuICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcblxyXG4gICAgICAgICYuc2VuZCB7XHJcbiAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3NlbmQuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5yZWNlaXZlIHtcclxuICAgICAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvcmVjZWl2ZS5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmhpc3Rvcnkge1xyXG4gICAgICAgICAgbWFzazogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9oaXN0b3J5LnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuY29udHJhY3RzIHtcclxuICAgICAgICAgIG1hc2s6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvY29udHJhY3RzLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYubWVzc2FnZXMge1xyXG4gICAgICAgICAgbWFzazogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9tZXNzYWdlLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuc3Rha2luZyB7XHJcbiAgICAgICAgICBtYXNrOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3N0YWtpbmcuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmluZGljYXRvciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEuM3JlbTtcclxuICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDEuNnJlbTtcclxuICAgICAgICBoZWlnaHQ6IDEuNnJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgICAgY3Vyc29yOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL25vdC1hbGxvd2VkLnN2ZyksIG5vdC1hbGxvd2VkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGFicy1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBvdmVybGF5O1xyXG4gIH1cclxuXHJcblxyXG4gIC5wYWdpbmF0aW9uLXdyYXBwZXIge1xyXG4gICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICB9XHJcbiAgICAgIC5kaXNhYmxlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MjAyYTtcclxuICAgICAgICBjb2xvcjogI2UwZTBlMDtcclxuICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWluaW5nLXRyYW5zYWN0aW9uLXN3aXRjaCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5zd2l0Y2gtdGV4dCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGNvbG9yOiAjNTY1YzYyO1xyXG4gIH1cclxuXHJcbiAgLnN3aXRjaCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICB3aWR0aDogNXJlbTtcclxuICAgIGhlaWdodDogMnJlbTtcclxuXHJcbiAgICAuY2lyY2xlIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgd2lkdGg6IDEuMnJlbTtcclxuICAgICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLm9wdGlvbiB7XHJcbiAgICAgIG1hcmdpbjogMCAwLjJyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/wallet/wallet.component.ts":
/*!********************************************!*\
  !*** ./src/app/wallet/wallet.component.ts ***!
  \********************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
/* harmony import */ var _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/icons/icons.json */ "./src/assets/icons/icons.json");
var _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/icons/icons.json */ "./src/assets/icons/icons.json", 1);
/* harmony import */ var _helpers_services_pagination_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/services/pagination.service */ "./src/app/_helpers/services/pagination.service.ts");
/* harmony import */ var _helpers_services_pagination_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_helpers/services/pagination.store */ "./src/app/_helpers/services/pagination.store.ts");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store */ "./src/store.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var WalletComponent = /** @class */ (function () {
    function WalletComponent(route, router, backend, variablesService, ngZone, translate, intToMoneyPipe, pagination, paginationStore, store) {
        this.route = route;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.intToMoneyPipe = intToMoneyPipe;
        this.pagination = pagination;
        this.paginationStore = paginationStore;
        this.store = store;
        this.copyAnimation = false;
        this.activeTab = 'history';
        this.mining = false;
        this.currentPage = 1;
        this.sync_started = false;
        this.stop_paginate = false;
        this.tabs = [
            {
                title: 'WALLET.TABS.HISTORY',
                icon: 'history',
                link: '/history',
                indicator: false,
                active: true,
                animated: _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_7__.history,
                itemHovered: false,
            },
            {
                title: 'WALLET.TABS.SEND',
                icon: 'send',
                link: '/send',
                indicator: false,
                active: false,
                animated: _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_7__.send,
                itemHovered: false,
            },
            {
                title: 'WALLET.TABS.RECEIVE',
                icon: 'receive',
                link: '/receive',
                indicator: false,
                active: false,
                animated: _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_7__.receive,
                itemHovered: false,
            },
            {
                title: 'WALLET.TABS.CONTRACTS',
                icon: 'contracts',
                link: '/contracts',
                indicator: 1,
                active: false,
                animated: _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_7__.contracts,
                itemHovered: false,
            },
            /*{
              title: 'WALLET.TABS.MESSAGES',
              icon: 'messages',
              link: '/messages',
              indicator: 32,
              active: false,
              animated: icons.messages,
              itemHovered: false
            },*/
            {
                title: 'WALLET.TABS.STAKING',
                icon: 'staking',
                link: '/staking',
                indicator: false,
                active: false,
                animated: _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_7__.staking,
                itemHovered: false,
            },
        ];
    }
    WalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subRouting1 = this.route.params.subscribe(function (params) {
            // set current wallet only by user click to avoid after sync show synchronized data
            _this.walletID = +params['id'];
            _this.walletLoaded = _this.variablesService.getWallet(_this.walletID).loaded;
            _this.variablesService.setCurrentWallet(_this.walletID);
            _this.walletsSubscription = _this.store
                .select('sync')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])())
                .subscribe(function (value) {
                var data = value.filter(function (item) { return item.wallet_id === _this.walletID; })[0];
                if (data && !data.sync) {
                    var in_progress = void 0;
                    var values = _this.store.value.sync;
                    if (values && values.length) {
                        in_progress = values.filter(function (item) { return item.sync; });
                        _this.variablesService.sync_started = !!(in_progress && in_progress.length);
                        if (!in_progress) {
                            _this.variablesService.sync_started = false;
                        }
                    }
                    else {
                        _this.variablesService.sync_started = false;
                    }
                }
                var restore = false;
                if (_this.variablesService.after_sync_request.hasOwnProperty(_this.walletID)) {
                    restore = _this.variablesService.after_sync_request[_this.walletID];
                }
                if (!_this.variablesService.sync_started &&
                    restore &&
                    _this.walletID === (data && data.wallet_id)) {
                    _this.wallet = _this.variablesService.getNotLoadedWallet();
                    if (_this.wallet) {
                        _this.tick();
                    }
                    // if this is was restore wallet and it was selected on moment when sync completed
                    _this.getRecentTransfers();
                    _this.variablesService.after_sync_request[_this.walletID] = false;
                }
            });
            var after_sync_request = false;
            if (_this.variablesService.after_sync_request.hasOwnProperty(_this.walletID)) {
                after_sync_request = _this.variablesService.after_sync_request[_this.walletID];
            }
            if (after_sync_request && !_this.variablesService.sync_started) {
                // if user click on the wallet at the first time after restore.
                _this.getRecentTransfers();
            }
            if (_this.variablesService.stop_paginate.hasOwnProperty(_this.walletID)) {
                _this.stop_paginate = _this.variablesService.stop_paginate[_this.walletID];
            }
            else {
                _this.stop_paginate = false;
            }
            // this will hide pagination a bit earlier
            _this.wallet = _this.variablesService.getNotLoadedWallet();
            if (_this.wallet) {
                _this.tick();
            }
            _this.scrolledContent.nativeElement.scrollTop = 0;
            clearTimeout(_this.copyAnimationTimeout);
            _this.copyAnimation = false;
            _this.mining = _this.variablesService.currentWallet.exclude_mining_txs;
            if (_this.variablesService.wallets.length === 1) {
                _this.walletID = +params['id'];
                _this.variablesService.setCurrentWallet(_this.walletID);
            }
        });
        this.subRouting2 = this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RoutesRecognized"]) {
                _this.activeTab = val.urlAfterRedirects
                    .replace('?sidenav=true', '')
                    .split('/')
                    .pop();
                if (val.state.root.firstChild && val.state.root.firstChild.firstChild) {
                    for (var i = 0; i < _this.tabs.length; i++) {
                        _this.tabs[i].active =
                            _this.tabs[i].link ===
                                '/' + val.state.root.firstChild.firstChild.url[0].path;
                    }
                }
            }
        });
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.send) {
                _this.tabs.forEach(function (tab, index) {
                    if (tab.link === '/send') {
                        _this.changeTab(index);
                    }
                });
            }
        });
        if (this.variablesService.currentWallet.alias.hasOwnProperty('name')) {
            this.variablesService.currentWallet.wakeAlias = false;
        }
        this.aliasSubscription = this.variablesService.getAliasChangedEvent.subscribe(function () {
            if (_this.variablesService.currentWallet.alias.hasOwnProperty('name')) {
                _this.variablesService.currentWallet.wakeAlias = false;
            }
        });
        this.updateWalletStatus();
    };
    WalletComponent.prototype.resetPaginationValues = function () {
        var _this = this;
        this.ngZone.run(function () {
            var total_history_item = _this.variablesService.currentWallet
                .total_history_item;
            var count = _this.variablesService.count;
            _this.variablesService.currentWallet.totalPages = Math.ceil(total_history_item / count);
            _this.variablesService.currentWallet.exclude_mining_txs = _this.mining;
            _this.variablesService.currentWallet.currentPage = 1;
            if (!_this.variablesService.currentWallet.totalPages) {
                _this.variablesService.currentWallet.totalPages = 1;
            }
            _this.variablesService.currentWallet.totalPages >
                _this.variablesService.maxPages
                ? (_this.variablesService.currentWallet.pages = new Array(5)
                    .fill(1)
                    .map(function (value, index) { return value + index; }))
                : (_this.variablesService.currentWallet.pages = new Array(_this.variablesService.currentWallet.totalPages)
                    .fill(1)
                    .map(function (value, index) { return value + index; }));
        });
    };
    WalletComponent.prototype.changeTab = function (index) {
        var _this = this;
        if (((this.tabs[index].link === '/send' ||
            this.tabs[index].link === '/contracts' ||
            this.tabs[index].link === '/staking') &&
            (this.variablesService.daemon_state !== 2 ||
                !this.variablesService.currentWallet.loaded)) ||
            ((this.tabs[index].link === '/send' ||
                this.tabs[index].link === '/contracts') &&
                this.variablesService.currentWallet.is_watch_only &&
                this.variablesService.currentWallet.is_auditable)) {
            return;
        }
        this.tabs.forEach(function (tab) {
            tab.active = false;
        });
        this.tabs[index].active = true;
        this.ngZone.run(function () {
            _this.scrolledContent.nativeElement.scrollTop = 0;
            _this.router.navigate(['wallet/' + _this.walletID + _this.tabs[index].link]);
        });
    };
    WalletComponent.prototype.itemHovered = function (index, state) {
        this.tabs[index].itemHovered = state;
    };
    WalletComponent.prototype.copyAddress = function () {
        var _this = this;
        this.backend.setClipboard(this.variablesService.currentWallet.address);
        this.copyAnimation = true;
        this.copyAnimationTimeout = window.setTimeout(function () {
            _this.copyAnimation = false;
        }, 2000);
    };
    WalletComponent.prototype.getTooltip = function () {
        var _this = this;
        this.balanceTooltip = document.createElement('div');
        var available = document.createElement('span');
        available.setAttribute('class', 'available');
        available.innerHTML = this.translate.instant('WALLET.AVAILABLE_BALANCE', {
            available: this.intToMoneyPipe.transform(this.variablesService.currentWallet.unlocked_balance),
            currency: this.variablesService.defaultCurrency,
        });
        this.balanceTooltip.appendChild(available);
        var locked = document.createElement('span');
        locked.setAttribute('class', 'locked');
        locked.innerHTML = this.translate.instant('WALLET.LOCKED_BALANCE', {
            locked: this.intToMoneyPipe.transform(this.variablesService.currentWallet.balance.minus(this.variablesService.currentWallet.unlocked_balance)),
            currency: this.variablesService.defaultCurrency,
        });
        this.balanceTooltip.appendChild(locked);
        var link = document.createElement('span');
        link.setAttribute('class', 'link');
        link.innerHTML = this.translate.instant('WALLET.LOCKED_BALANCE_LINK');
        link.addEventListener('click', function () {
            _this.openInBrowser(_shared_constants__WEBPACK_IMPORTED_MODULE_6__["LOCKED_BALANCE_HELP_PAGE"]);
        });
        this.balanceTooltip.appendChild(link);
        return this.balanceTooltip;
    };
    WalletComponent.prototype.onHideTooltip = function () {
        this.balanceTooltip = null;
    };
    WalletComponent.prototype.openInBrowser = function (link) {
        this.backend.openUrlInBrowser(link);
    };
    WalletComponent.prototype.setPage = function (pageNumber) {
        // this is will allow pagination for wallets that was open from existed wallets'
        if (this.variablesService.currentWallet.open_from_exist &&
            !this.variablesService.currentWallet.updated) {
            this.variablesService.get_recent_transfers = false;
            this.variablesService.currentWallet.updated = true;
        }
        if (pageNumber === this.variablesService.currentWallet.currentPage) {
            return;
        }
        // if not running get_recent_transfers callback
        if (!this.variablesService.get_recent_transfers) {
            this.variablesService.currentWallet.currentPage = pageNumber;
        }
        if (!this.variablesService.get_recent_transfers) {
            this.getRecentTransfers();
        }
    };
    WalletComponent.prototype.toggleMiningTransactions = function () {
        var _this = this;
        if (!this.variablesService.sync_started && !this.wallet) {
            var value = this.paginationStore.value;
            if (!value) {
                this.paginationStore.setPage(1, 0, this.walletID); // add back page for the first page
            }
            else {
                var pages = value.filter(function (item) { return item.walletID === _this.walletID; });
                if (!pages.length) {
                    this.paginationStore.setPage(1, 0, this.walletID); // add back page for the first page
                }
            }
            this.mining = !this.mining;
            this.resetPaginationValues();
            this.getRecentTransfers();
        }
    };
    WalletComponent.prototype.tick = function () {
        var _this = this;
        var walletInterval = setInterval(function () {
            _this.wallet = _this.variablesService.getNotLoadedWallet();
            if (!_this.wallet) {
                clearInterval(walletInterval);
            }
        }, 1000);
    };
    WalletComponent.prototype.getRecentTransfers = function () {
        var _this = this;
        var offset = this.pagination.getOffset(this.walletID);
        var value = this.paginationStore.value;
        var pages = value
            ? value.filter(function (item) { return item.walletID === _this.walletID; })
            : [];
        this.backend.getRecentTransfers(this.walletID, offset, this.variablesService.count, this.variablesService.currentWallet.exclude_mining_txs, function (status, data) {
            var isForward = _this.paginationStore.isForward(pages, _this.variablesService.currentWallet.currentPage);
            if (_this.mining && isForward && pages && pages.length === 1) {
                _this.variablesService.currentWallet.currentPage = 1; // set init page after navigation back
            }
            var history = data && data.history;
            _this.variablesService.stop_paginate[_this.walletID] =
                (history && history.length < _this.variablesService.count) || !history;
            _this.stop_paginate = _this.variablesService.stop_paginate[_this.walletID];
            if (!_this.variablesService.stop_paginate[_this.walletID]) {
                var page = _this.variablesService.currentWallet.currentPage + 1;
                if (isForward &&
                    _this.mining &&
                    history &&
                    history.length === _this.variablesService.count) {
                    _this.paginationStore.setPage(page, data.last_item_index, _this.walletID); // add back page for current page
                }
            }
            _this.pagination.calcPages(data);
            _this.pagination.prepareHistory(data, status);
            _this.ngZone.run(function () {
                _this.variablesService.get_recent_transfers = false;
                if (_this.variablesService.after_sync_request.hasOwnProperty(_this.walletID)) {
                    // this is will complete get_recent_transfers request
                    // this will switch of
                    _this.variablesService.after_sync_request[_this.walletID] = false;
                }
            });
        });
    };
    WalletComponent.prototype.ngOnDestroy = function () {
        this.subRouting1.unsubscribe();
        this.subRouting2.unsubscribe();
        this.queryRouting.unsubscribe();
        this.aliasSubscription.unsubscribe();
        if (this.walletsSubscription) {
            this.walletsSubscription.unsubscribe();
        }
        clearTimeout(this.copyAnimationTimeout);
    };
    WalletComponent.prototype.updateWalletStatus = function () {
        var _this = this;
        this.backend.eventSubscribe('wallet_sync_progress', function (data) {
            var wallet_id = data.wallet_id;
            if (wallet_id === _this.walletID) {
                _this.ngZone.run(function () {
                    _this.walletLoaded = false;
                });
            }
        });
        this.backend.eventSubscribe('update_wallet_status', function (data) {
            var wallet_state = data.wallet_state;
            var wallet_id = data.wallet_id;
            _this.ngZone.run(function () {
                if (wallet_state === 2 && wallet_id === _this.walletID) {
                    _this.walletLoaded =
                        _this.variablesService.getWallet(_this.walletID) !== null &&
                            _this.variablesService.getWallet(_this.walletID).loaded
                            ? true
                            : false;
                }
                else {
                    _this.walletLoaded = false;
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrolledContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WalletComponent.prototype, "scrolledContent", void 0);
    WalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! ./wallet.component.html */ "./src/app/wallet/wallet.component.html"),
            styles: [__webpack_require__(/*! ./wallet.component.scss */ "./src/app/wallet/wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_5__["IntToMoneyPipe"],
            _helpers_services_pagination_service__WEBPACK_IMPORTED_MODULE_8__["PaginationService"],
            _helpers_services_pagination_store__WEBPACK_IMPORTED_MODULE_9__["PaginationStore"],
            store__WEBPACK_IMPORTED_MODULE_10__["Store"]])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ }),

/***/ "./src/assets/icons/icons.json":
/*!*************************************!*\
  !*** ./src/assets/icons/icons.json ***!
  \*************************************/
/*! exports provided: logo, contacts, settings, exit, history, send, receive, contracts, messages, staking, default */
/***/ (function(module) {


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var state = {
    wallets: undefined,
    sync: undefined,
};
var Store = /** @class */ (function () {
    function Store() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](state);
        this.store = this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
    }
    Object.defineProperty(Store.prototype, "value", {
        get: function () {
            return this.subject.value;
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.select = function (name) {
        return this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])(name));
    };
    // tslint:disable-next-line:no-shadowed-variable
    Store.prototype.set = function (name, state) {
        var _a;
        this.subject.next(__assign({}, this.value, (_a = {}, _a[name] = state, _a)));
    };
    return Store;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project\WORK_NEW\zano\src\gui\qt-daemon\html_source\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map