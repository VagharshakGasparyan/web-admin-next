'use client'
function isJson(data) {
    try {
        JSON.parse(data);
        return true;
    }catch (e) {
        return false;
    }
}

function lsGet(localStorageKey, defaultValue, jsonKey = null) {
    let val = localStorage.getItem(localStorageKey);
    if(jsonKey){
        try {
            return JSON.parse(val)[jsonKey];
        }catch (e) {
            return defaultValue;
        }
    }
    return val === null ? defaultValue : val;
}
function lsSet(localStorageKey, value, jsonKey = null) {
    if(jsonKey){
        try {
            let val = localStorage.getItem(localStorageKey);
            let val1 = isJson(val) ? JSON.parse(val) : {};
            val1[jsonKey] = value;
            localStorage.setItem(localStorageKey, JSON.stringify(val1));
            return true;
        }catch (e) {
            return false;
        }
    }
    localStorage.setItem(localStorageKey, value);
    return true;
}

module.exports = {lsGet, lsSet};