$(document).ready(function(){

    let header = `
                    <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <a class="navbar-brand" href="index.html"> <img src="img/logo.png" alt="logo"> </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
    
                            <div class="collapse navbar-collapse main-menu-item justify-content-end"
                                id="navbarSupportedContent">
                                <ul class="navbar-nav align-items-center">
                                    <li class="nav-item dropdown" id="lab_scientist_finance_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:19px;">
                                            Laboratory
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <!--<a class="dropdown-item" href="revenue-sales-order.html" style="font-size:19px;">Item Order</a>-->
                                            <a class="dropdown-item" href="dispense-laboratory-order.html" style="font-size:19px;">Dispense Laboratory Order</a>
                                            <!--<a class="dropdown-item" href="prescription-dispensing-2.html" style="font-size:19px;">Prescription Order 2</a>-->
                                            <a class="dropdown-item" href="laboratory-request.html" style="font-size:19px;">Laboratory Order</a>
                                            <!--<a class="dropdown-item" href="view-item-order.html" style="font-size:19px;">View Item Order</a>-->
                                           <a class="dropdown-item" href="purchase-expenditure-request.html" style="font-size:19px;">Purchase/Expenditure Request</a>
                                           
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="pharmacy_finance_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:19px;">
                                            Pharmacy
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <!--<a class="dropdown-item" href="revenue-sales-order.html" style="font-size:19px;">Item Order</a>-->
                                            <a class="dropdown-item" href="prescription-dispensing.html" style="font-size:19px;">Prescription Order</a>
                                            <a class="dropdown-item" href="prescription-dispensing-2.html" style="font-size:19px;">Prescription Order 2</a>
                                            <!--<a class="dropdown-item" href="laboratory-request.html" style="font-size:19px;">Laboratory Order</a>-->
                                            <a class="dropdown-item" href="dispense-prescription-order.html" style="font-size:19px;">Dispense Pharmacy Order</a>
                                           <a class="dropdown-item" href="purchase-expenditure-request.html" style="font-size:19px;">Purchase/Expenditure Request</a>
                                           
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="doctor_hospital_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:19px;">
                                            Appointments
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="doctor-patient-list.html" style="font-size:19px;">Patient Record List</a>
                                           
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="morgue_corpse_menu">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:19px;">
                                            Mortuary
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="morgue-tracking.html" style="font-size:19px;">Records</a>
                                          
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="nurse_patient_menu">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:19px;">
                                            Patient
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="patient-tracking.html" style="font-size:19px;">Patient Tracking</a>
                                           <a class="dropdown-item" href="patient-billing.html" style="font-size:19px;">Patient Billing</a>
                                           <a class="dropdown-item" href="nurse-entry-list.html" style="font-size:19px;">Nurse Entry List</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="nurse_record_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:19px;">
                                            Vitals
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <!-- <a class="dropdown-item" href="patient-card-registration.html" style="font-size:19px;">Patient Card Registration</a>
                                            <a class="dropdown-item" href="patient-card-update.html" style="font-size:19px;">Patient Card Update</a>-->
                                            <a class="dropdown-item" href="opd-patient-vital-signs-entry.html" style="font-size:19px;">Patient Record List</a>
                                           <a class="dropdown-item" href="patient-vital-signs-entry.html" style="font-size:19px;">Patient Vital Signs Entry</a>
                                             <!-- <a class="dropdown-item" href="morgue-registration.html" style="font-size:19px;">Morgue Registration</a>
                                            <a class="dropdown-item" href="morgue-registration-update.html" style="font-size:19px;">Morgue Registration Update</a>
                                            <a class="dropdown-item" href="morgue-record-list.html" style="font-size:19px;">Morgue Record List</a>
                                            <a class="dropdown-item" href="morgue-finance-update.html" style="font-size:19px;">Morgue Finance Update</a>
                                            <a class="dropdown-item" href="morgue-finance-update-list.html" style="font-size:19px;">Morgue Finance Update List</a>-->


                                           
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="staff_account_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:19px;">
                                            Finance
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="view-item-order.html" style="font-size:19px;">View Item Order</a>
                                           <a class="dropdown-item" href="dispense-item-order.html" style="font-size:19px;">Dispense Items</a>
                                           <a class="dropdown-item" href="purchase-expenditure-request.html" style="font-size:19px;">Purchase/Expenditure Request</a>
                                           <a class="dropdown-item" href="view-accounts-list.html" style="font-size:19px;">Accounts</a>
                                            <!--<a class="dropdown-item" href="morgue-finance-update.html" style="font-size:19px;">Morgue Finance Update</a>-->
                                            <!--<a class="dropdown-item" href="morgue-finance-update-list.html" style="font-size:19px;">Morgue Finance Update List</a>-->


                                           
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="staff_record_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:19px;">
                                            Records
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                           <a class="dropdown-item" href="patient-card-registration.html" style="font-size:19px;">Patient Card Registration</a>
                                            <a class="dropdown-item" href="patient-card-update.html" style="font-size:19px;">Patient Card Update</a>
                                            <a class="dropdown-item" href="out-patient-list.html" style="font-size:19px;">Patient Record List</a>
                                            <!-- <a class="dropdown-item" href="patient-vital-signs-entry.html" style="font-size:19px;">Patient Vital Signs Entry</a>-->
                                            <a class="dropdown-item" href="record-morgue-registration.html" style="font-size:19px;">Morgue Registration</a>
                                            <a class="dropdown-item" href="morgue-registration-update.html" style="font-size:19px;">Morgue Registration Update</a>
                                            <a class="dropdown-item" href="morgue-record-list.html" style="font-size:19px;">Morgue Record List</a>
                                            <a class="dropdown-item" href="morgue-finance-update.html" style="font-size:19px;">Morgue Finance Update</a>
                                            <!--<a class="dropdown-item" href="morgue-finance-update-list.html" style="font-size:19px;">Morgue Finance Update List</a>-->


                                           
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="staff_record_account_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:19px;">
                                            Accounts
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="revenue-sales-order.html" style="font-size:19px;">Item Order</a>
                                            <a class="dropdown-item" href="dispense-item-order.html" style="font-size:19px;">Dispense Items</a>
                                           <a class="dropdown-item" href="purchase-expenditure-request.html" style="font-size:19px;">Purchase/Expenditure Request</a>
                                            
                                            <!--<a class="dropdown-item" href="morgue-finance-update.html" style="font-size:19px;">Morgue Finance Update</a>-->
                                            <!--<a class="dropdown-item" href="morgue-finance-update-list.html" style="font-size:19px;">Morgue Finance Update List</a>-->


                                           
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="administrator_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:19px;">
                                            Admin
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="add-staff.html" style="font-size:19px;">Personnel Management</a>
                                           <a class="dropdown-item" href="assign-role.html" style="font-size:19px;">Password Management</a>
                                            <a class="dropdown-item" href="salaries.html" style="font-size:19px;">Human Resource Management</a>
                                                                                        
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="records_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:19px;">
                                            Registration
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="patient-registration.html" style="font-size:19px;">Patient Registration</a>
                                            <a class="dropdown-item" href="morgue-registration.html" style="font-size:19px;">Corpse Registration</a>
                                            <!--<a class="dropdown-item" href="vital-sign-entry.html" style="font-size:19px;">Vital Signs/Health Information</a>
                                            <a class="dropdown-item" href="morgue-registration.html" style="font-size:19px;">Morgue Services</a>
                                            <a class="dropdown-item" href="order-deposit-bill.html" style="font-size:19px;">Billing</a>-->
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="patient_tracking_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:19px;">
                                            Patient Tracking
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="patient-tracking.html" style="font-size:19px;">All Patient Tracking</a>
                                           <a class="dropdown-item" href="individual-tracking.html" style="font-size:19px;">Individual Tracking</a>
                                            <a class="dropdown-item" href="department-tracking.html" style="font-size:19px;">Departmental Tracking</a>
                                            <a class="dropdown-item" href="consultant-tracking.html" style="font-size:19px;">Consultant Tracking</a>
                                        </div>
                                    </li>
                                    <li class="nav-item" id="hospital_menu">
                                        <a class="nav-link" href="records.html" style="font-size:19px;">Hospital</a>
                                    </li>
                                    <!--<li class="nav-item dropdown" id="hospital_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:19px;">
                                            Hospital
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="records.html" style="font-size:19px;">Departments</a>
                                           
                                        </div>
                                    </li>-->
                                    <!--<li class="nav-item dropdown" id="patient_menu">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:19px;">
                                            Patient
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="patient-tracking.html" style="font-size:19px;">Patient Tracking</a>
                                           <a class="dropdown-item" href="patient-billing.html" style="font-size:19px;">Patient Billing</a>
                                           <a class="dropdown-item" href="nurse-entry-list.html" style="font-size:19px;">Nurse Entry List</a>
                                        </div>
                                    </li>-->
                                    <!--<li class="nav-item dropdown" id="finance_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:19px;">
                                            Finance
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="revenue-sales-order.html" style="font-size:19px;">Item Order</a>
                                            <a class="dropdown-item" href="prescription-dispensing.html" style="font-size:19px;">Prescription Order</a>
                                            <a class="dropdown-item" href="prescription-dispensing-2.html" style="font-size:19px;">Prescription Order 2</a>
                                            <a class="dropdown-item" href="laboratory-request.html" style="font-size:19px;">Laboratory Order</a>
                                            <a class="dropdown-item" href="view-item-order.html" style="font-size:19px;">View Item Order</a>
                                           <a class="dropdown-item" href="purchase-expenditure-request.html" style="font-size:19px;">Purchase/Expenditure Request</a>
                                           <a class="dropdown-item" href="dispense-item-order.html" style="font-size:19px;">Dispense Item order</a>
                                            <a class="dropdown-item" href="dispense-prescription-order.html" style="font-size:19px;">Dispense Prescription order</a>
                                            <a class="dropdown-item" href="dispense-laboratory-order.html" style="font-size:19px;">Dispense Laboratory order</a>
                                            <a class="dropdown-item" href="view-accounts-list.html" style="font-size:19px;">Accounts</a>
                                        </div>
                                    </li>-->
                                    <li class="nav-item" id="reports_menu">
                                        <a class="nav-link" href="reports.html" style="font-size:19px;">Reports</a>
                                    </li>
                                    <li class="nav-item dropdown" id="setup_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:19px;">
                                            Setup
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="item-services-setup.html" style="font-size:19px;">Combo Setup</a>
                                           <!--<a class="dropdown-item" href="departments-items-setup.html" style="font-size:19px;">Departments/Items Setup</a>-->
                                           <a class="dropdown-item" href="item-services-registration.html" style="font-size:19px;">Item/Service Registration</a>
                                           <a class="dropdown-item" href="stock-item-dispensing.html" style="font-size:19px;">Stock/Item Dispensing</a>
                                           
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown" id="minimart_menu">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:19px;">
                                            MiniMart
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="stock.html" style="font-size:19px;">Stock</a>
                                           <a class="dropdown-item" href="item-pricing.html" style="font-size:19px;">Item Pricing</a>
                                           <a class="dropdown-item" href="purchase-sale-order.html" style="font-size:19px;">Purchase Sale Order</a>
                                           <a class="dropdown-item" href="requisition.html" style="font-size:19px;">Requisition</a>
                                        </div>
                                    </li>
                                    
                                    <li class="nav-item" id="empty_menu">
                                        <a class="nav-link" href="Doctor.html"></a>
                                    </li>
                                    <li class="nav-item dropdown" id="username_menu">
                                       
                                        <a class="nav-link dropdown-toggle"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="username" style="font-size:19px;"></a>
                                            <div class="dropdown-menu" aria-labelledby="username_item">
                                                <a class="dropdown-item" href="dashboard.html" style="font-size:19px;">Dashboard</a>
                                                <a class="dropdown-item" href="profile.html" style="font-size:19px;">Profile</a>
                                                <a class="dropdown-item" href="update-password.html" style="font-size:19px;">Update Password</a>
                                            
                                        </div>
                                    </li>
                                   
                                   
                                    <li class="d-none d-lg-block">
                                        <a class="btn_1" id="login" href="index.html" style="font-size:19px;">Login</a>
                                    </li>
                                    <li class="d-none d-lg-block">
                                        <a class="btn_1" id="logout" href="#" style="font-size:19px;">Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                    </div>
                </div>
                 <div class="sub_menu">

                </div>
                 <div class="sub_menu_items">

                </div>

            </div>
    `

    $(".main_menu").html(header)

    let submenu = `
        <div class="row align-items-center" id"modules_menu">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
    
                            <div class="collapse navbar-collapse main-menu-item justify-content"
                                id="navbarSupportedContent1">
                                <ul class="navbar-nav align-items-center">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Records
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="patient-card-registration">Patient Card Registration</a>
                                            <a class="dropdown-item" href="elements.html">Patient List</a>
                                            <a class="dropdown-item" href="elements.html">Patient Vital Signs</a>
                                            <a class="dropdown-item" href="elements.html">Morgue Registration</a>
                                            <a class="dropdown-item" href="elements.html">Morgue Record List</a>
                                            <a class="dropdown-item" href="elements.html">Morgue Finance</a>
                                        </div>
                                    </li>
                                    
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Out-Patient
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="add-staff.html">Patient List</a>
                                            <a class="dropdown-item" href="elements.html">Patient Vital Signs</a>
                                            <a class="dropdown-item" href="elements.html">Patient Consultation</a>
                                            <a class="dropdown-item" href="elements.html">Note Taking</a>
                                            <a class="dropdown-item" href="elements.html">Management Plan/Disgnosis</a>
                                            <a class="dropdown-item" href="elements.html">Prescription/Ordering</a>
                                            <a class="dropdown-item" href="elements.html">Outpatient Clinic</a>
                                            <a class="dropdown-item" href="elements.html">Admit Ward</a>
                                            <a class="dropdown-item" href="elements.html">Refer Department/Hospital</a>
                                            <a class="dropdown-item" href="elements.html">Refer Hospital</a>
                                            <a class="dropdown-item" href="elements.html">Patient Account</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            In-Patient
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="add-staff.html">In-Patient List</a>
                                            <a class="dropdown-item" href="elements.html">Patient Vital Signs</a>
                                            <a class="dropdown-item" href="elements.html">Patient Charts</a>
                                            <a class="dropdown-item" href="elements.html">Note Taking</a>
                                            <a class="dropdown-item" href="elements.html">Management Plan/Disgnosis</a>
                                            <a class="dropdown-item" href="elements.html">Prescription/Ordering</a>
                                            <a class="dropdown-item" href="elements.html">Discharged Home</a>
                                            <a class="dropdown-item" href="elements.html">Refer Department</a>
                                            <a class="dropdown-item" href="elements.html">Refer Hospital</a>
                                            <a class="dropdown-item" href="elements.html">Refer Morgue</a>
                                            <a class="dropdown-item" href="elements.html">Patient Account</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Laboratory
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="add-staff.html">Laboratory Request</a>
                                            <a class="dropdown-item" href="elements.html">Sample Collection</a>
                                            <a class="dropdown-item" href="elements.html">Test Reports</a>
                                            <a class="dropdown-item" href="elements.html">Lab Report List</a>
                                            <a class="dropdown-item" href="elements.html">Individual Full Report</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Pharmacy
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="add-staff.html">Stock List</a>
                                            <!--<a class="dropdown-item" href="elements.html">Create New User</a>-->
                                            <a class="dropdown-item" href="elements.html">Human Resource Module</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Radiology
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="add-staff.html">Add Staff</a>
                                            <!--<a class="dropdown-item" href="elements.html">Create New User</a>-->
                                            <a class="dropdown-item" href="elements.html">Human Resource Module</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Specialities
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="add-staff.html">Add Staff</a>
                                            <!--<a class="dropdown-item" href="elements.html">Create New User</a>-->
                                            <a class="dropdown-item" href="elements.html">Human Resource Module</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Morgue
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="add-staff.html">Add Staff</a>
                                            <!--<a class="dropdown-item" href="elements.html">Create New User</a>-->
                                            <a class="dropdown-item" href="elements.html">Human Resource Module</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Mini-Mart
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="add-staff.html">Add Staff</a>
                                            <!--<a class="dropdown-item" href="elements.html">Create New User</a>-->
                                            <a class="dropdown-item" href="elements.html">Human Resource Module</a>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
    `

    $("#logout").hide()
    $("#administrator_menu").hide()
    $("#patient_tracking_menu").hide()
    $("#hospital_menu").hide()
    $("#finance_menu").hide()
    $("#setup_menu").hide()
    $("#reports_menu").hide()
    $("#patient_menu").hide()
    $("#minimart_menu").hide()
    $("#username_menu").hide()
    $("#records_menu").hide()
    $("#staff_record_menu").hide()
    $("#staff_record_account_menu").hide()
    $("#staff_account_menu").hide()

    $("#nurse_patient_menu").hide()
    $("#nurse_record_menu").hide()

    $("#doctor_hospital_menu").hide()

    $("#lab_scientist_finance_menu").hide()

    $("#pharmacy_finance_menu").hide()
    $("#morgue_corpse_menu").hide()
    $("#empty_menu").show()
    // check login


    let current_year = new Date().getFullYear()
    let footer = `
                        <div class="container">
                <div class="row align-items-center">
                    <p class="footer-text m-0 col-lg-8 col-md-12"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;` + current_year + ` 
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
                    <div class="col-lg-4 col-md-12 text-center text-lg-right" style="color:#F1F1F1;">
                       All rights reserved | Designed with <i class="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Suyi Clinic</a>
                    </div>
                </div>
            </div>
    `

    $(".copyright_part").html(footer)

    let getlogin = 'getlogin'
    $.post("controllers/masterpage.php", {getlogin: getlogin}, function(data){
        if(data == "Not Logged In"){
            
            $("#login").show()
            $("#logout").hide()
            $("#username_menu").hide()
        } else {
             $("#login").hide()
            $("#logout").show()
            $("#username_menu").show()



        }
    })

    let day = new Date().getDate() 
    let month = new Date().getMonth()
    let year = new Date().getFullYear()

    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    
    let timeofday = "AM"
    hours = parseInt(hours)
    if(hours>=12){
        timeofday = "PM"
        hours = hours - 12


    }

    // get server date and time
    let getServerDateTime = "getServerDateTime"
    $.post("controllers/index.php",{getServerDateTime:getServerDateTime}, function(data){
        console.log(data)
        let fdata = JSON.parse(data)
        day = fdata.day
        month = fdata.month
        year = fdata.year
        hours = fdata.hours
        minutes = fdata.minutes
        seconds = fdata.seconds

//         let timeofday = "AM"
//         hours = parseInt(hours)
//         if(hours>=12){
//             timeofday = "PM"
//             hours = hours - 12
// 
// 
//         }

         $("#sysdate").html("Date: " + day + " " + getMonth(month) + " " + year)
         $("#systime").html("Time: " + hours + " : " + minutes + " : " + seconds) 
  
    })

   

    

    function getMonth(month){
        let monthtext = ""
        // console.log(month)
        month = parseInt(month)
        if(month===6){
            monthtext = "July"
        } else if(month===5){
            monthtext = "June"
        } else if(month===3){
            monthtext = "April"
        } else if(month===4){
            monthtext = "May"
        } else if(month===2){
            monthtext = "March"
        } else if(month===1){
            monthtext = "February"
        } else if(month==0){
            monthtext = "January"
        } else if(month===7){
            monthtext = "August"
        } else if(month===8){
            monthtext = "September"
        } else if(month===9){
            monthtext = "October"
        } else if(month===10){
            monthtext = "November"
        } else if(month===11){
            monthtext = "December"
        }

        return monthtext
    }
    let getuserdetails = "getuserdetails"
    $.post("controllers/masterpage.php", {getuserdetails:getuserdetails}, function(data){
        if(data=="Not Logged In"){
            $("#username").html(data)
            window.open("index.html")
        } else {
              data = JSON.parse(data)
                console.log(data.person)
                $("#username").html(data.person)
                $("#username_item").html(data.person)
                console.log(data)
                let systemaccounttype = data.systemaccounttype
                if(systemaccounttype.includes("Administrator")){
                    $("#logout").show()
                    $("#administrator_menu").show()
                    $("#hospital_menu").show()
                    $("#finance_menu").show()
                    $("#setup_menu").show()
                    $("#reports_menu").show()
                    $("#patient_menu").show()
                    $("#minimart_menu").show()
                    $("#username_menu").show()
                    $("#records_menu").show()
                    $("#patient_tracking_menu").show()
                    // $("#morgue_corpse_menu").show()
                    $("#empty_menu").hide()
                } 
                if(systemaccounttype.includes("Record")){
                     $("#logout").show()
                     $("#staff_record_menu").show()
                     $("#staff_record_account_menu").show()
                } 
                if(systemaccounttype.includes("Accountant")){
                     $("#logout").show()
                     $("#staff_account_menu").show()

                } 
                if(systemaccounttype.includes("Nurse")){
                    $("#logout").show()
                    $("#nurse_patient_menu").show()
                    $("#nurse_record_menu").show()

                } 
                if(systemaccounttype.includes("Doctor")){
                    $("#logout").show()
                    $("#doctor_hospital_menu").show()
                } 
                if(systemaccounttype.includes("Pharmacist")){
                    $("#logout").show()
                    $("#pharmacy_finance_menu").show()
                    

    

                } 
                if(systemaccounttype.includes("Lab Scientist")){
                    $("#logout").show()
                    $("#lab_scientist_finance_menu").show()

                } 
                if(systemaccounttype.includes("Mortician")){
                    $("#logout").show()
                    $("#morgue_corpse_menu").show()
                }
        }
      
    })

    $("#logout").on("click", function(evt){
        evt.preventDefault()
        let logoutapp = "logoutapp"
        $.post("controllers/masterpage.php", {logoutapp:logoutapp}, function(data){
            
            $(location).attr('href', "index.html")
        })
    })


})