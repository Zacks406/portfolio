import "./Intro.css"
import zack from "../images/pf8.png"
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name"> Haruna Zakari</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Photographa</div>
                            <div className="i-title-item">Editor</div>
                            <div className="i-title-item">Consultant</div>
                            <div className="i-title-item"></div>
                        </div>
                    </div>
                    <div className="i-desc">
                        Anthropology plays a crucial or central role in the area of global understanding
                        and recognition of diverse ways of seeing the world as critical social, political,
                        and economic importance. It uses practical methods to investigate philosophical problems about the nature of human life in the society.
                    </div>
                </div>
            </div>
            <div className="i-right" >
                <div className="i-bg">
                </div>
                {/* <img src={zack} alt="" className="i-img" /> */}
            </div>
        </div >
    );
};

export default Intro
