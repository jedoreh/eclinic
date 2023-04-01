$(document).ready(function(){
    let getpersons = "getpersons"
    let persondata
    $.post("controllers/view-all-staff.php",{getpersons:getpersons},function(data){
        
        data = JSON.parse(data)
        persondata = data
        let personrecord = ``
        data.records.forEach(element => {
            let photo = element.photo
            let person = element.lastname + ", " + element.firstname + " " + element.middlename
            let address = element.contactaddress + ", " + element.town + ", " + element.state + ", " + element.country
            if(photo==null){
                photo="assets/img/user.jpg"
            } else {
                photo = "images/" + photo
            }
            personrecord += `
                <tr>
										<td>` + person + `</td>
                                        <td>` + element.phonenumber + ` yrs<br>` + element.email + `</td>
                                        <td>` + element.username + `</td>
                                        <td>` + element.persontype + `</td>
                                        <td>` + element.systemaccounttype + `</td>
										<td class="text-right">
											<div class="dropdown dropdown-action">
												<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
												<div class="dropdown-menu dropdown-menu-right">
													<a class="dropdown-item" href="edit-person.html?id=` + element.id + `"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                    <a class="dropdown-item" href="assign-department.html?id=` + element.id + `"><i class="fa fa-pencil m-r-5"></i> Assign Department</a>
                                                    <a class="dropdown-item" href="system-account-person.html?id=` + element.id + `"><i class="fa fa-pencil m-r-5"></i> System Account</a>
                                                    <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
												</div>
											</div>
										</td>
									</tr>
            `
        });
        
        $("#personrecords").html(personrecord)

    })

    $("#searchperson").keyup(function(evt){
        evt.preventDefault()
        let searchtext = $(this).val().toUpperCase()
        let personrecord = ``
        persondata.records.forEach(element => {
            let person = element.firstname + " " + element.lastname + " " + element.middlename
            person = person.toUpperCase()
            if(person.includes(searchtext) ){
                let photo = element.photo
                let person = element.lastname + ", " + element.firstname + " " + element.middlename
                let address = element.contactaddress + ", " + element.town + ", " + element.state + ", " + element.country
                if(photo==null){
                    photo="assets/img/user.jpg"
                } else {
                    photo = "images/" + photo
                }
                personrecord += `
                    <tr>
                                            <td>` + person + `</td>
                                            <td>` + element.phonenumber + ` yrs<br>` + element.email + `</td>
                                            <td>` + element.username + `</td>
                                            <td>` + element.persontype + `</td>
                                            <td>` + element.systemaccounttype + `</td>
                                            <td class="text-right">
                                                <div class="dropdown dropdown-action">
                                                    <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="edit-person.html?id=` + element.id + `"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                                        <a class="dropdown-item" href="assign-department.html?id=` + element.id + `"><i class="fa fa-pencil m-r-5"></i> Assign Department</a>
                                                        <a class="dropdown-item" href="system-account-person.html?id=` + element.id + `"><i class="fa fa-pencil m-r-5"></i> System Account</a>
                                                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                `
            
            
           
            }
             
        });
        $("#personrecords").html(personrecord)
    })


})