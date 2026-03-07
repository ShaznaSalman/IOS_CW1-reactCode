// src/components/PhoneFrame.tsx

type Props = {
  children: React.ReactNode;
};

function PhoneFrame({ children }: Props) {
  return (
    <div className="bg-black flex items-center justify-center min-h-screen">

      <div className="w-[393px] h-[852px] bg-[#F5F5F5] rounded-[40px] overflow-hidden shadow-2xl">

        {/* Status Bar */}
        <div className="flex justify-between items-center px-6 pt-3 text-sm">
          <span>9:41</span>

          <div className="flex gap-1">
            <div className="w-4 h-2 bg-black rounded-sm"></div>
            <div className="w-4 h-2 bg-black rounded-sm"></div>
            <div className="w-6 h-3 border border-black rounded-sm"></div>
          </div>
        </div>

        {children}

      </div>

    </div>
  );
}

export default PhoneFrame;