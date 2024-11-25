import { Component } from "react";

class ImgComponent extends Component {
    render() {
        return (
            <section>
                <h3>ED ECCO INVECE L'IMMAGINE</h3>
                <img src={this.props.src}   alt="img" />
            </section>
        )
    }
}

export default ImgComponent