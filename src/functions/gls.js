'use client'

const {useState, createContext, useEffect, useContext} = require("react");

function isJsonString(data) {
    if(typeof data !== "string"){
        return false;
    }
    try {
        JSON.parse(data);
        return true;
    } catch (e) {
        return false;
    }
}

function isJsonTypeObj(data) {
    return (typeof data === "object") && (data !== null) && (typeof data !== "function");
}

function saveByKeys(keys, value, obj) {
    if(!isJsonTypeObj(obj)){
        obj = {};
    }
    let key = keys[0];
    if (keys.length < 2) {
        obj[key] = value;
        return;
    }
    if (!(key in obj)) {
        obj[key] = {};
    }
    saveByKeys(keys.slice(1), value, obj[key]);
}

function delByKeys(keys, obj) {
    let key = keys[0];
    if(!isJsonTypeObj(obj) || !(key in obj)){
        return;
    }
    if (keys.length < 2) {
        delete obj[key];
        return;
    }
    delByKeys(keys.slice(1), obj[key]);
}

function getByKeys(keys, obj) {
    let key = keys[0];
    if(!isJsonTypeObj(obj) || !(key in obj)){
        return undefined;
    }
    if(keys.length < 2){
        return obj[key];
    }
    return getByKeys(keys.slice(1), obj[key]);
}

function updateState(needToUpdateState) {
    if (("updateState" in global) && needToUpdateState) {
        global.updateState();
    }
}

function lsGet(keys, defaultValue) {
    let key = keys[0];
    let val = getByKeys(["ls", ...keys], global);
    if(val === undefined){
        let val1 = localStorage.getItem(key);
        if(keys.length > 1){
            val1 = isJsonString(val1) ? JSON.parse(val1) : undefined;
        }
        if(val1 !== undefined){
            global.ls = {[key]: val1};
            val = getByKeys(["ls", ...keys], global);
        }
    }
    return val === undefined ? defaultValue : val;
}

function lsSet(needToUpdateState, keys, value) {
    let key = keys[0];
    if(keys.length === 1){
        localStorage.setItem(key, value);
        saveByKeys(["ls", key], value, global);
    }else if(keys.length > 1){
        let val = localStorage.getItem(key);
        let val1 = isJsonString(val) ? JSON.parse(val) : {};
        global.ls = {[key]: val1};
        saveByKeys(["ls", ...keys], value, global);
        val1 = global.ls[key];
        localStorage.setItem(key, JSON.stringify(val1));
    }
    updateState(needToUpdateState);
    return true;
}

function lsDel(needToUpdateState, keys) {
    //localStorage.clear();
    let key = keys[0];
    if(keys.length === 1){
        delByKeys(["ls", key], global);
        localStorage.removeItem(key);
    }else if(keys.length > 1){
        let val = {};
        let val1 = localStorage.getItem(key);
        if(isJsonString(val1)){
            val = JSON.parse(val1);
        }else{
            return false;
        }
        global.ls = {[key]: val};
        delByKeys(["ls", ...keys], global);
        val = global.ls[key];
        localStorage.setItem(key, JSON.stringify(val));
    }
    updateState(needToUpdateState);
    return true;
}

function gsGet(keys, defaultValue) {
    let val = getByKeys(["gs", ...keys], global);
    return val === undefined ? defaultValue : val;
}

function gsSet(needToUpdateState, StateKey, value, jsonKey = null) {
    if (jsonKey) {
        try {
            saveByKeys(["gs", StateKey, jsonKey], value, global);
            updateState(needToUpdateState);
            return true;
        } catch (e) {
            return false;
        }
    }
    saveByKeys(["gs", StateKey], value, global);
    updateState(needToUpdateState);
    return true;
}

const StateContext = createContext("state");

function useGLS() {
    const context = useContext(StateContext);
    if (context === undefined) {
        throw new Error('useGLS must be used in StateProvider');
    }
    return context;
}

const gls = {
    g: {
        get: gsGet,
        set: gsSet,
        del: {},
    },
    l: {
        get: lsGet,
        set: lsSet,
        del: lsDel,
    },
    s: {

    }
};

function GLS() {
    const context = useContext(StateContext);
    if (context === undefined) {
        throw new Error('GLS must be used in StateProvider');
    }
    return gls;
}

function StateProvider({children, loader}) {
    const [state, setState] = useState(false);
    const [initialized, setInitialized] = useState(false);
    useEffect(()=>{
        setInitialized(true);
    }, []);
    global.updateState = () => {
        setState(!state);
    };
    return (
        <StateContext.Provider value={[state, setState]}>
            {initialized ? children : loader}
        </StateContext.Provider>
    );
}

module.exports = {useGLS, GLS, gls, StateProvider};