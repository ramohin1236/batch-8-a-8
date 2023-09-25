import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Donation from './../Donation/Donation';
import Statics from './../Statictis/Statics';
import Donationdetails from './../Donation/Donationdetails';
import Main from "../Main/Main";


const routers= createBrowserRouter([
          {
            path: '/',
            element: <Main></Main>,
            children:[
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: ()=>fetch('/data.json')
                },
                {
                    path: '/donation',
                    element: <Donation></Donation>
                },
                {
                    path: '/donat/:id',
                    element: <Donationdetails></Donationdetails>,
                    loader: ()=>fetch('/data.json')
                },
                {
                    path: '/statictis',
                    element: <Statics></Statics>
                },
            ]
          }
])

export default routers;