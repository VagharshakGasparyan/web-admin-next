'use client'

function isJson(data) {
    try {
        JSON.parse(data);
        return true;
    }catch (e) {
        return false;
    }
}

function isTypeJson(data) {
    return (typeof data === "object") && (data !== null) && (typeof data !== "function");
}

function saveToGlobal(keys, value, obj) {
    let key = keys[0];
    if(keys.length < 2){
        obj[key] = value;
        return;
    }
    if(!isTypeJson(obj) || !(key in obj)){
        obj[key] = {};
    }
    saveToGlobal(keys.slice(1), value, obj[key]);
}

function lsGet(localStorageKey, defaultValue, jsonKey = null) {
    if(("ls" in global) && isTypeJson(global.ls) && (localStorageKey in global.ls)){
        if(jsonKey){
            if(isTypeJson(global.ls[localStorageKey]) && (jsonKey in global.ls[localStorageKey])){
                return global.ls[localStorageKey][jsonKey];
            }
        }else{
            return global.ls[localStorageKey];
        }
    }
    let val = localStorage.getItem(localStorageKey);
    if(jsonKey){
        try {
            let val1 = JSON.parse(val)[jsonKey];
            saveToGlobal(["ls", localStorageKey, jsonKey], val1, global);
            return val1;
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
            saveToGlobal(["ls", localStorageKey, jsonKey], value, global);
            return true;
        }catch (e) {
            return false;
        }
    }
    localStorage.setItem(localStorageKey, value);
    saveToGlobal(["ls", localStorageKey], value, global);
    return true;
}

module.exports = {lsGet, lsSet};