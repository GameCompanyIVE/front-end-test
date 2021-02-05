import logo from '../../assets/images/logo.svg'

const Header = ()=>{
    return(
        <header>
            <div className="container">
                <a href="/"><img src={logo} alt="image"/></a>
            </div>
        </header>
    )
}

export default Header;