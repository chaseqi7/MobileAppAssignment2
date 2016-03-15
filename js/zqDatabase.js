/**
 * Created by qizim on 2016-03-06.
 */
var db;

function errorHandler(tx, error) {
    console.error("SQL Error: " + tx + " (" + error.code + ") -- " + error.message);
}

function successTransaction() {
    console.info("Success: Transaction successful");
}