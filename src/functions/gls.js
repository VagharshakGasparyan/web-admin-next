'use client'

const {useState, createContext, useEffect, useContext} = require("react");

function isJson(data) {
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

function isTypeJson(data) {
    return (typeof data === "object") && (data !== null) && (typeof data !== "function");
}

function saveToGlobal(keys, value, obj) {
    let key = keys[0];
    if (keys.length < 2) {
        if(!isTypeJson(obj)){
            obj = {};
        }
        obj[key] = value;
        return;
    }
    if (!isTypeJson(obj) || !(key in obj)) {
        obj[key] = {};
    }
    saveToGlobal(keys.slice(1), value, obj[key]);
}

function updateState(needToUpdateState) {
    if (("updateState" in global) && needToUpdateState) {
        global.updateState();
    }
}

function lsGet(localStorageKey, defaultValue, jsonKey = null) {
    if (("ls" in global) && isTypeJson(global.ls) && (localStorageKey in global.ls)) {
        if (jsonKey) {
            if (isTypeJson(global.ls[localStorageKey]) && (jsonKey in global.ls[localStorageKey])) {
                return global.ls[localStorageKey][jsonKey];
            }
        } else {
            return global.ls[localStorageKey];
        }
    }
    let val = null;
    try {
        val = localStorage.getItem(localStorageKey);
    }catch (e) {

    }
    if (jsonKey) {
        try {
            let val1 = JSON.parse(val)[jsonKey];
            saveToGlobal(["ls", localStorageKey, jsonKey], val1, global);
            return val1;
        } catch (e) {
            return defaultValue;
        }
    }
    return val === null ? defaultValue : val;
}

function lsSet(needToUpdateState, localStorageKey, value, jsonKey = null) {
    if (jsonKey) {
        try {
            let val = localStorage.getItem(localStorageKey);
            let val1 = isJson(val) ? JSON.parse(val) : {};
            val1[jsonKey] = value;
            localStorage.setItem(localStorageKey, JSON.stringify(val1));
            saveToGlobal(["ls", localStorageKey, jsonKey], value, global);
            updateState(needToUpdateState);
            return true;
        } catch (e) {
            return false;
        }
    }
    localStorage.setItem(localStorageKey, value);
    saveToGlobal(["ls", localStorageKey], value, global);
    updateState(needToUpdateState);
    return true;
}

function gsGet(StateKey, defaultValue, jsonKey = null) {
    if (("gs" in global) && isTypeJson(global.gs) && (StateKey in global.gs)) {
        if (jsonKey) {
            if (isTypeJson(global.gs[StateKey]) && (jsonKey in global.gs[StateKey])) {
                return global.gs[StateKey][jsonKey];
            }
        } else {
            return global.gs[StateKey];
        }
    }
    return defaultValue;
}

function gsSet(needToUpdateState, StateKey, value, jsonKey = null) {
    if (jsonKey) {
        try {
            saveToGlobal(["gs", StateKey, jsonKey], value, global);
            updateState(needToUpdateState);
            return true;
        } catch (e) {
            return false;
        }
    }
    saveToGlobal(["gs", StateKey], value, global);
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


module.exports = {lsGet, lsSet, gsGet, gsSet, useGLS, StateProvider};