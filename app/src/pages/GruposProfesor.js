import React, {Fragment, useEffect, useState} from 'react'
import Sidebar from '../components/SidebarProfesor'
import axios from 'axios';
import Cookies from 'universal-cookie'; 
import {Table,TableContainer,TableHead,TableCell,TableBody,TableRow} from '@material-ui/core'
const cookies = new Cookies();

const baseUrl = `http://localhost:3000/api/v1/group/teacher/2-747-30`

export default function PerfilEstudiante(){

    const[data,setData]=useState([])

    const peticionGet = async () =>{
        await axios.get(baseUrl).then(res=>{
            
            setData(res.data)
        })
    }
    
    useEffect(async()=>{
        await peticionGet()
    },[])

    return(
            <div>
                <Sidebar/>
                
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Grupo</TableCell>
                                    <TableCell>anio</TableCell>
                                    <TableCell>nivel</TableCell>
                                    <TableCell>periodo</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map(consola=>(
                                    <TableRow>
                                        <TableCell>{consola.id_group_profesor}</TableCell>
                                        <TableCell>{consola.yeargroupprofesor}</TableCell>
                                        <TableCell>{consola.levelgroupprofesor}</TableCell>
                                        <TableCell>{consola.periodgroupprofesor}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                
            </div>
    )
}