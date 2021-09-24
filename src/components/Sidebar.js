import React,{useState}from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import *as FaIcons from 'react-icons/fa';
import *as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';


const Nav = styled.div` //yang warna abu
    background: #C4C4C4;
     min-height : 35px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

`;

const NavIcon = styled(Link)` //yang garis 3
margin-left: 1rem; //posisi 3 garis itu atur disini
font-size:1.5rem; //ukuran nya gede besar atur disini
height: 100 px;
display:flex;
justify-content:flex start;
align-items: center;
`

const SidebarNav = styled.nav` // ini side barnya 
background: #C4C4C4;
width: 270px;
height : 100vh;
display:flex;
justify-content:center;
position:fixed;
top:10;
margin-top:-30px;

left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition: 350 ms;
z-index: 10;
`

const SidebarWrap = styled.div`
width: 100%;
`

const Sidebar = () => {
const [sidebar, setSidebar] = useState(false)
const showSidebar = ()=>setSidebar(!sidebar)

    return(
    <>
    <IconContext.Provider value={{ color:'black'}}>
    <Nav>
        <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar}/>
        </NavIcon>
    </Nav>
    <SidebarNav sidebar={sidebar}>
    <SidebarWrap>
    <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar}/>
        </NavIcon>
        {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index}/>;
        })}
    </SidebarWrap>
    </SidebarNav>
    </IconContext.Provider>
    </> 
    ); 
};

export default Sidebar

// utube sampe 47:46