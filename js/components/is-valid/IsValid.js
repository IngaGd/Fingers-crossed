class IsValid {
    static object(obj) {
        if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
            return false;
        }
        return true;
    }

    static nonEmptyString(str) {
        return typeof str === 'string' || str !== '';
    }

    static nonEmptyArray(arr) {
        return Array.isArray(arr) && arr.length > 0;
    }

    static icon(str) {
        if (typeof str !== 'string' || str === '') {
            return false;
        }
        return true;
    }

    static title(str) {
        if (typeof str !== 'string' || str === '') {
            return false;
        }
        return true;
    }

    static text(str) {
        if (typeof str !== 'string' || str === '') {
            return false;
        }
        return true;
    }
}

export { IsValid };
