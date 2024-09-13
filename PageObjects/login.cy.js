class Login{

    Email_Locator = "input[id=':R16la:-form-item']"
    Password_Locator = "input[id=':R26la:-form-item']"
    Loginbt_Locator = "button[type='submit']"


    setuseremail(useremail)
        {

            cy.get(this.Email_Locator).type(useremail)

        }

    setuserpassword(userpassword)
        {

            cy.get(this.Password_Locator).type(userpassword)
        }

    loginbtclick()
        {
            
            cy.get(this.Loginbt_Locator).click()
        }

        Email_field_assertion(){
            cy.get(this.Email_Locator).should('be.visible');
        }

        password_field_assertion(){
            cy.get(this.Email_Locator).should('be.visible');
        }

}

   
export default Login;

