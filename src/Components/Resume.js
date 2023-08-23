import React from "react";

export default function Resume(){

    const pdf = () =>{
        fetch('HWResume_PDF.pdf')
        .then(res =>{
            res.blob()
            .then(blob => {

                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'HWResume_PDF.pdf';
                alink.click();
            })
        })
    }

    return(

        <>
        <h2 className="m-3">Take a look at my resume</h2>
        <button onClick={pdf} className=" m-3 btn submitBtn">Download</button>
        </>
       
    )
};