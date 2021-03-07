import React, { useEffect, useState } from 'react';
import randomColor from 'randomcolor'

const Home = () => {
    const [color, setColor] = useState(randomColor())

    useEffect(() => {
        const interval = setInterval(() => {
            setColor(randomColor())
        }, 4000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="home">
            <svg width="512px" height="512px" className="rectsvg">

                <rect fill={randomColor()} x="66" y="130" width="78" height="78" transform="translate(-88.75 123.75) rotate(-45)" />
                <rect fill={randomColor()} x="192.43" y="185.01" width="53.14" height="53.14" transform="translate(-85.46 216.83) rotate(-45)" />
                <rect fill={randomColor()} x="263.43" y="160.01" width="53.14" height="53.14" transform="translate(-46.99 259.71) rotate(-45)" />
                <rect fill={randomColor()} x="20.43" y="66.01" width="53.14" height="53.14" transform="translate(-51.7 60.35) rotate(-45)" />
                <rect fill={randomColor()} x="16.86" y="213.44" width="26.27" height="26.27" />
                <rect fill={randomColor()} x="173.86" y="144.44" width="26.27" height="26.27" />
                <rect fill={randomColor()} x="14.74" y="11.32" width="30.51" height="30.51" transform="translate(-10.01 29) rotate(-45)" />
                <rect fill={randomColor()} x="308.1" y="232.17" width="29.81" height="29.81" transform="translate(-80.11 300.76) rotate(-45)" />
                <rect fill={randomColor()} x="338.1" y="341.17" width="29.81" height="29.81" transform="translate(-148.39 353.9) rotate(-45)" />
                <rect fill={randomColor()} x="380.1" y="389.17" width="29.81" height="29.81" transform="translate(-170.03 397.66) rotate(-45)" />
                <rect fill={randomColor()} x="468.1" y="221.17" width="29.81" height="29.81" transform="translate(-25.46 410.68) rotate(-45)" />
                <rect fill={randomColor()} x="318.1" y="382.17" width="29.81" height="29.81" transform="translate(-183.24 351.77) rotate(-45)" />
                <rect fill={randomColor()} x="241.1" y="12.17" width="29.81" height="29.81" transform="translate(55.83 188.95) rotate(-45)" />
                <rect fill={randomColor()} x="14.49" y="158.64" width="26.87" height="26.87" transform="translate(-113.5 70.14) rotate(-45)" />
                <rect fill={randomColor()} x="308.1" y="66.17" width="29.81" height="29.81" transform="translate(37.27 252.14) rotate(-45)" />
                <rect fill={randomColor()} x="130.1" y="340.17" width="29.81" height="29.81" transform="translate(-208.61 206.53) rotate(-45)" />
                <rect fill={randomColor()} x="145.1" y="439.08" width="37.9" height="37.9" />
                <rect fill={randomColor()} x="113.1" y="476.08" width="24.9" height="24.9" />
                <rect fill={randomColor()} x="10.1" y="335.08" width="32.9" height="32.9" />
                <rect fill={randomColor()} x="168.1" y="372.17" width="29.81" height="29.81" transform="translate(-220.11 242.77) rotate(-45)" />
                <rect fill={randomColor()} x="338.1" y="272.17" width="29.81" height="29.81" transform="translate(-99.6 333.69) rotate(-45)" />
                <rect fill={randomColor()} x="468.1" y="386.17" width="29.81" height="29.81" transform="translate(-142.14 459.01) rotate(-45)" />
                <rect fill={randomColor()} x="337.43" y="22.01" width="53.14" height="53.14" transform="translate(72.26 271.61) rotate(-45)" />
                <rect fill={randomColor()} x="106" y="220" width="78" height="78" transform="translate(-140.67 178.39) rotate(-45)" />
                <rect fill={randomColor()} x="190.03" y="254.03" width="132.94" height="132.94" transform="translate(-151.5 275.25) rotate(-45)" />
                <rect fill={randomColor()} x="295.04" y="421" width="82.77" height="82.77" />
                <rect fill={randomColor()} x="383.04" y="294" width="82.77" height="82.77" />
                <rect fill={randomColor()} x="77.94" y="8.99" width="52.96" height="52.96" />
                <rect fill={randomColor()} x="156.94" y="19" width="37.96" height="37.96" />
                <rect fill={randomColor()} x="134.89" y="68.95" width="63.95" height="63.95" />
                <rect fill={randomColor()} x="18.04" y="253.8" width="66.96" height="66.96" />
                <rect fill={randomColor()} x="188.04" y="421" width="67.77" height="67.77" />
                <rect fill={randomColor()} x="210.78" y="55.78" width="83.44" height="83.44" />
                <rect fill={randomColor()} x="323.78" y="110" width="43.22" height="43.22" />
                <rect fill={randomColor()} x="402.78" y="412" width="64.22" height="64.22" transform="translate(-186.66 437.59) rotate(-45)" />
                <rect fill={randomColor()} x="346.06" y="159.56" width="96.87" height="96.87" transform="translate(-31.53 339.88) rotate(-45)" />
                <rect fill={randomColor()} x="432.5" y="254" width="33.1" height="33.1" />
                <rect fill={randomColor()} x="474.5" y="319" width="33.1" height="33.1" />
                <rect fill={randomColor()} x="470.5" y="467" width="33.1" height="33.1" />
                <rect fill={randomColor()} x="446.5" y="137.6" width="40.5" height="40.5" />
                <rect fill={randomColor()} x="428.13" y="67.13" width="53.74" height="53.74" transform="translate(66.8 349.27) rotate(-45)" />
                <rect fill={randomColor()} x="465.56" y="21.56" width="26.87" height="26.87" transform="translate(115.55 348.96) rotate(-45)" />
                <rect fill={randomColor()} x="28.43" y="358.43" width="113.14" height="113.14" transform="translate(-268.55 181.65) rotate(-45)" />
            </svg>
        </div>
    )
}
export default Home