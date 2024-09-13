import ContractForm from "../../PageObjects/SV TRV-10 Amendment.cy";
import Login from "../../PageObjects/login.cy";

describe("Contract Form Filling", () => {
  it("SV TRV-10 Amendment Form Filling", () => {
    cy.visit("https://partners.staging.jpme.fr/auth/login");

    cy.fixture("Logincredentials").then((data) => {
      const loginPage = new Login();
      
      loginPage.Email_field_assertion();
      loginPage.setuseremail(data.valid_email); // Use valid email for this test
      
      loginPage.password_field_assertion();
      loginPage.setuserpassword(data.valid_password); // Use valid password for this test
      
      loginPage.loginbtclick();
      
      // Add an assertion to verify successful login and URL change
      cy.url().should("include", "app/partners/subscription-contract");

      cy.fixture("ContractFormData").then((data) => {
        const contractFormPage = new ContractForm();

        // All fields in Step 1 of the form
        contractFormPage.amendment_Bt_assertion();
        contractFormPage.amendmentbtclick();
        
        contractFormPage.first_name_assertion();
        contractFormPage.set_firstname(data.first_name);
        
        contractFormPage.last_name_assertion();
        contractFormPage.set_lastname(data.last_name);
        
        contractFormPage.contractor_fname_assertion();
        contractFormPage.set_contractor_fname(data.contract_fname);
        
        contractFormPage.contractor_lname_assertion();
        contractFormPage.set_contractor_lname(data.contract_lname);
        
        contractFormPage.address_assertion();
        contractFormPage.set_address(data.address);
        
        contractFormPage.postalcode_assertion();
        contractFormPage.set_postalcode(data.postal_code);
        
        contractFormPage.city_assertion();
        contractFormPage.set_city(data.city);
        
        contractFormPage.user_email_assertion();
        contractFormPage.set_user_email(data.email);
        
        contractFormPage.phone_number_assertion();
        contractFormPage.set_phonenumber(data.phone_number);
        
        contractFormPage.following_bt_assertion();
        contractFormPage.following_bt_click();

        // All fields in Step 2 of the Form

        contractFormPage.set_delivery_point(data.delivery_point);

        contractFormPage.set_subscribed_power();

        contractFormPage.address_consumption_assertion();
        contractFormPage.set_address_consumption(data.address_consumption);

        contractFormPage.postal_code_assertion();
        contractFormPage.set_postal_code(data.consumption_postal_code);

        contractFormPage.consumption_city_assertion();
        contractFormPage.set_consumption_city(data.consumption_city);

        contractFormPage.set_date_collection();
        
        contractFormPage.radio_bt_step2_assertion();
        contractFormPage.set_radio_bt_step2();

        contractFormPage.following_bt_assertion();
        contractFormPage.following_bt_click();

        contractFormPage.radio_bt_step3_assertion()
        contractFormPage.set_radio_bt_step3();

        contractFormPage.following_bt_assertion();
        contractFormPage.following_bt_click();
        

      });
    });
  });
});
