import { connect } from "cloudflare:sockets";

export default function PrizeBox({image,name,amount,isSold}:{image?: string, name: string, amount: number,isSold: boolean}) {
  
  return (

      <BeforeElement />
      <div style={styles.container}>
          <img src={image} alt={name}/>
          <p>{name}</p>
          <p>残り{amount}個</p>
      </div>
  
    
  );
}

const styles: { container: React.CSSProperties } = {
  container:{
    display: 'flex',
    width:'10rem',
    height:'10rem',
    flexDirection: 'column', 
    alignItems: 'center',
    padding: '20px',
    backgroundColor:'purple',
    justifyContent:'center',
    borderRadius:'13px',
  },
};

const BeforeElement =()=>{
    const beforestyle={
    display: 'flex',
    width:'10rem',
    height:'10rem',
    flexDirection: 'column', 
    alignItems: 'center',
    padding: '20px',

    };

  return<div style={beforestyle}></div>

}


