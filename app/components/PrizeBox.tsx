export default function PrizeBox({image,name,amount}:{image: string, name: string, amount: number}) {
  return (
    <div style={styles.container}>
        <img src={image} alt={name}/>
        <p>{name}</p>
	      <p>残り{amount}個</p>
    </div>
  );
}

const styles: { container: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    padding: '20px',
  },
};

