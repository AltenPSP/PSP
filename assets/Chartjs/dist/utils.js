import {valueOrDefault} from './helpers.esm.js';

function numbers(config) {
    var cfg = config || {};
    var min = valueOrDefault(cfg.min, 0);
    var max = valueOrDefault(cfg.max, 100);
    var from = valueOrDefault(cfg.from, []);
    var count = valueOrDefault(cfg.count, 8);
    var decimals = valueOrDefault(cfg.decimals, 8);
    var continuity = valueOrDefault(cfg.continuity, 1);
    var dfactor = Math.pow(10, decimals) || 0;
    var data = [];
    var i, value;

    for (i = 0; i < count; ++i) {
        value = (from[i] || 0) + this.rand(min, max);
        if (this.rand() <= continuity) {
        data.push(Math.round(dfactor * value) / dfactor);
        } else {
        data.push(null);
        }
    }

    return data;
}

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

function months(config) {
    var cfg = config || {};
    var count = cfg.count || 12;
    var section = cfg.section;
    var values = [];
    var i, value;

    for (i = 0; i < count; ++i) {
        value = MONTHS[Math.ceil(i) % 12];
        values.push(value.substring(0, section));
    }

    return values;
}

const CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: getComputedStyle(document.documentElement).getPropertyValue('--chart-color1'),
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};
