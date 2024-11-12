export default function PrizeBox({
  image,
  name,
  amount,
  isSold
}: {
  image?: string;
  name: string;
  amount: number;
  isSold: boolean;
}) {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={image} alt={name} style={styles.image} />
      </div>
      <div style={styles.textContainer}>
        <p>{name}</p>
        {amount === 0 ? <p>売り切れ</p> : <p>残り{amount}個</p>}
      </div>
      {isSold && <div style={styles.overlay}></div>}
    </div>
  );
}

const styles: {
  container: React.CSSProperties;
  imageContainer: React.CSSProperties;
  textContainer: React.CSSProperties;
  overlay: React.CSSProperties;
  image: React.CSSProperties;
} = {
  container: {
    display: 'flex',
    width: '10rem',
    height: '10rem',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'pink',
    borderRadius: '13px',
    position: 'relative', // オーバーレイを重ねるためにpositionをrelativeに設定
    overflow: 'hidden' // オーバーレイがはみ出さないように設定
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center', // 横方向に中央揃え
    alignItems: 'center', // 縦方向に中央揃え
    width: '100%',
    height: '75%', // ボックスの上部3/4を占める
    overflow: 'hidden', // 画像がはみ出さないように
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // 縦横比を保ちながら画像をリサイズ
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: 'pink', // 半透明の背景でテキストが見やすくなる
    width: '100%',
    height: '25%' // 高さをボックスの下1/4に設定
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(128, 128, 128, 0.5)', // 半透明の灰色
    borderRadius: '13px'
  }
};
