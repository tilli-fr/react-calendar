"use strict";

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _Calendar = _interopRequireDefault(require("../Calendar"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _timekeeper = _interopRequireDefault(require("timekeeper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/prop-types */
beforeEach(function () {
  _timekeeper["default"].freeze((0, _moment["default"])('2017-11-09T07:00:00Z').toDate());
});
afterEach(function () {
  _timekeeper["default"].reset();
});
test('Calendar renders with minimal props', function () {
  var today = (0, _moment["default"])('2017-11-01T07:00:00');

  var component = _reactTestRenderer["default"].create(
  /*#__PURE__*/
  _react["default"].createElement(_Calendar["default"], {
    date: today,
    weekOffset: 0
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Calendar renders with weekOffset=1', function () {
  var today = (0, _moment["default"])('2017-11-01T07:00:00');

  var component = _reactTestRenderer["default"].create(
  /*#__PURE__*/
  _react["default"].createElement(_Calendar["default"], {
    date: today,
    weekOffset: 1
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Calendar renders with custom day render', function () {
  var today = (0, _moment["default"])('2017-11-01T07:00:00');

  var renderDay = function renderDay(_ref) {
    var day = _ref.day;
    return (
      /*#__PURE__*/
      _react["default"].createElement("span", {
        key: day.format()
      }, day.format('D'))
    );
  };

  var component = _reactTestRenderer["default"].create(
  /*#__PURE__*/
  _react["default"].createElement(_Calendar["default"], {
    date: today,
    renderDay: renderDay
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Calendar renders with custom header render', function () {
  var today = (0, _moment["default"])('2017-11-01T07:00:00');

  var renderHeader = function renderHeader(_ref2) {
    var date = _ref2.date,
        onPrevMonth = _ref2.onPrevMonth,
        onNextMonth = _ref2.onNextMonth;
    return (
      /*#__PURE__*/
      _react["default"].createElement("div", null,
      /*#__PURE__*/
      _react["default"].createElement("div", {
        className: "Calendar-header"
      },
      /*#__PURE__*/
      _react["default"].createElement("button", {
        onClick: onPrevMonth
      }, "\xAB"),
      /*#__PURE__*/
      _react["default"].createElement("div", {
        className: "Calendar-header-currentDate"
      }, date.format('MMMM YYYY')),
      /*#__PURE__*/
      _react["default"].createElement("button", {
        onClick: onNextMonth
      }, "\xBB")),
      /*#__PURE__*/
      _react["default"].createElement("div", {
        className: "Calendar-grid Calendar-week-day-names mb-sm"
      },
      /*#__PURE__*/
      _react["default"].createElement("div", {
        className: "Calendar-grid-item"
      }, "Mon"),
      /*#__PURE__*/
      _react["default"].createElement("div", {
        className: "Calendar-grid-item"
      }, "Tue"),
      /*#__PURE__*/
      _react["default"].createElement("div", {
        className: "Calendar-grid-item"
      }, "Wed"),
      /*#__PURE__*/
      _react["default"].createElement("div", {
        className: "Calendar-grid-item"
      }, "Thu"),
      /*#__PURE__*/
      _react["default"].createElement("div", {
        className: "Calendar-grid-item"
      }, "Fri"),
      /*#__PURE__*/
      _react["default"].createElement("div", {
        className: "Calendar-grid-item"
      }, "Sat"),
      /*#__PURE__*/
      _react["default"].createElement("div", {
        className: "Calendar-grid-item"
      }, "Sun")))
    );
  };

  var component = _reactTestRenderer["default"].create(
  /*#__PURE__*/
  _react["default"].createElement(_Calendar["default"], {
    date: today,
    renderHeader: renderHeader
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});