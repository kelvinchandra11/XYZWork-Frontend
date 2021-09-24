import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from './Sidebar'


const SidebarLink =styled(Link)` //ini isi dari sidebarnya berupa fitur
display: flex;
color: #000000;
justify-content: space-between;
align-items: center;
padding : 20 px
list-style: none;
height: 60px;
text-decoration: none; // menghilangkan underline
font-size:20px;

&:hover{
    background: #E5E5E5;
    border-left:4px solid #DB5858;  //pada saat hover nnti ada warna di kiri
    cursor:pointer;
}
`;

const SidebarLabel = styled.span`
margin-left:15px; //mengatur jarak antara simbol dan judul
`;

const DropdownLink = styled(Link)` //untuk sub fiturnya
background:#C4C4C4; //warna untuk sub fiturnya
height:60px;
padding-left: 3rem;
display:flex;
align-items: center;
text-decoration:none;
color: #000000;
font-size: 38 px;

&:hover{
    background: #F0B8B8;
    border-left:4px solid #DB5858;  //pada saat hover nnti ada warna di kiri
    cursor:pointer;
}
`


const SubMenu=({item}) => {
const [subnav,setSubnav]= useState(false)
const showSubnav=()=>setSubnav(!subnav)

return(
<>
    <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        {/* div dibawah ini buat tampilin sub fitur dan logic kapan dia ada tanda ke bawah dan ke atas */}
        <div> 
            {item.subNav && subnav ?item.iconOpened : item.subNav ? item.iconClosed : null}
        </div>
    </SidebarLink>
    {subnav && item.subNav.map((item, index)=>{
        return(
            <DropdownLink to={item.path} key={index}>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
        )
    })}
</>
)
}

export default SubMenu