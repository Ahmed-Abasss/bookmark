var site_name= document.getElementById("site-name");
var site_url=document.getElementById("site-url");

var websiteList = [];

if(localStorage.getItem("siteList")==null)
{
    websiteList=[];
}
else
{
    websiteList=JSON.parse( localStorage.getItem("siteList"));
    displaySite(websiteList);
}

function addSite()
{
    var sites=
    {
        sName:site_name.value,
        sUrl:site_url.value
    }
    websiteList.push(sites);
    clearForm();
    localStorage.setItem("siteList",JSON.stringify(websiteList));
    displaySite(websiteList);
}


function displaySite(sitesList)
{
var container='';

for(let i = 0 ; i< websiteList.length ; i++)
{
    container+=`<tr>
    <td>${i+1}</td>
<td>${sitesList[i].sName}</td>
<td><a class="text-decoration-none text-white" target="_blank" href="${sitesList[i].sUrl}"><button class="btn btn2 "><i class="fa-regular fa-eye"></i> Visit</button></a></td>
<td><button onclick="deleteSite(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i>   Delete</button></td>
</tr>`;
}
document.getElementById("table-body").innerHTML=container;
}



function deleteSite(index)
{
    websiteList.splice(index,1);
    localStorage.setItem("siteList",JSON.stringify(websiteList));
    displaySite(websiteList);
}

function clearForm()
{
    site_name.value="";
    site_url.value='';
}