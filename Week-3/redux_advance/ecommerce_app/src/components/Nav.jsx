import { NavLink } from "react-router-dom";
import './Nav.css';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function Nav() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink to='/' className="navbar-brand" >My Ecomm App</NavLink>
                <div className="navbar-div">
                    <ul className="navbar-ul">
                        <li className="nav-item">
                            <NavLink to='/product' className="nav-link" activeClassName="active" aria-current="page">
                                Product
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={0} color="secondary">
                                        <CategoryIcon />
                                    </StyledBadge>
                                </IconButton>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/cart' className="nav-link" activeClassName="active">
                                Cart
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={0} color="secondary">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                            </NavLink>
                        </li>
                    </ul>
                    {/* <form className="navbar-search-form" role="search">
                        <input className="navbar-search-input" type="search" placeholder="Search" aria-label="Search" />
                        <button className="navbar-search-button" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}

export default Nav