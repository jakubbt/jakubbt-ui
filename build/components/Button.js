"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ButtonModule = _interopRequireDefault(require("./button/Button.module.scss"));

var _reactStyleClasses = _interopRequireDefault(require("react-style-classes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Button = function Button(_ref) {
  var buttonText = _ref.buttonText,
      variant = _ref.variant,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _reactStyleClasses["default"])(_ButtonModule["default"].button, _ButtonModule["default"][variant], className)
  }, buttonText);
};

Button.propTypes = {
  buttonText: _propTypes["default"].string.isRequired,
  className: _propTypes["default"].string,
  variant: _propTypes["default"].oneOf(['primary', 'secondary', 'danger'])
};
Button.defaultProps = {
  className: null,
  variant: 'primary'
};
var _default = Button;
exports["default"] = _default;