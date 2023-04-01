$(document).ready(function(){
    
    let submenu = `
        <div class="row align-items-center" id"modules_menu">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light" style="text-align:left">
                            
                            
    
                            <div class="navbar-collapse align-items-center"
                                id="navbarSupportedContent1" style="text-align:left; padding-left:30px; color:#000000;">
                                <ul class="navbar-nav align-items-center">
                                    <li class="nav-item">
                                        <a class="nav-link" href="select-department.html?dept=Records">Records</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="select-department.html?dept=Accounts">Accounts</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="select-department.html?dept=Out-Patient">Out-Patient</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="select-department.html?dept=In-Patient">In-Patient</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="select-department.html?dept=Laboratory">Laboratory</a>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <a class="nav-link" href="department-setup.html">
                                            <span class="navbar-toggler-icon"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                        </nav>
                    </div>
                </div>
    `

    $(".sub_menu").html(submenu)

})