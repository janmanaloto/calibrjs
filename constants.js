function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("DATABASE_NAME", "calibrjs");
define("DATABASE_HOST", "localhost");
define("DATABASE_USERNAME", "root");
define("DATABASE_PASSWORD", "");
define("SESSION_SECRET", "ilLacU2mj8p2m3");