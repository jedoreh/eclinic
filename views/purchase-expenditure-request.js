$(document).ready(function(){
    
    let submenu = `
        <div class="row align-items-center" id"modules_menu">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light" style="text-align:left">
                            
                            
    
                            <div class="navbar-collapse align-items-center"
                                id="navbarSupportedContent1" style="text-align:left; padding-left:30px; color:#000000;">
                                <ul class="navbar-nav align-items-center">
                                <li class="nav-item" id="purchase_expenditure_request_menu">
                                        <a class="nav-link" href="purchase-expenditure-request.html">Purchase Expenditure Request</a>
                                    </li>
                                    <li class="nav-item" id="list_of_requisitions_menu">
                                        <a class="nav-link" href="list-of-requisitions.html">List of Requisitions</a>
                                    </li>
                                    <li class="nav-item" id="list_of_hospital_stock_menu">
                                        <a class="nav-link" href="list-of-hospital-stock.html">List of Hospital Stock</a>
                                    </li>
                                    
                                    
                                    <li class="nav-item">
                                        <a class="nav-link" href="revenue-sales-order.html">
                                            <span class="navbar-toggler-icon"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                        </nav>
                    </div>
                </div>
    `

    $(".sub_menu_items").html(submenu)

})