import './footer.css'

const repoUrl = "https://github.com/glepetic/profile"
const contactInfo = {
    phone: "+54911 5848-5297",
    mail: "lepeticg@gmail.com"
}

function Footer() {
    return (
        <footer>
            <div className={"footer-half footer-column-container"}>
                <span>© 2024 by Gonzalo Lepetic.</span>
                <span>Source code in <a href={repoUrl} target={"_blank"} rel={"noreferrer"}>Github</a></span>
            </div>
            <div className={"footer-half footer-row-container footer-right"}>
                <div className={"footer-column-container"}>
                    <span className={"bold"}>Call</span>
                    <div className={"footer-row-container height-limited"}>
                        <span>{contactInfo.phone}</span>
                    </div>
                </div>
                <div className={"footer-column-container"}>
                    <span className={"bold"}>Write</span>
                    <div className={"footer-row-container height-limited"}>
                        <span>{contactInfo.mail}</span>
                    </div>

                </div>
                <div className={"footer-column-container"}>
                    <span className={"bold"}>Follow</span>
                    <div className={"footer-row-container height-limited"}>
                        <img src={"/images/facebook.svg"} alt={"facebook logo"} height={"100%"}/>
                        <img src={"/images/github.svg"} alt={"github logo"} height={"100%"}/>
                        <img src={"/images/linkedin.svg"} alt={"linkedin logo"} height={"100%"}/>
                        <img src={"/images/instagram.svg"} alt={"instagram logo"} height={"100%"}/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
