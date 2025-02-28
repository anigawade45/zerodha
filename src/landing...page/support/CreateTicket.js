import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { BiBarChart } from "react-icons/bi";
import { CgBox } from "react-icons/cg";
import { MdOutlineChangeCircle } from "react-icons/md";
import { BsCoin } from "react-icons/bs";

const CreateTicket = () => {
    return (
        <div className='container'>
            <h5 className='text-muted mt-5'>To create a ticket, select a relevant topic</h5>
            <div className='row'>
                <div className='col-md-4'>
                    <h6 className='mt-3'> <IoIosAddCircleOutline className='mr-2 mb-1'/>Account Opening</h6>
                    <ul className="list-unstyled">
                        {["Getting started", "Online", "Offline", "Charges", "Company", "Partnership and HUF", "Non Resident Indian (NRI)"]
                            .map((item, index) => (
                                <li key={index}><a href="#" className="d-block mb-2 text-decoration-none">{item}</a></li>
                            ))}
                    </ul>
                </div>
                <div className='col-md-4'>
                    <h6 className='mt-3'>
                    <GoPerson className='mr-2 mb-1'/>Your Zerodha Account</h6>
                    <ul className="list-unstyled">
                        {["Login credentials",
                            "Your Profile",
                            "Account modification and segment addition",
                            "CMR & DP ID",
                            "Nomination",
                            "Transfer and conversion of shares"]
                            .map((item, index) => (
                                <li key={index}><a href="#" className="d-block mb-2 text-decoration-none">{item}</a></li>
                            ))}
                    </ul>
                </div>
                <div className='col-md-4'>
                    <h6 className='mt-3'>
                    <BiBarChart className='mr-2 mb-1'/>Trading and Markets</h6>
                    <ul className="list-unstyled">
                        {["Trading FAQs",
                            "Kite",
                            "Margins",
                            "Product and order types",
                            "Corporate actions",
                            "Kite features"]
                            .map((item, index) => (
                                <li key={index}><a href="#" className="d-block mb-2 text-decoration-none">{item}</a></li>
                            ))}
                    </ul>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <h6 className='mt-3'>
                        <CgBox className='mr-2 mb-1'/>Funds</h6>
                        <ul className="list-unstyled">
                            {["Fund withdrawal",
                                "Adding funds",
                                "Adding bank accounts",
                                "eMandates"]
                                .map((item, index) => (
                                    <li key={index}><a href="#" className="d-block mb-2 text-decoration-none">{item}</a></li>
                                ))}
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <h6 className='mt-3'>
                        <MdOutlineChangeCircle className='mr-2 mb-1'/>Console</h6>
                        <ul className="list-unstyled">
                            {["IPO",
                                "Portfolio",
                                "Funds statement",
                                "Profile",
                                "Reports",
                                "Referral program"]
                                .map((item, index) => (
                                    <li key={index}><a href="#" className="d-block mb-2 text-decoration-none">{item}</a></li>
                                ))}
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <h6 className='mt-3'>
                        <BsCoin className='mr-2 mb-1'/>Coin</h6>
                        <ul className="list-unstyled">
                            {["Understanding mutual funds and Coin",
                                "Coin app",
                                "Coin web",
                                "Transactions and reports",
                                "National Pension Scheme (NPS)"]
                                .map((item, index) => (
                                    <li key={index}><a href="#" className="d-block mb-2 text-decoration-none">{item}</a></li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTicket
