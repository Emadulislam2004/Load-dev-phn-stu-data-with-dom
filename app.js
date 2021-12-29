// catch the HTML element
let tableBody = document.querySelector('.tableBody')
let card = document.querySelector('.boxForDeveloper')
let boxForStudent = document.querySelector('.boxForStudent')





// loop for developer data exicute
developerData.map((data,index) => {

    card.innerHTML +=`

    <div class="boxItem v_align">
    <div class="boxImg">
      <img class="img-fluid"src="${data.image}" alt="">
    </div>
    <div class="boxText">
      <h6 class="v_align">Name : ${data.Name}</h6>
      <h6 class="v_align">Age : ${data.Age}</h6>
      <h6 class="v_align">Skill : ${data.Skill} developer</h6>
      <h6 class="v_align">Location : ${data.Location}</h6>
      <h6 class="v_align">Salary : ${data.Salary} USD</h6>

    </div>
  </div>

    `
})

// loop for phone data exicute
phoneNumber.map((data,index) => {

  tableBody.innerHTML += `
  
  <tbody class="tableBHody">
  <tr>
    <th scope="row">${index + 1}</th>
    <td>${data.name}</td>
    <td>${data.number}</td>
  </tr>
</tbody>

  `
})




// loop for student data exicute
studentData.map((data,index) => {

  boxForStudent.innerHTML +=`

    <div class="boxItem v_align">
    <div class="boxImg">
      <img class="img-fluid"src="${data.image}" alt="">
    </div>
    <div class="boxText">
      <h6 class="v_align">ID : ${data.ID}</h6>
      <h6 class="v_align">Name : ${data.name}</h6>
      <h6 class="v_align">Class : ${data.class}</h6>
      <h6 class="v_align">Location : ${data.location}</h6>
      <h6 class="v_align">Gender : ${data.gender}</h6>

    </div>
  </div>

    `
})