
import { MessageCircle } from "lucide-react";

function WhatsAppButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex w-full items-center justify-center gap-3 bg-[#171714] px-6 py-5 text-[10px] font-bold uppercase tracking-[2px] text-white transition-colors hover:bg-[#44443E] disabled:cursor-not-allowed disabled:opacity-40"
    >
      <MessageCircle size={17} />
      Order on WhatsApp
    </button>
  );
}

export default WhatsAppButton;
