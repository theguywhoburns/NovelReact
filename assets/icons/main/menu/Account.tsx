import * as React from "react";
import Svg, { Defs, Path, RadialGradient, Stop } from "react-native-svg";
type IAccountProps = {
    focused?: boolean
  }
  
const Account = ({focused = false, ...props} : IAccountProps) => (
    <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M11.9852 11.4286C15.0753 11.4286 17.5804 8.8702 17.5804 5.71429C17.5804 2.55837 15.0753 0 11.9852 0C8.89507 0 6.39001 2.55837 6.39001 5.71429C6.39001 8.8702 8.89507 11.4286 11.9852 11.4286Z"
      fill={focused ? "url(#paint1_radial_2205_2031)" : "#C8CDDF"}
    />
    <Path
      d="M13.1876 12.5713H10.8122C9.41881 12.5758 8.03989 12.8602 6.75421 13.4082C5.46853 13.9563 4.30128 14.7573 3.31909 15.7655C2.33691 16.7736 1.55902 17.9693 1.02986 19.2841C0.500699 20.5989 0.230618 22.0072 0.235039 23.4284C0.235039 23.58 0.294063 23.7253 0.399127 23.8325C0.504191 23.9397 0.646689 23.9999 0.795272 23.9999H23.2046C23.3601 23.9854 23.5044 23.9113 23.6084 23.7925C23.7124 23.6737 23.7683 23.5191 23.7648 23.3599C23.7589 20.5004 22.6426 17.7598 20.6603 15.7379C18.678 13.7159 15.9911 12.5773 13.1876 12.5713Z"
      fill={focused ? "url(#paint1_radial_2205_2031)" : "#C8CDDF"}
    />
    <Path
      d="M11.9978 15.4346C11.0663 14.7776 9.76634 14.8657 8.93333 15.6985C8.0022 16.6297 8.0022 18.1449 8.93333 19.0761L11.9978 21.913C12.0065 21.905 12.2216 21.7058 15.0623 19.0761C15.9935 18.1449 15.9935 16.6297 15.0623 15.6985C14.2294 14.8655 12.9294 14.7775 11.9978 15.4346Z"
      fill="#F9FAFD"
    />
    <Path
      d="M11.998 19.9971C13.7439 18.2561 14.3558 18.1281 14.3558 17.3876C14.3558 16.8448 13.9165 16.4055 13.3736 16.4055C12.7553 16.4055 12.5511 16.8929 11.998 17.3743L11.3168 16.6931C10.933 16.3093 10.3118 16.3093 9.92794 16.6931C9.54783 17.0732 9.54502 17.6901 9.9196 18.0736L11.998 19.9971Z"
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
export default Account;
