import { useTheme } from "app/theme";
import * as React from "react";
import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg";
type ILoopaProps = {
    focused?: boolean
}

const Loopa = ({focused = false, ...props} : ILoopaProps) => {
  const { colors } = useTheme();
  return (
  
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    <Path
      d="M17.6114 6.00044C16.6356 6.00044 16.2889 6.79941 15.7351 7.29717L15.0069 6.51264C14.3723 5.82905 13.3453 5.8292 12.7109 6.51259C12.0792 7.19303 12.0764 8.29254 12.7025 8.97666L15.7351 12L18.7678 8.97666C19.7685 7.88321 19.059 6.00044 17.6114 6.00044Z"
      fill={focused ? "url(#paint0_radial_2205_2031)" : colors.palette.gray}
    />
    <Path
      d="M21.7498 2.48905C18.4305 -0.829923 13.0584 -0.829445 9.7396 2.48905C6.76226 5.46611 6.46256 10.1216 8.83955 13.4372C9.06138 13.7466 9.04656 14.1756 8.77733 14.4448L8.05625 15.1658C7.77562 15.4464 7.32068 15.4464 7.04005 15.1658C6.75942 14.8853 6.30447 14.8853 6.02385 15.1659L5.50352 15.6862L0.752975 20.4361C0.466907 20.7222 0.466906 21.186 0.752972 21.472L2.76337 23.4822C3.04939 23.7682 3.51309 23.7682 3.79911 23.4822L9.07087 18.211C9.35105 17.9308 9.35104 17.4766 9.07086 17.1964C8.79067 16.9163 8.79067 16.462 9.07085 16.1819L9.79218 15.4607C10.0616 15.1913 10.4906 15.1765 10.7998 15.3989C12.2321 16.4291 13.9456 16.9851 15.7448 16.9851C23.2898 16.985 27.0664 7.80511 21.7498 2.48905ZM15.7448 13.6248C15.7451 13.6251 15.7452 13.6251 15.7448 13.6248V13.6248ZM19.9765 9.7079L15.7478 13.6218C15.7461 13.6234 15.7434 13.6234 15.7416 13.6218L15.7441 13.6241L11.5128 9.7079C10.9155 9.11059 10.5865 8.31646 10.5865 7.47175C10.5865 5.0147 13.2314 3.58121 15.2493 4.6838C15.5546 4.85062 15.9348 4.85066 16.2397 4.68313C18.2735 3.56567 20.9029 5.03303 20.9029 7.47175C20.9029 8.31646 20.5739 9.11063 19.9765 9.7079Z"
      fill={focused ? "url(#paint1_radial_2205_2031)" : colors.palette.gray}
    />
    <Path
      d="M16.236 14.0009C16.2344 13.9995 16.2349 13.9999 16.236 14.0009V14.0009Z"
      fill={focused ? "url(#paint2_radial_2205_2031)" : colors.palette.gray}
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
}
export default Loopa;