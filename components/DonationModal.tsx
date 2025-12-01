import React, { useState } from 'react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'wechat' | 'alipay'>('wechat');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90] flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl relative">
        
        {/* Header */}
        <div className="bg-slate-900 p-6 text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h3 className="text-xl font-bold text-white mb-1">感谢老板打赏 🌹</h3>
          <p className="text-slate-400 text-xs">您的支持是我更新的最大动力</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-100">
          <button 
            onClick={() => setActiveTab('wechat')}
            className={`flex-1 py-4 font-bold text-sm transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'wechat' 
                ? 'text-[#09BB07] border-b-2 border-[#09BB07] bg-green-50' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <span className="text-lg">💬</span> 微信支付
          </button>
          <button 
            onClick={() => setActiveTab('alipay')}
            className={`flex-1 py-4 font-bold text-sm transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'alipay' 
                ? 'text-[#1677FF] border-b-2 border-[#1677FF] bg-blue-50' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <span className="text-lg">🟦</span> 支付宝
          </button>
        </div>

        {/* QR Code Area */}
        <div className="p-8 flex flex-col items-center justify-center min-h-[300px] bg-slate-50">
          <div className="bg-white p-2 rounded-xl shadow-lg border border-slate-100 mb-4 relative group">
            {/* Image Placeholder */}
            <div className="w-48 h-48 bg-slate-200 rounded-lg flex items-center justify-center overflow-hidden">
               {/* 
                  部署说明：
                  请将你的收款码分别命名为 wechat.jpg 和 alipay.jpg
                  并上传到项目的 public 文件夹中
               */}
               <img 
                 src={activeTab === 'wechat' ? '/wechat.jpg' : '/alipay.jpg'} 
                 alt={activeTab === 'wechat' ? "微信收款码" : "支付宝收款码"}
                 className="w-full h-full object-cover"
                 onError={(e) => {
                   // Fallback if image not found
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.parentElement!.innerHTML = `<div class="text-xs text-slate-400 text-center p-4">请在 public 文件夹上传<br/><b>${activeTab === 'wechat' ? 'wechat.jpg' : 'alipay.jpg'}</b></div>`;
                 }}
               />
            </div>
            
            {/* Scan Tip */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-[10px] px-3 py-1 rounded-full whitespace-nowrap shadow-md">
              打开{activeTab === 'wechat' ? '微信' : '支付宝'}扫一扫
            </div>
          </div>
          
          <p className="text-slate-500 text-xs text-center mt-2 max-w-[200px]">
            {activeTab === 'wechat' ? '长按识别或截图保存后扫码' : '截图保存后打开支付宝扫码'}
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 text-center border-t border-slate-200">
           <p className="text-[10px] text-slate-400">
             打赏纯属自愿，请量力而行
           </p>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
