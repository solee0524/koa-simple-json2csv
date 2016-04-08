/**
 * Created by solee on 4/6/16.
 */
'use strict';
var forEach = require('co-foreach');

module.exports = function *(options) {
  var data = options.data || [];
  var fields = options.fields || [];
  var delimiter = options.delimiter || ',';

  if (fields.length === 0) {
    return 'Need Fields!';
  }

  if (!Array.isArray(data) || !Array.isArray(fields)) {
    return 'Data and Fields should be array!';
  }

  var csv = '';
  csv += fields.join(delimiter) + '\n';

  yield forEach(data, function *(item, index){
    var tmpRow = [];
    yield forEach(fields, function *(field){
      var tmpField = field.split('.');
      var tmpValue = '';
      if (tmpField.length === 1) {
        tmpValue = item[field] || '';
      } else {
        tmpValue = item;
        var n = 0;
        while (n < tmpField.length) {
          tmpValue = tmpValue[tmpField[n]] || '';
          if (!tmpValue) {
            break;
          }
          n++;
        }
      }

      if (Array.isArray(tmpValue)){
        tmpValue = '"' + String(tmpValue).replace(/"/g, '""') + '"';
      } else {
        tmpValue = String(tmpValue).replace(/"/g, '""');
      }

      tmpRow.push(tmpValue);
    });
    csv += tmpRow.join(delimiter) + '\n';
  });

  return csv;
};