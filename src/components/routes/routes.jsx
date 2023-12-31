import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Donation from './../Donation/Donation';
import Statics from './../Statictis/Statics';
import Donationdetails from './../Donation/Donationdetails';
import Main from "../Main/Main";
import ErrorPage from "../../Error/ErrorPage";


const routers= createBrowserRouter([
          {
            path: '/',
            element: <Main></Main>,
            errorElement:<ErrorPage></ErrorPage>,
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
                    element: <Statics></Statics>,
                    loader: ()=>fetch('/data.json')
                },
            ]
          }
])

export default routers;