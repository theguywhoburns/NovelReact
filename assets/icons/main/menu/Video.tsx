import * as React from "react";
import Svg, { Defs, Path, RadialGradient, Stop } from "react-native-svg";

type IVideoProps = {
    focused?: boolean
}

const Video = ({focused = false, ...props}: IVideoProps) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    <Path
      d="M8.44641 0H2.80641C2.12443 0 1.47038 0.270918 0.988139 0.753154C0.505903 1.23539 0.234985 1.88944 0.234985 2.57143V5.14286H3.30356L8.44641 0ZM9.30356 5.14286L14.4464 0H10.8807L5.73784 5.14286H9.30356ZM15.3036 5.14286L20.4464 0H16.8807L11.7378 5.14286H15.3036ZM22.6664 0.214286L17.7378 5.14286H24.235V2.57143C24.2329 2.06814 24.0832 1.57653 23.8043 1.15753C23.5255 0.738531 23.1299 0.410566 22.6664 0.214286ZM0.234985 21.4286C0.234985 22.1106 0.505903 22.7646 0.988139 23.2468C1.47038 23.7291 2.12443 24 2.80641 24H21.6636C22.3455 24 22.9996 23.7291 23.4818 23.2468C23.9641 22.7646 24.235 22.1106 24.235 21.4286V6.85714H0.234985V21.4286ZM8.80641 11.8286C8.80733 11.523 8.8899 11.2232 9.04559 10.9603C9.20128 10.6973 9.42442 10.4808 9.69191 10.3331C9.9594 10.1853 10.2615 10.1118 10.567 10.12C10.8724 10.1283 11.1701 10.218 11.4293 10.38L15.8093 13.1143C16.0573 13.268 16.2621 13.4826 16.404 13.7376C16.546 13.9926 16.6205 14.2796 16.6205 14.5714C16.6205 14.8633 16.546 15.1503 16.404 15.4053C16.2621 15.6603 16.0573 15.8748 15.8093 16.0286L11.4293 18.7629C11.1574 18.9349 10.8425 19.027 10.5207 19.0286C10.066 19.0286 9.63001 18.848 9.30852 18.5265C8.98703 18.205 8.80641 17.7689 8.80641 17.3143V11.8286Z"
      fill={focused ? "url(#paint1_radial_2205_2031)" : "#C8CDDF"}
    />
    <Defs>
      <RadialGradient
        id="paint0_radial_2205_2031"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(19.0989 6.09376) rotate(141.576) scale(17.2122 160.219)"
      >
        <Stop stopColor="#FF627E" />
        <Stop offset={0.9999} stopColor="#F4CD76" />
        <Stop offset={1} stopColor="#FFF8F8" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="paint1_radial_2205_2031"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(23.7683 0.375035) rotate(137.217) scale(62.9944 600.376)"
      >
        <Stop stopColor="#FF627E" />
        <Stop offset={0.9999} stopColor="#F4CD76" />
        <Stop offset={1} stopColor="#FFF8F8" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="paint2_radial_2205_2031"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(16.2359 14) rotate(139.416) scale(0.00247912 0.0234176)"
      >
        <Stop stopColor="#FF627E" />
        <Stop offset={0.9999} stopColor="#F4CD76" />
        <Stop offset={1} stopColor="#FFF8F8" stopOpacity={0} />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default Video;