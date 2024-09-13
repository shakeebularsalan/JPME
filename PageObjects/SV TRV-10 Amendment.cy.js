class ContractForm{

    AmendmentBt_Locator = "[data-testid='contract-form-clzwik98t0003kl51ir9g6cnf']"
    fname_Locator = "[name='firstname']"
    Lname_Locator = "[name='lastname']"
    Co_Contractor_fname = "[name='firstnameCocontractant2']" 
    Co_Contractor_lastname  = "[name='lastnameCocontractant2']"
    Address_Locator = "[name='address']"
    Postal_Code_Locator = "[name='postalCode']"
    City_Locator = "[name='city']"
    Email_Locator = "[name='email']"
    Phone_Locator = "[name='phone']"
    Following_Bt_Locator = ".justify-end > :nth-child(2)"
    Delivery_Point_No = "[name= 'deliveryPoints.0.deliveryPointNumber']"
    Subscribed_Power_Locator = ".grid > :nth-child(2) > .h-10"
    Address_Consumption_Site_Locator = "[name='deliveryPoints.0.address']"
    Postal_Code_Consumption_Site_Locator = "[name='deliveryPoints.0.postalCode']"
    City_Consumption_Site_Locator = "[name='deliveryPoints.0.city']"
    Drop_Down_Locator = "button[role='combobox']"
    Radio_Button_Step2 = "button[value='base']"
    Radio_Button_Step3 = "button[value='1']"
    
    
   
    amendmentbtclick()
        {
            cy.get(this.AmendmentBt_Locator).click()
        }

    set_firstname(username)
        {
            cy.get(this.fname_Locator).type(username)
        }
    set_lastname(username)
        {
            cy.get(this.Lname_Locator).type(username)
        }

    set_contractor_fname(username)
        {
            cy.get(this.Co_Contractor_fname).type(username)
        }

    set_contractor_lname(username)
        {
            cy.get(this.Co_Contractor_lastname).type(username)
        }

    set_address(useraddress)
        {
            cy.get(this.Address_Locator).type(useraddress)
        }

    set_postalcode(userpostalcode)
        {
            cy.get(this.Postal_Code_Locator).type(userpostalcode)
        }

    set_city(usercity)
        {
            cy.get(this.City_Locator).type(usercity)
        }

    set_user_email(useremail)
        {
            cy.get(this.Email_Locator).type(useremail)
        }

    set_phonenumber(userphonenumber)
        {
            cy.get(this.Phone_Locator).type(userphonenumber)
        }
    following_bt_click()
        {
            cy.get(this.Following_Bt_Locator).click()
        }

    set_delivery_point(deliveryvalue)
        {
            cy.get(this.Delivery_Point_No).type(deliveryvalue)
        }

    set_subscribed_power()
        {
            // Step 1: Click the dropdown button to open it  
            cy.get(this.Drop_Down_Locator).first().click();

            // Step 1: Click the dropdown button to open it (if necessary)
            cy.get(this.Drop_Down_Locator).first().click({ force: true }); // Force the click if pointer events are disabled

            // Step 2: Select the option from the hidden select element using { force: true }
            cy.get('select').first().select('18', { force: true }); // Replace '6' with the desired value
        }

    set_address_consumption(addressvalue)
        {
            cy.get(this.Address_Consumption_Site_Locator).type(addressvalue)
        }

    set_postal_code(postalvalue)
        {
            cy.get(this.Postal_Code_Consumption_Site_Locator).type(postalvalue)
        }

    set_consumption_city(cityvalue)
        {
            cy.get(this.City_Consumption_Site_Locator).type(cityvalue)
        }

    set_radio_bt_step2()
        {
            cy.get(this.Radio_Button_Step2).click()
        }

    set_date_collection() 
        {
            // Step 1: Click the second dropdown button to open it
            cy.get(this.Drop_Down_Locator).eq(1).click({ force: true }); // Click on the second dropdown
    
            // Step 2: Select the desired option from the second hidden select element using { force: true }
            cy.get('select').eq(1).select('5', { force: true }); // Replace '5' with the desired value for the second dropdown
        }

    set_radio_bt_step3()
        {
            cy.get(this.Radio_Button_Step3).click()
        }
    

// Assertions of all Locators that they are visible        
    amendment_Bt_assertion()
        {
            cy.get(this.AmendmentBt_Locator).should('be.visible')
        }

    first_name_assertion()
        {
            cy.get(this.fname_Locator).should('be.visible')
        }
    last_name_assertion()
        {
            cy.get(this.Lname_Locator).should('be.visible')
        }

    contractor_fname_assertion()
        {
            cy.get(this.Co_Contractor_fname).should('be.visible')
        }

    contractor_lname_assertion()
        {
            cy.get(this.Co_Contractor_lastname).should('be.visible')
        }

    address_assertion()
        {
            cy.get(this.Address_Locator).should('be.visible')
        }

    postalcode_assertion()
        {
            cy.get(this.Postal_Code_Locator).should('be.visible')
        }

    city_assertion()
        {
            cy.get(this.City_Locator).should('be.visible')
        }

    user_email_assertion()
        {
            cy.get(this.Email_Locator).should('be.visible')
        }

    phone_number_assertion()
        {
            cy.get(this.Phone_Locator).should('be.visible')
        }

    following_bt_assertion()
        {
            cy.get(this.Following_Bt_Locator).should('be.visible')
        }

    address_consumption_assertion()
        {
        cy.get(this.Address_Consumption_Site_Locator).should('be.visible')
        }

    postal_code_assertion()
        {
            cy.get(this.Postal_Code_Consumption_Site_Locator).should('be.visible')
        }

    consumption_city_assertion()
        {
            cy.get(this.City_Consumption_Site_Locator).should('be.visible')
        }

    radio_bt_step2_assertion()
        {
            cy.get(this.Radio_Button_Step2).should('be.visible')
        }

    radio_bt_step3_assertion()
        {
            cy.get(this.Radio_Button_Step3).should('be.visible')
        }
}

export default ContractForm;


