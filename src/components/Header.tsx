type HeaderProps = {
    headerText: string,
}

const Header = ({headerText} : HeaderProps) => {
    return (  
        <header>
            <h1>{headerText}</h1>
        </header>
    )
}

export default Header