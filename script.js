function settime(){
    let date=new Date();
    let yr=date.getFullYear();
    let month= date.getMonth();
    let day= date.getDate();
    let hour = date.getHours(); 
    let min = date.getMinutes();
    time.innerHTML = hour+":"+min+" / "+day+"-"+(month+1)+"-"+yr;
}
setInterval(settime,1000);

function showhistory(){
    let sname = document.getElementById("sname").value;
    let smail = document.getElementById("semail").value;
    let amount = document.getElementById("amount").value;
    let rname = document.getElementById('rname').value;
    let remail = document.getElementById('remail').value;
    
    let htable = document.getElementById('historytable');
    let hrow = htable.insertRow();
    hrow.insertCell(0).innerHTML= sname;
    hrow.insertCell(1).innerHTML = smail;
    hrow.insertCell(2).innerHTML = amount;
    hrow.insertCell(3).innerHTML = rname;

    let ctable = document.getElementById('customertable');
    let crow = ctable.insertRow();
    crow.insertCell(0).innerHTML = sname;
    crow.insertCell(1).innerHTML = smail;

    if(sname!=null&&sname!=""&&smail!=null&&smail!=""&&amount!=null&&amount!=""&&rname!=null&&rname!=""&&remail!=null&&remail!="")
    {
    alert("Confirm Payment");
    }

}