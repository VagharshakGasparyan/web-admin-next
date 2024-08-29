//<MagicBox width={300} />
'use client'

const {useState, useEffect} = require("react");

export function MagicBox({width}) {
    const w = width | 300;
    const k = w / 300;//animation dimensions coefficient
    const m_box = {
        width: (141 * w / 300).toPrecision(4),
        height: (140.104 * w / 300).toPrecision(4),
    };
    const m_cup = {
        width: (144.75 * w / 300).toPrecision(4),
        height: (80.1241 * w / 300).toPrecision(4),
    }
    const m_token = {
        width: (15.6 * w / 300).toPrecision(4),
        height: (15.6 * w / 300).toPrecision(4),
    }

    const [clicked, SetClicked] = useState(false);
    const [boxBottom, SetBoxBottom] = useState(10 * k);
    const [cupBottom, SetCupBottom] = useState(91 * k);
    const [tokenBottom, SetTokenBottom] = useState(111);
    const [boxTransition, SetBoxTransition] = useState("bottom 60ms ease-out");
    const [cupTransition, SetCupTransition] = useState("bottom 60ms ease-out");
    const [tokenTransition, SetTokenTransition] = useState("bottom 60ms ease-out, left 60ms ease-out");
    const [tokenRadius, SetTokenRadius] = useState(10);
    useEffect(()=>{
        // setTimeout(()=>{
        //     SetCupBottom(100);
        // }, 100);
    }, []);

    const fil0 = "#2F7FE1";
    const fil0_2 = "#CDAE7D";
    const fil1 = "none";
    const fil1_1 = "#CE78EF";
    const fil1_2 = "none";
    const fil2 = "#5E376E";
    const fil3 = "#341C3D";
    const str0 = {
        stroke: "white",
        strokeWidth: 1000,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 2.61313
    };
    const str0_2 = {
        stroke: "#6B481B",
        strokeWidth: 1000,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 2.61313
    };
    const str1 = {
        stroke: "white",
        strokeWidth: 2000,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 2.61313
    };
    const sleep = (t)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve();
            }, t);
        });
    }
    const startAnimations = () =>{
        (async ()=>{
            if (clicked){
                SetClicked(false);
                SetCupBottom(91 * k);
                SetBoxBottom(10 * k);
                SetTokenBottom(111);
                SetCupTransition("bottom 60ms ease-out");
                SetBoxTransition("bottom 60ms ease-out");
                SetTokenTransition("bottom 60ms ease-out, left 60ms ease-out");
                SetTokenRadius(10);
                return;
            }
            SetClicked(true);
            SetCupBottom(81 * k);
            SetBoxBottom(0);
            SetTokenBottom(101);
            await sleep(60);
            SetCupTransition("bottom 250ms ease-out");
            SetBoxTransition("bottom 120ms ease-out");
            SetTokenTransition("bottom 120ms ease-out, left 120ms ease-out");
            SetCupBottom(215 * k);
            SetBoxBottom(20 * k);
            SetTokenBottom(131);
            await sleep(120);
            SetBoxTransition("bottom 200ms ease-out");
            SetTokenTransition("bottom 200ms ease-out, left 200ms ease-out");
            SetBoxBottom(0);
            SetTokenBottom(101);
            await sleep(200);
            SetTokenTransition("bottom 400ms ease-out, left 400ms ease-out");
            SetTokenBottom(161);
            SetTokenRadius(80);
            await sleep(400);
            SetTokenBottom(141);
            SetTokenRadius(110);
        })();
    };
    const tokens = ()=>{
        let pri_tokens = [];
        for(let i = 0; i < 9; i++){
            let alpha = i * 2 * Math.PI / 9;
            let x = Math.cos(alpha) * tokenRadius;
            let y = Math.sin(alpha) * tokenRadius * 0.5;
            let bottom = ((tokenBottom + y) * k).toPrecision(4) + "px";
            let left = ((150 - 15.6 / 2 + x) * k).toPrecision(4) + "px";
            pri_tokens.push(
                <svg key={"pri-token-" + i} width={m_token.width} height={m_token.height}
                     style={{position: "absolute", left: left, bottom: bottom, zIndex: 5, transition: tokenTransition}}
                     viewBox="-200 -200 23200 23200">
                    <circle fill={fil0_2} style={str0_2} className="fil0 str0" cx="11440.5" cy="11440.5" r="11071.4"/>
                    <path fill={fil1_2} style={str0_2}
                          d="M14600.7 15425.3l0 -8065.2 1673.7 1673.7 1767 1767.1c322.8,322.7 322.8,860.8 0,1183.5l-1767 1767 0 2761.7 3147.8 -3147.8c1084.9,-1085 1084.9,-2860.3 0,-3945.1l-3147.8 -3147.8 -1673.7 -1673.9 -1096.1 -1095.9c-364.5,-364.6 -807,-606.7 -1275.1,-726.1l0 2212.5 0 12807.4 0 2761.7 2371.2 -2371.2 0 -2761.5z"/>
                    <path fill={fil1_2} style={str0_2}
                          d="M8463.6 15425.3l0 -8065.2 -1673.9 1673.7 -1767 1767.1c-322.8,322.7 -322.8,860.8 0,1183.5l1767 1767 0 2761.7 -3147.8 -3147.8c-1084.9,-1085 -1084.9,-2860.3 0,-3945.1l3147.8 -3147.8 1673.9 -1673.9 1095.9 -1095.9c364.6,-364.6 807.2,-606.7 1275.1,-726.1l0 2212.5 0 12807.4 0 2761.7 -2371.1 -2371.2 0 -2761.5z"/>
                </svg>
            )
        }
        return pri_tokens;
    };
    return (
        <div style={{
            display: "inline-block",
            position: "relative",
            border: "1px solid black",
            width: w + "px",
            height: w + "px"
        }} onClick={startAnimations}>
            {tokens()}

            <svg width={m_cup.width} height={m_cup.height} style={
                {
                    position: "absolute",
                    zIndex: 10,
                    bottom: cupBottom + "px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    transition: cupTransition
                }
            }
                 viewBox="0 0 144750 80124">
                <polygon fill={fil0} style={str0}
                         points="72374.9,6415.8 2375,35519.9 72374.9,64623.9 142374.8,35519.9 "/>
                <path fill={fil0} style={str0}
                      d="M72374.9 64623.9l-69999.9 -29104.1c-2500,5000 -2500,10000 0.2,15000l69999.7 29104.1 0 -15000z"/>
                <path fill={fil0} style={str0}
                      d="M142374.8 35519.9l-69999.9 29104.1 0.2 15000 69999.9 -29104.1c2500,-5000 2500,-10000 -0.2,-15000z"/>
                <path fill={fil1_1} style={str0}
                      d="M67403.8 32784.2c-23552.5,2511.3 -24399.7,-4887.3 -37552.9,575.7 -7095.1,2946.8 -11488.4,7588.2 -11589.7,12359.6 -39.5,1856.4 679.6,3113.8 1995.8,3775l567.8 236.1 10259.2 4265.5c-1316.3,-661.3 -2035.3,-1918.6 -1995.8,-3775 11.5,-539.5 77.8,-1077.3 196.7,-1611.2 932.6,-4188.1 5100.1,-8134.8 11393,-10748.4 6701.3,-2783.3 10208.3,-2228.1 15151.1,-1345.9 4758.9,849.4 10848.8,2002.1 22401.9,770.2l-10827 -4501.6z"/>
                <path fill={fil1_1} style={str0}
                      d="M55828.9 36515.5c-12121.3,4377.9 -15457.1,7495.8 -25978.1,11865.5 -190.4,79.1 -379.1,155.4 -566,228.8 -118.9,533.9 -185.2,1071.7 -196.7,1611.2 -39.5,1856.4 679.5,3113.7 1995.8,3775 2003.7,1006.7 5391.5,632 9593.9,-1113.4 13267.9,-5510.6 15108.8,-9030.2 37552.9,-15596.9 -11553.1,1231.9 -17643,79.2 -22401.9,-770.2z"/>
                <path fill={fil1_1} style={str0}
                      d="M104956.8 2166.2c-13153.3,5462.9 -14000.5,13565.2 -37552.9,30618l10827 4501.6c10381,-7516.2 16351.1,-13293.6 20908.1,-17872.6 5781.9,-5809.8 9289.1,-9690.3 16644.9,-12745.4 210.7,-87.5 419,-171.5 624.9,-252.1 3643.3,-1425.7 6527.5,-1765.7 8421.9,-1055.4l-10534.2 -4379.9c-1984.6,-911.4 -5202.9,-532.3 -9339.6,1185.8z"/>
                <path fill={fil1_1} style={str0}
                      d="M116408.6 6415.7c-825.6,4111.6 -5252.3,8196.8 -11451.9,10771.7 -2206.1,916.3 -4096.5,1625.2 -5817.9,2225.8 -4557,4579 -10527.1,10356.4 -20908.1,17872.6 22444.2,-12076.8 24285.1,-10086.3 37552.9,-15596.8 6962.9,-2891.9 11689.3,-7689 11589.7,-12288.8 -42.2,-1954.7 -830.9,-3266.7 -2250.1,-3918.2l-292.8 -121.7c-1894.4,-710.3 -4778.6,-370.3 -8421.9,1055.4z"/>
            </svg>

            <svg width={m_box.width} height={m_box.height}
                 style={{
                     position: "absolute",
                     zIndex: 0,
                     bottom: boxBottom + "px",
                     left: "50%",
                     transform: "translateX(-50%)",
                     transition: boxTransition
            }}
                 viewBox="0 0 141000.2 140104.3">

                <rect fill={fil0} style={str0} transform="matrix(0.875 0.363801 -0 1.07861 500.098 29604.2)"
                      width="80000" height="75000"/>
                <rect fill={fil0} style={str0} transform="matrix(-0.875 0.363801 -0 1.07861 140500 29604.2)"
                      width="80000" height="75000"/>
                <path fill={fil1} style={str1}
                      d="M45126.2 102229.6l0 -29235.4 5250 8250 5542.7 8709.9c1012.4,1590.8 1012.4,3541.2 0,4290.2l-5542.7 4100.9 0 10010.5 9873.8 -7305.5c3403,-2517.8 3403,-8953 0,-14300.6l-9873.8 -15515.9 -5250 -8250 -3437.8 -5402.3c-1143.4,-1796.8 -2531.5,-3251.5 -3999.7,-4295.2l0 8020.5 0 46425.8 0 10010.4 7437.5 -5502.9 0 -10010.4z"/>
                <path fill={fil1} style={str1}
                      d="M95874 102229.6l0 -29235.4 -5250 8250 -5542.7 8709.9c-1012.4,1590.8 -1012.4,3541.2 0,4290.2l5542.7 4100.9 0 10010.5 -9873.8 -7305.5c-3403,-2517.8 -3403,-8953 0,-14300.6l9873.8 -15515.9 5250 -8250 3437.8 -5402.3c1143.4,-1796.8 2531.5,-3251.5 3999.7,-4295.2l0 8020.5 0 46425.8 0 10010.4 -7437.5 -5502.9 0 -10010.4z"/>
                <path fill={fil1} style={str1}
                      d="M25876.2 94226l0 -29235.4 -5250 3884.4 -5542.7 4100.9c-1012.3,749 -1012.3,2699.4 0,4290.1l5542.7 8710 0 10010.5 -9873.7 -15516c-3403,-5347.5 -3403,-11782.8 0,-14300.6l9873.7 -7305.4 5250 -3884.4 3437.8 -2543.6c1143.5,-846 2531.6,-1146.4 3999.7,-969.3l0 8020.4 0 46425.9 0 10010.4 -7437.5 -11687.5 0 -10010.4z"/>
                <path fill={fil1} style={str1}
                      d="M115124 94226l0 -29235.4 5250 3884.4 5542.7 4100.9c1012.3,749 1012.3,2699.4 0,4290.1l-5542.7 8710 0 10010.5 9873.7 -15516c3403,-5347.5 3403,-11782.8 0,-14300.6l-9873.7 -7305.4 -5250 -3884.4 -3437.8 -2543.6c-1143.5,-846 -2531.6,-1146.4 -3999.7,-969.3l0 8020.4 0 46425.9 0 10010.4 7437.5 -11687.5 0 -10010.4z"/>
                <polygon fill={fil2} style={str0} points="70500.1,58708.3 70500.1,500.1 500.1,29604.2 "/>
                <polygon fill={fil3} style={str0} points="70500.1,500.1 70500.1,58708.3 140500.1,29604.2 "/>
            </svg>

        </div>
    )
}