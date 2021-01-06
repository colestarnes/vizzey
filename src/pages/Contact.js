function Contact() {
    return (
        <>
        <div style={{backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F08%2FWallpapers-laptop-cool-screen.jpg&")`, height:'850px', backgroundRepeat: 'no-repeat'}}>
            <br/>
            <br/>
            <br/>
            <div className="container" >
                <div className="card">
                    <div className="card-body">

                        <div className="container" id="contact">
                            <h2 className="card-title">Contact me</h2>
                            <div className="form-group">
                                <label for="name">Name:</label>
                                <input type="text" className="form-control" placeholder="Your name here" id="fname" />
                            </div>
                            <div className="form-group">
                                <label for="email">Email:</label>
                                <input type="text" className="form-control" placeholder="Your E-mail address" id="lname" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Message:</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                            </div>

                            <button type="submit" className="btn btn-success">Submit!</button>


                        </div>
                    </div>
                </div>
            </div> 
            </div>











        </>
    )
}

export default Contact;