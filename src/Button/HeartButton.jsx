const HeartButton = () => {
   const happy =()=> alert("행복함!");   
   return <button onClick={happy} style={{backgroundColor:"pink"}}>💛</button>;
};
export default HeartButton;