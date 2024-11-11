import { connect } from "cloudflare:sockets";

export default function PrizeBox({image,name,amount,isSold}:{image?: string, name: string, amount: number,isSold: boolean}) {
  
  return (
    <div style={styles.container}>
          <img src={image} alt={name}/>
          <p>{name}</p>
          {amount === 0 ? <p>売り切れ</p> : <p>残り{amount}個</p>}
          {isSold && <div style={styles.overlay}></div>}
      </div>
  
    
  );
}

const styles: { container: React.CSSProperties; overlay: React.CSSProperties } = {
  container: {
    display: 'flex',
    width: '10rem',
    height: '10rem',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'pink',
    justifyContent: 'center',
    borderRadius: '13px',
    position: 'relative',
    overflow: 'hidden' 
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(128, 128, 128, 0.5)', 
    borderRadius: '13px'
  }
};


