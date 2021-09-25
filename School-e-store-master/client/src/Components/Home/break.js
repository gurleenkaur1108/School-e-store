import "./styles.css"
function Break(params) {
    return(<div style={{marginTop:"25px",marginBottom:"20px"}}>
<div class="line"></div>
<div className="lineTitle">{params.title}</div>
<div class="line"></div>
</div>);
}
export default Break;