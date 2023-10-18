import React, { useEffect } from 'react';
import { Tooltip } from 'recharts';
import { PieChart, Pie, Label, Cell } from 'recharts';
import './Main.css'

const data = [
    {
        name: 'Jan',
        uv: 3545,
    },
    {
        name: 'Feb',
        uv: 3000,
    },
    {
        name: 'Mar',
        uv: 2000,
    },
    {
        name: 'Apr',
        uv: 2780,
    },
    {
        name: 'May',
        uv: 1890,
    },
    {
        name: 'Jun',
        uv: 2390,
    },
    {
        name: 'Jul',
        uv: 3225,
    },
    {
        name: 'Aug',
        uv: 2845,
    },
    {
        name: 'Sep',
        uv: 2955,
    },
    {
        name: 'Oct',
        uv: 3125,
    },
    {
        name: 'Nov',
        uv: 2895,
    },
    {
        name: 'Dec',
        uv: 2750,
    },
];

const data01 = [
    { name: 'Customers', value: 65 },
    { name: 'Customers', value: 35 }
];

const COLORS = ['#F23999', '#673EEA'];


function Main() {

    return (
        <div class="container">
            <div class="card">
                <div class="grid">
                    <div class="item">
                        <div class="circle bg-purple">
                            <img src="https://cdn-icons-png.flaticon.com/128/3502/3502199.png" alt="" />
                        </div>
                        <div>
                            <span class="label purple-text">EARNING</span>
                            <span class="value">$198K</span>
                            <div class="change green-text">
                                <i class="fa-solid fa-arrow-up"></i>37.8%
                                <a href="#" class="black-text">this month</a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="circle bg-light-purple">
                            <img src="https://cdn-icons-png.flaticon.com/128/11482/11482372.png" alt="" class="ml-2" />
                        </div>
                        <div>
                            <span class="label purple-text">ORDERS</span>
                            <span class="value">$2.4K</span>
                            <div class="change red-text">
                                <i class="fa-solid fa-arrow-up fa-rotate-180"></i>2%
                                <a href="#" class="black-text">this month</a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="circle bg-light-blue">
                            <img src="https://cdn-icons-png.flaticon.com/128/11482/11482372.png" alt="" class="ml-2" />
                        </div>
                        <div>
                            <span class="label purple-text">BALANCE</span>
                            <span class="value">$2.4K</span>
                            <div class="change red-text">
                                <i class="fa-solid fa-arrow-up fa-rotate-180"></i>2%
                                <a href="#" class="black-text">this month</a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="circle bg-pink">
                            <img src="https://cdn-icons-png.flaticon.com/128/11482/11482372.png" alt="" class="ml-2" />
                        </div>
                        <div>
                            <span class="label purple-text">TOTAL SALES</span>
                            <span class="value">$89K</span>
                            <div class="change green-text">
                                <i class="fa-solid fa-arrow-up"></i>11%
                                <a href="#" class="black-text">this month</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='table-charts'>
                <div class="custom-component">
                    <h1>OVER VIEW</h1>
                    <p>Montly Earning</p>
                    <div className=" mt-1 main-container">
                        <div className="year-stats">
                            <div className="month-group">
                                <div className="bar h-100"></div>
                                <p className="month">Jan</p>
                            </div>
                            <div className="month-group">
                                <div className="bar h-50"></div>
                                <p className="month">Feb</p>
                            </div>
                            <div className="month-group">
                                <div className="bar h-75"></div>
                                <p className="month">Mar</p>
                            </div>
                            <div className="month-group">
                                <div className="bar h-100"></div>
                                <p className="month">Apr</p>
                            </div>
                            <div className="month-group">
                                <div className="bar h-100"></div>
                                <p className="month">May</p>
                            </div>
                            <div className="month-group">
                                <div className="bar h-25"></div>
                                <p className="month">Jun</p>
                            </div>
                            <div className="month-group">
                                <div className="bar h-50"></div>
                                <p className="month">Jul</p>
                            </div>
                            <div className="month-group selected">
                                <div className="bar h-75"></div>
                                <p className="month">Aug</p>
                            </div>
                            <div className="month-group">
                                <div className="bar h-50"></div>
                                <p className="month">Sep</p>
                            </div>
                            <div className="month-group">
                                <div className="bar h-75"></div>
                                <p className="month">Oct</p>
                            </div>
                            <div className="month-group">
                                <div className="bar h-25"></div>
                                <p className="month">Nov</p>
                            </div>
                            <div className="month-group">
                                <div className="bar h-100"></div>
                                <p className="month">Dec</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pie-component'>
                    <h1>CUSTOMERS</h1>
                    <p className='mt-1'>Customer that buy product</p>
                    <div className='pie-chart-container'>
                        <PieChart width={400} height={342}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={true}
                                data={data01}
                                cx="50%"
                                cy="50%"
                                innerRadius={120}
                                outerRadius={150}
                                fill="#8884d8"
                                label
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                                <Label value="65%" position="center" fill="#000" fontSize={30} fontWeight="bold">
                                </Label>
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='card'>
                    <h1>PRODUCT SHELL</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name </th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Sales</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sarphens Illustration</td>
                                <td>$10</td>
                                <td>5</td>
                                <td>252</td>
                            </tr>
                            <tr>
                                <td>Abstract 3D</td>
                                <td>$20</td>
                                <td>3</td>
                                <td>179</td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Main