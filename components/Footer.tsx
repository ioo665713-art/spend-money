import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 pt-12 pb-24 mt-12 text-center relative z-10">
      <div className="container mx-auto px-4">
        
        {/* Copyright & Disclaimer */}
        <div className="text-slate-600 text-xs font-mono space-y-2">
          <p>
            &copy; {new Date().getFullYear()} SPEND IT ALL SIMULATOR. ALL RIGHTS RESERVED.
          </p>
          <p className="max-w-2xl mx-auto opacity-70">
            免责声明：本网站仅供娱乐。您在这里花费的 1000 兆美元并非真实货币（很遗憾）。
            请勿尝试使用本网站截图去购买真实的航母或支付房租。
            所有商品价格均为虚构或估算。
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
