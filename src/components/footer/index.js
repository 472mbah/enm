import data from './data.json'
import '../../styling/footer.css';
export const Footer = () => {

    return (
        <div id="footer-container">

            <div id="footer-options-container">
                {
                    Object.keys(data).map((item, i)=>
                            < Section key={i} header={item} options={data[item].options} />
                        )
                }
            </div>

            <p id="copyright">© 2021 Enmaths</p>

        </div>
    )

}

const Section = ({ header, options }) => {

    return(
        <div className="footer-sections">
            <h1>{header}</h1>
            {
                options.map((item, i)=>
                        <p key={i}>{item}</p>
                    )
            }
        </div>
    )
}