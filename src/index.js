function form1()
{   
    let p_mail = document.getElementById("p_mail").value;
    let p_mail_password = document.getElementById("p_mail_password").value;
    if(p_mail == "")
    {
        let p = document.getElementById("form1");
        let error1 = document.getElementById("err1_form1");
        p.style.display = "none";
        error1.style.display = "flex";
    }
    else
    {
        if(p_mail_password == "")
        {
            let p = document.getElementById("form1");
            let err1 = document.getElementById("err1_form1");
            p.style.display = "none";
            err1.style.display = "flex";
        }
        else
        {
            let d = document.getElementById("form1");
            let e = document.getElementById("form2");        
            let p = document.getElementById("point2");
            d.style.display = "none";
            e.style.display = "flex";
            p.style.background = "rgb(255, 132, 0)";
        }
    }
}


function form2()
{
    let p_password = document.getElementById("p_password").value;
    let confirm_p_password = document.getElementById("confirm_p_password").value;
    let p_name = document.getElementById("p_name").value;
    if(p_name == "")
    {
        let p = document.getElementById("form2");
        let err1 = document.getElementById("err1_form2");
        p.style.display = "none";
        err1.style.display = "flex";
    }
    else
    {
        if(p_password == "")
        {
            let p = document.getElementById("form2");
            let err1 = document.getElementById("err1_form2");
            p.style.display = "none";
            err1.style.display = "flex";
        }
        else
        {
            if(confirm_p_password == "")
            {
                let p = document.getElementById("form2");
                let err1 = document.getElementById("err1_form2");
                p.style.display = "none";
                err1.style.display = "flex";
            }
            else
            {
                if(p_password == confirm_p_password)
                {
                    let d = document.getElementById("form2");
                    let e = document.getElementById("form3");
                    let p = document.getElementById("point3");
                    d.style.display = "none";
                    e.style.display = "flex";
                    p.style.background = "rgb(255, 132, 0)";
                }
                else
                {
                    let p = document.getElementById("form2");
                    let err2 = document.getElementById("err_container2");
                    p.style.display = "none";
                    err2.style.display = "flex";
                }    
            }
        }
    }
}


function form3()
{
    let p_address = document.getElementById("p_address").value;
    let p_contact = document.getElementById("p_contact").value;
    if(p_address == "")
    {
        let p = document.getElementById("form3");
        let err1 = document.getElementById("err1_form3");
        p.style.display = "none";
        err1.style.display = "flex";
    }
    else
    {
        if(p_contact == "")
        {
            let p = document.getElementById("form3");
            let err1 = document.getElementById("err1_form3");
            p.style.display = "none";
            err1.style.display = "flex";
        }
        else
        {
            let d = document.getElementById("form3");
            let e = document.getElementById("form4");
            let p = document.getElementById("point4");
            d.style.display = "none";
            e.style.display = "flex";
            p.style.background = "rgb(255, 132, 0)";
        }
    }
    
}

function err1_form1()
{
    let p = document.getElementById("form1");
    let err1 = document.getElementById("err1_form1");
    p.style.display = "flex";
    err1.style.display = "none";
}

function err1_form2()
{
    let p = document.getElementById("form2");
    let err1 = document.getElementById("err1_form2");
    p.style.display = "flex";
    err1.style.display = "none";
}

function err1_form3()
{
    let p = document.getElementById("form3");
    let err1 = document.getElementById("err1_form3");
    p.style.display = "flex";
    err1.style.display = "none";
}

function err2()
{
    let p = document.getElementById("form2");
    let err2 = document.getElementById("err_container2");
    p.style.display = "flex";
    err2.style.display = "none";
}
