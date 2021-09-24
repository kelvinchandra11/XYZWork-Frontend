import React, { Component } from 'react'
import *as FaIcons from 'react-icons/fa';
import *as AiIcons from 'react-icons/ai';
import *as CgIcons from 'react-icons/cg';
import *as RiIcons from 'react-icons/ri';
import *as GrIcons from 'react-icons/gr';
import *as BiIcons from 'react-icons/bi';



export const SidebarData = [
    {
        title: 'Dashboard',
        path:'/dashboard',
        icon: <AiIcons.AiFillDashboard/>,
       // iconClosed: <RiIcons.RiArrowDownFill/>, //kalau blm ada sub fitur maka dia ada icon ke bwh buat buka
        //iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav:[
            // {
            //     title: 'Dashboard123',
            //     path:'/dashboard/dashboard123',
            //     icon: <AiIcons.AiFillDashboard/>,
            // },
        ]

    },

    {
        title: 'Attendance',
        path:'/attendance',
        icon: <AiIcons.AiOutlineFieldTime/>,
        iconClosed: <RiIcons.RiArrowDownFill/>, //kalau blm ada sub fitur maka dia ada icon ke bwh buat buka
        iconOpened: <RiIcons.RiArrowUpSFill/>,
      
    },

    {
        title: 'Leave Permission',
        path:'/leavepermission',
        icon: <RiIcons.RiUserUnfollowFill/>,
        iconClosed: <RiIcons.RiArrowDownFill/>, //kalau blm ada sub fitur maka dia ada icon ke bwh buat buka
        iconOpened: <RiIcons.RiArrowUpSFill/>,
    },

    {
        title: 'Task Management',
        path:'/taskmanagement',
        icon: <FaIcons.FaTasks/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>, //kalau blm ada sub fitur maka dia ada icon ke bwh buat buka
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'Calender',
                path:'/taskmanagement/calender',
                icon: <CgIcons.CgCalendarDates/>,
            },

            {
                title: 'Assigning Comment',
                path:'/taskmanagement/assigningcomment',
                icon: <AiIcons.AiOutlineComment/>,
            },

            {
                title: 'Status',
                path:'/taskmanagement/status',
                icon: <GrIcons.GrStatusWarning/>,
            },

            {
                title: 'Notepad',
                path:'/taskmanagement/notepad',
                icon: <BiIcons.BiNotepad/>,
            },
        ]
    },
]