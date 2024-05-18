import './Animation.css'

const Animation = (props) => {
    const { height = "20px", width = "20px"} = props;
  return (
    <div>
      <div className="box" style={{width: width, height : height}}></div>
    </div>
  )
}

export default Animation
