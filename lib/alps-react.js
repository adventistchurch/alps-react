'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var Script = _interopDefault(require('react-load-script'));

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

var Svg = function Svg(_ref) {
  var children = _ref.children,
      title = _ref.title,
      viewBox = _ref.viewBox,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "title", "viewBox", "className"]);

  return React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: viewBox,
    className: className
  }, props), title && React.createElement("title", null, title), children);
};

Svg.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  viewBox: PropTypes.string,
  className: PropTypes.string
};

var ArrowBracketLeftIcon = function ArrowBracketLeftIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    title: "o-arrow__bracket--left",
    viewBox: "0 0 10 10",
    fill: fill
  }, React.createElement("path", {
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
  return React.createElement(Svg, {
    title: "o-arrow__bracket--right",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#9b9b9b"
  }, React.createElement("path", {
    d: "M6.75,3.59,3.25.09,1.84,1.5,5.34,5,1.84,8.5,3.25,9.91l3.5-3.5L8.16,5Z"
  }));
};

ArrowBracketRightIcon.propTypes = {
  fill: PropTypes.string
};

var ArrowLongLeftIcon = function ArrowLongLeftIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    title: "o-arrow__long--left",
    viewBox: "0 0 19.42 9.82",
    className: fill,
    fill: "#9b9b9b"
  }, React.createElement("path", {
    d: "M1.42,6.32l3.5,3.5L6.33,8.41l-2.5-2.5H19.42v-2H3.83l2.5-2.5L4.92,0,1.42,3.5,0,4.91Z"
  }));
};

ArrowLongLeftIcon.propTypes = {
  fill: PropTypes.string
};

var ArrowLongRightIcon = function ArrowLongRightIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    title: "o-arrow__long--right",
    viewBox: "0 0 20 20",
    className: fill,
    fill: "#9b9b9b"
  }, React.createElement("path", {
    d: "M18.29,8.59l-3.5-3.5L13.38,6.5,15.88,9H.29v2H15.88l-2.5,2.5,1.41,1.41,3.5-3.5L19.71,10Z"
  }));
};

ArrowLongRightIcon.propTypes = {
  fill: PropTypes.string
};

var ArrowShortLeftIcon = function ArrowShortLeftIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    title: "o-arrow__short--left",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#9b9b9b"
  }, React.createElement("path", {
    d: "M5,9.91,6.38,8.5,3.88,6H10V4H3.88l2.5-2.5L5,.09.05,5Z"
  }));
};

ArrowShortLeftIcon.propTypes = {
  fill: PropTypes.string
};

var ArrowShortRightIcon = function ArrowShortRightIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    title: "o-arrow__short--right",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#9b9b9b"
  }, React.createElement("path", {
    d: "M5,.09,3.62,1.5,6.12,4H.05V6H6.12L3.62,8.5,5,9.91,10,5Z"
  }));
};

ArrowShortRightIcon.propTypes = {
  fill: PropTypes.string
};

var CloseIcon = function CloseIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    title: "o-icon__close",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#9b9b9b"
  }, React.createElement("path", {
    d: "M9.91,1.5,8.5.09,5,3.59,1.5.09.09,1.5,3.59,5,.09,8.5,1.5,9.91,5,6.41l3.5,3.5L9.91,8.5,6.41,5Z"
  }));
};

CloseIcon.propTypes = {
  fill: PropTypes.string
};

var ContactIcon = function ContactIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    title: "o-icon__contact",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#9b9b9b"
  }, React.createElement("path", {
    d: "M0,0V8H6l4,2V0ZM8,6.76,6.47,6H2V2H8Z"
  }));
};

ContactIcon.propTypes = {
  fill: PropTypes.string
};

var DotsIcon = function DotsIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    title: "o-icon__dots",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#9b9b9b"
  }, React.createElement("path", {
    d: "M0,0H2V2H0ZM0,10H2V8H0ZM0,6H2V4H0Z"
  }));
};

DotsIcon.propTypes = {
  fill: PropTypes.string
};

var FindIcon = function FindIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    title: "o-icon__find",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#777"
  }, React.createElement("path", {
    d: "M0,4,2,8l4,2L10,0ZM5,7.24,3.49,6.51,2.76,5.05,6.41,3.59Z"
  }));
};

FindIcon.propTypes = {
  fill: PropTypes.string
};

var HeartIcon = function HeartIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    title: "o-icon__heart",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#777"
  }, React.createElement("path", {
    d: "M9,1.27A3.4,3.4,0,0,0,5,.73a3.4,3.4,0,0,0-4,.54A3.34,3.34,0,0,0,1,6l4,4L9,6A3.34,3.34,0,0,0,9,1.27ZM7.6,4.57,5,7.17,2.4,4.57a1.34,1.34,0,0,1,0-1.89,1.36,1.36,0,0,1,1.89,0L5,3.39l.71-.71a1.37,1.37,0,0,1,1.89,0A1.34,1.34,0,0,1,7.6,4.57Z"
  }));
};

HeartIcon.propTypes = {
  fill: PropTypes.string
};

var LanguageIcon = function LanguageIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    title: "o-icon__language",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#777"
  }, React.createElement("path", {
    d: "M10,4V2H6V0H4V2H0V4H5.9A9.16,9.16,0,0,1,4.51,5.56a8.84,8.84,0,0,1-1-1.08L1.9,5.74a12,12,0,0,0,1,1A26.55,26.55,0,0,1,.55,8.11l.9,1.78a22.2,22.2,0,0,0,3-1.8,23.58,23.58,0,0,0,3.06,1.8l.9-1.78A22.43,22.43,0,0,1,6.11,6.78,10.49,10.49,0,0,0,8.22,4Z"
  }));
};

LanguageIcon.propTypes = {
  fill: PropTypes.string
};

var LegalIcon = function LegalIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    title: "o-icon__legal",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#231f20"
  }, React.createElement("path", {
    d: "M10,2.31H0V0H10ZM6.36,3.85H0v2.3H6.36ZM8.22,7.7H0V10H8.22Z"
  }));
};

LegalIcon.propTypes = {
  fill: PropTypes.string
};

var LogoDarkIcon = function LogoDarkIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    title: "o-icon__logo-dark",
    viewBox: "0 0 253.71 227.63",
    className: fill,
    fill: "#000000"
  }, React.createElement("path", {
    d: "M67.68,120.38c-.1-9.91,2.8-18.41,20.8-36.41l39-39c10.4-10.4,19.1-19.29,19.1-29V.67c0-.89-1.1-.89-1.2,0-2.6,12.4-7.5,17.3-17.8,27.61L82.28,73.47c-17.1,17-19.5,35.1-15.8,46.91C66.78,121.38,67.68,121.47,67.68,120.38Zm64.2,38.9c0,.89,1,.89,1.2,0,2.6-12.5,7.6-17.4,17.8-27.61L166,116.78c19.8-19.9,10.7-39-.9-44.31-1-.5-1.4.31-.6,1,9.3,8,6.5,21.5-5.2,33.2L151,115c-10.4,10.31-19.1,19.2-19.1,29Zm81.8,26.6L168,178.17l-17.1,17.11c-10.4,10.39-19,19.3-19,29V227c0,.7.9.9,1.2.11,3.2-8.7,13.9-18.11,33.5-14.8,0,0,85.4,14.8,86.1,14.8a.9.9,0,0,0,1-.61.79.79,0,0,0-.2-.8c-.3-.39-39.8-39.8-39.8-39.8Zm-107.5,1h15a.66.66,0,0,0,.6-.6c0-7.9-6-13.31-30-9.2L40,186S.58,225.37.28,225.78a.79.79,0,0,0-.1,1.1.81.81,0,0,0,.8.2c.7-.11,86.1-14.8,86.1-14.8,19.6-3.31,30.3,6,33.5,14.8.3.8,1.2.7,1.2-.11v-29.5a.66.66,0,0,0-.6-.6l-15,.1a.64.64,0,0,1-.6-.6v-8.9a.65.65,0,0,1,.6-.6Zm26.8,25.9a36.3,36.3,0,0,1,6.9-15.81h-7.5a.65.65,0,0,0-.6.61v15.2c0,.89,1.1.89,1.2,0Zm13.6-158.6c0-.91-1.1-.91-1.2,0-2.6,12.39-7.5,17.29-17.8,27.6l-39.8,39.69c-19.8,19.81-10.7,39,.9,44.31,1,.5,1.4-.4.6-1-9.3-8-6.5-21.61,5.2-33.2l33-33c10.4-10.4,19.1-19.3,19.1-29Zm-19.1,17.49c10.4-10.3,19-19.2,19.1-29V27.27c0-.9-1.1-.9-1.2,0-2.6,12.4-7.5,17.4-17.8,27.7L86.68,95.78c-19.8,19.8-23.3,39-13.2,51.4.7.8,1.4.3,1-.7-6.7-15.1,9.3-31.1,16.9-38.7Zm37.6,82.5-14.3,14.2c-6.5,6.5-12.3,12.4-15.8,18.4h14.1l1.7-1.7,20.5-20.5c17.1-16.9,19.5-35,15.8-46.8-.3-1-1.2-1.1-1.2,0,.1,9.9-2.8,18.4-20.8,36.4Zm-2.8-24-11.4,11.5c-10.4,10.4-19.1,19.4-19.1,29.11v15.3c0,.89,1.1.89,1.2,0,2.6-12.4,7.5-17.4,17.8-27.7L167,142.17c19.8-19.8,23.3-39,13.2-51.4-.7-.8-1.4-.3-1,.7C185.88,106.57,169.88,122.57,162.28,130.17Zm83.5,68.2h1.1l1.7,3h1.5l-2-3.3a2,2,0,0,0,1.3-2c0-1.5-.8-2.2-2.7-2.2h-2.2v7.5h1.3v-3Zm0-3.5h.8c1,0,1.4.3,1.4,1.2,0,.7-.5,1.2-1.4,1.2h-.9v-2.4Zm1,9a6.3,6.3,0,1,0-6.3-6.3,6.08,6.08,0,0,0,5.87,6.3Zm0-11.7a5.4,5.4,0,1,1,0,10.8,5.31,5.31,0,0,1-5.4-5.23h0v-.16a5.24,5.24,0,0,1,5.11-5.39h.29Z"
  }));
};

LogoDarkIcon.propTypes = {
  fill: PropTypes.string
};

var LogoRoundIcon = function LogoRoundIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    title: "o-icon__logo-round",
    viewBox: "0 0 169.88 169.88",
    className: fill,
    fill: "#fff"
  }, React.createElement("path", {
    d: "M147.5,117c.67,0,1.07-.37,1.07-.91s-.34-.86-1.08-.86h-.63V117Zm-1.62-2.6h1.65c1.4,0,2,.56,2,1.66a1.49,1.49,0,0,1-1,1.46L150,120h-1.1l-1.28-2.23h-.8V120h-1Zm5.74,2.8a3.93,3.93,0,0,0-4-4,3.87,3.87,0,0,0-4,4,4,4,0,1,0,8,0Zm-8.69,0a4.55,4.55,0,0,1,4.71-4.71,4.62,4.62,0,0,1,4.71,4.71,4.71,4.71,0,1,1-9.42,0Zm-55.08-.31c0-5.71,5.08-10.92,11.13-17l6.71-6.71c4.45-4.45,13.79-13.8,9.89-22.62-.25-.58.17-.87.56-.39,5.9,7.21,3.89,18.43-7.7,30L99,109.64c-6,6-8.89,8.89-10.38,16.15-.11.55-.73.54-.73,0Zm-21.8-23c-6.81,6.82-8.46,14.72-3,19.42.45.39.22.87-.37.6-6.77-3.08-12.1-14.27-.5-25.87l23.2-23.18c6-6,8.88-8.84,10.38-16.1.11-.54.73-.54.73,0v8.9c0,5.7-5.08,10.92-11.13,17Zm-12.27,9.19c-5.9-7.21-3.89-18.43,7.7-30L85.36,49.18c6-6,8.89-8.9,10.38-16.16.12-.54.74-.54.74,0v9c0,5.7-5.09,10.92-11.14,17L64.24,80.06c-4.45,4.44-13.8,13.8-9.9,22.61C54.6,103.25,54.17,103.54,53.78,103.06Zm-4-15.71C47.61,80.47,49,69.92,59,60L85.33,33.57c6-6,8.9-8.85,10.39-16.11.11-.54.73-.54.73,0v8.9c0,5.7-5.08,10.92-11.13,17L62.58,66.06C52,76.61,50.37,81.58,50.42,87.36c0,.61-.5.57-.68,0Zm54.13-8c6.82-6.82,8.46-14.72,3-19.41-.45-.4-.21-.88.38-.61,6.76,3.08,12.09,14.28.5,25.87L99,94c-6,6-8.88,8.84-10.38,16.1-.11.55-.73.54-.73,0v-8.89c0-5.71,5.08-10.92,11.13-17Zm16.32,6.53c2.12,6.88.73,17.42-9.23,27.39l-12,12-1,1H89.77c2-3.47,5.43-6.93,9.23-10.73l8.34-8.34c10.55-10.55,12.21-15.51,12.16-21.29C119.5,85.25,120,85.28,120.19,85.87ZM88.6,141.35c-.11.55-.73.55-.73,0v-8.88a.36.36,0,0,1,.36-.36h4.4a21.27,21.27,0,0,0-4,9.25Zm19.54-.24c-11.45-1.93-17.7,3.52-19.57,8.62-.16.45-.7.38-.7,0V148.1c0-5.71,5.08-10.92,11.13-17l10-10,26.64,4.58,14.12,14.12a84.94,84.94,0,1,0-129.64,0L34.24,125.7l30.24-5.2c14-2.43,17.5.72,17.52,5.35a.37.37,0,0,1-.36.37H72.91a.37.37,0,0,0-.37.36v5.16a.37.37,0,0,0,.37.36h8.74a.37.37,0,0,1,.36.37v17.21c0,.43-.54.5-.7,0-1.87-5.1-8.11-10.55-19.57-8.62l-34.68,6a84.89,84.89,0,0,0,115.76,0l-34.68-6Z"
  }));
};

LogoRoundIcon.propTypes = {
  fill: PropTypes.string
};

var LogoIcon = function LogoIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    title: "Seventh Day Adventist Logo",
    viewBox: "0 0 253.71 227.63",
    className: fill,
    fill: "#000"
  }, React.createElement("path", {
    d: "M67.68,120.38c-.1-9.91,2.8-18.41,20.8-36.41l39-39c10.4-10.4,19.1-19.29,19.1-29V.67c0-.89-1.1-.89-1.2,0-2.6,12.4-7.5,17.3-17.8,27.61L82.28,73.47c-17.1,17-19.5,35.1-15.8,46.91C66.78,121.38,67.68,121.47,67.68,120.38Zm64.2,38.9c0,.89,1,.89,1.2,0,2.6-12.5,7.6-17.4,17.8-27.61L166,116.78c19.8-19.9,10.7-39-.9-44.31-1-.5-1.4.31-.6,1,9.3,8,6.5,21.5-5.2,33.2L151,115c-10.4,10.31-19.1,19.2-19.1,29Zm81.8,26.6L168,178.17l-17.1,17.11c-10.4,10.39-19,19.3-19,29V227c0,.7.9.9,1.2.11,3.2-8.7,13.9-18.11,33.5-14.8,0,0,85.4,14.8,86.1,14.8a.9.9,0,0,0,1-.61.79.79,0,0,0-.2-.8c-.3-.39-39.8-39.8-39.8-39.8Zm-107.5,1h15a.66.66,0,0,0,.6-.6c0-7.9-6-13.31-30-9.2L40,186S.58,225.37.28,225.78a.79.79,0,0,0-.1,1.1.81.81,0,0,0,.8.2c.7-.11,86.1-14.8,86.1-14.8,19.6-3.31,30.3,6,33.5,14.8.3.8,1.2.7,1.2-.11v-29.5a.66.66,0,0,0-.6-.6l-15,.1a.64.64,0,0,1-.6-.6v-8.9a.65.65,0,0,1,.6-.6Zm26.8,25.9a36.3,36.3,0,0,1,6.9-15.81h-7.5a.65.65,0,0,0-.6.61v15.2c0,.89,1.1.89,1.2,0Zm13.6-158.6c0-.91-1.1-.91-1.2,0-2.6,12.39-7.5,17.29-17.8,27.6l-39.8,39.69c-19.8,19.81-10.7,39,.9,44.31,1,.5,1.4-.4.6-1-9.3-8-6.5-21.61,5.2-33.2l33-33c10.4-10.4,19.1-19.3,19.1-29Zm-19.1,17.49c10.4-10.3,19-19.2,19.1-29V27.27c0-.9-1.1-.9-1.2,0-2.6,12.4-7.5,17.4-17.8,27.7L86.68,95.78c-19.8,19.8-23.3,39-13.2,51.4.7.8,1.4.3,1-.7-6.7-15.1,9.3-31.1,16.9-38.7Zm37.6,82.5-14.3,14.2c-6.5,6.5-12.3,12.4-15.8,18.4h14.1l1.7-1.7,20.5-20.5c17.1-16.9,19.5-35,15.8-46.8-.3-1-1.2-1.1-1.2,0,.1,9.9-2.8,18.4-20.8,36.4Zm-2.8-24-11.4,11.5c-10.4,10.4-19.1,19.4-19.1,29.11v15.3c0,.89,1.1.89,1.2,0,2.6-12.4,7.5-17.4,17.8-27.7L167,142.17c19.8-19.8,23.3-39,13.2-51.4-.7-.8-1.4-.3-1,.7C185.88,106.57,169.88,122.57,162.28,130.17Zm83.5,68.2h1.1l1.7,3h1.5l-2-3.3a2,2,0,0,0,1.3-2c0-1.5-.8-2.2-2.7-2.2h-2.2v7.5h1.3v-3Zm0-3.5h.8c1,0,1.4.3,1.4,1.2,0,.7-.5,1.2-1.4,1.2h-.9v-2.4Zm1,9a6.3,6.3,0,1,0-6.3-6.3,6.08,6.08,0,0,0,5.87,6.3Zm0-11.7a5.4,5.4,0,1,1,0,10.8,5.31,5.31,0,0,1-5.4-5.23h0v-.16a5.24,5.24,0,0,1,5.11-5.39h.29Z"
  }));
};

LogoIcon.propTypes = {
  fill: PropTypes.string
};

var MenuIcon = function MenuIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    title: "o-icon__menu",
    viewBox: "0 0 10 10",
    className: fill,
    fill: "#9b9b9b"
  }, React.createElement("path", {
    d: "M0,0H10V2H0ZM0,10H10V8H0ZM0,6H10V4H0Z"
  }));
};

MenuIcon.propTypes = {
  fill: PropTypes.string
};

var PlusIcon = function PlusIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    viewBox: "0 0 10 10",
    title: "o-icon__plus",
    className: fill,
    fill: "#9b9b9b"
  }, React.createElement("path", {
    d: "M10,4H6V0H4V4H0V6H4v4H6V6h4Z"
  }));
};

PlusIcon.propTypes = {
  fill: PropTypes.string
};

var SearchIcon = function SearchIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    viewBox: "0 0 10 10",
    title: "o-icon__search",
    className: fill,
    fill: "#777"
  }, React.createElement("path", {
    d: "M9.91,8.5,7.43,6A4,4,0,1,0,4,8a4,4,0,0,0,2-.57L8.5,9.91ZM2,4A2,2,0,1,1,4,6,2,2,0,0,1,2,4Z"
  }));
};

SearchIcon.propTypes = {
  fill: PropTypes.string
};

var SettingsIcon = function SettingsIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    viewBox: "0 0 14 14",
    title: "o-icon__settings",
    className: fill,
    fill: "#808080"
  }, React.createElement("path", {
    d: "M12.767 8.343c-0.735-1.272-0.293-2.903 0.986-3.643l-1.376-2.383c-0.393 0.23-0.85 0.363-1.338 0.363-1.47 0-2.662-1.2-2.662-2.68h-2.752c0.004 0.457-0.11 0.92-0.355 1.343-0.735 1.272-2.367 1.705-3.649 0.967l-1.376 2.383c0.396 0.225 0.739 0.555 0.983 0.977 0.733 1.27 0.294 2.897-0.98 3.64l1.376 2.383c0.392-0.228 0.847-0.359 1.332-0.359 1.466 0 2.654 1.192 2.662 2.665h2.752c-0.001-0.452 0.113-0.91 0.355-1.329 0.733-1.27 2.362-1.703 3.642-0.971l1.376-2.383c-0.393-0.225-0.734-0.554-0.977-0.974zM7 9.835c-1.566 0-2.835-1.269-2.835-2.835s1.269-2.835 2.835-2.835c1.566 0 2.835 1.269 2.835 2.835s-1.269 2.835-2.835 2.835z"
  }));
};

SettingsIcon.propTypes = {
  fill: PropTypes.string
};

var ShareIcon = function ShareIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    viewBox: "0 0 20 20",
    title: "o-icon__share",
    className: fill
  }, React.createElement("path", {
    d: "M14.21,6.21,7,9.8c0,.06,0,.13,0,.2s0,.13,0,.2l7.17,3.58a3.46,3.46,0,0,1,2.26-.84,3.53,3.53,0,1,1-3.53,3.53c0-.07,0-.14,0-.2L5.8,12.68a3.53,3.53,0,1,1,0-5.37L13,3.73c0-.07,0-.13,0-.2a3.53,3.53,0,1,1,3.53,3.53A3.47,3.47,0,0,1,14.21,6.21Z"
  }));
};

ShareIcon.propTypes = {
  fill: PropTypes.string
};

var SubscribeIcon = function SubscribeIcon(_ref) {
  var fill = _ref.fill;
  return React.createElement(Svg, {
    viewBox: "0 0 10 10",
    title: "o-icon__subscribe",
    className: fill,
    fill: "#9b9b9b"
  }, React.createElement("path", {
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
  subscribe: SubscribeIcon
};
var iconNames = Object.keys(icons);

var Icon = function Icon(_ref) {
  var name = _ref.name,
      color = _ref.color;
  var Icn = icons[name];
  return Icn ? React.createElement(Icn, {
    className: color ? "fill--".concat(color) : ''
  }) : React.createElement("span", null);
};

Icon.propTypes = {
  name: PropTypes.oneOf(iconNames).isRequired,
  color: PropTypes.oneOf(['white'])
};
Icon.defaultProps = {
  name: 'list'
};

var IconWrap = function IconWrap(_ref) {
  var name = _ref.name,
      size = _ref.size,
      fill = _ref.fill,
      iconColor = _ref.iconColor,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["name", "size", "fill", "iconColor", "className"]);

  return React.createElement("span", _extends({
    className: "u-icon u-icon--".concat(size, " u-path-fill--").concat(fill, "} ").concat(className)
  }, props), React.createElement(Icon, {
    name: name,
    color: iconColor
  }));
};

IconWrap.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'm']),
  fill: PropTypes.oneOf(['base', 'white']),
  iconColor: PropTypes.string
};
IconWrap.defaultProps = {
  size: 'm',
  fill: 'white'
};

var Button = function Button(_ref) {
  var as = _ref.as,
      text = _ref.text,
      url = _ref.url,
      icon = _ref.icon,
      iconClass = _ref.iconClass,
      iconSize = _ref.iconSize,
      iconFill = _ref.iconFill,
      className = _ref.className,
      small = _ref.small,
      outline = _ref.outline,
      lighter = _ref.lighter,
      toggle = _ref.toggle,
      simple = _ref.simple,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, ["as", "text", "url", "icon", "iconClass", "iconSize", "iconFill", "className", "small", "outline", "lighter", "toggle", "simple", "disabled"]);

  var baseClass = 'o-button';
  var classNames = "".concat(baseClass, "\n    ").concat(className, "\n    ").concat(small ? "".concat(baseClass, "--small") : '', "\n    ").concat(outline ? "".concat(baseClass, "--outline") : '', "\n    ").concat(toggle ? "".concat(baseClass, "--toggle") : '', " \n    ").concat(lighter ? "".concat(baseClass, "--lighter") : '', " \n    ").concat(simple ? "".concat(baseClass, "--simple") : '', " \n    ").concat(disabled ? 'disabled' : '');
  return React.createElement(as, _objectSpread({
    href: url ? url : '#',
    className: classNames
  }, rest), React.createElement(React.Fragment, null, text, ' ', icon && React.createElement(IconWrap, {
    name: icon,
    className: iconClass,
    size: iconSize,
    fill: iconFill,
    iconColor: "white"
  }))); // return (
  //   <a {...rest} href={url ? url : '#'} className={classNames}>
  //     {text}{' '}
  //     {icon && (
  //       <IconWrap
  //         name={icon}
  //         className={iconClass}
  //         size={iconSize}
  //         fill={iconFill}
  //         iconColor="white"
  //       />
  //     )}
  //   </a>
  // )
};

Button.propTypes = {
  as: PropTypes.oneOf(['a', 'button']),
  className: PropTypes.string,
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  iconSize: PropTypes.string,
  iconFill: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  small: PropTypes.bool,
  outline: PropTypes.bool,
  lighter: PropTypes.bool,
  toggle: PropTypes.bool,
  simple: PropTypes.bool,
  disabled: PropTypes.bool
};
Button.defaultProps = {
  className: '',
  as: 'button',
  iconSize: 'm',
  iconFill: 'base',
  url: '#'
};

var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      className = _ref.className,
      lazy = _ref.lazy,
      other = _objectWithoutProperties(_ref, ["src", "alt", "className", "lazy"]);

  return React.createElement("img", _extends({
    src: src,
    alt: alt,
    className: className + (lazy ? ' lazy' : ''),
    itemProp: "image"
  }, other));
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  lazy: PropTypes.bool
};
Image.defaultProps = {
  className: '',
  lazy: false
};

var Logo = function Logo(props) {
  return React.createElement(Image, props);
};

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

var Sources = function Sources(_ref) {
  var image = _ref.image;
  var breakpoints = Object.keys(image).filter(function (i) {
    return i !== 'default';
  }).reverse();
  return breakpoints.map(function (x, i) {
    return React.createElement("source", {
      key: i,
      srcSet: image[x],
      media: "(min-width: ".concat(x, "px)")
    });
  });
};

var Picture = function Picture(_ref2) {
  var image = _ref2.image,
      alt = _ref2.alt,
      lazy = _ref2.lazy;
  var opts = [];
  opts[lazy ? 'data-lazy' : 'srcSet'] = image.default;
  return React.createElement("picture", {
    className: "picture"
  }, React.createElement(Sources, {
    image: image
  }), React.createElement(Image, _extends({
    alt: alt,
    itemProp: "image"
  }, opts)));
};

Picture.propTypes = {
  image: PropTypes.object.isRequired,
  alt: PropTypes.string,
  lazy: PropTypes.bool
};
Picture.defaultProps = {
  image: {
    default: ''
  }
};

var Video = function Video(_ref) {
  var src = _ref.src,
      width = _ref.width,
      height = _ref.height;
  return React.createElement("iframe", {
    src: src,
    width: width,
    height: height,
    frameBorder: "0",
    webkitallowfullscreen: "true",
    mozallowfullscreen: "true",
    allowFullScreen: true
  });
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};
Video.defaultProps = {
  width: 600,
  height: 338
};

var BreakoutBlock = function BreakoutBlock(_ref) {
  var title = _ref.title,
      description = _ref.description,
      cta = _ref.cta,
      url = _ref.url,
      blockClass = _ref.blockClass;
  return React.createElement("div", {
    className: "c-block__breakout u-padding u-padding--double--bottom u-padding--double--top u-spacing u-theme--background-color--darker ".concat(blockClass)
  }, React.createElement("h3", {
    className: "c-block__title u-color--white"
  }, title), React.createElement("p", {
    className: "c-block__body u-theme--color--lighter"
  }, description), cta && url && React.createElement(Button, {
    as: "a",
    text: cta,
    url: url,
    lighter: true
  }));
};

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

var MediaImage = function MediaImage(_ref) {
  var srcSet = _ref.srcSet,
      url = _ref.url,
      alt = _ref.alt,
      round = _ref.round,
      imageClass = _ref.imageClass,
      blockType = _ref.blockType,
      backgroundImage = _ref.backgroundImage,
      wrapClass = _ref.wrapClass;
  var roundClass = round ? 'u-round u-space--left' : '';
  var imgClass = imageClass ? imageClass : '';
  var blckType = blockType ? 'c-block__icon c-block__icon--' + blockType : '';
  var bgdImage = backgroundImage ? ' o-background-image u-background--cover' : '';
  var wrpClass = wrapClass ? wrapClass : '';
  return React.createElement("div", {
    className: "c-media-block__image c-block__image ".concat(imgClass, " ").concat(blckType, " ").concat(bgdImage)
  }, React.createElement("div", {
    className: "c-block__image-wrap ".concat(roundClass, " ").concat(wrpClass)
  }, React.createElement("a", {
    href: url,
    className: "media-block__image-wrap block__image-wrap db"
  }, React.createElement("div", {
    className: " dib"
  }, React.createElement(Picture, {
    className: "picture",
    image: srcSet,
    alt: alt
  })))));
};

MediaImage.propTypes = {
  srcSet: PropTypes.object.isRequired,
  url: PropTypes.string,
  alt: PropTypes.string,
  round: PropTypes.bool,
  imageClass: PropTypes.string,
  blockType: PropTypes.string,
  backgroundImage: PropTypes.string,
  wrapClass: PropTypes.string
};

var ContentBlock = function ContentBlock(_ref) {
  var title = _ref.title,
      category = _ref.category,
      description = _ref.description,
      descriptionMore = _ref.descriptionMore,
      cta = _ref.cta,
      url = _ref.url,
      imageSrcSet = _ref.imageSrcSet,
      imageAlt = _ref.imageAlt;
  var titleClass = 'u-font--primary--m';
  var blockClass = descriptionMore ? 'c-block__text-expand u-spacing u-background-color--gray--light u-padding u-clear-fix can-be--dark-dark' : 'u-spacing';
  var imageClass = imageSrcSet && 'has-image';
  return React.createElement("div", {
    className: "c-block c-block__text u-spacing ".concat(blockClass, " u-theme--border-color--darker u-border--left ").concat(imageClass)
  }, imageSrcSet && React.createElement(MediaImage, {
    srcSet: imageSrcSet,
    alt: imageAlt,
    url: url
  }), React.createElement("h3", {
    className: "u-theme--color--darker ".concat(titleClass)
  }, url ? React.createElement("a", {
    href: url,
    className: "c-block__title-link u-theme--link-hover--dark"
  }, React.createElement("strong", null, title)) : React.createElement("strong", null, title)), description && React.createElement("p", {
    className: "c-block__body text"
  }, description), category && React.createElement("span", {
    className: "c-block__meta u-theme--color--dark u-font--secondary--xs"
  }, category), descriptionMore ? React.createElement(React.Fragment, null, React.createElement("div", {
    className: "c-block__content"
  }, React.createElement("p", null, descriptionMore)), React.createElement("a", {
    href: "",
    className: "o-button o-button--outline o-button--expand js-toggle-parent"
  }, "\xA0")) : cta && url && React.createElement(Button, {
    as: "a",
    text: cta,
    url: url,
    className: "c-block__button",
    iconClass: "u-space--half--left",
    icon: "arrow-long-right",
    outline: true
  }));
};

ContentBlock.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  description: PropTypes.string,
  descriptionMore: PropTypes.string,
  cta: PropTypes.string,
  url: PropTypes.string,
  blockClass: PropTypes.string,
  imageSrcSet: PropTypes.object,
  imageAlt: PropTypes.string
};
ContentBlock.defaultProps = {};

var ContentBlockExpand = function ContentBlockExpand(_ref) {
  var kicker = _ref.kicker,
      title = _ref.title,
      description = _ref.description;
  return React.createElement("div", {
    className: "js-this c-block c-block c-block__expand u-background-color--gray--light u-border--left u-theme--border-color--darker--left can-be--dark-dark"
  }, React.createElement("div", {
    className: "c-block__header"
  }, React.createElement("div", {
    className: "c-block__title u-padding"
  }, title && React.createElement("h2", {
    className: "u-font--primary--s u-theme--color--darker"
  }, React.createElement("span", {
    className: "u-theme--color--base"
  }, React.createElement("em", null, kicker)), ' ', title), React.createElement("div", {
    className: "c-block__toggle"
  }, React.createElement("button", {
    className: "js-toggle o-button o-button--outline o-button--toggle o-button--small",
    "data-toggled": "this",
    "data-prefix": "this"
  }, React.createElement("span", {
    className: "u-icon u-icon--xs u-path-fill--white"
  }, React.createElement(Icon, {
    name: "plus"
  })))))), React.createElement("div", {
    className: "c-block__body u-padding u-padding--zero--top u-spacing"
  }, React.createElement("p", null, description)));
};

ContentBlockExpand.propTypes = {
  title: PropTypes.string.isRequired,
  kicker: PropTypes.string,
  description: PropTypes.string
};

var GalleryBlock = function GalleryBlock(_ref) {
  var kicker = _ref.kicker,
      title = _ref.title,
      imageSrcSet = _ref.imageSrcSet;
  return React.createElement("div", {
    className: "js-this c-gallery-block c-block u-background-color--gray--light u-border--left u-theme--border-color--darker--left can-be--dark-dark"
  }, React.createElement("div", {
    className: "c-gallery-block__header"
  }, React.createElement("div", {
    className: "c-gallery-block__title u-padding u-spacing--half"
  }, title && React.createElement("h2", {
    className: "u-font--primary--s u-theme--color--darker"
  }, kicker && React.createElement(React.Fragment, null, React.createElement("span", {
    className: "u-theme--color--base"
  }, React.createElement("em", null, kicker)), ' '), title), imageSrcSet.length > 1 && React.createElement("button", {
    className: "c-gallery-block__toggle js-toggle o-button o-button--outline o-button--toggle o-button--small",
    "data-toggled": "this",
    "data-prefix": "this"
  }, React.createElement("span", {
    className: "u-icon u-icon--xs u-path-fill--white"
  }, React.createElement(Icon, {
    name: "plus"
  })))), imageSrcSet.length > 0 && React.createElement("div", {
    className: "c-gallery-block__thumb u-background--cover",
    style: {
      backgroundImage: 'url(' + imageSrcSet[0].default + ')',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }
  })), imageSrcSet.length > 1 && React.createElement("div", {
    className: "c-gallery-block__body"
  }, imageSrcSet.slice(1).map(function (_ref2, key) {
    var src = _ref2.default,
        alt = _ref2.imageAlt,
        portrait = _ref2.isPortrait,
        caption = _ref2.imageCaption;
    var portraitClass = portrait ? 'is-portrait' : '';
    return React.createElement("div", {
      key: key,
      className: "c-gallery-block__image ".concat(portraitClass)
    }, React.createElement(Image, {
      src: src,
      alt: alt
    }), caption && React.createElement("div", {
      className: "c-gallery-block__caption u-font--secondary--s u-color--gray u-padding u-padding--double--bottom"
    }, caption));
  })));
};

GalleryBlock.propTypes = {
  title: PropTypes.string.isRequired,
  kicker: PropTypes.string,
  imageSrcSet: PropTypes.array
};
GalleryBlock.defaultProps = {
  imageSrcSet: []
};

var Kicker = function Kicker(_ref) {
  var text = _ref.text,
      className = _ref.className;
  return React.createElement("h4", {
    className: "c-media-block__kicker c-block__kicker u-space--quarter--bottom ".concat(className)
  }, text);
};

Kicker.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};
Kicker.defaultProps = {
  className: ''
};

var MediaTitle = function MediaTitle(_ref) {
  var title = _ref.title,
      url = _ref.url,
      className = _ref.className;
  return React.createElement("h3", {
    className: "c-media-block__title c-block__title ".concat(className)
  }, url ? React.createElement("a", {
    href: url,
    className: "c-block__title-link u-theme--link-hover--dark"
  }, title) : title);
};

MediaTitle.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  className: PropTypes.string
};
MediaTitle.defaultProps = {
  className: ''
};

var MediaDescription = function MediaDescription(_ref) {
  var description = _ref.description;
  return React.createElement("p", {
    className: "c-media-block__description c-block__description"
  }, description);
};

MediaDescription.propTypes = {
  description: PropTypes.string.isRequired
};

var DateTimeFormat = function DateTimeFormat(_ref) {
  var date = _ref.date,
      dateFormat = _ref.dateFormat;
  date = new Date(date);

  switch (dateFormat) {
    case 'date':
      return date.toLocaleDateString();

    case 'time':
      return date.toLocaleTimeString();

    default:
      return date.toLocaleString();
  }
};

DateTimeFormat.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  dateFormat: PropTypes.oneOf(['date', 'time', 'datetime'])
};

var MediaDate = function MediaDate(_ref) {
  var datetime = _ref.datetime,
      dateFormat = _ref.dateFormat;
  return React.createElement("time", {
    className: "c-block__date u-text-transform--upper",
    dateTime: datetime
  }, DateTimeFormat({
    date: datetime,
    dateFormat: dateFormat
  }));
};

MediaDate.propTypes = {
  datetime: PropTypes.number.isRequired,
  dateFormat: PropTypes.oneOf(['date', 'time', 'datetime'])
};

var Category = function Category(_ref) {
  var category = _ref.category;
  return React.createElement("span", {
    className: "c-block__category u-text-transform--upper"
  }, category);
};

Category.propTypes = {
  category: PropTypes.string.isRequired
};

var MediaVideo = function MediaVideo(_ref) {
  var video = _ref.video;
  return React.createElement("div", {
    className: "c-block__image-wrap "
  }, React.createElement("figure", {
    className: "o-figure"
  }, React.createElement("div", {
    className: "fitvid"
  }, video)));
};

MediaVideo.propTypes = {
  video: PropTypes.node.isRequired
};

var MediaCallToAction = function MediaCallToAction(_ref) {
  var label = _ref.label,
      url = _ref.url,
      icon = _ref.icon;
  return React.createElement("a", {
    className: "c-block__button o-button o-button--outline",
    href: url
  }, label, icon && React.createElement("span", {
    className: "u-icon u-icon--m u-path-fill--base u-space--half--left"
  }, React.createElement(Icon, {
    name: icon
  })));
};

MediaCallToAction.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

var mediaBlockClasses = {
  default: {
    block: 'c-media-block__row c-block__row',
    image: '',
    content: 'u-color--gray',
    group: '',
    kicker: '',
    title: 'u-theme--color--darker',
    meta: 'u-theme--color--dark'
  },
  inline: {
    block: 'c-block__inline c-media-block__inine c-block--reversed c-media-block--reversed l-grid--7-col',
    image: 'l-grid-item u-padding--zero--sides',
    content: 'l-grid-item u-border-left--black--at-large u-theme--border-color--darker--left u-color--gray u-background-color--gray--light u-padding--top u-padding--bottom',
    group: '',
    kicker: '',
    title: 'u-theme--color--darker',
    meta: 'u-theme--color--dark'
  },
  inset: {
    block: 'c-block__inset c-media-block__inset',
    image: '',
    content: 'l-grid--7-col u-theme--background-color--darker',
    group: '',
    kicker: '',
    title: 'l-grid-item l-grid-item--m--4-col u-link-hover--white',
    meta: 'l-grid-item l-grid-item--m--2-col'
  },
  reversed: {
    block: 'c-block--reversed c-media-block--reversed l-grid--7-col',
    image: 'l-grid-item l-grid-item--m--3-col',
    content: 'l-grid-item l-grid-item--m--4-col u-border-left--black--at-large',
    group: '',
    kicker: '',
    title: '',
    meta: ''
  },
  stacked: {
    block: 'c-block__stacked c-media-block__stacked',
    image: '',
    content: '',
    group: '',
    kicker: '',
    title: '',
    meta: ''
  }
};

var MediaBlock = function MediaBlock(_ref) {
  var kicker = _ref.kicker,
      title = _ref.title,
      description = _ref.description,
      category = _ref.category,
      datetime = _ref.datetime,
      dateFormat = _ref.dateFormat,
      imageSrcSet = _ref.imageSrcSet,
      imageAlt = _ref.imageAlt,
      video = _ref.video,
      url = _ref.url,
      cta = _ref.cta,
      ctaIcon = _ref.ctaIcon,
      inline = _ref.inline,
      inset = _ref.inset,
      reversed = _ref.reversed,
      stacked = _ref.stacked;
  var classes = inline ? mediaBlockClasses.inline : inset ? mediaBlockClasses.inset : reversed ? mediaBlockClasses.reversed : stacked ? mediaBlockClasses.stacked : mediaBlockClasses.default;
  return React.createElement("div", {
    className: "c-media-block c-block ".concat(classes.block)
  }, imageSrcSet && React.createElement(MediaImage, {
    srcSet: imageSrcSet,
    alt: imageAlt,
    url: url,
    imageClass: classes.image
  }), video && React.createElement(MediaVideo, {
    video: video
  }), React.createElement("div", {
    className: "c-media-block__content c-block__content u-spacing ".concat(classes.content)
  }, React.createElement("div", {
    className: "u-spacing c-block__group c-media-block__group ".concat(classes.group)
  }, React.createElement("div", {
    className: "u-width--100p u-spacing"
  }, kicker && React.createElement(Kicker, {
    text: kicker,
    className: classes.kicker
  }), title && React.createElement(MediaTitle, {
    title: title,
    url: url,
    className: "".concat(classes.title, " ").concat(kicker ? 'u-space--zero' : '')
  }), description && React.createElement(MediaDescription, {
    description: description
  })), (category || datetime) && React.createElement("div", {
    className: "c-media-block__meta c-block__meta ".concat(classes.meta)
  }, category && React.createElement(Category, {
    category: category
  }), datetime && React.createElement(MediaDate, {
    datetime: datetime,
    dateFormat: dateFormat
  })), cta && url && React.createElement(MediaCallToAction, {
    label: cta,
    url: url,
    icon: ctaIcon
  }))));
};

MediaBlock.propTypes = {
  kicker: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  datetime: PropTypes.number,
  dateFormat: PropTypes.oneOf(['date', 'time', 'datetime']),
  imageSrcSet: PropTypes.object,
  imageAlt: PropTypes.string,
  video: PropTypes.node,
  url: PropTypes.string,
  cta: PropTypes.string,
  ctaIcon: PropTypes.string,
  inline: PropTypes.bool,
  inset: PropTypes.bool,
  reversed: PropTypes.bool,
  stacked: PropTypes.bool
};
MediaBlock.defaultProps = {
  dateFormat: 'date',
  ctaIcon: 'arrow-long-right'
};

var renderItems = (function (items, Component, props) {
  return items && items.map(function (item, key) {
    return React.createElement(Component, _extends({}, props, item, {
      key: key
    }));
  });
});

var AccordionItem = function AccordionItem(_ref) {
  var heading = _ref.heading,
      content = _ref.content;
  return React.createElement("div", {
    className: "c-accordion__item u-spacing--half u-border--left u-padding--half--left"
  }, React.createElement("div", {
    className: "c-accordion__heading js-toggle-parent u-font--primary--m u-theme--color--darker"
  }, React.createElement("span", {
    className: "u-icon u-icon--m c-accordion__arrow u-space--half--right u-theme--path-fill--darker"
  }, React.createElement(Icon, {
    name: "arrow-bracket-right"
  })), React.createElement("strong", null, heading)), React.createElement("div", {
    className: "c-accordion__content u-padding--half--left"
  }, content));
};

AccordionItem.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired
};

var Accordion = function Accordion(_ref2) {
  var items = _ref2.items;
  return React.createElement("div", {
    className: "c-accordion u-position--relative u-spacing {{ accordion_class }}"
  }, renderItems(items, AccordionItem));
};

Accordion.propTypes = {
  items: PropTypes.array
};
Accordion.defaultProps = {
  items: []
};

var Slide = function Slide(_ref) {
  var heading = _ref.heading,
      subtitle = _ref.subtitle,
      dek = _ref.dek,
      cta = _ref.cta,
      url = _ref.url,
      imageSrcSet = _ref.imageSrcSet,
      imageAlt = _ref.imageAlt,
      isLazy = _ref.isLazy,
      className = _ref.className,
      textClass = _ref.textClass;
  return React.createElement("div", {
    className: "c-carousel__item u-position--relative ".concat(className)
  }, React.createElement(Picture, {
    image: imageSrcSet,
    alt: imageAlt,
    lazy: isLazy
  }), heading && React.createElement("div", {
    className: "c-carousel__item-text__wrap l-grid l-grid--7-col u-shift--left--1-col--at-large"
  }, React.createElement("div", {
    className: "l-grid-item l-grid-item--m--4-col l-grid-item--xl--3-col"
  }, React.createElement("div", {
    className: "c-carousel__item-text ".concat(textClass, " u-spacing u-padding--double--top u-padding--double--bottom")
  }, React.createElement("div", {
    className: "c-carousel__item-text--inner u-spacing--half"
  }, React.createElement("h2", {
    className: "c-carousel__item-heading u-font--primary--xl"
  }, heading), subtitle && React.createElement("h3", {
    className: "c-carousel__item-subtitle u-font--secondary--s u-text-transform--upper"
  }, subtitle), React.createElement("div", {
    className: "c-carousel__item-dek"
  }, React.createElement("p", null, dek))), cta && url && React.createElement("a", {
    href: url,
    className: "c-carousel__item-cta o-button u-theme--secondary-background-color"
  }, cta)))));
};

Slide.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  dek: PropTypes.string,
  cta: PropTypes.string,
  url: PropTypes.string,
  imageSrcSet: PropTypes.object,
  imageAlt: PropTypes.string,
  isLazy: PropTypes.bool,
  className: PropTypes.string,
  textClass: PropTypes.string
};
Slide.defaultProps = {
  isLazy: false,
  className: '',
  textClass: ''
};

var Carousel = function Carousel(_ref) {
  var slides = _ref.slides,
      showArrows = _ref.showArrows,
      outerClass = _ref.outerClass,
      carouselClass = _ref.carouselClass;
  return React.createElement("div", {
    className: "c-carousel u-position--relative ".concat(outerClass)
  }, React.createElement("div", {
    className: "c-carousel__slides ".concat(carouselClass)
  }, renderItems(slides, Slide)), showArrows && React.createElement("div", {
    className: "c-carousel__controls"
  }, React.createElement("span", {
    className: "o-arrow__prev"
  }, React.createElement("span", {
    className: "c-carousel__arrow c-carousel__arrow--prev u-icon u-icon--s u-round u-theme--background-color--darker u-path-fill--white"
  }, React.createElement(Icon, {
    name: "arrow-bracket-left"
  }))), React.createElement("span", {
    className: "o-arrow__next"
  }, React.createElement("span", {
    className: "c-carousel__arrow c-carousel__arrow--next u-icon u-round u-theme--background-color--darker u-path-fill--white"
  }, React.createElement(Icon, {
    name: "arrow-bracket-right"
  })))));
};

Carousel.propTypes = {
  slides: PropTypes.array,
  showArrows: PropTypes.bool,
  outerClass: PropTypes.string,
  carouselClass: PropTypes.string
};
Carousel.defaultProps = {
  slides: [],
  showArrows: true,
  carouselClass: 'js-carousel__single-item'
};

var Comment = function Comment(_ref) {
  var avatarSrcSet = _ref.avatarSrcSet,
      avatarAlt = _ref.avatarAlt,
      datetime = _ref.datetime,
      dateFormat = _ref.dateFormat,
      byline = _ref.byline,
      text = _ref.text,
      editUrl = _ref.editUrl,
      replyUrl = _ref.replyUrl;
  return React.createElement("div", {
    className: "c-comment--inner u-border--left u-theme--border-color--darker"
  }, React.createElement("div", {
    className: "c-comment__avatar u-space--right"
  }, React.createElement(Picture, {
    image: avatarSrcSet,
    alt: avatarAlt
  })), React.createElement("div", {
    className: "c-comment__body u-spacing--quarter"
  }, React.createElement("div", {
    className: "c-comment__meta"
  }, React.createElement("span", {
    className: "byline u-font--secondary--s can-be--white u-theme--color--darker"
  }, React.createElement("a", {
    href: ""
  }, byline)), React.createElement("span", {
    className: "o-divider"
  }, "|"), React.createElement("span", {
    className: "pub_date u-font--secondary--s u-color--gray can-be--white"
  }, DateTimeFormat({
    date: datetime,
    dateFormat: dateFormat
  })), editUrl && React.createElement("span", {
    className: "c-comment__edit-link u-font--secondary--s u-theme--color--base"
  }, React.createElement("a", {
    className: "c-comment-edit-link",
    href: ""
  }, "(Edit)"))), React.createElement("p", {
    className: "c-comment__content"
  }, text), replyUrl && React.createElement("div", {
    className: "c-comment__reply"
  }, React.createElement("a", {
    href: "",
    className: "u-font--secondary--s u-theme--color--base"
  }, "Reply"))));
};

Comment.propTypes = {
  avatarSrcSet: PropTypes.object,
  avatarAlt: PropTypes.string,
  datetime: PropTypes.number,
  dateFormat: PropTypes.oneOf(['date', 'time', 'datetime']),
  byline: PropTypes.string,
  text: PropTypes.string,
  editUrl: PropTypes.string,
  replyUrl: PropTypes.string
};
Comment.defaultProps = {};

var ShareTools = function ShareTools(_ref) {
  var code = _ref.code;
  return React.createElement("div", {
    className: "c-share-tools js-hover"
  }, code);
};

ShareTools.propTypes = {
  code: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

var CommentForm = function CommentForm(_ref) {
  var action = _ref.action,
      method = _ref.method,
      title = _ref.title,
      buttonText = _ref.buttonText,
      small = _ref.small,
      medium = _ref.medium,
      large = _ref.large;
  var cols = 45;
  var rowsDefault = 8;
  var rows = large ? 12 : medium ? 8 : small ? 4 : rowsDefault;
  return React.createElement("div", {
    className: "c-comment-form"
  }, React.createElement("div", {
    className: "comment-respond u-spacing--half"
  }, React.createElement("h3", {
    className: "comment-reply-title u-font--secondary--m u-text-transform--upper u-theme--color--darker"
  }, React.createElement("strong", null, title), ' ', React.createElement("small", null, React.createElement("a", {
    rel: "nofollow",
    id: "cancel-comment-reply-link",
    href: "/spirituality/sabbath/article/the-sabbath-in-colossians/#respond",
    style: {
      display: 'none'
    }
  }, "Cancel reply"))), React.createElement("form", {
    action: action,
    method: method,
    className: "u-spacing--half",
    noValidate: ""
  }, React.createElement("p", {
    className: "comment-form-comment"
  }, React.createElement("textarea", {
    name: "comment",
    cols: cols,
    rows: rows,
    "aria-required": "true",
    required: "required"
  })), React.createElement("p", {
    className: "form-submit"
  }, React.createElement("input", {
    name: "submit",
    type: "submit",
    className: "submit",
    value: buttonText
  })))));
};

CommentForm.propTypes = {
  action: PropTypes.string.isRequired,
  method: PropTypes.oneOf(['post', 'get']),
  title: PropTypes.string,
  buttonText: PropTypes.string,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool
};
CommentForm.defaultProps = {
  title: 'Leave a Comment',
  buttonText: 'Post Comment',
  method: 'post',
  medium: true
};

var FilterItem = function FilterItem(_ref) {
  var text = _ref.text,
      value = _ref.value;
  return React.createElement("option", {
    value: value
  }, text);
};

FilterItem.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

var FacetFilter = function FacetFilter(_ref2) {
  var action = _ref2.action,
      method = _ref2.method,
      facets = _ref2.facets,
      title = _ref2.title;
  return React.createElement("form", {
    action: action,
    method: method,
    className: "c-facet-filter-form toggled-element"
  }, React.createElement("fieldset", {
    className: "u-spacing--half"
  }, React.createElement("legend", {
    className: "u-font--secondary--m u-theme--color--darker"
  }, title), React.createElement("div", {
    className: "u-spacing"
  }, facets.map(function (_ref3, key) {
    var name = _ref3.name,
        defaultValue = _ref3.defaultValue,
        options = _ref3.options;
    return React.createElement("select", {
      name: "select--".concat(name),
      id: "select--".concat(name),
      key: key,
      defaultValue: defaultValue
    }, renderItems(options, FilterItem));
  }), React.createElement("button", {
    className: "search-form__submit is-vishidden"
  }, React.createElement("span", {
    className: "is-vishidden"
  }, "Filter")))));
};

FacetFilter.propTypes = {
  action: PropTypes.string.isRequired,
  method: PropTypes.oneOf(['post', 'get']),
  facets: PropTypes.array,
  title: PropTypes.string
};
FacetFilter.defaultProps = {
  method: 'post',
  facets: []
};

var InlineForm = function InlineForm(_ref) {
  var action = _ref.action,
      method = _ref.method,
      buttonText = _ref.buttonText;
  return React.createElement("form", {
    action: action,
    method: method,
    className: "c-form--inline",
    noValidate: ""
  }, React.createElement("input", {
    type: "text",
    name: "text",
    cols: "45",
    rows: "8",
    "aria-required": "true",
    required: "required",
    className: "form-input"
  }), React.createElement("p", {
    className: "u-space--left form-submit"
  }, React.createElement("input", {
    name: "submit",
    type: "submit",
    className: "submit",
    value: buttonText
  })));
};

InlineForm.propTypes = {
  action: PropTypes.string.isRequired,
  method: PropTypes.oneOf(['post', 'get']),
  buttonText: PropTypes.string
};
InlineForm.defaultProps = {
  method: 'post',
  buttonText: 'Submit'
};

var LoginForm = function LoginForm(_ref) {
  var action = _ref.action,
      method = _ref.method,
      buttonText = _ref.buttonText,
      forgotPwdText = _ref.forgotPwdText,
      submitMessage = _ref.submitMessage,
      pwdText = _ref.pwdText,
      titleText = _ref.titleText,
      usernameText = _ref.usernameText;
  return React.createElement("form", {
    className: "u-spacing--half",
    action: action,
    method: method
  }, React.createElement("h2", {
    className: "u-font--secondary--m u-theme--color--darker"
  }, titleText), submitMessage && React.createElement("div", {
    className: "messaging u-padding u-color--white u-theme--background-color--darker"
  }, React.createElement("span", {
    className: "u-font--secondary--s"
  }, submitMessage)), React.createElement("input", {
    type: "text",
    name: "name",
    placeholder: "".concat(usernameText, "*")
  }), React.createElement("input", {
    type: "password",
    name: "name",
    placeholder: "".concat(pwdText, "*")
  }), React.createElement("div", {
    className: "u-flex u-flex--align-center"
  }, React.createElement("input", {
    type: "submit",
    value: buttonText
  }), React.createElement("a", {
    className: "o-button o-button--simple",
    href: ""
  }, forgotPwdText)));
};

LoginForm.propTypes = {
  action: PropTypes.string.isRequired,
  method: PropTypes.oneOf(['post', 'get']),
  titleText: PropTypes.string,
  usernameText: PropTypes.string,
  pwdText: PropTypes.string,
  buttonText: PropTypes.string,
  submitMessage: PropTypes.string,
  forgotPwdText: PropTypes.string
};
LoginForm.defaultProps = {
  titleText: 'Login',
  usernameText: 'Username',
  pwdText: 'Password',
  buttonText: 'Login',
  forgotPwdText: 'Forgot Password?',
  submitMessage: 'Logging you in...',
  method: 'post'
};

var SearchForm = function SearchForm(_ref) {
  var action = _ref.action,
      buttonText = _ref.buttonText,
      placeholder = _ref.placeholder,
      title = _ref.title;
  return React.createElement("form", {
    action: action,
    role: "search",
    method: "get",
    className: "search-form toggled-element"
  }, React.createElement("fieldset", null, React.createElement("legend", {
    className: "is-vishidden"
  }, title), React.createElement("input", {
    type: "search",
    name: "search",
    placeholder: placeholder ? placeholder + '...' : '',
    className: "search-form__input u-font--secondary--s",
    required: true
  }), React.createElement("button", {
    className: "search-form__submit is-vishidden"
  }, React.createElement("span", {
    className: "is-vishidden"
  }, buttonText))));
};

SearchForm.propTypes = {
  action: PropTypes.string.isRequired,
  title: PropTypes.title,
  buttonText: PropTypes.string,
  placeholder: PropTypes.string
};
SearchForm.defaultProps = {
  title: 'Search',
  buttonText: 'Search',
  placeholder: 'Search'
};

var SearchHeader = function SearchHeader(_ref) {
  var title = _ref.title,
      description = _ref.description,
      featured = _ref.featured,
      className = _ref.className;
  return React.createElement("div", {
    className: "c-page-header__search u-background-color--gray--light can-be--dark-dark u-padding--double--top u-padding--double--bottom"
  }, React.createElement("div", {
    className: "l-grid l-grid--7-col u-shift--left--1-col--at-large u-spacing--until-medium"
  }, React.createElement("div", {
    className: "l-grid-item l-grid-item--m--3-col"
  }, React.createElement("input", {
    type: "search",
    name: "s",
    className: "u-font--secondary--s u-theme--color--darker o-input__search",
    value: "Search..."
  })), React.createElement("div", {
    className: "l-grid-item l-grid-item--m--3-col"
  }, React.createElement("div", {
    className: "u-flex"
  }, React.createElement("button", {
    className: "c-filter__button o-button u-space--right"
  }, React.createElement("span", {
    className: "u-icon u-icon--xs u-path-fill--white"
  }, React.createElement(Icon, {
    name: "search"
  })), "Search"), React.createElement("span", {
    className: "c-filter__toggle js-toggle o-button o-button--simple",
    "data-toggled": "c-filter",
    "data-prefix": "c-filter"
  }, React.createElement("span", {
    className: "u-icon u-icon--xs"
  }, React.createElement(Icon, {
    name: "settings"
  })))))), React.createElement("div", {
    className: "c-filter"
  }, React.createElement("form", {
    className: "c-filter__form u-padding--top"
  }, React.createElement("div", {
    className: "l-grid l-grid--7-col u-shift--left--1-col--at-large u-spacing--until-medium"
  }, React.createElement("div", {
    className: "c-filter__form-item u-spacing--half l-grid-item l-grid-item--s--2-col l-grid-item--l--1-col"
  }, React.createElement("h3", {
    className: "u-font--secondary--s u-font-weight--bold u-text-transform--upper u-color--gray can-be--lighter"
  }, "Media")), React.createElement("div", {
    className: "c-filter__form-item u-spacing--half l-grid-item l-grid-item--s--2-col l-grid-item--l--1-col"
  }, React.createElement("h3", {
    className: "u-font--secondary--s u-font-weight--bold u-text-transform--upper u-color--gray can-be--lighter"
  }, "Category")), React.createElement("div", {
    className: "c-filter__form-item u-spacing--half l-grid-item l-grid-item--s--2-col l-grid-item--l--1-col"
  }, React.createElement("h3", {
    className: "u-font--secondary--s u-font-weight--bold u-text-transform--upper u-color--gray can-be--lighter"
  }, "Category")), React.createElement("div", {
    className: "l-grid-item--7-col u-space--after-medium"
  }, React.createElement("button", {
    className: "o-button o-button--outline"
  }, React.createElement("span", {
    className: "u-icon u-icon--xs"
  }, React.createElement(Icon, {
    name: "search"
  })), "Search Again"))))));
};

SearchHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
  featured: PropTypes.bool
};
SearchHeader.defaultProps = {
  className: '',
  featured: false
};

var Figcaption = function Figcaption(_ref) {
  var caption = _ref.caption,
      children = _ref.children;
  return React.createElement("figcaption", {
    className: "o-figcaption"
  }, React.createElement("p", {
    className: "o-caption u-color--gray u-font--secondary--s"
  }, caption || children));
};

Figcaption.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.string
};

var BreakoutImage = function BreakoutImage(_ref) {
  var caption = _ref.caption,
      imageSrcSet = _ref.imageSrcSet,
      parallax = _ref.parallax;
  return React.createElement("div", {
    className: "c-breakout-image"
  }, React.createElement("style", {
    type: "text/css"
  }, ".c-breakout-image__background {\n              background-image: url('".concat(imageSrcSet.default, "');\n            }\n            @media(min-width: 500px) {\n              .c-breakout-image__background {\n                background-image: url('").concat(imageSrcSet.small, "');\n              }\n            }\n            @media(min-width: 700px) {\n              .c-breakout-image__background {\n                background-image: url('").concat(imageSrcSet.medium, "');\n              }\n            }\n            @media(min-width: 1200px) {\n              .c-breakout-image__background {\n                background-image: url('").concat(imageSrcSet.large, "');\n              }\n            }")), parallax ? React.createElement("div", {
    className: "c-breakout-image__background u-image--breakout u-background--cover has-parallax",
    "data-type": "background",
    "data-speed": "8"
  }) : React.createElement("div", {
    className: "c-breakout-image__background u-image--breakout u-background--cover"
  }), caption && React.createElement("div", {
    className: "c-breakout-image__caption"
  }, React.createElement(Figcaption, null, caption)));
};

BreakoutImage.propTypes = {
  caption: PropTypes.string,
  imageSrcSet: PropTypes.object,
  parallax: PropTypes.bool
};
BreakoutImage.defaultProps = {
  parallax: false
};

var Figure = function Figure(_ref) {
  var imageSrcSet = _ref.imageSrcSet,
      imageAlt = _ref.imageAlt,
      videoSrc = _ref.videoSrc,
      caption = _ref.caption,
      className = _ref.className;
  return React.createElement("figure", {
    className: "o-figure ".concat(className)
  }, imageSrcSet && React.createElement("div", {
    className: "o-figure__image"
  }, React.createElement(Picture, {
    image: imageSrcSet,
    alt: imageAlt
  })), videoSrc && React.createElement("div", {
    className: "u-image--wrap fitvid"
  }, React.createElement(Video, {
    src: videoSrc
  })), caption && React.createElement("div", {
    className: "o-figure__caption"
  }, React.createElement(Figcaption, null, caption)));
};

Figure.propTypes = {
  imageSrcSet: PropTypes.object,
  imageAlt: PropTypes.string,
  videoSrc: PropTypes.string,
  caption: PropTypes.string,
  className: PropTypes.string
};
Figure.defaultProps = {
  className: ''
};

var FigureWithCaption = function FigureWithCaption(_ref) {
  var imageSrcSet = _ref.imageSrcSet,
      imageAlt = _ref.imageAlt,
      caption = _ref.caption,
      className = _ref.className;
  return React.createElement(Figure, {
    imageSrcSet: imageSrcSet,
    imageAlt: imageAlt,
    caption: caption,
    className: className
  });
};

FigureWithCaption.propTypes = {
  imageSrcSet: PropTypes.object.isRequired,
  imageAlt: PropTypes.string,
  caption: PropTypes.string,
  className: PropTypes.string
};
FigureWithCaption.defaultProps = {
  className: ''
};

var VideoFigureWithCaption = function VideoFigureWithCaption(_ref) {
  var videoSrc = _ref.videoSrc,
      caption = _ref.caption,
      className = _ref.className;
  return React.createElement(Figure, {
    videoSrc: videoSrc,
    caption: caption,
    className: className
  });
};

VideoFigureWithCaption.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  caption: PropTypes.string,
  className: PropTypes.string
};
VideoFigureWithCaption.defaultProps = {
  className: ''
};

var SubItem = function SubItem(_ref) {
  var name = _ref.name,
      url = _ref.url,
      active = _ref.active;
  return React.createElement("li", {
    className: "article-nav__subnav__list-item"
  }, React.createElement("a", {
    className: 'article-nav__subnav__link' + (active ? ' active' : ''),
    href: url
  }, name));
};

SubItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  active: PropTypes.bool
};

var Item = function Item(_ref2) {
  var name = _ref2.name,
      url = _ref2.url,
      active = _ref2.active,
      subitems = _ref2.subitems;
  var hasSubnav = subitems && subitems.length > 0;
  var opts = hasSubnav ? {
    'data-prefix': 'hover'
  } : {};
  return React.createElement("li", _extends({
    className: "article-nav__list-item dropdown__item ".concat(hasSubnav && 'article-nav--with-subnav js-hover')
  }, opts), React.createElement("a", {
    className: "article-nav__link dropdown__item-link white ".concat(active && ' active'),
    href: url
  }, name), hasSubnav && React.createElement("div", {
    className: "article-nav__subnav__arrow va--middle js-toggle-parent"
  }, React.createElement("span", {
    className: "arrow--down"
  })), hasSubnav && React.createElement("ul", {
    className: "article-nav__subnav theme--secondary-background-color"
  }, renderItems(subitems, SubItem)));
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  active: PropTypes.bool,
  subitems: PropTypes.array
};
Item.defaultProps = {
  active: false,
  subitems: []
};

var ArticleNavigation = function ArticleNavigation(_ref3) {
  var items = _ref3.items,
      dropdown = _ref3.dropdown;
  return React.createElement("nav", {
    id: "article-nav",
    className: "article-nav theme--secondary-background-color toggled-element",
    "data-active-target": "article-nav"
  }, React.createElement("div", {
    className: "layout-container"
  }, React.createElement("div", {
    className: "article-nav__inner"
  }, React.createElement("div", {
    className: "dropdown"
  }, React.createElement("div", {
    className: "dropdown__label font--secondary--s upper js-toggle-parent white"
  }, dropdown.label, ' ', React.createElement("span", {
    className: "dropdown__arrow dib arrow--down border-top--white va--middle"
  })), React.createElement("ul", {
    className: "article-nav__list dropdown__options theme--secondary-background-color"
  }, renderItems(items, Item))), React.createElement("div", {
    className: "article-nav__search cf"
  }, React.createElement(SearchForm, null)))));
};

ArticleNavigation.propTypes = {
  items: PropTypes.array.isRequired,
  dropdown: PropTypes.object
};
ArticleNavigation.defaultProps = {
  items: [],
  dropdown: {
    label: 'Menu'
  }
};

var AsideItem = function AsideItem(_ref) {
  var name = _ref.name,
      url = _ref.url,
      icon = _ref.icon;
  return React.createElement("li", {
    className: "aside-nav__list-item rel"
  }, React.createElement("a", {
    className: "aside-nav__link theme--primary-text-color font--primary--xs",
    href: url
  }, icon && React.createElement("span", {
    className: "icon icon--s va--tbtm"
  }, React.createElement(Icon, {
    name: icon,
    color: "theme--primary-fill-color"
  })), name));
};

AsideItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.string
};

var AsideList = function AsideList(_ref2) {
  var items = _ref2.items;
  return React.createElement("ul", {
    className: "aside-nav__list spacing--quarter"
  }, renderItems(items, AsideItem));
};

AsideList.propTypes = {
  items: PropTypes.array
};
AsideList.defaultProps = {
  items: []
};

var AsideNavigation = function AsideNavigation(_ref3) {
  var categoryItems = _ref3.categoryItems,
      socialItems = _ref3.socialItems;
  return (categoryItems.length > 0 || socialItems.length > 0) && React.createElement("nav", {
    className: "bg--tan aside-nav pad--secondary column__secondary can-be--dark-dark",
    id: "aside-nav"
  }, React.createElement("div", {
    className: "spacing"
  }, React.createElement(AsideList, {
    items: categoryItems
  }), categoryItems.length > 0 && React.createElement("hr", {
    className: "theme--primary-transparent-background-color--30"
  }), React.createElement(AsideList, {
    items: socialItems
  })));
};

AsideNavigation.propTypes = {
  categoryItems: PropTypes.array,
  socialItems: PropTypes.array
};
AsideNavigation.defaultProps = {
  categoryItems: [],
  socialItems: []
};

var BreadcrumbItem = function BreadcrumbItem(_ref) {
  var text = _ref.text,
      url = _ref.url;
  return React.createElement("li", {
    className: "c-breadcrumbs__list-item u-font--secondary--s u-text-transform--upper u-display--inline-block u-color--gray"
  }, React.createElement("span", {
    className: "u-icon u-icon--xs u-path-fill--gray"
  }, React.createElement(Icon, {
    name: "arrow-bracket-right"
  })), React.createElement("strong", null, url ? React.createElement("a", {
    href: url,
    className: "c-breadcrumbs__link can-be--white"
  }, text) : text));
};

BreadcrumbItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string
};

var Breadcrumbs = function Breadcrumbs(_ref2) {
  var items = _ref2.items;
  return items.length > 0 && React.createElement("nav", {
    className: "c-breadcrumbs",
    role: "navigation"
  }, React.createElement("ul", {
    className: "c-breadcrumbs__list"
  }, renderItems(items, BreadcrumbItem)));
};

Breadcrumbs.propTypes = {
  items: PropTypes.array
};
Breadcrumbs.defaultProps = {
  items: []
};

var Byline = function Byline(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "byline u-font--secondary--s u-color--gray can-be--white"
  }, children);
};

Byline.propTypes = {
  children: PropTypes.string
};

var ExtendedQuote = function ExtendedQuote(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "text"
  }, React.createElement("blockquote", {
    className: "quote--extended"
  }, children));
};

ExtendedQuote.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

var Highlight = function Highlight(_ref) {
  var children = _ref.children;
  return React.createElement("p", {
    className: "o-highlight u-padding u-background-color--gray--light can-be--dark-dark"
  }, children);
};

Highlight.propTypes = {
  children: PropTypes.string
};

var Pullquote = function Pullquote(_ref) {
  var author = _ref.author,
      children = _ref.children,
      text = _ref.text;
  return React.createElement("blockquote", {
    className: "pullquote u-theme--border-color--darker--left u-theme--color--darker u-padding--right"
  }, React.createElement("p", null, text || children), author && React.createElement("cite", {
    className: "o-citation u-theme--color--base"
  }, "\u2014 ", author));
};

Pullquote.propTypes = {
  author: PropTypes.string,
  children: PropTypes.string,
  text: PropTypes.string
};

var Aside = function Aside(_ref) {
  var children = _ref.children,
      items = _ref.items;
  return React.createElement("div", {
    className: "u-spacing--double u-padding--right"
  }, React.createElement("div", {
    className: "pad--secondary spacing--double"
  }, children));
};

Aside.propTypes = {
  children: PropTypes.node,
  content: PropTypes.array,
  contentBlocks: PropTypes.array
};

var RelatedPosts = function RelatedPosts(_ref) {
  var items = _ref.items,
      title = _ref.title;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "c-related-posts u-spacing"
  }, React.createElement("div", {
    className: "c-block__heading u-theme--border-color--darker"
  }, React.createElement("h3", {
    className: "c-block__heading-title u-theme--color--darker"
  }, title)), React.createElement("div", {
    className: "c-related-posts__blocks u-spacing"
  }, renderItems(items, MediaBlock))));
};

RelatedPosts.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array
};
RelatedPosts.defaultProps = {
  items: []
};

var ArticleContent = function ArticleContent(_ref) {
  var title = _ref.title,
      description = _ref.description,
      featured = _ref.featured,
      className = _ref.className;
  return React.createElement(React.Fragment, null, React.createElement("section", {
    className: "l-grid l-grid--7-col u-shift--left--1-col--at-xxlarge l-grid-wrap--6-of-7 u-spacing--double--until-large"
  }, React.createElement("div", {
    className: "c-article l-grid-item l-grid-item--l--4-col l-grid-item--xl--3-col"
  }, React.createElement("article", {
    className: "text c-article__body u-spacing--double has-dropcap"
  }, React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", ' ', React.createElement("a", {
    href: ""
  }, "Donec malesuada"), ", est ut viverra euismod, dui dolor gravida massa, sed aliquam ex nisl ut metus. Mauris at ante laoreet, gravida odio gravida, fermentum lectus. Fusce ac sollicitudin purus. Morbi et diam nunc. Praesent fringilla magna nisl, et volutpat nisi tincidunt aliquet. In laoreet ligula vel porttitor condimentum. In mattis ultricies placerat. Morbi interdum hendrerit tempus. Donec consequat elit vitae justo ornare, eget elementum quam consequat. Quisque auctor ex et congue finibus. Proin sed nisl ac velit aliquam euismod non tincidunt lectus. In enim ex, commodo feugiat porttitor sed, eleifend vitae ipsum. Suspendisse lorem nisl, suscipit at tellus quis, porttitor convallis sem."), React.createElement("p", null, React.createElement("a", {
    href: ""
  }, "Vestibulum ipsum orci, egestas eu erat non, posuere maximus quam."), ' ', "Quisque tincidunt turpis id accumsan hendrerit. Cras eleifend, arcu sit amet faucibus blandit, dolor urna euismod sem, non molestie nulla nulla porta nibh. Integer commodo arcu vitae nisl iaculis, non hendrerit arcu sodales. Vivamus sagittis quam ut elit posuere ultrices. In blandit erat orci, vitae posuere enim vehicula quis. Nullam posuere mauris odio, eu facilisis lorem iaculis ut. Aenean tortor turpis, sollicitudin ut est eget, mattis feugiat arcu. Etiam est magna, aliquet ut blandit sit amet, malesuada a lacus. Nam scelerisque arcu non sem auctor molestie. Vestibulum sit amet congue ex."))), React.createElement("div", {
    className: "c-sidebar l-grid-item l-grid-item--l--2-col l-grid-item--xl--2-col u-padding--zero--sides"
  })), React.createElement("section", {
    className: "l-grid l-grid--7-col u-shift--left--1-col--at-xxlarge l-grid-wrap l-grid-wrap--6-of-7"
  }, React.createElement("article", {
    className: "c-article l-grid-item l-grid-item--l--4-col l-grid-item--xl--3-col"
  }, React.createElement("div", {
    className: "text c-article__body u-spacing--double"
  }, React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, est ut viverra euismod, dui dolor gravida massa, sed aliquam ex nisl ut metus. Mauris at ante laoreet, gravida odio gravida, fermentum lectus. Fusce ac sollicitudin purus. Morbi et diam nunc. Praesent fringilla magna nisl, et volutpat nisi tincidunt aliquet. In laoreet ligula vel porttitor condimentum. In mattis ultricies placerat. Morbi interdum hendrerit tempus. Donec consequat elit vitae justo ornare, eget elementum quam consequat. Quisque auctor ex et congue finibus. Proin sed nisl ac velit aliquam euismod non tincidunt lectus. In enim ex, commodo feugiat porttitor sed, eleifend vitae ipsum. Suspendisse lorem nisl, suscipit at tellus quis, porttitor convallis sem."), React.createElement("p", null, "Vestibulum ipsum orci, egestas eu erat non, posuere maximus quam. Quisque tincidunt turpis id accumsan hendrerit. Cras eleifend, arcu sit amet faucibus blandit, dolor urna euismod sem, non molestie nulla nulla porta nibh. Integer commodo arcu vitae nisl iaculis, non hendrerit arcu sodales. Vivamus sagittis quam ut elit posuere ultrices. In blandit erat orci, vitae posuere enim vehicula quis. Nullam posuere mauris odio, eu facilisis lorem iaculis ut. Aenean tortor turpis, sollicitudin ut est eget, mattis feugiat arcu. Etiam est magna, aliquet ut blandit sit amet, malesuada a lacus. Nam scelerisque arcu non sem auctor molestie. Vestibulum sit amet congue ex.")))), React.createElement("section", {
    className: "l-grid l-grid--7-col u-shift--left--1-col--at-xxlarge l-grid-wrap l-grid-wrap--6-of-7"
  }, React.createElement("article", {
    className: "c-article l-grid-item l-grid-item--l--4-col l-grid-item--xl--3-col"
  }, React.createElement("div", {
    className: "text c-article__body u-spacing--double"
  }, React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, est ut viverra euismod, dui dolor gravida massa, sed aliquam ex nisl ut metus. Mauris at ante laoreet, gravida odio gravida, fermentum lectus. Fusce ac sollicitudin purus. Morbi et diam nunc. Praesent fringilla magna nisl, et volutpat nisi tincidunt aliquet. In laoreet ligula vel porttitor condimentum. In mattis ultricies placerat. Morbi interdum hendrerit tempus. Donec consequat elit vitae justo ornare, eget elementum quam consequat. Quisque auctor ex et congue finibus. Proin sed nisl ac velit aliquam euismod non tincidunt lectus. In enim ex, commodo feugiat porttitor sed, eleifend vitae ipsum. Suspendisse lorem nisl, suscipit at tellus quis, porttitor convallis sem."), React.createElement("p", null, "Vestibulum ipsum orci, egestas eu erat non, posuere maximus quam. Quisque tincidunt turpis id accumsan hendrerit. Cras eleifend, arcu sit amet faucibus blandit, dolor urna euismod sem, non molestie nulla nulla porta nibh. Integer commodo arcu vitae nisl iaculis, non hendrerit arcu sodales. Vivamus sagittis quam ut elit posuere ultrices. In blandit erat orci, vitae posuere enim vehicula quis. Nullam posuere mauris odio, eu facilisis lorem iaculis ut. Aenean tortor turpis, sollicitudin ut est eget, mattis feugiat arcu. Etiam est magna, aliquet ut blandit sit amet, malesuada a lacus. Nam scelerisque arcu non sem auctor molestie. Vestibulum sit amet congue ex."), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, est ut viverra euismod, dui dolor gravida massa, sed aliquam ex nisl ut metus. Mauris at ante laoreet, gravida odio gravida, fermentum lectus. Fusce ac sollicitudin purus. Morbi et diam nunc. Praesent fringilla magna nisl, et volutpat nisi tincidunt aliquet. In laoreet ligula vel porttitor condimentum. In mattis ultricies placerat. Morbi interdum hendrerit tempus. Donec consequat elit vitae justo ornare, eget elementum quam consequat. Quisque auctor ex et congue finibus. Proin sed nisl ac velit aliquam euismod non tincidunt lectus. In enim ex, commodo feugiat porttitor sed, eleifend vitae ipsum. Suspendisse lorem nisl, suscipit at tellus quis, porttitor convallis sem."), React.createElement("div", null))), React.createElement("div", {
    className: "c-sidebar l-grid-item l-grid-item--m--2-col l-grid-item--l--2-col"
  })));
};

ArticleContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
  featured: PropTypes.bool
};
ArticleContent.defaultProps = {
  className: '',
  featured: false
};

var PageContent = function PageContent(_ref) {
  var children = _ref.children,
      content = _ref.content,
      breadcrumbs = _ref.breadcrumbs;
  return React.createElement("div", {
    className: "text u-spacing"
  }, breadcrumbs.length > 0 && React.createElement(Breadcrumbs, {
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

var Footer = function Footer(_ref) {
  var text = _ref.text,
      copyright = _ref.copyright,
      address = _ref.address,
      regionsText = _ref.regionsText,
      regionsUrl = _ref.regionsUrl,
      socialLinks = _ref.socialLinks,
      legalLinks = _ref.legalLinks;
  return React.createElement("footer", {
    className: "footer",
    role: "contentinfo"
  }, React.createElement("div", {
    className: "footer__inner cf bg--medium-brown white can-be--dark-dark"
  }, React.createElement("div", {
    className: "layout-container"
  }, React.createElement("div", {
    className: "footer__unify-nav-desc spacing--until-large"
  }, React.createElement("nav", {
    className: "footer__nav"
  }, React.createElement("ul", {
    className: "inline-list"
  }, socialLinks.map(function (link, key) {
    return React.createElement("li", {
      key: key,
      className: "footer__nav-item inline-list__item"
    }, React.createElement("a", {
      href: link.url,
      className: "footer__nav-link font--secondary link--white"
    }, link.text));
  }))), React.createElement("div", {
    className: "footer__desc"
  }, React.createElement("span", {
    className: "icon footer__logo"
  }, React.createElement(Icon, {
    name: "logo",
    color: "fill--light-brown"
  })), React.createElement("p", {
    className: "footer__desc-text brown--light font--secondary"
  }, text, " \u2022", React.createElement("a", {
    href: regionsUrl,
    className: "link--white"
  }, regionsText))))), React.createElement("div", {
    className: "footer__legal bg--brown  can-be--dark-light"
  }, React.createElement("div", {
    className: "footer__legal__inner layout-container spacing--quarter--until-large"
  }, React.createElement("div", {
    className: "footer__unify-copyright-address spacing--quarter--until-large"
  }, React.createElement("p", {
    className: "footer__copyright font--secondary--xs brown--light no-space--btm"
  }, copyright), React.createElement("address", {
    className: "footer__address font--secondary--xs brown--light"
  }, address)), React.createElement("div", {
    className: "footer__legal-links font--secondary--xs"
  }, legalLinks.map(function (link, key) {
    return React.createElement("a", {
      key: key,
      className: "hover link--brown-light \n                  ".concat(key === legalLinks.length - 1 ? ' space-half--right' : ''),
      href: link.url
    }, link.name);
  }))))));
};

Footer.propTypes = {
  text: PropTypes.string,
  copyright: PropTypes.string,
  address: PropTypes.string,
  regionsText: PropTypes.string,
  regionsUrl: PropTypes.string,
  socialLinks: PropTypes.array,
  legalLinks: PropTypes.array
};
Footer.defaultProps = {
  text: 'Adventist.org is the Official website of the Seventh-day Adventist world church',
  copyright: 'Copyright 2017, General Conference of Seventh-day Adventists',
  address: '12501 Old Columbia Pike, Silver Spring, MD 20904, USA 301-680-6000',
  regionsText: 'View regions',
  regionsUrl: '#regions',
  socialLinks: [{
    text: 'Facebook',
    url: '#facebook'
  }],
  legalLinks: [{
    name: 'Legal Notice',
    url: '#LegalNotice'
  }, {
    name: 'Trademark and Logo Usage',
    url: '#TrademarkAndLogo'
  }]
};

var If = function If(_ref) {
  var condition = _ref.condition,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? undefined : _ref$children;
  return condition && children ? children : null;
};

var LogoLink = function LogoLink(_ref) {
  var title = _ref.title,
      text = _ref.text,
      path = _ref.path,
      horizontal = _ref.horizontal,
      square = _ref.square,
      isHoriz = _ref.isHoriz;
  return React.createElement("a", {
    href: "/",
    title: title + ' logo',
    className: 'logo__link' + (text ? ' logo--with-text' : '') + ' logo__link--' + (isHoriz ? 'horiz' : 'square') + ' show-' + (isHoriz ? 'until--large' : 'at--large') + ' theme--primary-background-color'
  }, React.createElement(Logo, {
    src: path + (isHoriz ? horizontal : square),
    alt: title
  }), React.createElement(If, {
    condition: text
  }, React.createElement("span", {
    className: "logo__text"
  }, React.createElement("img", {
    src: path + text,
    className: "logo__text",
    alt: "".concat(title, " logo")
  }))));
};

LogoLink.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
  horizontal: PropTypes.string,
  square: PropTypes.string,
  isHoriz: PropTypes.bool
};
LogoLink.defaultProps = {
  isHoriz: false
};

var TopHat = function TopHat(_ref) {
  var text = _ref.text,
      url = _ref.url,
      learnMore = _ref.learnMore;
  return React.createElement("div", {
    className: "header__top-hat show-at--large bg--black pad-half align--right"
  }, React.createElement("span", {
    className: "icon icon__logo"
  }, React.createElement("a", {
    href: url
  }, React.createElement(Icon, {
    name: "logo",
    color: "fill--white"
  }))), React.createElement("p", {
    className: "font--secondary--xs gray--med"
  }, text, "\xA0", React.createElement("a", {
    className: "link--white",
    href: learnMore.url
  }, learnMore.text), "."));
};

TopHat.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  learnMore: PropTypes.object
};
TopHat.defaultProps = {
  text: 'This is an official website of the Seventh-day Adventist Church.',
  url: 'https://www.adventist.org',
  learnMore: {
    text: 'Learn More about Adventists',
    url: 'https://www.adventist.org/beliefs'
  }
};

var range = (function (start, end) {
  return Array.from({
    length: end - start + 1
  }, function () {
    return start++;
  });
});

var renderTimes = (function () {
  var times = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var Component = arguments.length > 1 ? arguments[1] : undefined;
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return range(1, times).map(function (item, key) {
    return React.createElement(Component, _extends({}, props, {
      number: item,
      key: key
    }));
  });
});

var Segment = function Segment(_ref) {
  var number = _ref.number;
  return React.createElement("span", {
    className: "nav-toggle__segment nav-toggle__segment--".concat(number, " theme--primary-background-color")
  });
};

Segment.propTypes = {
  number: PropTypes.number.isRequired
};

var NavToggle = function NavToggle(_ref2) {
  var label = _ref2.label;
  return React.createElement("span", {
    className: "nav-toggle js-toggle",
    "data-toggled": "header",
    "data-prefix": "nav"
  }, React.createElement("div", {
    className: "nav-toggle__inner"
  }, renderTimes(4, Segment)), React.createElement("strong", {
    className: "nav-toggle__text upper theme--primary-text-color font--secondary--s"
  }, label));
};

NavToggle.propTypes = {
  label: PropTypes.string
};
NavToggle.defaultProps = {
  label: 'Menu'
};

var SubItem$1 = function SubItem(_ref) {
  var label = _ref.label,
      url = _ref.url;
  return React.createElement("li", {
    className: "primary-nav__subnav__list-item"
  }, React.createElement("a", {
    className: "primary-nav__subnav__link theme--primary-text-color",
    href: url
  }, label));
};

SubItem$1.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
SubItem$1.defaultProps = {
  active: false
};

var SubnavToggle = function SubnavToggle() {
  return React.createElement("div", {
    className: "primary-nav__subnav__arrow va--middle js-toggle-parent"
  }, React.createElement("span", {
    className: "arrow--down"
  }));
};

var Item$1 = function Item(_ref2) {
  var label = _ref2.label,
      url = _ref2.url,
      active = _ref2.active,
      subpages = _ref2.subpages;
  var opts = [];
  if (subpages) opts['data-prefix'] = 'hover';
  return React.createElement("li", _extends({
    className: "primary-nav__list-item \n        ".concat(subpages && 'primary-nav--with-subnav js-hover')
  }, opts), React.createElement("a", {
    className: "primary-nav__link theme--primary-text-color \n          ".concat(active && ' theme--secondary-text-color active'),
    href: url
  }, label), subpages && React.createElement(SubnavToggle, null), subpages && React.createElement("ul", {
    className: "primary-nav__subnav"
  }, renderItems(subpages, SubItem$1)));
};

Item$1.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  active: PropTypes.bool,
  subpages: PropTypes.array
};
Item$1.defaultProps = {
  active: false
};

var NavPrimary = function NavPrimary(_ref3) {
  var items = _ref3.items;
  return React.createElement("nav", {
    id: "primary-nav",
    className: "primary-nav toggled-element",
    "data-active-target": "primary-nav"
  }, items && React.createElement("ul", {
    className: "primary-nav__list"
  }, renderItems(items, Item$1)));
};

NavPrimary.propTypes = {
  items: PropTypes.array
};
NavPrimary.defaultProps = {
  items: []
};

var SubItem$2 = function SubItem(_ref) {
  var label = _ref.label,
      url = _ref.url,
      active = _ref.active;
  return React.createElement("li", {
    className: "secondary-nav__subnav__list-item"
  }, React.createElement("a", {
    className: "secondary-nav__subnav__link theme--secondary-background-hover-color--at-medium  ".concat(active && 'active'),
    href: url
  }, React.createElement(If, {
    condition: active
  }, React.createElement("span", {
    className: "icon icon--xs icon__check"
  }, React.createElement(Icon, {
    name: "check"
  }))), label));
};

SubItem$2.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  active: PropTypes.bool
};
SubItem$2.defaultProps = {
  subpages: [],
  active: false
};

var Item$2 = function Item(_ref2) {
  var label = _ref2.label,
      url = _ref2.url,
      icon = _ref2.icon,
      subpages = _ref2.subpages;
  return React.createElement("li", {
    className: "secondary-nav__list-item rel"
  }, React.createElement("a", {
    className: "secondary-nav__link theme--secondary-text-color ".concat(subpages && 'js-toggle-parent'),
    href: url
  }, React.createElement(If, {
    condition: icon
  }, React.createElement("span", {
    className: "secondary-nav__before-link"
  }, React.createElement(Icon, {
    name: icon,
    size: "xs",
    color: "theme--secondary-fill-color"
  }))), React.createElement("strong", null, label), "\xA0", React.createElement(If, {
    condition: subpages
  }, React.createElement("span", {
    className: "subnav__arrow dib arrow--down va--middle"
  }))), React.createElement(If, {
    condition: subpages
  }, React.createElement("ul", {
    className: "secondary-nav__subnav__list theme--secondary-background-color"
  }, renderItems(subpages, SubItem$2))));
};

Item$2.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string,
  subpages: PropTypes.array
};

var NavSecondary = function NavSecondary(_ref3) {
  var items = _ref3.items;
  return React.createElement("nav", {
    className: "secondary-nav toggled-element",
    id: "secondary-nav"
  }, React.createElement(If, {
    condition: items
  }, React.createElement("ul", {
    className: "secondary-nav__list"
  }, renderItems(items, Item$2))));
};

NavSecondary.propTypes = {
  items: PropTypes.array
};
NavSecondary.defaultProps = {
  items: []
};

var Header = function Header(_ref) {
  var logo = _ref.logo,
      className = _ref.className,
      primaryMenu = _ref.primaryMenu,
      secondaryMenu = _ref.secondaryMenu;
  return React.createElement("header", {
    className: 'header can-be--dark-dark ' + className,
    role: "banner",
    id: "header"
  }, React.createElement(TopHat, null), React.createElement("div", {
    className: "header__inner"
  }, React.createElement(NavToggle, null), React.createElement("div", {
    className: "header__unify-logo-nav"
  }, React.createElement(LogoLink, _extends({}, logo, {
    isHoriz: true
  })), React.createElement(LogoLink, logo), React.createElement(NavPrimary, {
    items: primaryMenu
  })), React.createElement("div", {
    className: "header__utility"
  }, React.createElement("div", {
    className: "header__utility__inner full--until-large"
  }, React.createElement(NavSecondary, {
    items: secondaryMenu
  }), React.createElement(SearchForm, null)))));
};

Header.propTypes = {
  logo: PropTypes.object,
  className: PropTypes.string,
  primaryMenu: PropTypes.array,
  secondaryMenu: PropTypes.array
};
Header.defaultProps = {
  logo: {
    path: '',
    square: '',
    horizontal: '',
    text: '',
    title: ''
  },
  classNames: '',
  primaryMenu: [],
  secondaryMenu: []
};

var prevent = function prevent(_ref) {
  var event = _ref.event,
      cb = _ref.cb,
      _ref$page = _ref.page,
      page = _ref$page === void 0 ? null : _ref$page;
  event.preventDefault();
  return cb ? page ? cb({
    page: page
  }) : cb() : null;
};

var Item$3 = function Item(_ref2) {
  var label = _ref2.label,
      _onClick = _ref2.onClick,
      prev = _ref2.prev,
      next = _ref2.next;
  return React.createElement("a", {
    href: "",
    className: "pagination__page ".concat(prev || next ? "pagination__".concat(prev ? 'prev' : 'next') : '', " theme--secondary-background-color white"),
    onClick: function onClick(event) {
      return prevent({
        event: event,
        cb: _onClick,
        page: prev ? prev : next ? next : label ? label : null
      });
    }
  }, label);
};

Item$3.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func,
  prev: PropTypes.number,
  next: PropTypes.number
};

var CurrentItem = function CurrentItem(_ref3) {
  var label = _ref3.label;
  return React.createElement("span", {
    className: "pagination__page pagination__page--current white bg--gray"
  }, label);
};

CurrentItem.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

var Divider = function Divider() {
  return React.createElement("span", {
    className: "pagination__divide"
  }, "\u2026");
};

var generatePages = function generatePages(total, current, currentOffset, extremesOffset) {
  var _ref4;

  var lowerOffset = current - currentOffset;
  var higerOffset = current + currentOffset;
  var pages = [];
  lowerOffset = lowerOffset > 1 ? lowerOffset : 1;
  higerOffset = higerOffset < total ? higerOffset : total;

  if (lowerOffset > 1) {
    pages.push(range(1, 1 + extremesOffset), null);
  }

  pages.push(range(lowerOffset, higerOffset));

  if (higerOffset < total) {
    pages.push(null, range(total - extremesOffset, total));
  }

  return (_ref4 = []).concat.apply(_ref4, pages);
};

var renderItems$1 = function renderItems(pages, currentPage, onPageClick) {
  return pages.map(function (page, key) {
    return page === currentPage ? React.createElement(CurrentItem, {
      label: currentPage,
      key: key
    }) : page === null ? React.createElement(Divider, {
      key: key
    }) : React.createElement(Item$3, {
      label: page,
      current: page === currentPage,
      onClick: onPageClick,
      key: key
    });
  });
};

var Pagination = function Pagination(_ref5) {
  var totalPages = _ref5.totalPages,
      currentPage = _ref5.currentPage,
      onPageClick = _ref5.onPageClick,
      prevLabel = _ref5.prevLabel,
      onPrevClick = _ref5.onPrevClick,
      nextLabel = _ref5.nextLabel,
      onNextClick = _ref5.onNextClick,
      currentOffset = _ref5.currentOffset,
      extremesOffset = _ref5.extremesOffset;
  var prevPage = currentPage - 1;
  var nextPage = currentPage + 1;
  var pages = generatePages(totalPages, currentPage, currentOffset, extremesOffset);
  return React.createElement("nav", {
    className: "pagination center-block align--center"
  }, React.createElement(Item$3, {
    prev: prevPage,
    label: prevLabel,
    onClick: onPrevClick
  }), React.createElement("div", {
    className: "pagination__pages show-at--medium dib"
  }, renderItems$1(pages, currentPage, onPageClick)), React.createElement(Item$3, {
    next: nextPage,
    label: nextLabel,
    onClick: onNextClick
  }));
};

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  onPageClick: PropTypes.func,
  prevLabel: PropTypes.string,
  onPrevClick: PropTypes.func,
  nextLabel: PropTypes.string,
  onNextClick: PropTypes.func,
  extremesOffset: PropTypes.number,
  currentOffset: PropTypes.number
};
Pagination.defaultProps = {
  totalPages: 0,
  currentPage: 1,
  prevLabel: 'Prev',
  nextLabel: 'Next',
  extremesOffset: 1,
  currentOffset: 2
};

var PageHeader = function PageHeader(_ref) {
  var background = _ref.background,
      kicker = _ref.kicker,
      title = _ref.title,
      url = _ref.url;
  var className = background ? 'c-background-image blended u-background--cover u-gradient--bottom' : '';
  return React.createElement("header", {
    className: "c-page-header c-page-header__simple u-theme--background-color--dark ".concat(className)
  }, background && React.createElement("style", {
    type: "text/css"
  }, ".c-background-image {\n              background-image: url('".concat(background.small, "');\n            }\n            @media(min-width: 900px) {\n              .c-background-image {\n                background-image: url('").concat(background.medium, "');\n              }\n            }\n            @media(min-width: 1100px) {\n              .c-background-image {\n                background-image: url('").concat(background.large, "');\n              }\n            }")), React.createElement("div", {
    className: "c-page-header__simple--inner u-padding"
  }, kicker && React.createElement("span", {
    className: "o-kicker u-color--white"
  }, kicker), React.createElement("h1", {
    className: "u-font--primary--xxl u-color--white"
  }, React.createElement("a", {
    className: "u-link--white u-link-hover--white",
    href: url
  }, title))));
};

PageHeader.propTypes = {
  background: PropTypes.shape({
    small: PropTypes.string,
    medium: PropTypes.string,
    large: PropTypes.string
  }),
  kicker: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};
PageHeader.defaultProps = {};

var BasicPage = function BasicPage(_ref) {
  var title = _ref.title,
      kicker = _ref.kicker,
      background = _ref.background,
      content = _ref.content,
      breadcrumbs = _ref.breadcrumbs,
      breakout = _ref.breakout,
      aside = _ref.aside;
  var sectionClass = breakout || aside ? 'l-main__content l-grid l-grid--7-col u-shift--left--1-col--at-xxlarge l-grid-wrap--6-of-7 u-spacing--double--until-xxlarge u-padding--zero--sides' : 'l-main__content l-grid l-grid--7-col u-shift--left--1-col--at-large l-grid-wrap--6-of-7 u-spacing--double--until-xxlarge u-padding--zero--sides';
  var articleClass = breakout || aside ? 'c-article l-grid-item l-grid-item--l--4-col l-grid-item--xl--3-col' : 'c-article l-grid-item l-grid-item--l--4-col';
  return React.createElement(React.Fragment, null, React.createElement("main", {
    className: "l-main u-spacing--double u-padding--double--bottom",
    role: "main"
  }, React.createElement(PageHeader, {
    title: title,
    kicker: kicker,
    breadcrumbs: breadcrumbs,
    background: background
  }), React.createElement("section", {
    id: "top",
    className: sectionClass
  }, React.createElement("article", {
    className: articleClass
  }, React.createElement("div", {
    className: "c-article__body"
  }, React.createElement(PageContent, {
    breadcrumbs: breadcrumbs
  }, content))), (breakout || aside) && React.createElement("div", {
    className: "c-sidebar l-grid-item l-grid-item--l--2-col l-grid-item--xl--2-col u-spacing u-padding--zero--sides"
  }, breakout && React.createElement(BreakoutBlock, breakout), React.createElement(Aside, null, aside)))));
};

BasicPage.propTypes = {
  title: PageHeader.propTypes.title,
  kicker: PageHeader.propTypes.kicker,
  background: PageHeader.propTypes.background,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  breadcrumbs: PageContent.propTypes.breadcrumbs,
  breakout: PropTypes.shape(BreakoutBlock.propTypes),
  aside: PropTypes.oneOfType([PropTypes.element])
};
BasicPage.defaultProps = {
  breadcrumbs: []
};

var LoadScript = function LoadScript(props) {
  return React.createElement(Script, props);
};

LoadScript.propTypes = {
  url: PropTypes.string.isRequired,
  onCreate: PropTypes.func,
  onLoad: PropTypes.func,
  onError: PropTypes.func
};
LoadScript.defaultProps = {
  onCreate: function onCreate() {
    return null;
  },
  onLoad: function onLoad() {
    return null;
  },
  onError: function onError() {
    return console.error('Error loading ALPS JS!');
  }
};

function Wrapper(_ref) {
  var children = _ref.children,
      primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor,
      style = _ref.style;
  return React.createElement("div", {
    className: "u-theme--".concat(primaryColor),
    style: style
  }, React.createElement("div", {
    className: "body has-grid u-theme--".concat(secondaryColor)
  }, children), React.createElement(LoadScript, {
    url: "https://code.jquery.com/jquery-2.2.4.min.js"
  }), React.createElement(LoadScript, {
    url: "//cdn.adventist.org/alps/3/latest/js/script.min.js"
  }));
}

Wrapper.propTypes = {
  children: PropTypes.node,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  style: PropTypes.object
};
Wrapper.defaultProps = {
  primaryColor: 'ming',
  secondaryColor: ''
};

exports.Wrapper = Wrapper;
exports.Button = Button;
exports.Icon = Icon;
exports.Image = Image;
exports.Logo = Logo;
exports.Picture = Picture;
exports.Video = Video;
exports.BreakoutBlock = BreakoutBlock;
exports.ContentBlock = ContentBlock;
exports.ContentBlockExpand = ContentBlockExpand;
exports.GalleryBlock = GalleryBlock;
exports.MediaBlock = MediaBlock;
exports.Accordion = Accordion;
exports.Carousel = Carousel;
exports.Comment = Comment;
exports.ShareTools = ShareTools;
exports.Slide = Slide;
exports.CommentForm = CommentForm;
exports.FacetFilter = FacetFilter;
exports.InlineForm = InlineForm;
exports.LoginForm = LoginForm;
exports.Search = SearchForm;
exports.SearchHeader = SearchHeader;
exports.BreakoutImage = BreakoutImage;
exports.Figcaption = Figcaption;
exports.Figure = Figure;
exports.FigureWithCaption = FigureWithCaption;
exports.VideoFigureWithCaption = VideoFigureWithCaption;
exports.ArticleNavigation = ArticleNavigation;
exports.AsideNavigation = AsideNavigation;
exports.Breadcrumbs = Breadcrumbs;
exports.Byline = Byline;
exports.ExtendedQuote = ExtendedQuote;
exports.Highlight = Highlight;
exports.Pullquote = Pullquote;
exports.Aside = Aside;
exports.RelatedPosts = RelatedPosts;
exports.ArticleContent = ArticleContent;
exports.PageContent = PageContent;
exports.Footer = Footer;
exports.Header = Header;
exports.TopHat = TopHat;
exports.NavPrimary = NavPrimary;
exports.NavSecondary = NavSecondary;
exports.NavToggle = NavToggle;
exports.Pagination = Pagination;
exports.PageHeader = PageHeader;
exports.BasicPage = BasicPage;
//# sourceMappingURL=alps-react.js.map
