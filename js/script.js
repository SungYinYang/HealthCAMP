function storeInfo() {
    localStorage.setItem('local_f_name', document.getElementById('firstName').value);
    localStorage.setItem('local_l_name', document.getElementById('lastName').value);
    localStorage.setItem('local_gender', document.getElementById('gender').value);
    localStorage.setItem('local_age', document.getElementById('age').value);
    localStorage.setItem('local_notes', document.getElementById('note').value);

}

function storeInfo2() {
    localStorage.setItem('local_height', document.getElementById('height').value);
    localStorage.setItem('local_weight', document.getElementById('weight').value);
    localStorage.setItem('local_BT', document.getElementById('BT').value);
    localStorage.setItem('local_PR', document.getElementById('PR').value);
    localStorage.setItem('local_BP', document.getElementById('BP').value);
    localStorage.setItem('local_medi', document.getElementById('medi').value);
    localStorage.setItem('local_medi_notes', document.getElementById('medi_notes').value);


    let firstName = localStorage.getItem('local_f_name');
    let lastName = localStorage.getItem('local_l_name');
    let gender = localStorage.getItem('local_gender');
    let age = localStorage.getItem('local_age');
    let note = localStorage.getItem('local_notes');
    
    let height =localStorage.getItem('local_height');
    let weight = localStorage.getItem('local_weight');
    let BT = localStorage.getItem('local_BT');
    let PR = localStorage.getItem('local_PR');
    let BP = localStorage.getItem('local_BP');
    let medi = localStorage.getItem('local_medi');
    let medi_notes = localStorage.getItem('local_medi_notes');
    let photo = localStorage.getItem('imgData');

    const person = {
        'firstName' : firstName,
        'lastName' : lastName,
        'gender' : gender,
        'age' : age,
        'note' : note,
        'height' : height,
        'weight' : weight,
        'BT' : BT,
        'PR' : PR,
        'BP' : BP,
        'medi' : medi,
        'medi_notes' : medi_notes,
        'photo': photo
    }

    //ajax
    var postRequest = fetch('http://localhost:3000/post-person', {
    method: 'post',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(person)
    }).then(function(response) {
        return response.json();
    })

    //show table
    showTable()
}


function showTable() {
    console.log(localStorage.getItem('imgData'));
    fetch('http://localhost:3000/get-person', {
        method: 'get',
        mode: 'cors',
        headers: {
            "Content-Type": "text/plain"
        }
        }).then(function(response) {
            return response.json();
        }).then(datas => {
            console.log('this is the data', datas);
            //update the table
            //1. clear the table 
            //2. repeopulate -loop
            console.table(datas);
            var patient_tbody = document.getElementById('patient_table').tBodies[0];
            patient_tbody.innerHTML = "";
            let counter = patient_tbody.rows.length;

            while(counter-- != 0){
                patient_tbody.deleteRow();
            }

            for (var i = 0; i < datas.length; i++) {
                var row = datas[i];
                var name = row.f_name;
                var age = row.age;
                var gender = row.gender;
                var photo = row.photo;
                var medications = row.medi;
                var notes = row.note;


                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                var td3 = document.createElement('td');
                var td4 = document.createElement('td');
                var td5 = document.createElement('td');
                var td6 = document.createElement('td');

                td1.innerHTML = name;
                td2.innerHTML = age;
                td3.innerHTML = gender;
                td4.innerHTML = "<img class='user_profile_photo' src=" + localStorage.getItem('imgData') + " width=100px, height=100px />";
                td5.innerHTML = medications;
                td6.innerHTML = notes;

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);
                patient_tbody.appendChild(tr);
            }
        })
}

function en(c){var x='charCodeAt',b,e={},f=c.split(""),d=[],a=f[0],g=256;for(b=1;b<f.length;b++)c=f[b],null!=e[a+c]?a+=c:(d.push(1<a.length?e[a]:a[x](0)),e[a+c]=g,g++,a=c);d.push(1<a.length?e[a]:a[x](0));for(b=0;b<d.length;b++)d[b]=String.fromCharCode(d[b]);return d.join("")}

function de(b){var a,e={},d=b.split(""),c=f=d[0],g=[c],h=o=256;for(b=1;b<d.length;b++)a=d[b].charCodeAt(0),a=h>a?d[b]:e[a]?e[a]:f+c,g.push(a),c=a.charAt(0),e[o]=f+c,o++,f=a;return g.join("")}