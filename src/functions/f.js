import {gls} from "@/functions/gls";

function loaderOn() {
    gls.g.set(true, ["loading"], true);
}
function loaderOff() {
    gls.g.set(true, ["loading"], false);
}

module.exports = {loaderOn, loaderOff};