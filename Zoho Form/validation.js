


function singleValidate(){
    var Name=document.c99.dname.value;
    var lname=document.c99.dlname.value;
    var lcontact=document.c99.pcontact.value;

    if(Name==null || Name==""){
        alert('enter a option');
        return false;
    }
    else if(lname==null || lname==""){
        alert('enter a l name');
        return false;
    }
    else if(lcontact==null || lcontact==""){
        alert("enter a p contact");
        return false;
    }
    else{
        alert('you submitted successfully');
        return true;
    }
}













function validationForm(){
    var initial=document.c2.iname.value;
    var fname=document.c2.pname.value;
    var lname=document.c2.plname.value;
    var email=document.c2.pemail.value;
    var contact=document.c2.pcontact.value;
    var grad=document.c2.pgrad.value;
    var gender=document.c2.pgender.value;
    var exp=document.c2.pexp.value;
    var curemp=document.c2.pce.value;
    var currctc=document.c2.pctc.value;
    var expctc=document.c2.pectc.value;
    var notper=document.c2.pnp.value;
    var ss=document.c2.pss.value;
    var vac=document.c2.pv.value;
    var currlo=document.c2.pcl.value;
    var perlo=document.c2.ppl.value;
    var res=document.c2.pr.value;

    if(initial==null || initial==""){
        alert('Enter your First Name');
        return false;
    }
    else if(fname==null || fname==""){
        alert('Enter your First Name');
        return false;
    }
    else if(lname==null || lname==''){
        alert('Enter your last Name');
        return false;
    }
    else if(email==null || email==''){
        alert('Enter your Valid Email');
        return false;
    }
    else if(contact==null || contact=='' || contact.length > 10){
        alert('Enter your Valid Number');
        return false;
    }
    else if(grad==null || grad==""){
        alert('Enter your Graduation');
        return false;
    }
    else if(gender==null || gender==""){
        alert('Enter your Gender');
        return false;
    }
    else if(exp==null || exp==""){
        alert('Enter your Experience');
        return false;
    }
    else if(curemp==null || curemp==""){
        alert('Enter your Current Experience');
        return false;
    }
    else if(currctc==null || currctc==""){
        alert('Enter your Current CTC');
        return false;
    }
    else if(expctc==null || expctc==""){
        alert('Enter your Expected CTC');
        return false;
    }
    else if(notper==null || notper==""){
        alert('Enter your Notice Period in Days');
        return false;
    }
    else if(ss==null || ss==""){
        alert('Enter your Skill Set');
        return false;
    }
    else if(vac==null || vac==""){
        alert('Enter Where you get to know about this Vacancy');
        return false;
    }
    else if(currlo==null || currlo==""){
        alert('Enter your Current Location');
        return false;
    }
    else if(perlo==null || perlo==""){
        alert('Enter your Preferred Location');
        return false;
    }
    else if(res==null || res==""){
        alert('Upload your Resume');
        return false;
    }
    else{
        alert('You Have Submitted Successfully');
        return false;
    }
}

function clearForm(){
    var clear=document.getElementById('clearbutton');
    
    clear.reset();
}

function myContact(){
    
    var fname=document.c2.pname.value;
    var lname=document.c2.plname.value;
    var email=document.c2.pemail.value;
    var contact=document.c2.pcontact.value;
    var grad=document.c2.pgrad.value

    
    if(fname==null || fname==""){
        alert("Enter a Valid Email ID")
        return false;
    }

    else if(lname==null || lname==""){
        alert("Enter Your Address");
        return false;
    }
    else if(email==null || enamil==""){
        alert("enter your email ID");
        return false;
    }
    else if(contact==null || contact==""){
        alert("enter your number");
        return false;
    }
    else if(grad==null || grad==""){
        alert('enter your grad');
        return false;
    }
    else{
        alert(fname + ' '+ "You Have Successfully Submitted");
        return true;
    }
}

