class IsValid {
    static object(obj) {
        if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
            return false;
        }
        return true;
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
