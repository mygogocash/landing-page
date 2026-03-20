export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3fbf5]">
      <div className="text-center">
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-[#e8e8e8] border-t-[#006c4f]"></div>
        <p className="mt-4 text-base font-medium text-[#52525b]">กำลังโหลด...</p>
      </div>
    </div>
  );
}
