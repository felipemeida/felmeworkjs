class Result {
    constructor() {
        this._error = false;
        this._message = '';
        this._info = '';
    }

    set error($boolean) {
        this._error = $boolean;
    }

    get error() {
        return this._error;
    }

    set message($string) {
        this._message = $string
    }

    get message() {
        return this._message;
    }

    set info($arrayOrObject) {
        this._info = $arrayOrObject;
    }

    get info() {
        return this._info;
    }
}
module.exports = Result;
