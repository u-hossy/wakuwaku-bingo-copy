export default function PrizeBox({ name, amount, imgRef }: { name: string, amount: number, imgRef: string }) {
    // やること：ここからクラス名(classNameで指定できる)をいじってTailwindCSSを適応させる
    // TailwindCSSチートシートみたなのでぐぐると素のCSSとの対応がわかるからおすすめ
    return (
        <>
            <div className="px-2 py-8 rounded-xl bg-neutral-50">
                <div>
                    <div className="">
                        <div className="">
                            <img src={imgRef} alt={name} className="sc-kFCroH ifCAfZ" />
                        </div>
                    </div>
                    <p className="">{name}</p>
                </div>
                <div className="">
                    <span className="">残り</span>
                    <span className="">{amount}</span>
                    <span className="">個</span>
                </div>
            </div>
        </>
    )
}
