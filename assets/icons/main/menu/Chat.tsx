import * as React from "react";
import Svg, { Defs, Path, RadialGradient, Stop } from "react-native-svg";
type IChatProps = {
  focused?: boolean
}

const Chat = ({focused = false, ...props} : IChatProps) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    <Path
      d="M10.6754 11.5123C12.4213 9.77122 13.0331 9.64321 13.0331 8.90272C13.0331 8.35996 12.5939 7.9206 12.051 7.9206C11.4327 7.9206 11.2285 8.40805 10.6754 8.88941L9.99422 8.20827C9.61036 7.82446 8.98917 7.82446 8.60531 8.20827C8.2252 8.58838 8.22239 9.20521 8.59697 9.58879L10.6754 11.5123Z"
      fill={focused ? "url(#paint1_radial_2205_2031)" : "#C8CDDF"}
    />
    <Path
      d="M10.6754 19.6875C16.1032 19.6875 20.5191 15.2716 20.5191 9.84375C20.5191 4.41591 16.1032 0 10.6754 0C2.21392 0 -2.28289 10.0622 3.29809 16.3618L0.845826 19.6875H10.6754ZM7.61087 7.21378C8.44389 6.38095 9.74383 6.29287 10.6754 6.94987C11.607 6.29283 12.9069 6.38081 13.7398 7.21378C14.671 8.145 14.671 9.66014 13.7398 10.5914C10.3223 13.7551 10.705 13.4009 10.6754 13.4283L7.61087 10.5914C6.67975 9.66014 6.67975 8.145 7.61087 7.21378Z"
      fill={focused ? "url(#paint1_radial_2205_2031)" : "#C8CDDF"}
    />
    <Path
      d="M22.4989 20.995C25.5962 17.4441 25.2972 12.0764 21.8837 8.88037C22.4475 15.5015 17.2037 21.0937 10.6754 21.0937H9.39191C11.0299 22.9212 13.3841 24 15.902 24H24.7147L22.4989 20.995Z"
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
export default Chat;
