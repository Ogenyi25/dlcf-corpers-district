import React from 'react';

const About = () => {
    return (
        <div className="about-page container-fluid" id="about">
            <div className="title">WHO WE ARE</div>
            <div className="title-image">
                <img src={require("../asset/images/icon2.svg")} alt="" className="title-foto" />
            </div>
            <div className="sect1">
                The heartbeat of our church is to see lives changed by the power of God's Spirit.
                We believe that every person has a God-given purpose inside of them.
                </div>
            <div className="sect2">OUR FELLOWSHIP DNA CONSISTS OF FOUR CORE VALUES. </div>

            <div className="row aboutus-section container-fluid">
                <div className=" col-md-2">
                    <div className="aboutus-card">
                        <h4 className="value">love</h4>
                        <div className="body">We love God with all we are and strive to do his will daily.</div>
                    </div>
                </div>

                <div className=" col-md-2">
                    <div className="aboutus-card">
                        <h4 className="value">spiritual growth</h4>
                        <div className="body">We strive to continually grow in faith and in the word of God.</div>
                    </div>
                </div>

                <div className=" col-md-2">
                    <div className="aboutus-card">
                        <h4 className="value">service</h4>
                        <div className="body">We commit to displaying God's love through serving others.</div>
                    </div>
                </div>

                <div className=" col-md-2">
                    <div className="aboutus-card">
                        <h4 className="value">evangelism</h4>
                        <div className="body">Standing still is not an option; <strong>we must go and make a difference</strong>.</div>
                    </div>
                </div>
            </div>

            <hr className="line" />

            <div className="about-fellowship container-fluid">
                <div className="fellowship-notes">
                    <div className="heading">
                        welcome to our church
                    </div>
                    <div className="notes">
                        A church isn't a building—it's the people. We meet for weekly fellowships at different locations
                        within the Local Government. No matter where you are, you can join us.
                    </div>
                </div>
                <div className="row about-row">
                <div className=" col-md-3 about-details">
                    <div className="our-church">
                        <div className="details-image">
                            <img className="image" alt="" />
                        </div>
                        <div className="detail-title">Our Church</div>
                        <div className="detail-body">
                            There are many variations of passages of Lorem Ipsum available, 
                            but the majority have suffered alteration in some form.
                        </div>
                    </div>
                </div>

                <div className=" col-md-3 about-details">
                    <div className="our-church">
                        <div className="details-image">
                            <img className="image" alt="" />
                        </div>
                        <div className="detail-title">Our History</div>
                        <div className="detail-body">
                            There are many variations of passages of Lorem Ipsum available, 
                            but the majority have suffered alteration in some form.
                        </div>
                    </div>
                </div>

                <div className=" col-md-3 about-details">
                    <div className="our-church">
                        <div className="details-image">
                            <img className="image"  alt="" />
                        </div>
                        <div className="detail-title">Our Sermons</div>
                        <div className="detail-body">
                            There are many variations of passages of Lorem Ipsum available, 
                            but the majority have suffered alteration in some form.
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="minister">
                <div className="head">OUR PASTOR</div>
                <div className="minister-info row container-fluid">
                    <div className="image col-md-4">
                        <img className="img" src={require("../asset/images/pastor.jpg")} alt="" />
                    </div>
                    <div className="write-up col-md-8">
                        <h4 className="name">PST.(Dr) SAMUEL OKWULU</h4>
                        <p className="details">
                            Pst. (Dr) Samuel Okwulu has served as Senior Pastor of the fellowship for 3years.
                            He and his wife reside in New Karu, Karu L.G.A of Nasarawa State and have 1 son.<br />
                            Pst. (Dr) Samuel Okwulu is an all round preacher who takes like his own soul, the souls of those placed
                            under his care and control.
                            He is a true man of God and has over the years been used and is still used of God mightily to bless his children.
                        </p>
                    </div>
                </div>

            </div>
            <hr className="line" />
        </div>
    )
}


export default About;