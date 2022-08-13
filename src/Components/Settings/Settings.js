import React from "react"
import { Checkbox, Input, DatePicker } from 'antd';
import { jsPDF } from "jspdf";
import "./Settings.css"
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import html2canvas from "html2canvas";

export default function Settings(props) {


    const createPDF = async () => {
        const pdf = new jsPDF("portrait", "pt", "a4");
        const data = await document.querySelector("#form");
        pdf.html(data).then(() => {
            pdf.save("shipping_label.pdf");
        });
    };

    const toggleOption1 = (e) => {
        props.isOption1 === true ? props.setOption1(false) : props.setOption1(true)
    };

    const toggleOption2 = (e) => {
        props.isOption2 === true ? props.setOption2(false) : props.setOption2(true)
    };

    const toggleOption3 = (e) => {
        props.isOption3 === true ? props.setOption3(false) : props.setOption3(true)
    };

    return (
        <div className="settings-container">

            <div style={{height: "10px"}}></div>
            <div className="label"> Agreement Made on </div>
            <DatePicker/>

            <div style={{height: "18px"}}></div>
            <div className="label"> The Other Party </div>
            <Input placeholder="ex. Kevin Nelson"/>

            <div style={{height: "18px"}}></div>
            <div className="label"> Lesee's Initials </div>
            <Input placeholder="ex. KN"/>

            <div style={{height: "18px"}}></div>
            <div className="label"> Term Dates </div>
            <DatePicker.RangePicker/>

            <div style={{height: "18px"}}></div>
            <div className="label"> Term Duration </div>
            <Input addonBefore="Months" disabled={true} value={"--"}/>

            <div style={{height: "18px"}}></div>
            <div className="label"> Monthly Rent </div>
            <Input addonBefore="$" disabled={true} value={"ex. 950"}/>

            <div style={{height: "18px"}}></div>
            <div className="label"> Fails to way rent within </div>
            <Input addonBefore="Days" disabled={true} value={"ex. 18"}/>

            <div style={{height: "18px"}}></div>
            <div className="label"> Signature Date </div>
            <DatePicker/>

            <div>
                <div>
                    <div style={{height: "10px"}}></div>
                    <div className="checkbox">
                        <Checkbox checked={props.isOption1} onChange={toggleOption1}>Option1</Checkbox>
                    </div>
                    <div style={{height: "10px"}}></div>
                    <div className="checkbox">
                        <Checkbox checked={props.isOption2} onChange={toggleOption2}>Option2</Checkbox>
                    </div>
                    <div style={{height: "10px"}}></div>
                    <div className="checkbox">
                        <Checkbox checked={props.isOption3} onChange={toggleOption3}>Option3</Checkbox>
                    </div>
                </div>

                <div style={{height: "18px"}}></div>
                <Button onClick={createPDF} type="primary" icon={<DownloadOutlined />} size={"large"}>
                    Download
                </Button>
            </div>
        </div>
    )
}