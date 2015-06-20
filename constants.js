function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("DATABASE_NAME", "calibrjs");
define("DATABASE_HOST", "localhost:27017/");