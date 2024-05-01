import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";

type HeaderProps = {
  style?: React.CSSProperties;
};

const Header: React.FC<HeaderProps> = ({ style }) => {
  // コンポーネントの定義
  return (
    <header style={style}>
      <div className="bg-black text-white px-5 py-2 flex items-center justify-between">
        <TwitterIcon />
        BBS
        <MenuIcon />
      </div>
    </header>
  );
};

export default Header;
