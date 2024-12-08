const ConfirmButton = () =>{
    const css ={
        backgroundColor:"#05141f", 
                padding:"30px 50px;", 
                border:"1px solid #05141f",
                color:"white",
                fontWeight:"bold",
                fontsize: "50px",
                borderRadius:"4px",
                 width:"100px" ,height:"50px"
                };
        
    return <button style={css}
    >
    확정
    </button>
        
    };

export default ConfirmButton;