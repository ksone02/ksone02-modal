var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useEffect, useState } from "react";
import styled from "styled-components";
export var VisibleDispatch = createContext(null);
var BottomSheetTemplate = function (props) {
    var _a = useState(props.modalState), visible = _a[0], setVisible = _a[1];
    var _b = useState(false), animate = _b[0], setAnimate = _b[1];
    useEffect(function () {
        setAnimate(true);
        if (!visible) {
            setAnimate(false);
            setTimeout(function () {
                props.onClose();
            }, 500);
        }
    }, [visible, props]);
    var onCloseModal = function () {
        setVisible(false);
    };
    return (_jsx(VisibleDispatch.Provider, __assign({ value: onCloseModal }, { children: _jsxs(BottomSheetWrapper, { children: [_jsx(BottomSheetDimmed, { onClick: onCloseModal, modalState: animate }), _jsx(BottomSheetInner, __assign({ modalState: animate }, { children: props.children }))] }) })));
};
var BottomSheetWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n"], ["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n"])));
var BottomSheetDimmed = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  transition: all 0.5s ease;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  ", "\n"], ["\n  transition: all 0.5s ease;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  ", "\n"])), function (_a) {
    var modalState = _a.modalState;
    return modalState ? "backdrop-filter: blur(2px); opacity: 1;" : "opacity: 0;";
});
var BottomSheetInner = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  transition: all 0.5s ease;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  background-color: #fefefe;\n\n  ", "\n"], ["\n  transition: all 0.5s ease;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  background-color: #fefefe;\n\n  ", "\n"])), function (_a) {
    var modalState = _a.modalState;
    return modalState
        ? "transform: translateY(0); box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.25);"
        : "transform: translateY(100%);";
});
export default BottomSheetTemplate;
var templateObject_1, templateObject_2, templateObject_3;
