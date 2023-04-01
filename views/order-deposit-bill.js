$(document).ready(function(){
    
    let submenu = `
        <div class="row align-items-center" id"modules_menu">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light" style="text-align:left">
                            
                            
    
                            <div class="navbar-collapse align-items-center"
                                id="navbarSupportedContent1" style="text-align:left; padding-left:30px; color:#000000;">
                                <ul class="navbar-nav align-items-center">
                                    <li class="nav-item">
                                        <a class="nav-link" href="order-deposit-bill.html">Order Deposit Bill</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="order-consultation.html">Order Consultation Fee</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="routine-order.html">Routine Order</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="discharge-bill.html">Order Discharge Bill</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="morgue-discharge-bill.html">Order Morgue Discharge Bill</a>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <a class="nav-link" href="dashboard.html">
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