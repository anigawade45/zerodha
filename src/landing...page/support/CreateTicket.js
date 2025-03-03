import React from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { BiBarChart } from "react-icons/bi";
import { CgBox } from "react-icons/cg";
import { MdOutlineChangeCircle } from "react-icons/md";
import { BsCoin } from "react-icons/bs";

const CreateTicket = () => {
    const topics = [
        { icon: <IoIosAddCircleOutline className="me-2 mb-1" />, title: "Account Opening", items: ["Getting started", "Online", "Offline", "Charges", "Company", "Partnership and HUF", "Non Resident Indian (NRI)"] },
        { icon: <GoPerson className="me-2 mb-1" />, title: "Your Zerodha Account", items: ["Login credentials", "Your Profile", "Account modification and segment addition", "CMR & DP ID", "Nomination", "Transfer and conversion of shares"] },
        { icon: <BiBarChart className="me-2 mb-1" />, title: "Trading and Markets", items: ["Trading FAQs", "Kite", "Margins", "Product and order types", "Corporate actions", "Kite features"] },
        { icon: <CgBox className="me-2 mb-1" />, title: "Funds", items: ["Fund withdrawal", "Adding funds", "Adding bank accounts", "eMandates"] },
        { icon: <MdOutlineChangeCircle className="me-2 mb-1" />, title: "Console", items: ["IPO", "Portfolio", "Funds statement", "Profile", "Reports", "Referral program"] },
        { icon: <BsCoin className="me-2 mb-1" />, title: "Coin", items: ["Understanding mutual funds and Coin", "Coin app", "Coin web", "Transactions and reports", "National Pension Scheme (NPS)"] }
    ];

    return (
        <div className="container">
            <h5 className="text-muted mt-5">To create a ticket, select a relevant topic</h5>
            <div className="row">
                {topics.map((topic, index) => (
                    <div key={index} className="col-md-4">
                        <h6 className="mt-3">{topic.icon}{topic.title}</h6>
                        <ul className="list-unstyled">
                            {topic.items.map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="d-block mb-2 text-decoration-none text-primary">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreateTicket;
