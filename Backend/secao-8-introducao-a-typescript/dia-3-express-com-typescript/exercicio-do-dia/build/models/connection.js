"use strict";
exports.__esModule = true;
var promise_1 = require("mysql2/promise");
var connection = promise_1["default"].createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: 'TypeScriptExpress,'
});
exports["default"] = connection;
