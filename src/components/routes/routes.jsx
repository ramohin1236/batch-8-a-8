import { createBrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home";
import Donation from './../Donation/Donation';
import Statics from './../Statictis/Statics';
import Donationdetails from './../Donation/Donationdetails';


const routers= createBrowserRouter([
          {
            path: '/',
            element: <Header></Header>,
            children:[
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/donation',
                    element: <Donation></Donation>
                },
                {
                    path: '/donation/:id',
                    element: <Donationdetails></Donationdetails>
                },
                {
                    path: '/statictis',
                    element: <Statics></Statics>
                },
            ]
          }
])

export default routers;