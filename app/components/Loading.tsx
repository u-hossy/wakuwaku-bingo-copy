export default function Loading() {
  return (
    <div className="h-screen flex flex-col items-center justify-center transition">
      <p className="text-3xl md:text-5xl font-bold my-1 md:my-8 text-slate-50">
        <span className="inline-block">2024年度理大祭</span>{" "}
        <span className="inline-block">前夜祭ビンゴ</span>
      </p>
      <p className="text-3xl md:text-5xl font-bold my-1 md:my-8 text-slate-50">
        {/* <span className="inline-block">準備中のため</span> */}
        <span className="inline-block">読み込み中…</span>
      </p>
    </div>
  );
}
