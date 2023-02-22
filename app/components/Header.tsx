import Image from "next/image";
import apple from "../../public/assets/apple_logo.png";
import android from "../../public/assets/android_logo.png";
import apk from "../../public/assets/apk_logo.png";

export function Header() {
  return (
    <div className="bg-darkblue text-slate-200 flex flex-row justify-end pt-10 pb-4 px-20">
      <div className="flex">
        <div className="w-12 h-12 bg-darkgrey rounded-full flex items-center justify-center">
          <Image height="22" src={apple} alt="Apple Store" />
        </div>
        <div className="w-12 h-12 bg-darkgrey rounded-full flex items-center justify-center mx-6">
          <Image height="22" src={android} alt="Google Play Store" />
        </div>
        <div className="w-12 h-12 bg-darkgrey rounded-full flex items-center justify-center">
          <Image height="12" src={apk} alt=".apk Download" />
        </div>
      </div>
    </div>
  );
}
