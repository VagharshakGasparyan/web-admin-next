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
            let x = (Math.sin(a) * 40 + 50).toPrecision(10);
            let y = (Math.cos(a) * 40 + 50).toPrecision(10);
            let a1 = Math.PI * (i + 180)/180;
            let x1 = (Math.sin(a1) * 40 + 50).toPrecision(10);
            let y1 = (Math.cos(a1) * 40 + 50).toPrecision(10);
            inner.push(
                <circle key={"crc" + i} cx="50" cy="50" r="1" fill="#123">
                    <animate attributeName="cx" values={"50;" + x} keyTimes={"0;1"} dur={dur + "s"} repeatCount="indefinite" begin={b}/>
                    <animate attributeName="cy" values={"50;" + y} keyTimes={"0;1"} dur={dur + "s"} repeatCount="indefinite" begin={b}/>
                    <animate attributeName="r" values="1;10" keyTimes={"0;1"} dur={dur + "s"} repeatCount="indefinite" begin={b}/>
                    <animate attributeName="fill" values={"#123f;#1230"} keyTimes={"0;1"} dur={dur + "s"} repeatCount="indefinite" begin={b}/>
                </circle>
            );
            inner.push(
                <circle key={"crcw" + i} cx="50" cy="50" r="1" fill="#123">
                    <animate attributeName="cx" values={"50;" + x1} keyTimes={"0;1"} dur={dur + "s"} repeatCount="indefinite" begin={b}/>
                    <animate attributeName="cy" values={"50;" + y1} keyTimes={"0;1"} dur={dur + "s"} repeatCount="indefinite" begin={b}/>
                    <animate attributeName="r" values="1;10" keyTimes={"0;1"} dur={dur + "s"} repeatCount="indefinite" begin={b}/>
                    <animate attributeName="fill" values={"#123f;#1230"} keyTimes={"0;1"} dur={dur + "s"} repeatCount="indefinite" begin={b}/>
                </circle>
            );
            k++;
        }
        return <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100">{inner}</svg>;
    };
    return (
        <div className={"loader"}>
            {svg_loader()}

        </div>
    );
}