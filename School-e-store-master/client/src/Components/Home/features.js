import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Feature()
{
  return(
  <Row className="options" style={{marginBottom:"40px",paddingLeft:"25px"}}>
    <Col lg={2} md={4} sm={4} xs={6}>
        <img className="imageSymbol" src="https://s3-alpha-sig.figma.com/img/1db0/d9ac/27bef2b95ed7475a8c06752f0af9f90b?Expires=1631491200&Signature=B4pfL07eIfOKTFvzNYZ4NzNfzYv~HSQma2fqXwFat7pXUfmid7XyNIILgRIzR8QpwWwRzBPpUVOT~hOJxaOeTiDQkMvZt3BKTQ3OhkB8XZADux82IrkXnIN5HjM~nc0uDyyR6IwvrkGBszOHoKXgLF4mCvo-jU~c5dVwkjpOJhkQjIl0VyIvmvM99vd7Sm6uLQjXYDtH0WxX0MnSxFlHl0qfedIk4NjD5NNVdyGLK7-jpdbu6Vdf8~5R~Bs~U0Xj3SmpSy-n~tMv1Bi1njRwdUckEBsZvhuBXbBtwNz9MofZKPe2vB2sfh~7n5249R~G3pkgexhOhiYs7Xy3JS4XCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
        Books/E-books
    </Col>
    <Col lg={2} md={4} sm={4} xs={6}>
        <img className="imageSymbol" src="https://s3-alpha-sig.figma.com/img/842c/6ae2/f2214f38d019c80f3e4e26cbd397afe9?Expires=1631491200&Signature=ahinlDgv6kYTn7nWvBTE0NfEPAO-rgym34aUbyXrYieWMRIDvZPc1Z1GoH4cc2gv3BtKJT82vZOVOaRvmxEYyQUp91wut-sKvI2w9odDLWjM2bhw~YAwOFP-pbf2Bp~3RAu3qw6Z2Uc90koORa1kDKXtPoXdmDURp~ccyYqfxCdYbWsK4QCJhBN2~ZpksCM326MbgNVuYZEZSZiHuB6YdS5lTwdloBu3Kv85YbYuxsQOtwmGblgJYtKLTwVIi~xEiinMQhoB2LDOGZp59J97PgttZ79CCN9rewt6AyaxHVJVdYm20~Aiy1VxK5tcmkIGKVfUL4USQl3u82XkSAkppQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
        Admissions
    </Col>
    <Col lg={2} md={4} sm={4} xs={6}>
        <img className="imageSymbol" src="https://s3-alpha-sig.figma.com/img/8c28/a922/15989b5f95ebb7640da34fc1acac1a5c?Expires=1631491200&Signature=Hv~h78~KeuRT8-2ksNykjT4WBIe~cgiELzEwx0ZseIUA05UjPfiiTTeMe0ok~fYZRhDbZ4P2PNhDn7AH-PB3K531UC7MH9670NyNZOYCSW6nAJxbAvBbu2eh7MUIac7fXYqLqJ7kAF-2kzdjI~K86gvV9r3FK-0p4zU2RDqhADkOZCbTtpqkO2~CHc5XhFX~t6Oof7gwKgF6bq6PnEcoLHU7r5tkPA262Cd9RGlxeKQsgyVc2cgOKhthR3tT6ijil~3nQhWLO0ZGsGMO~pujmMeuoUC68WM6k9BiERMz0c64YZiHLru7Zk1QrclYK16Ofzos3741uNCAjDyzSPzO5A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
        E-Learning
  </Col>
  <Col lg={2} md={4} sm={4} xs={6}>
    <img className="imageSymbol" src="https://s3-alpha-sig.figma.com/img/9bf9/f933/48add8762f8e739613ff2d1ce8979135?Expires=1631491200&Signature=dQkGWWkgR8oFEIGrzZrHbULDVaOqH2XXqEF8abYyTQcKnS3R8cKDt0dtaS7ddfmVEgqyCMhFsa4C7Lahd1U53yRIUO04EpVLLcEVh7p1yUvW7p43BL3BvpJ2RKOvBhjfT1MxlxsfjpRy3Vsnjkkf6uj3lGpMx5Ar6ohxHCqn0g7pV23kj6v3ELdetlHGJZPMD0zQmb8aM90WgRXIxwFNFMZIet8cDkhUSMcf2npCJGn3j3EpkquFORzJdVQLkwr7KuV4Rw4ERl0X03SbjaJpIys3lxHL50TrydkONXcx-G0p0f6UmWAg6OEYWheimcZIxaf6JtyLwgqYA0pQIs4lcA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
    Stationaries
  </Col>
  <Col lg={2} md={4} sm={4} xs={6}>
    <img className="imageSymbol" src="https://s3-alpha-sig.figma.com/img/cdab/5f1a/91566f1fc16193cf4b96f1da2fd6139c?Expires=1631491200&Signature=a9225Ag4JwsruC8aKRRWaSLwir313mRKVoBtjvNw7R3YR~LE3K3conBSC1h3UnrycN0aII2gtpo9froJ6QKwGz22MBx0ENkBtX0w2U5w~qxA0pmtVMagJRvyUW8e0E6q6MUtFDvabRQ8KO3BBxFUMTEGapRq8-AJzWOxvID6zJzZhMiCtt5QbPrQbtUuwAbQSbC-TyCaO6oj7GwUwtoQQXiRhOrbiUqLZMwBe1is3qS2KvxwN~JtDuKzSODSrKG10MCBpTLpmVZAPeuB0vIZ3pWs-OH0R7CExBTobsveWB5kMdfwM580L8oBLhduxJqzTwbLcFSTNVdHaiBv0Qcucw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
    Self Help
  </Col>
  <Col lg={2} md={4} sm={4} xs={6}>Free Resources</Col>
</Row>);

}
export default Feature;