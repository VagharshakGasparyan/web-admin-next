import {lsGet, gsGet, gsSet, useGLS} from "@/functions/gls";

function loaderOn() {
    gsSet(true, "loading", true);
}
function loaderOff() {
    gsSet(true, "loading", false);
}

module.exports = {loaderOn, loaderOff};