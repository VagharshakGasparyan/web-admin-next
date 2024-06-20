'use client'


export default function Loader() {

    const svg_loader = () => {
        let dur = 1;
        let inner = [];
        let k = 0;
        let steps = 9;
        for(let i = 0; i < 360; i += 360/steps){
            let b = (- k * dur / steps) + "s";
            let a = Math.PI * i/180;
            let x = Math.sin(a) * 40 + 50;
            let y = Math.cos(a) * 40 + 50;
            let a1 = Math.PI * (i + 180)/180;
            let x1 = Math.sin(a1) * 40 + 50;
            let y1 = Math.cos(a1) * 40 + 50;
            inner.push(
                <circle key={"crc" + i} cx="50" cy="50" r="1" fill="#123">
                    <animate attributeName="cx" values={"50;" + x} keyTimes={"0;1"} dur={dur + "s"} repeatCount="indefinite" begin={b}/>
                    <animate attributeName="cy" values={"50;" + y} keyTimes={"0;1"} dur={dur + "s"} repeatCount="indefinite" begin={b}/>
                    <animate attributeName="r" values="1;10" keyTimes={"0;1"} dur={dur + "s"} repeatCount="indefinite" begin={b}/>
                    <animate attributeName="fill" values="#123f;#1230" keyTimes={"0;1"} dur={dur + "s"} repeatCount="indefinite" begin={b}/>
                </circle>
            );
            inner.push(
                <circle key={"crcw" + i} cx="50" cy="50" r="1" fill="#123">
                    <animate attributeName="cx" values={"50;" + x1} keyTimes={"0;1"} dur={dur + "s"} repeatCount="indefinite" begin={b}/>
                    <animate attributeName="cy" values={"50;" + y1} keyTimes={"0;1"} dur={dur + "s"} repeatCount="indefinite" begin={b}/>
                    <animate attributeName="r" values="1;10" keyTimes={"0;1"} dur={dur + "s"} repeatCount="indefinite" begin={b}/>
                    <animate attributeName="fill" values="#123f;#1230" keyTimes={"0;1"} dur={dur + "s"} repeatCount="indefinite" begin={b}/>
                </circle>
            );
            k++;
        }
        return <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100">{inner}</svg>;
    };
    return (
        <div className={"loader"}>
            {svg_loader()}
            {/*<svg className="svg-spinner" viewBox="0 0 100 100" width="50">*/}
            {/*    <circle fill="#0000" stroke="#123" strokeWidth="25" strokeDashoffset="0" strokeDasharray="78.54 0"*/}
            {/*            cx="50" cy="50" r="37.5">*/}
            {/*        <animate attributeName="stroke-dasharray" repeatCount="indefinite" values="78.54 0;0 78.54;78.54 0"*/}
            {/*                 dur="1s" begin="0s"></animate>*/}
            {/*        <animate attributeName="stroke-dashoffset" repeatCount="indefinite" values="0;0;-78.54" dur="1s"*/}
            {/*                 begin="0s"></animate>*/}
            {/*    </circle>*/}
            {/*</svg>*/}
            {/*<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 45 45" stroke="#123">*/}
            {/*    <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">*/}
            {/*        <circle cx="22" cy="22" r="6" strokeOpacity="0">*/}
            {/*            <animate attributeName="r" begin="0.5s" dur="1s" values="6;22" calcMode="linear" repeatCount="indefinite"/>*/}
            {/*            <animate attributeName="stroke-opacity" begin="0.5s" dur="1s" values="1;0" calcMode="linear" repeatCount="indefinite"/>*/}
            {/*            <animate attributeName="stroke-width" begin="0.5s" dur="1s" values="2;0" calcMode="linear" repeatCount="indefinite"/>*/}
            {/*        </circle>*/}
            {/*        <circle cx="22" cy="22" r="6" strokeOpacity="0">*/}
            {/*            <animate attributeName="r" begin="1s" dur="1s" values="6;22" calcMode="linear" repeatCount="indefinite"/>*/}
            {/*            <animate attributeName="stroke-opacity" begin="1s" dur="1s" values="1;0" calcMode="linear" repeatCount="indefinite"/>*/}
            {/*            <animate attributeName="stroke-width" begin="1s" dur="1s" values="2;0" calcMode="linear" repeatCount="indefinite"/>*/}
            {/*        </circle>*/}
            {/*        <circle cx="22" cy="22" r="8">*/}
            {/*            <animate attributeName="r" begin="0s" dur="0.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"/>*/}
            {/*        </circle>*/}
            {/*    </g>*/}
            {/*</svg>*/}

            {/*<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100">*/}
            {/*    <circle cx="50" cy="50" r="1" fill="#123">*/}
            {/*        <animate attributeName="cx" values="50;90" keyTimes="0;1"*/}
            {/*                 dur="1s" repeatCount="indefinite" begin="0s"/>*/}
            {/*        <animate attributeName="cy" values="50;90" keyTimes="0;1"*/}
            {/*                 dur="1s" repeatCount="indefinite" begin="0s"/>*/}
            {/*        <animate attributeName="r" values="1;10" keyTimes="0;1" dur="1s"*/}
            {/*                 repeatCount="indefinite" begin="0s"/>*/}
            {/*        <animate attributeName="fill" values="#123f;#1230" keyTimes="0;1" dur="1s"*/}
            {/*                 repeatCount="indefinite" begin="0s"/>*/}
            {/*    </circle>*/}
            {/*    <circle cx="50" cy="50" r="1" fill="#123">*/}
            {/*        <animate attributeName="cx" values="50;10" keyTimes="0;1"*/}
            {/*                 dur="1s" repeatCount="indefinite" begin="-0.5s"/>*/}
            {/*        <animate attributeName="cy" values="50;10" keyTimes="0;1"*/}
            {/*                 dur="1s" repeatCount="indefinite" begin="-0.5s"/>*/}
            {/*        <animate attributeName="r" values="1;10" keyTimes="0;1" dur="1s"*/}
            {/*                 repeatCount="indefinite" begin="-0.5s"/>*/}
            {/*        <animate attributeName="fill" values="#123f;#1230" keyTimes="0;1" dur="1s"*/}
            {/*                 repeatCount="indefinite" begin="-0.5s"/>*/}
            {/*    </circle>*/}
            {/*    <circle cx="50" cy="50" r="1" fill="#123">*/}
            {/*        <animate attributeName="cx" values="50;90" keyTimes="0;1"*/}
            {/*                 dur="1s" repeatCount="indefinite" begin="-0.25s"/>*/}
            {/*        <animate attributeName="cy" values="50;10" keyTimes="0;1"*/}
            {/*                 dur="1s" repeatCount="indefinite" begin="-0.25s"/>*/}
            {/*        <animate attributeName="r" values="1;10" keyTimes="0;1" dur="1s"*/}
            {/*                 repeatCount="indefinite" begin="-0.25s"/>*/}
            {/*        <animate attributeName="fill" values="#123f;#1230" keyTimes="0;1" dur="1s"*/}
            {/*                 repeatCount="indefinite" begin="-0.25s"/>*/}
            {/*    </circle>*/}
            {/*    <circle cx="50" cy="50" r="1" fill="#123">*/}
            {/*        <animate attributeName="cx" values="50;10" keyTimes="0;1"*/}
            {/*                 dur="1s" repeatCount="indefinite" begin="-0.75s"/>*/}
            {/*        <animate attributeName="cy" values="50;90" keyTimes="0;1"*/}
            {/*                 dur="1s" repeatCount="indefinite" begin="-0.75s"/>*/}
            {/*        <animate attributeName="r" values="1;10" keyTimes="0;1" dur="1s"*/}
            {/*                 repeatCount="indefinite" begin="-0.75s"/>*/}
            {/*        <animate attributeName="fill" values="#123f;#1230" keyTimes="0;1" dur="1s"*/}
            {/*                 repeatCount="indefinite" begin="-0.75s"/>*/}
            {/*    </circle>*/}
            {/*</svg>*/}
            {/*<div className={"loader-inner"} >*/}
            {/*</div>*/}
            {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">*/}
            {/*    <path fill="#000" d="M0"/>*/}
            {/*</svg>*/}
        </div>
    );
}