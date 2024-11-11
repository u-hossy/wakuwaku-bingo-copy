import { connect } from "cloudflare:sockets";

export default function PrizeBox({
  image,
  name,
  amount,
}: {
  image?: string;
  name: string;
  amount: number;
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
      {amount===0 && <div style={styles.overlay}></div>}
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
    padding: '5px',
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
    overflow: 'hidden', // 画像がはみ出さないように
    width: '100%',
    height: '75%', 
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // 縦横比を保ちながら画像をリサイズ
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
    top: '0', // 上部余白
    left: '0', // 左余白
    right: '0', // 右余白
    bottom: '0', // 下余白
    backgroundColor: 'rgba(128, 128, 128, 0.5)', // 半透明の灰色
    borderRadius: '13px'
  }
};
