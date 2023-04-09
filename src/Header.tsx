import logo from './logo.svg'

function Header () {
    return (
        <header className="row">
            <div className='col-4'>
                <img src={logo} alt="logo" />
            </div>
            <div className='col-2'>
                <h1>Welcome to My Site</h1>
            </div>
        </header>
    );
}

export default Header;