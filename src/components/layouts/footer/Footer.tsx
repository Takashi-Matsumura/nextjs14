import React from "react";

type FooterProps = {
  style?: React.CSSProperties;
};

const Footer: React.FC<FooterProps> = ({ style }) => {
  // コンポーネントの定義
  return (
    <footer style={style}>
      <div className="w-full bg-black text-white px-5 py-2 flex items-center justify-center">
        <p>© 2024 MatsBACCANO</p>
      </div>
    </footer>
  );
};

export default Footer;
