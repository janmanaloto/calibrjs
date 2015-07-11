function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("DATABASE_NAME", "calibrjs");
define("DATABASE_HOST", "development:password@ds033601.mongolab.com:33601/");
define("SESSION_SECRET", "ilLacU2mj8p2m3");