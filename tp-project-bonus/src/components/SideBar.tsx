import React, { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { useNavigate } from "react-router-dom";
import { tokens } from "../theme";
import {
    MenuOutlined as MenuOutlinedIcon,
} from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";

type ItemProps = {
    title: string,
    to: string,
    icon?: React.ReactElement,
    selected: string,
    setSelected: (title: string) => void,
    children?: React.ReactElement
}

const Item: React.FC<ItemProps> = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate()

    useEffect(() => {
        if (selected === title) {
            navigate(to)
        }
    }, [selected, navigate, to, title])

    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );
};

const SideBar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");


    return (
        <Box>
            <Sidebar
                rootStyles={{
                    "& .ps-sidebar-container": {
                        background: `${colors.primary[400]}`,
                        transition: "width 0.3s ease-in-out",
                    },
                    "& .pro-inner-item": {
                        padding: "5px 35px 5px 20px !important",
                    },
                    "& .pro-icon-wrapper": {
                        backgroundColor: "transparent !important",
                    },
                    "& .ps-menu-button:active": {
                        background: "#6870fa !important",
                    },
                    "& .ps-menu-button:hover": {
                        background: "#868dfb !important",
                    },
                    borderRightStyle: "none"
                }}
                defaultCollapsed={isCollapsed}
            >
                <Menu
                    rootStyles={{
                        "& .ps-menu-button": {
                            padding: "5px 35px 5px 20px !important",
                        },
                    }}
                >
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    Frontend
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Ousmane & Ahmed
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    Software Engineer
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Projects
                        </Typography>
                        <Item
                            title="Bonus project"
                            to="/bonus"
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    )
}
export default SideBar