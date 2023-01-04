"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createDateObjects;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createDateObjects(date) {
  var weekOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var startOfMonth = (0, _moment["default"])(date).startOf('month');
  var diff = startOfMonth.weekday() - weekOffset;
  if (diff < 0) diff += 7;
  var prevMonthDays = [];

  for (var _i2 = 0; _i2 < diff; _i2++) {
    prevMonthDays.push({
      day: startOfMonth.clone().subtract(diff - _i2, 'days'),
      classNames: 'prevMonth'
    });
  }

  var currentMonthDays = [];

  for (var _i4 = 1; _i4 < date.daysInMonth() + 1; _i4++) {
    currentMonthDays.push({
      day: (0, _moment["default"])([date.year(), date.month(), _i4])
    });
  }

  var daysAdded = prevMonthDays.length + currentMonthDays.length - 1;
  var nextMonthDays = [];
  var i = 1;

  while ((daysAdded + i) % 7 !== 0) {
    nextMonthDays.push({
      day: currentMonthDays[currentMonthDays.length - 1].day.clone().add(i, 'days'),
      classNames: 'nextMonth'
    });
    i = i + 1;
  }

  return [].concat(prevMonthDays, currentMonthDays, nextMonthDays);
}