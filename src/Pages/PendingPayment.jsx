import React from "react";
import { motion } from "framer-motion";

export default function PendingPayment({
  onPay = () => alert('Pay Now clicked'),
  onRefresh = () => window.location.reload(),
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f1724] via-[#071126] to-[#081220] p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          w-full max-w-3xl 
          bg-gradient-to-tr from-black/40 to-white/2 
          border border-white/6 
          backdrop-blur-md 
          rounded-2xl shadow-2xl 
          p-6 md:p-8 
          flex flex-col md:flex-row 
          gap-6
        "
      >
        {/* LEFT SECTION */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6 text-center md:text-left">
          
          {/* Illustration */}
          <div className="p-3 md:p-4 rounded-xl bg-gradient-to-b from-white/4 to-white/2 border border-white/5">
            <svg
              className="w-40 h-auto md:w-[200px]"
              viewBox="0 0 200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
              <rect rx="12" width="200" height="120" fill="url(#g1)" opacity="0.12" />
              <rect x="12" y="16" rx="6" width="176" height="88" fill="#0b1220" stroke="#ffffff22" />
              <rect x="22" y="30" width="58" height="28" rx="4" fill="#ffffff10" />
              <circle cx="160" cy="66" r="18" fill="#ffffff14" />
              <path d="M28 74h28" stroke="#ffffff22" strokeWidth="2" strokeLinecap="round" />
              <path d="M28 84h110" stroke="#ffffff22" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Payment Pending</h3>
            <p className="mt-2 text-sm text-slate-300">
              Your payment is not completed. Please complete it to continue using our services.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-1/2 flex flex-col justify-between text-center md:text-left">
          
          <div>
            <h4 className="text-xl font-semibold text-white">Action Required</h4>
            <p className="mt-2 text-sm text-slate-300">
              If you already paid, click <span className="font-medium text-white">Refresh</span>.  
              Otherwise, proceed to pay now to avoid service interruption.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-3">
            <button
              onClick={onRefresh}
              className="
                w-full py-3 rounded-xl 
                border border-white/8 
                text-sm font-medium text-slate-200 
                bg-transparent hover:bg-white/2 transition
              "
            >
              Refresh
            </button>

            <button
              
              className="
                w-full py-3 rounded-xl 
                text-sm font-semibold 
                bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] 
                shadow-md 
                hover:scale-[1.01] active:scale-100 transition-transform 
                text-black
              "
            >
              Pay Now
            </button>
          </div>

          {/* Support */}
          <div className="mt-4 text-center md:text-left text-xs text-slate-400">
            Need help? <a href="" className="text-white underline">Contact support</a>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
