import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f3fbf5] px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#006c4f] sm:text-[120px]">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-[#161d1a] sm:text-3xl">
          ไม่พบหน้าที่คุณกำลังมองหา
        </h2>
        <p className="mt-4 text-base text-[#52525b] sm:text-lg">
          หน้าที่คุณกำลังมองหาอาจถูกลบ ย้าย หรือไม่มีอยู่
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="btn btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-bold text-white shadow-lg sm:rounded-full sm:px-8 sm:py-4"
          >
            <Home className="h-5 w-5" />
            <span>กลับหน้าหลัก</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn-secondary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-bold text-[#00503a] sm:rounded-full sm:px-8 sm:py-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>กลับไปหน้าก่อนหน้า</span>
          </button>
        </div>
      </div>
    </div>
  );
}
