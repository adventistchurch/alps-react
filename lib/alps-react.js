'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var LazyLoad = _interopDefault(require('react-lazyload'));
var es6Shim = require('es6-shim');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var sides = ['top', 'bottom', 'left', 'right'];
var vishiddenClass = 'is-vishidden';

function getMod(key) {
  return key ? "--".concat(key) : '';
}

function getBaseClass(baseClass) {
  var mods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return "".concat(baseClass).concat(mods.map(function (mod) {
    return getMod(mod);
  }).join(''));
}

var borderSides = [].concat(_toConsumableArray(sides), ['none']);
var borderColors = ['red', 'light'];
function getBorderClass(_ref) {
  var color = _ref.color,
      side = _ref.side;
  return getBaseClass('u-border', [color, side]);
}

var primaryColors = ['bluejay', 'campfire', 'cave', 'denim', 'earth', 'emperor', 'forest', 'grapevine', 'lily', 'ming', 'night', 'scarlett', 'treefrog', 'velvet', 'winter'];
var secondaryColors = ['', 'dark'];
var grayscaleColors = ['black', 'gray--darker', 'gray--dark', 'gray', 'gray--light', 'white'];
var stateColors = ['valid', 'error', 'warning', 'information']; // Text Colors:

var textColorClass = 'u-color';
var textColors = ['base'].concat(grayscaleColors, ['black-transparent', 'white-transparent'], stateColors); // SVG Fill Colors

var svgFillClass = 'u-path-fill';
var svgFillColors = grayscaleColors; // Background Colors (grayscale)

var backgroundColorClass = 'u-background-color';
var backgroundColors = ['none'].concat(grayscaleColors); // Theme Colors:
// - Foreground

var themeColorClass = 'u-theme--color';
var themeColors = ['base', 'dark', 'darker', 'light', 'lighter']; // - Background

var themeBackgroundClass = 'u-theme--background-color';
var themeBackgroundColors = [].concat(themeColors);
var themeBackgroundTransClass = "".concat(themeBackgroundClass, "-trans");
var themeBackgroundTransColors = [].concat(themeColors); // - Border

var themeBorderColorClass = 'u-theme--border-color';
var themeBorderColors = [].concat(themeColors); // - "Can be"

var canBeClass = 'can-be';
var canBeColors = ['dark-dark', 'dark-light', 'white', 'light', 'lighter']; // - Dark Theme

var darkThemeClass = 'u-theme--dark';

var fontClass = 'u-font';
var fontTypes = ['primary', 'secondary', 'monospaced'];
var fontSizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
var textClass = 'u-text';
var textStrongClass = "".concat(textClass, "--strong");
var textTransformClass = 'u-text-transform';
var textTransforms = ['upper', 'lower'];

var sizes = ['quarter', 'half', 'double', 'triple', 'quad', 'zero'];
var sides$1 = [].concat(_toConsumableArray(sides), ['sides']);
var afterSizes = ['medium', 'large'];
var untilSizes = ['small', 'medium', 'large', 'xxlarge'];
var clearFixClass = 'u-clear-fix';
function getPaddingClass(_ref) {
  var size = _ref.size,
      side = _ref.side;
  return getBaseClass('u-padding', [size, side]);
}
function getSpaceClass(_ref2) {
  var size = _ref2.size,
      side = _ref2.side;
  return getBaseClass('u-space', [size, side]);
}
function getSpacingClass(_ref3) {
  var after = _ref3.after,
      size = _ref3.size,
      side = _ref3.side,
      until = _ref3.until;
  return getBaseClass('u-spacing', [size, side, until ? "until-".concat(until) : '', after ? "after-".concat(after) : '']);
}

/**
 * The ubiquitous Element component
 *
 * @param {Object} props All Element's props
 */

function Element(_ref) {
  var as = _ref.as,
      children = _ref.children,
      tag = _ref.tag,
      props = _objectWithoutProperties(_ref, ["as", "children", "tag"]);

  // Extract style-related props to build `className`
  var backgroundColor = // Other props will be provided here
  props.backgroundColor,
      border = props.border,
      borderColor = props.borderColor,
      borderSide = props.borderSide,
      canBe = props.canBe,
      className = props.className,
      clearFix = props.clearFix,
      color = props.color,
      fontSize = props.fontSize,
      fontType = props.fontType,
      padding = props.padding,
      paddingSide = props.paddingSide,
      paddingSize = props.paddingSize,
      space = props.space,
      spaceSide = props.spaceSide,
      spaceSize = props.spaceSize,
      spacing = props.spacing,
      spacingAfter = props.spacingAfter,
      spacingSide = props.spacingSide,
      spacingSize = props.spacingSize,
      spacingUntil = props.spacingUntil,
      strong = props.strong,
      themeBackground = props.themeBackground,
      themeBackgroundTrans = props.themeBackgroundTrans,
      themeBorder = props.themeBorder,
      themeColor = props.themeColor,
      transform = props.transform,
      vishidden = props.vishidden,
      otherProps = _objectWithoutProperties(props, ["backgroundColor", "border", "borderColor", "borderSide", "canBe", "className", "clearFix", "color", "fontSize", "fontType", "padding", "paddingSide", "paddingSize", "space", "spaceSide", "spaceSize", "spacing", "spacingAfter", "spacingSide", "spacingSize", "spacingUntil", "strong", "themeBackground", "themeBackgroundTrans", "themeBorder", "themeColor", "transform", "vishidden"]); // Set classes:


  var classes = [];
  if (className) classes.push(className); // - Color classes

  if (backgroundColor) classes.push("".concat(backgroundColorClass, "--").concat(backgroundColor));
  if (canBe) classes.push("".concat(canBeClass, "--").concat(canBe));
  if (color) classes.push("".concat(textColorClass, "--").concat(color)); // - Font classes

  if (fontType) classes.push("".concat(fontClass, "--").concat(fontType).concat(fontSize ? "--".concat(fontSize) : ''));
  if (strong) classes.push("".concat(textStrongClass));
  if (transform) classes.push("".concat(textTransformClass, "--").concat(transform)); // - Theme classes

  if (themeBorder) classes.push("".concat(themeBorderColorClass, "--").concat(themeBorder));
  if (themeBackground) classes.push("".concat(themeBackgroundClass, "--").concat(themeBackground));
  if (themeBackgroundTrans) classes.push("".concat(themeBackgroundTransClass, "--").concat(themeBackgroundTrans));
  if (themeColor) classes.push("".concat(themeColorClass, "--").concat(themeColor)); // - Border classes

  if (border || borderColor || borderSide) classes.push(getBorderClass({
    color: borderColor,
    side: borderSide
  })); // - Spacing classes

  if (clearFix) classes.push(clearFixClass);
  if (padding || paddingSide || paddingSize) classes.push(getPaddingClass({
    side: paddingSide,
    size: paddingSize
  }));
  if (space || spaceSide || spaceSize) classes.push(getSpaceClass({
    side: spaceSide,
    size: spaceSize
  }));
  if (spacing || spacingAfter || spacingSide || spacingSize || spacingUntil) classes.push(getSpacingClass({
    after: spacingAfter,
    side: spacingSide,
    size: spacingSize,
    until: spacingUntil
  })); // - Others
  // Remove from the flow but leave available to screen readers

  if (vishidden) classes.push(vishiddenClass); // Build all props

  var allProps = _objectSpread({
    className: classes.length > 0 ? classes.join(' ') : null
  }, otherProps);

  return React__default.createElement(tag ? tag : as, allProps, children);
}
Element.propTypes = {
  as: PropTypes.string,
  border: PropTypes.bool,
  borderColor: PropTypes.oneOf(borderColors),
  borderSide: PropTypes.oneOf(borderSides),
  canBe: PropTypes.oneOf(canBeColors),
  children: PropTypes.node,
  className: PropTypes.string,
  clearFix: PropTypes.bool,
  color: PropTypes.oneOf(textColors),
  backgroundColor: PropTypes.oneOf(backgroundColors),
  fontSize: PropTypes.oneOf(fontSizes),
  fontType: PropTypes.oneOf(fontTypes),
  padding: PropTypes.bool,
  paddingSide: PropTypes.oneOf(sides$1),
  paddingSize: PropTypes.oneOf(sizes),
  space: PropTypes.bool,
  spaceSide: PropTypes.oneOf(sides$1),
  spaceSize: PropTypes.oneOf(sizes),
  spacing: PropTypes.bool,
  spacingAfter: PropTypes.oneOf(afterSizes),
  spacingSide: PropTypes.oneOf(sides$1),
  spacingSize: PropTypes.oneOf(sizes),
  spacingUntil: PropTypes.oneOf(untilSizes),
  tag: PropTypes.string,
  strong: PropTypes.bool,
  themeBackground: PropTypes.oneOf(themeBackgroundColors),
  themeBackgroundTrans: PropTypes.oneOf(themeBackgroundTransColors),
  themeBorder: PropTypes.oneOf(themeBorderColors),
  themeColor: PropTypes.oneOf(themeColors),
  transform: PropTypes.oneOf(textTransforms),
  vishidden: PropTypes.bool
};
Element.defaultProps = {
  as: 'div'
};
function HeadingThree(props) {
  return React__default.createElement(Element, _extends({
    as: "h3"
  }, props));
}
function Link(props) {
  return React__default.createElement(Element, _extends({
    as: "a"
  }, props));
}

var Svg = function Svg(_ref) {
  var children = _ref.children,
      title = _ref.title,
      viewBox = _ref.viewBox,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "title", "viewBox", "className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: viewBox,
    className: className
  }, props), title && React__default.createElement("title", null, title), children);
};

Svg.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  viewBox: PropTypes.string,
  className: PropTypes.string
};

var ArrowBracketLeftIcon = function ArrowBracketLeftIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "o-arrow__bracket--left",
    viewBox: "0 0 10 10",
    fill: fill
  }, React__default.createElement("path", {
    d: "M3.25,6.41l3.5,3.5L8.16,8.5,4.66,5l3.5-3.5L6.75.09l-3.5,3.5L1.84,5Z"
  }));
};

ArrowBracketLeftIcon.propTypes = {
  fill: PropTypes.string
};
ArrowBracketLeftIcon.defaultProps = {
  fill: '#9b9b9b'
};

var ArrowBracketRightIcon = function ArrowBracketRightIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "o-arrow__bracket--right",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#9b9b9b"
  }, React__default.createElement("path", {
    d: "M6.75,3.59,3.25.09,1.84,1.5,5.34,5,1.84,8.5,3.25,9.91l3.5-3.5L8.16,5Z"
  }));
};

ArrowBracketRightIcon.propTypes = {
  fill: PropTypes.string
};

var ArrowLongLeftIcon = function ArrowLongLeftIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "o-arrow__long--left",
    viewBox: "0 0 19.42 9.82",
    className: fill,
    fill: "#9b9b9b"
  }, React__default.createElement("path", {
    d: "M1.42,6.32l3.5,3.5L6.33,8.41l-2.5-2.5H19.42v-2H3.83l2.5-2.5L4.92,0,1.42,3.5,0,4.91Z"
  }));
};

ArrowLongLeftIcon.propTypes = {
  fill: PropTypes.string
};

var ArrowLongRightIcon = function ArrowLongRightIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "o-arrow__long--right",
    viewBox: "0 0 20 20",
    className: fill,
    fill: "#9b9b9b"
  }, React__default.createElement("path", {
    d: "M18.29,8.59l-3.5-3.5L13.38,6.5,15.88,9H.29v2H15.88l-2.5,2.5,1.41,1.41,3.5-3.5L19.71,10Z"
  }));
};

ArrowLongRightIcon.propTypes = {
  fill: PropTypes.string
};

var ArrowShortLeftIcon = function ArrowShortLeftIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "o-arrow__short--left",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#9b9b9b"
  }, React__default.createElement("path", {
    d: "M5,9.91,6.38,8.5,3.88,6H10V4H3.88l2.5-2.5L5,.09.05,5Z"
  }));
};

ArrowShortLeftIcon.propTypes = {
  fill: PropTypes.string
};

var ArrowShortRightIcon = function ArrowShortRightIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "o-arrow__short--right",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#9b9b9b"
  }, React__default.createElement("path", {
    d: "M5,.09,3.62,1.5,6.12,4H.05V6H6.12L3.62,8.5,5,9.91,10,5Z"
  }));
};

ArrowShortRightIcon.propTypes = {
  fill: PropTypes.string
};

var CloseIcon = function CloseIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "o-icon__close",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#9b9b9b"
  }, React__default.createElement("path", {
    d: "M9.91,1.5,8.5.09,5,3.59,1.5.09.09,1.5,3.59,5,.09,8.5,1.5,9.91,5,6.41l3.5,3.5L9.91,8.5,6.41,5Z"
  }));
};

CloseIcon.propTypes = {
  fill: PropTypes.string
};

var ContactIcon = function ContactIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "o-icon__contact",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#9b9b9b"
  }, React__default.createElement("path", {
    d: "M0,0V8H6l4,2V0ZM8,6.76,6.47,6H2V2H8Z"
  }));
};

ContactIcon.propTypes = {
  fill: PropTypes.string
};

var DotsIcon = function DotsIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "o-icon__dots",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#9b9b9b"
  }, React__default.createElement("path", {
    d: "M0,0H2V2H0ZM0,10H2V8H0ZM0,6H2V4H0Z"
  }));
};

DotsIcon.propTypes = {
  fill: PropTypes.string
};

var FindIcon = function FindIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "o-icon__find",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#777"
  }, React__default.createElement("path", {
    d: "M0,4,2,8l4,2L10,0ZM5,7.24,3.49,6.51,2.76,5.05,6.41,3.59Z"
  }));
};

FindIcon.propTypes = {
  fill: PropTypes.string
};

var HeartIcon = function HeartIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "o-icon__heart",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#777"
  }, React__default.createElement("path", {
    d: "M9,1.27A3.4,3.4,0,0,0,5,.73a3.4,3.4,0,0,0-4,.54A3.34,3.34,0,0,0,1,6l4,4L9,6A3.34,3.34,0,0,0,9,1.27ZM7.6,4.57,5,7.17,2.4,4.57a1.34,1.34,0,0,1,0-1.89,1.36,1.36,0,0,1,1.89,0L5,3.39l.71-.71a1.37,1.37,0,0,1,1.89,0A1.34,1.34,0,0,1,7.6,4.57Z"
  }));
};

HeartIcon.propTypes = {
  fill: PropTypes.string
};

var LanguageIcon = function LanguageIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "o-icon__language",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#777"
  }, React__default.createElement("path", {
    d: "M10,4V2H6V0H4V2H0V4H5.9A9.16,9.16,0,0,1,4.51,5.56a8.84,8.84,0,0,1-1-1.08L1.9,5.74a12,12,0,0,0,1,1A26.55,26.55,0,0,1,.55,8.11l.9,1.78a22.2,22.2,0,0,0,3-1.8,23.58,23.58,0,0,0,3.06,1.8l.9-1.78A22.43,22.43,0,0,1,6.11,6.78,10.49,10.49,0,0,0,8.22,4Z"
  }));
};

LanguageIcon.propTypes = {
  fill: PropTypes.string
};

var LegalIcon = function LegalIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "o-icon__legal",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#231f20"
  }, React__default.createElement("path", {
    d: "M10,2.31H0V0H10ZM6.36,3.85H0v2.3H6.36ZM8.22,7.7H0V10H8.22Z"
  }));
};

LegalIcon.propTypes = {
  fill: PropTypes.string
};

var LogoDarkIcon = function LogoDarkIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "o-icon__logo-dark",
    viewBox: "0 0 253.71 227.63",
    className: fill,
    fill: "#000000"
  }, React__default.createElement("path", {
    d: "M67.68,120.38c-.1-9.91,2.8-18.41,20.8-36.41l39-39c10.4-10.4,19.1-19.29,19.1-29V.67c0-.89-1.1-.89-1.2,0-2.6,12.4-7.5,17.3-17.8,27.61L82.28,73.47c-17.1,17-19.5,35.1-15.8,46.91C66.78,121.38,67.68,121.47,67.68,120.38Zm64.2,38.9c0,.89,1,.89,1.2,0,2.6-12.5,7.6-17.4,17.8-27.61L166,116.78c19.8-19.9,10.7-39-.9-44.31-1-.5-1.4.31-.6,1,9.3,8,6.5,21.5-5.2,33.2L151,115c-10.4,10.31-19.1,19.2-19.1,29Zm81.8,26.6L168,178.17l-17.1,17.11c-10.4,10.39-19,19.3-19,29V227c0,.7.9.9,1.2.11,3.2-8.7,13.9-18.11,33.5-14.8,0,0,85.4,14.8,86.1,14.8a.9.9,0,0,0,1-.61.79.79,0,0,0-.2-.8c-.3-.39-39.8-39.8-39.8-39.8Zm-107.5,1h15a.66.66,0,0,0,.6-.6c0-7.9-6-13.31-30-9.2L40,186S.58,225.37.28,225.78a.79.79,0,0,0-.1,1.1.81.81,0,0,0,.8.2c.7-.11,86.1-14.8,86.1-14.8,19.6-3.31,30.3,6,33.5,14.8.3.8,1.2.7,1.2-.11v-29.5a.66.66,0,0,0-.6-.6l-15,.1a.64.64,0,0,1-.6-.6v-8.9a.65.65,0,0,1,.6-.6Zm26.8,25.9a36.3,36.3,0,0,1,6.9-15.81h-7.5a.65.65,0,0,0-.6.61v15.2c0,.89,1.1.89,1.2,0Zm13.6-158.6c0-.91-1.1-.91-1.2,0-2.6,12.39-7.5,17.29-17.8,27.6l-39.8,39.69c-19.8,19.81-10.7,39,.9,44.31,1,.5,1.4-.4.6-1-9.3-8-6.5-21.61,5.2-33.2l33-33c10.4-10.4,19.1-19.3,19.1-29Zm-19.1,17.49c10.4-10.3,19-19.2,19.1-29V27.27c0-.9-1.1-.9-1.2,0-2.6,12.4-7.5,17.4-17.8,27.7L86.68,95.78c-19.8,19.8-23.3,39-13.2,51.4.7.8,1.4.3,1-.7-6.7-15.1,9.3-31.1,16.9-38.7Zm37.6,82.5-14.3,14.2c-6.5,6.5-12.3,12.4-15.8,18.4h14.1l1.7-1.7,20.5-20.5c17.1-16.9,19.5-35,15.8-46.8-.3-1-1.2-1.1-1.2,0,.1,9.9-2.8,18.4-20.8,36.4Zm-2.8-24-11.4,11.5c-10.4,10.4-19.1,19.4-19.1,29.11v15.3c0,.89,1.1.89,1.2,0,2.6-12.4,7.5-17.4,17.8-27.7L167,142.17c19.8-19.8,23.3-39,13.2-51.4-.7-.8-1.4-.3-1,.7C185.88,106.57,169.88,122.57,162.28,130.17Zm83.5,68.2h1.1l1.7,3h1.5l-2-3.3a2,2,0,0,0,1.3-2c0-1.5-.8-2.2-2.7-2.2h-2.2v7.5h1.3v-3Zm0-3.5h.8c1,0,1.4.3,1.4,1.2,0,.7-.5,1.2-1.4,1.2h-.9v-2.4Zm1,9a6.3,6.3,0,1,0-6.3-6.3,6.08,6.08,0,0,0,5.87,6.3Zm0-11.7a5.4,5.4,0,1,1,0,10.8,5.31,5.31,0,0,1-5.4-5.23h0v-.16a5.24,5.24,0,0,1,5.11-5.39h.29Z"
  }));
};

LogoDarkIcon.propTypes = {
  fill: PropTypes.string
};

var LogoRoundIcon = function LogoRoundIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "o-icon__logo-round",
    viewBox: "0 0 169.88 169.88",
    className: fill,
    fill: "#fff"
  }, React__default.createElement("path", {
    d: "M147.5,117c.67,0,1.07-.37,1.07-.91s-.34-.86-1.08-.86h-.63V117Zm-1.62-2.6h1.65c1.4,0,2,.56,2,1.66a1.49,1.49,0,0,1-1,1.46L150,120h-1.1l-1.28-2.23h-.8V120h-1Zm5.74,2.8a3.93,3.93,0,0,0-4-4,3.87,3.87,0,0,0-4,4,4,4,0,1,0,8,0Zm-8.69,0a4.55,4.55,0,0,1,4.71-4.71,4.62,4.62,0,0,1,4.71,4.71,4.71,4.71,0,1,1-9.42,0Zm-55.08-.31c0-5.71,5.08-10.92,11.13-17l6.71-6.71c4.45-4.45,13.79-13.8,9.89-22.62-.25-.58.17-.87.56-.39,5.9,7.21,3.89,18.43-7.7,30L99,109.64c-6,6-8.89,8.89-10.38,16.15-.11.55-.73.54-.73,0Zm-21.8-23c-6.81,6.82-8.46,14.72-3,19.42.45.39.22.87-.37.6-6.77-3.08-12.1-14.27-.5-25.87l23.2-23.18c6-6,8.88-8.84,10.38-16.1.11-.54.73-.54.73,0v8.9c0,5.7-5.08,10.92-11.13,17Zm-12.27,9.19c-5.9-7.21-3.89-18.43,7.7-30L85.36,49.18c6-6,8.89-8.9,10.38-16.16.12-.54.74-.54.74,0v9c0,5.7-5.09,10.92-11.14,17L64.24,80.06c-4.45,4.44-13.8,13.8-9.9,22.61C54.6,103.25,54.17,103.54,53.78,103.06Zm-4-15.71C47.61,80.47,49,69.92,59,60L85.33,33.57c6-6,8.9-8.85,10.39-16.11.11-.54.73-.54.73,0v8.9c0,5.7-5.08,10.92-11.13,17L62.58,66.06C52,76.61,50.37,81.58,50.42,87.36c0,.61-.5.57-.68,0Zm54.13-8c6.82-6.82,8.46-14.72,3-19.41-.45-.4-.21-.88.38-.61,6.76,3.08,12.09,14.28.5,25.87L99,94c-6,6-8.88,8.84-10.38,16.1-.11.55-.73.54-.73,0v-8.89c0-5.71,5.08-10.92,11.13-17Zm16.32,6.53c2.12,6.88.73,17.42-9.23,27.39l-12,12-1,1H89.77c2-3.47,5.43-6.93,9.23-10.73l8.34-8.34c10.55-10.55,12.21-15.51,12.16-21.29C119.5,85.25,120,85.28,120.19,85.87ZM88.6,141.35c-.11.55-.73.55-.73,0v-8.88a.36.36,0,0,1,.36-.36h4.4a21.27,21.27,0,0,0-4,9.25Zm19.54-.24c-11.45-1.93-17.7,3.52-19.57,8.62-.16.45-.7.38-.7,0V148.1c0-5.71,5.08-10.92,11.13-17l10-10,26.64,4.58,14.12,14.12a84.94,84.94,0,1,0-129.64,0L34.24,125.7l30.24-5.2c14-2.43,17.5.72,17.52,5.35a.37.37,0,0,1-.36.37H72.91a.37.37,0,0,0-.37.36v5.16a.37.37,0,0,0,.37.36h8.74a.37.37,0,0,1,.36.37v17.21c0,.43-.54.5-.7,0-1.87-5.1-8.11-10.55-19.57-8.62l-34.68,6a84.89,84.89,0,0,0,115.76,0l-34.68-6Z"
  }));
};

LogoRoundIcon.propTypes = {
  fill: PropTypes.string
};

var LogoIcon = function LogoIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "Seventh Day Adventist Logo",
    viewBox: "0 0 253.71 227.63",
    className: fill,
    fill: "#000"
  }, React__default.createElement("path", {
    d: "M67.68,120.38c-.1-9.91,2.8-18.41,20.8-36.41l39-39c10.4-10.4,19.1-19.29,19.1-29V.67c0-.89-1.1-.89-1.2,0-2.6,12.4-7.5,17.3-17.8,27.61L82.28,73.47c-17.1,17-19.5,35.1-15.8,46.91C66.78,121.38,67.68,121.47,67.68,120.38Zm64.2,38.9c0,.89,1,.89,1.2,0,2.6-12.5,7.6-17.4,17.8-27.61L166,116.78c19.8-19.9,10.7-39-.9-44.31-1-.5-1.4.31-.6,1,9.3,8,6.5,21.5-5.2,33.2L151,115c-10.4,10.31-19.1,19.2-19.1,29Zm81.8,26.6L168,178.17l-17.1,17.11c-10.4,10.39-19,19.3-19,29V227c0,.7.9.9,1.2.11,3.2-8.7,13.9-18.11,33.5-14.8,0,0,85.4,14.8,86.1,14.8a.9.9,0,0,0,1-.61.79.79,0,0,0-.2-.8c-.3-.39-39.8-39.8-39.8-39.8Zm-107.5,1h15a.66.66,0,0,0,.6-.6c0-7.9-6-13.31-30-9.2L40,186S.58,225.37.28,225.78a.79.79,0,0,0-.1,1.1.81.81,0,0,0,.8.2c.7-.11,86.1-14.8,86.1-14.8,19.6-3.31,30.3,6,33.5,14.8.3.8,1.2.7,1.2-.11v-29.5a.66.66,0,0,0-.6-.6l-15,.1a.64.64,0,0,1-.6-.6v-8.9a.65.65,0,0,1,.6-.6Zm26.8,25.9a36.3,36.3,0,0,1,6.9-15.81h-7.5a.65.65,0,0,0-.6.61v15.2c0,.89,1.1.89,1.2,0Zm13.6-158.6c0-.91-1.1-.91-1.2,0-2.6,12.39-7.5,17.29-17.8,27.6l-39.8,39.69c-19.8,19.81-10.7,39,.9,44.31,1,.5,1.4-.4.6-1-9.3-8-6.5-21.61,5.2-33.2l33-33c10.4-10.4,19.1-19.3,19.1-29Zm-19.1,17.49c10.4-10.3,19-19.2,19.1-29V27.27c0-.9-1.1-.9-1.2,0-2.6,12.4-7.5,17.4-17.8,27.7L86.68,95.78c-19.8,19.8-23.3,39-13.2,51.4.7.8,1.4.3,1-.7-6.7-15.1,9.3-31.1,16.9-38.7Zm37.6,82.5-14.3,14.2c-6.5,6.5-12.3,12.4-15.8,18.4h14.1l1.7-1.7,20.5-20.5c17.1-16.9,19.5-35,15.8-46.8-.3-1-1.2-1.1-1.2,0,.1,9.9-2.8,18.4-20.8,36.4Zm-2.8-24-11.4,11.5c-10.4,10.4-19.1,19.4-19.1,29.11v15.3c0,.89,1.1.89,1.2,0,2.6-12.4,7.5-17.4,17.8-27.7L167,142.17c19.8-19.8,23.3-39,13.2-51.4-.7-.8-1.4-.3-1,.7C185.88,106.57,169.88,122.57,162.28,130.17Zm83.5,68.2h1.1l1.7,3h1.5l-2-3.3a2,2,0,0,0,1.3-2c0-1.5-.8-2.2-2.7-2.2h-2.2v7.5h1.3v-3Zm0-3.5h.8c1,0,1.4.3,1.4,1.2,0,.7-.5,1.2-1.4,1.2h-.9v-2.4Zm1,9a6.3,6.3,0,1,0-6.3-6.3,6.08,6.08,0,0,0,5.87,6.3Zm0-11.7a5.4,5.4,0,1,1,0,10.8,5.31,5.31,0,0,1-5.4-5.23h0v-.16a5.24,5.24,0,0,1,5.11-5.39h.29Z"
  }));
};

LogoIcon.propTypes = {
  fill: PropTypes.string
};

var MenuIcon = function MenuIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "o-icon__menu",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#9b9b9b"
  }, React__default.createElement("path", {
    d: "M0,0H10V2H0ZM0,10H10V8H0ZM0,6H10V4H0Z"
  }));
};

MenuIcon.propTypes = {
  fill: PropTypes.string
};

var PlusIcon = function PlusIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    viewBox: "0 0 10 10",
    title: "o-icon__plus",
    className: fill,
    fill: "#9b9b9b"
  }, React__default.createElement("path", {
    d: "M10,4H6V0H4V4H0V6H4v4H6V6h4Z"
  }));
};

PlusIcon.propTypes = {
  fill: PropTypes.string
};

var SearchIcon = function SearchIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    viewBox: "0 0 10 10",
    title: "o-icon__search",
    className: fill,
    fill: "#777"
  }, React__default.createElement("path", {
    d: "M9.91,8.5,7.43,6A4,4,0,1,0,4,8a4,4,0,0,0,2-.57L8.5,9.91ZM2,4A2,2,0,1,1,4,6,2,2,0,0,1,2,4Z"
  }));
};

SearchIcon.propTypes = {
  fill: PropTypes.string
};

var SettingsIcon = function SettingsIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    viewBox: "0 0 14 14",
    title: "o-icon__settings",
    className: fill,
    fill: "#808080"
  }, React__default.createElement("path", {
    d: "M12.767 8.343c-0.735-1.272-0.293-2.903 0.986-3.643l-1.376-2.383c-0.393 0.23-0.85 0.363-1.338 0.363-1.47 0-2.662-1.2-2.662-2.68h-2.752c0.004 0.457-0.11 0.92-0.355 1.343-0.735 1.272-2.367 1.705-3.649 0.967l-1.376 2.383c0.396 0.225 0.739 0.555 0.983 0.977 0.733 1.27 0.294 2.897-0.98 3.64l1.376 2.383c0.392-0.228 0.847-0.359 1.332-0.359 1.466 0 2.654 1.192 2.662 2.665h2.752c-0.001-0.452 0.113-0.91 0.355-1.329 0.733-1.27 2.362-1.703 3.642-0.971l1.376-2.383c-0.393-0.225-0.734-0.554-0.977-0.974zM7 9.835c-1.566 0-2.835-1.269-2.835-2.835s1.269-2.835 2.835-2.835c1.566 0 2.835 1.269 2.835 2.835s-1.269 2.835-2.835 2.835z"
  }));
};

SettingsIcon.propTypes = {
  fill: PropTypes.string
};

var ShareIcon = function ShareIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    viewBox: "0 0 20 20",
    title: "o-icon__share",
    className: fill
  }, React__default.createElement("path", {
    d: "M14.21,6.21,7,9.8c0,.06,0,.13,0,.2s0,.13,0,.2l7.17,3.58a3.46,3.46,0,0,1,2.26-.84,3.53,3.53,0,1,1-3.53,3.53c0-.07,0-.14,0-.2L5.8,12.68a3.53,3.53,0,1,1,0-5.37L13,3.73c0-.07,0-.13,0-.2a3.53,3.53,0,1,1,3.53,3.53A3.47,3.47,0,0,1,14.21,6.21Z"
  }));
};

ShareIcon.propTypes = {
  fill: PropTypes.string
};

var SubscribeIcon = function SubscribeIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    viewBox: "0 0 10 10",
    title: "o-icon__subscribe",
    className: fill,
    fill: "#9b9b9b"
  }, React__default.createElement("path", {
    d: "M9,7V5A4,4,0,0,0,6,1.14V0H4V1.14A4,4,0,0,0,1,5V7A1,1,0,0,1,0,8v2H10V8A1,1,0,0,1,9,7ZM3,7V5A2,2,0,0,1,7,5V7a3,3,0,0,0,.18,1H2.82A3,3,0,0,0,3,7Z"
  }));
};

SubscribeIcon.propTypes = {
  fill: PropTypes.string
};

var icons = {
  'arrow-bracket-left': ArrowBracketLeftIcon,
  'arrow-bracket-right': ArrowBracketRightIcon,
  'arrow-long-left': ArrowLongLeftIcon,
  'arrow-long-right': ArrowLongRightIcon,
  'arrow-short-left': ArrowShortLeftIcon,
  'arrow-short-right': ArrowShortRightIcon,
  close: CloseIcon,
  contact: ContactIcon,
  dots: DotsIcon,
  find: FindIcon,
  heart: HeartIcon,
  language: LanguageIcon,
  legal: LegalIcon,
  'logo-dark': LogoDarkIcon,
  'logo-round': LogoRoundIcon,
  logo: LogoIcon,
  menu: MenuIcon,
  plus: PlusIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  share: ShareIcon,
  subscribe: SubscribeIcon // Available icons sizes

};
var iconSizes = ['xs', 's', 'm', 'l', 'xl']; // Available icon names

var iconNames = Object.keys(icons);

function Icon(_ref) {
  var name = _ref.name,
      color = _ref.color;
  var fill = color ? "".concat(svgFillClass, "--").concat(color) : null;
  return icons[name] ? icons[name]({
    fill: fill
  }) : "[".concat(name, "]");
}

Icon.propTypes = {
  name: PropTypes.oneOf(iconNames).isRequired,
  color: PropTypes.oneOf(svgFillColors)
};
Icon.defaultProps = {
  name: 'logo'
};

function IconWrap(_ref) {
  var as = _ref.as,
      background = _ref.background,
      className = _ref.className,
      color = _ref.color,
      fill = _ref.fill,
      name = _ref.name,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["as", "background", "className", "color", "fill", "name", "size"]);

  var classes = ['u-icon', " u-icon--".concat(size)];
  if (className) classes.push(className);
  if (background) classes.push("".concat(themeBackgroundClass, "--").concat(background));
  if (fill) classes.push("".concat(svgFillClass, "--").concat(fill));
  var classNames = classes.join(' ');
  return React__default.createElement(Element, _extends({
    as: as,
    className: classNames
  }, props), React__default.createElement(Icon, {
    name: name,
    color: color
  }));
}

IconWrap.propTypes = {
  as: PropTypes.string,
  background: PropTypes.oneOf(themeBackgroundColors),
  className: PropTypes.string,
  color: Icon.propTypes.color,
  fill: PropTypes.oneOf(svgFillColors),
  name: Icon.propTypes.name,
  size: PropTypes.oneOf(iconSizes)
};
IconWrap.defaultProps = {
  as: 'span',
  className: '',
  fill: 'white',
  size: 'm'
};

/**
 *
 * @param {string} base - Base class name
 * @param {string} extra - Extra class name
 * @param {object} flags - Button flags
 */

function getButtonClass(base, extra, _ref) {
  var disabled = _ref.disabled,
      flags = _objectWithoutProperties(_ref, ["disabled"]);

  var classNames = [base];
  if (extra) classNames.push(extra);
  if (disabled) classNames.push('disabled');

  for (var flag in flags) {
    if (flags[flag]) classNames.push("".concat(base, "--").concat(flag));
  }

  return classNames.join(' ');
}
/**
 * ALPS atom/buttons/Button component
 * @param {object} props - Button props
 */


function Button(_ref2) {
  var as = _ref2.as,
      className = _ref2.className,
      disabled = _ref2.disabled,
      expand = _ref2.expand,
      icon = _ref2.icon,
      iconClass = _ref2.iconClass,
      iconSize = _ref2.iconSize,
      iconFill = _ref2.iconFill,
      lighter = _ref2.lighter,
      onClick = _ref2.onClick,
      outline = _ref2.outline,
      simple = _ref2.simple,
      small = _ref2.small,
      text = _ref2.text,
      toggle = _ref2.toggle,
      url = _ref2.url,
      rest = _objectWithoutProperties(_ref2, ["as", "className", "disabled", "expand", "icon", "iconClass", "iconSize", "iconFill", "lighter", "onClick", "outline", "simple", "small", "text", "toggle", "url"]);

  var buttonClass = getButtonClass('o-button', className, {
    disabled: disabled,
    expand: expand,
    lighter: lighter,
    outline: outline,
    simple: simple,
    small: small,
    toggle: toggle
  });
  return React__default.createElement(Element, _extends({
    tag: as,
    className: buttonClass,
    href: onClick ? null : url,
    onClick: onClick
  }, rest), icon && React__default.createElement(IconWrap, {
    className: iconClass,
    color: "white",
    fill: iconFill,
    name: icon,
    size: iconSize
  }), text);
}

Button.propTypes = {
  as: PropTypes.oneOf(['a', 'button', 'span']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  expand: PropTypes.bool,
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  iconSize: PropTypes.string,
  iconFill: PropTypes.string,
  lighter: PropTypes.bool,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  simple: PropTypes.bool,
  small: PropTypes.bool,
  text: PropTypes.string,
  toggle: PropTypes.bool,
  url: PropTypes.string
};
Button.defaultProps = {
  as: 'button',
  className: '',
  iconFill: 'white',
  iconSize: 'xs'
};

var range = (function (start, end) {
  return Array.from({
    length: end - start + 1
  }, function () {
    return start++;
  });
});

var gridClass = 'l-grid';
var col = 'col';
var sevenClass = "".concat(gridClass, "--7").concat(col);
var sevenInnerClass = "".concat(sevenClass, "--inner"); // Class is available in CSS, but not not used in twig/json templates

var wrapClass = "".concat(gridClass, "-wrap");
var itemClass = "".concat(gridClass, "-item");
var shiftClass = 'u-shift';
var shiftSides = ['left', 'right'];
var shiftBreakpoints = ['medium', 'standard', 'large', 'xxlarge'];
var noGuttersClass = 'u-no-gutters';
var wrapSizes = range(1, 7).map(function (s) {
  return "".concat(s);
}); // Example: {side: 'left', breakpoint: 'xxlarge'} => 'u-shift--left--1-col--at-xxlarge'

function getShiftClass(side, at) {
  return "".concat(shiftClass, "--").concat(side, "--1-").concat(col, "--").concat(at === 'standard' ? at : "at-".concat(at), " "); // TODO: Ask if, to avoid this special case, `.u-shift--left--1-col--standard` is meant used, and if can be renamed to a more "standard" name like `.u-shift--left--1-col--at-standard` (note the added `at`).
}

function getGridWrapClass(size) {
  return "".concat(wrapClass, " ").concat(typeof size === 'string' && wrapSizes.includes(size) ? "".concat(wrapClass, "--").concat(size, "-of-7") : '');
}

function getGridClass(_ref) {
  var className = _ref.className,
      noGutters = _ref.noGutters,
      seven = _ref.seven,
      sevenInner = _ref.sevenInner,
      shiftSide = _ref.shiftSide,
      shiftAt = _ref.shiftAt,
      wrap = _ref.wrap;
  var classes = [gridClass];
  if (className) classes.push(className);
  if (seven) classes.push(sevenClass);
  if (sevenInner) classes.push(sevenInnerClass);
  if (noGutters) classes.push(noGuttersClass);
  if (wrap) classes.push(getGridWrapClass(wrap));
  if (shiftSide && shiftAt) classes.push(getShiftClass(shiftSide, shiftAt));
  return classes.join(' ');
}

function getGridItemClass(_ref2) {
  var className = _ref2.className,
      noItemClass = _ref2.noItemClass,
      size = _ref2.size,
      sizeAtL = _ref2.sizeAtL,
      sizeAtM = _ref2.sizeAtM,
      sizeAtS = _ref2.sizeAtS,
      sizeAtXL = _ref2.sizeAtXL;
  var classes = [];
  if (!noItemClass) classes.push(itemClass);
  var sizes = [];
  if (size) sizes.push({
    size: size
  }); // default "at" would be "xs", but it's not present in ALPS

  if (sizeAtS) sizes.push({
    size: sizeAtS,
    at: 's'
  });
  if (sizeAtM) sizes.push({
    size: sizeAtM,
    at: 'm'
  });
  if (sizeAtL) sizes.push({
    size: sizeAtL,
    at: 'l'
  });
  if (sizeAtXL) sizes.push({
    size: sizeAtXL,
    at: 'xl'
  });

  for (var _i = 0; _i < sizes.length; _i++) {
    var _sizes$_i = sizes[_i],
        at = _sizes$_i.at,
        _size = _sizes$_i.size;
    classes.push("".concat(itemClass).concat(at ? "--".concat(at) : '', "--").concat(wrapSizes.includes(_size) ? "".concat(_size, "-").concat(col) : ''));
  }

  if (className) classes.push(className);
  return classes.join(' ');
}

function Grid(_ref) {
  var as = _ref.as,
      children = _ref.children,
      className = _ref.className,
      noGutters = _ref.noGutters,
      seven = _ref.seven,
      sevenInner = _ref.sevenInner,
      shiftAt = _ref.shiftAt,
      shiftSide = _ref.shiftSide,
      wrap = _ref.wrap,
      props = _objectWithoutProperties(_ref, ["as", "children", "className", "noGutters", "seven", "sevenInner", "shiftAt", "shiftSide", "wrap"]);

  var elementClass = getGridClass({
    className: className,
    noGutters: noGutters,
    seven: seven,
    sevenInner: sevenInner,
    shiftAt: shiftAt,
    shiftSide: shiftSide,
    wrap: wrap
  });
  return React__default.createElement(Element, _extends({
    tag: as,
    className: elementClass
  }, props), children);
}

var asOptions = ['aricle', 'div', 'section'];
Grid.propTypes = _objectSpread({
  as: PropTypes.oneOf(asOptions),
  children: PropTypes.node,
  className: PropTypes.string,
  noGutters: PropTypes.bool,
  seven: PropTypes.bool,
  sevenInner: PropTypes.bool,
  shiftAt: PropTypes.oneOf(shiftBreakpoints),
  shiftSide: PropTypes.oneOf(shiftSides),
  wrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(wrapSizes)])
}, Element.propTypes);
Grid.defaultProps = {
  as: 'div',
  className: ''
};

function GridItem(_ref) {
  var as = _ref.as,
      children = _ref.children,
      className = _ref.className,
      noItemClass = _ref.noItemClass,
      size = _ref.size,
      sizeAtL = _ref.sizeAtL,
      sizeAtM = _ref.sizeAtM,
      sizeAtS = _ref.sizeAtS,
      sizeAtXL = _ref.sizeAtXL,
      props = _objectWithoutProperties(_ref, ["as", "children", "className", "noItemClass", "size", "sizeAtL", "sizeAtM", "sizeAtS", "sizeAtXL"]);

  var elementClass = getGridItemClass({
    className: className,
    noItemClass: noItemClass,
    size: size,
    sizeAtS: sizeAtS,
    sizeAtM: sizeAtM,
    sizeAtL: sizeAtL,
    sizeAtXL: sizeAtXL
  });
  return React__default.createElement(Element, _extends({
    as: as,
    className: elementClass
  }, props), children);
}

var sizePropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
GridItem.propTypes = {
  as: PropTypes.oneOf(['article', 'div']),
  children: PropTypes.node,
  className: PropTypes.string,
  noItemClass: PropTypes.bool,
  // TODO: This is required as some items, like `.c-drawer__container` has a "grid-item"'s size class, but not `.l-grid-item`,
  size: sizePropType,
  sizeAtS: sizePropType,
  sizeAtM: sizePropType,
  sizeAtL: sizePropType,
  sizeAtXL: sizePropType
};
GridItem.defaultProps = {
  as: 'div',
  noItemClass: false,
  className: ''
};

function GridSeven(_ref) {
  var children = _ref.children,
      inner = _ref.inner,
      props = _objectWithoutProperties(_ref, ["children", "inner"]);

  return React__default.createElement(Grid, _extends({}, props, {
    seven: true,
    sevenInner: inner
  }), children);
}

GridSeven.propTypes = _objectSpread({
  inner: PropTypes.bool
}, Grid.propTypes);
GridSeven.defaultProps = _objectSpread({}, Grid.defaultProps);

function Image(_ref) {
  var lazy = _ref.lazy,
      others = _objectWithoutProperties(_ref, ["lazy"]);

  var image = React__default.createElement("img", _extends({
    itemProp: "image"
  }, others));
  return lazy ? React__default.createElement(LazyLoad, null, image) : image;
}

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  lazy: PropTypes.bool,
  src: PropTypes.string
};
Image.defaultProps = {
  lazy: true
};

function Gain(_ref) {
  var fill = _ref.fill,
      fillAccent = _ref.fillAccent;
  return React__default.createElement(Svg, {
    title: "logo-gain",
    viewBox: "0 0 1177 400"
  }, React__default.createElement("g", {
    fill: "none"
  }, React__default.createElement("path", {
    fill: fillAccent,
    d: "M840 43.858C840 76.625 814.832 95 786 95s-44-16.79-44-44c0-31.11 25.277-51 53-51 26.61 0 45 16.649 45 43.858z"
  }), React__default.createElement("path", {
    fill: fill,
    d: "M1177 22v374h-105.514L1009 272c-14.05-26.665-35.716-71.998-65-136l2.724 260H855V22h119l59 115c20.513 37.2 42.357 87.13 59 131l-7-246h92zM193 251.5h50V316c-4.425 1.673-17.696 3.5-31 3.5-61.546 0-106.5-40.524-106.5-110.5 0-76.068 50.969-108.5 112.5-108.5 42.688 0 67.435 6.612 88.5 15.5l20-80c-19.404-9.44-57.548-18-108-18C97.071 18 .537 84.044 0 214c0 53.873 18.068 102.176 53 135.5 33.8 32.21 83.762 50.5 157.5 50.5 48.788 0 101.292-12.572 129-22V174H193v77.5zM688 381l5 15h87.115L832 123h-95l-49 258zm0 0l-3 15H584.91l-23.752-87H465.03l-20.991 87H340L449 21h133l106 360zM547 235L511 94l-32.698 141H547z"
  }), React__default.createElement("polygon", {
    fill: fillAccent,
    points: "693 396 688 381 685 396"
  })));
}

Gain.propTypes = {
  fill: PropTypes.string,
  fillAccent: PropTypes.string
};
Gain.defaultProps = {
  fill: '#000',
  fillAccent: '#d0021b'
};

function SDA(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "logo-sda",
    viewBox: "0 0 432.6 103.09"
  }, React__default.createElement("path", {
    d: "M182.62,72.53h4.92v30h-4.92Zm2.52-11.24c-1.63,0-2.91,1-2.91,3.13a2.89,2.89,0,1,0,5.76,0C188,62.24,186.65,61.29,185.14,61.29ZM59.92,61.9,64.85,60v42.53h-4l-.73-4h-.23c-1.79,2.57-4.64,4.59-9.34,4.59-7.44,0-12.31-5.21-12.31-15.5h0C38.27,77.29,43.19,72,50.64,72a10.8,10.8,0,0,1,9.28,4.43h.34c-.11-1-.34-3.31-.34-4.43ZM60,87.64c0-7.44-2-11.58-8.67-11.58-5.32,0-8,4.53-8,11.64S46,99,51.36,99C57.68,99,60,95.53,60,88.54h0ZM20.14,62.41,35.7,102.53H30.49L25.68,90.16H9.85L5.09,102.53H0L15.61,62.41Zm4,23.27L19.7,73.6c-.34-.9-1.51-4.59-1.91-6-.56,2.29-1.28,4.7-1.73,6L11.53,85.68ZM146,72c-3.8,0-7.49,1.51-9.45,4.65h-.28l-.73-4.09h-4v30h4.92V87c0-7,2.13-10.86,8.79-10.86,4.58,0,6.71,2.41,6.71,7.22v19.2h4.87V83C156.83,75.28,153.14,72,146,72ZM125.05,85.52v3H104.51c.17,6.77,3.58,10.41,9.57,10.41a23.82,23.82,0,0,0,8.23-1.46l1.4,3.7a22.5,22.5,0,0,1-9.85,2c-8.56,0-14.44-5.32-14.44-15.34,0-9.84,5.32-15.78,13.26-15.78C120.35,72,125.05,77.35,125.05,85.52Zm-5.15-1c-.05-5.09-2.29-8.56-7.27-8.56-4.7,0-7.5,3.19-8,8.56Zm86.55.79c-5.76-2.19-7.72-3.19-7.72-5.71,0-2.24,2.18-3.64,6.21-3.64a21.49,21.49,0,0,1,8.4,2l1.51-4a23.37,23.37,0,0,0-9.57-2c-6.72,0-11.25,2.86-11.25,8,0,4.92,3.47,6.72,9.29,9s7.39,3.58,7.39,5.82c0,2.69-2.13,4.42-7.11,4.42a22.57,22.57,0,0,1-8.06-1.73l-1.45,3.8c2.29,1.23,5.2,1.91,9.4,1.91,7.33,0,12-3,12-8.85C215.46,89.43,212.16,87.47,206.45,85.35Zm-29.59,13a9.2,9.2,0,0,1-3.31.73c-2.74,0-4.7-1.74-4.7-5.38V76.34h8.68V72.53h-8.68V65.65l-4.92,1.85V93.8c0,7.27,4.09,9.29,8.79,9.29a11.22,11.22,0,0,0,5.48-1.24l-1.34-3.52Zm-91-8.11c-.84,2.4-2.13,6.09-2.52,7.94h-.22a63.76,63.76,0,0,0-2.41-7.94L74.3,72.53H69l11.36,30h5.65l11.42-30H92.21ZM365.52,78h-.23l-.56-5.49h-4v30h4.93v-16c0-6,4.08-10.07,8.73-10.07a15.86,15.86,0,0,1,3.24.39l.62-4.53a18.3,18.3,0,0,0-3.53-.34C370.49,72,367.42,74.72,365.52,78ZM347.39,88.15c0,7-2.18,10.85-8.84,10.85-4.53,0-6.66-2.35-6.66-7.16V72.53h-5V92.17c0,7.61,3.69,10.92,10.91,10.92,3.86,0,7.55-1.4,9.51-4.54h.23l.72,4h4v-30h-4.92ZM277.28,98.66c-9.17,0-13.76-6.21-13.76-16.11h0c0-10,5.26-16.11,13.82-16.11a21.59,21.59,0,0,1,9.06,2.18l1.68-4.42A23.67,23.67,0,0,0,277.4,62c-12.37,0-19.2,8.4-19.2,20.48,0,12.59,6.1,20.6,18.36,20.6A25.65,25.65,0,0,0,289,100.51l-1.45-3.86A26.81,26.81,0,0,1,277.28,98.66ZM308.11,72c-3.86,0-7.44,1.57-9.34,4.64h-.34a31.18,31.18,0,0,0,.28-4.19V60l-4.92,1.85v40.68h4.92V87c0-7,2.07-10.91,8.79-10.91,4.59,0,6.71,2.4,6.71,7.21v19.2h4.87V83C319.08,75.33,315.39,72,308.11,72Zm70.11.28Zm-135.4-8a3.7,3.7,0,0,1-7.39,0h0a3.57,3.57,0,0,1,3.7-3.75A3.63,3.63,0,0,1,242.82,64.31Zm-.56,0a3.11,3.11,0,0,0-3.13-3.19,3.16,3.16,0,1,0,3.13,3.19Zm-8.95,34a9.1,9.1,0,0,1-3.3.73c-2.74,0-4.7-1.74-4.7-5.38V76.34H234V72.53h-8.67V65.65l-4.93,1.85V93.8c0,7.27,4.09,9.29,8.79,9.29a11.22,11.22,0,0,0,5.48-1.24l-1.34-3.52Zm6.54-33.8,1.18,2h-.9l-1-1.73h-.62v1.73h-.78V62.07H239c1.12,0,1.63.45,1.63,1.34A1.18,1.18,0,0,1,239.85,64.53Zm0-1.12c0-.44-.28-.67-.84-.67h-.5v1.4h.5C239.52,64.14,239.85,63.86,239.85,63.41Zm154,12.87a20.71,20.71,0,0,1,6.49,1.4l1.56-4.08A19.44,19.44,0,0,0,393.94,72c-8.06,0-14.05,4.65-14.05,15.73h0c0,10.63,5.71,15.39,13.71,15.39,3.42,0,6.44-.73,8.12-1.8l-1.51-3.91a15.82,15.82,0,0,1-6.66,1.45c-5.65,0-8.56-4-8.56-11.19C385,80.14,387.84,76.28,393.83,76.28ZM421.63,72c-3.86,0-7.44,1.57-9.34,4.64H412a31.18,31.18,0,0,0,.28-4.19V60l-4.92,1.85v40.68h4.92V87c0-7,2.07-10.91,8.79-10.91,4.58,0,6.71,2.4,6.71,7.21v19.2h4.87V83C432.6,75.33,428.91,72,421.63,72ZM77,42.53l11.42-30H83.2L76.82,30.22c-.84,2.4-2.12,6.09-2.52,7.94h-.22a63.76,63.76,0,0,0-2.41-7.94L65.29,12.53H60l11.36,30Zm-28.81.56c-8.56,0-14.44-5.32-14.44-15.34C33.79,17.9,39.11,12,47.05,12c7.67,0,12.37,5.37,12.37,13.55v3H38.89c.16,6.77,3.58,10.41,9.56,10.41a23.82,23.82,0,0,0,8.23-1.46l1.4,3.7A22.5,22.5,0,0,1,48.23,43.09ZM39,24.56H54.27C54.22,19.47,52,16,47,16,42.3,16,39.5,19.19,39,24.56ZM14.6,38.72A25.67,25.67,0,0,1,5,37L3.41,41.18c2.52,1.23,6.49,1.91,11,1.91h0c8.73,0,14.27-4.15,14.27-11.25,0-6.27-3.86-8.9-10.91-11.53C11.25,17.9,9,16.28,9,12.25c0-3.47,2.57-5.81,7.55-5.81a24.84,24.84,0,0,1,9.52,2.12L27.7,4.25A26.9,26.9,0,0,0,16.67,2C9.12,2,3.92,5.88,3.92,12.2s3.47,9.4,10.29,11.86c7.22,2.63,9.4,4.31,9.4,8.23S20.53,38.72,14.6,38.72Zm75.82-11C90.42,17.9,95.73,12,103.68,12,111.34,12,116,17.34,116,25.52v3H95.51c.17,6.77,3.58,10.41,9.57,10.41a23.81,23.81,0,0,0,8.22-1.46l1.4,3.7a22.47,22.47,0,0,1-9.85,2C96.29,43.09,90.42,37.77,90.42,27.75Zm5.2-3.19h15.27c0-5.09-2.29-8.56-7.27-8.56C98.92,16,96.12,19.19,95.62,24.56ZM244.5,1.9,249.42,0V42.53h-4l-.72-4h-.23c-1.79,2.57-4.64,4.59-9.34,4.59-7.45,0-12.31-5.21-12.31-15.5h0c0-10.3,4.92-15.62,12.36-15.62a10.81,10.81,0,0,1,9.29,4.43h.34c-.11-1-.34-3.31-.34-4.43Zm.06,25.74c0-7.44-2-11.58-8.68-11.58-5.31,0-7.94,4.53-7.94,11.64s2.63,11.3,8,11.3c6.32,0,8.62-3.47,8.62-10.46ZM143,23.33v19.2h4.87V23c0-7.72-3.69-11-10.85-11-3.81,0-7.5,1.51-9.46,4.65h-.28l-.73-4.09h-4v30h4.93V27c0-7,2.12-10.86,8.78-10.86C140.83,16.11,143,18.52,143,23.33ZM299.5,46.67l12.92-34.14h-5.31l-6.1,17c-1.07,3.08-2.13,6.38-2.58,8.23h-.22a51.16,51.16,0,0,0-2.52-8.17L289.2,12.53h-5.26L296,42.64l-1.57,4c-1.23,3.24-2.18,4.31-4.48,5.37l1.52,4C295.47,54.39,297.37,52.32,299.5,46.67ZM256.19,34.19c0-6,4.59-9.29,14.38-9.57l5.09-.17V22.66c0-5-2.29-6.66-6.21-6.66A19.72,19.72,0,0,0,261,18.3l-1.51-3.7A22.57,22.57,0,0,1,269.73,12c7.28,0,10.74,3.08,10.74,10.07h0V42.53h-3.59l-.95-4.26h-.22c-2.63,3.3-5,4.82-10.07,4.82C260.22,43.09,256.19,40.29,256.19,34.19Zm5.09.05c0,3.36,2.24,4.87,5.49,4.87,5,0,8.84-2.74,8.84-8.56V27.86l-4.42.17h0C263.69,28.31,261.28,30.44,261.28,34.24Zm-93.43,4.09h0a9.1,9.1,0,0,1-3.3.73c-2.74,0-4.7-1.74-4.7-5.38V16.34h8.67V12.53h-8.67V5.65L154.92,7.5V33.8c0,7.27,4.09,9.29,8.79,9.29a11.22,11.22,0,0,0,5.48-1.24Zm35.86-13,1.68,4.36h13.54l-1.68-4.36ZM194,42.53h4.87V23c0-7.67-3.69-11-11-11-3.86,0-7.45,1.57-9.35,4.64h-.33a32.92,32.92,0,0,0,.28-4.19V0l-4.93,1.85V42.53h4.93V27c0-7,2.07-10.91,8.78-10.91,4.59,0,6.71,2.4,6.71,7.21Z",
    fill: fill
  }));
}

SDA.propTypes = {
  fill: PropTypes.string
};
SDA.defaultProps = {
  fill: '#fb23c2'
};

function SDAArabic(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "logo-sda-arabic",
    viewBox: "0 0 473.55 118.98"
  }, React__default.createElement("path", {
    d: "M12.43,77.51a4.08,4.08,0,0,1,0-5,3,3,0,0,1,2.31-.88,3,3,0,0,1,2.32.92,4.06,4.06,0,0,1,0,4.89,3,3,0,0,1-2.32.92A3.07,3.07,0,0,1,12.43,77.51ZM51.36,110a3,3,0,0,0-2.31.88,3.47,3.47,0,0,0-.83,2.48,3.42,3.42,0,0,0,.85,2.49,3,3,0,0,0,2.29.87,2.94,2.94,0,0,0,2.32-.91,4.06,4.06,0,0,0,0-4.89A3,3,0,0,0,51.36,110Zm-9.67,0a3.29,3.29,0,0,0-2.23.79,4.08,4.08,0,0,0,0,5.14,3.29,3.29,0,0,0,2.23.79,3,3,0,0,0,2.28-.87,4.15,4.15,0,0,0,0-5A3.06,3.06,0,0,0,41.69,110Zm21.88,0a3.26,3.26,0,0,0-2.22.79,3.21,3.21,0,0,0-.92,2.57,3,3,0,0,0,3.14,3.36,3,3,0,0,0,2.28-.87,4.11,4.11,0,0,0,0-5A3,3,0,0,0,63.57,110Zm9.67,0a3,3,0,0,0-2.31.88,3.47,3.47,0,0,0-.83,2.48,3.42,3.42,0,0,0,.85,2.49,3,3,0,0,0,2.29.87,3,3,0,0,0,2.33-.91,4.06,4.06,0,0,0,0-4.89A3,3,0,0,0,73.24,110Zm12-36.93h0a3,3,0,0,0,2.28-.88,3.48,3.48,0,0,0,.83-2.49,3.41,3.41,0,0,0-.85-2.5,3,3,0,0,0-2.26-.86,3.28,3.28,0,0,0-2.23.8,4.07,4.07,0,0,0,0,5.13A3.28,3.28,0,0,0,85.24,73.09Zm9.67,0a3,3,0,0,0,2.32-.92,4.06,4.06,0,0,0,0-4.89,3,3,0,0,0-2.32-.92,3,3,0,0,0-2.31.88,4.12,4.12,0,0,0,0,5A3.07,3.07,0,0,0,94.91,73.09ZM110,110a3,3,0,0,0-2.31.88,4.08,4.08,0,0,0,0,5,3.07,3.07,0,0,0,2.3.87,3,3,0,0,0,2.32-.91,4.06,4.06,0,0,0,0-4.89A3,3,0,0,0,110,110Zm68.46-8.85H164.16V78.41h-4.75v22.76H156a8.24,8.24,0,0,1-4.22-1,9.06,9.06,0,0,1-3-3.37l.05-.63V82.76H144V94.7a7,7,0,0,1-1.5,4.68,5.22,5.22,0,0,1-4.21,1.79h-6V82.76h-4.75v18.41H112.8V78.41h-5v22.76H92.61V78.41h-5v22.76H70.73V78.41h-5v22.76H48.85V78.41h-5v22.76H29.21V78.41H24.45v27.24c0,3-.75,5.27-2.27,6.75s-3.89,2.21-7.13,2.21H12.32a6.41,6.41,0,0,1-5.41-2.46Q5,109.69,5,105.16a32.85,32.85,0,0,1,1.91-12H2.29A32.93,32.93,0,0,0,0,105.49q0,6.23,3,9.86A10.12,10.12,0,0,0,11.26,119h4q7.14,0,10.49-3.4t3.45-10h109.6a10.26,10.26,0,0,0,4.89-1.09,9.41,9.41,0,0,0,3.28-2.81,13.58,13.58,0,0,0,4.38,3.07,12.66,12.66,0,0,0,4.63.83h27.46V63h-5Zm16.17,4.37h5V63h-5Zm55.59-27.15a3,3,0,0,0,2.33-.92,4.06,4.06,0,0,0,0-4.89,3,3,0,0,0-2.33-.92,3,3,0,0,0-2.3.88,4.08,4.08,0,0,0,0,5A3.07,3.07,0,0,0,250.24,78.39Zm-9.66,0a3,3,0,0,0,2.27-.88,3.43,3.43,0,0,0,.84-2.48,3.38,3.38,0,0,0-.85-2.5,3,3,0,0,0-2.27-.87,3.27,3.27,0,0,0-2.22.8,4,4,0,0,0,0,5.13A3.28,3.28,0,0,0,240.58,78.39Zm97.22-5.3a3,3,0,0,0,2.33-.92,3.57,3.57,0,0,0,.82-2.45,3.52,3.52,0,0,0-.83-2.44,3,3,0,0,0-2.32-.92,3,3,0,0,0-2.3.88,4.08,4.08,0,0,0,0,5A3.07,3.07,0,0,0,337.8,73.09Zm-7.39-.88a4.11,4.11,0,0,0,0-5,3,3,0,0,0-2.27-.86,3.27,3.27,0,0,0-2.22.8,4,4,0,0,0,0,5.13,3.27,3.27,0,0,0,2.22.8A3,3,0,0,0,330.41,72.21Zm22.61.88h0a3,3,0,0,0,2.32-.92,4.06,4.06,0,0,0,0-4.89,3,3,0,0,0-2.32-.92,3,3,0,0,0-2.31.88,3.47,3.47,0,0,0-.83,2.48,3.4,3.4,0,0,0,.85,2.49A3,3,0,0,0,353,73.09Zm30.16-3.37a3.51,3.51,0,0,0-.82-2.44,3,3,0,0,0-2.32-.92,3,3,0,0,0-2.31.88,4.12,4.12,0,0,0,0,5,3.07,3.07,0,0,0,2.3.87,2.94,2.94,0,0,0,2.32-.91A3.52,3.52,0,0,0,383.18,69.72Zm84,35.82h5V63h-5ZM380,73.09h0ZM405.39,75l-1.8,4.23a28.29,28.29,0,0,1,8.8,9.14,35.22,35.22,0,0,1,4.18,12.8H397.93v4.37h23.44v-4.26A42.73,42.73,0,0,0,415.9,85,26.71,26.71,0,0,0,405.39,75Zm-22,3.41h7.32v27.13H306.36a12.62,12.62,0,0,1-4.63-.83,13.71,13.71,0,0,1-4.39-3.07,9.47,9.47,0,0,1-3.27,2.81,10.28,10.28,0,0,1-4.9,1.09H238.34a10.17,10.17,0,0,1-7.66-2.91,10.94,10.94,0,0,1-2.81-7.93,26.41,26.41,0,0,1,.4-4.29,22.75,22.75,0,0,1,1-4.13h4.47a39.09,39.09,0,0,0-.84,8,8,8,0,0,0,1.45,5,4.57,4.57,0,0,0,3.82,1.91h20.08V78.41H263v22.76h14.89V82.76h4.76v18.41h6a5.2,5.2,0,0,0,4.21-1.79,7,7,0,0,0,1.5-4.68V82.76h4.76V96.2l-.06.63a9.08,9.08,0,0,0,3.05,3.37,8.21,8.21,0,0,0,4.22,1h3.41V78.41h4.76v22.76h16V78.41h5v22.76h15.22V78.41h5v22.76h15.22a10.75,10.75,0,0,1-2.16-3.91,14.8,14.8,0,0,1-.74-4.53q0-6.56,4.11-10.44T383.35,78.41Zm.16,4.35q-5,0-7.75,2.59A9.56,9.56,0,0,0,373,92.67q0,8.51,7.65,8.5h5.27V82.76ZM451.59,94.7q0,6.47-5.93,6.47h-1.53l-7.21-30.6h-5.19l7.21,30.6H426.4v4.37h19.81a10.27,10.27,0,0,0,7.54-2.77,10,10,0,0,0,2.81-7.42V63h-5ZM427.74,63.28v2.56l3.14-.49q4.15-.54,5.7-.69t2-.15V61.78a26.2,26.2,0,0,0-2.93.28q-2.13.28-2.67.42a2.94,2.94,0,0,1-1.2-1,3.07,3.07,0,0,1,.35-3.8,3.21,3.21,0,0,1,2.08-.7,5.19,5.19,0,0,1,2.78.69l.85-2.52a7.46,7.46,0,0,0-3.69-.84A6.23,6.23,0,0,0,430,55.63a4.58,4.58,0,0,0-1.57,3.71,4.05,4.05,0,0,0,2,3.56l-2.65.38ZM334.42,9.72Zm0,0a3,3,0,0,0,2.28-.87,3.48,3.48,0,0,0,.83-2.49,3.41,3.41,0,0,0-.85-2.5A3,3,0,0,0,334.42,3a3.28,3.28,0,0,0-2.23.8,3.22,3.22,0,0,0-.91,2.56,3.21,3.21,0,0,0,.91,2.57A3.27,3.27,0,0,0,334.42,9.72Zm9.67,0a3,3,0,0,0,2.32-.91,3.51,3.51,0,0,0,.82-2.45,3.5,3.5,0,0,0-.82-2.44A3,3,0,0,0,344.09,3a3,3,0,0,0-2.31.88A3.43,3.43,0,0,0,341,6.36a3.44,3.44,0,0,0,.84,2.49A3.07,3.07,0,0,0,344.09,9.72Zm69.38,46.15a3.5,3.5,0,0,0,.83-2.49,3.41,3.41,0,0,0-.85-2.5,3,3,0,0,0-2.27-.86,3.36,3.36,0,1,0,0,6.72A3,3,0,0,0,413.47,55.87ZM420.86,50a3,3,0,0,0-2.31.88,4.08,4.08,0,0,0,0,5,3.05,3.05,0,0,0,2.3.87,3,3,0,0,0,2.32-.91,4.06,4.06,0,0,0,0-4.89A3,3,0,0,0,420.86,50Zm15-36.93h0a3,3,0,0,0,2.33-.92A3.56,3.56,0,0,0,439,9.73a3.57,3.57,0,0,0-.82-2.45,3,3,0,0,0-2.33-.92,3.07,3.07,0,0,0-2.31.88,3.47,3.47,0,0,0-.83,2.48,3.4,3.4,0,0,0,.85,2.49A3.05,3.05,0,0,0,435.85,13.09Zm37.7,17V45.54H389.19a12.66,12.66,0,0,1-4.63-.83,13.58,13.58,0,0,1-4.38-3.07,9.5,9.5,0,0,1-3.28,2.81A10.26,10.26,0,0,1,372,45.54h-34.7q-6.72,0-10.46-3.4t-3.74-9.52q0-6.61,4.15-10.41t11.17-3.8h3.69V14.89h4.78V41.17h13.83V22.76h4.75V41.17h6a5.19,5.19,0,0,0,4.2-1.79,7,7,0,0,0,1.51-4.68V22.76H382V36.2l-.06.63A9.08,9.08,0,0,0,385,40.2a8.21,8.21,0,0,0,4.22,1h3.42V18.41h4.75V41.17h16V18.41h5V41.17h15.22V18.41h5V41.17H468.8V30.87q0-4.19-2.51-6.15c-1.68-1.31-4.27-2-7.79-2H449V18.19a33.32,33.32,0,0,1,5-7.41,42,42,0,0,1,7.09-6.5A33,33,0,0,1,468.69,0l1.78,4.26a36.55,36.55,0,0,0-10.06,6.14,25.13,25.13,0,0,0-6.77,8h4.86q7.32,0,11.19,3T473.55,30.05ZM342.12,22.76H338.6c-3.35,0-6,.86-7.78,2.58a9.43,9.43,0,0,0-2.74,7.22,8.31,8.31,0,0,0,2.38,6.4,9.54,9.54,0,0,0,6.74,2.21h4.92Z",
    fill: fill
  }));
}

SDAArabic.propTypes = {
  fill: PropTypes.string
};
SDAArabic.defaultProps = {
  fill: '#fb23c2'
};

function SDAWithIcon(_ref) {
  var fill = _ref.fill;
  return React__default.createElement(Svg, {
    title: "logo-sda-with-icon",
    viewBox: "0 0 1061.9 228.6"
  }, React__default.createElement("path", {
    d: "M246.6,197.3h-.9v-2.4h.9c1,0,1.4.3,1.4,1.2C248,196.8,247.5,197.3,246.6,197.3Zm-5.2.46h0v-.16a5.26,5.26,0,0,1,5.12-5.4h.28a5.4,5.4,0,0,1,0,10.8A5.32,5.32,0,0,1,241.4,197.76Zm3.1,3.64h1.3v-3h1.1l1.7,3h1.5l-2-3.3a2,2,0,0,0,1.3-2c0-1.5-.8-2.2-2.7-2.2h-2.2ZM341,159.1l26.6,68.7h-8.9l-8.2-21.3H323.4l-8.1,21.2h-8.7l26.7-68.6Zm6.8,39.7-7.5-20.7c-.6-1.5-2.6-7.9-3.3-10.2-1,3.9-2.2,8-3,10.2l-7.8,20.7ZM67.7,120.4c-.1-9.9,2.8-18.4,20.8-36.4l39-39c10.4-10.4,19.1-19.3,19.1-29V.7c0-.9-1.1-.9-1.2,0-2.6,12.4-7.5,17.3-17.8,27.6L82.3,73.5c-17.1,17-19.5,35.1-15.8,46.9C66.8,121.4,67.7,121.5,67.7,120.4Zm146,65.5L168,178.2l-17.1,17.1c-10.4,10.4-19,19.3-19,29V227c0,.7.9.9,1.2.1,3.2-8.7,13.9-18.1,33.5-14.8,0,0,85.4,14.8,86.1,14.8a.89.89,0,0,0,1-.6.79.79,0,0,0-.2-.8C253.2,225.3,213.7,185.9,213.7,185.9ZM133,212.8a36.43,36.43,0,0,1,6.9-15.8h-7.5a.65.65,0,0,0-.6.6v15.2C131.8,213.7,132.9,213.7,133,212.8ZM146.6,54.2c0-.9-1.1-.9-1.2,0-2.6,12.4-7.5,17.3-17.8,27.6L87.8,121.5c-19.8,19.8-10.7,39,.9,44.3,1,.5,1.4-.4.6-1-9.3-8-6.5-21.6,5.2-33.2l33-33c10.4-10.4,19.1-19.3,19.1-29ZM127.5,71.7c10.4-10.3,19-19.2,19.1-29V27.3c0-.9-1.1-.9-1.2,0-2.6,12.4-7.5,17.4-17.8,27.7L86.7,95.8c-19.8,19.8-23.3,39-13.2,51.4.7.8,1.4.3,1-.7-6.7-15.1,9.3-31.1,16.9-38.7ZM106.2,186.9h15a.65.65,0,0,0,.6-.6c0-7.9-6-13.3-30-9.2L40,186S.6,225.4.3,225.8a.79.79,0,0,0-.1,1.1.79.79,0,0,0,.8.2c.7-.1,86.1-14.8,86.1-14.8,19.6-3.3,30.3,6,33.5,14.8.3.8,1.2.7,1.2-.1V197.5a.65.65,0,0,0-.6-.6l-15,.1a.65.65,0,0,1-.6-.6v-8.9A.65.65,0,0,1,106.2,186.9Zm334.1-62.1,19.5-51.3h-9l-10.9,30.3c-1.4,4.1-3.6,10.4-4.3,13.6h-.4a105.87,105.87,0,0,0-4.1-13.6L420.2,73.5h-9l19.4,51.3Zm24.9-25.2c0-16.9,9.1-27,22.7-27,13.1,0,21.1,9.2,21.1,23.2v5.1H473.9c.3,11.6,6.1,17.8,16.4,17.8a39.92,39.92,0,0,0,14.1-2.5l2.4,6.3a38,38,0,0,1-16.9,3.3C475.2,125.8,465.2,116.7,465.2,99.6Zm8.8-5.5h26.1c-.1-8.7-3.9-14.7-12.5-14.7C479.7,79.5,474.9,84.9,474,94.1Zm300.8,31.7Zm-444.2-7.5a45.13,45.13,0,0,1-16.5-2.9l-2.7,7.1c4.3,2.1,11.1,3.3,18.8,3.3,15,0,24.4-7,24.4-19.2,0-10.7-6.6-15.2-18.7-19.7C324.8,82.8,321,80,321,73.1c0-6,4.4-10,12.9-10a41.15,41.15,0,0,1,16.2,3.6l2.8-7.4a44.86,44.86,0,0,0-18.8-3.8c-12.9,0-21.8,6.6-21.8,17.4,0,10.6,5.9,16.1,17.6,20.3,12.4,4.5,16.1,7.3,16.1,14.1S340.7,118.3,330.6,118.3Zm428-7.7c0-10.2,7.8-15.9,24.6-16.4l8.7-.3V90.8c0-8.5-3.9-11.4-10.6-11.4-5.4,0-10.2,1.9-14.5,3.9L764.2,77a38.27,38.27,0,0,1,17.5-4.4c12.5.1,18.4,5.3,18.4,17.3v35H794l-1.6-7.3H792c-4.5,5.7-8.6,8.2-17.2,8.2C765.5,125.8,758.6,121,758.6,110.6Zm8.6.1c0,5.8,3.8,8.3,9.4,8.3,8.6,0,15.1-4.7,15.1-14.7V99.7l-7.5.4h0C771.4,100.6,767.2,104.2,767.2,110.7ZM162.3,130.2l-11.4,11.5c-10.4,10.4-19.1,19.4-19.1,29.1v15.3c0,.9,1.1.9,1.2,0,2.6-12.4,7.5-17.4,17.8-27.7L167,142.2c19.8-19.8,23.3-39,13.2-51.4-.7-.8-1.4-.3-1,.7C185.9,106.6,169.9,122.6,162.3,130.2Zm-30.4,29.1c0,.9,1,.9,1.2,0,2.6-12.5,7.6-17.4,17.8-27.6L166,116.8c19.8-19.9,10.7-39-.9-44.3-1-.5-1.4.3-.6,1,9.3,8,6.5,21.5-5.2,33.2L151,115c-10.4,10.3-19.1,19.2-19.1,29Zm33.2-5.1-14.3,14.2c-6.5,6.5-12.3,12.4-15.8,18.4h14.1l1.7-1.7,20.5-20.5c17.1-16.9,19.5-35,15.8-46.8-.3-1-1.2-1.1-1.2,0C186,127.7,183.1,136.2,165.1,154.2Zm75.4,43.4a6.3,6.3,0,1,1,6.3,6.3h-.43A6.09,6.09,0,0,1,240.5,197.6Zm.9.16a5.32,5.32,0,0,0,5.4,5.24,5.4,5.4,0,0,0,0-10.8h-.28a5.26,5.26,0,0,0-5.12,5.4v.16Zm4.3-.46h.9c.9,0,1.4-.5,1.4-1.2,0-.9-.4-1.2-1.4-1.2h-.9Zm411-72.4V91.5c0-13.1-6.3-18.8-18.8-18.8-6.6,0-12.7,2.7-16,8h-.6a57.81,57.81,0,0,0,.5-7.2l.1-21.5-8.4,3.2v69.6h8.4V98.3c0-12,3.5-18.7,15-18.7,7.9,0,11.5,4.2,11.5,12.4v32.9Zm184.4,50.4c-6.6,0-12.7,2.7-16,8h-.6a57.81,57.81,0,0,0,.5-7.2l.1-21.4-8.4,3.2v69.6h8.4V201c0-12,3.5-18.7,15-18.7,7.9,0,11.5,4.2,11.5,12.4v32.8h8.3V194.1C859.9,180.9,853.6,175.3,841.1,175.3ZM786.5,221h0c-15.8,0-23.6-10.6-23.6-27.6,0-17.2,9-27.6,23.6-27.5a36.09,36.09,0,0,1,15.5,3.7l2.9-7.6c-5.2-2.6-11.3-3.7-18.3-3.7-21.1,0-32.8,14.4-32.8,35.1,0,21.5,10.4,35.2,31.4,35.2,8.7,0,13.7-.9,21.4-4.4l-2.5-6.6C799.7,219.7,792.4,221,786.5,221ZM826,131.9c-2.1,5.6-3.8,7.4-7.7,9.2l2.6,6.8c6.8-2.7,10.1-6.2,13.7-15.9l22.1-58.5h-9.1l-10.4,29.1c-1.8,5.3-3.6,10.9-4.4,14.1h-.4a83.56,83.56,0,0,0-4.3-14L817,73.5h-9l20.7,51.6ZM713.7,221.7c-4.7,0-8-3-8-9.2V182.8h14.8v-6.5H705.7V164.5l-8.4,3.1v45c0,12.5,7,15.9,15,15.9a20.15,20.15,0,0,0,9.4-2.1l-2.3-6A16.49,16.49,0,0,1,713.7,221.7ZM737.6,55.3,746,52v72.8h-6.8L738,118h-.4c-3.1,4.4-8,7.8-16,7.8-12.7,0-21.1-8.9-21.1-26.5s8.4-26.7,21.2-26.7c8,0,12.7,3.3,15.9,7.6h.6c-.2-1.6-.6-5.7-.6-7.6h0Zm.1,45.6h0V99.4c0-12.7-3.5-19.8-14.8-19.8-9.1,0-13.6,7.8-13.6,19.9s4.5,19.3,13.7,19.3C733.7,118.8,737.7,112.9,737.7,100.9Zm255.8,81.8a35.58,35.58,0,0,1,11.1,2.4l2.7-7a33.5,33.5,0,0,0-13.6-2.8c-13.8,0-24,7.9-24,26.9,0,18.2,9.8,26.4,23.5,26.4,5.9,0,11-1.3,13.9-3.1l-2.6-6.7a26.57,26.57,0,0,1-11.4,2.5c-9.7,0-14.7-6.8-14.7-19.2C978.4,189.3,983.3,182.7,993.5,182.7Zm-326-87.2,2.9,7.5h23.2l-2.9-7.5ZM910.2,203c0,12-3.7,18.6-15.1,18.6-7.8,0-11.4-4.1-11.4-12.3v-33h-8.5v33.6c0,13.1,6.3,18.7,18.7,18.7,6.6,0,13-2.4,16.3-7.8h.4l1.2,6.8h6.8V176.3h-8.4Zm132.9-27.7c-6.6,0-12.7,2.7-16,8h-.6a57.81,57.81,0,0,0,.5-7.2l.1-21.4-8.4,3.2v69.6h8.4V201c0-12,3.5-18.7,15-18.7,7.9,0,11.5,4.2,11.5,12.4v32.8h8.3V194.1C1061.9,180.9,1055.5,175.3,1043.1,175.3Zm-84.1.1h0c-7.2,0-12.5,4.7-15.7,10.3h-.4l-1-9.4H935v51.3h8.4V200.2c0-10.3,6.9-17.2,14.9-17.2a34,34,0,0,1,5.6.7l1-7.8A22.94,22.94,0,0,0,959,175.4ZM524.5,198.5v5.1H489.3c.3,11.6,6.1,17.8,16.4,17.8a39.92,39.92,0,0,0,14.1-2.5l2.4,6.3a39.3,39.3,0,0,1-16.9,3.4c-14.7,0-24.7-9.1-24.7-26.2,0-16.9,9.1-27,22.7-27C516.4,175.3,524.5,184.5,524.5,198.5Zm-8.8-1.7c-.1-8.7-3.9-14.6-12.5-14.6-8,0-12.8,5.5-13.7,14.6ZM557,92h0v32.9h8.4V91.5c0-13.3-6.4-18.9-18.6-19-6.5,0-12.9,2.6-16.2,8h-.5l-1.2-7h-6.8v51.3h8.4V98.2c0-12,3.6-18.6,15-18.6C553.4,79.6,557,83.8,557,92ZM389.2,125.8c-14.7,0-24.7-9.1-24.7-26.2,0-16.9,9.1-27,22.7-27,13,0,21.1,9.2,21.1,23.2v5.1H373.2c.3,11.6,6.1,17.8,16.4,17.8a39.92,39.92,0,0,0,14.1-2.5l2.4,6.3A38,38,0,0,1,389.2,125.8ZM373.3,94.1h26.2c-.1-8.7-3.9-14.7-12.5-14.7C379,79.5,374.2,84.9,373.3,94.1Zm82.1,112.3c-1.4,4.1-3.6,10.4-4.3,13.6h-.4a105.87,105.87,0,0,0-4.1-13.6l-10.9-30.2h-9l19.4,51.2h9.7l19.5-51.3h-9ZM410.1,158l8.4-3.3v72.8h-6.8l-1.2-6.9h-.4c-3.1,4.4-8,7.9-16,7.9-12.7.1-21.1-8.9-21.1-26.5s8.4-26.7,21.2-26.7c8,0,12.7,3.4,15.9,7.6h.6c-.2-1.6-.6-5.6-.6-7.6Zm.1,44.1c0-12.7-3.5-19.8-14.9-19.8-9.1,0-13.6,7.8-13.6,19.9s4.5,19.4,13.7,19.4c10.8-.1,14.8-6,14.8-18Zm152.1-26.8c-6.5,0-12.9,2.6-16.2,8h-.5l-1.2-7h-6.8v51.3H546V201c0-12,3.6-18.6,15-18.6,7.9,0,11.5,4.2,11.5,12.4v32.8h8.3V194.2C580.8,180.9,574.5,175.3,562.3,175.3Zm109.2,22.9h0c-9.9-3.8-13.2-5.5-13.2-9.8,0-3.8,3.7-6.2,10.6-6.2a37.56,37.56,0,0,1,14.4,3.4l2.6-6.8a40.3,40.3,0,0,0-16.4-3.5c-11.4,0-19.2,4.9-19.2,13.6,0,8.4,5.9,11.4,15.9,15.3s12.6,6.2,12.6,10c0,4.6-3.7,7.6-12.2,7.6a38.54,38.54,0,0,1-13.8-3l-2.5,6.5c3.9,2.2,8.9,3.3,16.1,3.3,12.6,0,20.5-5.2,20.5-15.2C686.9,205.2,681.4,202,671.5,198.2Zm-69.9-80.5a16.25,16.25,0,0,1-5.8,1.2c-4.7,0-8-3-8-9.2V80h14.9V73.5H587.9V61.7l-8.4,3.2v45c0,12.5,7,15.9,15,15.9,3.9,0,7.6-.9,9.4-2.1Zm27.2,109.9h8.4V176.3h-8.4Zm4.3-70.6c-2.8,0-5,1.7-5,5.4s2.2,5.4,5,5.4c2.6,0,4.9-1.8,4.9-5.4C638,158.6,635.7,157,633.1,157Zm-21.9,64.6h0c-4.7,0-8-3-8-9.2V182.7h14.9v-6.5H603.3V164.4l-8.4,3.2v45c0,12.5,7,15.9,15,15.9a20.15,20.15,0,0,0,9.4-2.1l-2.3-6A14.28,14.28,0,0,1,611.2,221.6Z",
    fill: fill
  }));
}

SDAWithIcon.propTypes = {
  fill: PropTypes.string
};
SDAWithIcon.defaultProps = {
  fill: '#fb23c2'
};

var logos = {
  gain: Gain,
  sda: SDA,
  'sda-arabic': SDAArabic,
  'sda-with-icon': SDAWithIcon // Available logo names

};
var logoNames = Object.keys(logos);

function Logo(_ref) {
  var name = _ref.name,
      props = _objectWithoutProperties(_ref, ["name"]);

  var Logo = logos[name] || logos['sda'];
  return React__default.createElement(Logo, props);
}

Logo.propTypes = {
  name: PropTypes.oneOf(logoNames),
  fill: PropTypes.oneOf(svgFillColors),
  fillAccent: PropTypes.string
};

function Picture(_ref) {
  var image = _ref.image,
      lazy = _ref.lazy;
  if (!image || !image.srcSet) return null;
  var alt = image.alt,
      srcSet = image.srcSet;

  var defaultImage = srcSet.default,
      otherImages = _objectWithoutProperties(srcSet, ["default"]);

  var sources = Object.keys(otherImages).reverse().map(function (size, i) {
    return React__default.createElement("source", {
      key: i,
      media: "(min-width: ".concat(size, "px)"),
      srcSet: otherImages[size]
    });
  });
  return React__default.createElement("picture", {
    className: "picture"
  }, sources, React__default.createElement(Image, {
    alt: alt,
    itemProp: "image",
    lazy: lazy,
    src: defaultImage
  }));
}

Picture.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    srcSet: PropTypes.object.isRequired
  }),
  lazy: PropTypes.bool
};
Picture.defaultProps = {
  image: {
    default: ''
  }
};

/**
 * Renders an array of items using a component
 *
 * @param {Array} items List of items to loop through
 * @param {ReactComponent} Component React Component used to render every item
 * @param {Object} props Extra props to be provided to every item
 */

function renderItems(items, Component, props) {
  return items && items.map(function (item, key) {
    return React__default.createElement(Component, _extends({}, props, item, {
      key: key
    }));
  });
}

function Definition(_ref) {
  var items = _ref.items;
  return React__default.createElement("dl", null, renderItems(items, function (_ref2) {
    var text = _ref2.text,
        title = _ref2.title;
    return React__default.createElement(React__default.Fragment, null, React__default.createElement("dt", {
      className: "u-padding--top"
    }, title), React__default.createElement("dd", {
      className: "u-padding--bottom"
    }, text));
  }));
}

Definition.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }))
};
Definition.defaultProps = {
  items: []
};

function Inline(_ref) {
  var items = _ref.items;
  return React__default.createElement("ul", {
    className: "o-inline-list"
  }, renderItems(items, function (_ref2) {
    var text = _ref2.text;
    return React__default.createElement("li", null, text);
  }));
}

Inline.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  }))
};
Inline.defaultProps = {
  items: []
};

function DefaultDropcap(_ref) {
  var letter = _ref.letter;
  return React__default.createElement("span", {
    className: "dropcap"
  }, letter);
}

DefaultDropcap.propTypes = {
  letter: PropTypes.string.isRequired
};

function setDropcapInChildren(child, Dropcap) {
  var found = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var setFound = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var _child$props = child.props,
      children = _child$props.children,
      otherProps = _objectWithoutProperties(_child$props, ["children"]);

  return React.cloneElement(child, _objectSpread({
    children: withChildren(children, Dropcap, found, setFound)
  }, otherProps));
}

function withChildren(children, Dropcap, parentFound, setParentFound) {
  var found = parentFound; // Inform siblings (and ancestors) that a canidate for dropcap has been found

  function setFound() {
    found = true;
    if (setParentFound) setParentFound();
  }

  return React__default.Children.map(children, function (child) {
    // If still not found and is a string...
    if (!found && typeof child === 'string') {
      // Inform that we found it!
      setFound(); // extract first characher and rest of text

      var firstChar = child[0];
      var rest = child.substring(1); // Return a span with aria label (for screen readers),
      // and the dropcap firstChar with the rest of text

      return React__default.createElement("span", {
        "aria-label": child
      }, React__default.createElement(Dropcap, {
        letter: firstChar
      }), " ", rest);
    } // If child has prop, is because it's an element...


    if (child.props) {
      // ...and we need to look into its children for text
      return setDropcapInChildren(child, Dropcap, found, setFound);
    } else {
      // At this point, child should be another text, so we can return it
      return child;
    }
  });
}

var defaults = {
  Dropcap: DefaultDropcap,
  enabled: true,
  tag: 'p'
};

function useDropcap(children) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _defaults$config = _objectSpread({}, defaults, config),
      Dropcap = _defaults$config.Dropcap,
      enabled = _defaults$config.enabled,
      tag = _defaults$config.tag; // Return children directly if it's not enabled


  if (!enabled) return children;
  var firstTag = false;
  return React__default.Children.map(children, function (child) {
    // Look for first element that matches the tag (usually a <p>)
    if (!firstTag && child.type === tag) {
      // Inform we found one
      firstTag = true; // Then look for and set the Dropcap whithin children

      return setDropcapInChildren(child, Dropcap);
    } else {
      // For the rest, just return the child
      return child;
    }
  });
}

function Dropcap(_ref) {
  var letter = _ref.letter;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("span", {
    className: "o-dropcap u-theme--background-color--base",
    "data-letter": letter
  }), React__default.createElement("span", {
    hidden: true
  }, letter));
}

Dropcap.propTypes = {
  letter: PropTypes.string
};
Dropcap.defaultProps = {};

function Text(_ref) {
  var as = _ref.as,
      children = _ref.children,
      className = _ref.className,
      hasDropcap = _ref.hasDropcap,
      props = _objectWithoutProperties(_ref, ["as", "children", "className", "hasDropcap"]);

  var content = useDropcap(children, {
    Dropcap: Dropcap,
    enabled: hasDropcap
  });
  var dropcap = hasDropcap ? 'has-dropcap' : '';
  return React__default.createElement(Element, _extends({}, props, {
    tag: as,
    className: "".concat(className, " text ").concat(dropcap)
  }), content);
}

Text.propTypes = _objectSpread({}, Element.propTypes, {
  as: PropTypes.oneOf(['article', 'div', 'p', 'section', 'span']),
  children: PropTypes.node,
  hasDropcap: PropTypes.bool
});
Text.defaultProps = {
  as: 'div'
};

function ListItem(_ref) {
  var text = _ref.text,
      unorderedItems = _ref.unorderedItems,
      orderedItems = _ref.orderedItems;
  return React__default.createElement("li", null, text, unorderedItems && React__default.createElement("ul", null, renderItems(unorderedItems, ListItem)), orderedItems && React__default.createElement("ol", null, renderItems(orderedItems, ListItem)));
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  unorderedItems: PropTypes.array,
  orderedItems: PropTypes.array
};
ListItem.defaultProps = {
  unorderedItems: [],
  orderedItems: []
};

function List(_ref2) {
  var items = _ref2.items,
      as = _ref2.as;
  return React__default.createElement(Text, null, React__default.createElement(Element, {
    tag: as
  }, renderItems(items, ListItem)));
}

List.propTypes = {
  items: PropTypes.array,
  as: PropTypes.oneOf(['ol', 'ul'])
};
List.defaultProps = {
  items: [],
  as: 'ul'
};

function Video(_ref) {
  var src = _ref.src,
      width = _ref.width,
      height = _ref.height;
  return React__default.createElement("iframe", {
    src: src,
    width: width,
    height: height,
    frameBorder: "0",
    webkitallowfullscreen: "true",
    mozallowfullscreen: "true",
    allowFullScreen: true
  });
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};
Video.defaultProps = {
  width: 600,
  height: 338
};

function Table(_ref) {
  var title = _ref.title,
      columns = _ref.columns,
      rows = _ref.rows,
      slim = _ref.slim;
  return React__default.createElement("table", {
    className: "u-spacing ".concat(slim ? 'o-table-slim' : '', " u-border")
  }, title && React__default.createElement("caption", null, title), React__default.createElement("thead", null, React__default.createElement("tr", null, columns.map(function (header, col) {
    return React__default.createElement("th", {
      tabIndex: "0",
      scope: "col",
      title: title,
      key: "column-".concat(col)
    }, header);
  }))), React__default.createElement("tbody", null, rows.map(function (cells, row) {
    return React__default.createElement("tr", {
      tabIndex: "0",
      key: "row-".concat(row)
    }, cells.map(function (content, cell) {
      return React__default.createElement("td", {
        tabIndex: "0",
        key: "row-".concat(row, "-").concat(cell)
      }, content);
    }));
  })));
}

Table.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.array,
  rows: PropTypes.array,
  slim: PropTypes.bool
};
Table.defaultProps = {
  columns: [],
  rows: [],
  slim: false
};

function Blockquote(_ref) {
  var children = _ref.children,
      text = _ref.text;
  return React__default.createElement("blockquote", {
    className: "pullquote u-theme--border-color--darker--left u-theme--color--darker u-padding--right"
  }, children ? children : React__default.createElement("p", null, text));
}

Blockquote.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string
};

function Caption(_ref) {
  var children = _ref.children,
      text = _ref.text;
  return React__default.createElement("div", {
    className: "o-caption u-color--gray u-font--secondary--s"
  }, children || text);
}

Caption.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string
};

function Intro(_ref) {
  var children = _ref.children,
      text = _ref.text;
  return React__default.createElement("p", {
    className: "o-intro text"
  }, children || text);
}

Intro.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string
};

function Kicker(_ref) {
  var color = _ref.color,
      text = _ref.text;
  return React__default.createElement("span", {
    className: "u-theme--color--".concat(color)
  }, React__default.createElement("em", null, text));
}

Kicker.propTypes = {
  color: PropTypes.oneOf(['base', 'darker']),
  text: PropTypes.string.isRequired
};
Kicker.defaultProps = {
  color: 'base'
};

function Section(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return React__default.createElement("section", _extends({
    className: "c-section c-section__blocks ".concat(className)
  }, props), children);
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
Section.defaultProps = {
  className: ''
};

function Title(_ref) {
  var as = _ref.as,
      children = _ref.children,
      className = _ref.className,
      kicker = _ref.kicker,
      kickerColor = _ref.kickerColor,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, ["as", "children", "className", "kicker", "kickerColor", "text"]);

  return React__default.createElement(Element, _extends({
    tag: as,
    className: className
  }, props), kicker && React__default.createElement(Kicker, {
    text: kicker,
    color: kickerColor
  }), ' ', text || children);
}

Title.propTypes = _objectSpread({
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
  children: PropTypes.node,
  kicker: PropTypes.string,
  kickerColor: Kicker.propTypes.color,
  text: PropTypes.string
}, Element.propTypes);
Title.defaultProps = {
  as: 'h2',
  className: '',
  fontSize: 's',
  fontType: 'primary',
  themeColor: 'darker'
};

// Atoms:

function BreakoutBlock(_ref) {
  var title = _ref.title,
      description = _ref.description,
      cta = _ref.cta,
      url = _ref.url,
      blockClass = _ref.blockClass;
  return React__default.createElement("div", {
    className: "c-block__breakout u-padding u-padding--double--bottom u-padding--double--top u-spacing u-theme--background-color--darker ".concat(blockClass)
  }, React__default.createElement("h3", {
    className: "c-block__title u-color--white"
  }, title), React__default.createElement("p", {
    className: "c-block__body u-theme--color--lighter"
  }, description), cta && url && React__default.createElement(Button, {
    as: "a",
    text: cta,
    url: url,
    lighter: true
  }));
}

BreakoutBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  cta: PropTypes.string,
  url: PropTypes.string,
  blockClass: PropTypes.string
};
BreakoutBlock.defaultProps = {
  blockClass: 'can-be--dark-dark'
};

function InlineStyles(_ref) {
  var styles = _ref.styles;
  return React__default.createElement("style", {
    type: "text/css"
  }, styles);
}

InlineStyles.propTypes = {
  styles: PropTypes.string
};
InlineStyles.defaultProps = {
  styles: ''
};

/**
 * Given a rule, wraps it in a media query
 * @param {string} rule - A CSS rule that can be wrapped
 * @param {string} query - A media query expressions (`min-width`, `max-with`, etc.)
 */
function wrapMediaQuery(rule, query) {
  return query ? "\n@media(".concat(query, ") {\t").concat(rule, "\n}") : rule;
}
/**
 * Makes sure the "default: query is at the beginning.
 *
 * Example:
 * - Input keys:  ["500", "750", "1200", "default"]
 * - Output keys: ["default", "500", "750", "1200"]
 *
 * @param {Map} data
 */


function sortQueries(data) {
  var queries = [];

  var defaultQuery = data.default,
      others = _objectWithoutProperties(data, ["default"]);

  if (defaultQuery) queries.push('default');
  queries.push.apply(queries, _toConsumableArray(Object.keys(others)));
  return queries;
} // Define some default settings


var defaults$1 = {
  mediaFeature: 'min-width',
  unit: 'px'
  /**
   * Returns a string of css rules wraped in queries for the provided media queries
   *
   * @param {function} rule - Function that returns a CSS rule as string
   * @param {Map} data - Map with data that will be used by `rule()` for a specific media query
   * @param {String} mediaFeature - default media features
   */

};

function useResponsiveStyles(rule, data) {
  var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaults$1;
  // Bailout when there is no data
  if (!data) return null;
  var mediaFeature = settings.mediaFeature,
      unit = settings.unit;
  var styles = sortQueries(data).map(function (source) {
    var size = source === 'default' ? null : source;
    return wrapMediaQuery(rule(data[source]), size ? "".concat(mediaFeature, ": ").concat(size).concat(unit) : null);
  });
  return styles.join('');
}

var getBackgroundImageRule = function getBackgroundImageRule(url) {
  return ".o-background-image {\n  background-image: url('".concat(url, "');\n}");
};

function MediaImage(_ref) {
  var asBackgroundImage = _ref.asBackgroundImage,
      blockIconType = _ref.blockIconType,
      className = _ref.className,
      image = _ref.image,
      url = _ref.url,
      wrapClass = _ref.wrapClass;
  var bgImageStyles = useResponsiveStyles(getBackgroundImageRule, image.srcSet);
  return React__default.createElement("div", {
    className: "c-media-block__image c-block__image ".concat(className, " ").concat(blockIconType ? "c-block__icon c-block__icon--".concat(blockIconType) : '', " ").concat(asBackgroundImage ? ' o-background-image u-background--cover' : '')
  }, asBackgroundImage && bgImageStyles && React__default.createElement(InlineStyles, {
    styles: bgImageStyles
  }), React__default.createElement("div", {
    className: "c-block__image-wrap ".concat(wrapClass)
  }, React__default.createElement("a", {
    href: url,
    title: image.caption || image.alt
  }, React__default.createElement(Picture, {
    image: image
  }))));
}

MediaImage.propTypes = {
  asBackgroundImage: PropTypes.bool,
  blockIconType: PropTypes.string,
  className: PropTypes.string,
  image: Picture.propTypes.image,
  url: PropTypes.string,
  wrapClass: PropTypes.string
};
MediaImage.defaultProps = {
  className: '',
  wrapClass: ''
};

/**
 * Hook to toggle boolean value
 *
 * @param {boolean} initial - Default open value (optional)
 * @param {string} openClass - Default open class name (optional)
 * @param {string} closedClass - Default closed class name (optional)
 * @returns {object} With attributes: onToggle (func), open (bool), openClass (string)
 */

function useToggle() {
  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var openClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'this-is-active';
  var closedClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var _useState = React.useState(initial),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setValue = _useState2[1];

  return {
    onToggle: function onToggle() {
      return setValue(!open);
    },
    open: open,
    openClass: open ? openClass : closedClass
  };
}

function ContentBlock(_ref) {
  var category = _ref.category,
      className = _ref.className,
      cta = _ref.cta,
      description = _ref.description,
      descriptionClass = _ref.descriptionClass,
      image = _ref.image,
      more = _ref.more,
      title = _ref.title,
      titleClass = _ref.titleClass,
      titleStrong = _ref.titleStrong,
      url = _ref.url;

  var _useToggle = useToggle(),
      onToggle = _useToggle.onToggle,
      openClass = _useToggle.openClass;

  var classes = ['c-block', 'c-block__text'];
  if (more) classes.push('c-block__text-expand');
  if (image) classes.push('has-image');
  if (openClass) classes.push(openClass);
  if (className) classes.push(className);
  var classNames = classes.join(' ');
  var moreProps = more ? {
    canBe: 'dark-dark',
    clearFix: true,
    padding: true,
    backgroundColor: 'gray--light'
  } : {};
  return React__default.createElement(Element, _extends({
    className: classNames,
    borderSide: "left",
    spacing: true,
    themeBorder: "darker"
  }, moreProps), image && React__default.createElement(MediaImage, {
    image: image,
    url: url
  }), React__default.createElement(Title, {
    as: "h3",
    className: titleClass,
    fontSize: "m",
    strong: titleStrong,
    text: title,
    themeColor: "darker"
  }, url ? React__default.createElement("a", {
    className: "c-block__title-link u-theme--link-hover--dark",
    href: url
  }, React__default.createElement("strong", null, title)) : React__default.createElement("strong", null, title)), description && React__default.createElement(Text, {
    as: "p",
    className: "c-block__body ".concat(descriptionClass)
  }, description), category && React__default.createElement(Element, {
    as: "span",
    className: "c-block__meta",
    themeColor: "dark",
    fontSize: "xs",
    fontType: "secondary"
  }, category), more ? React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    className: "c-block__content"
  }, React__default.createElement("p", null, more)), React__default.createElement(Button, {
    as: "a",
    className: openClass,
    expand: true,
    onClick: onToggle,
    outline: true,
    toggle: true
  })) : cta && url && React__default.createElement(Button, {
    as: "a",
    text: cta,
    url: url,
    className: "c-block__button",
    iconClass: "u-space--half--left",
    icon: "arrow-long-right",
    outline: true
  }));
}

ContentBlock.propTypes = {
  category: PropTypes.string,
  className: PropTypes.string,
  cta: PropTypes.string,
  description: PropTypes.string,
  descriptionClass: PropTypes.string,
  image: MediaImage.propTypes.image,
  more: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleClass: PropTypes.string,
  titleStrong: PropTypes.bool,
  url: PropTypes.string
};
ContentBlock.defaultProps = {
  className: '',
  descriptionClass: '',
  titleClass: ''
};

function ContentBlockExpand(_ref) {
  var kicker = _ref.kicker,
      title = _ref.title,
      description = _ref.description;

  var _useToggle = useToggle(),
      onToggle = _useToggle.onToggle,
      openClass = _useToggle.openClass;

  return React__default.createElement("div", {
    className: "c-block c-block c-block__expand u-background-color--gray--light u-border--left u-theme--border-color--darker--left can-be--dark-dark ".concat(openClass)
  }, React__default.createElement("div", {
    className: "c-block__header"
  }, React__default.createElement("div", {
    className: "c-block__title u-padding"
  }, title && React__default.createElement(Title, {
    text: title,
    kicker: kicker
  }), React__default.createElement("div", {
    className: "c-block__toggle"
  }, React__default.createElement(Button, {
    as: "button",
    className: openClass,
    icon: "plus",
    iconFill: "white",
    onClick: onToggle,
    outline: true,
    small: true,
    toggle: true
  })))), React__default.createElement("div", {
    className: "c-block__body u-padding u-padding--zero--top u-spacing"
  }, React__default.createElement("p", null, description)));
}

ContentBlockExpand.propTypes = {
  title: PropTypes.string.isRequired,
  kicker: PropTypes.string,
  description: PropTypes.string
};

function GalleryBlock(_ref) {
  var images = _ref.images,
      kicker = _ref.kicker,
      title = _ref.title;

  var _useToggle = useToggle(),
      onToggle = _useToggle.onToggle,
      openClass = _useToggle.openClass;

  var thumbImage = images.length > 0 ? images[0] : null;
  var otherImages = images.length > 1 ? images.slice(1) : null;
  return React__default.createElement("div", {
    className: "c-gallery-block c-block u-background-color--gray--light u-border--left u-theme--border-color--darker--left can-be--dark-dark ".concat(openClass)
  }, React__default.createElement("div", {
    className: "c-gallery-block__header"
  }, React__default.createElement("div", {
    className: "c-gallery-block__title u-padding u-spacing--half"
  }, title && React__default.createElement(Title, {
    text: title,
    kicker: kicker
  }), otherImages && React__default.createElement(Button, {
    as: "button",
    className: "c-gallery-block__toggle ".concat(openClass),
    icon: "plus",
    iconFill: "white",
    onClick: onToggle,
    outline: true,
    small: true,
    toggle: true
  })), thumbImage && React__default.createElement("div", {
    className: "c-gallery-block__thumb u-background--cover",
    style: {
      backgroundImage: "url(".concat(thumbImage.srcSet.default, ")"),
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }
  })), otherImages && React__default.createElement("div", {
    className: "c-gallery-block__body"
  }, otherImages.map(function (image, key) {
    return React__default.createElement("div", {
      className: "c-gallery-block__image ".concat(image.portrait ? 'is-portrait' : ''),
      key: key
    }, React__default.createElement(Picture, {
      image: image
    }), image.caption && React__default.createElement("div", {
      className: "c-gallery-block__caption u-font--secondary--s u-color--gray u-padding u-padding--double--bottom"
    }, image.caption));
  })));
}

GalleryBlock.propTypes = {
  images: PropTypes.arrayOf(Picture.propTypes.image),
  title: PropTypes.string.isRequired,
  kicker: PropTypes.string
};
GalleryBlock.defaultProps = {
  images: []
};

function HeadingBlock(_ref) {
  var linkText = _ref.linkText,
      title = _ref.title,
      url = _ref.url;
  return React__default.createElement(Element, {
    className: "c-block__heading",
    themeBorder: "darker"
  }, React__default.createElement(HeadingThree, {
    className: "c-block__heading-title",
    themeColor: "darker"
  }, title), url && linkText && React__default.createElement(Link, {
    href: url,
    className: "c-block__heading-link u-theme--link-hover--dark",
    themeColor: "base",
    themeLinkHover: "dark"
  }, linkText));
}

HeadingBlock.propTypes = _objectSpread({
  linkText: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string
}, Element.propTypes);

function Figcaption(_ref) {
  var caption = _ref.caption,
      children = _ref.children;
  return React__default.createElement("figcaption", {
    className: "o-figcaption"
  }, React__default.createElement("p", {
    className: "o-caption u-color--gray u-font--secondary--s"
  }, caption || children));
}

Figcaption.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.string
};

function Figure(_ref) {
  var caption = _ref.caption,
      className = _ref.className,
      image = _ref.image,
      videoSrc = _ref.videoSrc;
  return React__default.createElement("figure", {
    className: "o-figure ".concat(className)
  }, image && React__default.createElement("div", {
    className: "o-figure__image"
  }, React__default.createElement(Picture, {
    image: image
  })), videoSrc && React__default.createElement("div", {
    className: "u-image--wrap fitvid"
  }, React__default.createElement(Video, {
    src: videoSrc
  })), caption && React__default.createElement("div", {
    className: "o-figure__caption"
  }, React__default.createElement(Figcaption, null, caption)));
}

Figure.propTypes = {
  caption: PropTypes.string,
  className: PropTypes.string,
  image: Picture.propTypes.image,
  videoSrc: PropTypes.string
};
Figure.defaultProps = {
  className: ''
};

var dateFormats = ['date', 'time', 'datetime'];
/**
 * Converts a date/string into a formatted one
 *
 * @param {String} datetime Timestamp, String
 * @param {String} format One of `date`, `time` or `datetime`
 *
 * @returns {String}
 */

function dateTimeFormat(datetime, format) {
  var date = new Date(datetime);

  switch (format) {
    case 'date':
      return date.toLocaleDateString();

    case 'time':
      return date.toLocaleTimeString();

    default:
      return date.toLocaleString();
  }
}
/**
 * DateTimeFormat to be used as a React Component
 *
 * @param {object} props
 */


function DateTimeFormat(_ref) {
  var datetime = _ref.datetime,
      format = _ref.format;
  return dateTimeFormat(datetime, format);
}

DateTimeFormat.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  dateFormat: PropTypes.oneOf(dateFormats)
};

var mediaBlocksTypes = ['column', 'feature', 'full', 'inline', 'inset', 'longform', 'row', 'stacked'];
var defaultClasses = {
  image: '',
  imageWrap: '',
  content: '',
  group: '',
  kicker: '',
  title: '',
  meta: ''
};
var presetClasses = {
  column: {
    content: 'u-color--white',
    group: 'u-flex--justify-center u-overlay--dark',
    title: 'u-font--primary--xl u-flex--justify-center'
  },
  feature: {
    block: 'c-block__inline c-media-block__inine c-block--reversed c-media-block--reversed l-grid--7-col',
    content: 'l-grid-item u-border-left--black--at-large u-theme--border-color--darker--left u-theme--color--lighter u-theme--background-color--darker u-padding--top u-padding--bottom',
    image: 'l-grid-item u-padding--zero--sides',
    title: 'u-color--white u-font--primary u-font-weight--bold'
  },
  full: {
    content: 'l-grid--7-col l-grid-wrap l-grid-wrap--7-of-7 u-color--white',
    group: 'u-flex--justify-center u-flex--align-center u-text-align--center u-overlay--dark',
    title: 'l-grid-item--5-col l-grid-item--m--2-col u-font--primary--xl u-flex--justify-center'
  },
  inline: {
    image: 'u-padding--zero--sides',
    content: 'u-color--gray u-background-color--gray--light u-padding--top u-padding--bottom',
    title: 'u-theme--color--darker',
    meta: 'u-theme--color--dark'
  },
  inset: {
    content: 'l-grid--7-col u-theme--background-color--darker',
    title: 'l-grid-item l-grid-item--m--4-col u-link-hover--white',
    meta: 'l-grid-item l-grid-item--m--2-col'
  },
  longform: {
    block: ' l-grid--7-col l-grid-wrap u-theme--background-color--darker can-be--dark-dark u-padding--top u-padding--bottom',
    type: 'inline',
    content: 'u-shift--left--1-col--at-large l-grid-item l-grid-item--m--6-col l-grid-item--l--4-col l-grid-item--xl--3-col u-border--left u-theme--border-color--light--left u-theme--color--lighter',
    title: 'u-color--white u-font--primary--l'
  },
  row: {
    content: 'u-color--gray',
    title: 'u-theme--color--darker',
    meta: 'u-theme--color--dark'
  },
  stacked: {}
};
var borderClasses = {
  left: 'u-border--left u-theme--border-color--darker--left',
  leftAtLarge: 'u-border-left--black--at-large u-theme--border-color--darker--left'
};

function MediaBlock(_ref) {
  var asBackgroundImage = _ref.asBackgroundImage,
      blockIconType = _ref.blockIconType,
      border = _ref.border,
      category = _ref.category,
      cta = _ref.cta,
      ctaIcon = _ref.ctaIcon,
      date = _ref.date,
      dateFormat = _ref.dateFormat,
      description = _ref.description,
      image = _ref.image,
      kicker = _ref.kicker,
      reversed = _ref.reversed,
      title = _ref.title,
      type = _ref.type,
      video = _ref.video,
      url = _ref.url;

  // Get classes including ones for current type (if provided)
  var classes = _objectSpread({}, defaultClasses, type ? presetClasses[type] : {}); // Set block classes


  var blockType = classes.type || type;
  var blockClass = "c-media-block c-block c-media-block__".concat(blockType, " c-block__").concat(blockType, " ").concat(reversed ? ' c-block--reversed c-media-block--reversed`' : '', " ").concat(classes.block); // Set border clases

  var borderClass = border === 'left' ? type === 'stacked' ? borderClasses.left : type === 'inline' || type === 'reversed' ? borderClasses.leftAtLarge : '' : '';
  return React__default.createElement("div", {
    className: blockClass
  }, image && React__default.createElement(MediaImage, {
    asBackgroundImage: asBackgroundImage,
    blockIconType: blockIconType,
    className: classes.image,
    image: image,
    url: url,
    wrapClass: classes.imageWrap
  }), video && React__default.createElement("div", {
    className: "c-block__image-wrap"
  }, React__default.createElement(Figure, {
    videoSrc: video
  })), React__default.createElement("div", {
    className: "c-media-block__content c-block__content u-spacing ".concat(classes.content, " ").concat(borderClass)
  }, React__default.createElement("div", {
    className: "c-block__group c-media-block__group u-spacing ".concat(classes.group)
  }, React__default.createElement("div", {
    className: "u-width--100p u-spacing"
  }, kicker && React__default.createElement("h4", {
    className: "c-media-block__kicker c-block__kicker u-space--quarter--bottom ".concat(classes.kicker)
  }, kicker), title && React__default.createElement("h3", {
    className: "c-media-block__title c-block__title ".concat(classes.title, " ").concat(kicker ? 'u-space--zero' : '')
  }, url ? React__default.createElement("a", {
    href: url,
    className: "c-block__title-link u-theme--link-hover--dark"
  }, title) : title), description && React__default.createElement("p", {
    className: "c-media-block__description c-block__description"
  }, description)), (category || date) && React__default.createElement("div", {
    className: "c-media-block__meta c-block__meta ".concat(classes.meta)
  }, category && React__default.createElement("span", {
    className: "c-block__category u-text-transform--upper"
  }, category), date && React__default.createElement("time", {
    className: "c-block__date u-text-transform--upper",
    dateTime: date
  }, React__default.createElement(DateTimeFormat, {
    datetime: date,
    format: dateFormat
  }))), cta && url && React__default.createElement(Button, {
    as: "a",
    className: "c-block__button",
    icon: ctaIcon,
    iconSize: "m",
    outline: true,
    text: cta,
    url: url
  }))));
}

MediaBlock.propTypes = {
  asBackgroundImage: PropTypes.bool,
  blockIconType: PropTypes.oneOf(['audio', 'gallery', 'video']),
  border: PropTypes.oneOf(['left', 'none']),
  category: PropTypes.string,
  column: PropTypes.bool,
  cta: PropTypes.string,
  ctaIcon: Button.propTypes.icon,
  description: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  dateFormat: PropTypes.oneOf(dateFormats),
  image: MediaImage.propTypes.image,
  kicker: PropTypes.string,
  url: PropTypes.string,
  reversed: PropTypes.bool,
  type: PropTypes.oneOf(mediaBlocksTypes),
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  video: PropTypes.node
};
MediaBlock.defaultProps = {
  asBackgroundImage: false,
  border: 'none',
  ctaIcon: 'arrow-long-right',
  dateFormat: 'date',
  type: 'row'
};

function AccordionItem(_ref) {
  var heading = _ref.heading,
      content = _ref.content;

  var _useToggle = useToggle(),
      onToggle = _useToggle.onToggle,
      openClass = _useToggle.openClass;

  return React__default.createElement("div", {
    className: "c-accordion__item u-spacing--half u-border--left u-padding--half--left ".concat(openClass)
  }, React__default.createElement("div", {
    className: "c-accordion__heading u-font--primary--m u-theme--color--darker",
    onClick: onToggle
  }, React__default.createElement("span", {
    className: "u-icon u-icon--m c-accordion__arrow u-space--half--right u-theme--path-fill--darker"
  }, React__default.createElement(Icon, {
    name: "arrow-bracket-right"
  })), React__default.createElement("strong", null, heading)), React__default.createElement("div", {
    className: "c-accordion__content u-padding--half--left"
  }, content));
}

AccordionItem.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired
};

function Accordion(_ref2) {
  var items = _ref2.items,
      className = _ref2.className;
  return React__default.createElement("div", {
    className: "c-accordion u-position--relative u-spacing ".concat(className)
  }, renderItems(items, AccordionItem));
}

Accordion.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array
};
Accordion.defaultProps = {
  className: '',
  items: []
};

function SliderArrow(_ref) {
  var className = _ref.className,
      prev = _ref.prev,
      next = _ref.next,
      props = _objectWithoutProperties(_ref, ["className", "prev", "next"]);

  var isPrev = prev && !next;
  return React__default.createElement("span", _extends({}, props, {
    className: "c-arrow c-arrow--".concat(isPrev ? 'prev' : 'next', " u-icon u-icon--s u-theme--color--darker slick-arrow slick-").concat(isPrev ? 'prev' : 'next', " ").concat(className),
    "aria-label": isPrev ? 'Previous' : 'Next'
  }), isPrev ? '‹' : '›');
}

SliderArrow.propTypes = {
  className: PropTypes.string,
  prev: PropTypes.bool,
  next: PropTypes.bool
};
SliderArrow.defaultProps = {
  className: '',
  prev: true,
  next: false
};

/**
 * Extracted from Dan Abramov post:
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
function useInterval(callback, delay) {
  var savedCallback = React.useRef(); // Remember the latest callback.

  React.useEffect(function () {
    savedCallback.current = callback;
  }); // Set up the interval.

  React.useEffect(function () {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }
  }, [delay]);
}

/**
 * Debounced resize to throttle execution
 * @param func
 * @param wait
 * @returns {Function}
 */
function debounce(func, wait) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (!timeout) func.apply(context, args);
  };
}

/**
 * Hook that runs a callback during window's resize event (debounced)
 *
 * @param {String} event Window event name (`resize`, `scroll`, etc.)
 * @param {Function} callback Funtion to be called in event
 * @param {Number} wait Time to wait for run the callback again (in milliseconds)
 * @param {Boolean} inmediate Should callback be run at start
 */

function useWindowEvent(event, callback) {
  var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  var inmediate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // if wait is not 0, set a debounced version of callback
  var debouncedCallback = wait > 0 ? debounce(callback, wait) : callback;
  React.useEffect(function () {
    // If window is not available (SSR), or event nor callback are not present, bail out
    if (!window || !event || !callback) return function () {
      return null;
    }; // Inmediate run

    inmediate && callback(); // Set the event listener

    window.addEventListener(event, debouncedCallback); // Cleanup listener on unmount

    return function () {
      return window.removeEventListener(event, debouncedCallback);
    };
  }, []);
}

var getSwipeDirection = function getSwipeDirection() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var minSwipe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var _start = _slicedToArray(start, 2),
      x1 = _start[0],
      y1 = _start[1];

  var _end = _slicedToArray(end, 2),
      x2 = _end[0],
      y2 = _end[1];

  var xDist = x1 - x2;
  var yDist = y1 - y2;

  if (isNaN(xDist) || isNaN(yDist) || Math.abs(xDist) < minSwipe) {
    return 0;
  }

  var r = Math.atan2(yDist, xDist);
  var swipeAngle = Math.round(r * 180 / Math.PI);

  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }

  if (swipeAngle <= 45 && swipeAngle >= 0) {
    return 1;
  }

  if (swipeAngle <= 360 && swipeAngle >= 315) {
    return 1;
  }

  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return -1;
  }

  return 0;
};
/**
 * Hook for Slider
 *
 * @param {Array} slides Array of elements
 * @param {Object} settings Slider configuration
 */

function useSlider() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // Get total slides
  var totalSlides = children.length; // Get options from default and settings

  var _defaults$settings = _objectSpread({}, defaults$2, settings),
      autoplay = _defaults$settings.autoplay,
      autoplaySpeed = _defaults$settings.autoplaySpeed,
      easing = _defaults$settings.easing,
      fade = _defaults$settings.fade,
      initialSlide = _defaults$settings.initialSlide,
      pauseOnHover = _defaults$settings.pauseOnHover,
      responsive = _defaults$settings.responsive,
      showArrows = _defaults$settings.showArrows,
      showDots = _defaults$settings.showDots,
      slidesToScroll = _defaults$settings.slidesToScroll,
      slidesToShow = _defaults$settings.slidesToShow,
      speed = _defaults$settings.speed,
      touchMove = _defaults$settings.touchMove,
      touchThreshold = _defaults$settings.touchThreshold,
      zIndex = _defaults$settings.zIndex; // Set some states


  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      dots = _useState2[0],
      setDots = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      touchStartPos = _useState4[0],
      setTouchStartPos = _useState4[1];

  var _useState5 = React.useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      touchEndPos = _useState6[0],
      setTouchEndPos = _useState6[1];

  var _useState7 = React.useState(initialSlide < totalSlides ? initialSlide : 0),
      _useState8 = _slicedToArray(_useState7, 2),
      index = _useState8[0],
      setIndex = _useState8[1];

  var _useState9 = React.useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      initialized = _useState10[0],
      setInitialized = _useState10[1];

  var _useState11 = React.useState(0),
      _useState12 = _slicedToArray(_useState11, 2),
      minSwipe = _useState12[0],
      setMinSwipe = _useState12[1];

  var _useState13 = React.useState(false),
      _useState14 = _slicedToArray(_useState13, 2),
      paused = _useState14[0],
      setPaused = _useState14[1];

  var _useState15 = React.useState(null),
      _useState16 = _slicedToArray(_useState15, 2),
      slides = _useState16[0],
      setSlides = _useState16[1];

  var _useState17 = React.useState(slidesToShow),
      _useState18 = _slicedToArray(_useState17, 2),
      itemsToShow = _useState18[0],
      setItemsToShow = _useState18[1];

  var _useState19 = React.useState(slidesToScroll),
      _useState20 = _slicedToArray(_useState19, 2),
      itemsToScroll = _useState20[0],
      setItemsToScroll = _useState20[1];

  var _useState21 = React.useState(0),
      _useState22 = _slicedToArray(_useState21, 2),
      slideWidth = _useState22[0],
      setSlideWidth = _useState22[1]; // Set refs


  var sliderRef = React.useRef();
  var listRef = React.useRef();
  var trackRef = React.useRef(); // Set CSS transition

  var transition = "".concat(fade ? 'opacity' : 'transform', " ").concat(speed, "ms ").concat(easing); // Autoplay methods

  function onPause() {
    setPaused(true);
  }

  function onPlay() {
    setPaused(false);
  } // Nav methods


  function onPrev() {
    var prevIndex = index - itemsToScroll < 0 ? totalSlides - totalSlides % itemsToShow : index - itemsToScroll;
    setIndex(prevIndex);
  }

  function onNext() {
    var nextIndex = index + itemsToScroll >= totalSlides ? 0 : index + itemsToScroll;
    setIndex(nextIndex);
  } // Drag/Swipe methods


  function getTouchPos(event) {
    var touches = event.touches,
        clientX = event.clientX,
        clientY = event.clientY;

    var _ref = touches ? touches[0] : {},
        _ref$pageX = _ref.pageX,
        x = _ref$pageX === void 0 ? clientX : _ref$pageX,
        _ref$pageY = _ref.pageY,
        y = _ref$pageY === void 0 ? clientY : _ref$pageY;

    return [x, y];
  }

  function onSwipeStart(e) {
    setTouchStartPos(getTouchPos(e));
    setPaused(true);
  }

  function onSwipeMove(e) {
    setTouchEndPos(getTouchPos(e));
  }

  function onSwipeEnd() {
    var direction = getSwipeDirection(touchStartPos, touchEndPos, minSwipe);

    if (direction > 0) {
      onNext();
    } else if (direction < 0) {
      onPrev();
    }

    setTouchStartPos([]);
    setTouchEndPos([]);
    setPaused(false);
  } // Set touch events


  var touchEvents = touchMove ? {
    onMouseDown: onSwipeStart,
    onMouseMove: onSwipeMove,
    onMouseUp: onSwipeEnd,
    onMouseLeave: onSwipeEnd,
    onTouchStart: onSwipeStart,
    onTouchMove: onSwipeMove,
    onTouchEnd: onSwipeEnd,
    onTouchCancel: onSwipeEnd
  } : {}; // Set slide mouse events

  var slideEvents = pauseOnHover ? {
    onMouseEnter: onPause,
    onMouseLeave: onPlay
  } : {}; // UI Updaters

  function updateDots() {
    setDots(range(1, totalSlides).map(function (label, key) {
      return {
        active: key === index,
        key: key,
        label: "".concat(label),
        onClick: function onClick() {
          return setIndex(key);
        }
      };
    }));
  }

  function cloneSlide(slide, _ref2) {
    var active = _ref2.active,
        current = _ref2.current,
        style = _ref2.style;

    var _slide$props = slide.props,
        className = _slide$props.className,
        childProps = _objectWithoutProperties(_slide$props, ["className"]); // Set clases


    var classes = [className, 'slick-slide'];
    if (active) classes.push('slick-active');
    if (current) classes.push('slick-current');

    var slideProps = _objectSpread({
      'aria-hidden': !active,
      className: classes.join(' '),
      role: 'option',
      style: style,
      tabIndex: -1
    }, slideEvents);

    return React.cloneElement(slide, _objectSpread({}, slideProps, childProps));
  }

  function updateSlides() {
    var slides = React__default.Children.map(children, function (slide, i) {
      // calculate if is current
      var current = i === index;
      var active;
      var style;

      if (fade) {
        // Only current is active
        active = current; // - Fade Styles

        style = {
          left: i === 0 ? 0 : -(slideWidth * i),
          opacity: current ? 1 : 0.25,
          position: 'relative',
          top: 0,
          transition: current ? transition : 'none',
          zIndex: current ? zIndex + totalSlides + 10 : zIndex + i
        };
      } else {
        // Is active if is within the window (index <-> index + itemsToShow)
        active = i >= index && index + itemsToShow > i; // - Slide styles (default)

        var xPos = -slideWidth * index;
        style = {
          transition: transition,
          transform: "translate3d(".concat(xPos, "px, 0, 0)")
        };
      }

      return cloneSlide(slide, {
        active: active,
        current: current,
        style: _objectSpread({
          width: slideWidth
        }, style)
      });
    });
    setSlides(slides);
  }

  function onResize() {
    var sliderElem = sliderRef.current;
    var trackElem = trackRef.current;
    var listElem = listRef.current; // Calculate slider and list elements widths

    var listWidth = listElem.offsetWidth;
    var sliderWidth = sliderElem.offsetWidth; // Calculate and set min swipe based on list width and touch threashold

    if (!isNaN(touchThreshold) && touchThreshold > 0) {
      setMinSwipe(listWidth / touchThreshold);
    }

    var trackWidth = 0; // FADE:

    if (fade) {
      setSlideWidth(sliderWidth); // Calculate track width for fade

      trackWidth = sliderWidth * totalSlides;
    } // SLIDE:
    else {
        // Calculate mobile slide width
        var width = sliderWidth / slidesToShow;

        if (responsive) {
          var breakpointKey = Object.keys(responsive).reverse().find(function (bp) {
            return parseInt(bp) < sliderWidth;
          });
          var breakpoint = responsive[breakpointKey]; // Get configuration from breakpoint, if exists

          if (breakpoint) {
            var _slidesToShow = breakpoint.slidesToShow,
                _slidesToScroll = breakpoint.slidesToScroll; // Recalculate Width for breackpoint

            width = sliderWidth / _slidesToShow;
            setItemsToShow(_slidesToShow);
            setItemsToScroll(_slidesToScroll);
          }
        } // Roundup width


        width = Math.floor(width); // Set slide width

        setSlideWidth(width); // Calculate track width for slide

        trackWidth = width * totalSlides;
      } // Set track width


    trackElem.style.width = "".concat(trackWidth, "px");
  } // Effects:
  // Call onReize on resize event


  useWindowEvent('resize', onResize, 0, true); // Autoplay

  useInterval(onNext, autoplay ? paused ? null : autoplaySpeed : null); // Set slides and dots when index or slideWidth changes

  React.useEffect(function () {
    updateSlides();
    updateDots();
    if (!initialized) setInitialized(true);
  }, [index, slideWidth]);
  return {
    dots: dots,
    initialized: initialized,
    listRef: listRef,
    onNext: onNext,
    onPrev: onPrev,
    showArrows: showArrows,
    showDots: showDots,
    sliderRef: sliderRef,
    slides: slides,
    touchEvents: touchEvents,
    trackRef: trackRef
  };
}
var defaults$2 = {
  autoplay: false,
  autoplaySpeed: 4000,
  easing: 'ease-out',
  fade: false,
  infinite: true,
  initialSlide: 0,
  pauseOnHover: true,
  showArrows: true,
  showDots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  touchMove: true,
  touchThreshold: 11,
  zIndex: 1000
};

function DefaultArrows(_ref) {
  var onNext = _ref.onNext,
      onPrev = _ref.onPrev;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(SliderArrow, {
    prev: true,
    onClick: onPrev
  }), React__default.createElement(SliderArrow, {
    next: true,
    onClick: onNext
  }));
}
DefaultArrows.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func
};
function DefaultDots(_ref2) {
  var dots = _ref2.dots;
  return React__default.createElement("ul", {
    className: "slick-dots",
    role: "tablist"
  }, dots.map(function (_ref3) {
    var active = _ref3.active,
        key = _ref3.key,
        label = _ref3.label,
        onClick = _ref3.onClick;
    return React__default.createElement("li", {
      "aria-hidden": !active,
      role: "presentation",
      "aria-selected": !active,
      "aria-controls": "navigation".concat(label),
      className: active ? 'slick-active' : '',
      key: "slider-dot-".concat(key),
      onClick: onClick
    }, React__default.createElement("button", {
      type: "button",
      "data-role": "none",
      role: "button",
      "aria-required": "false",
      tabIndex: "0"
    }, label));
  }));
}
DefaultDots.propTypes = {
  dots: PropTypes.arrayOf(PropTypes.shape({
    active: PropTypes.bool,
    key: PropTypes.number,
    label: PropTypes.string,
    onClick: PropTypes.func
  }))
};

function Slider(_ref4) {
  var children = _ref4.children,
      Arrows = _ref4.arrowsComponent,
      Dots = _ref4.dotsComponent,
      className = _ref4.className,
      settings = _objectWithoutProperties(_ref4, ["children", "arrowsComponent", "dotsComponent", "className"]);

  var _useSlider = useSlider(children, settings),
      dots = _useSlider.dots,
      initialized = _useSlider.initialized,
      listRef = _useSlider.listRef,
      onNext = _useSlider.onNext,
      onPrev = _useSlider.onPrev,
      onDotClick = _useSlider.onDotClick,
      showArrows = _useSlider.showArrows,
      showDots = _useSlider.showDots,
      sliderRef = _useSlider.sliderRef,
      slides = _useSlider.slides,
      trackRef = _useSlider.trackRef,
      touchEvents = _useSlider.touchEvents;

  return React__default.createElement("div", {
    className: "".concat(className, " slick-slider ").concat(initialized ? 'slick-initialized' : ''),
    ref: sliderRef
  }, React__default.createElement("div", _extends({
    className: "slick-list",
    "aria-live": "polite",
    ref: listRef
  }, touchEvents), React__default.createElement("div", {
    className: "slick-track",
    role: "listbox",
    ref: trackRef
  }, slides)), showArrows && React__default.createElement(Arrows, {
    onNext: onNext,
    onPrev: onPrev
  }), showDots && React__default.createElement(Dots, {
    dots: dots,
    onClick: onDotClick
  }));
}

Slider.propTypes = {
  arrowsComponent: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  dotsComponent: PropTypes.func
};
Slider.defaultProps = {
  arrowsComponent: DefaultArrows,
  className: '',
  dotsComponent: DefaultDots
};

function Slide(_ref) {
  var heading = _ref.heading,
      subtitle = _ref.subtitle,
      dek = _ref.dek,
      cta = _ref.cta,
      url = _ref.url,
      image = _ref.image,
      imageIsLazy = _ref.imageIsLazy,
      className = _ref.className,
      textClass = _ref.textClass,
      others = _objectWithoutProperties(_ref, ["heading", "subtitle", "dek", "cta", "url", "image", "imageIsLazy", "className", "textClass"]);

  return React__default.createElement("div", _extends({
    className: "c-carousel__item u-position--relative ".concat(className)
  }, others), React__default.createElement(Picture, {
    image: image,
    lazy: imageIsLazy
  }), heading && React__default.createElement("div", {
    className: "c-carousel__item-text__wrap l-grid l-grid--7-col u-shift--left--1-col--at-large"
  }, React__default.createElement("div", {
    className: "l-grid-item l-grid-item--m--4-col l-grid-item--xl--3-col"
  }, React__default.createElement("div", {
    className: "c-carousel__item-text ".concat(textClass, " u-spacing u-padding--double--top u-padding--double--bottom")
  }, React__default.createElement("div", {
    className: "c-carousel__item-text--inner u-spacing--half"
  }, React__default.createElement("h2", {
    className: "c-carousel__item-heading u-font--primary--xl"
  }, heading), subtitle && React__default.createElement("h3", {
    className: "c-carousel__item-subtitle u-font--secondary--s u-text-transform--upper"
  }, React__default.createElement("strong", null, subtitle)), React__default.createElement("div", {
    className: "c-carousel__item-dek"
  }, React__default.createElement("p", null, dek))), cta && url && React__default.createElement("a", {
    href: url,
    className: "c-carousel__item-cta o-button u-theme--secondary-background-color"
  }, cta)))));
}

Slide.propTypes = {
  className: PropTypes.string,
  cta: PropTypes.string,
  dek: PropTypes.string,
  heading: PropTypes.string,
  image: Picture.propTypes.image.isRequired,
  imageIsLazy: Picture.propTypes.lazy,
  subtitle: PropTypes.string,
  textClass: PropTypes.string,
  url: PropTypes.string
};
Slide.defaultProps = {
  className: '',
  textClass: ''
};

var sliderProps = {
  fade: true,
  touchThreshold: 11,
  dots: true,
  adaptiveHeight: true
};

function CarouselArrows(_ref) {
  var onNext = _ref.onNext,
      onPrev = _ref.onPrev;
  return React__default.createElement("div", {
    className: "c-carousel__controls"
  }, React__default.createElement("span", {
    className: "o-arrow__prev",
    onClick: onPrev
  }, React__default.createElement(IconWrap, {
    background: "darker",
    className: "c-carousel__arrow c-carousel__arrow--prev u-round",
    name: "arrow-bracket-left",
    size: "s"
  })), React__default.createElement("span", {
    className: "o-arrow__next",
    onClick: onNext
  }, React__default.createElement(IconWrap, {
    background: "darker",
    className: "c-carousel__arrow c-carousel__arrow--next u-round",
    name: "arrow-bracket-right",
    size: "s"
  })));
}

CarouselArrows.propTypes = DefaultArrows.propTypes;

function Carousel(_ref2) {
  var slides = _ref2.slides,
      showArrows = _ref2.showArrows,
      showDots = _ref2.showDots;
  return React__default.createElement("div", {
    className: "c-carousel u-position--relative"
  }, React__default.createElement(Slider, _extends({
    arrowsComponent: showArrows ? CarouselArrows : null,
    className: "c-carousel__slides",
    showArrows: showArrows,
    showDots: showDots
  }, sliderProps), slides.map(function (slide, key) {
    return React__default.createElement(Slide, _extends({}, slide, {
      key: "carousel-slide-".concat(key)
    }));
  })));
}

Carousel.propTypes = {
  showArrows: PropTypes.bool,
  showDots: PropTypes.bool,
  slides: PropTypes.array
};
Carousel.defaultProps = {
  showArrows: false,
  showDots: true,
  slides: []
};

function Comment(_ref) {
  var avatar = _ref.avatar,
      byline = _ref.byline,
      children = _ref.children,
      date = _ref.date,
      dateFormat = _ref.dateFormat,
      editLabel = _ref.editLabel,
      editUrl = _ref.editUrl,
      replyLabel = _ref.replyLabel,
      replyUrl = _ref.replyUrl,
      text = _ref.text;
  return React__default.createElement("div", {
    className: "c-comment--inner u-border--left u-theme--border-color--darker"
  }, React__default.createElement("div", {
    className: "c-comment__avatar u-space--right"
  }, React__default.createElement(Picture, {
    image: avatar
  })), React__default.createElement("div", {
    className: "c-comment__body u-spacing--quarter"
  }, React__default.createElement("div", {
    className: "c-comment__meta"
  }, React__default.createElement("span", {
    className: "byline u-font--secondary--s can-be--white u-theme--color--darker"
  }, React__default.createElement("a", {
    href: ""
  }, byline)), React__default.createElement("span", {
    className: "o-divider"
  }, "|"), React__default.createElement("span", {
    className: "pub_date u-font--secondary--s u-color--gray can-be--white"
  }, React__default.createElement(DateTimeFormat, {
    datetime: date,
    format: dateFormat
  })), editUrl && React__default.createElement("span", {
    className: "c-comment__edit-link u-font--secondary--s u-theme--color--base"
  }, React__default.createElement("a", {
    className: "c-comment-edit-link",
    href: editUrl
  }, editLabel))), React__default.createElement("p", {
    className: "c-comment__content"
  }, children || text), replyUrl && React__default.createElement("div", {
    className: "c-comment__reply"
  }, React__default.createElement("a", {
    href: replyUrl,
    className: "u-font--secondary--s u-theme--color--base"
  }, replyLabel))));
}

Comment.propTypes = {
  avatar: Picture.propTypes.image,
  byline: PropTypes.string,
  children: PropTypes.node,
  date: PropTypes.number,
  dateFormat: PropTypes.oneOf(dateFormats),
  editUrl: PropTypes.string,
  editLabel: PropTypes.string,
  replyLabel: PropTypes.string,
  replyUrl: PropTypes.string,
  text: PropTypes.string
};
Comment.defaultProps = {
  dateFormat: 'datetime',
  editLabel: 'Edit',
  replyLabel: 'Reply'
};

function FooterModal(_ref) {
  var children = _ref.children,
      text = _ref.text;

  var _useToggle = useToggle(true, '', 'this-is-active'),
      onToggle = _useToggle.onToggle,
      openClass = _useToggle.openClass;

  return React__default.createElement(Text, {
    className: "c-modal ".concat(openClass),
    themeBackgroundTrans: "base",
    color: "white",
    padding: true
  }, React__default.createElement(Element, {
    as: "p",
    className: "c-modal__body",
    fontType: "primary",
    strong: true
  }, children || text), React__default.createElement(IconWrap, {
    as: "button",
    className: "c-modal__close",
    color: "white",
    fill: "white",
    name: "close",
    onClick: onToggle,
    size: "m"
  }));
}

FooterModal.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node
};
FooterModal.defaultProps = {};

function ShareTools(_ref) {
  var code = _ref.code;
  return React__default.createElement("div", {
    className: "c-share-tools js-hover"
  }, code);
}

ShareTools.propTypes = {
  code: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

function ErrorMessage(_ref) {
  var text = _ref.text;
  return React__default.createElement(Element, {
    as: "small",
    color: "error",
    fontSize: "s",
    fontType: "secondary",
    clearFix: true
  }, text);
}

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired
};
ErrorMessage.defaultProps = {};

function FormLabel(_ref) {
  var FormField = _ref.children,
      error = _ref.error,
      fontSize = _ref.fontSize,
      fontType = _ref.fontType,
      htmlFor = _ref.htmlFor,
      position = _ref.position,
      text = _ref.text,
      textOptional = _ref.textOptional,
      wrapperClass = _ref.wrapperClass,
      wrapperSpacingSize = _ref.wrapperSpacingSize;
  var Label = React__default.createElement(Element, {
    as: "label",
    fontSize: fontSize,
    fontType: fontType,
    htmlFor: htmlFor
  }, text, ' ', textOptional && React__default.createElement("span", {
    className: "type-alpha--s text-color--gray"
  }, "(", textOptional, ")"));
  return React__default.createElement(Element, {
    className: wrapperClass,
    spacingSize: wrapperSpacingSize
  }, position == 'top' ? React__default.createElement(React__default.Fragment, null, Label, FormField, error && React__default.createElement(ErrorMessage, {
    text: error
  })) : React__default.createElement(React__default.Fragment, null, FormField, Label, error && React__default.createElement(ErrorMessage, {
    text: error
  })));
}

FormLabel.propTypes = {
  children: PropTypes.node,
  error: PropTypes.string,
  fontSize: PropTypes.oneOf(fontSizes),
  fontType: PropTypes.oneOf(fontTypes),
  htmlFor: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom']),
  text: PropTypes.string,
  textOptional: PropTypes.string,
  wrapperClass: PropTypes.string,
  wrapperSpacingSize: PropTypes.oneOf(sizes)
};
FormLabel.defaultProps = {
  fontSize: 's',
  fontType: 'secondary',
  position: 'top',
  wrapperClass: 'c-form-group',
  wrapperSpacingSize: 'quarter'
};

function TextArea(_ref) {
  var children = _ref.children,
      error = _ref.error,
      id = _ref.id,
      label = _ref.label,
      labelOptional = _ref.labelOptional,
      labelFontSize = _ref.labelFontSize,
      labelFontType = _ref.labelFontType,
      labelWrapperClass = _ref.labelWrapperClass,
      labelWrapperSpacingSize = _ref.labelWrapperSpacingSize,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["children", "error", "id", "label", "labelOptional", "labelFontSize", "labelFontType", "labelWrapperClass", "labelWrapperSpacingSize", "value"]);

  var TextArea = React__default.createElement("textarea", _extends({
    className: error ? 'has-error' : null,
    id: id
  }, props), children ? children : value);
  return label ? React__default.createElement(FormLabel, {
    error: error,
    fontSize: labelFontSize,
    fontType: labelFontType,
    htmlFor: id,
    text: label,
    textOptional: labelOptional,
    wrapperClass: labelWrapperClass,
    wrapperSpacingSize: labelWrapperSpacingSize
  }, TextArea) : React__default.createElement(React__default.Fragment, null, TextArea);
}

TextArea.propTypes = {
  children: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelOptional: PropTypes.string,
  labelFontSize: PropTypes.oneOf(fontSizes),
  labelFontType: PropTypes.oneOf(fontTypes),
  labelWrapperClass: PropTypes.string,
  labelWrapperSpacingSize: PropTypes.oneOf(sizes),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.string
};
TextArea.defaultProps = {
  rows: 8
};

function Form(_ref) {
  var children = _ref.children,
      className = _ref.className,
      darkMode = _ref.darkMode,
      inline = _ref.inline,
      props = _objectWithoutProperties(_ref, ["children", "className", "darkMode", "inline"]);

  var classes = ['c-form'];
  if (inline) classes.push('c-form--inline');
  if (darkMode) classes.push(darkThemeClass);
  if (className) classes.push(className);
  var formClass = classes.join(' ');
  return React__default.createElement(Element, _extends({
    as: "form",
    className: formClass,
    themeBackground: darkMode ? 'darker' : null
  }, props), children);
}

Form.propTypes = _objectSpread({
  action: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  darkMode: PropTypes.bool,
  inline: PropTypes.bool,
  method: PropTypes.oneOf(['post', 'get']),
  noValidate: PropTypes.bool,
  onSubmit: PropTypes.func,
  role: PropTypes.oneOf(['search'])
}, Element.propTypes);
Form.defaultProps = {};

var CommentForm = function CommentForm(_ref) {
  var onSubmit = _ref.onSubmit,
      rows = _ref.rows,
      submitLabel = _ref.submitLabel,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["onSubmit", "rows", "submitLabel", "title"]);

  return React__default.createElement(Form, _extends({
    className: "c-comment-form",
    spacingSize: "half",
    noValidate: true
  }, props), React__default.createElement(Title, {
    as: "h3",
    themeColor: "darker",
    fontSize: "m",
    fontType: "secondary",
    text: title,
    strong: true,
    transform: "upper"
  }), React__default.createElement(TextArea, {
    "aria-required": true,
    name: "comment",
    required: "required",
    rows: rows
  }), React__default.createElement(Button, {
    text: submitLabel,
    onSubmit: onSubmit
  }));
};

CommentForm.propTypes = {
  onSubmit: PropTypes.func,
  rows: PropTypes.number,
  submitLabel: PropTypes.string,
  title: PropTypes.string
};
CommentForm.defaultProps = {
  rows: 8,
  submitLabel: 'Post Comment',
  title: 'Leave a Comment'
};

function Dropdown(_ref) {
  var defaultValue = _ref.defaultValue,
      error = _ref.error,
      id = _ref.id,
      label = _ref.label,
      labelOptional = _ref.labelOptional,
      labelFontSize = _ref.labelFontSize,
      labelFontType = _ref.labelFontType,
      labelWrapperClass = _ref.labelWrapperClass,
      labelWrapperSpacingSize = _ref.labelWrapperSpacingSize,
      name = _ref.name,
      options = _ref.options;
  var Dropdown = React__default.createElement("select", {
    defaultValue: defaultValue,
    id: id,
    name: name
  }, options.map(function (_ref2, key) {
    var text = _ref2.text,
        value = _ref2.value;
    return React__default.createElement("option", {
      key: key,
      value: value
    }, text);
  }));
  return label ? React__default.createElement(FormLabel, {
    error: error,
    fontSize: labelFontSize,
    fontType: labelFontType,
    htmlFor: id,
    text: label,
    textOptional: labelOptional,
    wrapperClass: labelWrapperClass,
    wrapperSpacingSize: labelWrapperSpacingSize
  }, Dropdown) : React__default.createElement(React__default.Fragment, null, Dropdown);
}

var valueTypes = PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]);
Dropdown.propTypes = {
  defaultValue: valueTypes,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelOptional: PropTypes.string,
  labelFontSize: PropTypes.oneOf(fontSizes),
  labelFontType: PropTypes.oneOf(fontTypes),
  labelWrapperClass: PropTypes.string,
  labelWrapperSpacingSize: PropTypes.oneOf(sizes),
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    value: valueTypes.isRequired
  }))
};
Dropdown.defaultProps = {
  options: []
};

function Fieldset(_ref) {
  var children = _ref.children,
      legend = _ref.legend,
      legendClass = _ref.legendClass,
      legendFontSize = _ref.legendFontSize,
      legendFontType = _ref.legendFontType,
      legendThemeColor = _ref.legendThemeColor,
      legendVishidden = _ref.legendVishidden,
      props = _objectWithoutProperties(_ref, ["children", "legend", "legendClass", "legendFontSize", "legendFontType", "legendThemeColor", "legendVishidden"]);

  return React__default.createElement(Element, _extends({
    as: "fieldset"
  }, props), legend && React__default.createElement(Element, {
    as: "legend",
    className: legendClass,
    fontSize: legendFontSize,
    fontType: legendFontType,
    themeColor: legendThemeColor,
    vishidden: legendVishidden
  }, legend), children);
}

Fieldset.propTypes = _objectSpread({
  children: PropTypes.node,
  legend: PropTypes.string,
  legendClass: PropTypes.string,
  legendFontSize: PropTypes.oneOf(fontSizes),
  legendFontType: PropTypes.oneOf(fontTypes),
  legendThemeColor: PropTypes.oneOf(themeColors),
  legendVishidden: PropTypes.bool
}, Element.propTypes);
Fieldset.defaultProps = {
  legendFontSize: 'm',
  legendFontType: 'secondary',
  legendThemeColor: 'darker'
};

function SubmitButton(_ref) {
  var vishidden = _ref.vishidden,
      props = _objectWithoutProperties(_ref, ["vishidden"]);

  return React__default.createElement(Button, _extends({
    vishidden: vishidden
  }, props));
}

SubmitButton.propTypes = _objectSpread({}, Button.propTypes);
SubmitButton.defaultProps = {
  vishidden: true
};

function FacetFilter(_ref) {
  var facets = _ref.facets,
      filterLabel = _ref.filterLabel,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["facets", "filterLabel", "title"]);

  return React__default.createElement(Form, _extends({
    className: "c-facet-filter-form"
  }, props), React__default.createElement(Fieldset, {
    legend: title,
    spacingSize: "half"
  }, React__default.createElement(Element, {
    spacing: true
  }, renderItems(facets, Dropdown), React__default.createElement(SubmitButton, {
    label: filterLabel
  }))));
}

FacetFilter.propTypes = {
  facets: PropTypes.array,
  filterLabel: PropTypes.string,
  showButton: PropTypes.bool,
  title: PropTypes.string
};
FacetFilter.defaultProps = {
  title: 'Filter the results',
  facets: [],
  filterLabel: 'Filter'
};

/**
 *
 * @param {Boolean} hasFocus
 *
 * @returns inputRef
 */

function useInputFocus(hasFocus) {
  var inputRef = React.useRef(null);
  var input = inputRef.current;
  var focusTimeout = setTimeout(function () {
    if (hasFocus) {
      input && input.focus();
    } else {
      input && input.blur();
    }
  }, 250);
  React.useEffect(function () {
    return function () {
      return clearTimeout(focusTimeout);
    };
  }, [focusTimeout]);
  return inputRef;
}

function BaseInput(_ref) {
  var checked = _ref.checked,
      error = _ref.error,
      id = _ref.id,
      inline = _ref.inline,
      name = _ref.name,
      placeholder = _ref.placeholder,
      type = _ref.type,
      value = _ref.value,
      hasFocus = _ref.hasFocus,
      props = _objectWithoutProperties(_ref, ["checked", "error", "id", "inline", "name", "placeholder", "type", "value", "hasFocus"]);

  var inputFocusRef = useInputFocus(hasFocus);
  var classes = [];
  if (error) classes.push('has-error');
  if (inline) classes.push('form-input');
  var inputClass = classes.length > 0 ? classes.join(' ') : null;
  return React__default.createElement("input", _extends({
    className: inputClass,
    defaultChecked: checked,
    id: id,
    name: name,
    placeholder: placeholder,
    type: type,
    value: value,
    ref: inputFocusRef
  }, props));
}

BaseInput.propTypes = {
  checked: PropTypes.bool,
  error: PropTypes.string,
  hasFocus: PropTypes.bool,
  id: PropTypes.string,
  inline: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['checkbox', 'email', 'password', 'radio', 'search', 'text']),
  value: PropTypes.string
};
BaseInput.defaultProps = {
  type: 'text'
};

function BaseTextField(_ref) {
  var darkMode = _ref.darkMode,
      error = _ref.error,
      id = _ref.id,
      label = _ref.label,
      labelOptional = _ref.labelOptional,
      labelFontSize = _ref.labelFontSize,
      labelFontType = _ref.labelFontType,
      labelWrapperClass = _ref.labelWrapperClass,
      labelWrapperSpacingSize = _ref.labelWrapperSpacingSize,
      name = _ref.name,
      placeholder = _ref.placeholder,
      type = _ref.type,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["darkMode", "error", "id", "label", "labelOptional", "labelFontSize", "labelFontType", "labelWrapperClass", "labelWrapperSpacingSize", "name", "placeholder", "type", "value"]);

  var InputField = React__default.createElement(BaseInput, _extends({
    type: type
  }, _objectSpread({
    error: error,
    id: id,
    name: name,
    placeholder: placeholder,
    value: value
  }, props)));
  return label ? React__default.createElement(FormLabel, {
    error: error,
    fontSize: labelFontSize,
    fontType: labelFontType,
    htmlFor: id,
    position: darkMode ? 'bottom' : 'top',
    text: label,
    textOptional: labelOptional,
    wrapperClass: labelWrapperClass,
    wrapperSpacingSize: labelWrapperSpacingSize
  }, InputField) : React__default.createElement(React__default.Fragment, null, InputField);
}

BaseTextField.propTypes = {
  darkMode: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelOptional: PropTypes.string,
  labelFontSize: PropTypes.oneOf(fontSizes),
  labelFontType: PropTypes.oneOf(fontTypes),
  labelWrapperClass: PropTypes.string,
  labelWrapperSpacingSize: PropTypes.oneOf(sizes),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['email', 'password', 'search', 'text']),
  value: PropTypes.string
};
BaseTextField.defaultProps = {
  labelWrapperClass: 'c-form-group',
  type: 'text'
};

function TextField(_ref) {
  var props = _extends({}, _ref);

  return React__default.createElement(BaseTextField, _extends({
    type: "text"
  }, props));
}

TextField.propTypes = _objectSpread({}, BaseTextField.propTypes);
TextField.defaultProps = {};

function InlineForm(_ref) {
  var onSubmit = _ref.onSubmit,
      submitLabel = _ref.submitLabel,
      props = _objectWithoutProperties(_ref, ["onSubmit", "submitLabel"]);

  return React__default.createElement(Form, _extends({
    inline: true,
    noValidate: true
  }, props), React__default.createElement(TextField, {
    "aria-required": true,
    name: "text",
    required: true,
    inline: true
  }), React__default.createElement(Button, {
    text: submitLabel,
    onSubmit: onSubmit,
    spaceSide: "left"
  }));
}

InlineForm.propTypes = {
  onSubmit: PropTypes.func,
  submitLabel: PropTypes.string
};
InlineForm.defaultProps = {
  submitLabel: 'Submit'
};

function PasswordField(_ref) {
  var props = _extends({}, _ref);

  return React__default.createElement(BaseTextField, _extends({
    type: "password"
  }, props));
}

PasswordField.propTypes = _objectSpread({}, BaseTextField.propTypes);
PasswordField.defaultProps = {};

function SubmitMessage(_ref) {
  var text = _ref.text;
  return React__default.createElement(Element, {
    className: "messaging",
    padding: true,
    color: "white",
    themeBackground: "darker"
  }, React__default.createElement(Element, {
    fontSize: "s",
    fontType: "secondary"
  }, text));
}

SubmitMessage.propTypes = {
  text: PropTypes.string.isRequired
};
SubmitMessage.defaultProps = {};

function LoginForm(_ref) {
  var forgotPwdLabel = _ref.forgotPwdLabel,
      forgotPwdUrl = _ref.forgotPwdUrl,
      onSubmit = _ref.onSubmit,
      passwordLabel = _ref.passwordLabel,
      submitLabel = _ref.submitLabel,
      submitMessage = _ref.submitMessage,
      title = _ref.title,
      usernameLabel = _ref.usernameLabel,
      props = _objectWithoutProperties(_ref, ["forgotPwdLabel", "forgotPwdUrl", "onSubmit", "passwordLabel", "submitLabel", "submitMessage", "title", "usernameLabel"]);

  return React__default.createElement(Form, _extends({
    spacingSize: "half"
  }, props), React__default.createElement(Title, {
    fontSize: "m",
    fontType: "secondary",
    text: title,
    themeColor: "darker"
  }), submitMessage && React__default.createElement(SubmitMessage, {
    text: submitMessage
  }), React__default.createElement(TextField, {
    name: "username",
    placeholder: "".concat(usernameLabel, "*")
  }), React__default.createElement(PasswordField, {
    name: "password",
    placeholder: "".concat(passwordLabel, "*")
  }), React__default.createElement("div", {
    className: "u-flex u-flex--align-center"
  }, React__default.createElement(Button, {
    text: submitLabel,
    onSubmit: onSubmit
  }), React__default.createElement(Button, {
    url: forgotPwdUrl,
    text: forgotPwdLabel,
    simple: true
  })));
}

LoginForm.propTypes = {
  forgotPwdLabel: PropTypes.string,
  forgotPwdUrl: PropTypes.string,
  onSubmit: PropTypes.func,
  passwordLabel: PropTypes.string,
  submitLabel: PropTypes.string,
  submitMessage: PropTypes.string,
  title: PropTypes.string,
  usernameLabel: PropTypes.string
};
LoginForm.defaultProps = {
  forgotPwdLabel: 'Forgot Password?',
  passwordLabel: 'Password',
  submitLabel: 'Login',
  submitMessage: 'Logging you in...',
  title: 'Login',
  usernameLabel: 'Username'
};

function SearchField(_ref) {
  var props = _extends({}, _ref);

  return React__default.createElement(BaseTextField, _extends({
    type: "search"
  }, props));
}

SearchField.propTypes = _objectSpread({}, BaseTextField.propTypes);
SearchField.defaultProps = {};

function Search(_ref) {
  var submitLabel = _ref.submitLabel,
      hasFocus = _ref.hasFocus,
      placeholder = _ref.placeholder,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["submitLabel", "hasFocus", "placeholder", "title"]);

  return React__default.createElement(Form, _extends({
    className: "search-form",
    role: "search"
  }, props), React__default.createElement(Fieldset, {
    legend: title,
    legendVishidden: true
  }, React__default.createElement(SearchField, {
    className: "search-form__input",
    name: "search",
    placeholder: placeholder,
    hasFocus: hasFocus,
    required: true
  }), React__default.createElement(SubmitButton, {
    className: "search-form__submit",
    label: submitLabel
  })));
}

Search.propTypes = {
  hasFocus: PropTypes.bool,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  submitLabel: PropTypes.string,
  title: PropTypes.string
};
Search.defaultProps = {
  submitLabel: 'Search',
  title: 'Search',
  placeholder: 'Search...'
};

function FormFilter(_ref) {
  var options = _ref.options,
      title = _ref.title;
  return React__default.createElement("div", {
    className: "c-filter__form-item u-spacing--half l-grid-item l-grid-item--s--2-col l-grid-item--l--1-col"
  }, React__default.createElement(Title, {
    as: "h3",
    fontType: "secondary",
    fontSize: "s",
    text: title,
    strong: true,
    themeColor: "base",
    transform: "upper"
  }), options.map(function (_ref2, key) {
    var checked = _ref2.checked,
        id = _ref2.id,
        name = _ref2.name,
        type = _ref2.type,
        value = _ref2.value;
    var inputId = "".concat(type, "-").concat(id);
    var inputType = type ? type : 'radio';
    return React__default.createElement("div", {
      className: "c-filter__form-group",
      key: key
    }, React__default.createElement("input", {
      defaultChecked: checked,
      id: inputId,
      name: inputType,
      type: inputType,
      value: value
    }), React__default.createElement("label", {
      htmlFor: inputId
    }, name));
  }));
}

FormFilter.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    checked: PropTypes.bool,
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.oneOf(['radio', 'checkbox']),
    value: PropTypes.string
  }))
};
FormFilter.defaultProps = {
  options: []
};

function BaseSearch(_ref) {
  var border = _ref.border,
      className = _ref.className,
      contentWrapperClass = _ref.contentWrapperClass,
      contentWrapperNestedClass = _ref.contentWrapperNestedClass,
      filters = _ref.filters,
      placeholder = _ref.placeholder,
      searchAgainLabel = _ref.searchAgainLabel,
      searchLabel = _ref.searchLabel,
      showSearchAgain = _ref.showSearchAgain,
      sorting = _ref.sorting;

  var _useToggle = useToggle(false, 'c-filter-is-active', ''),
      onToggle = _useToggle.onToggle,
      openClass = _useToggle.openClass;

  var borderClass = border == 'left' ? 'u-theme--border-color--darker u-border--left' : '';
  return React__default.createElement("div", {
    className: "c-filter u-background-color--gray--light ".concat(className, " ").concat(borderClass, " ").concat(openClass)
  }, React__default.createElement(Form, {
    className: "c-filter__search",
    role: "search"
  }, React__default.createElement("div", {
    className: contentWrapperClass
  }, React__default.createElement("div", {
    className: contentWrapperNestedClass
  }, React__default.createElement("input", {
    type: "search",
    name: "s",
    className: "u-font--secondary--s u-theme--color--darker u-color--gray o-input__search",
    placeholder: placeholder
  })), React__default.createElement("div", {
    className: contentWrapperNestedClass
  }, React__default.createElement("div", {
    className: "u-flex"
  }, React__default.createElement(Button, {
    className: "c-filter__button u-space--right",
    icon: "search",
    text: searchLabel,
    outline: !showSearchAgain
  }), (filters || sorting) && React__default.createElement(Button, {
    as: "span",
    className: "c-filter__toggle ".concat(openClass),
    icon: "settings",
    onClick: onToggle,
    simple: true
  })))), (filters || sorting) && React__default.createElement("div", {
    className: "c-filter__form u-padding--top"
  }, React__default.createElement("div", {
    className: contentWrapperClass
  }, filters && renderItems(filters, FormFilter), sorting && renderItems([sorting], FormFilter), showSearchAgain && React__default.createElement("div", {
    className: "l-grid-item--7-col u-space--after-medium"
  }, React__default.createElement(Button, {
    icon: "search",
    iconSize: "xs",
    text: searchAgainLabel,
    outline: true
  }))))));
}

BaseSearch.propTypes = {
  border: PropTypes.oneOf(['left']),
  className: PropTypes.string,
  contentWrapperClass: PropTypes.string,
  contentWrapperNestedClass: PropTypes.string,
  filters: PropTypes.array,
  placeholder: PropTypes.string,
  searchAgainLabel: PropTypes.string,
  searchLabel: PropTypes.string,
  showSearchAgain: PropTypes.bool,
  sorting: PropTypes.object
};
BaseSearch.defaultProps = {
  className: '',
  filters: [],
  placeholder: 'Search...',
  searchAgainLabel: 'Search Again',
  searchLabel: 'Search'
};

function SearchFilter(_ref) {
  var props = _extends({}, _ref);

  return React__default.createElement(BaseSearch, _extends({
    border: "left",
    className: "u-spacing u-padding",
    contentWrapperClass: "l-field-container u-spacing"
  }, props));
}

SearchFilter.propTypes = {
  filters: PropTypes.array,
  placeholder: PropTypes.string,
  searchAgainLabel: PropTypes.string,
  searchLabel: PropTypes.string
};
SearchFilter.defaultProps = {
  filters: [],
  placeholder: 'Search...',
  searchAgainLabel: 'Search Again',
  searchLabel: 'Search'
};

function SearchHeader(_ref) {
  var props = _extends({}, _ref);

  return React__default.createElement(BaseSearch, _extends({
    className: "u-padding--double--top u-padding--double--bottom",
    contentWrapperClass: "l-grid l-grid--7-col u-shift--left--1-col--at-large u-spacing--until-medium",
    contentWrapperNestedClass: "l-grid-item l-grid-item--m--3-col"
  }, props));
}

SearchHeader.propTypes = {
  filters: PropTypes.array,
  placeholder: PropTypes.string,
  searchAgainLabel: PropTypes.string,
  searchLabel: PropTypes.string,
  showSearchAgain: PropTypes.bool
};
SearchHeader.defaultProps = {
  filters: [],
  placeholder: 'Search...',
  searchAgainLabel: 'Search Again',
  searchLabel: 'Search',
  showSearchAgain: true
};

function TextField$1(_ref) {
  var props = _extends({}, _ref);

  return React__default.createElement(BaseTextField, _extends({
    type: "email"
  }, props));
}

TextField$1.propTypes = _objectSpread({}, BaseTextField.propTypes);
TextField$1.defaultProps = {};

function FormTitle(_ref) {
  var darkMode = _ref.darkMode,
      text = _ref.text,
      type = _ref.type;
  return type == 'primary' ? React__default.createElement(Title, {
    color: darkMode ? 'white' : null,
    fontSize: "l",
    strong: true,
    text: text,
    themeColor: darkMode ? null : 'darker'
  }) : React__default.createElement(Title, {
    as: "h3",
    fontType: "secondary",
    spacing: true,
    strong: true,
    text: text,
    themeColor: darkMode ? 'lighter' : 'base',
    transform: "upper"
  });
}

FormTitle.propTypes = {
  darkMode: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary'])
};
FormTitle.defaultProps = {
  type: 'primary'
};

function OptionGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      titleFontSize = _ref.titleFontSize,
      titleFontType = _ref.titleFontType,
      props = _objectWithoutProperties(_ref, ["children", "className", "title", "titleFontSize", "titleFontType"]);

  return React__default.createElement(Element, _extends({
    className: className
  }, props), title && React__default.createElement(Element, {
    fontSize: titleFontSize,
    fontType: titleFontType
  }, title), children);
}

OptionGroup.propTypes = _objectSpread({
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleFontSize: PropTypes.oneOf(fontSizes),
  titleFontType: PropTypes.oneOf(fontTypes),
  type: PropTypes.oneOf(['checkbox', 'radio', 'select'])
}, Element.propTypes);
OptionGroup.defaultProps = {
  spacingSize: 'half',
  titleFontSize: 's',
  titleFontType: 'secondary'
};

function RadioButton(_ref) {
  var checked = _ref.checked,
      error = _ref.error,
      id = _ref.id,
      label = _ref.label,
      labelOptional = _ref.labelOptional,
      labelFontSize = _ref.labelFontSize,
      labelFontType = _ref.labelFontType,
      labelWrapperClass = _ref.labelWrapperClass,
      labelWrapperSpacingSize = _ref.labelWrapperSpacingSize,
      name = _ref.name,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["checked", "error", "id", "label", "labelOptional", "labelFontSize", "labelFontType", "labelWrapperClass", "labelWrapperSpacingSize", "name", "value"]);

  return React__default.createElement(FormLabel, {
    error: error,
    fontSize: labelFontSize,
    fontType: labelFontType,
    htmlFor: id,
    position: "bottom",
    text: label,
    textOptional: labelOptional,
    wrapperClass: labelWrapperClass,
    wrapperSpacingSize: labelWrapperSpacingSize
  }, React__default.createElement(BaseInput, _extends({
    checked: checked,
    error: error,
    id: id,
    name: name,
    type: "radio",
    value: value
  }, props)));
}

RadioButton.propTypes = {
  checked: PropTypes.bool,
  darkMode: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelOptional: PropTypes.string,
  labelFontSize: PropTypes.oneOf(fontSizes),
  labelFontType: PropTypes.oneOf(fontTypes),
  labelWrapperClass: PropTypes.string,
  labelWrapperSpacingSize: PropTypes.oneOf(sizes),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};
RadioButton.defaultProps = {
  labelWrapperClass: null,
  labelWrapperSpacingSize: null
};

function SubscribeForm(_ref) {
  var cancelLabel = _ref.cancelLabel,
      darkMode = _ref.darkMode,
      onCancel = _ref.onCancel,
      onSubmit = _ref.onSubmit,
      submitLabel = _ref.submitLabel,
      title = _ref.title;
  return React__default.createElement(Form, {
    darkMode: darkMode,
    padding: true,
    spacing: true
  }, React__default.createElement(FormTitle, {
    text: title,
    darkMode: darkMode
  }), React__default.createElement(TextField, {
    darkMode: darkMode,
    label: "First Name",
    name: "first_name",
    placeholder: "First Name"
  }), React__default.createElement(TextField, {
    darkMode: darkMode,
    label: "Last Name",
    name: "last_name",
    placeholder: "Last Name"
  }), React__default.createElement(TextField$1, {
    darkMode: darkMode,
    label: "Email Address",
    name: "email",
    placeholder: "Email Address"
  }), React__default.createElement(OptionGroup, {
    title: "Frequency"
  }, React__default.createElement(RadioButton, {
    checked: true,
    id: "weekly",
    label: "Weekly Bulletin",
    name: "frequency",
    value: "weekly"
  }), React__default.createElement(RadioButton, {
    id: "seasonal",
    label: "Seasonal Bulletin",
    name: "frequency",
    value: "seasonal"
  })), React__default.createElement(Button, {
    text: submitLabel,
    onSubmit: onSubmit,
    outline: true
  }), React__default.createElement(Button, {
    icon: "close",
    text: cancelLabel,
    onCancel: onCancel,
    simple: true
  }));
}

SubscribeForm.propTypes = {
  cancelLabel: PropTypes.string,
  darkMode: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  submitLabel: PropTypes.string,
  title: PropTypes.string
};
SubscribeForm.defaultProps = {
  cancelLabel: 'Cancel',
  darkMode: true,
  submitLabel: 'Submit',
  title: 'Subscribe'
};

/**
 * Sets a parallax effect for an element changing its background position
 *
 * @param {element} element Element used to calculate the effect
 * @param {number} speed Animation speed
 */

function useBackgroundParallax(element) {
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      top = _useState2[0],
      setTop = _useState2[1];

  function calculateTop() {
    // Bailout if no window (for SSR)
    if (!window) return;
    var elementBox = element ? element.getBoundingClientRect() : {
      top: 0
    };
    setTop(-((window.pageYOffset - elementBox.top) / speed));
  }

  useWindowEvent('scroll', calculateTop, 0);
  useWindowEvent('resize', calculateTop, 100);
  return {
    backgroundPosition: "50% ".concat(top, "px")
  };
}

var getBackgroundRule = function getBackgroundRule(url) {
  return ".c-breakout-image__background {\n  background-image: url('".concat(url, "');\n}");
};

function BreakoutImage(_ref) {
  var caption = _ref.caption,
      srcSet = _ref.srcSet,
      parallax = _ref.parallax;
  var backgroundRef = React.useRef(null);
  var backgroundElem = backgroundRef.current;
  var backgroundStyles = parallax ? useBackgroundParallax(backgroundElem, 8) : {};
  var inlineStyles = useResponsiveStyles(getBackgroundRule, srcSet);
  return React__default.createElement("div", {
    className: "c-breakout-image"
  }, React__default.createElement(InlineStyles, {
    styles: inlineStyles
  }), React__default.createElement("div", {
    ref: backgroundRef,
    className: "c-breakout-image__background u-image--breakout u-background--cover",
    style: backgroundStyles
  }), caption && React__default.createElement("div", {
    className: "c-breakout-image__caption"
  }, React__default.createElement(Figcaption, null, caption)));
}

BreakoutImage.propTypes = {
  caption: PropTypes.string,
  srcSet: PropTypes.object,
  parallax: PropTypes.bool
};
BreakoutImage.defaultProps = {
  parallax: false
};

function FigureWithCaption(_ref) {
  var image = _ref.image,
      caption = _ref.caption,
      className = _ref.className;
  return React__default.createElement(Figure, {
    caption: caption,
    className: className,
    image: image
  });
}

FigureWithCaption.propTypes = {
  image: PropTypes.objectOf(Figure.propTypes.image).isRequired,
  caption: PropTypes.string,
  className: PropTypes.string
};
FigureWithCaption.defaultProps = {
  className: ''
};

function VideoFigureWithCaption(_ref) {
  var videoSrc = _ref.videoSrc,
      caption = _ref.caption,
      className = _ref.className;
  return React__default.createElement(Figure, {
    videoSrc: videoSrc,
    caption: caption,
    className: className
  });
}

VideoFigureWithCaption.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  caption: PropTypes.string,
  className: PropTypes.string
};

function BreadcrumbItem(_ref) {
  var text = _ref.text,
      url = _ref.url;
  return React__default.createElement("li", {
    className: "c-breadcrumbs__list-item u-font--secondary--s u-text-transform--upper u-display--inline-block u-color--gray"
  }, React__default.createElement("span", {
    className: "u-icon u-icon--xs u-path-fill--gray"
  }, React__default.createElement(Icon, {
    name: "arrow-bracket-right"
  })), React__default.createElement("strong", null, url ? React__default.createElement("a", {
    href: url,
    className: "c-breadcrumbs__link can-be--white"
  }, text) : text));
}

BreadcrumbItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string
};

function Breadcrumbs(_ref2) {
  var items = _ref2.items;
  return items.length > 0 && React__default.createElement("nav", {
    className: "c-breadcrumbs",
    role: "navigation"
  }, React__default.createElement("ul", {
    className: "c-breadcrumbs__list"
  }, renderItems(items, BreadcrumbItem)));
}

Breadcrumbs.propTypes = {
  items: PropTypes.array
};
Breadcrumbs.defaultProps = {
  items: []
};

var DrawerContext = React__default.createContext({
  closeDrawer: function closeDrawer(value) {
    return value;
  },
  isOpen: {
    menu: false,
    search: false
  },
  openDrawer: function openDrawer(value) {
    return value;
  },
  openDrawerWithSearch: function openDrawerWithSearch(value) {
    return value;
  }
});
var statuses = {
  closed: {
    menu: false,
    search: false
  },
  open: {
    menu: true,
    search: false
  },
  openSearch: {
    menu: true,
    search: true
  }
};

function DrawerContextProvider(_ref) {
  var children = _ref.children;

  var _useState = React.useState(statuses.closed),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  function openDrawer(event) {
    event.preventDefault();
    setIsOpen(statuses.open);
  }

  function openDrawerWithSearch(event) {
    event.preventDefault();
    setIsOpen(statuses.openSearch);
  }

  function closeDrawer(event) {
    event.preventDefault();
    setIsOpen(statuses.closed);
  }

  return React__default.createElement(DrawerContext.Provider, {
    value: {
      closeDrawer: closeDrawer,
      isOpen: isOpen,
      openDrawer: openDrawer,
      openDrawerWithSearch: openDrawerWithSearch
    }
  }, children);
}

DrawerContextProvider.propTypes = {
  children: PropTypes.node
};

function useDrawerContext() {
  return React.useContext(DrawerContext);
}

/**
 * Get innerwidth without padding
 * @param {HTMLElement} element
 * @param {boolean} onlyPadding
 * @returns {number}
 */

function getElementContentWidth(element) {
  var onlyPadding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // Bailout with 0, if no window (for SSR)
  if (!window) return 0;

  var _window$getComputedSt = window.getComputedStyle(element),
      paddingLeft = _window$getComputedSt.paddingLeft,
      paddingRight = _window$getComputedSt.paddingRight;

  var padding = parseFloat(paddingLeft) + parseFloat(paddingRight);
  return onlyPadding ? padding : element.clientWidth - padding;
}
/**
 * Hook to calculate the priority navigation for a menu
 * @param {Object} settings `{ enabled: boolean, total: number }`
 * @returns {Object}
 */


function usePriorityNav(_ref) {
  var _ref$total = _ref.total,
      total = _ref$total === void 0 ? 0 : _ref$total;
  // Set element refs, states and variables
  var dropdownRef = React.useRef();
  var mainNavRef = React.useRef();
  var wrapperNavRef = React.useRef();

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasDropdown = _useState2[0],
      setHasDropdown = _useState2[1];

  var _useState3 = React.useState(total - 1),
      _useState4 = _slicedToArray(_useState3, 2),
      lastVisibleIndex = _useState4[0],
      setLastVisibleIndex = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      safeToShow = _useState6[0],
      setSafeToShow = _useState6[1];

  var breakpoints = []; // Initializes breakpoints

  function init() {
    var mainNav = mainNavRef.current;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = mainNav.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        var itemWidth = getElementContentWidth(item);
        var breakpoint = breakpoints.length > 0 ? breakpoints[breakpoints.length - 1] + itemWidth : itemWidth;
        breakpoints.push(breakpoint);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } // Recalculates lastVisibleIndex and hasDropdown values based on the visible breakpoints


  function onResize() {
    var wrapper = wrapperNavRef.current;
    var dropdown = dropdownRef.current; // [Re]calculate wrapper's width

    var wrapperWidth = getElementContentWidth(wrapper); // If present, [re]calculate dropdown's width

    var dropdownWidth = dropdown ? getElementContentWidth(dropdown, true) : 0; // Get all visible breakpoints (smaller that wrapper + dropdown widths)

    var visibleBreakpoints = breakpoints.filter(function (bp) {
      return bp < wrapperWidth - dropdownWidth;
    }); // Calculate and set the last visible breakpoint

    setLastVisibleIndex(visibleBreakpoints.length - 1); // Calculate and set if dropdown is visible

    setHasDropdown(visibleBreakpoints.length < breakpoints.length);
  }

  React.useEffect(function () {
    init();
    setSafeToShow(true); // Let the user know that menu is safe to display (to avoid flickering)
  }, []);
  useWindowEvent('resize', onResize, 50, true);
  return {
    dropdownRef: dropdownRef,
    hasDropdown: hasDropdown,
    lastVisibleIndex: lastVisibleIndex,
    mainNavRef: mainNavRef,
    safeToShow: safeToShow,
    wrapperNavRef: wrapperNavRef
  };
}

function SubNavItem(_ref) {
  var active = _ref.active,
      text = _ref.text,
      url = _ref.url,
      type = _ref.type;
  return React__default.createElement("li", {
    className: "c-".concat(type, "-nav__subnav__list-item c-subnav__list-item u-background-color--gray--light")
  }, React__default.createElement("a", {
    className: "c-".concat(type, "-nav__subnav__link c-subnav__link u-color--gray").concat(type === 'primary' ? '--dark' : '', " u-theme--link-hover--base").concat(active ? ' active' : ''),
    href: url
  }, text));
}

SubNavItem.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  url: PropTypes.string.isRequired
};
SubNavItem.defaultProps = {
  active: false
};

function SubNav(_ref) {
  var items = _ref.items,
      type = _ref.type;
  return React__default.createElement("ul", {
    className: "c-secondary-nav__subnav c-subnav"
  }, renderItems(items, SubNavItem, {
    type: type
  }));
}

SubNav.propTypes = {
  items: PropTypes.array,
  type: SubNavItem.propTypes.type
};
SubNav.defaultProps = {
  items: []
};

function SubNavItem$1(_ref) {
  var fill = _ref.fill;
  return React__default.createElement("span", {
    className: "c-subnav__arrow o-arrow--down ".concat(fill ? "u-path-fill--".concat(fill) : '')
  });
}

SubNavItem$1.propTypes = {
  fill: PropTypes.oneOf(svgFillColors)
};

function PrimaryNavItem(_ref) {
  var text = _ref.text,
      url = _ref.url,
      active = _ref.active,
      subnav = _ref.subnav;
  return React__default.createElement("li", {
    className: "c-primary-nav__list-item ".concat(subnav ? 'has-subnav' : '')
  }, React__default.createElement("a", {
    className: "c-primary-nav__link u-font--primary-nav u-color--gray--dark u-theme--link-hover--base u-theme--border-color--base ".concat(active ? 'this-is-active' : ''),
    href: url
  }, text), subnav && React__default.createElement(SubNavItem$1, {
    fill: "gray"
  }), subnav && React__default.createElement(SubNav, {
    items: subnav,
    type: "primary"
  }));
}

PrimaryNavItem.propTypes = {
  active: PropTypes.bool,
  subnav: PropTypes.array,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
PrimaryNavItem.defaultProps = {
  active: false
};

function PrimaryNavBase(_ref) {
  var items = _ref.items,
      children = _ref.children,
      others = _objectWithoutProperties(_ref, ["items", "children"]);

  var hasDropdown = others.hasDropdown,
      mainNavRef = others.mainNavRef,
      wrapperNavRef = others.wrapperNavRef;
  return React__default.createElement("nav", {
    className: "c-primary-nav c-priority-nav priority-nav ".concat(hasDropdown ? 'priority-nav-has-dropdown' : ''),
    ref: wrapperNavRef,
    role: "navigation"
  }, React__default.createElement("ul", {
    className: "c-primary-nav__list c-priority-nav__list",
    ref: mainNavRef
  }, renderItems(items, PrimaryNavItem)), children);
}

PrimaryNavBase.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.node
};

function PrimaryNavWithPriority(_ref2) {
  var items = _ref2.items;

  var _useDrawerContext = useDrawerContext(),
      openDrawer = _useDrawerContext.openDrawer;

  var _usePriorityNav = usePriorityNav({
    total: items.length
  }),
      dropdownRef = _usePriorityNav.dropdownRef,
      hasDropdown = _usePriorityNav.hasDropdown,
      lastVisibleIndex = _usePriorityNav.lastVisibleIndex,
      rest = _objectWithoutProperties(_usePriorityNav, ["dropdownRef", "hasDropdown", "lastVisibleIndex"]);

  var priorityItems = items.filter(function (item, index) {
    return index <= lastVisibleIndex;
  });
  return React__default.createElement(PrimaryNavBase, _extends({
    items: priorityItems
  }, rest), React__default.createElement("span", {
    "aria-haspopup": !hasDropdown,
    className: "c-priority-nav__dropdown-wrapper priority-nav__wrapper"
  }, React__default.createElement("button", {
    "aria-controls": "menu",
    className: "c-priority-nav__toggle priority-nav__dropdown-toggle priority-nav-is-".concat(hasDropdown ? 'visible' : 'hidden'),
    onClick: openDrawer,
    type: "button",
    ref: dropdownRef
  }, '')));
}

PrimaryNavWithPriority.propTypes = {
  items: PropTypes.array
};

function PrimaryNavigation(_ref3) {
  var hasPriorityNav = _ref3.hasPriorityNav,
      items = _ref3.items;
  return hasPriorityNav ? React__default.createElement(PrimaryNavWithPriority, {
    items: items
  }) : React__default.createElement(PrimaryNavBase, {
    items: items
  });
}

PrimaryNavigation.propTypes = {
  hasPriorityNav: PropTypes.bool,
  items: PropTypes.array
};
PrimaryNavigation.defaultProps = {
  hasPriorityNav: false,
  items: []
};

function SecondaryNavItem(_ref) {
  var icon = _ref.icon,
      isPriority = _ref.isPriority,
      onClick = _ref.onClick,
      subnav = _ref.subnav,
      type = _ref.type,
      text = _ref.text,
      url = _ref.url;
  return React__default.createElement("li", {
    className: "c-secondary-nav__list-item ".concat(isPriority ? 'is-priority' : '', " ").concat(subnav ? 'has-subnav' : '', " ").concat(type ? "c-secondary-nav__list-item__".concat(type) : '', "\n      ")
  }, React__default.createElement("a", {
    className: "c-secondary-nav__link u-font--secondary-nav u-color--gray u-theme--link-hover--base",
    href: onClick ? '#' : url,
    onClick: onClick
  }, icon && React__default.createElement(IconWrap, {
    name: icon,
    size: "xs",
    fill: "gray"
  }), text, "\xA0", subnav && React__default.createElement(SubNavItem$1, null)), subnav && React__default.createElement(SubNav, {
    items: subnav,
    type: "secondary"
  }));
}

SecondaryNavItem.propTypes = {
  icon: PropTypes.string,
  isPriority: PropTypes.bool,
  onClick: PropTypes.func,
  subnav: PropTypes.array,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['search', 'menu']),
  url: PropTypes.string
};
SecondaryNavItem.defaultProps = {
  isPriority: false,
  url: '#'
};

function SecondaryNavLanguageItem(_ref) {
  var label = _ref.label,
      languages = _ref.languages;
  return React__default.createElement("li", {
    className: "c-secondary-nav__list-item c-secondary-nav__list-item__language c-secondary-nav__list-item__toggle is-priority"
  }, React__default.createElement("select", {
    className: "u-font--secondary-nav u-color--gray"
  }, React__default.createElement("option", {
    value: "language",
    disabled: true
  }, label), es6Shim.Object.keys(languages).map(function (language) {
    return React__default.createElement("option", {
      value: language,
      key: language
    }, languages[language]);
  })));
}

SecondaryNavLanguageItem.propTypes = {
  label: PropTypes.string,
  languages: PropTypes.object
};
SecondaryNavLanguageItem.defaultProps = {
  label: 'Language',
  languages: {
    english: 'English',
    french: 'Français',
    german: 'Deutsch',
    spanish: 'Español',
    chineseTraditional: '中文',
    arabic: 'عربى'
  }
};

function SecondaryNavigation(_ref) {
  var items = _ref.items,
      menuLabel = _ref.menuLabel,
      searchLabel = _ref.searchLabel,
      showLanguages = _ref.showLanguages,
      showMenu = _ref.showMenu,
      showSearch = _ref.showSearch;

  var _useDrawerContext = useDrawerContext(),
      openDrawer = _useDrawerContext.openDrawer,
      openDrawerWithSearch = _useDrawerContext.openDrawerWithSearch;

  return React__default.createElement("nav", {
    className: "c-secondary-nav",
    role: "navigation"
  }, React__default.createElement("ul", {
    className: "c-secondary-nav__list"
  }, showLanguages && React__default.createElement(SecondaryNavLanguageItem, null), renderItems(items, SecondaryNavItem), showSearch && React__default.createElement(SecondaryNavItem, {
    text: searchLabel,
    icon: "search",
    type: "search",
    isPriority: true,
    onClick: openDrawerWithSearch
  }), showMenu && React__default.createElement(SecondaryNavItem, {
    text: menuLabel,
    icon: "menu",
    type: "menu",
    isPriority: true,
    onClick: openDrawer
  })));
}

SecondaryNavigation.propTypes = {
  items: PropTypes.array,
  menuLabel: PropTypes.string,
  searchLabel: PropTypes.string,
  showLanguages: PropTypes.bool,
  showMenu: PropTypes.bool,
  showSearch: PropTypes.bool
};
SecondaryNavigation.defaultProps = {
  items: [],
  menuLabel: 'Menu',
  searchLabel: 'Search',
  showLanguages: true,
  showMenu: true,
  showSearch: true
};

function DrawerNavigation(_ref) {
  var aboutLeft = _ref.aboutLeft,
      aboutRight = _ref.aboutRight,
      onSearch = _ref.onSearch,
      primaryNav = _ref.primaryNav,
      secondaryNav = _ref.secondaryNav;

  var _useDrawerContext = useDrawerContext(),
      closeDrawer = _useDrawerContext.closeDrawer,
      isOpen = _useDrawerContext.isOpen;

  return React__default.createElement(GridSeven, {
    className: "c-drawer ".concat(isOpen.menu ? 'this-is-active' : '')
  }, React__default.createElement(Element, {
    className: "c-drawer__toggle",
    themeBackgroundTrans: "darker",
    onClick: closeDrawer
  }, React__default.createElement("div", {
    className: "u-icon o-icon__close"
  }, React__default.createElement("span", null), React__default.createElement("span", null))), React__default.createElement(GridItem, {
    className: "c-drawer__container l-grid-wrap--6-of-7",
    wrap: "6",
    sizeAtS: "6",
    noItemClass: true,
    spacing: true,
    themeBackground: "darker"
  }, React__default.createElement("div", {
    className: "c-drawer__search"
  }, React__default.createElement(Search, {
    onSearch: onSearch,
    hasFocus: isOpen.search
  })), React__default.createElement("div", {
    className: "c-drawer__nav"
  }, React__default.createElement("div", {
    className: "c-drawer__nav-primary"
  }, React__default.createElement(PrimaryNavigation, primaryNav), React__default.createElement(Element, {
    as: "ul",
    className: "c-drawer__subnav",
    themeBackground: "darker"
  })), React__default.createElement("div", {
    className: "c-drawer__nav-secondary"
  }, React__default.createElement(SecondaryNavigation, _extends({}, secondaryNav, {
    showLanguages: false,
    showMenu: false,
    showSearch: false
  })))), React__default.createElement("div", {
    className: "c-drawer__logo"
  }, React__default.createElement(IconWrap, {
    name: "logo",
    fill: "white",
    size: "l"
  })), React__default.createElement("div", {
    className: "c-drawer__about"
  }, React__default.createElement("div", {
    className: "c-drawer__about-left u-spacing"
  }, aboutLeft), React__default.createElement("div", {
    className: "c-drawer__about-right u-spacing--half"
  }, aboutRight))));
}

DrawerNavigation.propTypes = {
  aboutLeft: PropTypes.node,
  aboutRight: PropTypes.node,
  onSearch: PropTypes.func,
  primaryNav: PropTypes.object,
  secondaryNav: PropTypes.object
};
DrawerNavigation.defaultProps = {
  aboutLeft: React__default.createElement(React__default.Fragment, null, React__default.createElement("p", null, "Tell the world is an offical media production of the Seventh-day Adventist world church."), React__default.createElement("p", null, "Seventh-day Adventists are devoted to helping people understand the Bible to find freedom, healing and hope.")),
  aboutRight: React__default.createElement(React__default.Fragment, null, React__default.createElement("h3", {
    className: "u-font--secondary--s u-text-transform--upper"
  }, React__default.createElement("strong", null, "Learn More:")), React__default.createElement("p", {
    className: "u-spacing--half"
  }, React__default.createElement("a", {
    href: "",
    target: "_blank",
    className: "u-link--white"
  }, "Adventist.org"), React__default.createElement("a", {
    href: "",
    target: "_blank",
    className: "u-link--white"
  }, "North American Division of Seventh-day Adventists"), React__default.createElement("a", {
    href: "",
    target: "_blank",
    className: "u-link--white"
  }, "ADRA International")))
};

function FooterPrimaryNavigation(_ref) {
  var items = _ref.items;
  return React__default.createElement("nav", {
    className: "c-footer__primary-nav__list u-spacing--half"
  }, items.map(function (_ref2, key) {
    var text = _ref2.text,
        url = _ref2.url;
    return React__default.createElement("a", {
      href: url,
      className: "c-footer__primary-nav__link u-theme--link-hover--light u-link--white",
      key: "footer-nav-link-".concat(key)
    }, React__default.createElement("strong", null, text));
  }));
}

FooterPrimaryNavigation.propTypes = {
  items: PropTypes.array
};
FooterPrimaryNavigation.defaultProps = {
  items: []
};

function FooterSecondaryNavigation(_ref) {
  var defaultItemIcon = _ref.defaultItemIcon,
      items = _ref.items;
  return React__default.createElement("nav", {
    className: "c-footer__primary-nav__list u-spacing--half"
  }, items.map(function (_ref2, key) {
    var icon = _ref2.icon,
        text = _ref2.text,
        url = _ref2.url;
    return React__default.createElement("a", {
      href: url,
      className: "c-footer__secondary-nav__link u-link--white u-theme--link-hover--light",
      key: "footer-nav-link-".concat(key)
    }, React__default.createElement(IconWrap, {
      className: "u-space--half--right",
      color: "white",
      size: "xs",
      name: icon || defaultItemIcon
    }), React__default.createElement("font", null, text));
  }));
}

FooterSecondaryNavigation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })),
  defaultItemIcon: PropTypes.string
};
FooterSecondaryNavigation.defaultProps = {
  items: [],
  defaultItemIcon: 'legal'
};

/**
 *
 * @param {object} parameters
 *
 * @returns {Array} - pages
 */

function usePagination(_ref) {
  var _ref2;

  var current = _ref.current,
      dividerLabel = _ref.dividerLabel,
      firstLabel = _ref.firstLabel,
      lastLabel = _ref.lastLabel,
      nextLabel = _ref.nextLabel,
      onNextClick = _ref.onNextClick,
      onPageClick = _ref.onPageClick,
      onPrevClick = _ref.onPrevClick,
      prevLabel = _ref.prevLabel,
      setUrl = _ref.setUrl,
      showFirstAndLast = _ref.showFirstAndLast,
      showPrevAndNext = _ref.showPrevAndNext,
      surrounding = _ref.surrounding,
      last = _ref.total;
  var first = 1;
  var lowerOffset = current - surrounding;
  var higerOffset = current + surrounding;
  var lowerLimit = first + surrounding;
  var higerLimit = last - surrounding; // Recalculate offsets

  lowerOffset = lowerOffset - 1 > lowerLimit ? lowerOffset : first;
  higerOffset = higerOffset + 1 < higerLimit ? higerOffset : last; // Initialize pages array

  var pages = []; // Divider object

  var divider = {
    isDivider: true,
    label: dividerLabel // Generates a page object

  };

  function setPage(number) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _objectSpread({}, props, {
      number: number,
      url: setUrl(number),
      isCurrent: number === current ? true : undefined
    });
  } // Generates pages for given range


  function setPagesForRange(range) {
    return range.map(function (i) {
      return setPage(i, {
        onClick: onPageClick
      });
    });
  } // Add links and pages:
  // - First and Prev Links


  if (current > first) {
    // - Link First
    if (showFirstAndLast) {
      pages.push(setPage(first, {
        label: firstLabel
      }));
    } // - Link Prev


    if (showPrevAndNext) {
      pages.push(setPage(current - 1, {
        label: prevLabel,
        isPrev: true,
        onClick: onPrevClick
      }));
    }
  } // - First numbered pages


  if (lowerOffset > lowerLimit) {
    var firstRange = range(first, first + surrounding);
    pages.push(setPagesForRange(firstRange));
    pages.push(divider);
  } // - Middle numbered pages


  var middleRange = range(lowerOffset, higerOffset);
  pages.push(setPagesForRange(middleRange)); // - Last numbered pages

  if (higerOffset < last) {
    var lastRange = range(last - surrounding, last);
    pages.push(divider);
    pages.push(setPagesForRange(lastRange));
  } // - Next and Last Links


  if (current < last) {
    // - Link Next
    if (showPrevAndNext) {
      pages.push(setPage(current + 1, {
        label: nextLabel,
        isNext: true,
        onClick: onNextClick
      }));
    } // - Last page


    if (showFirstAndLast) {
      pages.push(setPage(last, {
        label: lastLabel
      }));
    }
  }

  return (_ref2 = []).concat.apply(_ref2, pages);
}

function onItemClick(number, cb) {
  return cb ? function (event) {
    event.preventDefault();
    cb(number);
  } : null;
}

function PaginationItem(_ref) {
  var number = _ref.number,
      isCurrent = _ref.isCurrent,
      isDivider = _ref.isDivider,
      isPrev = _ref.isPrev,
      isNext = _ref.isNext,
      label = _ref.label,
      onClick = _ref.onClick,
      url = _ref.url;
  return isCurrent ? React__default.createElement("span", {
    className: "pagination__page pagination__page--current u-padding--quarter u-theme--color--base u-font-weight--bold"
  }, number) : isDivider ? React__default.createElement("span", {
    className: "pagination__divide"
  }, label) : React__default.createElement("a", {
    className: "pagination__page ".concat(isPrev || isNext ? "pagination__".concat(isPrev ? 'prev' : 'next') : '', " u-padding--quarter u-theme--color--darker u-font-weight--bold"),
    href: url,
    onClick: onItemClick(number, onClick)
  }, label || number);
}

PaginationItem.propTypes = {
  number: PropTypes.number,
  isCurrent: PropTypes.bool,
  isDivider: PropTypes.bool,
  isNext: PropTypes.bool,
  isPrev: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  url: PropTypes.string
};
PaginationItem.defaultProps = {
  number: 1,
  url: ''
};

function Pagination(props) {
  var pages = usePagination(props);
  return React__default.createElement("nav", {
    className: "pagination u-center-block u-text-align--center",
    role: "navigation"
  }, renderItems(pages, PaginationItem));
}

Pagination.propTypes = {
  current: PropTypes.number,
  dividerLabel: PropTypes.string,
  firstLabel: PropTypes.string,
  lastLabel: PropTypes.string,
  nextLabel: PropTypes.string,
  onPageClick: PropTypes.func,
  onNextClick: PropTypes.func,
  onPrevClick: PropTypes.func,
  prevLabel: PropTypes.string,
  setUrl: PropTypes.func,
  showFirstAndLast: PropTypes.bool,
  showPrevAndNext: PropTypes.bool,
  surrounding: PropTypes.number,
  total: PropTypes.number.isRequired
};
Pagination.defaultProps = {
  current: 1,
  dividerLabel: '…',
  // Using actual chat instead of HTLM Entity &hellip.
  firstLabel: 'First',
  lastLabel: 'Last',
  nextLabel: 'Next',
  prevLabel: 'Prev',
  setUrl: function setUrl(number) {
    return "?page=".concat(number);
  },
  showFirstAndLast: false,
  showPrevAndNext: true,
  surrounding: 3
};

function Byline(_ref) {
  var children = _ref.children;
  return React__default.createElement("div", {
    className: "byline u-font--secondary--s u-color--gray can-be--white"
  }, children);
}

Byline.propTypes = {
  children: PropTypes.string
};

function ExtendedQuote(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React__default.createElement("div", {
    className: "text"
  }, React__default.createElement("blockquote", _extends({
    className: "quote--extended"
  }, props), children));
}

ExtendedQuote.propTypes = {
  children: PropTypes.node
};

function Highlight(_ref) {
  var children = _ref.children;
  return React__default.createElement("p", {
    className: "o-highlight u-padding u-background-color--gray--light can-be--dark-dark"
  }, children);
}

Highlight.propTypes = {
  children: PropTypes.node
};

function Pullquote(_ref) {
  var author = _ref.author,
      children = _ref.children,
      text = _ref.text;
  return React__default.createElement(Blockquote, null, children ? children : React__default.createElement("p", null, text), author && React__default.createElement("cite", {
    className: "o-citation u-theme--color--base"
  }, "\u2014 ", author));
}

Pullquote.propTypes = {
  author: PropTypes.string,
  children: PropTypes.node,
  text: PropTypes.string
};

// Molecules:

function BlockWrap(_ref) {
  var blocks = _ref.blocks,
      heading = _ref.heading,
      linkText = _ref.linkText,
      type = _ref.type,
      url = _ref.url;
  var wrapperClass = type == 'relatedPosts' ? 'c-related-posts' : 'c-block-wrap';
  return React__default.createElement("div", {
    className: "".concat(wrapperClass, " u-spacing")
  }, React__default.createElement(HeadingBlock, {
    title: heading,
    linkText: linkText,
    url: url
  }), React__default.createElement("div", {
    className: "".concat(wrapperClass, "__content u-spacing")
  }, renderItems(blocks, type == 'contentBlock' ? ContentBlock : MediaBlock)));
}

BlockWrap.propTypes = {
  blocks: PropTypes.array,
  heading: PropTypes.string,
  linkText: PropTypes.string,
  type: PropTypes.oneOf(['mediaBlock', 'contentBlock', 'relatedPosts']),
  url: PropTypes.string
};
BlockWrap.defaultProps = {
  type: 'mediaBlock',
  blocks: []
};

function Aside(_ref) {
  var primary = _ref.primary,
      secondary = _ref.secondary;
  return React__default.createElement("div", {
    className: "u-spacing--double u-padding--right"
  }, primary && React__default.createElement(BlockWrap, _extends({}, primary, {
    type: "mediaBlock"
  })), secondary && React__default.createElement(BlockWrap, _extends({}, secondary, {
    type: "contentBlock"
  })));
}

Aside.propTypes = {
  primary: PropTypes.shape(BlockWrap.propTypes),
  secondary: PropTypes.shape(BlockWrap.propTypes)
};

function RelatedPosts(props) {
  return React__default.createElement(BlockWrap, _extends({}, props, {
    type: "relatedPosts"
  }));
}

RelatedPosts.propTypes = _objectSpread({}, BlockWrap.propTypes);

var ArticleContent = function ArticleContent(_ref) {
  var children = _ref.children,
      sidebar = _ref.sidebar;
  return React__default.createElement(React__default.Fragment, null, children, React__default.createElement("div", {
    className: "c-sidebar l-grid-item l-grid-item--m--2-col l-grid-item--l--2-col"
  }, sidebar));
};

ArticleContent.propTypes = {
  children: PropTypes.node,
  sidebar: PropTypes.node
};
ArticleContent.defaultProps = {};

function BodyContent(_ref) {
  var children = _ref.children;
  return React__default.createElement("div", {
    className: "u-spacing--triple"
  }, children);
}

BodyContent.propTypes = {
  children: PropTypes.node
};

var PageContent = function PageContent(_ref) {
  var children = _ref.children,
      content = _ref.content,
      breadcrumbs = _ref.breadcrumbs;
  return React__default.createElement("div", {
    className: "text u-spacing"
  }, breadcrumbs.length > 0 && React__default.createElement(Breadcrumbs, {
    items: breadcrumbs
  }), children || content);
};

PageContent.propTypes = {
  breadcrumbs: Breadcrumbs.propTypes.items,
  children: PropTypes.node,
  content: PropTypes.node
};
PageContent.defaultProps = {
  breadcrumbs: []
};

function SearchResults(_ref) {
  var loadMoreLabel = _ref.loadMoreLabel,
      loadMoreUrl = _ref.loadMoreUrl,
      onLoadMore = _ref.onLoadMore,
      results = _ref.results,
      showLoadMore = _ref.showLoadMore;
  return React__default.createElement(Text, {
    className: "c-search-results",
    spacingSize: "double"
  }, renderItems(results, ContentBlock), showLoadMore && React__default.createElement(Button, {
    as: "a",
    url: loadMoreUrl,
    onClick: onLoadMore,
    spaceSide: "left",
    text: loadMoreLabel
  }));
}

SearchResults.propTypes = {
  results: PropTypes.array,
  loadMoreLabel: PropTypes.string,
  loadMoreUrl: PropTypes.string,
  onLoadMore: PropTypes.func,
  showLoadMore: PropTypes.bool
};
SearchResults.defaultProps = {
  results: [],
  loadMoreLabel: 'Load More',
  showLoadMore: true
};

function Footer(_ref) {
  var address = _ref.address,
      copyright = _ref.copyright,
      primaryNav = _ref.primaryNav,
      secondaryNav = _ref.secondaryNav,
      text = _ref.text;
  return React__default.createElement("footer", {
    className: "c-footer u-theme--background-color--primary u-theme--background-color--darker",
    role: "contentinfo"
  }, React__default.createElement("div", {
    className: "c-footer--inner u-color--white l-grid l-grid--7-col l-grid-wrap l-grid-wrap--6-of-7"
  }, React__default.createElement("div", {
    className: "l-grid-item l-grid-item--m--3-col c-footer__description"
  }, React__default.createElement("p", {
    className: "c-footer__description-text u-font--secondary--m"
  }, text)), primaryNav && React__default.createElement("div", {
    className: "l-grid-item l-grid-item--m--3-col l-grid-item--l--1-col c-footer__primary-nav"
  }, React__default.createElement(FooterPrimaryNavigation, primaryNav)), secondaryNav && React__default.createElement("div", {
    className: "l-grid-item l-grid-item--m--3-col l-grid-item--l--2-col c-footer__secondary-nav"
  }, React__default.createElement(FooterSecondaryNavigation, secondaryNav)), React__default.createElement("div", {
    className: "l-grid-item--7-col l-grid-item--m--1-col c-footer__logo u-path-fill--white"
  }, React__default.createElement(Icon, {
    name: "logo-round"
  })), React__default.createElement("div", {
    className: "l-grid-item l-grid-item--m--3-col c-footer__legal"
  }, React__default.createElement("p", {
    className: "c-footer__copyright"
  }, copyright), React__default.createElement("address", {
    className: "c-footer__address",
    itemProp: "address",
    itemScope: "",
    itemType: "http://schema.org/PostalAddress"
  }, React__default.createElement("span", {
    itemProp: "streetAddress"
  }, address.street), ",", ' ', React__default.createElement("span", {
    itemProp: "addressPostCode"
  }, address.postcode), ' ', React__default.createElement("span", {
    itemProp: "addressLocality"
  }, address.locality), ",", ' ', React__default.createElement("span", {
    itemProp: "addressRegion"
  }, address.region), ' ', address.country, ' ', React__default.createElement("a", {
    itemProp: "telephone",
    href: "tel:".concat(address.phone),
    className: "c-footer__phone u-link--white u-theme--link-hover--light"
  }, address.phone)))));
}

Footer.propTypes = {
  address: PropTypes.shape({
    street: PropTypes.string,
    postcode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    locality: PropTypes.string,
    region: PropTypes.string,
    country: PropTypes.string,
    phone: PropTypes.string
  }),
  copyright: PropTypes.string,
  primaryNav: PropTypes.object,
  secondaryNav: PropTypes.object,
  text: PropTypes.string
};
Footer.defaultProps = {
  address: {
    street: '12501 Old Columbia Pike',
    postcode: '20904',
    locality: 'Silver Spring',
    region: 'MD',
    country: 'USA',
    phone: '301-680-6000'
  },
  copyright: 'Copyright ©2019, General Conference of Seventh-day Adventists',
  text: 'Adventist.org is the Official website of the Seventh-day Adventist world church'
};

function Header(_ref) {
  var drawer = _ref.drawer,
      logo = _ref.logo,
      className = _ref.className,
      primaryNav = _ref.primaryNav,
      secondaryNav = _ref.secondaryNav;

  var canBeDark = logo.canBeDark,
      useFillTheme = logo.useFillTheme,
      logoProps = _objectWithoutProperties(logo, ["canBeDark", "useFillTheme"]);

  var logoClass = "".concat(canBeDark ? 'can-be--dark-dark' : '', " ").concat(useFillTheme ? 'u-theme--path-fill--base' : '');
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("header", {
    className: "c-header ".concat(className),
    role: "banner",
    id: "header"
  }, React__default.createElement("div", {
    className: "c-header--inner"
  }, React__default.createElement("div", {
    className: "c-header__nav-secondary"
  }, React__default.createElement(SecondaryNavigation, secondaryNav)), React__default.createElement("div", {
    className: "c-header__logo c-logo"
  }, React__default.createElement("a", {
    href: "/",
    className: "c-logo__link ".concat(logoClass)
  }, React__default.createElement(Logo, logoProps))), React__default.createElement("div", {
    className: "c-header__nav-primary"
  }, React__default.createElement(PrimaryNavigation, _extends({}, primaryNav, {
    hasPriorityNav: true
  }))))), React__default.createElement(DrawerNavigation, _extends({
    primaryNav: primaryNav,
    secondaryNav: secondaryNav
  }, drawer)));
}

Header.propTypes = {
  className: PropTypes.string,
  drawer: PropTypes.object,
  logo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    canBeDark: PropTypes.bool,
    useFillTheme: PropTypes.bool
  }),
  logoClass: PropTypes.string,
  primaryNav: PropTypes.object,
  secondaryNav: PropTypes.object
};
Header.defaultProps = {
  className: '',
  drawer: {},
  logo: {
    name: 'sda',
    canBeDark: false,
    useFillTheme: true
  },
  primaryNav: {},
  secondaryNav: {}
};

function ArticleFooter(_ref) {
  var children = _ref.children;
  return React__default.createElement("footer", {
    className: "c-article__footer u-padding--left"
  }, children);
}

ArticleFooter.propTypes = {
  children: PropTypes.node
};

function BlockFeed(_ref) {
  var blocks = _ref.blocks,
      blocksProps = _ref.blocksProps,
      blocksType = _ref.blocksType,
      grid = _ref.grid;

  var itemsProps = _objectSpread({}, blocksProps, {
    type: blocksType
  });

  return React__default.createElement("section", {
    className: "c-section c-section__block-feed u-spacing--double"
  }, grid ? React__default.createElement(Grid, {
    seven: true,
    noGutters: true
  }, renderItems(blocks, function (block) {
    return React__default.createElement(GridItem, {
      sizeAtS: "3",
      sizeAtXL: "2"
    }, React__default.createElement(MediaBlock, _extends({}, itemsProps, block)));
  })) : renderItems(blocks, MediaBlock, itemsProps));
}

BlockFeed.propTypes = {
  blocks: PropTypes.array,
  blocksProps: PropTypes.object,
  blocksType: PropTypes.oneOf(mediaBlocksTypes),
  grid: PropTypes.bool
};
BlockFeed.defaultProps = {
  blocksType: 'row',
  grid: false
};

function CommentsList(_ref) {
  var items = _ref.items,
      level = _ref.level;
  var childrenClass = level > 0 ? 'children__' : '';
  var listClass = "c-comment__".concat(childrenClass, "list");
  var itemClass = "".concat(listClass, "-item");
  return React__default.createElement("ul", {
    className: "".concat(listClass, " u-spacing")
  }, items.map(function (_ref2, key) {
    var byline = _ref2.byline,
        replies = _ref2.replies,
        date = _ref2.date,
        text = _ref2.text;
    return React__default.createElement("li", {
      className: "".concat(itemClass, " comment u-spacing"),
      key: "comment-".concat(key)
    }, React__default.createElement(Comment, {
      byline: byline,
      date: date,
      text: text
    }), replies && React__default.createElement(CommentsList, {
      items: replies,
      level: level + 1
    }));
  }));
}

CommentsList.propTypes = {
  level: PropTypes.number,
  items: PropTypes.array
};
CommentsList.defaultProps = {
  areReplies: false
};

function Comments(_ref3) {
  var items = _ref3.items,
      title = _ref3.title;
  return React__default.createElement("section", {
    className: "c-comments u-spacing--double"
  }, React__default.createElement(HeadingBlock, {
    title: title
  }), React__default.createElement(CommentsList, {
    items: items,
    level: 0
  }), React__default.createElement(CommentForm, null), " ");
}

Comments.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string.isRequired
};
Comments.defaultProps = {
  items: []
};

function HeroCarousel(props) {
  return React__default.createElement("section", {
    className: "c-hero-carousel"
  }, React__default.createElement(Carousel, props));
}

HeroCarousel.propTypes = _objectSpread({}, Carousel.propTypes);

var getBackgroundRule$1 = function getBackgroundRule(url) {
  return ".c-background-image {\n  background-image: url('".concat(url, "');\n}");
};

function PageHeader(_ref) {
  var title = _ref.title,
      kicker = _ref.kicker,
      background = _ref.background,
      url = _ref.url;
  var bgInlineStyles = useResponsiveStyles(getBackgroundRule$1, background);
  var backgroundClass = background ? 'c-background-image blended u-background--cover u-gradient--bottom' : '';
  return React__default.createElement("header", {
    className: "c-page-header c-page-header__simple u-theme--background-color--dark ".concat(backgroundClass)
  }, bgInlineStyles && React__default.createElement(InlineStyles, {
    styles: bgInlineStyles
  }), React__default.createElement("div", {
    className: "c-page-header__simple--inner u-padding"
  }, kicker && React__default.createElement("span", {
    className: "o-kicker u-color--white"
  }, kicker), React__default.createElement("h1", {
    className: "u-font--primary--xxl u-color--white"
  }, React__default.createElement("a", {
    className: "u-link--white u-link-hover--white",
    href: url
  }, title))));
}

PageHeader.propTypes = {
  background: PropTypes.object,
  kicker: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};
PageHeader.defaultProps = {
  className: ''
};

var pageHeaderFeatureBlockTypes = ['feature', 'column', 'full', 'longform'];

function PageHeaderFeature(_ref) {
  var blocks = _ref.blocks,
      blocksType = _ref.blocksType,
      hasScroll = _ref.hasScroll;
  var classes = [];
  if (blocksType === 'column') classes.push('c-page-header__3-col');
  if (hasScroll) classes.push('has-scroll');
  var headerClasses = classes.join(' ');
  return React__default.createElement("header", {
    className: "c-page-header c-page-header__feature ".concat(headerClasses)
  }, React__default.createElement("div", {
    className: "c-page-header__content"
  }, renderItems(blocks, MediaBlock, {
    type: blocksType
  })), hasScroll && React__default.createElement("a", {
    href: "#top",
    className: "c-page-header__scroll"
  }));
}

PageHeaderFeature.propTypes = {
  blocks: PropTypes.array,
  blocksType: PropTypes.oneOf(pageHeaderFeatureBlockTypes),
  hasScroll: PropTypes.bool
};
PageHeaderFeature.defaultProps = {
  blocks: [],
  blocksType: 'feature',
  hasScroll: false
};

var sliderProps$1 = {
  fade: false,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: {
    '500': {
      slidesToShow: 2,
      slidesToScroll: 2
    },
    '900': {
      slidesToShow: 3,
      slidesToScroll: 3
    },
    '1300': {
      slidesToShow: 6,
      slidesToScroll: 6
    }
  }
};

function Testimonies(_ref) {
  var items = _ref.items,
      linkText = _ref.linkText,
      linkUrl = _ref.linkUrl,
      shareText = _ref.shareText,
      shareUrl = _ref.shareUrl,
      title = _ref.title;
  return React__default.createElement("section", {
    className: "c-testimonies u-spacing u-posititon--relative"
  }, React__default.createElement(HeadingBlock, {
    linkText: linkText,
    spaceSide: "bottom",
    spaceSize: "double",
    title: title,
    url: linkUrl
  }), React__default.createElement(Slider, _extends({
    className: "l-grid l-grid-wrap l-grid-wrap--6-of-7"
  }, sliderProps$1), items.map(function (item, key) {
    return React__default.createElement("div", {
      className: "l-grid-item--6-col l-grid-item--m--3-col l-grid-item--l--2-col l-grid-item--xl--1-col u-space--bottom u-padding--zero--sides",
      key: "slide-".concat(key)
    }, React__default.createElement(ContentBlock, _extends({}, item, {
      className: "u-spacing--half u-padding--right",
      titleClass: "u-font--secondary--m u-text-transform--upper",
      titleStrong: true
    })));
  })), React__default.createElement(Button, {
    className: "u-space--lef",
    text: shareText,
    url: shareUrl
  }));
}

Testimonies.propTypes = {
  items: PropTypes.array,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
  shareText: PropTypes.string,
  shareUrl: PropTypes.string,
  title: PropTypes.string
};
Testimonies.defaultProps = {
  items: [],
  linkText: 'See All',
  shareText: 'Share your testimony!',
  title: 'Testimonies'
};

// Organisms:

var stickyBaseStyle = {
  zIndex: 99999,
  top: 0,
  position: 'fixed'
};

function useStickyLogo(showLogoOnScroll) {
  var logoWrapRef = React.useRef();
  var logoRef = React.useRef();

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      logoSize = _useState2[0],
      setlogoSize = _useState2[1];

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      logoMarginTop = _useState4[0],
      setLogoMarginTop = _useState4[1];

  var _useState5 = React.useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      logoInnerClass = _useState6[0],
      setLogoInnerClass = _useState6[1];

  var _useState7 = React.useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      opacity = _useState8[0],
      setOpacity = _useState8[1];

  function onScroll() {
    var logoElem = logoRef.current;
    var logoWrapElem = logoWrapRef.current;

    var _logoElem$getBounding = logoElem.getBoundingClientRect(),
        height = _logoElem$getBounding.height,
        width = _logoElem$getBounding.width;

    setlogoSize({
      height: height,
      width: width
    });

    if (logoWrapElem) {
      var _logoWrapElem$getBoun = logoWrapElem.getBoundingClientRect(),
          wrapHeight = _logoWrapElem$getBoun.height;

      setLogoMarginTop(wrapHeight);
    }

    var vericalOffset = window.pageYOffset;
    var headerHeight = 0; //'.c-header'.outerHeight()
    // Calculate scroll percent

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollpercent = winScroll / scrollHeight; // Set opacity

    setOpacity(1 - scrollpercent); // Set inner logo visibiliy class when vertical offset is higher than header

    if (showLogoOnScroll) {
      var scrolling = vericalOffset > headerHeight;
      setLogoInnerClass(scrolling ? 'is-visible' : 'is-hidden');
    }
  }

  useWindowEvent('scroll', onScroll, 0);
  var opacityStyle = {
    opacity: opacity
  };
  var stickyLogoStyle = logoSize ? _objectSpread({}, stickyBaseStyle, logoSize, {
    marginTop: logoMarginTop
  }) : null;
  return {
    opacityStyle: opacityStyle,
    stickyLogoStyle: stickyLogoStyle,
    logoInnerClass: logoInnerClass,
    logoRef: logoRef,
    logoWrapRef: logoWrapRef
  };
}

function Sabbath(_ref) {
  var backgroundImage = _ref.backgroundImage,
      logo = _ref.logo,
      showLogo = _ref.showLogo,
      showLogoOnScroll = _ref.showLogoOnScroll,
      stickyLogo = _ref.stickyLogo;

  var _useDrawerContext = useDrawerContext(),
      openDrawer = _useDrawerContext.openDrawer;

  var _useStickyLogo = useStickyLogo(showLogoOnScroll),
      opacityStyle = _useStickyLogo.opacityStyle,
      stickyLogoStyle = _useStickyLogo.stickyLogoStyle,
      logoInnerClass = _useStickyLogo.logoInnerClass,
      logoRef = _useStickyLogo.logoRef,
      logoWrapRef = _useStickyLogo.logoWrapRef;

  return React__default.createElement("aside", {
    className: "l-wrap__sabbath l-sabbath ".concat(backgroundImage ? 'u-background-image--sabbath' : '', " ###js-toggle-menu###") // TODO: replace js-toggle-menu
    ,
    onClick: openDrawer
  }, backgroundImage ? React__default.createElement(React__default.Fragment, null, React__default.createElement(InlineStyles, {
    styles: ".u-background-image--sabbath { background-image: url('".concat(backgroundImage, "') !important; }")
  }), showLogo && React__default.createElement("div", {
    className: "l-sabbath__logo u-path-fill--white",
    ref: logoRef,
    style: stickyLogo ? stickyLogoStyle : null
  }, React__default.createElement(Icon, {
    name: logo
  }))) : React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    className: "l-sabbath__logo",
    ref: logoWrapRef
  }, showLogo && React__default.createElement("div", {
    className: "l-sabbath__logo--inner ".concat(stickyLogo ? logoInnerClass : ''),
    ref: logoRef,
    style: stickyLogo ? stickyLogoStyle : null
  }, React__default.createElement("div", {
    className: "l-sabbath__logo-light u-path-fill--white",
    style: opacityStyle
  }, React__default.createElement(Icon, {
    name: logo
  })), React__default.createElement("div", {
    className: "l-sabbath__logo-dark u-theme--path-fill--base"
  }, React__default.createElement(Icon, {
    name: logo
  })))), React__default.createElement("div", {
    className: "l-sabbath__overlay u-theme--background-color--base",
    style: opacityStyle
  })));
}

Sabbath.propTypes = {
  backgroundImage: PropTypes.string,
  logo: PropTypes.oneOf(iconNames),
  showLogo: PropTypes.bool,
  showLogoOnScroll: PropTypes.bool,
  stickyLogo: PropTypes.bool
};
Sabbath.defaultProps = {
  showLogo: true,
  showLogoOnScroll: false,
  stickyLogo: false
};

/**
 * TemplateWrap component
 *
 * Note: Don't use directly! This component is meant only to be used by templates.
 *
 * @param {Object} props
 */

function TemplateWrap(_ref) {
  var children = _ref.children,
      footer = _ref.footer,
      header = _ref.header,
      sabbath = _ref.sabbath;
  return React__default.createElement("div", {
    className: "l-wrap"
  }, React__default.createElement("div", {
    className: "l-wrap__content l-content",
    role: "document"
  }, React__default.createElement(Header, header), children, React__default.createElement(Footer, footer)), React__default.createElement(Sabbath, sabbath));
}

TemplateWrap.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.object,
  header: PropTypes.object,
  sabbath: PropTypes.object
};
TemplateWrap.defaultProps = {};

function BasicPage(_ref) {
  var aside = _ref.aside,
      background = _ref.background,
      breadcrumbs = _ref.breadcrumbs,
      breakout = _ref.breakout,
      content = _ref.content,
      kicker = _ref.kicker,
      relatedPosts = _ref.relatedPosts,
      title = _ref.title,
      templateProps = _objectWithoutProperties(_ref, ["aside", "background", "breadcrumbs", "breakout", "content", "kicker", "relatedPosts", "title"]);

  var hasSidebar = aside || breakout || relatedPosts;
  var pageHeaderProps = {
    background: background,
    kicker: kicker,
    title: title
  };
  return React__default.createElement(TemplateWrap, templateProps, React__default.createElement("main", {
    className: "l-main u-spacing--double u-padding--double--bottom",
    role: "main"
  }, React__default.createElement(PageHeader, pageHeaderProps), React__default.createElement("section", {
    id: "top",
    className: "l-main__content l-grid l-grid--7-col u-shift--left--1-col--at-".concat(hasSidebar ? 'xxlarge' : 'large', " l-grid-wrap--6-of-7 u-spacing--double--until-xxlarge u-padding--zero--sides")
  }, React__default.createElement("article", {
    className: "c-article l-grid-item l-grid-item--l--4-col ".concat(hasSidebar ? 'l-grid-item--xl--3-col' : '')
  }, React__default.createElement("div", {
    className: "c-article__body"
  }, React__default.createElement(PageContent, {
    breadcrumbs: breadcrumbs
  }, content))), hasSidebar && React__default.createElement("div", {
    className: "c-sidebar l-grid-item l-grid-item--l--2-col l-grid-item--xl--2-col u-spacing u-padding--zero--sides"
  }, breakout && React__default.createElement(BreakoutBlock, breakout), aside && React__default.createElement(Aside, aside), relatedPosts && React__default.createElement(RelatedPosts, relatedPosts)))));
}

BasicPage.propTypes = _objectSpread({
  aside: PropTypes.object,
  background: PageHeader.propTypes.backgroundSrcSet,
  breadcrumbs: PageContent.propTypes.breadcrumbs,
  breakout: PropTypes.shape(BreakoutBlock.propTypes),
  content: PropTypes.node.isRequired,
  kicker: PageHeader.propTypes.kicker,
  relatedPosts: PropTypes.oneOfType([PropTypes.element]),
  title: PageHeader.propTypes.title
}, TemplateWrap.propTypes);
BasicPage.defaultProps = {
  breadcrumbs: []
};

function ChannelMain(_ref) {
  var props = _extends({}, _ref);

  return React__default.createElement(BasicPage, props);
}

ChannelMain.propTypes = _objectSpread({}, BasicPage.props);

function ArticleWrap(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React__default.createElement(GridSeven, {
    as: "section",
    shiftSide: "left",
    shiftAt: "xxlarge",
    spacingSize: "double",
    spacingUntil: "large"
  }, React__default.createElement(GridItem, {
    className: "c-article",
    sizeAtL: "4",
    sizeAtXL: "3"
  }, React__default.createElement(Text, _extends({
    as: "article",
    className: "c-article__body"
  }, props), children)));
}

ArticleWrap.propTypes = _objectSpread({
  children: PropTypes.node
}, Text.propTypes);
ArticleWrap.defaultProps = {};

function Main(_ref) {
  var children = _ref.children,
      paddingSide = _ref.paddingSide,
      paddingSize = _ref.paddingSize,
      spacingSize = _ref.spacingSize,
      props = _objectWithoutProperties(_ref, ["children", "paddingSide", "paddingSize", "spacingSize"]);

  return React__default.createElement(Element, _extends({}, props, {
    as: "main",
    className: "l-main",
    paddingSide: paddingSide,
    paddingSize: paddingSize,
    spacingSize: spacingSize,
    role: "main"
  }), children);
}

Main.propTypes = _objectSpread({
  children: PropTypes.node
}, Element.propTypes);
Main.defaultProps = {
  paddingSide: 'bottom',
  paddingSize: 'double',
  spacingSize: 'double'
};

// Tenplates:

function Body(_ref) {
  var children = _ref.children,
      primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor,
      style = _ref.style;

  var _useDrawerContext = useDrawerContext(),
      isOpen = _useDrawerContext.isOpen;

  return React__default.createElement("div", {
    className: "u-theme--".concat(primaryColor),
    style: style
  }, React__default.createElement("div", {
    className: "body has-grid u-theme--".concat(secondaryColor, " ").concat(isOpen.menu ? 'menu-is-active' : '')
  }, children));
}

Body.propTypes = {
  children: PropTypes.node,
  primaryColor: PropTypes.oneOf(primaryColors),
  secondaryColor: PropTypes.oneOf(secondaryColors),
  style: PropTypes.object
};
Body.defaultProps = {
  primaryColor: 'ming',
  secondaryColor: ''
};

function Wrapper(props) {
  return React__default.createElement(DrawerContextProvider, null, React__default.createElement(Body, props));
}

Wrapper.propTypes = Body.propTypes;
Wrapper.defaultProps = Body.defaultProps;

exports.Wrapper = Wrapper;
exports.Button = Button;
exports.Grid = Grid;
exports.GridItem = GridItem;
exports.GridSeven = GridSeven;
exports.Icon = Icon;
exports.IconWrap = IconWrap;
exports.Image = Image;
exports.Logo = Logo;
exports.Picture = Picture;
exports.Definition = Definition;
exports.Inline = Inline;
exports.List = List;
exports.Video = Video;
exports.Table = Table;
exports.Blockquote = Blockquote;
exports.Caption = Caption;
exports.Dropcap = Dropcap;
exports.Intro = Intro;
exports.Kicker = Kicker;
exports.Section = Section;
exports.Text = Text;
exports.Title = Title;
exports.BreakoutBlock = BreakoutBlock;
exports.ContentBlock = ContentBlock;
exports.ContentBlockExpand = ContentBlockExpand;
exports.GalleryBlock = GalleryBlock;
exports.HeadingBlock = HeadingBlock;
exports.MediaBlock = MediaBlock;
exports.Accordion = Accordion;
exports.Carousel = Carousel;
exports.Comment = Comment;
exports.FooterModal = FooterModal;
exports.ShareTools = ShareTools;
exports.Slide = Slide;
exports.CommentForm = CommentForm;
exports.FacetFilter = FacetFilter;
exports.InlineForm = InlineForm;
exports.LoginForm = LoginForm;
exports.Search = Search;
exports.SearchFilter = SearchFilter;
exports.SearchHeader = SearchHeader;
exports.SubscribeForm = SubscribeForm;
exports.BreakoutImage = BreakoutImage;
exports.Figcaption = Figcaption;
exports.Figure = Figure;
exports.FigureWithCaption = FigureWithCaption;
exports.VideoFigureWithCaption = VideoFigureWithCaption;
exports.Breadcrumbs = Breadcrumbs;
exports.DrawerNavigation = DrawerNavigation;
exports.FooterPrimaryNavigation = FooterPrimaryNavigation;
exports.FooterSecondaryNavigation = FooterSecondaryNavigation;
exports.Pagination = Pagination;
exports.PrimaryNavigation = PrimaryNavigation;
exports.SecondaryNavigation = SecondaryNavigation;
exports.Byline = Byline;
exports.ExtendedQuote = ExtendedQuote;
exports.Highlight = Highlight;
exports.Pullquote = Pullquote;
exports.Aside = Aside;
exports.RelatedPosts = RelatedPosts;
exports.ArticleContent = ArticleContent;
exports.BodyContent = BodyContent;
exports.PageContent = PageContent;
exports.SearchResults = SearchResults;
exports.Footer = Footer;
exports.Header = Header;
exports.ArticleFooter = ArticleFooter;
exports.BlockFeed = BlockFeed;
exports.Comments = Comments;
exports.HeroCarousel = HeroCarousel;
exports.PageHeader = PageHeader;
exports.PageHeaderFeature = PageHeaderFeature;
exports.Testimonies = Testimonies;
exports.BasicPage = BasicPage;
exports.ChannelMain = ChannelMain;
//# sourceMappingURL=alps-react.js.map
